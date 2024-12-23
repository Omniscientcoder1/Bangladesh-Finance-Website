import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const SavingsScheme = () => {
  return (
    <>
      <Head>
        <title>Savings Scheme - Your Company</title>
        <meta
          name="description"
          content="Explore our savings schemes designed to secure your financial future with Your Company."
        />
      </Head>
      <section className="banner">
        <div className="bannerContent">
          <h1>Savings Scheme</h1>
          {/* <p>Secure your future with our tailored savings schemes.</p> */}
        </div>
      </section>
      <section className="content">
        <div className="container">
          <h2>Steps to Open an Account</h2>
          <ol>
            <li>
              Download the Account Opening Form or collect it from your nearest branch.
            </li>
            <li>Complete the form with all required documents.</li>
            <li>
              Pay your opening amount by BEFTN/Cheque/Pay order in favor of "Your Company" and provide payment details to the nearest branch.
            </li>
            <li>
              Once your payment has cleared, an Account Opening Receipt will be issued for delivery or pick up.
            </li>
          </ol>
          <h2>Required Documents</h2>
          <ul>
            <li>Recent passport-size photograph of Account Holder and Nominee.</li>
            <li>
              Nominee's photograph must be duly attested by the account holder.
            </li>
            <li>
              Photocopy of NID/Passport/Driving License of Account Holder and Nominee.
            </li>
            <li>TIN Certificate of Account Holder (if available).</li>
          </ul>
          <div className="downloadSection">
          <a
            href="/images/Individual_Deposit_Application_Form_2-v.3.pdf" // Update this with the correct path
             className="btn btn-primary"
            target="_blank" // Opens the link in a new tab
             rel="noopener noreferrer" // Ensures security and performance
              >
               Download Application Form
          </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SavingsScheme;
