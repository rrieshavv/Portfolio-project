import { useState } from "react";
import "../assets/css/App.css";
import "../assets/css/Nav.css";

import Menu from "../assets/images/bx-menu.svg.png";

import { Link } from "react-router-dom";

export function Nav() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
      <nav className="nav-primary">
        <ul className="nav-ul">
          <li className="nav-li">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/About" className="link">
              About me{" "}
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/Education" className="link">
              Education
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/Projects" className="link">
              Projects
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/Connect" className="link">
              Connect
            </Link>
          </li>
        </ul>
      </nav>
      <div className="nav-secondary">
        <img src={Menu} alt="Menu" onClick={toggleDropdown} />
      </div>
      {showDropdown && (
        <div className="res-nav" id="dropdown">
          <ul className="nav-ul">
            <li className="nav-li">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="nav-li">
              <Link to="/About" className="link">
                About me{" "}
              </Link>
            </li>
            <li className="nav-li">
              <Link to="/Education" className="link">
                Education
              </Link>
            </li>
            <li className="nav-li">
              <Link to="/Projects" className="link">
                Projects
              </Link>
            </li>
            <li className="nav-li">
              <Link to="/Connect" className="link">
                Connect
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
