import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">SEvent</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Events</li>
        <li>Categories</li>
        <li>Contact</li>
      </ul>
      <button className="nav-cta">Sign In</button>
    </nav>
  );
}