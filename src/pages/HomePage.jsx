import React, { useState, useEffect } from "react";
// Component
import ProjectCard from "../components/ProjectCard/ProjectCard";
// data
// import { allProjects } from "../data";
// Pages
import './HomePage.css';

function HomePage() {
// States (set the project list with our fake data for now) - useState preserves some values between function calls. 
    const [projectList, setProjectList] = useState([]);

// Action & helpers (runs the code after the render) useEffect is a hook. Telling the component to do something after render. 
    useEffect(() => {
        // go get the stuff in this URL, come back later
        fetch(`${process.env.REACT_APP_API_URL}projects`)
        .then((results) => {
        // sure when you get the data, convert into json,
        return results.json();
        })
        .then((data) => {
        // when you do tzhis set the project list. 
        setProjectList(data);
        });
    }, []);

    return (

        <div id="project-list">
        {projectList.map((projectData, key) => {
        return <ProjectCard key={key} projectData={projectData} />;
        })}
        </div>
    );
}
export default HomePage;

// To use an analogy to demonstrate async programming, consider the action of baking a cake. This action will be represented by a thread that is executing several steps (or tasks), as illustrated in code below. This code is serviceable, and you will still have a yummy cake once the method is done executing