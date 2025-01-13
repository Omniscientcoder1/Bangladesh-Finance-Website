import React, { JSX, useState } from "react";

type Member = {
  id: number;
  name: string;
  title: string;
  description: JSX.Element; // Updated to allow JSX for description
  image: string;
};

const BoardOfDirectors = () => {
  const [selectedSection, setSelectedSection] = useState<
    "directors" | "executive" | "audit" | "riskManagement"
  >("directors");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  // Explicitly typing the sections object
  const sections: Record<
    "directors" | "executive" | "audit" | "riskManagement",
    Member[]
  > = {
    directors: [
      {
        id: 1,
        name: "Mr. Manwar Hossain",
        title: "Chairman",
        description: (
          <>
            <p>
              As the Group Chairman, Mr. Manwar Hossain leads Anwar Group of Industries, a conglomerate with a 180 years' legacy. The Group was largely shaped by his father, the legendary business philanthropist, Late Al-Hajj Anwar Hossain. Anwar Group is the 'Dun and Bradstreet' awarded most diversified business conglomerate in Bangladesh.
            </p>
            <p>
              Mr. Manwar Hossain began his business career in the Group in 1994 after completing his BBA and MBA from the University of New Hampshire, USA. Apart from the Anwar Group of Industries, Mr. Hossain is also a Director of Modhumoti Bank Limited. He was formerly a Director of Bangladesh Commerce Bank Limited and Vice Chairman of City Bank Limited.
            </p>
            <p>
              Mr. Manwar Hossain has played a vital role as a Director of the Dhaka Chamber of Commerce & Industry (DCCI). He leads the steel and cement sectors of Bangladesh as the President of the 'Steel Manufacturers Association of Bangladesh' and Senior Vice President of 'Bangladesh Cement Manufacturers Association (BCMA)'.
            </p>
            <p>
              He is also an active member of Dhaka Club Limited, North Gulshan Club, Army Golf Club Limited, Kurmitola Golf Club Limited, and the American Alumni Association (AAA).
            </p>
          </>
        ),
        image: "/images/BFL Directors 2024/Photos/Manwar-Hossain.jpeg",
      },
      {
        id: 2,
        name: "Mr. Iqbal U Ahmed",
        title: "Vice-Chairman, Independent Director, Member of Executive Committee and Risk Management Committee",
        description: (
          <>
            <p>
              Mr. Iqbal U Ahmed is a seasoned banker with over 36 years of experience, having served as the Managing Director of Trust Bank Limited. His diverse exposures have enriched him to contribute effectively to the banking sector. In addition to his role at Trust Bank Limited, Mr. Ahmed was also an Advisor and Alternate Director of NRB Bank Limited.
            </p>
            <p>
              For his significant contribution to the banking and financial sector, Mr. Ahmed received many prestigious awards. These include the Bangladesh Bank award for contributing to the “Managing Core Risk in Banking” Project-2003, the Dhaka Post Gold Medal in 2007 (a weekly publication from the U.K.), and the Mother Teresa Golden Award in 2015 from the Global Human Rights Organization, Bangladesh Foundation.
            </p>
          </>
        ),
        image: "/images/BFL Directors 2024/Photos/Iqbal-U.-Ahmed.jpeg",
      },

      {
        id: 3,
        name: "Mr. Md. Rokonuzzaman FCA",
        title: "Independent Director, Chairman of Audit Committee",
        description: (
          <>
            <p>
              Mr. Md. Rokonuzzaman FCA is serving as the Country Managing Director at
              AMANN Bangladesh Limited, a German-based multinational company. He
              holds a Bachelor of Business Administration degree with a major in
              Accounting & Information Systems from the University of Dhaka and is a
              Chartered Accountant qualified from both the Institute of Chartered
              Accountants of Bangladesh (ICAB) and the prestigious Institute of
              Chartered Accountants in England & Wales (ICAEW).
            </p>
            <p>
              As one of the youngest CEOs in a multinational corporation in
              Bangladesh, Mr. Rokonuzzaman has been leading AMANN Bangladesh since
              October 2016. Prior to this role, he served as Finance Director and
              Company Secretary from the company’s inception in Bangladesh. His
              dynamic leadership has enabled AMANN to establish a strong foothold in
              the Sewing Threads Industry in a remarkably short time.
            </p>
            <p>
              Mr. Rokonuzzaman brings extensive experience from his previous roles in
              prominent multinationals and local companies, including Coats, Robi
              Axiata, and Pran-RFL Group. His expertise spans various capacities,
              showcasing his adaptability and strategic vision.
            </p>
            <p>
              Currently, he serves as the Chairman of the Audit Committee at
              Bangladesh Finance, where he continues to contribute his exceptional
              financial acumen and leadership skills.
            </p>
          </>
        ),
        image: "/images/BFL Directors 2024/Photos/Md.-Rokonuzzaman-FCA.jpeg",
      },
      {
        id: 5,
        name: "Mr. Md Helal Chowdhury",
        title: "Director, Member of Executive Committee",
        description: (
          <>
            <p>
              Mr. Md Helal Chowdhury, appointed to the Board on 21 May 2024 and
              nominated by Anwar Ispat Limited, is a distinguished Bangladeshi
              executive with over 35 years of judicial service experience.
            </p>
            <p>
              Holding an LL.B (Hon’s) and LL.M from the University of Dhaka (1984),
              Mr. Chowdhury has held significant roles, including Director General of
              the SAARC Arbitration Council (2021-2024), District and Session Judge
              in Dhaka and Chattagram, Joint Secretary (Legal Support) at the
              Bangladesh Parliament Secretariat, Chairman of the Labour Court in
              Chattagram, and Chief Metropolitan Magistrate in Chattagram.
            </p>
            <p>
              As an author, he has contributed key legal manuals such as the "Union
              Parishad Administrative and Electoral Manual" and the "Parliament
              Handbook, 2015." He has participated in numerous national and
              international training programs, seminars, and workshops and has served
              as a resource person for various training institutions, providing
              specialized training on banking laws.
            </p>
            <p>
              Throughout his illustrious career, Mr. Chowdhury has presided over
              numerous legal cases and held prestigious positions, including
              President of the Bangladesh Judicial Service Association and membership
              in the Bangladesh Judicial Service Commission and the Bangladesh Law
              Association. His extensive career underscores his unwavering commitment
              to the legal profession and invaluable expertise.
            </p>
          </>
        ),
        image: "/images/BFL Directors 2024/Photos/Mr.-Md-Helal-Chowdhury-Photo-BFL-Website-V2.jpeg",
      },
      {
        id: 6,
        name: "Ms. Fatema Begum",
        title: "Director, Member of Audit Committee",
        description: (
          <>
            <p>
              Ms. Fatema Begum holds the esteemed distinction of being the first
              woman in the country to choose a career in the police force following
              her success in the Bangladesh Civil Service (BCS) examination in 1984.
              With an impressive tenure spanning over 31 years, she retired from her
              illustrious role as Additional Inspector General in the Bangladesh
              Police in 2017. Throughout her extensive career, she has exhibited
              exceptional leadership skills and has consistently demonstrated
              exemplary performance across various units within the Bangladesh
              Police.
            </p>
            <p>
              Ms. Fatema's experience encompasses a diverse range of working
              environments, including field operations, desk work, administration,
              training institutions, and the finance and development sector. Her
              invaluable contributions have left an indelible mark on each facet of
              her service. Furthermore, she had the privilege of serving in a UN
              peacekeeping mission, thereby gaining invaluable exposure to a
              multicultural environment and enhancing her expertise in international
              law enforcement.
            </p>
            <p>
              In addition to her professional accomplishments, Ms. Fatema is a highly
              educated individual. She completed her master's degree from the
              prestigious University of Dhaka and went on to attain an MS degree in
              Environmental Studies from the renowned Adelaide University of South
              Australia. Her pursuit of higher education was supported by the esteemed
              Aus-Aid scholarship program, further highlighting her commitment to
              personal and professional growth.
            </p>
            <p>
              Throughout her career, Ms. Fatema Begum has consistently demonstrated
              steadfast dedication to upholding law and order, fostering security, and
              serving the community with unwavering commitment. Her tireless efforts
              and exceptional leadership have earned her the utmost respect and
              admiration within the law enforcement community in Bangladesh.
            </p>
          </>
        ),
        image: "/images/BFL Directors 2024/Photos/Fatema-Begum-Maam-5-scaled.jpeg",
      },
      {
        id: 7,
        name: "Mr. Furkaan Muhammad N Hossain",
        title: "Director, Member of Audit Committee",
        description: (
          <>
            <p>
              Mr. Furkan is playing the role as the Deputy Managing Director of Anwar
              Cement Ltd. In addition, he is the Director of Anwar Enterprise System
              Ltd., Anwar Galvanizing Ltd., and associated with other different
              concerns of Anwar Group of Industries. Mr. Furkaan completed his BBA
              from the University of British Columbia and completed his Masters in
              Computer Science from Colorado State University, USA. Along with this
              marvelous identity, Mr. Furkaan is the first grandson of the legendary
              business icon of Bangladesh, Late Al-Hajj Anwar Hossain.
            </p>
            <p>
              Mr. Furkaan Muhammad N Hossain is a young entrepreneur having expertise
              in different fields, especially in Information and Communication
              Technology. Besides, he is involved in numerous social and community
              development-related voluntary and philanthropic activities.
            </p>
          </>
        ),
        image: "/images/BFL Directors 2024/Photos/Furkaan-Muhammad-N-Hossain.jpeg",
      },
      {
        id: 8,
        name: "Mr. Imtiyaj Yousuf",
        title: "Director, Member of Executive Committee",
        description: (
          <>
            <p>
              Mr. Imtiyaj Yousuf is a new-generation business entrepreneur. As a
              member of a reputed business-oriented family, Mr. Imtiyaj had the
              opportunity to observe and understand the business process at an early
              age.
            </p>
            <p>
              He is the proprietor of Imtiyaj Steel and Omega International and has
              been actively involved in the automobile business for the last few
              years. With his innovative approach and entrepreneurial mindset, Mr.
              Imtiyaj continues to make significant contributions to the industries
              he is engaged in.
            </p>
          </>
        ),
        image: "/images/BFL Directors 2024/Photos/Ihtiyaj-Ahmed.jpeg",
      },
      {
        id: 9,
        name: "Mr. Md. Hasan Khan",
        title: "Director",
        description: (
          <>
            <p>
              Mr. Md. Hasan Khan is a distinguished professional with over forty
              years of extensive experience across various sectors, primarily
              focusing on insurance, accounting, auditing, administration, and
              secretarial functions. His career reflects a rich blend of leadership,
              strategic management, and operational expertise, making him a highly
              respected figure in the industries he has served.
            </p>
            <p>
              Mr. Hasan Khan's academic background is equally impressive. He earned
              his Master of Commerce (M.Com) degree in Management from the University
              of Dhaka. His academic training laid a strong foundation for his
              subsequent career achievements. Moreover, he is an Associate Member of
              the Bangladesh Insurance Academy (ABIA), a professional qualification
              that underscores his deep knowledge and specialized expertise in the
              insurance sector.
            </p>
            <p>
              Over the course of his career, Mr. Hasan Khan has taken on numerous
              pivotal roles that have shaped his professional trajectory. His
              long-standing association with City Insurance PLC is particularly
              notable. At City Insurance, he held a range of leadership positions,
              including serving as Additional Managing Director and currently as the
              Managing Director (current charge), where he played a crucial role in
              steering the company through various strategic initiatives.
            </p>
            <p>
              Mr. Hasan Khan is currently serving as the Finance Controller at Anwar
              Group of Industries, one of the country’s leading conglomerates. His
              career is a testament to his dedication, professionalism, and
              leadership acumen. His vast experience, combined with his academic and
              professional qualifications, makes him a valuable asset to any
              organization he is affiliated with.
            </p>
          </>
        ),
        image: "/images/md-hasan-khan.png",
      },
      {
        id: 10,
        name: "Md. Kyser Hamid",
        title: "Managing Director & CEO, Bangladesh Finance Limited",
        description: (
          <>
            <p>
              Md. Kyser Hamid is a visionary force in Bangladesh's financial sector,
              heralding a new era of innovation and progress. With over decades of
              dynamic leadership, Kyser has redefined the paradigms of success,
              steering Bangladesh Finance to unprecedented heights of excellence.
            </p>
            <p>
              Kyser's journey epitomizes his unwavering commitment to driving change
              and fostering advancement, from groundbreaking roles at IDLC Finance
              and DBH to trailblazing endeavors at BRAC Bank and IPDC, where his
              strategic vision and bold initiatives propelled unprecedented success
              in the financial industry.
            </p>
            <p>
              Kyser Hamid holds an MBA in Marketing from North South University and a
              BBA with a specialization in Accounting and Information Systems from
              the University of Dhaka.
            </p>
            <p>
              Kyser has undergone comprehensive training programs in India, Malaysia,
              and Singapore, expanding his skill set. He actively engages in
              knowledge-sharing forums and conducts business visits across South
              Asia, the Middle East, Asia Pacific, UK, and USA to stay updated on
              global industry trends. Kyser Hamid is an active contributor to various
              industry associations and social welfare initiatives. He serves as an
              Executive Committee Member of the Bangladesh Association of Publicly
              Listed Companies (BAPLC), where he advocates for the interests of
              publicly listed companies. Additionally, Kyser is a Standing Committee
              Member of FBCCI on NBFIs and Vice-Chairman of the Bangladesh Leasing &
              Finance Companies Association (BLFCA), where he actively participates
              in policy formulation and industry development initiatives.
            </p>
            <p>
              Furthermore, Kyser has made significant contributions to academia,
              serving as a visiting professor and adjunct faculty member at ASA
              University and BGMEA University, and conducting classes as a guest
              faculty at the University of Dhaka. Additionally, he contributes as a
              syllabus committee member at BRAC University and United International
              University.
            </p>
            <p>
              In Kyser Hamid, Bangladesh's financial sector has found a visionary
              leader whose passion for innovation, dedication to excellence, and
              unwavering commitment to progress continue to inspire and transform the
              industry, shaping a brighter future for all.
            </p>
          </>
        ),
        image: "/images/BFL Directors 2024/Photos/Bangladesh-Finance-Kyser-Hamid-Sir-scaled.jpeg",
      },
    ],
    audit: [
      {
        id: 1,
        name: "Mr. Md. Rokonuzzaman FCA",
        title: "Independent Director, Chairman of Audit Committee and Member of Risk Management Committee",
        description: (
          <>
            <p>
              Mr. Rokonuzzaman FCA is the Country Managing Director of AMANN Bangladesh Limited.
              A chartered accountant with dual qualifications from ICAB and ICAEW, he has led
              AMANN Bangladesh to a strong foothold in the sewing threads industry.
            </p>
            <p>
              He previously held key positions in Coats, Robi Axiata, and Pran-RFL Group,
              showcasing his dynamic leadership and strategic acumen.
            </p>
          </>
        ),
        image: "/images/BFL Directors 2024/Photos/Md.-Rokonuzzaman-FCA.jpeg",
      },
      {
        id: 2,
        name: "Mr. Md. Asaduzzaman Khan",
        title: "Director, Member of Audit Committee and Risk Management Committee",
        description: (
          <>
            <p>
              With over 45 years of experience in banking and finance, Mr. Khan has held key
              roles at Bangladesh Bank and other financial institutions. As Executive Director
              of Bangladesh Bank, he managed several crucial departments.
            </p>
            <p>
              He is currently associated with CRISL, a leading credit rating agency, bringing
              his extensive expertise to the organization.
            </p>
          </>
        ),
        image: "/images/BFL Directors 2024/Photos/Md.-Asaduzzaman-Khan.jpeg",
      },
      {
        id: 3,
        name: "Ms. Fatema Begum",
        title: "Director, Member of Audit Committee",
        description: (
          <>
            <p>
              Ms. Fatema Begum holds the esteemed distinction of being the first woman in the
              country to choose a career in the police force following her success in the
              Bangladesh Civil Service (BCS) examination in 1984.
            </p>
            <p>
              With an impressive tenure spanning over 31 years, she retired from her illustrious
              role as Additional Inspector General in the Bangladesh Police in 2017. Throughout
              her extensive career, she has exhibited exceptional leadership skills and has
              consistently demonstrated exemplary performance across various units within the
              Bangladesh Police.
            </p>
          </>
        ),
        image: "/images/BFL Directors 2024/Photos/Fatema-Begum-Maam-5-scaled.jpeg",
      },
      {
        id: 4,
        name: "Mr. Furkaan Muhammad N Hossain",
        title: "Director, Member of Audit Committee",
        description: (
          <>
            <p>
              Mr. Furkaan is the Deputy Managing Director of Anwar Cement Ltd. and holds
              leadership roles in other Anwar Group entities.
            </p>
            <p>
              He has a strong background in ICT, having earned a Master's in Computer Science
              from Colorado State University, USA.
            </p>
          </>
        ),
        image: "/images/BFL Directors 2024/Photos/Furkaan-Muhammad-N-Hossain.jpeg",
      },
    ],

    riskManagement: [
      {
        id: 1,
        name: "Mr. Manwar Hossain",
        title: "Chairman",
        description: (
          <>
            <p>
              As the Group Chairman, Mr. Manwar Hossain leads Anwar Group of
              Industries, a conglomerate with a 180 years' legacy. He began his
              career in 1994 after completing his BBA and MBA from the University of
              New Hampshire, USA.
            </p>
            <p>
              He has held leadership roles in financial institutions like Modhumoti
              Bank Limited and City Bank Limited and has contributed significantly to
              Bangladesh's industrial sectors.
            </p>
          </>
        ),
        image: "/images/BFL Directors 2024/Photos/Manwar-Hossain.jpeg",
      },
      {
        id: 2,
        name: "Mr. Md. Rokonuzzaman FCA",
        title: "Independent Director, Chairman of Audit Committee and Member of Risk Management Committee",
        description: (
          <>
            <p>
              Mr. Rokonuzzaman FCA is the Country Managing Director of AMANN
              Bangladesh Limited. A chartered accountant with dual qualifications from
              ICAB and ICAEW, he has led AMANN Bangladesh to a strong foothold in the
              sewing threads industry.
            </p>
            <p>
              He previously held key positions in Coats, Robi Axiata, and Pran-RFL
              Group, showcasing his dynamic leadership and strategic acumen.
            </p>
          </>
        ),
        image: "/images/BFL Directors 2024/Photos/Md.-Rokonuzzaman-FCA.jpeg",
      },
      {
        id: 3,
        name: "Mr. Iqbal U. Ahmed",
        title: "Vice-Chairman, Independent Director, Member of Executive Committee and Risk Management Committee",
        description: (
          <>
            <p>
              Mr. Iqbal U Ahmed is a seasoned banker with over 36 years of
              experience, having served as the Managing Director of Trust Bank
              Limited. He has been instrumental in developing Bangladesh's financial
              services industry.
            </p>
            <p>
              His contributions have earned him numerous awards, including the
              Bangladesh Bank award for managing core banking risks.
            </p>
          </>
        ),
        image: "/images/BFL Directors 2024/Photos/Iqbal-U.-Ahmed.jpeg",
      },
      {
        id: 4,
        name: "Mr. Md. Asaduzzaman Khan",
        title: "Director, Member of Audit Committee and Risk Management Committee",
        description: (
          <>
            <p>
              With over 45 years of experience in banking and finance, Mr. Khan has
              held key roles at Bangladesh Bank and other financial institutions. As
              Executive Director of Bangladesh Bank, he managed several crucial
              departments.
            </p>
            <p>
              He is currently associated with CRISL, a leading credit rating agency,
              bringing his extensive expertise to the organization.
            </p>
          </>
        ),
        image: "/images/BFL Directors 2024/Photos/Md.-Asaduzzaman-Khan.jpeg",
      },
    ],
    executive: [
      {
          id: 1,
          name: "Mr. Manwar Hossain",
          title: "Chairman",
          description: (
              <>
                <p>
                  As the Group Chairman, Mr. Manwar Hossain leads Anwar Group of Industries, a conglomerate with a 180 years’
                  legacy. He began his career in 1994 after completing his BBA and MBA from the University of New Hampshire,
                  USA.
                </p>
                <p>
                  He has held leadership roles in financial institutions like Modhumoti Bank Limited and City Bank Limited and
                  has contributed significantly to Bangladesh's industrial sectors.
                </p>
              </>
            ),
          image: "/images/BFL Directors 2024/Photos/Manwar-Hossain.jpeg",
        },
        {
          id: 2,
          name: "Iqbal Uddin Ahmed",
          title: "Vice-Chairman, Independent Director, Member of Executive Committee and Risk Management Committee",
          description: (
              <>
                <p>
                Mr. Iqbal U Ahmed is a seasoned banker with experience of over 36 years. His diverse exposures have enriched him to contribute effectively to the banking sector. He completed his banking career as the Managing Director, Trust Bank Limited. In the light of his immediate experience, he was also an Advisor and Alternate Director of NRB Bank Limited.
                </p>
                <p>
                For his significant contribution to the banking and financial sector, Mr. Ahmed received many prestigious awards including the Bangladesh Bank award for contributing to “Managing Core Risk in Banking” Project-2003, Dhaka Post Gold Medal -2007 (A weekly published from the U.K.), Mother Teresa Golden Award-2015 (Global Human Rights Organization, Bangladesh Foundation).
                </p>
              </>
            ),
          image: "/images/BFL Directors 2024/Photos/Iqbal-U.-Ahmed.jpeg",
        },
        {
          id: 3,
          name: "Mr. Md Helal Chowdhury",
          title: "Director, Member of Executive Committee",
          description: (
              <>
                <p>
                Mr. Md Helal Chowdhury, appointed to the Board on 21 May 2024 and nominated by Anwar Ispat Limited, is a distinguished Bangladeshi executive with over 35 years of judicial service experience. Holding an LL.B (Hon’s) and LL.M from the University of Dhaka (1984), he has held significant roles such as Director General of the SAARC Arbitration Council (2021-2024), District and Session Judge in Dhaka and Chattagram, Joint Secretary (Legal Support) at the Bangladesh Parliament Secretariat, Chairman of the Labour Court in Chattagram, and Chief Metropolitan Magistrate in Chattagram. He has authored key legal manuals, including the "Union Parishad Administrative and Electoral Manual" and the "Parliament Handbook, 2015," and has participated in numerous national and international training programs, seminars, and workshops. As a resource person, he has contributed to various training institutions and provided specialized training on banking laws. Mr. Chowdhury has presided over numerous legal cases and held prestigious positions such as President of the Bangladesh Judicial Service Association and member of both the Bangladesh Judicial Service Commission and the Bangladesh Law Association. His extensive career highlights his deep commitment to the legal profession and invaluable expertise.
                </p>
              </>
            ),
          image: "/images/BFL Directors 2024/Photos/Mr.-Md-Helal-Chowdhury-Photo-BFL-Website-V2.jpeg",
        },
        {
          id: 4,
          name: "Mr. Imtiyaj Yousuf",
          title: "Director",
          description: (
              <>
                <p>
                  Mr. Imtiyaj Yousuf is a new-generation entrepreneur managing businesses in the steel and automobile sectors.
                  His innovative approach drives his ventures' success.
                </p>
              </>
            ),
          image: "/images/BFL Directors 2024/Photos/Ihtiyaj-Ahmed.jpeg",
        },
    // Add more members for Executive Committee here
  ],
  };
  return (
<div className="board-container">
  {/* Responsive Banner Image */}
  <div className="banner">
    <img
      src="/images/Board-of-Directors-03-3-1-scaled.jpg"
      alt="Board of Directors Banner"
      className="banner-image"
    />
  </div>


      <h2 className="title">Board of Directors</h2>

      {/* Navbar */}
      <div className="navbar">
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            className={`nav-button ${
              selectedSection === section ? "active" : ""
            }`}
            onClick={() =>
              setSelectedSection(
                section as
                  | "directors"
                  | "executive"
                  | "audit"
                  | "riskManagement"
              )
            }
          >
            {section.charAt(0).toUpperCase() +
              section.slice(1).replace(/([A-Z])/g, " $1")}
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

export default BoardOfDirectors;