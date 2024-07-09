import React from 'react';
import './Card.css';

const Card = ({ image, title, description, bgColor }) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <div className="card-arrow">→</div>
    </div>
  );
};

export default Card;
