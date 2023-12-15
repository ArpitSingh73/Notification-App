import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { posts } from "./data.js";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { io } from "socket.io-client";
import Alert from "./components/Alert.jsx";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [socket, setSocket] = useState(null);
  console.log(user);

  useEffect(() => {
    setSocket(io("http://localhost:5000"));
  }, []);

  useEffect(() => {
    socket?.emit("newUser", user);
  }, [socket, user]);

  //  const [socket, setSocket] = useState(null);
  return (
    <>
      <div className="container">
        {user ? (
          <>
            <Navbar socket={socket}></Navbar>
            {posts.map((post) => (
              <Card
                key={post.id}
                post={post}
                socket={socket}
                user={user}
              ></Card>
            ))}

            <span className="username">{user}</span>
          </>
        ) : (
          <>
            <Alert></Alert>
            <div className="login">
              <h2>A!ert App</h2>
              <input
                type="text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <button onClick={() => setUser(username)}>Login</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
