import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// styles

// Components
import PledgeUser from "../components/ProjectPageComponents/PledgeUser/PledgeUser";
import ProgressBar from "../components/ProjectPageComponents/ProgressBar/ProgressBar";
import ProjectOwner from "../components/ProjectPageComponents/ProjectOwner/ProjectOwner";
import PledgeForm from "../components/PledgeForm/PledgeForm";


function ProjectPage() {
    // State
    const [projectData, setProjectData] = useState();
    const [projectGoal, setProjectGoal] = useState();


    // Hooks
    const { id } = useParams();

    // Actions and Helpers
    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
          return results.json();
        })
        .then((data) => {
          setProjectData(data);


        const projectGoal = data.goal 
        setProjectGoal(projectGoal)
        })
    }, [id]);

    // Loading State only shows when data taking time to come up
    if (!projectData) {
      return <h3>Loading project....</h3>;
    }

    // Normal State
    return (
      // react fragment prevents divs within a div
      <div className="project-wrapper">
          <div id="project-title-owner">
              <h2>{projectData.title}</h2>
              <img className="project-image" alt="Pretty-Dog" src={projectData.image} />
          </div>

          <div>
          <h3>Project Owned By: <ProjectOwner supporter={projectData.owner} /> on {projectData.date_created}</h3>
          <h3>Description: {projectData.description}</h3>
          <h3>Project Goal: {projectData.goal}</h3>
          <h3>Pledges total: {projectData.totalPledges}</h3>

          <ProgressBar completed={projectGoal} />
      <ul>
      {projectData.pledges.map((pledgeData, key) => {
          return (
          <li>
              ${pledgeData.amount} from {PledgeUser.supporter}
          </li>
          );
      })}
          </ul>
        <PledgeForm projectId={id} />
          </div>
      </div>
      
    );
  }

export default ProjectPage;