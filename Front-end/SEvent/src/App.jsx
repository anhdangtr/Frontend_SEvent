import React from 'react';
import './App.css'; // Import the CSS file for styling
import Navbar from './components/Navbar'; // Import the Navbar component
import EventCard from './components/EventCard'; // Import the EventCard component

const App = () => {
  return (
    <div className="app">
      {/* Render the Navbar */}
      <Navbar />

      {/* Main content area */}
      <div className="main-content">
        <h1 className="title">Upcoming Events</h1>
        
        {/* Display multiple EventCards */}
        <div className="event-cards-container">
          <EventCard
            title="Gặp Mặt Đầu Năm 2025"
            date="Nov 22"
            time="04:00 AM - 07:00 PM"
            location="Đội CTXH UIT"
            interested="10"
          />
          {/* Add more EventCards here */}
        </div>
      </div>
    </div>
  );
};

export default App;
