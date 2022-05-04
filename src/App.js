import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// components
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";

// pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <Router>

    <section className="top">
      <Nav link rel="stylesheet" href="Nav.css" /> 
      <Header link rel="stylesheet" href="Header.css" />
      </section>
      
      <section className="middle">
        <Routes>
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </section>

      </Router>

  );
}

export default App;
