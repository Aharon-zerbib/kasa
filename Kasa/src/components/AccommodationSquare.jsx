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
