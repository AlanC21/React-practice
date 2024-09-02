import './Card.css';
import React from 'react';


const Card = ({ fullName, profession, image }) => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={image} alt="Profile Image" className="img" />
        <h2>{fullName}</h2>
        <p>{profession}</p>
      </div>
    </div>
  );
};

export default Card;

