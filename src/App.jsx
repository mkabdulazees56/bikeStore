import React from "react";
import WelcomeSection from "./components/WelcomeSection";
import AboutUsSection from "./components/AboutUsSection";
import BicycleSpecs from "./components/BikeSpecs";
import ProductShowcaseSection from "./components/ProductShowcaseSection";
import FullscreenVideo from "./components/YoutubeVideo";
import BicycleShowcase from "./components/BicycleShowcase";

import TestimonialsSection from "./components/TestimonialsSection";
import CallToActionSection from "./components/CallToActionSection";
import ContactUsSection from "./components/ContactUsSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <WelcomeSection />
      <BicycleSpecs />
      <AboutUsSection />
      <ProductShowcaseSection />
      <FullscreenVideo />
      <BicycleShowcase />
      <TestimonialsSection />
      <CallToActionSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}

export default App;
