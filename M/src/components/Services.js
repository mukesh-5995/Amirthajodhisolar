import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-items">
        <div className="service-item">
          <h3>Service One</h3>
          <p>Description of Service One.</p>
        </div>
        <div className="service-item">
          <h3>Service Two</h3>
          <p>Description of Service Two.</p>
        </div>
        <div className="service-item">
          <h3>Service Three</h3>
          <p>Description of Service Three.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
