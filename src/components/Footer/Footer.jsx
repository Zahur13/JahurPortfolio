import React from "react";
import "./Footer.css";
import FooterLogo from "../../assets/js-log.png";
import UserIcon from "../../assets/user-icon.png";

const Footer = () => {
  const handleServiceClick = () => {
    alert("Subscription request sent!");
  };
  return (
    <div className="footer">
      <div className="footer-top lg:w-[78%]">
        <div className="footer-top-left flex items-center justify-center gap-8 w-[170%] lg:block ">
          <img src={FooterLogo} alt="footer-img" />
          <p>
            "Driven to apply web development skills to impactful, real-world
            projects while continuously pushing the boundaries of my technical
            capabilities."
          </p>
        </div>
        {/* ml-[90%] */}
        <div className="footer-top-right lg:w-[1] w-[90%] ml-32">
          <div className="footer-email-input">
            <img src={UserIcon} alt="user-icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="subscribe-btn" onClick={handleServiceClick}>
            Subscribe
          </div>
        </div>
      </div>
      <hr className="w-[190%] lg:w-[100%]" />
      <div className="footer-bottom">
        <p className="footer-bottom-left w-[132%] lg:w-[69%]">
          {" "}
          &copy; 2025 Jahurhusen Shaikh. All rights reserved.{" "}
        </p>
        <div className="footer-bottom-right w-[175%] lg:w-lg">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
