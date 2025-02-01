import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import logo from "../assets/bg6.jpg"; // Ensure the path to your logo is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-3 z-50 bg-white shadow-md">
      <Link to="home" smooth={true} className="flex items-center">
        <img src={logo} alt="329 Capital Logo" className="h-14 cursor-pointer" />
      </Link>

      <ul className="hidden md:flex space-x-8 text-lg font-medium">
        <li>
          <Link
            to="about-us"
            smooth={true}
            className="text-black hover:text-green-500 cursor-pointer"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="crypto"
            smooth={true}
            className="text-black hover:text-green-500 cursor-pointer"
          >
            Crypto
          </Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            className="text-black hover:text-green-500 cursor-pointer"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="team"
            smooth={true}
            className="text-black hover:text-green-500 cursor-pointer"
          >
            Team
          </Link>
        </li>
        
      </ul>

      <Link
        to="contact"
        smooth={true}
        className="bg-gradient-to-r from-green-900 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-2 px-4 rounded-lg cursor-pointer shadow-lg hidden md:block"
      >
        Contact Us
      </Link>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl text-black">
          {isOpen ? "" : <HiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50   flex">
          <div className="w-3/4 bg-white shadow-lg p-6">
            {/* Close button */}
            <button onClick={toggleMenu} className="text-3xl text-black absolute top-4 right-4">
              <HiX />
            </button>
            <ul className="flex flex-col space-y-5 text-lg font-bold mb-5 mt-8">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  onClick={toggleMenu}
                  className="cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about-us"
                  smooth={true}
                  onClick={toggleMenu}
                  className="cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth={true}
                  onClick={toggleMenu}
                  className="cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="team"
                  smooth={true}
                  onClick={toggleMenu}
                  className="cursor-pointer"
                >
                  Team
                </Link>
              </li>
              
            </ul>
            <Link
              to="contact"
              smooth={true}
              onClick={toggleMenu}
              
              className="bg-gradient-to-r from-green-900 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg  "
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
