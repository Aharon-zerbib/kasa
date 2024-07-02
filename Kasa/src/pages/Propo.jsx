import React from "react";
import Navigation from "./Navigation";
import Banner from "./BannierPropo";
import CollapsibleSection from "../components/CollapsibleSection";
import "../css/Propo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const About = () => {
  const sections = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div>
      <Navigation />
      <Banner />
      {sections.map((section, index) => (
        <CollapsibleSection
          key={index}
          title={section.title}
          content={section.content}
        />
      ))}
      <div className="footerContainer">
        <img src="public/kasa_white.svg" alt="kasa" />
        <p className="PFooter">© 2020 - 2024 Kasa. All rights reserved.</p>
      </div>
    </div>
  );
};

export default About;
