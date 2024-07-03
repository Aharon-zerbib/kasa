import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import "../css/404.css";

const NotUndifin = () => {
  return (
    <div>
      <Navigation />
      <section className=" error_container">
        <h1 className="error_title">404</h1>
        <p className="error_text">
          Oups! La page que vous demandez n'existe pas.
        </p>

        <Link className="error_link" to="/">
          Retourner sur la page d’accueil
        </Link>
      </section>

      <div className="footerContainer">
        <img src="public\kasa_white.svg" alt="kasa" />
        <p className="PFooter">© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
};

export default NotUndifin;
