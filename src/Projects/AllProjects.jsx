import React from "react"
import ProjectItem from "./ProjectsItem"
import { Outlet } from 'react-router-dom';


const AllProjectsJson = [
    {
        img: '../images/project-1.png',
        title: 'Product Plan',
        description: 'Own success at every turn. Uncover and deliver on opportunities that build lasting value.'

    },
    {
        img: '../images/project-2.png',
        title: 'Toulik',
        description: 'Own success at every turn. Uncover and deliver on opportunities that build lasting value.'

    },
    {
        img: '../images/project-3.png',
        title: 'Code house',
        description: 'Own success at every turn. Uncover and deliver on opportunities that build lasting value.'

    },
]




const AllProjects = () => {
    return (
        <>
            <section id="AllProjects">
                <div className="container">
                    <div className="projectsDisplay">
                        {
                            AllProjectsJson.map((cur, ind) => {
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


            <Outlet/>

        </>
    )
}


export default AllProjects