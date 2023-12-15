import "./card.css"
import Heart from "../image/heart.svg"
import HeartFilled from "../image/heartFilled.svg"
import Comment from "../image/comment.svg"
import Share from "../image/share.svg"
import Info from "../image/info.svg"
import { useState } from "react"
const Card = ({ post, socket, user }) => {
  const [liked, setLiked] = useState(false)
  
  const handleNotification = (type) => {
    type===1 && setLiked(true)
    socket.emit("sendNotification", {
      senderName: user,
      receiverName: post.username,
      type
    });
    console.log(post.username);
  }
  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="interaction">
        {liked ? (
          <img src={HeartFilled} className="cardIcon"></img>
        ) : (
          <img
            src={Heart}
            className="cardIcon"
            onClick={() => handleNotification(1)}
          ></img>
        )}

        <img
          src={Comment}
          className="cardIcon"
          onClick={() => handleNotification(2)}
        ></img>
        {/* <img
          src={Share}
          className="cardIcon"
          onClick={() => handleNotification(3)}
        ></img> */}
        {/* <img src={Info} className="cardIcon"></img> */}
      </div>
     
    </div>
  );
};

export default Card;