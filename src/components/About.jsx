import { motion } from "framer-motion";
import React from "react";

// Staggered text animation on scroll
const textContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section
      id="about-us"
      className="py-14 px-6 sm:px-16 md:px-24 text-center bg-gradient-to-r from-gray-400 via-gray-900 to-green-900 font-[Aboreto] mt-4"
    >
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-100 mb-6">
        About Us
      </h2>

      <motion.div
        variants={textContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.p
          variants={textItemVariants}
          className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-8"
        >
          At 329 Capital, we are a premier crypto advisory firm dedicated to
          helping individuals and organizations navigate the dynamic and
          evolving world of cryptocurrency. With a team of experienced
          professionals, we offer personalized advice, strategic insights, and
          comprehensive research to empower our clients in the digital asset
          space.
        </motion.p>

        <motion.p
          variants={textItemVariants}
          className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-8"
        >
          Our mission is to provide clear, actionable advice for crypto
          investors. We focus on long-term success by offering personalized
          investment strategies tailored to each client's goals.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
