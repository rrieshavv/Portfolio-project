import "../assets/css/App.css";
import "../assets/css/Connect.css";
import { Nav } from "../components/Nav";

import mail from "../assets/images/mail-i.png";
import instagram from "../assets/images/instagram-i.png";
import linkedin from "../assets/images/linkedin-i.png";

export function Connect() {
  return (
    <div className="connect">
      <Nav />
      <form action="" className="connect-form">
        <p>Will get back to you asap!</p>
        <div className="input-box">
          <input type="text" className="p-input" placeholder="Your name" />
          <input type="email" className="p-input" placeholder="Your email" />
          <textarea placeholder="Your message" className="s-input"></textarea>
        </div>
        <input type="submit" value={"Send"} className="input-btn" />
      </form>
      <div className="or-section">
        <div className="or-header">
          <div className="line"></div>
          <div>OR</div>
          <div className="line"></div>
        </div>
      </div>
      <div className="or-text">
        <p>You can reach me out on</p>
      </div>
      <div className="or-icons">
        <a href="mailto: asrishavaf@gmail.com" target="_blank" rel="noreferrer">
            <img src={mail} alt="" />
        </a>
        <a href="https://www.instagram.com/rrieshavv/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="" />
        </a><a href="https://www.linkedin.com/in/rishavkarna/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="" />
        </a>
      </div>
    </div>
  );
}
