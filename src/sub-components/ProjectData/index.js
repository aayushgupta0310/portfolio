const ProjectData = ({mainImage,scollableImage,projectTitle}) => {
  return (
    <div className="projects-data">
      <div className="project-image-main">
        <img src={mainImage} alt="project-image" />
      </div>
      <div className="project-title">
        <h6>{projectTitle}</h6>
      </div>
      <div className="project-image-scroll">
        <img src={scollableImage} alt="project-scfroll" />
      </div>
    </div>
  );
};

export default ProjectData;