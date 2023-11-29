import "./card.css"
import Heart from "../image/heart.svg"
import HeartFilled from "../image/heartfilled.svg"
import Comment from "../image/comment.svg"
import Share from "../image/share.svg"
import Info from "../image/info.svg"
import { useState } from "react"
const Card = ({ post }) => {
  const[liked, setLiked] = useState(true)
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
          <img src={Heart} className="cardIcon"></img>
        )}

        <img src={Comment} className="cardIcon"></img>
        <img src={Share} className="cardIcon"></img>
        <img src={Info} className="cardIcon"></img>
      </div>
    </div>
  );
};

export default Card;