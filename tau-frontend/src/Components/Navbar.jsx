import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="navbar-container text-light">
      <div className="navbar-logo">Tautswako Exquisite Cocktails</div>
      <ul id="main-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About-us">About Us</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>

        <li>
          <Link to="/Events">Events</Link>
        </li>
        <li>
          <Link to="/Quote">Quote</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <button
        className="btn btn-primary open-close-button"
        onClick={toggleSidebar}
      >
        {showSidebar ? "Close" : "Open"}
      </button>

      <ul className={`sidebar-${showSidebar ? "active" : "inactive"}`}>
        <button className="btn btn-primary" onClick={toggleSidebar}>
          Close
        </button>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About-us">About Us</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li>
          <Link to="/Events">Events</Link>
        </li>
        <li>
          <Link to="/Quote">Quote</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
