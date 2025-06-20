import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import MyWork from "./components/MyWork/MyWork";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
// import CircularGallery from "./components/CircularGallery/CircularGallery";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* 
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div> */}
      <MyWork />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
