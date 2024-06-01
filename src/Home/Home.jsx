import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import WhyUs from "./WhyUs";
import Achievements from "./Achievements";
import Projects from "./Projects";
import Footer from "../Footer";
import GetStarted from "../GetStarted";


const Home = () => {
    return (
        <div id="home">
            <Hero />
            <Services />
            <WhyUs />
            <Achievements />
            <Projects />
            <GetStarted />
            <Footer />
        </div>
    )
}


export default Home