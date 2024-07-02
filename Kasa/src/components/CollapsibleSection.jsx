// CollapsibleSection.js
import React, { useState } from "react";
import "../css/collapsible.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const CollapsibleSection = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="container_collapse">
      <button
        className={`collapsible ${isActive ? "active" : ""}`}
        onClick={handleToggle}
      >
        {title}
        <span
          className={`fas fa-chevron-${isActive ? "down" : "up"}`}
          aria-hidden="true"
        ></span>
      </button>
      <div className={`content ${isActive ? "show" : ""}`}>
        <div className="content_collapse">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default CollapsibleSection;