// // pages/shurokkha.js

// import React from 'react';
// import Image from 'next/image';
// import Head from 'next/head';
// import ApplyForDeposit from "../components/businessLoan/ApplyForDeposit";

// const Shurokkha = () => {
//   return (
//     <>
//       <Head>
//         <title>Shurokkha - Bangladesh Finance</title>
//         <meta name="description" content="Bangladesh Finance Shurokkha is a deposit product combining the financial and health security of the depositor." />
//       </Head>
//       <section className="shurokkha-banner">
//         {/* <div className="container">
//           <h1>Shurokkha</h1>
//           <p>A unique deposit product combining financial and health security.</p>
//         </div> */}
//       </section>
//       <section className="shurokkha-content">
//         <div className="container">
//           <h2>Key Features</h2>
//           <ul>
//             <li>Minimum Initial Deposit amount BDT 100,000</li>
//             <li>Tenure can be minimum 3 months to any</li>
//             <li>Auto Renewal facility available</li>
//             <li>Instant loan facility up to 80% of principal amount</li>
//           </ul>
//           <h2>Healthcare Facilities</h2>
//           <ul>
//             <li>Unlimited Free Doctor Call (audio/video/chat)</li>
//             <li>Maximum Hospital Cash Coverage - BDT 40,000</li>
//             <li>Covid-19 Isolation - BDT 2,000</li>
//             <li>Life Insurance - BDT 10,000</li>
//             <li>Free medicine home delivery at 8-12% discount</li>
//             <li>Up to 50% discount at 200+ hospitals, diagnostic centers, and lifestyle outlets nationwide</li>
//             <li>BDT 1,600 reimbursement for 2 OPD visits</li>
//           </ul>
//           <h2>Application Steps</h2>
//           <ol>
//             <li>Download the Account Opening Form or collect it from your nearest Bangladesh Finance Branch.</li>
//             <li>Submit the completed form with all required documents.</li>
//             <li>Pay your opening amount by BEFTN/Cheque/Pay order in favor of "Bangladesh Finance Limited" and provide payment details to the nearest branch.</li>
//             <li>Once your payment has cleared, an Account Opening Receipt will be issued for delivery or pick up.</li>
//           </ol>
//           <h2>Required Documents</h2>
//           <ul>
//             <li>Recent passport-size photograph of Account Holder and Nominee</li>
//             <li>Photograph of Nominee must be duly attested by the account holder</li>
//             <li>Photocopy of NID/Passport/Driving License of Account Holder and Nominee</li>
//             <li>TIN Certificate of Account Holder (if available)</li>
//           </ul>
//           <div className="application-form">
//           <a
//             href="/images/Individual_Deposit_Application_Form_2-v.3.pdf" // Update this with the correct path
//              className="btn btn-primary"
//             target="_blank" // Opens the link in a new tab
//              rel="noopener noreferrer" // Ensures security and performance
//               >
//                Download Application Form
//           </a>
//           </div>
//         </div>
//       </section>
//       <ApplyForDeposit />
//     </>
//   );
// };

// export default Shurokkha;


// pages/shurokkha.js

import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ApplyForDeposit from "../components/businessLoan/ApplyForDeposit";

const Shurokkha = () => {
  return (
    <>
      <Head>
        <title>Shurokkha - Bangladesh Finance</title>
        <meta name="description" content="Bangladesh Finance Shurokkha is a deposit product combining the financial and health security of the depositor." />
      </Head>
      <section className="shurokkha-banner">
        {/* <div className="container">
          <h1>Shurokkha</h1>
          <p>A unique deposit product combining financial and health security.</p>
        </div> */}
      </section>
      <section className="shurokkha-content">
        <div className="container">
          <div className="card-container">
            <div className="card">
              <h2>Key Features</h2>
              <ul>
                <li>Minimum Initial Deposit amount BDT 100,000</li>
                <li>Tenure can be minimum 3 months to any</li>
                <li>Auto Renewal facility available</li>
                <li>Instant loan facility up to 80% of principal amount</li>
              </ul>
            </div>
            <div className="card">
              <h2>Healthcare Facilities</h2>
              <ul>
                <li>Unlimited Free Doctor Call (audio/video/chat)</li>
                <li>Maximum Hospital Cash Coverage - BDT 40,000</li>
                <li>Covid-19 Isolation - BDT 2,000</li>
                <li>Life Insurance - BDT 10,000</li>
                <li>Free medicine home delivery at 8-12% discount</li>
                <li>Up to 50% discount at 200+ hospitals, diagnostic centers, and lifestyle outlets nationwide</li>
                <li>BDT 1,600 reimbursement for 2 OPD visits</li>
              </ul>
            </div>
            <div className="card">
              <h2>Application Steps</h2>
              <ol>
                <li>Download the Account Opening Form or collect it from your nearest Bangladesh Finance Branch.</li>
                <li>Submit the completed form with all required documents.</li>
                <li>Pay your opening amount by BEFTN/Cheque/Pay order in favor of &quot;Bangladesh Finance Limited&quot; and provide payment details to the nearest branch.</li>
                <li>Once your payment has cleared, an Account Opening Receipt will be issued for delivery or pick up.</li>
              </ol>
            </div>
            <div className="card">
              <h2>Required Documents</h2>
              <ul>
                <li>Recent passport-size photograph of Account Holder and Nominee</li>
                <li>Photograph of Nominee must be duly attested by the account holder</li>
                <li>Photocopy of NID/Passport/Driving License of Account Holder and Nominee</li>
                <li>TIN Certificate of Account Holder (if available)</li>
              </ul>
            </div>
          </div>
          <div className="application-form">
            <a
              href="/images/Individual_Deposit_Application_Form_2-v.3.pdf"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Application Form
            </a>
          </div>
        </div>
      </section>
      <ApplyForDeposit />
    </>
  );
};

export default Shurokkha;
