import "./navbar.css";
import Notification from "../image/notification.svg";
import Message from "../image/message.svg";
import Settings from "../image/settings.svg";
import { useEffect, useState } from "react";



const Navbar = ({ socket }) => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    socket.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);
  // console.log(notifications);

  
  const displayNotification = ({ senderName, type }) => {
    let action;

    if (type == 1) {
      action = "liked";
    } else if (action == 2) {
      action = "commented";
    } else {
      action = "shared";
    }

    return (
      <span className="notification">{`${senderName} ${action} your post`}</span>
    );
  };

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
  };

  return (
    <div className="navbar">
      <span className="logo">A!ert App</span>
      <div className="icons">
        <div className="icon" onClick={() => setOpen(!open)}>
          <img src={Notification} className="iconImg"></img>
          {notifications.length > 0 && (
            <div className="counter">{(notifications.length)/2}</div>
          )}
        </div>

        <div className="icon" onClick={() => setOpen(!open)}>
          <img src={Message} className="iconImg"></img>
        </div>

        {/* <div className="icon" onClick={() => setOpen(!open)}>
          <img src={Settings} className="iconImg"></img>
        </div> */}
      </div>
      {open && (
        <div className="notifications">
          {notifications.map((n) => displayNotification(n))}
          <button className="nButton" onClick={handleRead}>
            Mark as read
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
