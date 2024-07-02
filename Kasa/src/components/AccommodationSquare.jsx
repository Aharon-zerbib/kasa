import React from "react";
import "../css/AccommodationSquare.css";

const AccommodationSquare = ({ apartment }) => {
  return (
    <section className="container">
      <div className="accommodation-square">
        <img src={apartment.cover} alt={apartment.title} />
        <h3>{apartment.title}</h3>
      </div>
    </section>
  );
};

export default AccommodationSquare;
