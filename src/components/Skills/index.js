import codeSvg from "../../assets/code.svg";

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="skills-title">
        <div className="code-image">
          <img src={codeSvg} alt="image" />
        </div>
        <h3>Frontend Developer</h3>
        <h5>
          I like to code things from scratch,
          <br /> and enjoy bringing ideas to life in the browser.
        </h5>
        <div className="languages">
          <h6>Languages I speak:</h6>
          <p>
            ReactJS, NextJS, Redux, Typescript, JavaScript/ES6, HTML/HTML5,
            CSS/CSS3, Tailwind css, UI/UX Design Principles, Restful APIs,
            Ajax and Version Control System
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
