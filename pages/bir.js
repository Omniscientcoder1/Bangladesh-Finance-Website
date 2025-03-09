import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ApplyForDeposit from "../components/businessLoan/ApplyForDeposit";
import FeaturesRequirements from "/components/FeatureRequirements.js";

const Gunon = () => {
  return (
    <>
      <Head>
        <title>BIR- Bangladesh Finance</title>
        <meta name="description" content="BIR" />
      </Head>
      <section className="shurokkha-banner">
      </section>
      <FeaturesRequirements 
        title="BIR"
        description="Bangladesh Finance BIR (বীর) is a specialized NRB deposit product designed to provide secure, high-return savings for Non-Resident Bangladeshis (NRBs). With flexible tenure options, easy fund repatriation, and Shariah-compliant choices, BIR ensures hassle-free financial growth. NRBs can also invest in capital markets, access SME and agricultural loans, or secure Bijoy Loans for family members in Bangladesh. Backed by Bangladesh Finance’s trusted financial expertise, BIR is the perfect wealth-building solution for NRBs seeking financial security and investment opportunities in Bangladesh.
Start saving today with Bangladesh Finance BIR and enjoy high returns with maximum flexibility!
"
        pdfLink="/images/Individual_Deposit_Application_Form_2-v.3.pdf" 
        imageSrc="/images/TDR.png" 
        features={[
          "Specially designed for Non-Resident Bangladeshis (NRBs) to ensure safe and profitable savings. ",
          "Enjoy attractive interest rates to grow your wealth",
          "Choose from various deposit periods based on your financial goals.",
          "Seamless process for depositing and withdrawing funds from abroad.",
          "Available for those seeking Islamic banking solutions",
          "Option to invest in the stock market through Bangladesh Finance Capital",
          "Access to SME and agricultural financing to support business ventures in Bangladesh.",
          "Financing opportunities for NRBs looking to start a business in Bangladesh. ",
          "NRBs can secure loans for their family members in Bangladesh under the Bijoy Loan scheme.", 
          "Enjoy tax exemptions as per regulatory guidelines.", 
          "Convenient digital access to monitor and manage deposits from anywhere."
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

export default Gunon;