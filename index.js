const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const path = require("path")
const app = express();
app.use(cors());
const server = createServer(app);
// const io = new Server(server );

const __dirname1 = path.resolve();
if (process.env.MODE === "production") {
  app.use(express.static(path.join(__dirname1, "frontend/build")));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname1,"frontend","dist", "index.html"))
  })
}
const io = new Server(server, {
  cors: { origin: "http://127.0.0.1:5173" },
});

let onlineUsers = [];

const addNewUser = (username, socketId) => {
  !onlineUsers.some((user) => user.username === username) &&
    onlineUsers.push({ username, socketId });
  console.log(onlineUsers);
};
// console.log(onlineUsers);

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = async(username) => {
  console.log("username get:", username);
  return await onlineUsers.find((user) => user.username === username);
};

io.on("connection", (socket) => {
  socket.on("newUser", async (username) => {
    await addNewUser(username, socket.id);
  });

  socket.on("sendNotification", async ({ senderName, receiverName, type }) => {
    // console.log("sendername :", senderName);
    // console.log("type ", type);
    // console.log("username call", receiverName);
    const reciever = await getUser(receiverName);
    // console.log(reciever.socketId);
    io.to(reciever.socketId).emit("getNotification", {
      senderName,
      type,
    });
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});

io.listen(5000);
// server.listen(3000, () => {
//   console.log("server running at http://localhost:3000");
// });
