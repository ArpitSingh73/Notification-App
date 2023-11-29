import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {posts} from "./data.js"
import './App.css'
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
 const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  console.log(user)
//  const [socket, setSocket] = useState(null);
  return (
    <>
      <div className="container">
        {user ? (
          <>
            <Navbar></Navbar>
            {posts.map((post) =>(
                <Card key={post.id} post={post}></Card> 
        ))}
           
            <span className="username">{user}</span>
          </>
        ) : (
          <div className="login">
            <h2>Lama App</h2>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={() => setUser(username)}>Login</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App
