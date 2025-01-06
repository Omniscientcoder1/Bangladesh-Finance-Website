import React, { useState } from "react";
import Head from "next/head";

const DividendDetails = () => {
  const [activeTab, setActiveTab] = useState("policy");

  const tabContent = {
    policy: {
      title: "Dividend Policy",
      description: "Details about the company's dividend policy go here.",
      pdfLink: "/images/Dividend-Policy-18.03.2021.pdf",
    },
    history: {
      title: "Dividend and AGM History",
      data: [
        { year: "2007", agm: "20-Apr-08", cash: "5%", stock: "10%" },
        { year: "2008", agm: "28-May-09", cash: "-", stock: "10%" },
        { year: "2009", agm: "30-May-10", cash: "-", stock: "20%" },
        { year: "2010", agm: "21-Jun-11", cash: "-", stock: "22%" },
        { year: "2011", agm: "3-Jun-12", cash: "-", stock: "10%" },
        { year: "2012", agm: "24-Jun-13", cash: "-", stock: "10%" },
        { year: "2013", agm: "18-Jun-14", cash: "-", stock: "10%" },
        { year: "2014", agm: "29-Jun-15", cash: "5%", stock: "-" },
        { year: "2015", agm: "9-Jun-16", cash: "-", stock: "10%" },
        { year: "2016", agm: "24-May-17", cash: "-", stock: "10%" },
        { year: "2017", agm: "7-Jun-18", cash: "-", stock: "10%" },
        { year: "2018", agm: "27-May-19", cash: "-", stock: "10%" },
        { year: "2019", agm: "10-Dec-20", cash: "10%", stock: "-" },
        { year: "2020", agm: "31-Mar-21", cash: "6%", stock: "6%" },
        { year: "2021", agm: "31-Mar-22", cash: "6%", stock: "6%" },
        { year: "2022", agm: "30-Apr-23", cash: "10%", stock: "-" },
      ],
    },
    compliance: {
      title: "Dividend Distribution Compliance Report",
      description: "Compliance reports related to dividend distribution go here.",
      pdfLink: "/images/Dividend-Compliance-Report-Div2022_24AGM.pdf",
    },
    unclaimed: {
      title: "Unclaimed Dividend",
      description: "Details about unclaimed dividends go here.",
      buttons: [
        { label: "List of Unclaimed Cash Dividend 2014", link: "/images/List-of-Unclaimed-Dividend-2014.pdf" },
        { label: "List of Unclaimed Cash Dividend 2019", link: "/images/List-of-Unclaimed-Cash-Dividend-2019.pdf" },
        { label: "List of Unclaimed Cash Dividend 2020", link: "/images/List-of-Unclaimed-Cash-Dividend-2020.pdf" },
        { label: "List of Unclaimed Cash Dividend 2021", link: "/images/Unclaimed-Cash-2021_31.12.2022_Web-1.pdf" },
      ],
    },
  };

  return (
    <>
      <Head>
        <title>Dividend Details</title>
        <meta
          name="description"
          content="Details of dividends, dividend policy, AGM history, and compliance reports of Bangladesh Finance."
        />
      </Head>

      {/* Header Banner */}
      <div className="header-banner">
        {/* <h1>Dividend Details</h1> */}
      </div>

      <section className="dividend-tabs">
        <div className="container">
          {/* Tabs */}
          <div className="tabs">
            <button
              className={`tab ${activeTab === "policy" ? "active" : ""}`}
              onClick={() => setActiveTab("policy")}
            >
              Dividend Policy
            </button>
            <button
              className={`tab ${activeTab === "history" ? "active" : ""}`}
              onClick={() => setActiveTab("history")}
            >
              Dividend and AGM History
            </button>
            <button
              className={`tab ${activeTab === "compliance" ? "active" : ""}`}
              onClick={() => setActiveTab("compliance")}
            >
              Dividend Distribution Compliance Report
            </button>
            <button
              className={`tab ${activeTab === "unclaimed" ? "active" : ""}`}
              onClick={() => setActiveTab("unclaimed")}
            >
              Unclaimed Dividend
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === "policy" && (
              <div className="tab-section">
                <h2>{tabContent.policy.title}</h2>
                <p>{tabContent.policy.description}</p>
                <button
                  className="pdf-button"
                  onClick={() => window.open(tabContent.policy.pdfLink, "_blank")}
                >
                  View Dividend Policy PDF
                </button>
              </div>
            )}

            {activeTab === "history" && (
              <div className="tab-section">
                <h2>{tabContent.history.title}</h2>
                <table className="dividend-table">
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>AGM</th>
                      <th>Cash Dividend</th>
                      <th>Stock Dividend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tabContent.history.data.map((row, index) => (
                      <tr key={index}>
                        <td>{row.year}</td>
                        <td>{row.agm}</td>
                        <td>{row.cash}</td>
                        <td>{row.stock}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "compliance" && (
              <div className="tab-section">
                <h2>{tabContent.compliance.title}</h2>
                <p>{tabContent.compliance.description}</p>
                <button
                  className="pdf-button"
                  onClick={() =>
                    window.open(tabContent.compliance.pdfLink, "_blank")
                  }
                >
                  View Compliance Report PDF
                </button>
              </div>
            )}

            {activeTab === "unclaimed" && (
              <div className="tab-section">
                <h2>{tabContent.unclaimed.title}</h2>
                <p>{tabContent.unclaimed.description}</p>
                <div className="button-column">
                  {tabContent.unclaimed.buttons.map((button, index) => (
                    <button
                      key={index}
                      className="pdf-button"
                      onClick={() => window.open(button.link, "_blank")}
                    >
                      {button.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default DividendDetails;
