import facebook from "../assets/Icons/facebook.svg";
import instagram from "../assets/Icons/instagram.png";
import github from "../assets/Icons/github.svg";
import linkedin from "../assets/Icons/linkedin.svg";

const Social = () => {
  return (
    <>
      <a href="" className="mb-9 flex gap-2.5">
        <div>
          <img src={facebook} alt="facebook" />
        </div>
        <div>Facebook</div>
      </a>

      <a
        href="https://www.instagram.com/rrieshavv/"
        className="mb-9 flex gap-2.5"
      >
        <div>
          <img src={instagram} alt="instagram" />
        </div>
        <div>Instagram</div>
      </a>

      <a href="https://github.com/rrieshavv" className="mb-9 flex gap-2.5">
        <div>
          <img src={github} alt="github" />
        </div>
        <div>GitHub</div>
      </a>

      <a
        href="https://www.linkedin.com/in/rishavkarna/"
        className="flex gap-2.5"
      >
        <div>
          <img src={linkedin} alt="linkedin" />
        </div>
        <div>LinkedIn</div>
      </a>
    </>
  );
};

export default Social;
