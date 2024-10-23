import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-10 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
          {/* Company Info */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-3xl font-bold mb-4 text-green-600 px-6">
              BikeStore
            </h2>
            <p className="text-gray-400 px-6">
              A new way to experience cycling. Discover reliable and secure
              bikes designed for performance and comfort.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row justify-between md:w-2/3 text-center md:text-left">
            <div className="mb-8 md:mb-0 md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#">Content</a>
                </li>
                <li>
                  <a href="#">How it Works</a>
                </li>
                <li>
                  <a href="#">Create</a>
                </li>
                <li>
                  <a href="#">Explore</a>
                </li>
                <li>
                  <a href="#">Terms & Services</a>
                </li>
              </ul>
            </div>

            <div className="mb-8 md:mb-0 md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Community</h4>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
                <li>
                  <a href="#">Suggestions</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Newsletters</a>
                </li>
              </ul>
            </div>

            <div className="md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Partner</h4>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#">Our Partner</a>
                </li>
                <li>
                  <a href="#">Become a Partner</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6 mt-6">
          <div className="flex space-x-6 text-gray-400"></div>
        </div>
        <div className="text-center text-gray-400">
          © {currentYear} All rights reserved. Development with{" "}
          <span className="text-pink-500">❤</span> by{" "}
          <a
            href="https://mkabdulazees.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline"
          >
            Abdul Azees
          </a>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
