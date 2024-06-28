import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Banner from "./BannierHome";
import AccommodationSquare from "../components/AccommodationSquare";
import "../css/listAppartemen.css";
import "../css/footer.css";

const Home = () => {
  const [apartments, setApartments] = useState([]);
  const [error, setError] = useState(null);
  const [visibleApartments, setVisibleApartments] = useState(6);
  const apartmentsPerPage = 6;

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setApartments(data))
      .catch((error) => setError(error.message));
  }, []);

  const handleShowMore = () => {
    setVisibleApartments((prevVisible) => prevVisible + apartmentsPerPage);
  };

  return (
    <div>
      <Navigation />
      <Banner />
      {error ? (
        <div className="error">Error fetching apartments: {error}</div>
      ) : (
        <div className="apartment-list">
          {apartments.slice(0, visibleApartments).map((apartment) => (
            <AccommodationSquare key={apartment.id} apartment={apartment} />
          ))}
          {visibleApartments < apartments.length && (
            <button className="show-more" onClick={handleShowMore}>
              Voir plus
            </button>
          )}
        </div>
      )}
      <div className="footerContainer">
        <img src="public\kasa_white.svg" alt="kasa" />
        <p className="PFooter"> © 2020 - 2024 Kasa. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
