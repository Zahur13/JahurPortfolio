import React from "react";
import "./Hero.css";
import Model2 from "../../assets/model-2.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={Model2} alt="profile_img" />
      <h1>
        <span>I'm Jahurhusen Shaikh,</span> Fullstack Developer.
      </h1>
      <p>
        "Highly motivated Pre Final-year engineering student in Information
        Science, proficient in programming languages (C, Python, Java) and app
        development (Flutter & React Native).
      </p>
      <p>
        Seeking opportunities to apply skills to real-world projects and expand
        technical expertise in web development."
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
