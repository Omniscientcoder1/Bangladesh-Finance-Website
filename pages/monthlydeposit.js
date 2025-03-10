import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ApplyForDeposit from "../components/businessLoan/ApplyForDeposit";
import FeaturesRequirements from "/components/FeatureRequirements.js";
import Banner from "/components/banner";

const MonthlyDeposit = () => {
  return (
    <>
      <Head>
        <title>Monthly Deposit Scheme - Bangladesh Finance</title>
        <meta name="description" content="Monthly Deposit Scheme" />
      </Head>
       <Banner 
              imageUrl="/images/monthlydepositbanner.png" 
              title="SAVINGS ACCOUNT" 
              subtitle="Grow your wealth with our secure savings solutions." 
            />
      <FeaturesRequirements 
        title="MONTHLY DEPOSIT SCHEME"
        description="The Monthly Deposit Scheme offered by Bangladesh Finance is a unique installment-based deposit option designed to help individuals build their savings steadily over time. With this scheme, customers can contribute a fixed amount of money at regular intervals (monthly), and in return, they will receive an agreed lump sum amount at the end of the deposit term.
This scheme is ideal for individuals who prefer saving a fixed amount each month and want to receive a larger sum at the end of the term, either for a specific goal or as a means to accumulate wealth over time"
        pdfLink="/images/Individual_Deposit_Application_Form_2-v.3.pdf" 
        imageSrc="/images/Secondery Banner-monthlydeposit.jpg" 
        features={[
          "Monthly instalment-based savings scheme.",
          "Instalment of TK.500 or its multiple.",
          "Can be opened for 3,5,8 or 10 years.",
          "Get principal and interest at maturity.",
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

export default MonthlyDeposit;