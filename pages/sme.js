// // pages/sme.js

// import React from 'react';
// import Image from 'next/image';
// import Head from 'next/head';
// import ApplyForLoan from "../components/businessLoan/ApplyForLoan";

// const SME = () => {
//   return (
//     <>
//       <Head>
//         <title>SME Financing - Bangladesh Finance</title>
//         <meta
//           name="description"
//           content="Bangladesh Finance offers SME financing solutions to empower small and medium enterprises with the financial support they need to grow."
//         />
//       </Head>
//       <section className="sme-banner">
//         {/* Optional banner section */}
//       </section>
//       <section className="sme-content">
//         <div className="container">
//           <h1>SME</h1>
//           <p>
//             At Bangladesh Finance, we understand the critical role Small and Medium Enterprises (SMEs) play in driving the economy. Our SME financing solutions are designed to empower businesses by providing the financial support they need to grow, expand, and succeed.
//           </p>

//           <h2>What We Offer</h2>
//           <h3>Loan Products</h3>
//           <ul>
//             <li>• Working Capital Loans</li>
//             <li>• Term Loans</li>
//             <li>• Trade Finance</li>
//             <li>• Lease Financing</li>
//           </ul>

//           <h3>Key Features</h3>
//           <ul>
//             <li>• Competitive interest rates</li>
//             <li>• Flexible repayment schedules</li>
//             <li>• Quick loan processing and disbursement</li>
//             <li>• Dedicated relationship managers for personalized support</li>
//           </ul>

//           <h3>Eligibility Criteria</h3>
//           <ul>
//             <li>• Registered SMEs with a valid trade license</li>
//             <li>• Minimum 1 year of business operation</li>
//             <li>• Positive credit history</li>
//             <li>• Audited financial statements or relevant income proofs</li>
//           </ul>

//           <h3>Application Process</h3>
//           <ol>
//             <li>1. Download the SME Loan Application Form or collect it from your nearest Bangladesh Finance Branch.</li>
//             <li>2. Submit the completed form with all required documents.</li>
//             <li>3. Provide details of the loan requirement and repayment plan.</li>
//             <li>4. The application will be reviewed, and you will be notified of the approval status.</li>
//           </ol>

//           <h3>Required Documents</h3>
//           <ul>
//             <li>• Trade License</li>
//             <li>• Financial Statements</li>
//             <li>• Bank Statements (Last 6 months)</li>
//             <li>• Photocopy of NID/Passport of the business owner(s)</li>
//           </ul>

//           <div className="application-form">
//             <a
//               href="/images/sme-Application-form.pdf" // Update this with the correct path
//               className="btn btn-primary"
//               target="_blank" // Opens the link in a new tab
//               rel="noopener noreferrer" // Ensures security and performance
//             >
//               DOWNLOAD APPLICATION FORM
//             </a>
//           </div>
//           <div className="application-form">
//             <a
//               href="/images/Cluster-Finance-Policy.pdf" // Update this with the correct path
//               className="btn btn-primary"
//               target="_blank" // Opens the link in a new tab
//               rel="noopener noreferrer" // Ensures security and performance
//             >
//               CLUSTER FINANCE POLICY
//             </a>
//           </div>
//         </div>
//       </section>
//       <ApplyForLoan />
//     </>
//   );
// };

// export default SME;

import React from 'react';
import Head from 'next/head';
import ApplyForLoan from "../components/businessLoan/ApplyForLoan";

const SME = () => {
  return (
    <>
      <Head>
        <title>SME Financing - Bangladesh Finance</title>
        <meta
          name="description"
          content="Bangladesh Finance offers SME financing solutions to empower small and medium enterprises with the financial support they need to grow."
        />
      </Head>
      <section className="sme-banner">
        {/* Optional banner section */}
      </section>
      <section className="sme-content">
        <div className="container">
          <h1>SME Financing</h1>
          <p>
            At Bangladesh Finance, we understand the critical role Small and Medium Enterprises (SMEs) play in driving the economy. Our SME financing solutions are designed to empower businesses by providing the financial support they need to grow, expand, and succeed.
          </p>

          <div className="card-container">
            <div className="card">
              
              <h3>Loan Products</h3>
              <ul>
                <li>• Working Capital Loans</li>
                <li>• Term Loans</li>
                <li>• Trade Finance</li>
                <li>• Lease Financing</li>
              </ul>
            </div>

            <div className="card">
              <h2>Key Features</h2>
              <ul>
                <li>• Competitive interest rates</li>
                <li>• Flexible repayment schedules</li>
                <li>• Quick loan processing and disbursement</li>
                <li>• Dedicated relationship managers for personalized support</li>
              </ul>
            </div>

            <div className="card">
              <h2>Eligibility Criteria</h2>
              <ul>
                <li>• Registered SMEs with a valid trade license</li>
                <li>• Minimum 1 year of business operation</li>
                <li>• Positive credit history</li>
                <li>• Audited financial statements or relevant income proofs</li>
              </ul>
            </div>

            <div className="card">
              <h2>Application Process</h2>
              <ol>
                <li>1. Download the SME Loan Application Form or collect it from your nearest Bangladesh Finance Branch.</li>
                <li>2. Submit the completed form with all required documents.</li>
                <li>3. Provide details of the loan requirement and repayment plan.</li>
                <li>4. The application will be reviewed, and you will be notified of the approval status.</li>
              </ol>
            </div>

            <div className="card">
              <h2>Required Documents</h2>
              <ul>
                <li>• Trade License</li>
                <li>• Financial Statements</li>
                <li>• Bank Statements (Last 6 months)</li>
                <li>• Photocopy of NID/Passport of the business owner(s)</li>
              </ul>
            </div>
          </div>

          <div className="application-form">
            <a
              href="/images/sme-Application-form.pdf"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOWNLOAD APPLICATION FORM
            </a>
          </div>
          <div className="application-form">
            <a
              href="/images/Cluster-Finance-Policy.pdf"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              CLUSTER FINANCE POLICY
            </a>
          </div>
        </div>
      </section>
      <ApplyForLoan />
    </>
  );
};

export default SME;
