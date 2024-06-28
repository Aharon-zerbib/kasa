import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Banner from "./BannierHome";
import AccommodationSquare from "../components/AccommodationSquare";

const Home = () => {
  const [apartments, setApartments] = useState([]);
  const [error, setError] = useState(null);

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

  return (
    <div>
      <Navigation />
      <Banner />
      {error ? (
        <div className="error">Error fetching apartments: {error}</div>
      ) : (
        <div className="apartment-list">
          {apartments.map((apartment) => (
            <AccommodationSquare key={apartment.id} apartment={apartment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
