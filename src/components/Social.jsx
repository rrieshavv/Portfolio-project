import facebook from "../assets/Icons/facebook.svg";
import instagram from "../assets/Icons/instagram.png";
import github from "../assets/Icons/github.svg";
import linkedin from "../assets/Icons/linkedin.svg";

const Social = () => {
  return (
    <>
      <div className="mb-9 flex gap-2.5">
        <a href="">
          <div>
            <img src={facebook} alt="facebook" />
          </div>
          <div>Facebook</div>
        </a>
      </div>
      <div className="mb-9 flex gap-2.5">
        <a href="https://www.instagram.com/rrieshavv/">
          <div>
            <img src={instagram} alt="instagram" />
          </div>
          <div>Instagram</div>
        </a>
      </div>
      <div className="mb-9 flex gap-2.5">
        <a href="https://github.com/rrieshavv">
          <div>
            <img src={github} alt="github" />
          </div>
          <div>GitHub</div>
        </a>
      </div>
      <div className="flex gap-2.5">
        <a href="https://www.linkedin.com/in/rishavkarna/">
          <div>
            <img src={linkedin} alt="linkedin" />
          </div>
          <div>LinkedIn</div>
        </a>
      </div>
    </>
  );
};

export default Social;
