import React from "react";
import { Link } from "react-router-dom";
// styles
import "./ProjectCard.css";

// components
import "../PledgeForm/PledgeForm";
import "../ProjectForm/ProjectForm";


function ProjectCard( { projectData } ) {

    return (

            <div className="project-card">
                <Link to={`/project/${projectData.id}`}>
                <img src={projectData.image} alt="the project"/>
                <h3 className="project-card-text">{projectData.title}</h3>
                <h3 className="project-card-text">{projectData.pledges}</h3>
                </Link>
            </div>
    );
}
export default ProjectCard;