import React from "react";
import "./Services.css";
import Services_Data from "../../assets/services_data";
import Arrow from "../../assets/right-arrow.png";

const Services = () => {
  const handleServiceClick = () => {
    alert("Service is currently under process. Please check back later!");
  };
  return (
    <div id="services" className="services ">
      <div className="services-title w-[143%] lg:w-122">
        <h1 className="">My Services</h1>
        <div className="theme-pattern1"></div>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services_format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div
                className="services_readmore w-[75%] lg:w-[60%]"
                onClick={handleServiceClick}
              >
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
