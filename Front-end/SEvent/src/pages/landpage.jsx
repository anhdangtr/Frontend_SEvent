import React from "react";

// Components
import Navbar from "../components/Navbar.jsx";
import Banner from "../components/Banner.jsx";
import EventCard from "../components/EventCard.jsx";
import Footer from "../components/Footer.jsx";

// CSS (DO NOT assign variable names)
import "../components/Navbar.css";
import "../components/Banner.css";
import "../components/EventCard.css";
import "../components/Footer.css";

import "./landpage.css";

const dummyEvents = [
  {
    id: 1,
    image: "https://via.placeholder.com/400x200",
    title: "Music Festival 2025",
    date: "2025-12-10",
    location: "Ho Chi Minh City",
    description: "Join us for a huge celebration of music and community."
  },
  {
    id: 2,
    image: "https://via.placeholder.com/400x200",
    title: "Tech Conference",
    date: "2025-11-20",
    location: "Hanoi",
    description: "Innovations, networking, and insights into the future."
  },
  // ... more event objects
];

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <Banner
        title="Welcome to S-Event"
        subtitle="Discover and join amazing events near you."
        imageUrl="https://via.placeholder.com/600x400"
        buttonText="Browse Events"
        onButtonClick={() => {
          document.getElementById("events").scrollIntoView({ behavior: "smooth" });
        }}
      />

      <section id="events" className="landing-page__events">
        <h2 className="landing-page__events-title">Upcoming Events</h2>
        <div className="landing-page__cards">
          {dummyEvents.map((event) => (
            <EventCard
              key={event.id}
              image={event.image}
              title={event.title}
              date={event.date}
              location={event.location}
              description={event.description}
              onClick={() => {
                alert(`Clicked event ${event.title}`);
              }}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;
