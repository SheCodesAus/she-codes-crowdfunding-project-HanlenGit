import React from "react";
import './Header.css'
import Logo from '../images/Logo.jpeg';

function Header() {
    return (
        <div className="header-section">
        <img className="header-logo" src={Logo}></img>
        </div>
    )
};

export default Header;