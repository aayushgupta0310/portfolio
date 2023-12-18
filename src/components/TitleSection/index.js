import MainContainer from "../../sub-components/MainContainer";
import avatar from "../../assets/avatar.svg"
import workavatar from "../../assets/work-desktop.svg"
import aayushImage from "../../assets/aayushImage.png"

const TitleSection = () => {
    return(
        <MainContainer>
            <div className="title-section">
                <h1>Frontend Enthusiast, Developer &<br/> Technical Expert</h1>
                <p>I code beautifully simple things, and I love what I do.</p>
                <div className="avatar-image">
                    <img src={aayushImage} alt="image"/>
                </div>
                <div className="work-desktop">
                    <img src={workavatar} alt="image"/>
                </div>
            </div>
        </MainContainer>
    )
}

export default TitleSection;