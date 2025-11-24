import React from 'react';
import './landpage.css'; // Import the CSS for the landpage styling

const Landpage = () => {
  return (
    <div className="landpage">
      <header className="landpage-header">
        <div className="landpage-logo">
          <img src="/path/to/logo.png" alt="Logo" className="landpage-logo-img" />
          <span className="landpage-logo-text">SEvent</span>
        </div>
        <nav className="landpage-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="landpage-buttons">
          <button className="landpage-login-btn">Login</button>
          <button className="landpage-signup-btn">Sign Up</button>
        </div>
      </header>

      <section className="landpage-hero">
        <h1 className="hero-title">Welcome to SEvent</h1>
        <p className="hero-description">Your gateway to the best events around.</p>
        <button className="hero-btn">Get Started</button>
      </section>

      <section className="landpage-features">
        <h2 className="features-title">Our Features</h2>
        <div className="features-list">
          <div className="feature-item">
            <img src="/path/to/feature-icon1.png" alt="Feature 1" className="feature-icon" />
            <p className="feature-description">Feature 1 Description</p>
          </div>
          <div className="feature-item">
            <img src="/path/to/feature-icon2.png" alt="Feature 2" className="feature-icon" />
            <p className="feature-description">Feature 2 Description</p>
          </div>
          <div className="feature-item">
            <img src="/path/to/feature-icon3.png" alt="Feature 3" className="feature-icon" />
            <p className="feature-description">Feature 3 Description</p>
          </div>
        </div>
      </section>

      <footer className="landpage-footer">
        <p>&copy; 2025 SEvent. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Landpage;
