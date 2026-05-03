const express = require("express");
const cors = require("cors");
const { AccessToken } = require("livekit-server-sdk");

const app = express();
app.use(cors());

app.get("/get-token", async (req, res) => {
  const { room, username } = req.query;

  const at = new AccessToken("devkey", "secret", {
    identity: username || "guest",
  });

  at.addGrant({
    roomJoin: true,
    room: room,
    canPublish: true,
    canSubscribe: true,
  });

  const token = await at.toJwt();   // ✅ FIX HERE

  console.log("Generated Token:", token);

  res.json({ token });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});