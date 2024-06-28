import React from "react";
import Navigation from "./Navigation";
import Banner from "./BannierPropo";
import "../css/Propo.css";

const About = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <div class="container_collapse">
        <button class="collapsible " value="Collapse button">
          Fiabilité
          <span class="fa-solid fa-chevron-up " aria-hidden="true"></span>
        </button>
        <div class="content ">
          <div class="content_collapse ">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </div>
      </div>
      <div class="container_collapse">
        <button class="collapsible " value="Collapse button">
          Respect
          <span class="fa-solid fa-chevron-up " aria-hidden="true"></span>
        </button>
        <div class="content ">
          <div class="content_collapse ">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </div>
        </div>
      </div>
      <div class="container_collapse">
        <button class="collapsible " value="Collapse button">
          Service
          <span class="fa-solid fa-chevron-up " aria-hidden="true"></span>
        </button>
        <div class="content ">
          <div class="content_collapse ">
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          </div>
        </div>
      </div>
      <div class="container_collapse">
        <button class="collapsible " value="Collapse button">
          Sécurité
          <span class="fa-solid fa-chevron-up " aria-hidden="true"></span>
        </button>
        <div class="content ">
          <div class="content_collapse ">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </div>
        </div>
      </div>
      <div className="footerContainer">
        <img src="public\kasa_white.svg" alt="kasa" />
        <p className="PFooter"> © 2020 - 2024 Kasa. All rights reserved.</p>
      </div>
    </div>
  );
};

export default About;
