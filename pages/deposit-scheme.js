// // pages/deposit-scheme.js

// import React from 'react';
// import Head from 'next/head';

// const DepositScheme = () => {
//   return (
//     <>
//       <Head>
//         <title>Deposit Scheme - Bangladesh Finance</title>
//         <meta name="description" content="Explore our deposit schemes designed to secure your financial future with Bangladesh Finance." />
//       </Head>
//       <section className="deposit-scheme-banner">
//         {/* <div className="container">
//           <h1>Deposit Scheme</h1>
//           <p>Secure your future with our tailored deposit schemes.</p>
//         </div> */}
//       </section>
//       <section className="deposit-scheme-content">
//         <div className="container">
//           <h2>Conventional Deposit Products</h2>
//           <p>Our conventional deposit products offer competitive interest rates to help you grow your savings.</p>
//           <h3>Application Form</h3>
//           <ul>
//             <li><a href="/images/Individual_Deposit_Application_Form_2-v.3.pdf" target="_blank" rel="noopener noreferrer">Individual Deposit Application Form</a></li>
//             <li><a href="/images/Conventional-Corporate-V4.pdf" target="_blank" rel="noopener noreferrer">Corporate Deposit Application Form</a></li>
//           </ul>
//           <h3>Steps to Apply</h3>
//           <ol>
//             <li>Download the Account Opening Form or collect it from your nearest Bangladesh Finance Branch.</li>
//             <li>Submit the completed form with all required documents.</li>
//             <li>Pay your opening amount by BEFTN/Cheque/Pay order in favor of "Bangladesh Finance Limited" and provide payment details to the nearest branch.</li>
//             <li>Once your payment has cleared, an Account Opening Receipt will be issued for delivery or pick up.</li>
//           </ol>
//           <h3>Required Documents</h3>
//           <ul>
//             <li>Recent passport-size photograph of Account Holder and Nominee.</li>
//             <li>Photograph of Nominee must be duly attested by the account holder.</li>
//             <li>Photocopy of NID/Passport/Driving License of Account Holder and Nominee.</li>
//             <li>TIN Certificate of Account Holder (if available).</li>
//           </ul>
//           <section className="islamic-deposit-banner">
//              {/* <div className="container">
//                 <h1>Islamic Banking</h1>
//                     <p>Experience Shari'ah-compliant banking with our exclusive Islamic deposit schemes.</p>
//              </div> */}
//             </section>
//           <h2>Islamic Deposit Products</h2>
//           <p>We also offer Shari’ah-compliant deposit products to cater to your Islamic banking needs.</p>
//           <h3>Application Form</h3>
//           <ul>
//             <li><a href="/images/Individual_Deposit_Application_Form_2-v.3.pdf" target="_blank" rel="noopener noreferrer">Individual Islamic Deposit Application Form</a></li>
//             <li><a href="/images/Conventional-Corporate-V4.pdf" target="_blank" rel="noopener noreferrer">Corporate Islamic Deposit Application Form</a></li>
//           </ul>
//           {/* <div className="apply-now">
//             <a href="/apply" className="btn btn-primary">Apply Now</a>
//           </div> */}
//         </div>
//       </section>
//     </>
//   );
// };

// export default DepositScheme;

// pages/deposit-scheme.js

import React from 'react';
import Head from 'next/head';
import GetInTouch from 'components/contact/GetInTouch';

const DepositScheme = () => {
  return (
    <>
      <Head>
        <title>Deposit Scheme - Bangladesh Finance</title>
        <meta name="description" content="Explore our deposit schemes designed to secure your financial future with Bangladesh Finance." />
      </Head>
      <section className="deposit-scheme-banner">
        {/* <div className="container">
          <h1>Deposit Scheme</h1>
          <p>Secure your future with our tailored deposit schemes.</p>
        </div> */}
      </section>
      <section className="deposit-scheme-content">
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
          <GetInTouch />
          </div>
        </div>
      </section>
    </>
  );
};

export default DepositScheme;
