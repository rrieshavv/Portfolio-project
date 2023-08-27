import "../assets/css/App.css";
import "../assets/css/Education.css";

import { Nav } from "./Nav";

export function Projects() {
  return (
    <>
      <Nav />
      <div className="edu">
        <div className="edu-title font-title">My Projects</div>
        <div className="edu-card">
          <p className="edu-card-title">
            Personal Portfolio Website - React.js
          </p>
          <p>Skills: React.js, HTML, CSS, JS</p>
          <p>
            <a
              href="https://github.com/rrieshavv/Portfolio-project"
              target="_blank"
              rel="noreferrer"
            >
              Visit project - GitHub
            </a>
          </p>
        </div>
        <div className="edu-card edu-card-second">
          <p className="edu-card-title">Laptop Shop System - Python</p>
          <p>Skills: Python, File handling, CLI</p>
          <p>
            <a
              href="https://github.com/rrieshavv/laptop-shop-management-system"
              target="_blank"
              rel="noreferrer"
            >
              Visit project - GitHub
            </a>
          </p>
        </div>
        <div className="edu-card">
          <p className="edu-card-title">Bankcard Management System - Java</p>
          <p>Skills: Java, OOPs</p>
          <p>
            <a
              href="https://github.com/rrieshavv/bankcard-management-system"
              target="_blank"
              rel="noreferrer"
            >
              Visit project - GitHub
            </a>
          </p>
        </div>
      </div>
      <div className="footer">
        <p className='footer-text'>Copyright &copy; Rishav Karna, 2023. </p>
      </div>
    </>
  );
}
