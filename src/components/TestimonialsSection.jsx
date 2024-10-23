import React from "react";
import biker1 from "../assets/pictures/profile1.jpg"; // replace with actual image paths
import biker2 from "../assets/pictures/profile2.jpg";
import biker3 from "../assets/pictures/profile3.jpg";

const BikeTestimonialsSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold">
          What Riders are <br /> saying about us
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          Discover what our happy cyclists have to say about our bikes and their riding experience.
        </p>
      </div>

      {/* Testimonials */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 gap-8">
        {/* Testimonial 1 */}
        <div className="md:w-1/3 text-center md:text-left">
          <div className="text-xl leading-relaxed">
            <span className="text-teal-400 text-4xl">“</span>
            The SpeedMaster Pro has completely transformed my cycling experience. It's smooth, fast, and extremely comfortable for long rides.
          </div>
          <div className="flex items-center mt-4">
            <img src={biker1} alt="Alex Rider" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold">Alex Rider</p>
              <p className="text-sm text-gray-400">Professional Cyclist</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="md:w-1/3 text-center md:text-left">
          <div className="text-xl leading-relaxed">
            <span className="text-teal-400 text-4xl">“</span>
            I've used several bikes, but none compare to the performance and durability of the SpeedMaster Pro. It's truly a game-changer.
          </div>
          <div className="flex items-center mt-4">
            <img src={biker2} alt="Samantha Cruz" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold">Samantha Cruz</p>
              <p className="text-sm text-gray-400">Outdoor Enthusiast</p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="md:w-1/3 text-center md:text-left">
          <div className="text-xl leading-relaxed">
            <span className="text-teal-400 text-4xl">“</span>
            Whether I'm racing or just enjoying a weekend ride, the SpeedMaster Pro always delivers top performance and comfort.
          </div>
          <div className="flex items-center mt-4">
            <img src={biker3} alt="John Doe" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold">John Doe</p>
              <p className="text-sm text-gray-400">Mountain Biker</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeTestimonialsSection;
