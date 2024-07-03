import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../pages/Navigation";

const Apartment = () => {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    2;
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

  if (error) {
    return <div>Error fetching apartment details: {error}</div>;
  }

  if (!apartment) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navigation />
      <h1>{apartment.title}</h1>
      <img src={apartment.cover} alt={apartment.title} />
      <p>{apartment.description}</p>
      <h2>Host: {apartment.host.name}</h2>
      <img src={apartment.host.picture} alt={apartment.host.name} />
      <h3>Rating: {apartment.rating}</h3>
      <h3>Location: {apartment.location}</h3>
      <ul>
        {apartment.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      <ul>
        {apartment.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <div className="footerContainer">
        <img src="../public/kasa_white.svg" alt="kasa" />
        <p className="PFooter"> © 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
};

export default Apartment;
