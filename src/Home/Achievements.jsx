import React from "react";


const AchievementsBox = (props) => {
    return (
        <>
            <div className="AchievementsBoxItem">
                {/* {props.icon} */}
                <i className="fa-regular fa-face-smile fa-2x"></i>
                <h5>{props.title}</h5>
                <h4>{props.count}</h4>
            </div>
        </>
    )
}


const Achievements = () => {
    return (
        <>
            <section id="Achievements">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="Achievements-content">
                                <h2>Our Achievements</h2>
                                <p>At UIdeax, we take pride in our accomplishments and the success stories we've created with our clients. Here are some highlights of our achievements:</p>
                                <h4>Long-Term Partnerships</h4>
                                <p>Many of our clients continue to partner with us for their ongoing design needs, demonstrating the trust and confidence they have in our expertise and capabilities.</p>
                                <h4>Global Reach</h4>
                                <p>We have successfully served clients from various industries and geographical locations, establishing ourselves as a trusted design agency with a global footprint.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 mt-md-0 mt-4">
                            <div className="row">
                                <div className="col-md-6 col-12 text-center">
                                    <img src="../images/clouds.png" className="mb-md-0 mb-5" style={{ width: '80%', marginBottom: '20px', marginLeft: '3px' }}/>
                                    <AchievementsBox
                                        icon="fa-face-smile"
                                        title="Projects"
                                        count="10564+"
                                    />
                                </div>
                                <div className="col-md-6 col-12 mt-md-0 mt-4">
                                    <AchievementsBox
                                        icon="fa-face-smile"
                                        title="Consultant"
                                        count="125+"
                                    />
                                </div>
                            </div>
                            <div className="row seond_row">
                                <div className="col-md-6 col-12 text-center">
                                    <AchievementsBox
                                        icon="fa-face-smile"
                                        title="Projects"
                                        count="10564+"
                                    />
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="spec_box">
                                        <AchievementsBox
                                            icon="fa-face-smile"
                                            title="Consultant"
                                            count="125+"
                                        />
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



export default Achievements;