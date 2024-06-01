import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <section id="navbar">
                <div className="container navbar">
                    <div className="row">
                        <div className="col-6 ms-md-0 ms-3">
                            <NavLink to='/'><img src="../images/Uideax-logo.png" alt="React Image" /></NavLink>
                        </div>
                        <div className="col-6 ms-auto">
                            <ul className="navbar-items">
                                <li><a href="#"><NavLink to='/projects'>Portfolio</NavLink></a></li>
                                <button className="nav-btn"><NavLink to='/contact-us'><a href="#" style={{ color: 'white' }}>Contact Us</a></NavLink></button>
                            </ul>
                        </div>
                    </div>

                    {/* <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Features</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Pricing</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </nav> */}
                </div>
            </section>
        </>
    );
};

export default Navbar;
