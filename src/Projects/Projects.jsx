import React, { useState, useEffect } from "react";
import ProjectsHero from "./ProjectsHero";
import ProjectTabs from "./ProjectsTabs";
import AllProjects from "./AllProjects";
import WebsiteDesignProjects from "./WebsiteDesign";
import MobileAppDesign from "./MobileAppDesign";
import WebDevelopmentProjects from "./WebDevelopment";
import GetStarted from "../GetStarted";
import Footer from "../Footer";

const Projects = () => {

    return (

        <>
            <ProjectsHero />
            <ProjectTabs />
            <GetStarted />
            <Footer />

        </>
    )
}

export default Projects;
