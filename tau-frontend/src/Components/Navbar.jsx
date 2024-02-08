import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">Tautswako Exquisite Cocktails</div>
      <ul>
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
