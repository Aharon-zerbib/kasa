import React, { useState } from "react";
import Navigation from "./Navigation";
import Banner from "./BannierPropo";
import "../css/Propo.css";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCollapseToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <Navigation />
      <Banner />
      {["Fiabilité", "Respect", "Service", "Sécurité"].map((title, index) => (
        <div className="container_collapse" key={index}>
          <button
            className={`collapsible ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleCollapseToggle(index)}
          >
            {title}
            <span
              className={`fa-solid fa-chevron-${
                activeIndex === index ? "down" : "up"
              }`}
              aria-hidden="true"
            ></span>
          </button>
          <div className={`content ${activeIndex === index ? "show" : ""}`}>
            <div className="content_collapse">
              <p>
                {index === 0 &&
                  "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."}
                {index === 1 &&
                  "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}
                {index === 2 &&
                  "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}
                {index === 3 &&
                  "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="footerContainer">
        <img src="public/kasa_white.svg" alt="kasa" />
        <p className="PFooter">© 2020 - 2024 Kasa. All rights reserved.</p>
      </div>
    </div>
  );
};

export default About;
