import React from "react";
import Model2 from "../../assets/model-2.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ProfileCard from "../ProfileCard/ProfileCard";
import resume from "../../assets/FSD_JAHUR_RESUME2.0.pdf";

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "FSD_JAHUR_RESUME2.0.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center gap-8 md:gap-9 px-4 py-8 min-h-screen"
    >
      {/* Profile Card */}
      <div className="mt-10 w-full flex justify-center">
        <ProfileCard
          name=""
          title=""
          handle="Jahurhusen"
          status="Online"
          contactText="Contact Me"
          avatarUrl={Model2}
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => console.log("Contact clicked")}
        />
      </div>

      {/* Hero Title */}
      <h1 className="text-center w-full max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold leading-tight">
        <span className="bg-gradient-to-r from-[#046a81] to-[#1891c8] bg-clip-text text-transparent">
          I'm Jahurhusen Shaikh,
        </span>{" "}
        Fullstack Developer.
      </h1>

      {/* Hero Description */}
      <div className="text-center max-w-2xl lg:max-w-3xl space-y-4">
        <p className="text-lg sm:text-xl md:text-xl lg:text-2xl leading-relaxed">
          "Highly motivated Pre Final-year engineering student in Information
          Science, proficient in programming languages (C, Python, Java) and app
          development (Flutter & React Native).
        </p>
        <p className="text-lg sm:text-xl md:text-xl lg:text-2xl leading-relaxed">
          Seeking opportunities to apply skills to real-world projects and
          expand technical expertise in web development."
        </p>
      </div>

      {/* Hero Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-lg sm:text-xl md:text-2xl font-medium mb-12 w-full max-w-md sm:max-w-none">
        {/* Connect Button */}
        <div className="group">
          <AnchorLink
            className="block px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#046a81] to-[#1891c8] text-white cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-[#046a81]/30 hover:border hover:border-[#032027] min-w-[200px] text-center"
            offset={50}
            href="#contact"
          >
            Connect With Me
          </AnchorLink>
        </div>

        {/* Resume Button */}
        <div className="group cursor-pointer" onClick={handleResumeDownload}>
          <a className="block px-8 sm:px-12 py-3 sm:py-4 rounded-full border-2 border-white text-white cursor-pointer transition-all duration-300 hover:border-[#1891c8] hover:shadow-lg hover:shadow-[#046a81]/30 min-w-[200px] text-center">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
