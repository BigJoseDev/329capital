import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-400 via-gray-900 to-green-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">© 2025 329 Capital. All Rights Reserved.</p>
        <div className="space-x-6">
          <a href="https://twitter.com" className="text-white hover:text-green-500">
            X
          </a>
          <a href="https://linkedin.com" className="text-white hover:text-green-500">
            LinkedIn
          </a>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
