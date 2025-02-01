import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import bg1 from "./assets/bg20.jpg"; 
import About from "./components/About";
import Crypto from "./components/Crypto";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-[Aboreto] ">
      <Navbar />
      <Hero
        title="329 Capital"
        subTitle="Home Of Investment Opportunities"
        backgroundImage={bg1} // Pass bg1 as a prop
      />
      <About/>
      <Crypto/>
      <Services/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
