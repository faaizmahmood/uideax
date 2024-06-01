import React from "react"
import ProjectItem from "./ProjectsItem"


const MobileAppDesignJson = [
    {
        img: '../images/project-7.png',
        title: 'Product Plan',
        description: 'Own success at every turn. Uncover and deliver on opportunities that build lasting value.'

    },
    {
        img: '../images/project-8.png',
        title: 'Toulik',
        description: 'Own success at every turn. Uncover and deliver on opportunities that build lasting value.'

    },
    {
        img: '../images/project-9.png',
        title: 'Code house',
        description: 'Own success at every turn. Uncover and deliver on opportunities that build lasting value.'

    },
]




const MobileAppDesign = () => {
    return (
        <>
            <section id="MobileAppDesignProjects">
                <div className="container">
                    <div className="projectsDisplay">
                        {
                            MobileAppDesignJson.map((cur, ind) => {
                                return(
                                <ProjectItem
                                    key={ind}
                                    index = {ind}
                                    img = {cur.img}
                                    title = {cur.title}
                                    description = {cur.description}
                                />
                                )
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
}


export default MobileAppDesign