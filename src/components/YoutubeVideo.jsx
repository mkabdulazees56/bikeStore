import React from "react";

const FullscreenVideoSection = () => {
  return (
    <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
      <iframe
        id="fullscreenVideo"
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/8RXApPZzOmg?autoplay=1&mute=1&loop=1&playlist=8RXApPZzOmg&controls=1"
        title="YouTube video"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default FullscreenVideoSection;
