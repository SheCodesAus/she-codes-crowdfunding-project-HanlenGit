import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) 
    {const { projectData } = props;
    return (
        <div>
            <div className="project-card">
                <Link to={`/project/${projectData.id}`}>
                <img src={projectData.image} alt="the project"/>
                <h3>{projectData.title}</h3>
                <h3>{projectData.pledges}</h3>
                </Link>
            </div>
        </div>
    );
}
export default ProjectCard;