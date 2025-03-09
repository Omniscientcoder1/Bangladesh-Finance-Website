import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ApplyForDeposit from "../components/businessLoan/ApplyForDeposit";
import FeaturesRequirements from "/components/FeatureRequirements.js";

const TermDeposit = () => {
  return (
    <>
      <Head>
        <title>Term Deposit - Bangladesh Finance</title>
        <meta name="description" content="Term Deposit" />
      </Head>
      <section className="shurokkha-banner">
      </section>
      <FeaturesRequirements 
        title="Term Deposit"
        description="The Term Deposit Scheme is a financial product designed for individuals looking to save towards specific future goals, providing a safe and reliable way to grow their funds over a predetermined period. Under this scheme, the profit earned on the deposit is paid at maturity, ensuring a lump-sum return that can be utilized to meet your financial needs. This scheme is particularly suitable for individuals who are planning for medium to long-term financial requirements
"
        pdfLink="/images/Individual_Deposit_Application_Form_2-v.3.pdf" 
        imageSrc="/images/TDR.png" 
        features={[
          "Profit is paid on maturity",
          "Embedded auto renewal option",
          "Deposit tenure is 3,4-6,12,13,24 and 60 months.",
          "Minimum deposit amount of BDT 25,000.",
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

export default TermDeposit;