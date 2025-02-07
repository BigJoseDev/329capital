import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import bg1 from "./assets/bg32.jpg"; 
import About from "./components/About";
import Crypto from "./components/Crypto";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TrustedBrands from "./components/TrustedBrands";

const App = () => {
  return (
    <div className="font-[Aboreto] ">
      <Navbar />
      <Hero
  title="329 Capital"
  subTitle={(
    <>
      Home Of Investment Opportunities <br /> & <br /> Endless Possibilities
    </>
  )}
  backgroundImage={bg1} // Pass bg1 as a prop
/>
      <About/>
      <Crypto/>
      <Services/>
      <TrustedBrands/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
