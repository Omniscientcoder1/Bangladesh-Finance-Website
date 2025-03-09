import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ApplyForDeposit from "../components/businessLoan/ApplyForDeposit";
import FeaturesRequirements from "/components/FeatureRequirements.js";

const RetirementPlan = () => {
  return (
    <>
      <Head>
        <title>Retirement Plan - Bangladesh Finance</title>
        <meta name="description" content="Retirement Plan" />
      </Head>
      <section className="shurokkha-banner">
      </section>
      <FeaturesRequirements 
        title="BANGLADESH FINANCE RETIREMENT PLAN"
        description="Bangladesh Finance Retirement Plan is a secure pension solution designed for private sector employees in Bangladesh who lack traditional retirement benefits. With this plan, customers can save monthly for 10 years and receive a fixed monthly income for life after maturity. The deposited amount remains intact, allowing withdrawal anytime after maturity. Additionally, the plan includes insurance coverage, ensuring that in case of death or permanent disability, the nominee receives the full benefit without further payments. Plan your future today with Bangladesh Finance and enjoy financial security after retirement.
"
        pdfLink="/images/Individual_Deposit_Application_Form_2-v.3.pdf" 
        imageSrc="/images/TDR.png" 
        features={[
          "Save for 10 years and receive the same amount monthly for life.",
          "Withdraw anytime after maturity, closing further installments.",
          "Includes insurance—full benefit for death or disability after at least 3 payments.",
          "Preferential rate for home loan, car loan and retail loan.",
          "Monthly deposit Scheme for the first 10 years and converted to Profit Earners Scheme after maturity.",
          "Deposit tenure is 10 Years or 120 months",
          "Deposit Amount: Minimum Monthly installment BDT 1000."


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

export default RetirementPlan;