import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProjectForm(projectData) {
  // State
  const [project, postProject] = useState(
    projectData.map
  );

  // // Hooks
  const navigate = useNavigate();

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    postProject((prevProjectData) => ({
      ...prevProjectData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = window.localStorage.getItem("token")
    console.log("handleSubmit", project, token)

    if (token && project.title  && project.image && project.description && project.goal && project.date_created) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}projects/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Token ${token}`,
            },
            body: JSON.stringify({
              title: project.title, 
              image: project.image,
              description: project.description,
              goal: parseInt(project.goal),
              pledge: project.pledge,
              is_open: project.is_open === "on",
              date_created: new Date(project.date_created).toISOString(),
          }),
          }
        );
        const data = await response.json();
        console.log(data)

        navigate(`/project/${data.id}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const formFields = [
    {
       id: "title",
       label: "Title",
       placeholder: "Enter title",
       type: "text",
    },
    {
        id: "description",
        label: "Description",
        placeholder: "Enter description",
        type: "text",
    },
    {
        id: "goal",
        label: "Goal",
        placeholder: "Enter goal",
        type: "text",
    },
    {
        id: "image",
        label: "Image",
        placeholder: "Enter image",
        type: "url",
    },
        {
       id: "is_open",
       label: "Is open",
       placeholder: "Enter if project open",
       type: "checkbox",
    },
    {
        id: "date_created",
        label: "Date created",
        placeholder: "Enter date",
        type: "date",
    },
]

    return ( 
        <form className="form-group">
          <h2 className="project-header">Start a Campaign today! </h2>
            {formFields.map((field, key) => {
                return (
                <div className="form-group" key={`${key}-${field.id}`}>
                    <label htmlFor={field.id}>
                        {field.label}
                    </label>
                    <input
                        type={field.type}
                        id={field.id}
                        placeholder={field.placeholder}
                        onChange={handleChange}
                    />
                </div>
                )
            })}
            <button type="button" className="form-button" onClick={handleSubmit}>
                Post Project
            </button>
        </form>
    )
}

export default ProjectForm;