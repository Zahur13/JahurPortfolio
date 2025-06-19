import React, { useRef, useState } from "react";
import logo from "../../assets/js-log.png";
import Menu from "../../assets/menu-icon2.png";
import Back_Menu from "../../assets/back-icon2.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar1 = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="flex items-center justify-between mx-[170px] my-[10px] md:mx-[50px] md:my-[20px]">
      <img
        src={logo}
        alt="logo"
        className="w-[10%] cursor-pointer lg:w-12 md:w-10 w-8"
      />
      <img
        src={Menu}
        onClick={openMenu}
        alt=""
        className="w-[35px] cursor-pointer hidden lg:block fixed right-[30px]"
      />
      <ul
        ref={menuRef}
        className="list-none flex items-center gap-[40px] md:flex-col md:items-start md:fixed md:top-0 md:gap-[30px] md:bg-[#002a3d3d] md:w-[320px] md:h-full md:z-[2] md:transition-[right] md:duration-500 md:right-[-350px]"
      >
        <img
          src={Back_Menu}
          onClick={closeMenu}
          alt="Back_Menu"
          className="hidden md:block md:relative md:top-[30px] md:left-[290px] md:w-[30px]"
        />
        <li className="text-[20px] font-medium cursor-pointer transition duration-500 hover:text-[#1891c8] hover:scale-[1.33] flex flex-col gap-[5px] md:pl-[100px]">
          <AnchorLink
            className="no-underline text-white hover:text-[#1891c8]"
            href="#home"
          >
            <p
              onClick={() => setMenu("home")}
              style={{ color: menu === "home" ? "#1891c8" : "white" }}
            >
              Home
            </p>
          </AnchorLink>
          {menu === "home" && (
            <div className="h-[3px] mt-[10px] w-full bg-gradient-to-r from-[#004d5f] to-[#1891c8]"></div>
          )}
        </li>
        <li className="text-[20px] font-medium cursor-pointer transition duration-500 hover:text-[#1891c8] hover:scale-[1.33] flex flex-col gap-[5px] md:pl-[100px]">
          <AnchorLink
            className="no-underline text-white hover:text-[#1891c8]"
            offset={50}
            href="#about"
          >
            <p
              onClick={() => setMenu("about")}
              style={{ color: menu === "about" ? "#1891c8" : "white" }}
            >
              About Me
            </p>
          </AnchorLink>
          {menu === "about" && (
            <div className="h-[3px] mt-[10px] w-full bg-gradient-to-r from-[#004d5f] to-[#1891c8]"></div>
          )}
        </li>
        <li className="text-[20px] font-medium cursor-pointer transition duration-500 hover:text-[#1891c8] hover:scale-[1.33] flex flex-col gap-[5px] md:pl-[100px]">
          <AnchorLink
            className="no-underline text-white hover:text-[#1891c8]"
            offset={50}
            href="#services"
          >
            <p
              onClick={() => setMenu("services")}
              style={{ color: menu === "services" ? "#1891c8" : "white" }}
            >
              Services
            </p>
          </AnchorLink>
          {menu === "services" && (
            <div className="h-[3px] mt-[10px] w-full bg-gradient-to-r from-[#004d5f] to-[#1891c8]"></div>
          )}
        </li>
        <li className="text-[20px] font-medium cursor-pointer transition duration-500 hover:text-[#1891c8] hover:scale-[1.33] flex flex-col gap-[5px] md:pl-[100px]">
          <AnchorLink
            className="no-underline text-white hover:text-[#1891c8]"
            offset={50}
            href="#work"
          >
            <p
              onClick={() => setMenu("work")}
              style={{ color: menu === "work" ? "#1891c8" : "white" }}
            >
              Portfolio
            </p>
          </AnchorLink>
          {menu === "work" && (
            <div className="h-[3px] mt-[10px] w-full bg-gradient-to-r from-[#004d5f] to-[#1891c8]"></div>
          )}
        </li>
        <li className="text-[20px] font-medium cursor-pointer transition duration-500 hover:text-[#1891c8] hover:scale-[1.33] flex flex-col gap-[5px] md:pl-[100px]">
          <AnchorLink
            className="no-underline text-white hover:text-[#1891c8]"
            offset={50}
            href="#contact"
          >
            <p
              onClick={() => setMenu("contact")}
              style={{ color: menu === "contact" ? "#1891c8" : "white" }}
            >
              Contact
            </p>
          </AnchorLink>
          {menu === "contact" && (
            <div className="h-[3px] mt-[10px] w-full bg-gradient-to-r from-[#004d5f] to-[#1891c8]"></div>
          )}
        </li>
      </ul>
      <div className="text-[20px] px-[30px] py-[15px] bg-gradient-to-r from-[#004d5f] to-[#1891c8] rounded-[50px] cursor-pointer transition duration-500 hover:text-white hover:scale-[1.05] hover:border hover:border-[#1891c8] hover:shadow-[0_4px_8px_0_rgba(4,106,129,0.5),0_6px_20px_0_rgba(24,145,200,0.4)] md:hidden">
        <AnchorLink
          className="no-underline text-white hover:text-[#1891c8]"
          offset={50}
          href="#contact"
        >
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar1;
