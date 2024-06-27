import React from "react";
import { Link } from "react-router-dom";
import "./css/Navigation.css";

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <span>Kasa</span>
      </div>
      <div className="links">
        <Link to="/home">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </div>
    </div>
  );
};

export default Navigation;
