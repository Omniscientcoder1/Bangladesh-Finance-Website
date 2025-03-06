// shariahCommittee.js
import React, { useState } from "react";

const ShariahCommittee = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const committeeMembers = [
    {
        id: 1,
        name: "Prof. Dr. Giash Uddin Talukder",
        description: (
          <>
            <strong>Chairman</strong>
            <br />
           <p>Dr. Giash is currently heading the Shariah supervisory committee of Bangladesh Finance Limited as the Chairman. He studied Diploma in Arabic & Islamic Culture at King Saud University, Riyadh, KSA, and did PhD in The Miracle of the holy Quran- University of Chittagong. At the age of 51, he brings expertise in Islamic Financing to the board of Bangladesh Finance Islamic Wing Shariah Supervisory Committee. Apart from this role, he is also leading Central Shari’ah Board for Islamic Banks of Bangladesh (CSBIB) as Chairman. He is also playing a role as a member of the Shari&apos;ah Advisory Committee of Bangladesh Bank. Along with these roles, he is also working as Chairman in some other prominent banks in Bangladesh and teaching at the University of Chittagong as a Professor of the Department of Arabic.</p> 
          </>
        ),
        image: "/images/Prof.-Dr.-Giash-Uddin-Talukder-scaled.jpeg",
      },
      {
        id: 2,
        name: "Md. Abdul Awwal Sarker",
        description: (
          <>
            <strong>Member</strong>
            <br />
            <div className="text-justify">
              <p>Mr. Abdul Awwal is currently playing role at Bangladesh Finance Islamic wing as a member to the Shari’ah Supervisory Committee. In his academic life, he studied MS in International Finance at Loughborough University School of Business and Economics and completed M.A. in Economics from Rajshahi University. He has been working as a prominent researcher in Islamic Banking & Finance for quite a long period. Throughout his career he had served Bangladesh Bank as an Executive Director (Research); Al-Arafah Islami Bank Training and Research Institute as Director General; Institute of Islamic Banking and Insurance (London, UK), Bangladesh Regional Office as Director General. Apart from these he is also a part of Shari’ah Supervisory Committee of several leading banks. He is also contributing as a working committee member of Accounting and Auditing Organization for Islamic Financial Institutions (AAOIFI), Bahrain.</p>
            </div>
          </>
        ),
        image: "/images/Md.-Abdul-Awwal-Sarker-scaled.jpeg",
      },
      {
        id: 3,
        name: "Dr. Zubair Muhammad Ehsanul Haque, CSAA",
        description: (
          <>
            <strong>Member</strong>
            <br />
            <p>Dr. Zubair is currently working as a member to the Shari’ah Supervisory Committee of Bangladesh Finance Islamic Wing. He is teaching at the University of Dhaka as a professor of department of Arabic. He has done his PhD from the University of Dhaka. He has served The Government Republic of Bangladesh as District Information Officer (20th BCS). Apart from this, he is also a part of Shari’ah Supervisory Committee of several leading banks. He is also contributing to Centre for Zakat Management (CZM) as a member of Shari’ah Supervisory Committee. He is a Certified Shari’ah Supervisor and Auditor from Accounting and Auditing Organization for Islamic Financial Institutions (AAOIFI), Bahrain
            </p>
            </>
        ),
        image: "/images/Dr.-Zubair-Muhammad-Ehsanul-Haque-CSAA-scaled.jpeg",
      },
      {
        id: 4,
        name: "Dr. Md. Ruhul Amin Rabbani",
        description: (
          <>
            <strong>Member</strong>
            <br />
            <p>Dr. Ruhul is currently working as a member to the Shari’ah Supervisory Committee of Bangladesh Finance Islamic Wing. He studied Doctor of Philosophy, Department of Fiqh and Usul al Fiqh at International Islamic University Malaysia and completed Master of Theology & Islamic Studies from Islamic University, Kushtia. Currently he is working as an Assistant Professor of Islamic Studies at Asian University of Bangladesh. He is also contributing as a member to the Shari’ah Supervisory Committee of several banks. Apart from this, he is also holding the position of Assistant Director at Bangladesh Islamic Law Research and Legal Aid Centre.</p>
          </>
        ),
        image: "/images/Dr.-Md.-Ruhul-Amin-Rabbani-scaled.jpeg",
      },
      {
        id: 5,
        name: "Md. Kyser Hamid",
        description: (
          <>
            <strong>Member</strong>
            <br />
            <p>Md. Kyser Hamid is leading Bangladesh Finance as Managing Director and CEO with 17 years of experience working in Bangladesh&apos;s financial services industry. He is well-known for transforming BRAC Bank&apos;s retail business while serving as the bank&apos;s Head of Retail Sales and Regional Distribution. He was instrumental in building a robust customer base and a reliable business model at IDLC Finance & DBH. For both organizations, he was the change agent. Under his able leadership, Bangladesh Finance already achieved AA credit rating, ICAB Award, ICSB Award, SAFA Award, Most Sustainable Financial Institution Award, and many other recognitions.</p>

<p>He played a key role in developing IPDC into a AAA-rated and greatest financial institution in the country while serving as Deputy Managing Director. He has a North South University MBA in Marketing and a University of Dhaka BBA majoring in Accounting and Information Systems. In India, Malaysia, and Singapore, he received a wide range of training. He also took part in a number of knowledge-sharing forums and business visits in South Asia, the Middle East, Asia Pacific, UK, and USA.</p>

<p>Along with this glorious corporate career, Mr. Kyser also contributed to many financial and social welfare entities. Currently, he’s an Executive Committee Member of the Bangladesh Association of Publicly Listed Companies (BAPLC) and a key contributor for the interest of publicly listed companies, Standing Committee Member of FBCCI on NBFIs, and a key member of BLFCA (Bangladesh Leasing & Finance Companies Association). He is also a veteran rotary member (PHF) and is contributing significantly to the social well-being of the country. Additionally, he was a visiting professor and adjunct faculty member for ASA University and BGMEA University for 5 years.</p>

          </>
        ),
        image: "/images/KYSER HAMID-scaled-1.jpeg",
      },
      {
        id: 6,
        name: "Munshi Md. Ashfaqul Alam",
        description: (
          <>
            <strong>Head of Islamic Wing</strong>
            <br />
            <p>Mr. Munshi Md. Ashfaqul Alam has more than 15 years of experience in Banking and Financial Institutions. Currently, he is working as a member of the Shariáh Supervisory Committee of Bangladesh Finance Islamic wing and Head of the Islamic Finance Division.</p>

<p>He has an outstanding record of professional excellence in several Banks and Financial Institutions both at home and abroad. His areas of expertise are in Islamic finance, Branch Banking, inward foreign remittance business, correspondent banking, channel development, sales force management, and investment risk management. Mr. Munshi’s previous employers include, among others, Social Islami Bank Ltd., Jamuna Bank Ltd., BRAC Bank Ltd., Asia Exchange Centre LLC, UAE, UAE Exchange Centre LLC, UAE, Atish Dipankar University of Science and Technology, and the University of Information Technology & Sciences.</p>

<p>He has obtained his MBA and BBA, both from the Department of Accounting & Information Systems, University of Dhaka. Mr. Munshi is a Certified Shariáh Advisor & Auditor (CSAA) from AAOIFI (Accounting & Auditing Organization for Islamic Financial Institutions, Bahrain). He is also a Certified Islamic Banking & Finance Professional (CIBFP) from BIBM (Bangladesh Institute of Bank Management).</p>

          </>
        ),
        image: "/images/Mr.-Munshi-Md.-Ashfaqul-Alam-scaled.jpeg",
      },
  ];

  return (
    <div className="committee-container">
      {/* Banner */}
      <div className="banner">
        <img
          src="/images/shariah.png"
          alt="Shariah Committee Banner"
          className="banner-image"
        />
      </div>

      <h2 className="title">Shariah Supervisory Committee</h2>

      {/* Cards */}
      <div className="cards-container">
        {committeeMembers.map((member) => (
          <div
            key={member.id}
            className="cards"
            onClick={() => setSelectedMember(member)}
          >
            <img
              src={member.image}
              alt={member.name}
              className="cards-image"
              loading="lazy"
            />
            <div className="cards-hover">
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMember && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedMember(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="modal-image"
                loading="lazy"
                style={{
                  width: "40%",
                  maxHeight: "100%",
                  objectFit: "cover",
                }}
              />
              <div className="modal-content">
                <h3>{selectedMember.name}</h3>
                <p className="modal-title">{selectedMember.title}</p>
                <div className="modal-description">
                  {selectedMember.description}
                </div>
                <button
                  className="close-button"
                  onClick={() => setSelectedMember(null)}
                  aria-label="Close modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShariahCommittee;