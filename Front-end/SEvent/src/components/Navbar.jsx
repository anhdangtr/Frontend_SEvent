import React, { useState } from "react";
import "./Navbar.css";  // Import the corresponding CSS file

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);  // Toggle login/logout state
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/path/to/your-uploaded-image.png" alt="Event Logo" className="navbar-logo-img" />
        <span className="navbar-logo-text">Sevent</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="navbar-auth">
        <button onClick={handleLoginLogout} className="navbar-auth-btn">
          {isLoggedIn ? "Log Out" : "Log In"}
        </button>
        {!isLoggedIn && <button className="navbar-signup-btn">Sign Up</button>}
      </div>
    </nav>
  );
};

export default Navbar;
