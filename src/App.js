import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// components
import Nav from "./components/Nav/Nav";
// import Footer from ".components/Footer/Footer";
// import Header from "./components/Header/Header";
import EditProjectForm from "./components/EditProjectForm/EditProjectForm";
// import LoginForm from "./components/LoginForm/LoginForm";
import ProjectForm from "./components/ProjectForm/ProjectForm";

// pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
// import EditProject from "./pages/EditProject/EditProject";

function App() {
  return (
    <Router>

      <section className="top">
        <Nav link rel="stylesheet" href="Nav.css" /> 
      </section>
      
      <section className="middle">
        <Routes>
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/postaproject" element={<ProjectForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/editaproject" element={<EditProjectForm />} />
        </Routes>
      </section>
      
      {/* <section className="end">
        <Footer> This is the Footer Section</Footer>
      </section> */}
      </Router>
  );
}

export default App;
