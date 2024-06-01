import React from "react"
import ProjectItem from "./ProjectsItem"


const WebDevelopmentJson = [
    {
        img: '../images/project-10.png',
        title: 'Product Plan',
        description: 'Own success at every turn. Uncover and deliver on opportunities that build lasting value.'

    },
    {
        img: '../images/project-11.png',
        title: 'Toulik',
        description: 'Own success at every turn. Uncover and deliver on opportunities that build lasting value.'

    },
    {
        img: '../images/project-12.png',
        title: 'Code house',
        description: 'Own success at every turn. Uncover and deliver on opportunities that build lasting value.'

    },
]




const WebDevelopmentProjects = () => {
    return (
        <>
            <section id="WebDevelopmentProjects">
                <div className="container">
                    <div className="projectsDisplay">
                        {
                            WebDevelopmentJson.map((cur, ind) => {
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


export default WebDevelopmentProjects