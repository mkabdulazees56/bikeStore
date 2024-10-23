import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import l1 from '../assets/logos/l1.png';
import l2 from '../assets/logos/l2.png';
import l3 from '../assets/logos/l3.png';
import l4 from '../assets/logos/l4.png';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CTASection = () => {
  const [slidesToShow, setSlidesToShow] = useState(4); // Default to 4 logos

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(2); // Show 2 logos on smaller screens
      } else {
        setSlidesToShow(4); // Show 4 logos on larger screens
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  return (
    <section className="text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Logos Section with Auto-Swipe */}
        <Slider {...settings} className="mb-16">
          <div className="flex justify-center">
            <img src={l1} alt="Logo 1" className="w-28 h-auto opacity-50" />
          </div>
          <div className="flex justify-center">
            <img src={l2} alt="Logo 2" className="w-28 h-auto opacity-50" />
          </div>
          <div className="flex justify-center">
            <img src={l3} alt="Logo 3" className="w-28 h-auto opacity-50" />
          </div>
          <div className="flex justify-center">
            <img src={l4} alt="Logo 4" className="w-28 h-auto opacity-50" />
          </div>
        </Slider>

        {/* CTA Section */}
        <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg py-12 px-8 text-center">
          <h2 className="text-4xl font-semibold mb-6">Explore Our Bicycle Collection!</h2>
          <p className="text-lg text-gray-400 mb-8">
            Discover a wide range of bicycles designed for every terrain. Get the perfect ride for your adventures today!
          </p>
          <button className="bg-green-600 text-black font-semibold py-3 px-8 rounded-full hover:bg-green-500 transition-all">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
