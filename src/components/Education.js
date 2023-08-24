import "../assets/css/App.css";
import "../assets/css/Education.css";

import { Nav } from "../components/Nav";

export function Education() {
  return (
    <>
      <Nav />
      <div className="edu">
        <div className="edu-title font-title">My Education</div>
        <div className="edu-card">
          <p className="edu-card-title">
            Bachelor of Science (Hons) in Computing
          </p>
          <p>London Metropolitan University</p>
          <p>Nov 2022 - 2025 (Expected)</p>
        </div>
        <div className="edu-card edu-card-second">
          <p className="edu-card-title">High School Education - NEB</p>
          <p>St. Xavier’s School, Jawalakhel</p>
          <p>Graduated Sept 2022</p>
        </div>
        <div className="certf">
          <div className="certf-title font-title">My Certifications</div>
          <div className="edu-card">
            <p className="edu-card-title">
              AWS Cloud Quest: Cloud Practitioner
            </p>
            <p>Amazon Web Services (AWS)</p>
            <p>
                
              <a
                href="https://www.credly.com/badges/dba0c817-d2ff-4028-bd40-8ffc604e91ef"
                target="_blank"
                rel="noreferrer"
              >
                Click here{" "}
              </a>
            </p>
          </div>
          <div className="edu-card edu-card-second">
            <p className="edu-card-title">Developing ASP.NET MVC Web App</p>
            <p>LinkedIn Learn</p>
            <p>
                <a href="https://drive.google.com/file/d/1WtTqItR13U-PM0hUHX1f-DYmtVChkeQg/view" target="_blank"
                rel="noreferrer">
                  Click here
                </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
