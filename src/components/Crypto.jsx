import React from "react";
import { FaChartLine, FaBitcoin, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const Crypto = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="crypto">
      <div className="container mx-auto px-6 py-16">
        {/* Why Invest in Crypto */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Invest in Crypto?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Cryptocurrency is reshaping global finance, offering unique opportunities for growth, diversification, and innovation. With increasing adoption and a rapidly expanding market, now is the perfect time to explore the potential of digital assets.
          </p>
        </motion.div>

        {/* Key Reasons to Invest */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {[{
            icon: <FaBitcoin className="text-yellow-500 text-5xl mx-auto mb-4" />, 
            title: "High Growth Potential", 
            description: "Cryptocurrencies like Bitcoin and Ethereum have shown significant returns, outperforming traditional assets over the past decade."
          }, {
            icon: <FaChartLine className="text-green-500 text-5xl mx-auto mb-4" />, 
            title: "Portfolio Diversification", 
            description: "Digital assets provide a new avenue for diversification, reducing risk and increasing potential rewards in investment portfolios."
          }, {
            icon: <FaGlobe className="text-blue-500 text-5xl mx-auto mb-4" />, 
            title: "Global Accessibility", 
            description: "Cryptocurrencies enable borderless transactions and financial inclusion, opening markets to anyone with internet access."
          }].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: index * 0.2, duration: 0.6 } }
              }}
            >
              {item.icon}
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-lg text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Market Growth Visualization */}
        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeIn}
        >
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">The Future of Digital Assets</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            The rapid rise of digital assets underscores their growing role in modern finance. Our insights help navigate this dynamic market, maximizing your investment potential.
          </p>
          <motion.img
            src="https://www.grandviewresearch.com/static/img/research/cryptocurrency-market.png"
            alt="Cryptocurrency Market Growth Chart"
            className="mx-auto rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
            viewport={{ once: false }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Crypto;
