import "../../assets/css/App.css";
import "../../assets/css/Skills.css";

import Java from "../../assets/images/java.png";
import Python from "../../assets/images/python.png";
import CSharp from "../../assets/images/c-sharp.png";

import Html from '../../assets/images/html.png';
import Css from '../../assets/images/css.png';
import Js from '../../assets/images/js.png';
import Reactjs from '../../assets/images/reactjs.png';
import Net from '../../assets/images/net.png';
import Git from '../../assets/images/git.png';
import Mysql from '../../assets/images/mysql.png';

export function Languages() {
  return (
    <>
      <div className="skills-container">
        <div className="skill-box" style={{ background: "#fff" }}>
          <img src={Java} alt="Java" />
          <p className="skill-text">Java</p>
        </div>
        <div className="skill-box" style={{ background: "#ED203D" }}>
          <img src={Python} alt="python" />
          <p className="skill-text">Python</p>
        </div>
        <div className="skill-box" style={{ background: "#FCBA28" }}>
          <img src={CSharp} alt="c-sharp" />
          <p className="skill-text">C-Sharp</p>
        </div>
      </div>
      <div className="skills-responsive">
        {/* languages  */}
        <div className="skills-heading">
            <div className="skills-line"></div>
            <div>Languages</div>
            <div className="skills-line"></div>
        </div>
        <div className="skills-icons">
          <img src={Java} alt="Java" />
          <img src={Python} alt="python" />
          <img src={CSharp} alt="c-sharp" />
        </div>
        {/* frontend */}
        <div className="skills-heading">
            <div className="skills-line"></div>
            <div>Frontend</div>
            <div className="skills-line"></div>
        </div>
        <div className="skills-icons">
          <img src={Html} alt="Html" />
          <img src={Css} alt="Css" />
          <img src={Js} alt="Js" />
          <img src={Reactjs} alt="React.js" />
        </div>
        {/* backend */}
      <div className="skills-heading">
            <div className="skills-line"></div>
            <div>Bankend</div>
            <div className="skills-line"></div>
        </div>
        <div className="skills-icons">
          <img src={Net} alt="Net" />
          <img src={Java} alt="Java" />
        </div>
      {/* devops */}
      <div className="skills-heading">
            <div className="skills-line"></div>
            <div>DevOps</div>
            <div className="skills-line"></div>
        </div>
        <div className="skills-icons">
          <img src={Git} alt="Git" />
        </div>
      {/* cloud */}
      <div className="skills-heading">
            <div className="skills-line"></div>
            <div>Databases</div>
            <div className="skills-line"></div>
        </div>
        <div className="skills-icons">
          <img src={Mysql} alt="Mysql" />
        </div>
      </div>
      
    </>
  );
}
