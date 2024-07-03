import React from "react";
import { Link } from "react-router-dom";
import "../css/AccommodationSquare.css";

const AccommodationSquare = ({ apartment }) => {
  return (
    <section className="container">
      <Link to={`/apartment/${apartment.id}`}>
        <div className="accommodation-square">
          <img src={apartment.cover} alt={apartment.title} />
          <h3>{apartment.title}</h3>
        </div>
      </Link>
    </section>
  );
};

export default AccommodationSquare;
