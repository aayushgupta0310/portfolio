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
          <h6>Skills:</h6>
          <div className="skills-tech">
            <p>ReactJS</p>
            <p> NextJS</p>
            <p>Redux</p>
            <p>Typescript</p>
            <p>JavaScript/ES6</p>
            <p>HTML/HTML5</p>
            <p>CSS/CSS3</p>
            <p>Tailwind css</p>
            <p>UI/UX Design Principles</p>
            <p>Restful APIs</p>
            <p>Ajax</p>
            <p>Version Control System</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
