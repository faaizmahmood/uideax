import React from "react";
import './Projects.css'


const ProjectsHero = () => {
    return (
        <>
            <section id="ProjectsHero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-12 text-lg-start text-center">
                            <div className="ProjectsHeroContent">
                                <h1>Our Portfolio & Work</h1>
                                <p>At UIdeax, we are proud to showcase some of the impactful projects we've undertaken for our clients. Each project represents our dedication to creativity, innovation, and delivering exceptional results.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-12 text-lg-start text-center mtlg-0 mt-4">
                            <img src="../images/About-banner.png" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectsHero