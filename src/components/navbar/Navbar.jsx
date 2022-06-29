import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-left">
        <div className="nav-name">STEVE</div>
        <span>toggle</span>
      </div>
      <div className="nav-right">
        <div className="nav-list">
          <ul>
            <li>Home</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Services</li>
          </ul>
        </div>
        <button className="button nav-button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
