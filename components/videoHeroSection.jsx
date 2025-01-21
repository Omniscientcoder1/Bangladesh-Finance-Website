// // components/HeroSection.jsx
// import React from "react";

// const HeroSection = () => {
//   return (
//     <div className="hero-container">
//       {/* Video Background */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="hero-video"
//       >
//         <source src="https://www.youtube.com/watch?v=fNxjNFiwxiA" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Dark Overlay */}
//       <div className="overlay"></div>

//       {/* Text Content */}
//       <div className="hero-text">
//         <h1>Your Title Here</h1>
//         <p>Your subtitle or description here.</p>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// components/HeroSection.jsx
// components/HeroSection.jsx
// components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* YouTube Video Background */}
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/Y8BfyJE2PTw?autoplay=1&mute=1&loop=1&playlist=Y8BfyJE2PTw"
          title="YouTube Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      {/* Dark Overlay */}
      <div className="overlay"></div>

      {/* Text Content */}
      <div className="hero-text">
        <h1>Welcome To Bangladesh Finance</h1>
        <p>Your financial journey Starts Here</p>
      </div>
    </div>
  );
};

export default HeroSection;
