import React from "react";
import { Link } from "react-router-dom";
// styles
import "./ProjectCard.css";

// components


function ProjectCard( { projectData } ) {

    return (

            <div className="project-card">
                <Link to={`/project/${projectData.id}`}>
                <img src={projectData.image} alt="the project"/>
                <h3>{projectData.title}</h3>
                <h3>{projectData.pledges}</h3>
                </Link>
                <h3>{projectData.owner}</h3>
            </div>
    );
}
export default ProjectCard;