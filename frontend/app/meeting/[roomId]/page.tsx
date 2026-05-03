"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { Room } from "livekit-client";

export default function MeetingPage() {
  const { roomId } = useParams(); // ✅ correct way

  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let room: Room;

    async function start() {
      const res = await fetch(
        `http://localhost:5000/get-token?room=${roomId}&username=${Math.random()}`
      );
      const data = await res.json();

      room = new Room();

      // 🔥 Listen for tracks
      room.on("trackSubscribed", (track) => {
        if (videoRef.current) {
          const el = track.attach();
          el.style.width = "300px";
          el.style.margin = "10px";
          videoRef.current.appendChild(el);
        }
      });

      await room.connect("ws://127.0.0.1:7880", data.token);

      await room.localParticipant.enableCameraAndMicrophone();

      // 🔥 Show local video
      setTimeout(() => {
        room.localParticipant.videoTrackPublications.forEach((pub) => {
          if (pub.track && videoRef.current) {
            const el = pub.track.attach();
            el.style.width = "300px";
            el.style.margin = "10px";
            videoRef.current.appendChild(el);
          }
        });
      }, 500);
    }

    if (roomId) start();

    return () => {
      if (room) room.disconnect();
    };
  }, [roomId]);

  return (
   
<div
  ref={videoRef}
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "10px",
    padding: "10px",
  }}
/>
  )}