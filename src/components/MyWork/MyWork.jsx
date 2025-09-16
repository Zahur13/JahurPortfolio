import React from "react";
import "./MyWork.css";
import MyWork_Data from "../../assets/mywork_data";
import Arrow from "../../assets/right-arrow.png";

const MyWork = () => {
  return (
    <div id="work" className="mywork w-[133%] lg:w-[80%]">
      <div className="mywork_title">
        <h1>My Latest Work</h1>
        <div className="theme_pattern1"></div>
      </div>
      <div className="mywork_container">
        {MyWork_Data.map((work, index) => {
          return (
            <div
              key={index}
              className="relative group overflow-hidden rounded-[10px] border-2 border-[#01133d] hover:border-[#1891c8] transition-all duration-300 hover:shadow-lg hover:scale-110"
            >
              <img
                src={work.w_img}
                alt={work.w_name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-300 gap-2 md:gap-4 p-2">
                <h3 className="text-white text-sm md:text-lg lg:text-xl font-semibold">
                  {work.w_name}
                </h3>
                <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                  <a
                    href={work.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 rounded-md transition-colors duration-300 text-center"
                  >
                    Visit GitHub
                  </a>
                  <a
                    href={work.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 text-white text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 rounded-md transition-colors duration-300 text-center"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={Arrow} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
