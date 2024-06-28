/* 
import React from "react";
import AccommodationSquare from "../components/AccommodationSquare";

const AccommodationSquare = ({ data }) => {
  return (
    <div className="accommodation-square">
      <img src={data.cover} alt={data.title} className="accommodation-cover" />
      <h2 className="accommodation-title">{data.title}</h2>
      <p className="accommodation-location">{data.location}</p>
    </div>
  );
};

AccommodationSquare.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};
export default AccommodationsGrid;
*/
import React from "react";
import PropTypes from "prop-types";

const AccommodationSquare = ({ apartment }) => {
  return (
    <div className="accommodation-square">
      <img
        src={apartment.cover}
        alt={apartment.title}
        className="accommodation-cover"
      />
      <h3>{apartment.title}</h3>
      <p>{apartment.location}</p>
      <p>{apartment.description}</p>
      <div className="host-info">
        <img
          src={apartment.host.picture}
          alt={apartment.host.name}
          className="host-picture"
        />
        <span>{apartment.host.name}</span>
      </div>
      <div className="rating">
        {Array.from({ length: apartment.rating }, (_, i) => (
          <span key={i} className="star">
            ★
          </span>
        ))}
      </div>
      <ul className="equipments">
        {apartment.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      <div className="tags">
        {apartment.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

AccommodationSquare.propTypes = {
  apartment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default AccommodationSquare;
