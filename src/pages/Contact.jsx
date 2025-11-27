import React from "react";
import "./Contact.css";
import NavBar from "../components/Navbar";

function Contact() {
  return (
    <div className="contact-page">

      {/* NAVBAR */}
      <NavBar />

      {/* HERO SECTION */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Let’s connect!</p>
      </section>

      {/* MAIN CONTENT */}
      <div className="contact-wrapper">

        {/* CONTACT FORM */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <form>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Write your message..." required></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        {/* CONTACT IMAGE SECTION */}
        <div className="contact-image">
          <img src="src/assets/Event_GHK0.jpg" alt="Contact" />
        </div>
      </div>

      {/* SOCIAL MEDIA SECTION */}
      <div className="social-media">
        <h2>Find Us on Social Media</h2>
        <div className="social-icons">
          <a href="#"><img src="src/assets/FBlog.png" alt="Facebook" /></a>
          <a href="#"><img src="src/assets/Youtube_logo.png" alt="YouTube" /></a>
          <a href="#"><img src="src/assets/instagramlogo.webp" alt="Instagram" /></a>
        </div>
      </div>

    </div>
  );
}

export default Contact;
