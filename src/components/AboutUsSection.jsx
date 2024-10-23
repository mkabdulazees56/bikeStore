import React from "react";
import { FaBicycle, FaShieldAlt, FaTruck } from "react-icons/fa"; // Adjust icons accordingly

const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-16 px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section - Main Heading and Description */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-5xl font-bold leading-tight">
            You enjoy the ride, <br />
            we’ll handle the rest.
          </h1>
          <p className="mt-6 text-gray-400">
            At Cycle Masters, we are passionate about helping you find the perfect ride.
            From exploring nature to cruising through the city, we offer premium bikes
            designed for both adventure and comfort.
          </p>
          
          <button className="mt-8 bg-green-600 text-white px-12 py-3 rounded-lg shadow-md hover:bg-green-500">
            Buy Now
          </button>
        </div>

        {/* Right Section - Features with Icons */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex flex-col space-y-8">
          {/* Feature 1 */}
          <div className="flex items-center">
            <div className="bg-green-600 p-3 rounded-full">
              <FaBicycle className="text-white text-2xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Top-Quality Bikes</h3>
              <p className="text-gray-400">
                Our bicycles are crafted with precision, using the finest materials for
                durability and a smooth riding experience.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center">
            <div className="bg-green-600 p-3 rounded-full">
              <FaShieldAlt className="text-white text-2xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Safety First</h3>
              <p className="text-gray-400">
                Your safety is our priority. Our bikes are equipped with advanced safety features
                like hydraulic disc brakes and reinforced frames.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center">
            <div className="bg-green-600 p-3 rounded-full">
              <FaTruck className="text-white text-2xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Free Delivery</h3>
              <p className="text-gray-400">
                Enjoy free delivery right to your doorstep, ensuring your new bike arrives safely
                and ready to ride.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
