import React from "react";
import { motion } from "framer-motion";


// Import brand logos
// import binanceLogo from "../assets/binance.png";
// import coinbaseLogo from "../assets/coinbase.png";
import mavinLogo from "../assets/mavin.webp"


const brands = [
  { name: "Mavin", logo: mavinLogo },
  { name: "Mavin", logo: mavinLogo },
  { name: "Mavin", logo: mavinLogo },
  { name: "Mavin", logo: mavinLogo },
 
  
];

const TrustedBrands = () => {
  return (
    <section className="py-16 bg-gray-100" id="trusted-brands">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
        Trusted by Leading Brands & Institutions
        </h2>
        <p className="text-lg text-gray-700 mb-8">
        Our expertise is relied upon by top-tier companies, financial institutions, and investors.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={brand.logo} alt={brand.name} className="h-16 w-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
