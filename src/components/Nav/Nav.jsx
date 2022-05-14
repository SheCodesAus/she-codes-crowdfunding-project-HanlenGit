import React from "react";
import { Link } from "react-router-dom";
import Logo from '../images/Logo.jpeg';
import "./Nav.css";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


function Nav() {    
    return (
        <nav className="nav-bar">
            <img id="logo" href="Logo" alt="Logo" src={Logo}></img>
            <div>
                <Link id="nav-link" href="Link" className="button" to="/">Home</Link>
                <Link id="nav-link" href="Link" className="button" to="/login">Login</Link>
                <Link id="nav-link" href="Link" className="button" to="/postaproject">Post a Project</Link>
            </div>
        </nav>
    );
}

export default Nav;