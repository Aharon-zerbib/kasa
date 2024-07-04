import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../pages/Navigation";
import CollapsibleSection from "./CollapsibleSection";
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
      <Navigation />
      <div className="gallery-container">
        <button className="prev-button" onClick={prevSlide}>
          Previous
        </button>
        <div className="gallery">
          {apartment.pictures.length > 0 && (
            <img
              src={apartment.pictures[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1} of ${apartment.title}`}
            />
          )}
        </div>
        <button className="next-button" onClick={nextSlide}>
          Next
        </button>
      </div>
      <div className="description">
        <div className="lesTitre">
          <h1>{apartment.title}</h1>
          <p>{apartment.location}</p>
        </div>
        <div className="host">
          <p>{apartment.host.name}</p>
          <img src={apartment.host.picture} alt={apartment.host.name} />
        </div>
      </div>
      <div className="Tags">
        <ul>
          {apartment.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="Colaps">
        <CollapsibleSection
          title="Description"
          content={apartment.description}
        />
        <CollapsibleSection
          title="Équipements"
          content={
            <ul>
              {apartment.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Apartment;
