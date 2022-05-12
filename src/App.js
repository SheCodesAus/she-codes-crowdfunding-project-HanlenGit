import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// components
import Nav from "./components/Nav/Nav";
// import EditProjectForm from "./components/EditProjectForm/EditProjectForm";

// pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import EditProject from "./pages/EditProject/EditProject";
import ProjectPost from "./pages/ProjectPost/ProjectPost";
import LoginPage from "./pages/LoginPage";
import PledgePage from "./pages/PledgePage";

function App() {
  return (
    <Router>
      
        <Nav link rel="stylesheet" href="Nav.css" /> 
  
        <Routes>
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/postaproject" element={<ProjectPost />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:id/edit" element={<EditProject />} />
          <Route path="/pledges" element={<PledgePage />} /> 
        </Routes>

    </Router>
  );
}

export default App;
