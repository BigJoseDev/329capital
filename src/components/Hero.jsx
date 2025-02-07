import React from "react";
import { motion } from "framer-motion";

const Hero = ({ title, subTitle, backgroundImage }) => {
  return (
    <section
    id="home"
      className="relative w-full h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the passed backgroundImage
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay with reduced opacity */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Adjusted opacity (0.3 instead of 0.5)
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-7xl font-bold mb-6">{title}</h1>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl font-medium leading-snug">{subTitle}</p>
      </motion.div>
    </section>
  );
};

export default Hero;
