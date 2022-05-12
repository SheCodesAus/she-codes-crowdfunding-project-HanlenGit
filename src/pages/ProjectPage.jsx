import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// styles

// Components
import PledgeUser from "../components/ProjectPageComponents/PledgeUser/PledgeUser";
import UserDetail from "../components/ProjectPageComponents/UserDetail/UserDetail";
import PledgeForm from "../components/PledgeForm/PledgeForm";



function ProjectPage() {
    // State
    const [projectData, setProjectData] = useState();
    // const [projectGoal, setProjectGoal] = useState();


    // Hooks
    const { id } = useParams()

    // Actions and Helpers
    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
          return results.json();
        })
        .then((data) => {
          setProjectData(data);
        });
    }, [id]);

    // Loading State only shows when data taking time to come up
    if (!projectData) {
      return <h3>Loading project....</h3>;
    }

    // Normal State
    return (
      // react fragment prevents divs within a div
      
      <div className="project-wrapper">
          <div className="project-title-owner">
            <h2>{projectData.title}</h2>
            <img className="img-circle" alt="Pretty-Dog" src={projectData.image} />
            <h3 className="project-page-text">Fur Baby Owned By: <UserDetail userId={projectData.owner} /></h3>
            <h3 className="project-page-text">Project Id: {projectData.id}</h3>
            <h3 className="project-page-text">Date: {projectData.date_created}</h3>
            <h3 className="project-page-text">Description: {projectData.description}</h3>
            <h3 className="project-page-text">Project Goal: ${projectData.goal}</h3>
            <h3 className="project-page-text">Pledges total: ${projectData.pledges}</h3>
      </div>
      <div>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return (
                        <PledgeUser
                        key={`pledge-${pledgeData.id}`} 
                        amount={pledgeData.amount} 
                        supporter={pledgeData.supporter} 
                        comment={pledgeData.comment}
                        pledge_date={pledgeData.date_created}
                        />
                    );
                })}
            </ul>
            <PledgeForm projectId={id}/>
        </div>
      </div> 
    );
  }

export default ProjectPage;