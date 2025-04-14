import React from "react";
import "./Footer.css";
import FooterLogo from "../../assets/js-log.png";
import UserIcon from "../../assets/user-icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={FooterLogo} alt="footer-img" />
          <p>
            "Driven to apply web development skills to impactful, real-world
            projects while continuously pushing the boundaries of my technical
            capabilities."
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={UserIcon} alt="user-icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="subscribe-btn">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          {" "}
          &copy; 2025 Jahurhusen Shaikh. All rights reserved.{" "}
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
