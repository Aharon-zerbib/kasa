import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../pages/Navigation";
import "../css/Apartment.css";

const Apartment = () => {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetch(`/data/data.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const foundApartment = data.find((apartment) => apartment.id === id);
        setApartment(foundApartment);
      })
      .catch((error) => setError(error.message));
  }, [id]);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === apartment.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? apartment.pictures.length - 1 : prevIndex - 1
    );
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!apartment) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navigation />{" "}
      <div className="button-container">
        <button className="prev-button" onClick={prevSlide}>
          Previous
        </button>
        <button className="next-button" onClick={nextSlide}>
          Next
        </button>
      </div>
      <div className="gallery">
        {apartment.pictures.length > 0 && (
          <img
            src={apartment.pictures[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1} of ${apartment.title}`}
          />
        )}
      </div>
      <h1>{apartment.title}</h1>
      <p>{apartment.location}</p>
      <p>{apartment.description}</p>
      <h3>Équipements</h3>
      <ul>
        {apartment.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      <h3>Hôte</h3>
      <p>{apartment.host.name}</p>
      <img src={apartment.host.picture} alt={apartment.host.name} />
      <h3>Tags</h3>
      <ul>
        {apartment.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Apartment;
