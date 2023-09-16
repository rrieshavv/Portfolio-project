import facebook from "../assets/Icons/facebook.svg";
import instagram from "../assets/Icons/instagram.png";
import github from "../assets/Icons/github.svg";
import linkedin from "../assets/Icons/linkedin.svg";

const Social = () => {
  return (
    <>
      <div className="mb-9 flex gap-2.5">
        <div>
          <img src={facebook} alt="facebook" />
        </div>
        <div>
          <a href="">Facebook</a>
        </div>
      </div>
      <div className="mb-9 flex gap-2.5">
        <div>
          <img src={instagram} alt="instagram" />
        </div>
        <div>
          <a href="">Instagram</a>
        </div>
      </div>
      <div className="mb-9 flex gap-2.5">
        <div>
          <img src={github} alt="github" />
        </div>
        <div>
          <a href="">GitHub</a>
        </div>
      </div>
      <div className="flex gap-2.5">
        <div>
          <img src={linkedin} alt="linkedin" />
        </div>
        <div>
          <a href="">LinkedIn</a>
        </div>
      </div>
    </>
  );
};

export default Social;
