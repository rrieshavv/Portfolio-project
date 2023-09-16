import "./App.css";
import Head from "./components/Head";
import About from "./components/About";
import Social from "./components/Social";
import Project from "./components/Project";
import Education from "./components/Education";

import me from "./assets/Icons/meh.svg";
import terminal from "./assets/Icons/terminal.svg";
import book from "./assets/Icons/book-open.svg";
import circle1 from "./assets/Icons/bxs-circle.svg.svg";
import circle2 from "./assets/Icons/bxs-circle-green.svg";
import { useState } from "react";

function App() {
  const [body, setbody] = useState("index");

  return (
    <>
      <div className="min-h-screen bg-gray-950 flex flex-col-reverse md:flex-row  justify-center gap-1 md:gap-5 pt-5">
        <div className="flex flex-col mt-5 md:mt-11 w-full md:w-10/12">
          {/* <!-- header  --> */}
          <div className="text-white bg-gray-900 font-semibold rounded px-2.5 py-3 md:py-9 mx-3 md:mx-0">
            <Head />
          </div>

          {/* nav for phone  */}

          <div className="md:hidden text-sky-500 flex justify-center gap-5 mt-10 underline ">
            <button
              onClick={() => {
                setbody("index");
              }}
            >
              About me
            </button>{" "}
            |
            <button
              onClick={() => {
                setbody("project");
              }}
            >
              Projects
            </button>{" "}
            |
            <button
              onClick={() => {
                setbody("education");
              }}
            >
              Education
            </button>
          </div>

          {/* <!-- body  --> */}
          <div className="flex flex-col w-full text-white rounded mt-5 px-2.5 py-5 lg:overflow-y-auto lg:max-h-96 ">
            {body == "index" && <About />}
            {body == "project" && <Project />}
            {body == "education" && <Education />}
          </div>
        </div>
        <div className="flex flex-col  md:gap-5">
          {/* <!-- logo --> */}
          <div className="flex mx-3 md:mx-0 justify-end">
            <img src={circle1} alt="circle" />
            <img src={circle2} alt="circle" />
          </div>
          {/* <!-- nav  --> */}
          <div className="flex flex-col text-white bg-gray-900 py-5 pl-5 pr-12 rounded md:block hidden">
            <div
              className="mb-9 flex gap-2.5 hover:cursor-pointer"
              onClick={() => {
                setbody("index");
              }}
            >
              <div>
                <img src={me} alt="me" />
              </div>
              <div>About me</div>
            </div>
            <div
              className="mb-9 flex gap-2.5 hover:cursor-pointer"
              onClick={() => {
                setbody("project");
              }}
            >
              <div>
                <img src={terminal} alt="terminal" />
              </div>
              <div>Projects</div>
            </div>
            <div
              className="flex gap-2.5 hover:cursor-pointer"
              onClick={() => {
                setbody("education");
              }}
            >
              <div>
                <img src={book} alt="book" />
              </div>
              <div>Education</div>
            </div>
          </div>
          {/* <!-- social --> */}
          <div className=" md:block hidden flex flex-col  text-white bg-gray-900 py-5 pl-5 pr-12 rounded  ">
            <Social />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
