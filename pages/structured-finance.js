// pages/structured-finance.js

import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ApplyForLoan from "../components/businessLoan/ApplyForLoan";

const StructuredFinance = () => {
  return (
    <>
      <Head>
        <title>Structured Finance - Bangladesh Finance</title>
        <meta
          name="description"
          content="Bangladesh Finance provides structured financing solutions for corporates, financial institutions, and public sector enterprises."
        />
      </Head>
      <section className="structured-finance-banner">
        {/* Optional banner section */}
      </section>
      <section className="structured-finance-content">
        <div className="container">
          <h2>Structured Finance</h2>
          <p>
            At Bangladesh Finance Limited, our extensive local and foreign relationship network enables us to identify opportunities in both private and public markets for structured financing for corporates, financial institutions, and public sector enterprises. Our offerings under Structured Financing Unit range from arranging Syndicated Loans, Private and Listed Bonds, Export Credit/Multilateral-backed Debts, Cross Border Debt & Private Equity. We also act as Advisors for Mergers and Acquisitions, Project Finance, and Financing Strategy.
          </p>

          <h2>What We Offer</h2>
          <h3>Debt Solutions</h3>
          <ul>
            <li>• Syndicated Loans</li>
            <li>• Foreign Currency Loans</li>
            <li>• Export Credit Agency (ECA) backed project finance</li>
            <li>• Listed and Private Placement Bonds</li>
            <li>• Trade Financing</li>
            <li>• Bridge Finance</li>
            <li>• Debt Securitization</li>
          </ul>

          <h3>Advisory Services</h3>
          <p>
            Businesses need advisory services to tap the local and cross-border capital markets in order to achieve their growth visions and manage their risk appropriately.
          </p>
          <p>We help businesses by offering a variety of customized advisory service products which include:</p>
          <ul>
            <li>• Financial Advisory and Capital Restructuring</li>
            <li>• Project Advisory</li>
            <li>• Mergers & Acquisitions, Fairness Valuation</li>
            <li>• Debt/Equity Market Advisory</li>
            <li>• Joint Ventures</li>
          </ul>

          <h3>Equity Solutions</h3>
          <p>
            To raise equity from both local and cross-border capital markets, we provide a full range of equity solutions based on specific customer requirements such as:
          </p>
          <ul>
            <li>• Cross Border Private Equity</li>
            <li>• Issue Management for Initial Public Offering</li>
            <li>• Private Placement</li>
            <li>• Preference Shares</li>
            <li>• Leveraged/Management Buy-Out</li>
          </ul>

          {/* <div className="application-form">
            <a
              href="/images/Structured_Finance_Brochure.pdf" // Update this with the correct path
              className="btn btn-primary"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Ensures security and performance
            >
              Download Brochure
            </a>
          </div> */}
        </div>
      </section>
      <ApplyForLoan />
    </>
  );
};

export default StructuredFinance;
