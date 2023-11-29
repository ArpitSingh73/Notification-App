import "./navbar.css"
import Notification from "../image/notification.svg"
import Message from "../image/message.svg";
import Settings from "../image/settings.svg";
const  Navbar = () => {
    return (
      <div className="navbar">
        <span className="logo">App</span>
        <div className="icons">
          <div className="icon">
            <img src={Notification} className="iconImg"></img>
            <div className="counter">2</div>
          </div>

          <div className="icon">
            <img src={Message} className="iconImg"></img>
            <div className="counter">2</div>
          </div>

          <div className="icon">
            <img src={Settings} className="iconImg"></img>
            <div className="counter">2</div>
          </div>
        </div>
      </div>
    );
}
 
export default Navbar