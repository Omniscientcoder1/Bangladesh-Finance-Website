import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ApplyForDeposit from "../components/businessLoan/ApplyForDeposit";
import FeaturesRequirements from "/components/FeatureRequirements.js";

const ProfitFirst = () => {
  return (
    <>
      <Head>
        <title>Profit First Scheme - Bangladesh Finance</title>
        <meta name="description" content="Profit First" />
      </Head>
      <section className="shurokkha-banner">
      </section>
      <FeaturesRequirements 
        title="PROFIT FIRST SCHEME"
        description="The Profit First Scheme offered by Bangladesh Finance is a unique and innovative savings option that allows you to earn profits immediately at the time of deposit. Unlike traditional deposit schemes where you have to wait until the end of the term to receive your returns, the Profit First Scheme provides instant gratification by offering you profit on your deposit right from the start.
This scheme is designed for individuals who want to enjoy the benefits of their investment immediately without having to wait for the completion of the deposit tenure. It’s a perfect solution for those who want to maximize their cash flow and experience the joy of earning returns right away.
"
        pdfLink="/images/Individual_Deposit_Application_Form_2-v.3.pdf" 
        imageSrc="/images/TDR.png" 
        features={[
          "Minimum initial deposit amount of BDT 50,000.",
          "Deposit tenure is 3,4-6,12,13,24 and 60 months",
          "Interest payable at the beginning of the deposit.",
          "Auto renewal facility available.",
          "Instant loan facility up to 80% of principal amount."


        ]}
        requirements={[
          "Recent passport-size photograph of Account Holder and Nominee.",
          "Photograph of Nominee must be duly attested by the account holder",
          "Photocopy of NID/Passport/Driving License of Account Holder and Nominee",
          "TIN Certificate of Account Holder (if available)"
        ]}
        howItWorks={[
          "Download the Account Opening Form or collect it from your nearest Bangladesh Finance Branch.",
          "Submit the completed form with all required documents.",
          "Pay your opening amount by BEFTN/Cheque/Pay order in Favor of  'Bangladesh Finance Limited'  and provide payment details to the nearest branch.",
          "Once your payment has cleared, an Account Opening Receipt will be issued for delivery or pick up."
        ]}
      />
     
      <ApplyForDeposit />
    </>
  );
};

export default ProfitFirst;