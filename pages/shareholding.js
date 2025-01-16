import React, { useState } from "react";
import Head from "next/head";

const FinancialAnnualReports = () => {
  const [activeTab, setActiveTab] = useState("highlights");

  // Dynamic table data
  const tableData = [
    {
      name: "ANWAR STEEL MILLS LTD.",
      status: "Director",
      shares: "9,004,232",
      percentage: "4.78",
    },
    {
      name: "MR. FURKAAN MUHAMMAD N HOSSAIN (NOMINATED BY ANWAR STEEL MILLS LTD)",
      status: "Nominated Director",
      shares: "–",
      percentage: "–",
    },
    {
      name: "ANWAR ISPAT LTD",
      status: "Director",
      shares: "14,223,130",
      percentage: "7.56",
    },
    {
      name: "MRS. SHAHNAZ RASHID (NOMINATED BY ANWAR ISPAT LTD)",
      status: "Nominated Director",
      shares: "–",
      percentage: "–",
    },
    {
      name: "HOSSAIN DYNG & PRNTING MILLS LTD.",
      status: "Director",
      shares: "7,857,468",
      percentage: "4.17",
    },
    {
      name: "MR. MANWAR HOSSAIN (NOMINATED BY HOSSAIN DYING & PRNTING MILLS LTD)",
      status: "Nominated Director",
      shares: "1,219,240",
      percentage: "0.65",
    },
    {
      name: "KHALED IRON & STEELS MILLS LTD.",
      status: "Director",
      shares: "3,797,998",
      percentage: "2.02",
    },
    {
      name: "MR. MD. ASADUZZAMAN KHAN (NOMINATED BY KHALED IRON & STEEL MILLS LTD)",
      status: "Nominated Director",
      shares: "–",
      percentage: "–",
    },
    {
      name: "ANWAR SILK MILLS LTD.",
      status: "Director",
      shares: "3,805,265",
      percentage: "2.02",
    },
    {
      name: "MR. YOUSUF AMAN (NOMINATED BY ANWAR SILK MILLS LTD)",
      status: "Nominated Director",
      shares: "–",
      percentage: "–",
    },
    {
      name: "MEHMUD INDUSTRIES (PVT.) LTD.",
      status: "Director",
      shares: "7,125,828",
      percentage: "3.79",
    },
    {
      name: "MR. IHTIAZ YOUSUF (NOMINATED BY MEHMUD INDUSTRIES (PVT.) LTD)",
      status: "Nominated Director",
      shares: "–",
      percentage: "–",
    },
    {
      name: "MR. IMTIYAJ YOUSUF",
      status: "Director",
      shares: "8,189,251",
      percentage: "4.35",
    },
    {
      name: "MR. ABDUR RASHID SALAM",
      status: "Sponsor",
      shares: "1,363,052",
      percentage: "0.72",
    },
    {
      name: "MR. CHOWDHURY MONWAR AHMED SIDDIQUI",
      status: "Sponsor",
      shares: "432,339",
      percentage: "0.23",
    },
    {
      name: "MR. IHTESHAMUR RAHMAN",
      status: "Sponsor",
      shares: "402,260",
      percentage: "0.21",
    },
    {
      name: "MR. CHOWDHURY ERTEZA AHMED SIDDIQUI",
      status: "Sponsor",
      shares: "10,321",
      percentage: "0.01",
    },
    {
      name: "MR. MD. ROKONUZZAMAN, FCA",
      status: "Independent Director (Non-shareholding)",
      shares: "–",
      percentage: "–",
    },
    {
      name: "MR. IQBAL UDDIN AHMED",
      status: "Independent Director (Non-shareholding)",
      shares: "–",
      percentage: "–",
    },
    {
      name: "MR. MD. KYSER HAMID",
      status: "Managing Director &CEO",
      shares: "–",
      percentage: "–",
    },
  ];

  return (
    <>
      <Head>
        <title>Shareholding Structure</title>
        <meta
          name="description"
          content="Shareholding Structure of Bangladesh Finance"
        />
      </Head>

      {/* Header Banner */}
      <div className="header-banner"></div>

      <section className="financial-reports">
        <div className="container">
          {/* Tabs */}
          <div className="tabs">
            <button
              className={`tab ${activeTab === "highlights" ? "active" : ""}`}
              onClick={() => setActiveTab("highlights")}
            >
              Shareholding Structure
            </button>
            <button
              className={`tab ${activeTab === "statements" ? "active" : ""}`}
              onClick={() => setActiveTab("statements")}
            >
              Shareholding Position
            </button>
            <button
              className={`tab ${activeTab === "reports" ? "active" : ""}`}
              onClick={() => setActiveTab("reports")}
            >
              Status of buy/sale of sponsors&apos;/ Directors&apos; share
            </button>
          </div>

          <div className="tab-content">
            {/* Financial Highlights Tab */}
            {activeTab === "highlights" && (
              <div className="financial-highlights">
                <h2>Shareholding Structure</h2>
                <div className="banner-image">
                  <img
                    src="/images/Shareholding-01.png"
                    alt="Shareholding Structure Banner"
                    className="banner-img"
                  />
                </div>
              </div>
            )}

            {/* Financial Statements Tab */}
            {activeTab === "statements" && (
              <div className="financial-statements">
                <h2>Financial Statements</h2>
                <table className="statements-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Status</th>
                      <th>No. of Shares</th>
                      <th>Percentage (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, index) => (
                      <tr key={index}>
                        <td>{row.name}</td>
                        <td>{row.status}</td>
                        <td>{row.shares}</td>
                        <td>{row.percentage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Annual Reports Tab */}
            {activeTab === "reports" && (
              <div className="financial-reports-content">
                <h2>Status of Buy/Sale of Sponsors&apos; Shares</h2>
                <p>Content for this section goes here.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default FinancialAnnualReports;
