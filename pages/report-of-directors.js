import React, { useState } from "react";
import Head from "next/head";


const ReportsOfDirectors = () => {
  const [activeTab, setActiveTab] = useState("directors");

  return (
    <>
      <Head>
        <title>Reports of Directors and CEO - Bangladesh Finance</title>
        <meta
          name="description"
          content="Explore the reports of Directors and the CEO of Bangladesh Finance."
        />
      </Head>
      <section className="reports-page">
        {/* Header Banner */}
        <div className="header-banner">
          {/* <h1>Reports of Directors & CEO</h1> */}
        </div>

        <div className="container">
          {/* Tabs */}
          <div className="tabs">
            <button
              className={`tab ${activeTab === "directors" ? "active" : ""}`}
              onClick={() => setActiveTab("directors")}
            >
              Report of Directors
            </button>
            <button
              className={`tab ${activeTab === "ceo" ? "active" : ""}`}
              onClick={() => setActiveTab("ceo")}
            >
              Report of CEO
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === "directors" && (
              <div className="tab-panel">
                <h2>Report of Directors</h2>
                <a
                  href="/documents/Report_of_Directors.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here to view the Report of Directors
                </a>
              </div>
            )}

            {activeTab === "ceo" && (
              <div className="tab-panel">
                <h2>Report of CEO</h2>
                <a
                  href="/images/CEOs-Report-2022.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here to view the Report of CEO
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportsOfDirectors;
