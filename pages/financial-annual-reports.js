import React, { useState } from "react";
import Head from "next/head";

const FinancialAnnualReports = () => {
  const [activeTab, setActiveTab] = useState("highlights");
  const [expandedAccordion, setExpandedAccordion] = useState({});
  const [modalContent, setModalContent] = useState(null);

  const openModal = (pdfLink) => {
    setModalContent(pdfLink);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const toggleAccordion = (tab, index) => {
    setExpandedAccordion((prev) => ({
      ...prev,
      [`${tab}-${index}`]: !prev[`${tab}-${index}`],
    }));
  };

  return (
    <>
      <Head>
        <title>Financial Annual Reports - Bangladesh Finance</title>
        <meta
          name="description"
          content="Explore the financial annual reports of Bangladesh Finance, including highlights, statements, and reports."
        />
      </Head>
      <section className="financial-reports">
        <div className="container">
          <h1>Financial Annual Reports</h1>
          <div className="tabs">
            <button
              className={`tab ${activeTab === "highlights" ? "active" : ""}`}
              onClick={() => setActiveTab("highlights")}
            >
              Financial Highlights
            </button>
            <button
              className={`tab ${activeTab === "statements" ? "active" : ""}`}
              onClick={() => setActiveTab("statements")}
            >
              Financial Statements
            </button>
            <button
              className={`tab ${activeTab === "reports" ? "active" : ""}`}
              onClick={() => setActiveTab("reports")}
            >
              Annual Reports
            </button>
          </div>

          <div className="tab-content">
            {/* Financial Highlights Tab */}
            {activeTab === "highlights" && (
              <div className="financial-highlights">
                <h2>Financial Highlights</h2>
                <div className="table-container">
                  <h3>Financial Performance</h3>
                  <p>*Taka in million</p>
                  <table className="financial-table">
                    <thead>
                      <tr>
                        <th></th>
                        <th>2018</th>
                        <th>2019</th>
                        <th>2020</th>
                        <th>2021</th>
                        <th>2022</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Investment in Subsidiary</td>
                        <td>850</td>
                        <td>850</td>
                        <td>850</td>
                        <td>850</td>
                        <td>850</td>
                      </tr>
                      <tr>
                        <td>Provision Against Investment</td>
                        <td>463</td>
                        <td>390</td>
                        <td>427</td>
                        <td>667</td>
                        <td>678</td>
                      </tr>
                      <tr>
                        <td>Total Assets</td>
                        <td>18,718</td>
                        <td>17,162</td>
                        <td>17,016</td>
                        <td>18,473</td>
                        <td>19,132</td>
                      </tr>
                      <tr>
                        <td>Loans, Leases and Advances</td>
                        <td>13,862</td>
                        <td>13,367</td>
                        <td>12,873</td>
                        <td>13,692</td>
                        <td>14,006</td>
                      </tr>
                      <tr>
                        <td>Total Deposits</td>
                        <td>9,579</td>
                        <td>8,837</td>
                        <td>8,616</td>
                        <td>9,569</td>
                        <td>9,797</td>
                      </tr>
                      <tr>
                        <td>Financing (Borrowings)</td>
                        <td>3,490</td>
                        <td>3,330</td>
                        <td>3,064</td>
                        <td>2,847</td>
                        <td>3,145</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="table-container">
                  <h3>Operational Performance</h3>
                  <p>*Taka in million</p>
                  <table className="financial-table">
                    <thead>
                      <tr>
                        <th></th>
                        <th>2018</th>
                        <th>2019</th>
                        <th>2020</th>
                        <th>2021</th>
                        <th>2022</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Operating Revenue</td>
                        <td>2,107</td>
                        <td>2,021</td>
                        <td>1,909</td>
                        <td>2,137</td>
                        <td>1,927</td>
                      </tr>
                      <tr>
                        <td>Financial Expenses</td>
                        <td>1,469</td>
                        <td>1,401</td>
                        <td>1,194</td>
                        <td>1,001</td>
                        <td>1,029</td>
                      </tr>
                      <tr>
                        <td>Operating Expenses</td>
                        <td>292</td>
                        <td>285</td>
                        <td>231</td>
                        <td>297</td>
                        <td>379</td>
                      </tr>
                      <tr>
                        <td>Operating Profit</td>
                        <td>347</td>
                        <td>335</td>
                        <td>485</td>
                        <td>839</td>
                        <td>518</td>
                      </tr>
                      <tr>
                        <td>Profit Before Taxation</td>
                        <td>417</td>
                        <td>407</td>
                        <td>451</td>
                        <td>523</td>
                        <td>313</td>
                      </tr>
                      <tr>
                        <td>Net Profit After Tax</td>
                        <td>282</td>
                        <td>191</td>
                        <td>315</td>
                        <td>324</td>
                        <td>305</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="table-container">
                  <h3>Financial Ratios</h3>
                  <table className="financial-table">
                    <thead>
                      <tr>
                        <th></th>
                        <th>2018</th>
                        <th>2019</th>
                        <th>2020</th>
                        <th>2021</th>
                        <th>2022</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Average Effective Tax Rate (%)</td>
                        <td>32.38%</td>
                        <td>53.11%</td>
                        <td>30.27%</td>
                        <td>38.14%</td>
                        <td>2.76%</td>
                      </tr>
                      <tr>
                        <td>Return on Equity</td>
                        <td>11.68%</td>
                        <td>7.20%</td>
                        <td>10.97%</td>
                        <td>10.55%</td>
                        <td>9.49%</td>
                      </tr>
                      <tr>
                        <td>Return on Assets</td>
                        <td>1.48%</td>
                        <td>1.06%</td>
                        <td>1.84%</td>
                        <td>1.82%</td>
                        <td>1.62%</td>
                      </tr>
                      <tr>
                        <td>Rate of Dividend</td>
                        <td>10%</td>
                        <td>10%</td>
                        <td>12%</td>
                        <td>12%</td>
                        <td>10%</td>
                      </tr>
                      <tr>
                        <td>EPS (Tk.)</td>
                        <td>1.85</td>
                        <td>1.14</td>
                        <td>1.69</td>
                        <td>1.36</td>
                        <td>1.25</td>
                      </tr>
                      <tr>
                        <td>Price Earning Ratio (Times)</td>
                        <td>8.80</td>
                        <td>8.79</td>
                        <td>17.22</td>
                        <td>40.02</td>
                        <td>35.17</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="table-container">
                  <h3>Equity Statistics</h3>
                  <p>*Taka in million</p>
                  <table className="financial-table">
                    <thead>
                      <tr>
                        <th></th>
                        <th>2018</th>
                        <th>2019</th>
                        <th>2020</th>
                        <th>2021</th>
                        <th>2022</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Authorized Capital</td>
                        <td>2,000</td>
                        <td>2,000</td>
                        <td>2,000</td>
                        <td>6,000</td>
                        <td>6,000</td>
                      </tr>
                      <tr>
                        <td>Number of Shares</td>
                        <td>152</td>
                        <td>168</td>
                        <td>168</td>
                        <td>178</td>
                        <td>188</td>
                      </tr>
                      <tr>
                        <td>Year-End Market Price Per Share (BDT)</td>
                        <td>16</td>
                        <td>10</td>
                        <td>29</td>
                        <td>54</td>
                        <td>44</td>
                      </tr>
                      <tr>
                        <td>Shareholders Equity</td>
                        <td>2,554</td>
                        <td>2,742</td>
                        <td>2,992</td>
                        <td>3,148</td>
                        <td>3,277</td>
                      </tr>
                      <tr>
                        <td>Market Capitalization (BDT in Million)</td>
                        <td>2,482</td>
                        <td>1,675</td>
                        <td>4,875</td>
                        <td>9,660</td>
                        <td>8,301</td>
                      </tr>
                      <tr>
                        <td>Net Asset Value Per Share</td>
                        <td>16.77</td>
                        <td>16.37</td>
                        <td>16.85</td>
                        <td>17.73</td>
                        <td>17.41</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="table-container">
                  <h3>Credit Rating</h3>
                  <table className="financial-table">
                    <thead>
                      <tr>
                        <th></th>
                        <th>2018</th>
                        <th>2019</th>
                        <th>2020</th>
                        <th>2021</th>
                        <th>2022</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Long Term</td>
                        <td>A+</td>
                        <td>A+</td>
                        <td>AA-</td>
                        <td>AA-</td>
                        <td>AA</td>
                      </tr>
                      <tr>
                        <td>Short Term</td>
                        <td>ST-2</td>
                        <td>ST-2</td>
                        <td>ST-2</td>
                        <td>ST-2</td>
                        <td>ST-1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            
            {/* Financial Statements Tab */}
{/* Financial Statements Tab */}
{activeTab === "statements" && (
  <div className="financial-statements">
    <h2>Financial Statements</h2>
    <table className="statements-table">
      <thead>
        <tr>
          <th>Year</th>
          <th>Reports</th>
        </tr>
      </thead>
      <tbody>
        {[
          {
            year: "2024",
            reports: [
              { text: "1st Quarter Financial Statement(Un-audited)", link: "/images/FS-Q1-2024.pdf" },
              { text: "2nd Quarter Financial Statement(Un-audited)", link: "/images/icon/FS-Q2-2024.pdf" },
              { text: "3rd Quarter Financial Statement (Un-audited)", link: "/images/icon/3rd-Quarter-Finalcial-Statement-2024.pdf" },,
            ],
          },
          {
            year: "2023",
            reports: [
              { text: "Audited Financial Statements 2023", link: "/images/icon/Financial-Statements_2023.pdf" },
              { text: "1st Quarter Financial Statement(Un-audited)", link: "/images/icon/BFL-Consolidated_Mar-2023-_Web-Site-Version-with-Signature-1.pdf" },
              { text: "2nd Quarter Financial Statement(Un-audited)", link: "/images/icon/BDF-FS-30-Jun-2023_Website.pdf" },
              { text: "3rd Quarter Financial Statement (Un-audited)", link: "/images/icon/BFL-Consolidated_Sep-2023-21.10.2023-V4.pdf" },
            ],
          },
          {
            year: "2022",
            reports: [
              { text: "Audited Financial Statements 2022", link: "/images/Final-audited-accounts-2022.pdf" },
              { text: "1st Quarter Financial Statement(Un-audited)", link: "/images/BFL-Q1-Un-audited-Financial-Statements.pdf" },
              { text: "2nd Quarter Financial Statement(Un-audited)", link: "/images/FS-30-Jun-2022-News-Paper.pdf" },
              { text: "3rd Quarter Financial Statement(Un-audited)", link: "/images/FS-Website-30-Sep-2022.pdf" },

            ],
          },
          {
            year: "2021",
            reports: [
              { text: "Audited Financial Statements 2021", link: "/images/Audited-Financaial-Statements-for-the-year-ended-31-12-2021.pdf" },
              { text: "1st Quarter Financial Statement(Un-audited)", link: "/images/Q1.pdf" },
              { text: "2nd Quarter Financial Statement(Un-audited)", link: "/images/icon/Q2.pdf" },
              { text: "3rd Quarter Financial Statement(Un-audited)", link: "/images/icon/Q3-FS-30-Sep-21_Website_Final.pdf" },

            ],
          },
          {
            year: "2020",
            reports: [
              { text: "Audited Financial Statements 2020", link: "/images/icon/Audited-FS-31-Dec-2020.pdf" },
              { text: "1st Quarter Financial Statement(Un-audited)", link: "/images/icon/Un-Audited-Q1-31-Mar-2020-BSEC.pdf" },
              { text: "2nd Quarter Financial Statement(Un-audited)", link: "/images/Un-Audited-Half-Yearly-30-Jun-2020-BSEC.pdf" },
              { text: "3rd Quarter Financial Statement(Un-audited)", link: "/images/icon/3rd-Quarter-Financial-Sep-20-DSE-CSE-BSEC-Website.pdf" },

            ],
          },
          {
            year: "2019",
            reports: [
              { text: "Consolidated Balance Sheet 2019", link: "/images/BDFinance-FS-2019-01-merged1.pdf" },
              { text: "1st Quarter Financial Statement(Un-audited)", link: "/images/BDF_Consolidated_Mar_2019.pdf" },
              { text: "2nd Quarter Financial Statement(Un-audited)", link: "/images/Half-Yearly-Accounts-BD-Finance_2019.pdf" },
              { text: "3rd Quarter Financial Statement(Un-audited)", link: "/images/3rd-Quarter-Financial-Statements_Website_2019.pdf" },

            ],
          },
          {
            year: "2018",
            reports: [
              { text: "Consolidated Balance Sheet 2018", link: "/images/Consolidated_Balance_Sheet_2018-Consolidated-Balance-Sheet-2018.pdf" },
              { text: "1st Quarter Financial Statement(Un-audited)", link: "/images/1st-Quarter-Financial-Statement-2018.pdf" },
              { text: "2nd Quarter Financial Statement(Un-audited)", link: "/images/2nd-Quarter-Financial-Statement-2018.pdf" },
              { text: "3rd Quarter Financial Statement(Un-audited)", link: "/images/3rd-Quarter-Financial-Statements_Website_2019.pdf" },

            ],
          },
          // Add more rows as needed
        ].map((item, rowIndex) => (
          <tr key={rowIndex}>
            <td>{item.year}</td>
            <td>
              <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                {item.reports.map((report, reportIndex) => (
                  <li key={reportIndex} style={{ marginBottom: "5px" }}>
                    <a
                      href={report.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {report.text}
                    </a>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

            {/* Financial Reports Tab */}
            {activeTab === "reports" && (
              <div className="financial-reports-content">
                <h2>Annual Reports</h2>
                <table className="reports-table">
                  <tbody>
                    {[
                      { title: "Annual Report 2023", link: "https://example.com/pdf/report1.pdf" },
                      { title: "Annual Report 2022", link: "https://example.com/pdf/report2.pdf" },
                      { title: "Annual Report 2021", link: "https://example.com/pdf/report3.pdf" },
                      { title: "Annual Report 2020", link: "https://example.com/pdf/report4.pdf" },
                      { title: "Annual Report 2019", link: "https://example.com/pdf/report5.pdf" },
                      { title: "Annual Report 2018", link: "https://example.com/pdf/report5.pdf" },
                    ].map((item, index) => (
                      <tr key={index}>
                        <td>{item.title}</td>
                        <td>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              openModal(item.link);
                            }}
                          >
                            Download
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Modal for PDFs */}
        {modalContent && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>
                ×
              </button>
              <iframe
                src={modalContent}
                title="PDF Viewer"
                width="100%"
                height="500px"
              />
            </div>
          </div>
        )}
      </section>

      <style jsx>{`
        .statements-table,
        .reports-table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }
        .statements-table td,
        .reports-table td {
          padding: 10px;
          border: 1px solid #ddd;
        }
        .statements-table a,
        .reports-table a {
          color: #007bff;
          text-decoration: none;
        }
        .statements-table a:hover,
        .reports-table a:hover {
          text-decoration: underline;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal {
          background: white;
          border-radius: 8px;
          padding: 20px;
          max-width: 800px;
          width: 90%;
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }
        iframe {
          border: none;
        }
      `}</style>
    </>
  );
};

export default FinancialAnnualReports;