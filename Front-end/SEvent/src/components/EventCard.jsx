import React from "react";
import "./EventCard.css";

const EventCard = ({
  bannerSrc,
  campusLabel = "UIT",
  categoryLabel = "Academic",
  month = "NOV",
  day = "22",
  title = "Netsec Day",
  department = "Khoa Mạng Máy tính và Truyền thông",
  time = "07:00 AM - 12:00 AM",
  interestedCount = 10,
}) => {
  return (
    <div className="event-card">
      {/* Top image + labels */}
      <div className="event-card__banner-wrapper">
        {bannerSrc && (
          <img src={bannerSrc} alt={title} className="event-card__banner" />
        )}

        {/* Campus label (UIT) */}
        <div className="event-card__chip-campus">{campusLabel}</div>

        {/* Star icon (bookmark) */}
        <button className="event-card__star-btn" aria-label="Save event">
          ☆
        </button>

        {/* Category label (Academic) */}
        <div className="event-card__chip-category">{categoryLabel}</div>
      </div>

      {/* Bottom content */}
      <div className="event-card__content">
        {/* Date block */}
        <div className="event-card__date">
          <span className="event-card__date-month">{month}</span>
          <span className="event-card__date-day">{day}</span>
        </div>

        {/* Text info */}
        <div className="event-card__info">
          <h3 className="event-card__title">{title}</h3>
          <p className="event-card__department">{department}</p>
          <p className="event-card__time">{time}</p>
          <p className="event-card__interested">
            • <span className="event-card__interested-star">★</span>{" "}
            {interestedCount} interested
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
