import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Propo from "./pages/Propo";
import NotUndifin from "./pages/404";
import Apartment from "../src/components/Apartement";
import "./css/app.css";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Propo" element={<Propo />} />
        {/* path=* function si jamais  ne corespond pas */}
        <Route path="*" element={<NotUndifin />} />
        <Route path="/apartment/:id" element={<Apartment />} />
      </Routes>
    </HashRouter>
  );
};

export default App;

// Ce composent comporterra nos lien D'aceille ,Propo ,NotUndifin est Apartment
