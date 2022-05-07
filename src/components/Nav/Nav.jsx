import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


function Nav() {
    return (
        
            <div className="nav-container">
                <li className="nav-link">
                <Link to="/">Home</Link>
                </li>
                <li className="nav-link">
                <Link to="/owner">Login</Link>
                </li>
                <li className="nav-link">
                <Link to="/postaproject">Post a Project</Link>
                </li>
        </div>
    );
}

export default Nav;