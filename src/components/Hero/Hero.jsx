import React from "react";
import "./Hero.css";
import Model2 from "../../assets/model-2.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import resume from "../../../src/assets/Resume_Zahur.pdf";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={Model2} alt="profile_img" className="ml-64 lg:ml-0" />
      <h1 className="ml-64 lg:ml-0">
        <span>I'm Jahurhusen Shaikh,</span> Fullstack Developer.
      </h1>
      <p className="ml-64 lg:ml-0">
        "Highly motivated Pre Final-year engineering student in Information
        Science, proficient in programming languages (C, Python, Java) and app
        development (Flutter & React Native).
      </p>
      <p className="ml-64 lg:ml-0">
        Seeking opportunities to apply skills to real-world projects and expand
        technical expertise in web development."
      </p>
      <div className="hero-action -ml-30 lg:ml-0">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div
          className="hero-resume"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/Resume_Zahur.pdf";
            link.download = "Resume_Zahur.pdf";
            link.click();
          }}
        >
          <a className="anchor-link">My Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
