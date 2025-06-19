import React from "react";
import "./About.css";
import profile_img from "../../assets/model.jpg";

const About = () => {
  return (
    <div id="about" className="about lg:w-[79%] w-[100%]">
      <div className="about-title">
        <h1 className="sm:text-3xl">About me</h1>
        <div className="theme-pattern"></div>
      </div>
      <div className="about-section sm:gap-6 w-[143%] lg:w-[100%] pr-8">
        <div className="about-left sm:block sm:w-full">
          <img src={profile_img} alt="" className="sm:w-full sm:rounded-lg" />
        </div>
        <div className="about-right sm:gap-6">
          <div className="about-para sm:text-sm">
            <p>
              {" "}
              I am an experienced fullstack developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organisations,
              contributing to the year success and growth.
            </p>
            <p>
              {" "}
              My passion for fullstack development Is not only reflecting in my
              extensive experience, but also in the enthusiasm and dedication, I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Java & Python</p> <hr style={{ width: "35%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "48%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p> <hr style={{ width: "85%" }} />
            </div>
            {/* <div className="about-skill"><p>Experss</p> <hr style={{width:"60%"}}/></div> */}
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Node Js</p> <hr style={{ width: "38%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements ml-[16%] lg:ml-0">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
