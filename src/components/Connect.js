import { useRef } from "react";
import emailjs from '@emailjs/browser';

import "../assets/css/App.css";
import "../assets/css/Connect.css";
import { Nav } from "../components/Nav";

import mail from "../assets/images/mail-i.png";
import instagram from "../assets/images/instagram-i.png";
import linkedin from "../assets/images/linkedin-i.png";

export function Connect() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3c8m1jm", //service id
        "template_yd96mg7", //template id
        form.current,
        "6IS_M_wiRIjT74qD4" //public key
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Nav />
      <div className="connect">
        <form ref={form} onSubmit={sendEmail} className="connect-form">
          <p>Will get back to you asap!</p>
          <div className="input-box">
            <input
              type="text"
              name="user_name"
              className="p-input"
              placeholder="Your name"
            />
            <input
              type="email"
              name="user_email"
              className="p-input"
              placeholder="Your email"
            />
            <textarea
              name="message"
              placeholder="Your message"
              className="s-input"
            ></textarea>
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
          <a
            href="mailto: asrishavaf@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mail} alt="" />
          </a>
          <a
            href="https://www.instagram.com/rrieshavv/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/rishavkarna/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="" />
          </a>
        </div>
      </div>
      <div className="footer">
        <p className="footer-text">Copyright &copy; Rishav Karna, 2023. </p>
      </div>
    </>
  );
}
