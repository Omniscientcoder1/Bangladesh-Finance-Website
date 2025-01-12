// Fixed and Updated BoardOfDirectors.js
import React, { useState } from "react";

type Member = {
    id: number;
    name: string;
    title: string;
    description: string;
    image: string;
  };


  const BoardOfDirectors = () => {
    const [selectedSection, setSelectedSection] = useState<"directors" | "executive" | "audit" | "riskManagement">("directors");
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  
    // Explicitly typing the sections object
    const sections: Record<"directors" | "executive" | "audit" | "riskManagement", Member[]> = {
      directors: [
        {
          id: 1,
          name: "Mr. Manwar Hossain",
          title: "Chairman",
          description: `As the Group Chairman, Mr. Manwar Hossain leads Anwar Group of Industries, a conglomerate with a 180 years' legacy. He began his career in 1994 after completing his BBA and MBA from the University of New Hampshire, USA.`,
          image: "/images/BFL Directors 2024/Photos/Manwar-Hossain.jpeg",
        },
        {
          id: 2,
          name: "Mr. Iqbal U. Ahmed",
          title: "Vice-Chairman, Independent Director, Member of Executive Committee and Risk Management Committee",
          description: `Mr. Iqbal U Ahmed is a seasoned banker with over 36 years of experience, having served as the Managing Director of Trust Bank Limited. He has been instrumental in developing Bangladesh's financial services industry.`,
          image: "/images/BFL Directors 2024/Photos/Iqbal-U.-Ahmed.jpeg",
        },
        {
          id: 3,
          name: "Mr. Md. Asaduzzaman Khan",
          title: "Director, Member of Audit Committee and Risk Management Committee",
          description: `With over 45 years of experience in banking and finance, Mr. Khan has held key roles at Bangladesh Bank and other financial institutions. As Executive Director of Bangladesh Bank, he managed several crucial departments.`,
          image: "/images/BFL Directors 2024/Photos/Md.-Asaduzzaman-Khan.jpeg",
        },
        {
          id: 4,
          name: "Mr. Md. Rokonuzzaman FCA",
          title: "Independent Director, Chairman of Audit Committee and Member of Risk Management Committee",
          description: `Mr. Rokonuzzaman FCA is the Country Managing Director of AMANN Bangladesh Limited. A chartered accountant with dual qualifications from ICAB and ICAEW, he has led AMANN Bangladesh to a strong foothold in the sewing threads industry.`,
          image: "/images/BFL Directors 2024/Photos/Md.-Rokonuzzaman-FCA.jpeg",
        },
        {
          id: 5,
          name: "Mr. Md Helal Chowdhury",
          title: "Director, Member of Executive Committee",
          description: `Mr. Md Helal Chowdhury, appointed to the Board on 21 May 2024 and nominated by Anwar Ispat Limited, is a distinguished Bangladeshi executive with over 35 years of judicial service experience.`,
          image: "/images/BFL Directors 2024/Photos/Mr.-Md-Helal-Chowdhury-Photo-BFL-Website-V2.jpeg",
        },
        {
          id: 6,
          name: "Ms. Fatema Begum",
          title: "Director, Member of Audit Committee",
          description: `Ms. Fatema Begum holds the esteemed distinction of being the first woman in the country to choose a career in the police force following her success in the Bangladesh Civil Service (BCS) examination in 1984.`,
          image: "/images/BFL Directors 2024/Photos/Fatema-Begum-Maam-5-scaled.jpeg",
        },
        {
          id: 7,
          name: "Mr. Furkaan Muhammad N Hossain",
          title: "Director, Member of Audit Committee",
          description: `Mr. Furkaan is the Deputy Managing Director of Anwar Cement Ltd. and holds leadership roles in other Anwar Group entities.`,
          image: "/images/BFL Directors 2024/Photos/Furkaan-Muhammad-N-Hossain.jpeg",
        },
        {
          id: 8,
          name: "Mr. Imtiyaj Yousuf",
          title: "Director, Member of Executive Committee",
          description: `Mr. Imtiyaj Yousuf is a new generation business entrepreneur. As a member of a reputed business-oriented family, Mr. Imtiyaj had the opportunity to observe and understand the business process at an early age.`,
          image: "/images/BFL Directors 2024/Photos/Ihtiyaj-Ahmed.jpeg",
        },
        {
          id: 9,
          name: "Md. Kyser Hamid",
          title: "Managing Director & CEO",
          description: `Md. Kyser Hamid is a visionary force in Bangladesh's financial sector, heralding a new era of innovation and progress.`,
          image: "/images/BFL Directors 2024/Photos/Bangladesh-Finance-Kyser-Hamid-Sir-scaled.jpeg",
        },
      ],
    executive: [
        {
            id: 1,
            name: "Mr. Manwar Hossain",
            title: "Chairman",
            description: `As the Group Chairman, Mr. Manwar Hossain leads Anwar Group of Industries, a conglomerate with a 180 years' legacy. He began his career in 1994 after completing his BBA and MBA from the University of New Hampshire, USA. He has held leadership roles in financial institutions like Modhumoti Bank Limited and City Bank Limited and has contributed significantly to Bangladesh's industrial sectors.`,
            image: "/images/BFL Directors 2024/Photos/Manwar-Hossain.jpeg",
          },
          {
            id: 2,
            name: "Mr. Iqbal Uddin Ahmed",
            title: "Vice-Chairman, Independent Director, Member of Executive Committee and Risk Management Committee",
            description: `Mr. Iqbal U. Ahmed is a seasoned banker with over 36 years of experience. His diverse exposures have enriched him to contribute effectively to the banking sector. He completed his banking career as the Managing Director of Trust Bank Limited. For his significant contributions to the banking and financial sector, Mr. Ahmed has received many prestigious awards.`,
            image: "/images/BFL Directors 2024/Photos/Iqbal-U.-Ahmed.jpeg",
          },
          {
            id: 3,
            name: "Mr. Md Helal Chowdhury",
            title: "Director, Member of Executive Committee",
            description: `Mr. Md Helal Chowdhury, appointed to the Board on 21 May 2024 and nominated by Anwar Ispat Limited, is a distinguished Bangladeshi executive with over 35 years of judicial service experience. Holding an LL.B (Hon’s) and LL.M from the University of Dhaka (1984), he has held significant roles including Director General of the SAARC Arbitration Council (2021-2024).`,
            image: "/images/BFL Directors 2024/Photos/Mr.-Md-Helal-Chowdhury-Photo-BFL-Website-V2.jpeg",
          },
          {
            id: 4,
            name: "Mr. Imtiyaj Yousuf",
            title: "Director",
            description: `Mr. Imtiyaj Yousuf is a new-generation entrepreneur managing businesses in the steel and automobile sectors. His innovative approach drives his ventures' success.`,
            image: "/images/BFL Directors 2024/Photos/Ihtiyaj-Ahmed.jpeg",
          },
    ],
    audit: [
        {
            id: 1,
            name: "Mr. Md. Rokonuzzaman FCA",
            title: "Independent Director, Chairman of Audit Committee and Member of Risk Management Committee",
            description: `Mr. Rokonuzzaman FCA is the Country Managing Director of AMANN Bangladesh Limited. A chartered accountant with dual qualifications from ICAB and ICAEW, he has led AMANN Bangladesh to a strong foothold in the sewing threads industry. He previously held key positions in Coats, Robi Axiata, and Pran-RFL Group, showcasing his dynamic leadership and strategic acumen.`,
            image: "/images/BFL Directors 2024/Photos/Md.-Rokonuzzaman-FCA.jpeg",
          },
          {
            id: 2,
            name: "Mr. Md. Asaduzzaman Khan",
            title: "Director, Member of Audit Committee and Risk Management Committee",
            description: `With over 45 years of experience in banking and finance, Mr. Khan has held key roles at Bangladesh Bank and other financial institutions. As Executive Director of Bangladesh Bank, he managed several crucial departments. He is currently associated with CRISL, a leading credit rating agency, bringing his extensive expertise to the organization.`,
            image: "/images/BFL Directors 2024/Photos/Md.-Asaduzzaman-Khan.jpeg",
          },
          {
            id: 3,
            name: "Ms. Fatema Begum",
            title: "Director, Member of Audit Committee",
            description: `Ms. Fatema Begum holds the esteemed distinction of being the first woman in the country to choose a career in the police force following her success in the Bangladesh Civil Service (BCS) examination in 1984. With an impressive tenure spanning over 31 years, she retired from her illustrious role as Additional Inspector General in the Bangladesh Police in 2017. Throughout her extensive career, she has exhibited exceptional leadership skills and has consistently demonstrated exemplary performance across various units within the Bangladesh Police.`,
            image: "/images/BFL Directors 2024/Photos/Fatema-Begum-Maam-5-scaled.jpeg",
          },
          {
            id: 4,
            name: "Mr. Furkaan Muhammad N Hossain",
            title: "Director, Member of Audit Committee",
            description: `Mr. Furkaan is the Deputy Managing Director of Anwar Cement Ltd. and holds leadership roles in other Anwar Group entities. He has a strong background in ICT, having earned a Master's in Computer Science from Colorado State University, USA.`,
            image: "/images/BFL Directors 2024/Photos/Furkaan-Muhammad-N-Hossain.jpeg",
          },
    ],
    riskManagement: [
        {
            id: 1,
            name: "Mr. Manwar Hossain",
            title: "Chairman",
            description: `As the Group Chairman, Mr. Manwar Hossain leads Anwar Group of Industries, a conglomerate with a 180 years' legacy. He began his career in 1994 after completing his BBA and MBA from the University of New Hampshire, USA. He has held leadership roles in financial institutions like Modhumoti Bank Limited and City Bank Limited and has contributed significantly to Bangladesh's industrial sectors.`,
            image: "/images/BFL Directors 2024/Photos/Manwar-Hossain.jpeg",
          },
          {
            id: 2,
            name: "Mr. Md. Rokonuzzaman FCA",
            title: "Independent Director, Chairman of Audit Committee and Member of Risk Management Committee",
            description: `Mr. Rokonuzzaman FCA is the Country Managing Director of AMANN Bangladesh Limited. A chartered accountant with dual qualifications from ICAB and ICAEW, he has led AMANN Bangladesh to a strong foothold in the sewing threads industry. He previously held key positions in Coats, Robi Axiata, and Pran-RFL Group, showcasing his dynamic leadership and strategic acumen.`,
            image: "/images/BFL Directors 2024/Photos/Md.-Rokonuzzaman-FCA.jpeg",
          },
          {
            id: 3,
            name: "Mr. Iqbal U. Ahmed",
            title: "Vice-Chairman, Independent Director, Member of Executive Committee and Risk Management Committee",
            description: `Mr. Iqbal U Ahmed is a seasoned banker with over 36 years of experience, having served as the Managing Director of Trust Bank Limited. He has been instrumental in developing Bangladesh's financial services industry. His contributions have earned him numerous awards, including the Bangladesh Bank award for managing core banking risks.`,
            image: "/images/BFL Directors 2024/Photos/Iqbal-U.-Ahmed.jpeg",
          },
          {
            id: 4,
            name: "Mr. Md. Asaduzzaman Khan",
            title: "Director, Member of Audit Committee and Risk Management Committee",
            description: `With over 45 years of experience in banking and finance, Mr. Khan has held key roles at Bangladesh Bank and other financial institutions. As Executive Director of Bangladesh Bank, he managed several crucial departments. He is currently associated with CRISL, a leading credit rating agency, bringing his extensive expertise to the organization.`,
            image: "/images/BFL Directors 2024/Photos/Md.-Asaduzzaman-Khan.jpeg",
          },
    ],
  };

  return (
    <div className="board-container">
      <h2 className="title">Board of Directors</h2>

      {/* Navbar */}
      <div className="navbar">
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            className={`nav-button ${selectedSection === section ? "active" : ""}`}
            onClick={() => setSelectedSection(section as "directors" | "executive" | "audit" | "riskManagement")}

          >
            {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, " $1")}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="card-container">
        {sections[selectedSection].map((member) => (
          <div
            key={member.id}
            className="card"
            onClick={() => setSelectedMember(member)}
          >
            <img
              src={member.image}
              alt={member.name}
              className="card-image"
              loading="lazy"
            />
            <div className="card-hover">
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
          >
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="modal-image"
              loading="lazy"
            />
            <div className="modal-content">
              <h3>{selectedMember.name}</h3>
              <p className="modal-title">{selectedMember.title}</p>
              <p className="modal-description">{selectedMember.description}</p>
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
      )}
    </div>
  );
};

export default BoardOfDirectors;