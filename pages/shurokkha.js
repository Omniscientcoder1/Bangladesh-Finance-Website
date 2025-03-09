import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ApplyForDeposit from "../components/businessLoan/ApplyForDeposit";
import FeaturesRequirements from "/components/FeatureRequirements.js";

const Shurokkha = () => {
  return (
    <>
      <Head>
        <title>Shurokkha - Bangladesh Finance</title>
        <meta name="description" content="Bangladesh Finance Shurokkha is a deposit product combining the financial and health security of the depositor." />
      </Head>
      <section className="shurokkha-banner">
      </section>
      <FeaturesRequirements 
        title="TDR ACCOUNT"
        description="The TDR Account offers high-yield deposit options with flexible tenures and competitive profit-sharing options."
        pdfLink="/documents/TDR_Application.pdf" 
        imageSrc="/images/TDR.png" 
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
        howItWorks={[
          "Open an account with the required documents",
          "Deposit a minimum of BDT 100,000",
          "Choose the tenure and profit-sharing options",
          "Receive profits periodically based on the agreement"
        ]}
      />
     
      <ApplyForDeposit />
    </>
  );
};

export default Shurokkha;
