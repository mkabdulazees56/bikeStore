import React from "react";
import bikeImage from "../assets/pictures/1.jpg";

const WelcomeSection = () => {
  return (
    <section id="home" className="bg-white flex flex-col md:flex-row items-center justify-between py-5 mt-14 px-6 md:px-20">
      
      {/* Left Section - Text Content */}
      <div className="max-w-lg text-center md:text-left md:mr-5">
        <h1 className="leading-tight">
          <span className="text-xl font-medium text-brown-800 block">
            Embrace the Power of
          </span>
          <span className="text-6xl md:text-8xl font-bold text-green-600 block tracking-widest">
            Cycling
          </span>
        </h1>
        <p className="text-gray-600 mt-6">
          At Cycle Masters, we believe that the joy of cycling begins with the
          perfect ride. Our mission is to bring you premium bikes that offer a
          smooth, exhilarating experience, whether you're exploring nature or
          riding through the city.
        </p>
        <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-green-600 text-white px-12 py-3 rounded-lg shadow-md hover:bg-green-500">
            Buy Now
          </button>
          <button className="bg-white border border-green-400 text-green-600 px-8 py-3 rounded-lg shadow-md hover:border-green-500 hover:shadow-lg">
            Discover
          </button>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="relative mt-10 md:mt-0 flex justify-center">
        <img
          src={bikeImage}
          alt="Bike"
          className="w-full max-w-lg scale-110"
        />
      </div>
    </section>
  );
};

export default WelcomeSection;
