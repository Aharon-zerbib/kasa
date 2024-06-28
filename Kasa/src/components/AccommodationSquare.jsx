import React from "react";
import "../css/AccommodationSquare.css";

const AccommodationSquare = ({ apartment }) => {
  return (
    <div className="accommodation-square">
      <img src={apartment.cover} alt={apartment.title} />
      <h3>{apartment.title}</h3>
      <p>{apartment.location}</p>
    </div>
  );
};

export default AccommodationSquare;
