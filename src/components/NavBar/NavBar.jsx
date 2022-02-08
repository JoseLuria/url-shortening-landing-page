import React from 'react';
import Logo from "../../assets/logo.svg"
import MenuLogo from "../../assets/icon-menu.svg"
import CustomButton from '../CustomButton/CustomButton';
import "./NavBar.style.scss"
import { useState } from 'react';

const NavBar = () => {
  const [toggle, setToggle] = useState("unset") 

  const handleMenu = () => {
    setToggle(toggle !== true ? true : false)
    document.body.classList.toggle("no-scroll")
  }

  return (
    <nav className="nav">
      <img className="nav-logo" src={Logo} alt="Logo" />

      <ul className={`nav-list ${toggle === "unset" && "nav-hidden"} ${toggle === false && "fade-out"}`}>
        <li className="nav-list-item">Features</li>
        <li className="nav-list-item">Pricing</li>
        <li className="nav-list-item">Resources</li>
        <hr className="nav-list-line" />
        <li className="nav-list-item">Login</li>
        <CustomButton navbar>Sign Up</CustomButton>
      </ul>

      <button className="nav-menu-button" onClick={handleMenu}>
        <img className="button-icon" src={MenuLogo} alt="Menu Icon" />
      </button>
    </nav>
  );
};

export default NavBar;
