import React from "react";
import "./About.css";
import NavBar from "../components/Navbar";

function About() {
  return (
    <div className="about-page">
      {/* NAVBAR */}
      <NavBar />

      {/* HERO SECTION */}
      <div className="about-hero">
        <h1 className="hero-title">About Us</h1>
        <p className="hero-subtitle">
          Discover the mission, the vision, and the people behind our platform.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="about-main">

        {/* OUR PURPOSE */}
        <div className="about-purpose">
          <div className="purpose-text">
            <h2>Our Purpose</h2>
            <p>
              We built this platform to help VNU-HCM students discover meaningful and
              exciting events. Whether you're searching for conferences,
              concerts, or community gatherings, our mission is to make it easy
              for everyone to connect and participate.
              <br /><br />
              With "Sevent", no worries about missing out on great and impactful events – we've got you covered!
            </p>
          </div>

          <div className="purpose-image">
            <img
              src="src/assets/Event_GHK0.jpg"
              alt="Events"
            />
          </div>
        </div>

        {/* FOUNDERS */}
        <div className="founders-section">
          <h2 className="section-title">Meet The Founders</h2>

          <div className="founders-grid">

            {/* Founder 1 */}
            <div className="founder-card">
              <div className="founder-img-box">
                <img
                  src="src/assets/Founder2.JPG"
                  alt="Founder 1"
                />
              </div>
              <h3>Nhu Y Do</h3>
              <p className="role">Co-founder and CEO</p>
              <p className="founder-desc">
                Nhu Y is the visionary behind our platform, leading the team with passion
                and dedication to create an exceptional event discovery experience.
                She is also a talented front-end developer.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="founder-card">
              <div className="founder-img-box">
                <img
                  src="src/assets/Founder1.jpg"
                  alt="Founder 2"
                />
              </div>
              <h3>Trung Anh Dang</h3>
              <p className="role">Co-founder</p>
              <p className="founder-desc">
                Trung Anh codes back-end. He ensures the platform is reliable,
                scalable, and secure so users have a seamless experience.
              </p>
            </div>

            {/* Founder 3 */}
            <div className="founder-card">
              <div className="founder-img-box">
                <img
                  src="src/assets/Founder3.png"
                  alt="Founder 3"
                />
              </div>
              <h3>Chat GPT</h3>
              <p className="role">Coder</p>
              <p className="founder-desc">
                ChatGPT helps us in coding and debugging. It assists in generating code,
                solving problems, and supporting development throughout our journey.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
