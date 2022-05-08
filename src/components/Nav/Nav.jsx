import React from "react";
import { Link } from "react-router-dom";
import Logo from '../images/Logo.jpeg';
import "./Nav.css";


function Nav() {
    return (

        <nav class="navbar navbar-expand-sm">
            <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="Link"><Link to="/">Home</Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="//codeply.com"><Link to="/login">Login</Link></a>
                        
                    </li>
                </ul>
            </div>
            <div class="mx-auto order 1">
                <a class="navbar-brand mx-auto" href="Logo"><img alt="Logo" src={Logo}></img></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                        <a class="nav-link" href="//codeply.com"><Link to="/postaproject">Post a Project</Link></a> 
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;