// import React from "react";


// const FeaturesRequirements = ({ title, description, pdfLink, imageSrc, features, requirements, howItWorks }) => {
//   return (
//     <div className="features-requirements">
//       {/* Left Content Section - 60% of viewport width */}
//       <div className="text-content">
//         <h2>{title}</h2>
//         <p className="product-description">{description}</p>

//         {/* Features, Requirements, and How It Works Section */}
//         <div className="feature-requirements-container">
//           {/* Features Section */}
//           <div className="feature-box">
//             <div className="feature-header">
//               <img src="/icons/feature-icon.svg" alt="Key Features" className="icon" />
//               <h3>KEY FEATURES</h3>
//             </div>
//             <ul className="feature-list">
//               {features?.map((feature, index) => (
//                 <li key={index}><span className="checkmark"></span> {feature}</li>
//               ))}
//             </ul>
//           </div>

//           {/* Requirements Section */}
//           <div className="requirement-box">
//             <div className="requirement-header">
//               <img src="/icons/requirement-icon.svg" alt="Requirements" className="icon" />
//               <h3>REQUIREMENTS</h3>
//             </div>
//             <ul className="requirement-list">
//               {requirements?.map((requirement, index) => (
//                 <li key={index}>{requirement}</li>
//               ))}
//             </ul>
//           </div>

//           {/* How Does It Work Section */}
//           <div className="how-it-works-box">
//             <div className="how-it-works-header">
//               <img src="/icons/how-it-works-icon.svg" alt="How Does It Work" className="icon" />
//               <h3>HOW DOES IT WORK?</h3>
//             </div>
//             <ul className="how-it-works-list">
//               {howItWorks?.map((step, index) => (
//                 <li key={index}><span className="checkmark"></span> {step}</li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Apply Now Button */}
//         <a href={pdfLink} target="_blank" rel="noopener noreferrer">
//           <button className="apply-btn">APPLY NOW</button>
//         </a>
//       </div>

//       {/* Right Image Section - Uses Passed Image Source */}
//       <div className="image-container">
//         <img src={imageSrc} alt={title} />
//       </div>
//     </div>
//   );
// };

// export default FeaturesRequirements;


import React from "react";

const FeaturesRequirements = ({ title, description, pdfLink, imageSrc, features, requirements, howItWorks }) => {
  return (
    <div className="features-requirements">
      {/* Left Content Section - 60% of viewport width */}
      <div className="text-content">
        <h2>{title}</h2>
        <p className="product-description">{description}</p>

        {/* Features, Requirements, and How It Works Section */}
        <div className="feature-requirements-container">
          {/* Features Section */}
          <div className="feature-box">
            <div className="feature-header">
              <img src="/icons/feature-icon.svg" alt="Key Features" className="icon" />
              <h3>KEY FEATURES</h3>
            </div>
            <ul className="feature-list">
              {features?.map((feature, index) => (
                <li key={index}><span className="checkmark"></span> {feature}</li>
              ))}
            </ul>
          </div>

          {/* Requirements Section */}
          <div className="requirement-box">
            <div className="requirement-header">
              <img src="/icons/requirement-icon.svg" alt="Requirements" className="icon" />
              <h3>REQUIREMENTS</h3>
            </div>
            <ul className="requirement-list">
              {requirements?.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>

          {/* How Does It Work Section */}
          <div className="how-it-works-box">
            <div className="how-it-works-header">
              <img src="/icons/how-it-works-icon.svg" alt="How Does It Work" className="icon" />
              <h3>HOW DOES IT WORK?</h3>
            </div>
            <ul className="how-it-works-list">
              {howItWorks?.map((step, index) => (
                <li key={index}><span className="checkmark"></span> {step}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Centered Apply Now Button */}
        <div className="apply-btn-container">
          <a href={pdfLink} target="_blank" rel="noopener noreferrer">
            <button className="apply-btn">APPLY NOW</button>
          </a>
        </div>
      </div>

      {/* Right Image Section - Uses Passed Image Source */}
      <div className="image-container">
        <img src={imageSrc} alt={title} />
      </div>
    </div>
  );
};

export default FeaturesRequirements;
