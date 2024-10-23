import React from "react";

const BicycleSpecs = () => {
  return (
    <section className="bg-gray-100 py-10 mt-1">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
        {/* Specification 1 */}
        <div>
          <h3 className="text-lg font-bold text-gray-700">Frame</h3>
          <p className="text-gray-600">Aluminum Alloy</p>
        </div>
        {/* Specification 2 */}
        <div>
          <h3 className="text-lg font-bold text-gray-700">Brakes</h3>
          <p className="text-gray-600">Hydraulic Disc</p>
        </div>
        {/* Specification 3 */}
        <div>
          <h3 className="text-lg font-bold text-gray-700">Gears</h3>
          <p className="text-gray-600">21 Speed</p>
        </div>
        {/* Specification 4 */}
        <div>
          <h3 className="text-lg font-bold text-gray-700">Wheel Size</h3>
          <p className="text-gray-600">27.5 inches</p>
        </div>
        {/* Specification 5 */}
        <div>
          <h3 className="text-lg font-bold text-gray-700">Weight</h3>
          <p className="text-gray-600">14 kg</p>
        </div>
        {/* Specification 6 */}
        <div>
          <h3 className="text-lg font-bold text-gray-700">Delivery</h3>
          <p className="text-gray-600">Free</p>
        </div>
      </div>
    </section>
  );
};

export default BicycleSpecs;
