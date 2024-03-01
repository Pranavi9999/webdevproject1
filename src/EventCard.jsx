import React from 'react';
import './EventCard.css'; // Import CSS file for styling

const EventCard = ({ title, description, location, imageUrl }) => {
  return (
    <div className="event-card">
      <img src={imageUrl} alt={title} />
      <div className="event-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Location: {location}</p>
      </div>
    </div>
  );
};

export default EventCard;
