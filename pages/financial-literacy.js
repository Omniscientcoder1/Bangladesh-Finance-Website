
import React, { useState } from "react";
import Head from "next/head";

const FinancialLiteracy = () => {
  const [selectedSection, setSelectedSection] = useState("tab1");

  // Define section content
  const sections = {
    tab1: [
      { id: 1, name: "Introduction to Finance", image: "/images/financial literacy/Financial-Literacy-1.png" },
      { id: 2, name: "Financial Planning", image: "/images/financial literacy/Financial-Literacy-2.png" },
      { id: 3, name: "Financial Planning", image: "/images/financial literacy/Financial-Literacy-3.png" },
      { id: 4, name: "Financial Planning", image: "/images/financial literacy/Financial-Literacy-4.png" },
      { id: 5, name: "Financial Planning", image: "/images/financial literacy/Financial-Literacy-5.jpg" },
      { id: 6, name: "Financial Planning", image: "/images/financial literacy/Financial-Literacy-6.png" },
      { id: 7, name: "Financial Planning", image: "/images/financial literacy/Financial-Literacy-7.png" },
      { id: 8, name: "Financial Planning", image: "/images/financial literacy/Financial-Literacy-8.png" },
      { id: 9, name: "Financial Planning", image: "/images/financial literacy/Financial-Literacy-9.png" },
      { id: 10, name: "Financial Planning", image: "/images/financial literacy/Financial-Literacy-10.jpg" },
      { id: 11, name: "Financial Planning", image: "/images/financial literacy/Financial-Literacy-11.jpg" },
      { id: 12, name: "Financial Planning", image: "/images/financial literacy/Financial-Literacy-12.jpg" },
    ],
    tab2: [
      { id: 13, name: "Investment Strategies", image: "/images/financial literacy/1.-Principal-Branch-scaled.jpg" },
      { id: 14, name: "Principal Branch", image: "/images/financial literacy/2.-Bangshal-Branch-scaled.jpg" },
      { id: 15, name: "Bangshal Branch", image: "/images/financial literacy/3.-Uttara-Branch-scaled.jpg" },
      { id: 16, name: "Gazipur Branch", image: "/images/financial literacy/4.-Gazipur-Branch-scaled.jpg" },
      { id: 17, name: "Chattagram Branch", image: "/images/financial literacy/5.-Chattagram-Branch-scaled.jpg" },
      { id: 18, name: "Sylhet Branch", image: "/images/financial literacy/6.-Sylhet-Branch-scaled.jpg" },
      { id: 19, name: "Jessore Branch", image: "/images/financial literacy/7.-Jashore-Branch-scaled.jpg" },
    ],
    tab3: [
      { id: 20, name: "Saving Techniques", image: "/images/financial literacy/20231.jpg" },
      { id: 21, name: "Budgeting", image: "/images/financial literacy/20232.jpg" },
      { id: 22, name: "Budgeting", image: "/images/financial literacy/20233.jpg" },
      { id: 23, name: "Budgeting", image: "/images/financial literacy/20234.jpg" },
    ],
    tab4: [
      { id: 24, name: "Debt Management", image: "/images/financial literacy/Arthik-Shakkhorota-Shoptaho-01-1536x1536.jpg" },
      { id: 25, name: "Credit Score Tips", image: "/images/financial literacy/Arthik-Shakkhorota-Shoptaho-02-1536x1536.jpg" },
      { id: 26, name: "Credit Score Tips", image: "/images/financial literacy/Arthik-Shakkhorota-Shoptaho-03-1536x1536.jpg" },
      { id: 27, name: "Credit Score Tips", image: "/images/financial literacy/Arthik-Shakkhorota-Shoptaho-04-1536x1536.jpg" },
    ],
    tab5: {
      textAndDownloads: [
        { id: 1, text: "Financial Literacy Guidelines for Banks and Financial Institutions 2023", pdf: "/images/financial literacy/Financial-Literacy-Guidelines-for-Banks-and-Financial-Institutions.pdf" },
        { id: 2, text: "Financial Literacy Policy 2023", pdf: "/images/financial literacy/Financial-Literacy-Policy-BB.pdf" },
        { id: 3, text: "Financial Literacy Guidelines for Banks and Financial Institutions 2024", pdf: "/images/financial literacy/Financial-Literacy-Guideline-for-Banks-NBFIs-2024.pdf" },
      ],
      images: [
        // { id: 9, name: "Policy Document", image: "/images/sample7.jpg" },
        // { id: 10, name: "Regulations", image: "/images/sample8.jpg" },
      ],
    },
  };

  // Define new tab labels
  const tabNames = {
    tab1: "2024",
    tab2: "BRANCH ACTIVITY",
    tab3: "2023",
    tab4: "FINANCIAL LITERACY WEEK",
    tab5: "POLICIES & GUIDELINE",
  };

  return (
    <>
      <Head>
        <title>Financial Literacy</title>
        <meta name="description" content="Financial literacy information and resources." />
      </Head>

      <div className="financial-container">
        {/* Header Banner */}
        <div className="banner">
          <img src="/images/new-banner.jpg" alt="Financial Literacy Banner" className="banner-image" />
        </div>

        {/* Tabs Navigation */}
        <div className="navbar">
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              className={`nav-button ${selectedSection === section ? "active" : ""}`}
              onClick={() => setSelectedSection(section)}
            >
              {tabNames[section]}
            </button>
          ))}
        </div>

        {/* Tab 5: Policies & Guidelines (Text + PDFs) */}
        {selectedSection === "tab5" && (
          <div className="content-container">
            <div className="text-download-container">
              {sections.tab5.textAndDownloads.map((item) => (
                <div key={item.id} className="text-download-row">
                  <p className="text">{item.text}</p>
                  <a href={item.pdf} target="_blank" rel="noopener noreferrer" download className="download-button">
                    Download PDF
                  </a>
                </div>
              ))}
            </div>

            {/* Tab 5 Images */}
            <div className="card-container">
              {sections.tab5.images.map((item) => (
                <div key={item.id} className="card">
                  <img src={item.image} alt={item.name} className="card-image" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Tabs: Normal Image Grid */}
        {selectedSection !== "tab5" && Array.isArray(sections[selectedSection]) && (
          <div className="card-container">
            {sections[selectedSection].map((item) => (
              <div key={item.id} className="card">
                <img src={item.image} alt={item.name} className="card-image" />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FinancialLiteracy;
