import "../assets/css/App.css";
import "../assets/css/Home.css";

import img2 from "../assets/images/home-2.png";
import img1 from "../assets/images/home-1.png";
import { Link } from "react-router-dom";

export function Home({ name, role, bio_line_1, bio_line_2 }) {
  return (
    
    <div className="hero">
      <div className="hero-left">
        <div className="hero-title font-title">
          Welcome, <br />
          I'm {name}
        </div>
        <p className="role">{role}</p>
        <p className="bio">
          {bio_line_1}
          <br />
          {bio_line_2}
        </p>
        <Link to="/Connect">
        <button className="hire-btn">Hire me right away</button>

        </Link>
      </div>
      <div className="hero-right">
        <img src={img2} alt="big brain" />
        <img className="coder-icon" src={img1} alt="coder"/>
      </div>
    </div>
  );
}
