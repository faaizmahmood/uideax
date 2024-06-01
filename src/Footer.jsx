import React from "react";
import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <>

            <section id="footer">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <div className="footer-content">
                                <img src="../images/Uideax-logo.png" className="img-fluid" />
                                <h3 className="mt-4">About Us</h3>
                                <p>Welcome to UIdeax, where we specialize in crafting digital masterpieces for your brand!</p>
                                <h6>Contact Information</h6>

                                <div className='icon-list d-flex'>
                                    <i className="fa-solid fa-envelope mt-2" style={{ color: '#755ad7' }}></i>
                                    <p className='ms-3'>Info@uideax.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="footer-content-2 ps-lg-3 ps-0 mt-lg-0 mt-2">
                                <h2 className="mb-3">Quick Links</h2>
                               {/* <NavLink to='/'><p><a href="#">Home</a></p> </NavLink> */}
                               <NavLink to='/'><p>Home</p> </NavLink>
                               <NavLink to='/projects'><p>Portfolio</p></NavLink>
                               <NavLink to='/contact-us'> <p>Contact Us</p></NavLink>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="footer-content-2 ps-lg-3 ps-0 mt-lg-0 mt-3">
                                <h2 className="mb-3">Services</h2>
                                <NavLink to='/projects/website-design'><p>Website Design</p> </NavLink>
                               <NavLink to='/projects/mobile-app-design'><p>Mobile App Design</p></NavLink>
                               <NavLink to='/projects/web-development'> <p>Web Development</p></NavLink>
                            </div>
                        </div>
                        <div className="col-lg-2 col-12">
                            <div className="footer-content-3 ps-lg-3 ps-0 mt-lg-0 mt-3">
                                <h2 className="mb-4">Social Media</h2>
                                <div className='icon-list d-flex'>
                                    <i className="fa-brands fa-facebook mt-1" style={{ color: '#755ad7' }}></i>
                                    <p className='ms-3'>Facebook</p>
                                </div>
                                <div className='icon-list d-flex'>
                                    <i className="fa-brands fa-instagram mt-1" style={{ color: '#755ad7' }}></i>
                                    <p className='ms-3'>Instagram</p>
                                </div>
                                <div className='icon-list d-flex'>
                                    <i className="fa-brands fa-twitter mt-1" style={{ color: '#755ad7' }}></i>
                                    <p className='ms-3'>Twitter</p>
                                </div>
                                <div className='icon-list d-flex'>
                                    <i className="fa-solid fa-envelope mt-1" style={{ color: '#755ad7' }}></i>
                                    <p className='ms-3'>LinkedIn</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>

                <p className="copyRightText text-center">Copyright © 2024 Uideax.com All rights reserved</p>
            </section>

        </>
    )
}


export default Footer;