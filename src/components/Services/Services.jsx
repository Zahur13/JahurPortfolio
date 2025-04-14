import React from "react";
import "./Services.css";
import Services_Data from "../../assets/services_data";
import Arrow from "../../assets/right-arrow.png";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <div className="theme-pattern1"></div>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services_format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services_readmore">
                <p>Read More</p>
                <img src={Arrow} alt="arrow-icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
