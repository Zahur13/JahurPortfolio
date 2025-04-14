import React from "react";
import "./MyWork.css";
import MyWork_Data from "../../assets/mywork_data";
import Arrow from "../../assets/right-arrow.png";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork_title">
        <h1>My Latest Work</h1>
        <div className="theme_pattern1"></div>
      </div>
      <div className="mywork_container">
        {MyWork_Data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
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
