import React from "react";
import './home.css'

const Hero = () => {
    return (
        <>
            <section id="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 hero-content">
                            <h1>UIdeax Bespoke Design Services for Websites!</h1>
                            <p>
                                Welcome to UIdeax, where we specialize in crafting digital masterpieces for your brand! Elevate your brand identity with our bespoke UI/UX web design, mobile app development, and dashboard design services.
                            </p>
                            <div className="hero-btn-div">
                                <button className="hero-btn"><a href="#">Contact Us</a></button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 hero-img-div">
                            <img src="../images/Uideax_Hero_Section.png" className="hero-img" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Hero;