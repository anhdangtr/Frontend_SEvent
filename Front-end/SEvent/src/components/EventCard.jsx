import React from "react";
import "./Navbar.css";
// Cách 1: nếu logo nằm trong src/assets
import logo from "../assets/logo_white.png";

const Navbar = () => {
  return (
    <header className="nav">
      <div className="nav__inner">
        {/* Logo + tên web */}
        <div className="nav__logo">
          {/* Cách 1: nếu dùng import ở trên */}
          <img src={logo} alt="Sevent logo" className="nav__logo-img" /> */
          <span className="nav__logo-main">Sevent</span>
        </div>

        {/* Center links */}
        <nav className="nav__links">
          <a href="#home" className="nav__link nav__link--active">
            Home
          </a>
          <a href="#events" className="nav__link">
            Events
          </a>
          <a href="#about" className="nav__link">
            About
          </a>
          <a href="#contact" className="nav__link">
            Contact
          </a>
        </nav>

        {/* Right side: Login + Sign Up */}
        <div className="nav__auth">
          <button className="nav__login" type="button">
            Login
          </button>
          <button className="nav__signup" type="button">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
