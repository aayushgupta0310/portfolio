import MainContainer from "../../sub-components/MainContainer";
import callPng from "../../assets/call.png";
import mailPng from "../../assets/email.png";
import gitPng from "../../assets/github.png";
import linkedinPng from "../../assets/linkedin.png";
const Footer = () => {
  return (
    <div className="footer-section">
      <MainContainer>
        <div className="social-contact">
          <a href="tel:+919649012958">
            <div className="social-connect">
              <img src={callPng} alt="call" />
            </div>
          </a>
          <a href="mailto:aayushgupta0310@gmail.com">
            <div className="social-connect">
              <img src={mailPng} alt="mail" />
            </div>
          </a>
          <a href="https://github.com/aayushgupta0310" target="_blank">
            <div className="social-connect">
              <img src={gitPng} alt="git" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/aayush-gupta-4a63a5190"
            target="_blank"
          >
            <div className="social-connect">
              <img src={linkedinPng} alt="linkedin" />
            </div>
          </a>
        </div>
        <div className="header-logo text-white text-center">AG</div>
        <p>
          Living, learning, & leveling up
          <br /> one day at a time.
        </p>
      </MainContainer>
    </div>
  );
};

export default Footer;
