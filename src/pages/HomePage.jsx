import React from "react";
// Component
import ProjectCard from "../components/ProjectCard/ProjectCard";
// data
import { allProjects } from "../data";

function HomePage() {
    return (
        <div id="project-list">
            {allProjects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
             })}
        </div>
    );
}
export default HomePage;