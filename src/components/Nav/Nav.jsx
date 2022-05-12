import React from "react";
import { Link } from "react-router-dom";
import Logo from '../images/Logo.jpeg';
import "./Nav.css";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


function Nav() {    
    const hamburger = document.querySelector('.hamburger');
    const navLink = document.querySelector('.nav__link');

    // hamburger.addEventListener('click', () => {
//         navLink.classList.toggle('hide');
// });
    return (
        <nav className="nav-bar">
            <a id="logo" href="Logo"><img alt="Logo" src={Logo}></img></a>
            <div className="hamburger">
                <span className="line" href="Link"><Link to="/">Home</Link></span>
                <span className="line" href="Link"><Link to="/login">Login</Link></span>
                <span className="line" href="Link"><Link to="/postaproject">Post a Project</Link></span>
            </div>
            <div>
                <a className="nav-link" href="Link"><Link class="button" to="/">Home</Link></a> 
                <a className="nav-link" href="Link"><Link class="button" to="/login">Login</Link></a>
                <a className="nav-link" href="Link"><Link class="button" to="/postaproject">Post a Project</Link></a> 
            </div>
        </nav>
    );
}

export default Nav;