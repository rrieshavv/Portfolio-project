import java from "../assets/Icons/java.png";
import python from "../assets/Icons/python.png";
import js from "../assets/Icons/js.png";
import react from "../assets/Icons/react.png";
import html from "../assets/Icons/html.png";
import css from "../assets/Icons/css3.png";
import tailwind from "../assets/Icons/tailwind.png";
import node from "../assets/Icons/node.png";
import express from "../assets/Icons/express.png";
import mongodb from "../assets/Icons/mongodb.png";
import mysql from "../assets/Icons/mysql.png";
import aws from "../assets/Icons/aws.png";
import git from "../assets/Icons/git.png";

const About = () => {
  return (
    <>
      <div className="flex flex-col">
        <h3 className="text-2xl font-semibold mb-5">Languages</h3>
        <div className="flex gap-10 overflow-x-auto">
          <div className="flex flex-col gap-2">
            <div className="flex w-52 justify-center p-5 border rounded border-blue-900 shadow-lg hover:shadow-blue-800 transition duration-300 ease-in-out">
              <img src={java} alt="java" />
            </div>
            <p>Java</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex w-52 justify-center p-5 border rounded border-blue-900 shadow-lg hover:shadow-blue-800 transition duration-300 ease-in-out">
              <img src={python} alt="python" />
            </div>
            <p>Python</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex w-52 justify-center p-5 border rounded border-blue-900 shadow-lg hover:shadow-blue-800 transition duration-300 ease-in-out">
              <img src={js} alt="javascript" />
            </div>
            <p>JavaScript</p>
          </div>
        </div>
      </div>
      {/* <!-- frontend --> */}
      <div className="flex flex-col  ">
        <h3 className="text-2xl font-semibold mt-5 mb-5">Frontend</h3>
        <div className="flex gap-10   overflow-x-auto">
          <div className="flex flex-col gap-2">
            <div className="flex w-52 p-5 gap-10 border rounded border-blue-900 shadow-lg hover:shadow-blue-800 transition duration-300 ease-in-out">
              <img src={html} alt="html" />
              <img src={css} alt="css" />
            </div>
            <p>HTML, CSS</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex w-52 p-5 gap-10 border rounded border-blue-900 shadow-lg hover:shadow-blue-800 transition duration-300 ease-in-out">
              <img src={tailwind} alt="tailwind" />
            </div>
            <p>TailwindCSS</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex w-52 p-5 gap-10 border rounded border-blue-900 shadow-lg hover:shadow-blue-800 transition duration-300 ease-in-out">
              <img src={js} alt="javascript" />
              <img src={react} alt="react" />
            </div>
            <p>JavaScript, ReactJs</p>
          </div>
        </div>
      </div>
      {/* <!-- backend --> */}
      <div className="flex flex-col ">
        <h3 className="text-2xl font-semibold mt-5 mb-5">Backend</h3>

        <div className="flex gap-10   overflow-x-auto">
          <div className="flex flex-col gap-2">
            <div className="flex w-52 justify-center p-5 border rounded border-blue-900 shadow-lg hover:shadow-blue-800 transition duration-300 ease-in-out">
              <img src={node} alt="node" />
            </div>
            <p>NodeJs</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex w-52 justify-center p-5 border rounded border-blue-900 shadow-lg hover:shadow-blue-800 transition duration-300 ease-in-out">
              <img src={express} alt="express" />
            </div>
            <p>ExpressJs</p>
          </div>
        </div>
      </div>
      {/* <!-- database --> */}
      <div className="flex flex-col ">
        <h3 className="text-2xl font-semibold mt-5 mb-5">Database</h3>

        <div className="flex gap-10   overflow-x-auto">
          <div className="flex flex-col gap-2">
            <div className="flex w-52 justify-center p-5 border rounded border-blue-900 shadow-lg hover:shadow-blue-800 transition duration-300 ease-in-out">
              <img src={mongodb} alt="mongodb" />
            </div>
            <p>MongoDb</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex w-52 justify-center p-5 border rounded border-blue-900 shadow-lg hover:shadow-blue-800 transition duration-300 ease-in-out">
              <img src={mysql} alt="mysql" />
            </div>
            <p>MySQL</p>
          </div>
        </div>
      </div>
      {/* <!-- devops --> */}
      <div className="flex flex-col ">
        <h3 className="text-2xl font-semibold mt-5 mb-5">Others</h3>

        <div className="flex gap-10   overflow-x-auto">
          <div className="flex flex-col gap-2">
            <div className="flex w-52 justify-center p-5 border rounded border-blue-900 shadow-lg hover:shadow-blue-800 transition duration-300 ease-in-out">
              <img src={aws} alt="aws" />
            </div>
            <p>Amazon Web Services</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex w-52 justify-center p-5 border rounded border-blue-900 shadow-lg hover:shadow-blue-800 transition duration-300 ease-in-out">
              <img src={git} alt="git" />
            </div>
            <p>Git</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
