import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import EditProjectForm from "../../components/EditProjectForm/EditProjectForm";


function EditProjectPage(){

        // State
        const [projectData, setProjectData] = useState();
    
        //Hooks
        const { id } = useParams();
    
    
        // network in use effect
        useEffect(() => {
    
            // fetch project info
            fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
            .then((results) => {
                return results.json();
            })
            .then((project) => {
            setProjectData(project);
            });
    
        }, []);
    
        if (!projectData) {
            return <h1>Loading...</h1>
        }

   return (
        <div>
            <EditProjectForm/>
        </div>
   )  
}

export default EditProjectPage;
