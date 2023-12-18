import MainContainer from "../../sub-components/MainContainer";
import resumePath from "../../assets/resume.pdf"

const Header = () => {
  return (
    <MainContainer>
      <div className="header-main">
        <div className="header-logo">AG</div>
        <div className="resume-download-btn">
          <a href={resumePath} download="Aayush Gupta Resume">
            <p>RESUME</p>
          </a>
        </div>
      </div>
    </MainContainer>
  );
};
export default Header;
