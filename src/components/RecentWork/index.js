import MainContainer from "../../sub-components/MainContainer";
import projectAlison from "../../assets/alison-canavan-front.jpeg";
import projectAlisonScroll from "../../assets/alison-canavan.webp";
import projectItaliaDesign from "../../assets/italia-main.png";
import projectItaliaDesignScroll from "../../assets/italia-scroll.webp";
import projectBlackCar from "../../assets/black-car-main.png";
import projectBlackCarScroll from "../../assets/black-car-scroll.webp";
import ProjectData from "../../sub-components/ProjectData";

const RecentWork = () => {
  return (
    <MainContainer>
      <div className="recent-work-section">
        <h3>My Recent Work</h3>
        <p>Here are a few past projects I've worked on.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-10 sm:pt-12 md:pt-14 lg:pt-16 xl:pt-20">
          <div>
            <ProjectData
              mainImage={projectAlison}
              scollableImage={projectAlisonScroll}
              projectTitle={"Alison Canavan"}
            />
          </div>
          <div>
            <ProjectData
              mainImage={projectItaliaDesign}
              scollableImage={projectItaliaDesignScroll}
              projectTitle={"Italia Designs"}
            />
          </div>
          <div>
            <ProjectData
              mainImage={projectBlackCar}
              scollableImage={projectBlackCarScroll}
              projectTitle={"Black Car Chauffeur"}
            />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default RecentWork;
