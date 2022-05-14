import React, { useState } from "react";


// Imports
import { useNavigate } from "react-router-dom";

function EditProjectForm({project}) {
  // State
    const [editProjectData, setEditProjectData] = useState(project);

    // Actions
    const handleChange = (event) => {
        const { id, value } = event.target;
        setEditProjectData((prevEditProjectData) => ({
            ...prevEditProjectData,
            [id]: value,
        }));
    };

    const navigate = useNavigate();


    const handleSubmit = async(event) => {
        event.preventDefault();
        const token = window.localStorage.getItem("token");
        if (!token)return;

        const updatedProject = useNavigate
        if (project.title !== editProjectData.title) updatedProject.title = editProjectData.title
        if (project.description !== editProjectData.description) updatedProject.description = editProjectData.description
        if (project.goal !== editProjectData.goal) updatedProject.goal = parseInt(editProjectData.goal)
        if (project.image !== editProjectData.image) updatedProject.image = editProjectData.image
        if (project.date_created !== editProjectData.date_created) updatedProject.date_created = new Date(editProjectData.date_created).toISOString()

        if (project.title && project.description && project.goal && project.image && project.category && project.date_created) {
            try {
                const res = await 
                fetch(`${process.env.REACT_APP_API_URL}projects/${project.id}`, {
                    method:"put",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                    body: JSON.stringify({...updatedProject}),
                });
                const data = await res.json()
                console.log(data);

                navigate(`/project/${project.id}`);               
            }catch(err) {
                console.log(err);
            }
        }
    }


    return ( 
        <form>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={editProjectData.title}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    value={editProjectData.description}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="goal">Goal:</label>
                <input
                    type="number"
                    id="goal"
                    value={editProjectData.goal}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input
                    type="url"
                    id="image"
                    value={editProjectData.image}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="is_open">Open:</label>
                <input
                    type="checkbox"
                    id="is_open"
                    value={editProjectData.is_open}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="date_created">Date created:</label>
                <input
                    type="date"
                    id="date_created"
                    value={editProjectData.date_created}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>
                    Edit Project
            </button>
        </form>
        )
    }


export default EditProjectForm