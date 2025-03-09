import React from 'react';
import Head from 'next/head';
import GetInTouch from 'components/contact/GetInTouch';
import FeaturesRequirements from "/components/FeatureRequirements.js";



const DepositScheme = () => {
  return (
    <>
      <Head>
        <title>Deposit Scheme - Bangladesh Finance</title>
        <meta name="description" content="Explore our deposit schemes designed to secure your financial future with Bangladesh Finance." />
      </Head>
      <section className="deposit-scheme-banner">

      </section>
                <FeaturesRequirements 
                  title="GUNON"
                  description="Looking for a smarter way to grow your savings? Bangladesh Finance গুণন combines the benefits of fixed deposits and monthly deposit schemes to maximize your returns. With গুণন, you can multiply your fixed deposit by making monthly payments over 2, 3, or 4 years.
          "
                  pdfLink="/images/Individual_Deposit_Application_Form_2-v.3.pdf" 
                  imageSrc="/images/TDR.png" 
                  features={[
                    "Minimum deposit amount BDT 100,000",
                    "Minimum monthly installment starting from BDT 3320",
                    "Initial deposit multiplies into Double in 24 months, triple in 36 months and quadruple in 48 months.",
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
      <GetInTouch />

     
    </>
  );
};

export default DepositScheme;

