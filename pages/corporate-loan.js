// pages/corporateLoans.js

import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ApplyForLoan from "../components/businessLoan/ApplyForLoan";
import AboutBusiness from "../components/businessLoan/AboutBusiness";
import Banner from "../components/businessLoan/Banner";
import Counter from "../components/businessLoan/Counter";
import HowItWorks from "../components/businessLoan/HowItWorks";
import Loan from "../components/businessLoan/Loan";
import SecurityArea from "../components/businessLoan/SecurityArea";
import Faq from "../components/faq/Faq";

const CorporateLoans = () => {
  return (
    <>

      <Head>
        <title>Corporate Loans - Bangladesh Finance</title>
        <meta name="description" content="Bangladesh Finance Corporate Loans provide tailored financial solutions to meet the diverse needs of businesses." />
      </Head>
      <section className="corporate-loans-banner">
        {/* Optional banner section */}
      </section>
      {/* <Banner /> */}
      <AboutBusiness />
      {/* <Loan /> */}
     
      {/* <Counter /> */}
      {/* <HowItWorks /> */}
      {/* <Faq /> */}
      <section className="corporate-loans-content">
        <div className="container">
          {/* <h2>Key Features</h2>
          <ul>
            <li>• Flexible loan amounts based on business requirements</li>
            <li>• Competitive interest rates</li>
            <li>• Customizable repayment schedules</li>
            <li>• Dedicated relationship managers for personalized support</li>
          </ul> */}

          <h2>Types of Corporate Loans</h2>
          <ul>
            <li>• Working Capital Financing</li>
            <li>• Term Loans</li>
            <li>• Project Financing</li>
            <li>• Trade Finance Solutions</li>
            <li>• Lease Financing</li>
          </ul>

          <h2>Eligibility Criteria</h2>
          <ul>
            <li>• Registered businesses with valid trade licenses</li>
            <li>• Minimum 2 years of business operation</li>
            <li>• Audited financial statements.</li>
            <li>• Collateral (if required based on loan type)</li>
          </ul>

          <h2>Application Process</h2>
          <ol>
            <li>1. Download the Corporate Loan Application Form or collect it from your nearest Bangladesh Finance Branch.</li>
            <li>2. Submit the completed form with all required documents.</li>
            <li>3. Provide details of the loan requirement and repayment plan.</li>
            <li>4. The application will be processed, and you will be notified about the loan approval status.</li>
          </ol>

          <h2>Required Documents</h2>
          <ul>
            <li>• Business Registration Certificate/Trade License</li>
            <li>• Memorandum of Association and Articles of Association</li>
            <li>• Audited Financial Statements </li>
            <li>• Photocopy of NID/Passport of business owner(s)/directors</li>
            <li>• Bank statements (Last 6 months)</li>
          </ul>

          {/* <div className="application-form">
            <a
              href="/images/Corporate_Loan_Application_Form.pdf" // Update this with the correct path
              className="btn btn-primary"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Ensures security and performance
            >
              Download Application Form
            </a>
          </div> */}
        </div>
      </section>
      {/* <SecurityArea /> */}
      <ApplyForLoan />
    </>
  );
};

export default CorporateLoans;
