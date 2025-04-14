import "./Navbar.css";

import React, { useRef, useState } from "react";
import logo from "../../assets/js-log.png";
import Menu from "../../assets/menu-icon2.png";
import Back_Menu from "../../assets/back-icon2.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo-img" />
      <img src={Menu} onClick={openMenu} alt="" className="nav-open-menu" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={Back_Menu}
          onClick={closeMenu}
          alt="Back_Menu"
          className="nav-back-menu"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p
              onClick={() => setMenu("home")}
              style={{ color: menu === "home" ? "#1891c8" : "white" }}
            >
              Home
            </p>
          </AnchorLink>
          {menu === "home" ? <div className="underline"></div> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p
              onClick={() => setMenu("about")}
              style={{ color: menu === "about" ? "#1891c8" : "white" }}
            >
              About Me
            </p>
          </AnchorLink>
          {menu === "about" ? <div className="underline"></div> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p
              onClick={() => setMenu("services")}
              style={{ color: menu === "services" ? "#1891c8" : "white" }}
            >
              Services
            </p>
          </AnchorLink>
          {menu === "services" ? <div className="underline"></div> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p
              onClick={() => setMenu("work")}
              style={{ color: menu === "work" ? "#1891c8" : "white" }}
            >
              Portfolio
            </p>
          </AnchorLink>
          {menu === "work" ? <div className="underline"></div> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p
              onClick={() => setMenu("contact")}
              style={{ color: menu === "contact" ? "#1891c8" : "white" }}
            >
              Contact
            </p>
          </AnchorLink>
          {menu === "contact" ? <div className="underline"></div> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
