import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 mb-4">
      <div className="flex justify-between items-center py-3 px-20">
        {/* Logo / Brand Name */}
        <div className="text-2xl font-bold text-green-600">BikeStore</div>
        
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links - hidden on mobile, visible on desktop */}
        <ul className={`hidden md:flex space-x-8 text-lg text-gray-700`}>
          {/* Use Link from react-scroll for smooth scroll */}
          <li><Link to="home" smooth={true} duration={500} className="hover:text-green-600 cursor-pointer">Home</Link></li>
          <li><Link to="bikes" smooth={true} duration={500} className="hover:text-green-600 cursor-pointer">Bikes</Link></li>
          <li><Link to="store" smooth={true} duration={500} className="hover:text-green-600 cursor-pointer">Store</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="hover:text-green-600 cursor-pointer">Contact Us</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="hover:text-green-600 cursor-pointer">About Us</Link></li>
        </ul>

        {/* Icons - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-700 hover:text-green-600">
            <FaSearch size={20} />
          </button>
          <button className="text-gray-700 hover:text-green-600">
            <FaShoppingCart size={20} />
          </button>
          <button className="text-gray-700 hover:text-green-600">
            <FaUser size={20} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-16 left-0 w-full bg-white shadow-lg z-10 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col items-center space-y-4 py-6">
            {/* Smooth scroll for mobile links as well */}
            <li><Link to="home" smooth={true} duration={500} className="hover:text-green-600 cursor-pointer">Home</Link></li>
            <li><Link to="bikes" smooth={true} duration={500} className="hover:text-green-600 cursor-pointer">Bikes</Link></li>
            <li><Link to="store" smooth={true} duration={500} className="hover:text-green-600 cursor-pointer">Store</Link></li>
            <li><Link to="contact" smooth={true} duration={500} className="hover:text-green-600 cursor-pointer">Contact Us</Link></li>
            <li><Link to="about" smooth={true} duration={500} className="hover:text-green-600 cursor-pointer">About Us</Link></li>
            <div className="flex items-center space-x-4 pt-4">
              <button className="text-gray-700 hover:text-green-600">
                <FaSearch size={20} />
              </button>
              <button className="text-gray-700 hover:text-green-600">
                <FaShoppingCart size={20} />
              </button>
              <button className="text-gray-700 hover:text-green-600">
                <FaUser size={20} />
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
