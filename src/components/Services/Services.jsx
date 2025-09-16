import React, { useState } from "react";
import "./Services.css";
import Services_Data from "../../assets/services_data";
import Arrow from "../../assets/right-arrow.png";

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const handleServiceClick = () => {
    alert("Service is currently under process. Please check back later!");
  };

  const handleShowMore = () => {
    setShowAll(true);
  };

  // Display only first 4 services initially, or all if showAll is true
  const displayServices = showAll ? Services_Data : Services_Data.slice(0, 3);

  return (
    <div
      id="services"
      className="flex flex-col items-start md:items-center justify-center gap-[70px] md:gap-[80px] mx-[60px] md:mx-[100px] lg:mx-[170px] my-[60px] md:my-[80px]"
    >
      <div className="relative w-full md:w-[143%] lg:w-122">
        <h1 className="text-[50px] md:text-[70px] lg:text-[80px] font-semibold md:px-[30px] lg:px-[30px]">
          My Services
        </h1>
        <div className="absolute bottom-0 right-0 w-full h-[4px] md:h-[8px] lg:h-[10px] rounded-[60%] bg-gradient-to-r from-[#004d5f] to-[#1891c8]"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[40px] mb-[60px] md:mb-[80px] w-full">
        {displayServices.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center gap-[20px] p-[18px] md:p-[40px] lg:p-[60px] rounded-[10px] border-2 border-[#f6fcfe] transition-all duration-400 hover:border-[#1891c8] hover:shadow-lg hover:scale-[1.03]"
            >
              <h3 className="text-[22px] md:text-[25px] lg:text-[28px] font-semibold">
                {service.s_no}
              </h3>
              <h2 className="text-[28px] md:text-[34px] lg:text-[38px] font-extrabold bg-gradient-to-r from-[#046a81] to-[#1891c8] bg-clip-text text-transparent">
                {service.s_name}
              </h2>
              <p className="text-[18px] md:text-[20px] lg:text-[24px] text-[#d4d4d4] leading-[32px] md:leading-[36px] lg:leading-[40px] max-w-[300px]">
                {service.s_desc}
              </p>
              <div
                className="flex items-center gap-[20px] mt-[20px] cursor-pointer w-[75%] md:w-[70%] lg:w-[60%] hover:scale-[1.05] hover:border-b-2 hover:border-[#1891c8] transition-all duration-400"
                onClick={handleServiceClick}
              >
                <p className="text-[16px] md:text-[18px]">Read More</p>
                <img
                  src={Arrow}
                  alt="arrow-icon"
                  className="w-[18px] md:w-[20px]"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-4 md:mt-8 w-full">
        {!showAll ? (
          <button
            onClick={handleShowMore}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 md:px-6 py-2 rounded-md hover:opacity-90 transition-all duration-300 flex items-center gap-2 text-[14px] md:text-[16px]"
          >
            More Tools
            <img
              src={Arrow}
              alt="arrow-icon"
              className="w-3 h-3 md:w-4 md:h-4 invert"
            />
          </button>
        ) : (
          <button
            onClick={() => setShowAll(false)}
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 md:px-6 py-2 rounded-md hover:opacity-90 transition-all duration-300 flex items-center gap-2 text-[14px] md:text-[16px]"
          >
            Less
            <img
              src={Arrow}
              alt="arrow-icon"
              className="w-3 h-3 md:w-4 md:h-4 invert rotate-180"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Services;
