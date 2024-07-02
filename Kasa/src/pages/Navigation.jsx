import React from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css";

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="\public\kasa_red.svg" alt="" />
      </div>
      <div className="links">
        <Link to="/">Accueil</Link>
        <Link to="/Propo">A Propos</Link>
      </div>
    </div>
  );
};

export default Navigation;
