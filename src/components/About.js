import "../assets/css/App.css";
import "../assets/css/About.css";

import { Nav } from "../components/Nav";
import {AboutNav} from '../components/AboutNav';
import { Footer } from "../components/Footer";


import NepalMap from "../assets/images/nepal-map.png";
import { Outlet } from "react-router-dom";

export function About() {
  return (
    <>
      <Nav />
      <div className="about">
        <div className="about-title font-title">
          Hello I Am Rishav
          <div className="full-name">Rishav Karna</div>
        </div>
        <div className="about-bio">
          <p>
            I’m a software engineer. <br /> Creating digital solutions to <br />{" "}
            today’s problem is my passion. <br />
            <span className="text-pink">I use my skills for it ;)</span>
          </p>
        </div>
        <div className="about-location font-title">
          I Am from Kathmandu, Nepal. <br />
          <img src={NepalMap} alt="Map of nepal" />
        </div>
        <div className="about-skills">
          <div className="skills-title font-title">I FED MY <br/><span className="text-pink">DEVELOPER BRAIN</span></div>
        </div>
        <AboutNav />
        <Outlet/>
      </div>
      <Footer />
    </>
  );
}
