import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ApplyForDeposit from "../components/businessLoan/ApplyForDeposit";
import FeaturesRequirements from "/components/FeatureRequirements.js";
import Banner from "/components/banner";

const ProfitEarners = () => {
  return (
    <>
      <Head>
        <title>Profit Earner's Scheme - Bangladesh Finance</title>
        <meta name="description" content="Cumulative Deposit" />
      </Head>
      <Banner 
              imageUrl="/images/profitearnersbanner.png" 
              title="SAVINGS ACCOUNT" 
              subtitle="Grow your wealth with our secure savings solutions." 
            />
      <FeaturesRequirements 
        title="PROFIT EARNER'S SCHEME"
        description="The Profit Earners Scheme offered by Bangladesh Finance is a highly flexible and convenient savings solution tailored to suit a variety of financial needs. With this scheme, you can receive returns on your investment at fixed intervals, allowing you to choose a frequency that best matches your financial plans and goals.
Whether you prefer monthly, quarterly, half-yearly, or yearly returns, the Profit Earners Scheme is designed to provide consistent and reliable income over time. This makes it ideal for individuals who require regular cash flow to meet their financial obligations or enjoy the benefit of periodic returns. 

"
        pdfLink="/images/Individual_Deposit_Application_Form_2-v.3.pdf" 
        imageSrc="/images/Secondery Banner-Profit First Scheme.jpg" 
        features={[
          "Minimum initial deposit amount of BDT 50,000.",
          "Tenure can be minimum 12 months to 120 months.",
          "Interest payable frequency can be monthly/quarterly/semi-annually/annually.",
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

export default ProfitEarners;