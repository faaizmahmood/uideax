import React from 'react'
import './Contact.css'


const ContactFrom = () => {
    return (
        <>

            <section className='contact-form'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 col-12'>
                            <h2 className='mb-3'>Get in Touch</h2>
                            <div className='icon-list d-flex'>
                                <i className="fa-solid fa-phone mt-2" style={{ color: '#755ad7' }}></i>
                                <p className='ms-3'>+44 7535 528845</p>
                            </div>
                            <div className='icon-list d-flex'>
                                <i className="fa-solid fa-envelope mt-2" style={{ color: '#755ad7' }}></i>
                                <p className='ms-3'>Info@uideax.com</p>
                            </div>
                            <div className='icon-list d-flex'>
                                <i className="fa-solid fa-location-pin mt-2" style={{ color: '#755ad7' }}></i>
                                <p className='ms-3'>Lahore, Punjab, Pakistan</p>
                            </div>

                            <div className='map mt-4'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13633.652002216384!2d74.37099999052026!3d31.31996538718261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919a8b96acc8637%3A0xdbb4a544112a214e!2sCentral%20Park%20Housing%20Scheme%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1713877001231!5m2!1sen!2s" width="450" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className='col-lg-7 col-12 ps-lg-5 ps-2 mt-lg-0 mt-4'>
                            <form id='contact-form-container'>
                                <div className="row ">
                                    <div className="col">
                                        <label class="mr-sm-2" >Full Name</label>
                                        <input type="text" className="form-control mt-2" placeholder="Write your full name" />
                                    </div>
                                    <div className="col">
                                        <label class="mr-sm-2" >Email Address</label>
                                        <input type="email" className="form-control mt-2" placeholder="Enter a valid email address" />
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col">
                                        <label class="mr-sm-2" >Phone Number</label>
                                        <input type="text" className="form-control mt-2" placeholder="Enter a active phone number" />
                                    </div>
                                    <div className="col">
                                        <label class="mr-sm-2">Company Name</label>
                                        <input type="email" className="form-control mt-2" placeholder="Enter full company name" />
                                    </div>
                                </div>
                                <div class="form-group mt-4">
                                    <label for="exampleFormControlTextarea1">Description</label>
                                    <textarea class="form-control mt-2" id="exampleFormControlTextarea1" rows="9" placeholder='Write a detailed description about your project'></textarea>
                                </div>
                                <div className='submit-btn text-end mt-4'>
                                    <button>Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>


        </>
    )
}



export default ContactFrom;