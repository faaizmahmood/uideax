import React from "react";


const ServicesItem = (props) => {
    return (
        <>
            <div className="servicesItem">
                <img src={props.img} />
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </>
    )
}


const Services = () => {
    return (
        <>

            <section id="services">
                <div className="container">
                    <div className="services-content">
                        <h1>Our Services!</h1>
                        <p>Welcome to UIdeax – Your Premier Design Agency. At UIdeax, we are passionate about transforming ideas into visually stunning and functional digital experiences.</p>
                    </div>
                    <div className="services-Items">
                        <ServicesItem
                            key='1'
                            img='../images/Website-Design.png'
                            title='Website Design'
                            description="Enhance your online presence with our creative and functional web design solutions. Customized designs that reflect your brand's personality and values."
                        />
                        <ServicesItem
                            key='2'
                            img='../images/Mobile-App-Design.png'
                            title='Mobile App Design'
                            description="Transform your app ideas into stunning designs with our mobile app design expertise. Design for iOS, Android, and cross-platform."
                        />
                        <ServicesItem
                            key='3'
                            img='../images/Graphics-Design.png'
                            title='Graphics Design'
                            description="Elevate your brand with eye-catching graphics that leave a lasting impression.Logo design, branding materials, marketing collateral, and more."
                        />
                        <ServicesItem
                            key='4'
                            img='../images/WordPress-Development.png'
                            title='WordPress Development'
                            description="Leverage the power of WordPress with our expert development services.Custom WordPress themes, plugins, and functionalities tailored to your needs."
                        />
                        <ServicesItem
                            key='5'
                            img='../images/Front-end-Development.png'
                            title='Front-end Development'
                            description="Enhance user experience with responsive and interactive front-end development. Customized solutions to improve website functionality and engagement."
                        />
                        <ServicesItem
                            key='6'
                            img='../images/SEO.png'
                            title='SEO'
                            description="Own success at every turn. Uncover and deliver on opportunities that build lasting value."
                        />
                    </div>
                </div>
            </section>

        </>
    )
}



export default Services;