import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// components 
import ProjectOwner from "../components/ProjectPageComponents/ProjectOwner/ProjectOwner";

function ProjectPage() {
    // State
    const [projectData, setProjectData] = useState({ pledges: []});
    // Hooks grabs the info
    const { id } = useParams();

    // Actions and Helpers 
    useEffect(() => {
        // go get the stuff in this URL, come back later
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
        // sure when you get the data, convert into json,
        return results.json();
        })
        .then((data) => {
        // when you do this set the project list. 
        setProjectData(data);
        });
    }, [id]);

    // Loading State
    if (!projectData) {
        return <h3>Loading Data</h3>
    }

    // normal state
    return (
        // react fragment prevents divs within a div
        <div className="project-wrapper">
            <div id="project-title-owner">
                <h2>{projectData.title}</h2>
                <h3>Invented by: <ProjectOwner owner={ProjectOwner} /> on {projectData.date_created}</h3>
            </div>

        <div>
            <h2>{projectData.title}</h2>
            <h3>Created at: {projectData.date_created}</h3>
            <h3>{`Status: ${projectData.is_open}`}</h3>
            <h3>Pledges:</h3>
        <ul>
        {projectData.pledges.map((pledgeData, key) => {
            return (
            <li>
                ${pledgeData.amount} from {pledgeData.supporter}
            </li>
            );
        })}
            </ul>
            </div>
        </div>
    );
}
 
export default ProjectPage;