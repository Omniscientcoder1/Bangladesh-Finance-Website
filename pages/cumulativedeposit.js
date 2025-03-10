import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ApplyForDeposit from "../components/businessLoan/ApplyForDeposit";
import FeaturesRequirements from "/components/FeatureRequirements.js";
import Banner from "/components/banner";

const CumulativeDeposit = () => {
  return (
    <>
      <Head>
        <title>Cumulative Deposit - Bangladesh Finance</title>
        <meta name="description" content="Cumulative Deposit" />
      </Head>
      <Banner 
        imageUrl="/images/cumulativedeposit.png" 
        title="SAVINGS ACCOUNT" 
        subtitle="Grow your wealth with our secure savings solutions." 
      />
      <FeaturesRequirements 
        title="Cumulative Deposit"
        description="The Cumulative Deposit Scheme is a strategic savings option designed to help you maximize your returns over time by compounding the interest earned on your deposit. Under this scheme, the interest is added to the principal amount at the end of each year, resulting in a higher principal for the next year. This compounding effect ensures that your savings grow at a faster rate compared to regular savings accounts or fixed deposits.
"
        pdfLink="/images/Individual_Deposit_Application_Form_2-v.3.pdf" 
        imageSrc="/images/Secondery Banner- Cumulative Deposit.jpg" 
        features={[
          "Minimum deposit amount of BDT 25,000.Profit is paid on maturity",
          "Tenure can be minimum 24,36,48, 60 months.",
          "Interest payable at the time of maturity",
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

export default CumulativeDeposit;