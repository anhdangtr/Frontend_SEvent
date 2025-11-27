import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LOGO – click to Go Home */}
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <img src="src/assets/official_logo_white.png" alt="Logo" />
          </Link>
        </div>

        {/* Centered Nav Links */}
        <ul className="nav-links">
          <li>
            <Link
              to="/"
              className={`nav-link-item ${currentPath === "/" ? "active" : ""}`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={`nav-link-item ${currentPath === "/about" ? "active" : ""}`}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className={`nav-link-item ${currentPath === "/contact" ? "active" : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Login / Signup Buttons */}
        <div className="auth-buttons">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
