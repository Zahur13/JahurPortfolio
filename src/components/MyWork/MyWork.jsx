import React, { useState } from "react";
import "./MyWork.css";
import MyWork_Data from "../../assets/mywork_data";
import Arrow from "../../assets/right-arrow.png";

const MyWork = () => {
  const [selectedWork, setSelectedWork] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleWorkClick = (work, index) => {
    // Only show popup on mobile/tablet devices
    if (window.innerWidth <= 1024) {
      setSelectedWork(work);
      setIsPopupOpen(true);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedWork(null);
  };

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
              className="relative group overflow-hidden rounded-[10px] border-2 border-[#01133d] hover:border-[#1891c8] transition-all duration-300 hover:shadow-lg lg:hover:scale-110 cursor-pointer"
              onClick={() => handleWorkClick(work, index)}
            >
              <img
                src={work.w_img}
                alt={work.w_name}
                className="w-full h-full object-cover"
              />

              {/* Desktop Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 lg:group-hover:opacity-100 hidden lg:flex flex-col items-center justify-center transition-all duration-300 gap-2 md:gap-4 p-2">
                <h3 className="text-white text-sm md:text-lg lg:text-xl font-semibold">
                  {work.w_name}
                </h3>
                <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                  <a
                    href={work.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 rounded-md transition-colors duration-300 text-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit GitHub
                  </a>
                  <a
                    href={work.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 text-white text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 rounded-md transition-colors duration-300 text-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Website
                  </a>
                </div>
              </div>

              {/* Mobile/Tablet Click Indicator */}
              <div className="absolute bottom-2 right-2 lg:hidden bg-black bg-opacity-70 rounded-full p-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile/Tablet Popup Modal */}
      {isPopupOpen && selectedWork && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 lg:hidden">
          <div className="bg-white rounded-xl max-w-md w-full mx-4 overflow-hidden shadow-2xl animate-scale-up">
            {/* Close Button */}
            <div className="relative">
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70 transition-all duration-200"
              >
                ✕
              </button>

              {/* Project Image */}
              <img
                src={selectedWork.w_img}
                alt={selectedWork.w_name}
                className="w-full h-48 sm:h-56 object-cover"
              />
            </div>

            {/* Popup Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                {selectedWork.w_name}
              </h3>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={selectedWork.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  onClick={closePopup}
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Visit GitHub
                  </span>
                </a>
                <a
                  href={selectedWork.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  onClick={closePopup}
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    Visit Website
                  </span>
                </a>
              </div>

              {/* Cancel Button */}
              <button
                onClick={closePopup}
                className="mt-4 text-gray-500 hover:text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={Arrow} alt="" />
      </div>

      {/* Add custom CSS for animation */}
      <style jsx>{`
        @keyframes scale-up {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-up {
          animation: scale-up 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MyWork;
