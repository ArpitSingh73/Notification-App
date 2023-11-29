const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());
const server = createServer(app);
// const io = new Server(server );
const io = new Server(server, {
  cors: { origin: "http://127.0.0.1:5173" },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  console.log(socket.id);

  socket.on("disconnect", () => {
    console.log("someone has disconnected");
  });
});

io.listen(5000);
// server.listen(3000, () => {
//   console.log("server running at http://localhost:3000");
// });
