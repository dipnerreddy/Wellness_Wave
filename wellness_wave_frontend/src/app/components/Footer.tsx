import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Brand Name */}
        <h2 className="text-2xl font-bold">WellnessWave</h2>

        {/* Middle Section - Links */}
        {/* <nav className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400 transition duration-300">Home</a>
          <a href="#" className="hover:text-gray-400 transition duration-300">About</a>
          <a href="#" className="hover:text-gray-400 transition duration-300">Services</a>
          <a href="#" className="hover:text-gray-400 transition duration-300">Contact</a>
        </nav> */}

        {/* Right Section - Copyright */}
        <p className="text-sm mt-4 md:mt-0 text-gray-400">
          © {new Date().getFullYear()} WellnessWave. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
