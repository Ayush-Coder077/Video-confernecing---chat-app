"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { Room } from "livekit-client";

export default function MeetingPage() {
  const { roomId } = useParams();
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let room: Room;

    async function start() {
      const res = await fetch(
        `http://localhost:5000/get-token?room=${roomId}&username=${Math.random()}`
      );
      const data = await res.json();

      room = new Room();

      room.on("trackSubscribed", (track) => {
        if (videoRef.current) {
          const el = track.attach();
          el.style.width = "100%";
          el.style.height = "100%";
          el.style.objectFit = "cover";
          el.style.borderRadius = "16px";
          videoRef.current.appendChild(el);
        }
      });

      await room.connect("ws://127.0.0.1:7880", data.token);
      await room.localParticipant.enableCameraAndMicrophone();

      setTimeout(() => {
        room.localParticipant.videoTrackPublications.forEach((pub) => {
          if (pub.track && videoRef.current) {
            const el = pub.track.attach();
            el.style.width = "100%";
            el.style.height = "100%";
            el.style.objectFit = "cover";
            el.style.borderRadius = "16px";
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
    <div className="page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">●</div>
        <nav className="nav">
          <button>🏠</button>
          <button>🎥</button>
          <button>💬</button>
          <button>🔔</button>
          <button>⚙️</button>
        </nav>
      </aside>

      {/* Main */}
      <main className="main">
        <header className="header">
          <div>
            <p className="date">09:50 AM, 16 June, 2025</p>
            <h1>Rebranding</h1>
          </div>
          <button className="dots">⋮</button>
        </header>

        {/* Video grid */}
        <div className="video-grid" ref={videoRef} />

        {/* Footer controls */}
        <div className="controls">
          <button>😊</button>
          <button className="end">⛔</button>
          <button>🎤</button>
          <button>📷</button>
        </div>
      </main>

      {/* Right Panel */}
      <aside className="right">
        <div className="card">
          <h3>Settings</h3>
          <div className="toggle">
            <span>Noise suppression</span>
            <input type="checkbox" defaultChecked />
          </div>
          <div className="toggle">
            <span>Video stabilization</span>
            <input type="checkbox" defaultChecked />
          </div>
          <div className="toggle">
            <span>Automatic subtitles</span>
            <input type="checkbox" />
          </div>
        </div>

        <div className="card">
          <h3>AI Summary</h3>
          <ul>
            <li>Discussed changing the communication tone</li>
            <li>Visual inspiration: Apple, Figma</li>
            <li>Design phase budget approved</li>
          </ul>
          <button className="primary">Send by email</button>
        </div>

        <div className="card">
          <div className="tabs">
            <button className="active">Participants (7)</button>
            <button>Chat</button>
          </div>
          <div className="people">
            <div className="person">Tony Ware</div>
            <div className="person">Cara Carr</div>
            <div className="person">Anisa Whitehead</div>
            <div className="person">Martina Doherty</div>
          </div>
          <button className="primary">Invite people</button>
        </div>
      </aside>

      <style jsx>{`
        .page {
          display: grid;
          grid-template-columns: 70px 1fr 320px;
          height: 100vh;
          background: #eef0f7;
          gap: 16px;
          padding: 16px;
        }
        .sidebar {
          background: #fff;
          border-radius: 16px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .logo {
          width: 36px;
          height: 36px;
          background: #2f2f4f;
          border-radius: 12px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nav button {
          border: none;
          background: #f2f3f8;
          margin: 6px 0;
          padding: 10px;
          border-radius: 12px;
          cursor: pointer;
        }
        .main {
          background: #fff;
          border-radius: 20px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .date {
          font-size: 12px;
          color: #888;
        }
        .dots {
          border: none;
          background: #f2f3f8;
          padding: 8px 12px;
          border-radius: 12px;
        }
        .video-grid {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 12px;
          background: #f6f7fb;
          padding: 12px;
          border-radius: 16px;
        }
        .controls {
          display: flex;
          justify-content: center;
          gap: 12px;
        }
        .controls button {
          border: none;
          background: #f2f3f8;
          padding: 12px 16px;
          border-radius: 999px;
        }
        .controls .end {
          background: #ff4d4f;
          color: #fff;
        }
        .right {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .card {
          background: #fff;
          border-radius: 16px;
          padding: 16px;
        }
        .toggle {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
        }
        .primary {
          width: 100%;
          border: none;
          background: #3f5efb;
          color: #fff;
          padding: 10px;
          border-radius: 999px;
          margin-top: 10px;
        }
        .tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 10px;
        }
        .tabs button {
          flex: 1;
          border: none;
          padding: 8px;
          border-radius: 999px;
          background: #f2f3f8;
        }
        .tabs .active {
          background: #3f5efb;
          color: #fff;
        }
        .people .person {
          padding: 6px 0;
          border-bottom: 1px solid #eee;
        }
      `}</style>
    </div>
  );
}