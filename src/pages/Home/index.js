import React from "react";
import Header from "../../components/Header";
import TitleSection from "../../components/TitleSection";
import About from "../../components/About";
import Skills from "../../components/Skills";
import RecentWork from "../../components/RecentWork";
import Footer from "../../components/Footer";
const Home = () => {
    return(
        <div>
           <Header/>
           <TitleSection/>
           <About/>
           <Skills/>
           <RecentWork/>
           <Footer/>
        </div>
    )
}

export default Home;