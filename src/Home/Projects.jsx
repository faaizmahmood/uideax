import React from "react";



const Projects = () => {
    return (
        <>
            <section id="projects">
                <div className="container">
                    <div className="projects-content">
                        <h1>Our Projects</h1>
                        <p>we are proud to showcase some of the impactful projects we've undertaken for our clients. Each project represents our dedication to creativity, innovation, and delivering exceptional results.</p>
                    </div>
                    <div className="projects-list">
                        <div className="row mt-4">
                            <div className="col-md-4 col-12">
                                <div className="project-item">
                                    <img src="../images/project-img-1.png" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-8 col-12 mt-md-0 mt-3">
                                <div className="project-item">
                                    <img src="../images/project-img-2.png" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className="row my-row mt-4">
                            <div className="col-md-8 col-12">
                                <div className="project-item">
                                    <img src="../images/project-img-3.png" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-4 col-12 mt-md-0 mt-4">
                                <div className="project-item">
                                    {/* <img src="../images/project-img-1.png" className="img-fluid"/> */}
                                    <div className="projects-box">
                                       
                                        <i className="fa-regular fa-face-smile fa-2x"></i>
                                        <h5>Projects</h5>
                                        <h4>10564</h4>
                                        <p>See All</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



export default Projects;