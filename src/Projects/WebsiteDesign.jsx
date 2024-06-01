import React from "react"
import ProjectItem from "./ProjectsItem"


const WebsiteDesignJson = [
    {
        img: '../images/project-4.png',
        title: 'Product Plan',
        description: 'Own success at every turn. Uncover and deliver on opportunities that build lasting value.'

    },
    {
        img: '../images/project-5.png',
        title: 'Toulik',
        description: 'Own success at every turn. Uncover and deliver on opportunities that build lasting value.'

    },
    {
        img: '../images/project-6.png',
        title: 'Code house',
        description: 'Own success at every turn. Uncover and deliver on opportunities that build lasting value.'

    },
]




const WebsiteDesignProjects = () => {
    return (
        <>
            <section id="WebsiteDesignProjects">
                <div className="container">
                    <div className="projectsDisplay">
                        {
                            WebsiteDesignJson.map((cur, ind) => {
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


export default WebsiteDesignProjects