import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaWallet, FaChalkboardTeacher, FaShieldAlt, FaGlobe, FaLightbulb } from "react-icons/fa";

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const services = [
    {
      icon: <FaChartLine className="text-4xl text-green-600 mb-4 mx-auto" />, 
      title: "Investment Advisory",
      description: "Our expert team provides personalized investment strategies to help you make informed decisions in the world of digital assets."
    },
    {
      icon: <FaWallet className="text-4xl text-blue-600 mb-4 mx-auto" />,
      title: "Portfolio Management",
      description: "We offer tailored portfolio management services, ensuring that your investments are optimized for maximum returns."
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-teal-600 mb-4 mx-auto" />,
      title: "Crypto Education",
      description: "We provide ongoing education to help you stay informed about the latest trends in cryptocurrency and blockchain technology."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-red-600 mb-4 mx-auto" />,
      title: "Secure Asset Management",
      description: "Ensuring the highest level of security for your crypto assets with state-of-the-art protection mechanisms."
    },
    {
      icon: <FaGlobe className="text-4xl text-purple-600 mb-4 mx-auto" />,
      title: "Global Market Insights",
      description: "Gain access to global crypto market trends and insights to stay ahead in the dynamic digital economy."
    },
    {
      icon: <FaLightbulb className="text-4xl text-yellow-600 mb-4 mx-auto" />,
      title: "Innovative Solutions",
      description: "We deliver cutting-edge solutions tailored to help you navigate and leverage the rapidly evolving crypto landscape."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-400 via-gray-900 to-green-900" id="services">
      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-extrabold text-white mb-6">Our Services</h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            329 Capital provides comprehensive crypto advisory services tailored to your specific needs, from investment strategies to education on blockchain technology.
          </p>
        </motion.div>

        {/* Service Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="text-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">{service.title}</h3>
              <p className="text-base text-gray-700 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;