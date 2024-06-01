
import React from "react"

const ProjectItem=(props)=>{
    return(
        <>
            <div className="projectItem">
                <img src={props.img} className="projectImg img-fluid"/>
                <h3 >{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </>
    )
}


export default ProjectItem