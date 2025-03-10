import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ApplyForDeposit from "../components/businessLoan/ApplyForDeposit";
import FeaturesRequirements from "/components/FeatureRequirements.js";
import Banner from "/components/banner";

const DoubleMoney = () => {
  return (
    <>
      <Head>
        <title>Double Money Deposit Scheme - Bangladesh Finance</title>
        <meta name="description" content="Double Money Deposit Scheme" />
      </Head>
      <Banner 
                    imageUrl="/images/doublemoneybanner.png" 
                    title="SAVINGS ACCOUNT" 
                    subtitle="Grow your wealth with our secure savings solutions." 
                  />
      <FeaturesRequirements 
        title="DOUBLE MONEY DEPOSIT SCHEME"
        description="The Double Money Deposit Scheme offered by Bangladesh Finance is a one-of-a-kind savings plan, designed to help individuals achieve their financial goals through a safe and structured investment option. With this scheme, you can double the amount you deposit over a fixed tenure of 5 years and 6 months, ensuring guaranteed returns and financial growth.
This scheme is particularly suitable for people who are seeking a long-term, risk-free investment that promises a substantial return without the uncertainties typically associated with more volatile investment options. By opting for the Double Money Deposit Scheme, you are choosing a secure and predictable path toward increasing your wealth, all while being backed by the financial stability and reliability of Bangladesh Finance.
"
        pdfLink="/images/Individual_Deposit_Application_Form_2-v.3.pdf" 
        imageSrc="/images/TDR.png" 
        features={[
          "Minimum initial deposit amount of BDT 50,000.",
          "Tenure is 5 years 6 months.",
          "Can be opened for 3,5,8 or 10 years.",
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

export default DoubleMoney;