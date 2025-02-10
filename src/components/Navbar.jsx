import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu toggle

  return (
    <nav className="bg-[#268995] text-white py-4 px-6 flex justify-between items-center relative">
      {/* Logo */}
      <h1 className="text-3xl font-greatVibes">Caren Mwaka</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-lg font-montserrat">
        <li><Link to="/" className="hover:underline transition duration-300">Home</Link></li>
        <li><Link to="/about" className="hover:underline transition duration-300">About</Link></li>
        <li><Link to="/contact" className="hover:underline transition duration-300">Contact</Link></li>
        <li><Link to="/projects" className="hover:underline transition duration-300">Projects</Link></li>
      </ul>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-white text-3xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />} {/* Toggle between menu and close icon */}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-[#268995] text-white text-center flex flex-col space-y-4 py-4 shadow-md md:hidden">
          <li><Link to="/" className="hover:underline transition duration-300" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="hover:underline transition duration-300" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" className="hover:underline transition duration-300" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link to="/projects" className="hover:underline transition duration-300" onClick={() => setIsOpen(false)}>Projects</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
