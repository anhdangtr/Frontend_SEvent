// src/App.jsx
import React, { useState } from "react";
import "./App.css";
import EventCard from "./components/EventCard";
import netsecBanner from "./assets/net-challenge.jpg";
import baymomangBanner from "./assets/BayMoMang.jpg"; 

// EVENT DATA
const EVENTS = [
  {
    id: 1,
    month: "NOV",
    day: "22",
    title: "Netsec Day",
    department: "Khoa Mạng Máy tính và Truyền thông",
    time: "07:00 AM - 12:00 AM",
    interested: 10,
    category: "Academic",
    banner: netsecBanner,
  },
  {
    id: 2,
    month: "NOV",
    day: "22",
    title: "Bẫy Mơ Màng",
    department: "CLB Tình nguyện Đom Đóm",
    time: "07:00 PM - 10:00 PM",
    interested: 23,
    category: "Entertainment",
    banner: baymomangBanner,
  },
  {
    id: 3,
    month: "NOV",
    day: "23",
    title: "Hội thảo Kỹ năng cho người trẻ",
    department: "Phòng CTSV",
    time: "08:00 AM - 11:00 AM",
    interested: 18,
    category: "Academic",
    banner: null,
  },
  {
    id: 4,
    month: "NOV",
    day: "24",
    title: "UIT Run 2025",
    department: "Đoàn - Hội UIT",
    time: "05:00 AM - 09:00 AM",
    interested: 40,
    category: "Sport",
    banner: null,
  },
  // 6 sự kiện “ẩn” sẽ hiện khi nhấn See more
  {
    id: 5,
    month: "NOV",
    day: "24",
    title: "Open Day Khoa KHMT",
    department: "Khoa Khoa học máy tính",
    time: "01:00 PM - 04:00 PM",
    interested: 12,
    category: "Academic",
    banner: null,
  },
  {
    id: 6,
    month: "NOV",
    day: "25",
    title: "Workshop CV & Interview",
    department: "Trung tâm HTSV & Việc làm",
    time: "02:00 PM - 05:00 PM",
    interested: 35,
    category: "Career",
    banner: null,
  },
  {
    id: 7,
    month: "NOV",
    day: "25",
    title: "Âm nhạc đường phố",
    department: "CLB Music Box",
    time: "06:30 PM - 09:00 PM",
    interested: 48,
    category: "Entertainment",
    banner: null,
  },
  {
    id: 8,
    month: "NOV",
    day: "26",
    title: "Blood Donation Day",
    department: "Đoàn trường",
    time: "08:00 AM - 04:00 PM",
    interested: 60,
    category: "Volunteer",
    banner: null,
  },
  {
    id: 9,
    month: "NOV",
    day: "27",
    title: "Café Talk: Startup 101",
    department: "Innovation Lab",
    time: "07:00 PM - 09:00 PM",
    interested: 19,
    category: "Academic",
    banner: null,
  },
  {
    id: 10,
    month: "NOV",
    day: "28",
    title: "Movie Night Special",
    department: "CLB Điện ảnh",
    time: "07:00 PM - 10:00 PM",
    interested: 27,
    category: "Entertainment",
    banner: null,
  },
];

function App() {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, EVENTS.length));
  };

  const visibleEvents = EVENTS.slice(0, visibleCount);

  return (
    <div className="page">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar__left">
          <div className="navbar__logo">SEvent</div>
          <nav className="navbar__links">
            <a href="#home">Home</a>
            <a href="#events">Events</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="navbar__right">
          <button className="btn btn--ghost">Login</button>
          <button className="btn btn--primary">Sign Up</button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <img
          src="https://via.placeholder.com/1200x350?text=Hero+Banner"
          alt="Hero"
          className="hero__image"
        />
        <div className="hero__overlay">
          <h1 className="hero__title">When your next UIT event starts!</h1>
          <div className="hero__search">
            <input
              type="text"
              placeholder="Search events, categories, locations..."
            />
            <button className="btn btn--primary hero__search-btn">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* EXPLORE CATEGORIES */}
      <section className="section section--categories" id="categories">
        <h2 className="section__title">Explore categories</h2>
        <div className="categories__grid">
          <div className="category-card">
            <div className="category-card__icon">🤝</div>
            <p className="category-card__label">Volunteer</p>
          </div>
          <div className="category-card">
            <div className="category-card__icon">🎓</div>
            <p className="category-card__label">Academic</p>
          </div>
          <div className="category-card">
            <div className="category-card__icon">🎉</div>
            <p className="category-card__label">Entertainment</p>
          </div>
          <div className="category-card">
            <div className="category-card__icon">💼</div>
            <p className="category-card__label">Contest zone</p>
          </div>
        </div>
      </section>

      {/* THIS WEEK EVENTS */}
      <section className="section" id="events">
        <div className="section__header">
          <h2 className="section__title">This week events</h2>
        </div>

        <div className="events__grid">
          {visibleEvents.map((event) => (
            <EventCard
              key={event.id}
              bannerSrc={event.banner}
              month={event.month}
              day={event.day}
              title={event.title}
              department={event.department}
              time={event.time}
              interestedCount={event.interested}
              categoryLabel={event.category === "Academic" ? "Academic" : ""}
            />
          ))}
        </div>

        {visibleCount < EVENTS.length && (
          <div className="section__see-more">
            <button className="btn btn--outline" onClick={handleSeeMore}>
              See more
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
