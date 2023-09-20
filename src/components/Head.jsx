import briefcase from "../assets/Icons/briefcase.svg";
import map from "../assets/Icons/map-pin.svg";
import facebook from "../assets/Icons/facebook.svg";
import instagram from "../assets/Icons/instagram.png";
import github from "../assets/Icons/github.svg";
import linkedin from "../assets/Icons/linkedin.svg";

const Head = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl mb-5">Rishav Karna</h1>
        <div className="flex justify-start items-center gap-1.5 mb-2.5">
          <div>
            <img src={briefcase} alt="work" />
          </div>
          <div className="text-slate-300">Software Engineer</div>
        </div>
        <div className="flex justify-start items-center gap-1.5">
          <div>
            <img src={map} alt="" />
          </div>
          <div className="text-slate-300">Kathmandu, Nepal</div>
        </div>
      </div>
      <div className="md:hidden flex flex-col  justify-end gap-5 mr-5 ">
        <a href="">
          <img src={facebook} alt="" />
        </a>
        <a href="https://www.instagram.com/rrieshavv/">
          <img src={instagram} alt="" />
        </a>
        <a href="https://github.com/rrieshavv">
          <img src={github} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/rishavkarna/">
          <img src={linkedin} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Head;