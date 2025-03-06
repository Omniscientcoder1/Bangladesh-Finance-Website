// import React from "react";


// const FeaturesRequirements = ({ title, pdfLink, imageSrc }) => {
//   return (
//     <div className="features-requirements">
//       {/* Left Content Section - 60% of viewport width */}
//       <div className="text-content">
//         <h2>{title}</h2>
//         <p>
//           The term deposit investment solution is designed to provide competitive 
//           profit rates while maintaining compliance with financial principles. 
//           Clients benefit from structured investment plans with added flexibility, 
//           ensuring a secure and growth-oriented approach.
//         </p>

//         {/* Features and Requirements Section */}
//         <div className="feature-requirements-container">
//           <div className="feature-box">
//             <div className="feature-header">
//               <img src="/icons/feature-icon.svg" alt="Key Features" className="icon" />
//               <h3>KEY FEATURES</h3>
//             </div>
//             <ul className="feature-list">
//               <li><span className="checkmark">✔</span> Minimum Initial Deposit amount BDT 100,000</li>
//               <li>Tenure can be minimum 3 months to any</li>
//               <li>Auto Renewal facility available</li>
//               <li>Instant loan facility up to 80% of principal amount</li>
//             </ul>
//           </div>

//           <div className="requirement-box">
//             <div className="requirement-header">
//               <img src="/icons/requirement-icon.svg" alt="Requirements" className="icon" />
//               <h3>REQUIREMENTS</h3>
//             </div>
//             <ul className="requirement-list">
//               <li>Recent passport-size photograph of Account Holder and Nominee</li>
//               <li>Photograph of Nominee must be duly attested by the account holder</li>
//               <li>Photocopy of NID/Passport/Driving License of Account Holder and Nominee</li>
//               <li>TIN Certificate of Account Holder (if available)</li>
//             </ul>

//             {/* Apply Now Button - Uses Passed PDF Link */}
//             <a href={pdfLink} target="_blank" rel="noopener noreferrer">
//               <button className="apply-btn">APPLY NOW</button>
//             </a>
//           </div>
//         </div>
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
const FeaturesRequirements = ({ title, pdfLink, imageSrc, features, requirements }) => {
  return (
    <div className="features-requirements">
      {/* Left Content Section - 60% of viewport width */}
      <div className="text-content">
        <h2>{title}</h2>
        <p>
          The term deposit investment solution is designed to provide competitive 
          profit rates while maintaining compliance with financial principles. 
          Clients benefit from structured investment plans with added flexibility, 
          ensuring a secure and growth-oriented approach.
        </p>

        {/* Features and Requirements Section */}
        <div className="feature-requirements-container">
          <div className="feature-box">
            <div className="feature-header">
              <img src="/icons/feature-icon.svg" alt="Key Features" className="icon" />
              <h3>KEY FEATURES</h3>
            </div>
            <ul className="feature-list">
              {features.map((feature, index) => (
                <li key={index}><span className="checkmark">✔</span> {feature}</li>
              ))}
            </ul>
          </div>

          <div className="requirement-box">
            <div className="requirement-header">
              <img src="/icons/requirement-icon.svg" alt="Requirements" className="icon" />
              <h3>REQUIREMENTS</h3>
            </div>
            <ul className="requirement-list">
              {requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>

            {/* Apply Now Button - Uses Passed PDF Link */}
            <a href={pdfLink} target="_blank" rel="noopener noreferrer">
              <button className="apply-btn">APPLY NOW</button>
            </a>
          </div>
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
