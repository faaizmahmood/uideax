import React from "react";



const GetStarted = () => {
    return (
        <>


            <section id="get-started">
                <div className="container get-started-container">
                    <div className="row row-reverse-class">
                        <div className="col-lg-6 col-12">
                            <div className="get-started-content">
                                <h1>Ready to <br />
                                    Get Started </h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod temer.</p>
                                <button><a href="#">Get Started</a></button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <img src="../images/get-started-image.png" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


export default GetStarted;