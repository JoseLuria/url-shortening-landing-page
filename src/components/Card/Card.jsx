import React from 'react';
import "./Card.style.scss"

const Card = ({icon, title, children}) => {
  return (
    <div className="card">
      <div className="card-logo-container">
        <img className="card-logo-icon" src={icon} alt={`${title} Logo`}/>
      </div>       
      <div className="card-container">
        <h3 className="card-container-title">{title}</h3>
        <p className="card-container-text">{children}</p>
      </div>
    </div>
  );
}

export default Card;
