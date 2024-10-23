import React from 'react';
import bikeImage2 from "../assets/pictures/2.jpg";

const BicycleShowcaseSection = () => {
  return (
    <div id="bikes" className="container mx-auto px-6 overflow-x-hidden py-16">
      <div className="flex flex-col md:flex-row items-center justify-between px-20">
        {/* Left: Product Image */}
        <div className="md:w-1/2">
          <img
            src={bikeImage2}
            alt="Bicycle"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right: Product Information */}
        <div className="md:w-1/2 text-left md:text-right mt-8 md:mt-0">
          <h4 className="text-xl font-semibold text-gray-500 uppercase">New Arrival</h4>
          <h2 className="text-4xl font-bold text-gray-800 my-4">
            Discover the SpeedMaster Pro
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            The SpeedMaster Pro bicycle is designed for performance and comfort,
            making it the ultimate choice for cycling enthusiasts.
          </p>
          <button className="bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-500 transition">
            Get Yours Now
          </button>
          <p className="text-md text-gray-600 mt-3">Free shipping on all orders.</p>
        </div>
      </div>
    </div>
  );
};

export default BicycleShowcaseSection;
