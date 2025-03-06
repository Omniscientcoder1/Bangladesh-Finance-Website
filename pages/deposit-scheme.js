import React from 'react';
import Head from 'next/head';
import GetInTouch from 'components/contact/GetInTouch';
import FeaturesRequirements from "/components/FeatureRequirements.js";



const DepositScheme = () => {
  return (
    <>
      <Head>
        <title>Deposit Scheme - Bangladesh Finance</title>
        <meta name="description" content="Explore our deposit schemes designed to secure your financial future with Bangladesh Finance." />
      </Head>
      <section className="deposit-scheme-banner">

      </section>
            <FeaturesRequirements 
              pdfLink="/public/images/Individual_Deposit_Application_Form_2-v.3.pdf" 
              imageSrc="/images/SDG.png" 
              features={[
                "Minimum Initial Deposit amount BDT 100,000",
                "Tenure can be minimum 3 months to any",
                "Auto Renewal facility available",
                "Instant loan facility up to 80% of principal amount"
              ]}
              requirements={[
                "Recent passport-size photograph of Account Holder and Nominee",
                "Photograph of Nominee must be duly attested by the account holder",
                "Photocopy of NID/Passport/Driving License of Account Holder and Nominee",
                "TIN Certificate of Account Holder (if available)"
              ]}
            />
      <GetInTouch />
      {/* <section className="deposit-scheme-content">
        <div className="container">
          <div className="card-container">
            <div className="card">
              <h2>Conventional Deposit Products</h2>
              <p>Our conventional deposit products offer competitive interest rates to help you grow your savings.</p>
              <h3>Application Form</h3>
              <ul>
                <li><a href="/images/Individual_Deposit_Application_Form_2-v.3.pdf" target="_blank" rel="noopener noreferrer">Individual Deposit Application Form</a></li>
                <li><a href="/images/Conventional-Corporate-V4.pdf" target="_blank" rel="noopener noreferrer">Corporate Deposit Application Form</a></li>
              </ul>
            </div>
            <div className="card">
              <h2>Islamic Deposit Products</h2>
              <p>We also offer Shari’ah-compliant deposit products to cater to your Islamic banking needs.</p>
              <h3>Application Form</h3>
              <ul>
                <li><a href="/images/Individual_Deposit_Application_Form_2-v.3.pdf" target="_blank" rel="noopener noreferrer">Individual Islamic Deposit Application Form</a></li>
                <li><a href="/images/Conventional-Corporate-V4.pdf" target="_blank" rel="noopener noreferrer">Corporate Islamic Deposit Application Form</a></li>
              </ul>
            </div>
            <div className="card">
              <h3>Steps to Apply</h3>
              <ol>
                <li>Download the Account Opening Form or collect it from your nearest Bangladesh Finance Branch.</li>
                <li>Submit the completed form with all required documents.</li>
                <li>Pay your opening amount by BEFTN/Cheque/Pay order in favor of &quot; Bangladesh Finance Limited &quot; and provide payment details to the nearest branch.</li>
                <li>Once your payment has cleared, an Account Opening Receipt will be issued for delivery or pick up.</li>
              </ol>
            </div>
            <div className="card">
              <h3>Required Documents</h3>
              <ul>
                <li>Recent passport-size photograph of Account Holder and Nominee.</li>
                <li>Photograph of Nominee must be duly attested by the account holder.</li>
                <li>Photocopy of NID/Passport/Driving License of Account Holder and Nominee.</li>
                <li>TIN Certificate of Account Holder (if available).</li>
              </ul>
            </div>
          </div>
          <div className="apply-now">
          
          </div>
        </div>
      </section> */}
     
    </>
  );
};

export default DepositScheme;

// import React from 'react';
// import Head from 'next/head';

// const DepositScheme = () => {
//   return (
//     <>
//       <Head>
//         <title>Deposit Scheme - Bangladesh Finance</title>
//         <meta name="description" content="Explore our deposit schemes designed to secure your financial future with Bangladesh Finance." />
//       </Head>

//       {/* Banner Section */}
//       <section className="deposit-scheme-banner">
//         <div className="banner-text">
//           <h1>Deposit Scheme</h1>
//         </div>
//       </section>

//       {/* Deposit Scheme Content Section */}
//       <section className="deposit-scheme-content">
//         <div className="container">

//           {/* Card with Two Columns and Download Link */}
//           <div className="card">
//             <h2>Conventional Deposit Products</h2>
            
//             <div className="card-content">
//               <div className="column">
//                 <p>Our conventional deposit products offer competitive interest rates to help you grow your savings.</p>
//               </div>
//               <div className="column">
//                 <p>We provide flexible deposit tenures, attractive returns, and secure investment options.</p>
//               </div>
//             </div>

//             <div className="download-link">
//               <a href="/images/Individual_Deposit_Application_Form_2-v.3.pdf" target="_blank" rel="noopener noreferrer">
//                 Download Application Form
//               </a>
//             </div>
//           </div>

//           {/* Another Card */}
//           <div className="card">
//             <h2>Islamic Deposit Products</h2>
            
//             <div className="card-content">
//               <div className="column">
//                 <p>We offer Shari’ah-compliant deposit products to cater to your Islamic banking needs.</p>
//               </div>
//               <div className="column">
//                 <p>Our Islamic deposits follow profit-sharing principles to provide ethical and secure investments.</p>
//               </div>
//             </div>

//             <div className="download-link">
//               <a href="/images/Individual_Deposit_Application_Form_2-v.3.pdf" target="_blank" rel="noopener noreferrer">
//                 Download Application Form
//               </a>
//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default DepositScheme;
