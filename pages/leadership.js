import React, { useState } from "react";

const Leadership = () => {
  const [selectedSection, setSelectedSection] = useState("management");
  const [selectedMember, setSelectedMember] = useState(null);

  const sections = {
    management: [
        {
            id: 1,
            name: "Md. Kyser Hamid",
            title: "Managing Director & CEO, Bangladesh Finance Limited",
            description: (
                <>
          Md. Kyser Hamid is a visionary force in Bangladesh&apos;s financial sector, heralding a new era of innovation and progress. With over decades of dynamic leadership, Kyser has redefined the paradigms of success, steering Bangladesh Finance to unprecedented heights of excellence. <br /><br />
    
          Kyser&apos;s journey epitomizes unwavering commitment to driving change and fostering advancement, from groundbreaking roles at IDLC Finance and DBH to trailblazing endeavors at BRAC Bank and IPDC, where his strategic vision and bold initiatives propelled unprecedented success in the financial industry. <br /><br />
    
          Kyser Hamid holds an MBA in Marketing from North South University and a BBA with a specialization in Accounting and Information Systems from the University of Dhaka. <br /><br />
      
          Kyser has undergone comprehensive training programs in India, Malaysia, and Singapore, expanding his skill set. He actively engages in knowledge-sharing forums and conducts business visits across South Asia, the Middle East, Asia Pacific, UK, and USA to stay updated on global industry trends.
          Kyser&apos;s leadership extends to active contributions as an Executive Committee Member of the Bangladesh Association of Publicly Listed Companies (BAPLC), where he advocates for the interests of publicly listed companies. Additionally, Kyser is a Standing Committee Member of FBCCI on NBFIs and Vice-Chairman of the Bangladesh Leasing &amp; Finance Companies Association (BLFCA)., where he advocates for the interests of publicly listed companies. Additionally, Kyser is a Standing Committee Member of FBCCI on NBFIs and Vice - Chairman of the Bangladesh Leasing & Finance Companies Association (BLFCA), where he actively participates in policy formulation and industry development initiatives. <br /><br />
    
          Furthermore, Kyser has made significant contributions to academia, serving as a visiting professor and adjunct faculty member at ASA University and BGMEA University, and conducting classes as a guest faculty at the University of Dhaka. Additionally, he contributes as a syllabus committee member at BRAC University and United International University. <br /><br />
    
          In Kyser Hamid, Bangladesh&apos;s financial sector has found a visionary leader whose passion for innovation, dedication to excellence, and unwavering commitment to progress continue to inspire and transform the industry, shaping a brighter future for all.
    
                </>
              ),
            image: "/images/1. Md. Kyser Hamid.png",
          },
          {
            id: 2,
            name: "Khondokar Mahmudul Hasan",
            title: "Managing Director & CEO, Bangladesh Finance Securities Limited",
            description: (
                <>
                   Mr. Khondokar Mahmudul Hasan&apos;s journey is marked by a series of significant achievements and a relentless dedication to fostering growth and excellence. <br /><br />
    Throughout his illustrious career, Mr. Hasan has held pivotal leadership roles that have showcased his exceptional leadership skills and strategic vision.  His tenure as the Head of Operations at Remons Investment &amp; Securities Limited was characterized by a profound commitment to operational efficiency and excellence. <br /><br />
    Transitioning to the role of Chief Operating Officer at both ANF Management Co. Ltd. and BD Finance Securities Limited, Mr. Hasan further solidified his reputation as a dynamic leader. <br /><br />
   
    A true advocate for investor empowerment, Mr. Hasan possesses a unique ability to connect with stakeholders and inspire confidence through his unwavering commitment to transparency, integrity, and ethical conduct. His innate talent for building strong relationships and fostering a culture of trust and collaboration has earned him the respect and admiration of colleagues and clients alike. <br /><br />
    As the helm of Bangladesh Finance Securities Limited, Mr. Hasan is poised to lead the organization to new heights of success, leveraging his extensive experience, leadership acumen, and strategic foresight to drive innovation, growth, and shareholder value. His exemplary track record of leadership and achievement serves as a testament to his unwavering dedication to excellence and his profound impact on the Capital Market of Bangladesh. <br /><br />
    
    
                </>
              ),
            image: "/images/2. Khondokar Mahmudul Hasan.png",
          },
          {
            id: 3,
            name: "Mr. Sumit Podder",
            title: "Managing Director & CEO, Bangladesh Finance Capital Limited",
            description: (
                <>
              <p>
              Mr. Sumit Podder, a renowned personality in the financial sector, presently holds the esteemed position of Managing Director & CEO at Bangladesh Finance Capital Limited. Boasting over 16 years of invaluable experience, Mr. Podder has established himself as a seasoned finance professional with a keen focus on providing top-tier advisory services to clients across a spectrum of financial transactions
              </p>
              <p> 
              Specializing in areas such as portfolio management, mergers and acquisitions, initial public offerings (IPOs), debt and equity financing, and restructuring transactions. Mr. Podder’s proficiency in these domains has been pivotal in guiding clients from diverse sectors to make informed financial decisions and achieve their goals. 
              </p>
              <p>
  His extensive portfolio spans a wide range of sectors, including technology, telecommunications, banking, and non-banking financial institutions (NBFIs). <br /><br />
</p>
              <p>
  Mr. Sumit Podder&apos;s proficiency in these domains has been pivotal in guiding clients from diverse sectors to make informed financial decisions and achieve their goals. <br /><br />
</p>
              <p>
              Prior to assuming his current role, Mr. Podder held key leadership positions at several notable organizations, leaving a lasting impact on each. He notably served as the Head of Structured Finance at Bangladesh Finance Limited and played a crucial role as the Head of Corporate Advisory at City Bank Capital Limited. Furthermore, he has lent his expertise to River Stone Capital Limited, Alliance Financial Services Limited, and Alliance Securities and Management Limited, thereby enriching his professional portfolio. 
              </p>
              <p>
  Mr. Podder&apos;s reputation as a pioneer in finance is a testament to his exceptional financial acumen, strategic prowess, and adept problem-solving abilities. <br /><br />
</p>
              <p>
              Beyond his professional accomplishments, Mr. Podder serves as a beacon of inspiration for aspiring finance professionals, embodying the qualities of leadership, dedication, and excellence. His journey stands as a testament to the rewards of perseverance and the pursuit of excellence in the dynamic field of finance.
              </p>
    
    
                </>
              ),
            image: "/images/3. Mr. Sumit Podder.png",
          },
          {
            id: 4,
            name: "Md. Sajjadur Rahman Bhuiyan",
            title: "Group Chief Financial Officer",
            description: (
                <>
                <p>Mr. Sajjadur Rahman Bhuiyan brings nearly 15 years of extensive experience in finance and accounts, internal control and compliance, planning and budgeting, and risk management within the financial sector. He commenced his journey with Bangladesh Finance in 2007 and has held various roles before assuming the position of Chief Financial Officer in 2015. Additionally, he serves as the Chief Anti Money Laundering Compliance Officer (CAMLCO) of Bangladesh Finance. </p>
                <p>Prior to his tenure at Bangladesh Finance, Mr. Bhuiyan worked with Hoda Vasi Chowdhury & Company (Chartered Accountants) as an Audit Supervisor. </p>
                <p>
  Mr. Sajjadur Rahman Bhuiyan&apos;s core expertise includes financial reporting and financial management, strategic planning and forecasting, financial and business analysis, control and compliance, and policy development. <br /><br />
</p>
                <p>Mr. Bhuiyan obtained his post-graduation degree in Accounting from Dhaka College. He is a registered Income Tax Practitioner and a member of the Dhaka Taxes Bar Association. With vast experience in financial analysis, internal control and compliance, tax and VAT, credit risk management, asset liability management, and AML/CFT, Mr. Bhuiyan brings a wealth of knowledge and expertise to his role.</p>
                </>
              ),
            image: "/images/4. Md. Sajjadur Rahman Bhuiyan.png",
          },
          {
            id: 5,
            name: "Md. Faisal Hossain ",
            title: "Chief Technology Officer (CTO)",
            description: (
                <>
                <p>
                  Md. Faisal Hossain is a highly accomplished and self-driven leader with a distinguished career spanning over a decade. Renowned for his innovative approach and unwavering commitment to excellence, he has established himself as a prominent figure in the industry.
                </p>
                <p>
                With a diverse background encompassing renowned banks, Mobile Financial Services (MFS), and a Big 4 audit firm, Mr. Faisal has held significant roles in various domains including Information and Communication Technology, Information & Cyber Security, ICT Governance, Risk, and Compliance (GRC) Management, ICT standardization, IT Audit, Fraud Investigations, and Core platform migrations.
                </p>
                <p>
  Md. Faisal Hossain&apos;s contributions are widely recognized, particularly his involvement in shaping the Central Bank&apos;s &quot;Guideline on ICT Security for Banks, v4.0, 2023.&quot; <br /><br />
</p>
                <p>
                He holds a B.Sc. in Computer Science and Engineering (CSE) and an MBA in Management Information Systems (MIS) from the esteemed University of Dhaka. Mr. Faisal is known for his ability to foster a culture of cybersecurity awareness, having initiated Cyber Security Awareness Month celebration programs in multiple organizations.
                </p>
                <p>
                Before joining Bangladesh Finance Limited, Mr. Faisal served as the Chief Information Security Officer (CISO) of Mercantile Bank. His prior roles include Head of IT Security at bKash, and key positions in Mutual Trust Bank, Eastern Bank, Islami Bank Bangladesh Limited, and KPMG in Bangladesh. 
                </p>
                <p>
                In addition to his professional endeavors, Mr. Faisal is committed to education and serves as a guest faculty member in the Department of Computer Science & Engineering at Dhaka University. He is a lifelong learner, continuously acquiring certifications in ICT and Cybersecurity, and actively participates in various national and international workshops, seminars, and summits.
                </p>
                </>
              ),
            image: "/images/5. Md. Faisal Hossain.png",
          },
          {
            id: 6,
            name: "Md. Rafiqul Amin",
            title: "Group Head of Operations",
            description: (
                <>
                <p>
                Mr. Md. Rafiqul Amin boasts over 16 years of experience in the Non-Bank Financial Institution (NBFI) sector. He embarked on his career journey with Bangladesh Finance in 2004, initially joining the Accounts & Finance department. With his contributions being instrumental, he ascended to the position of Head of Financial Accounting and Reporting (FAD). 
                </p>
                <p>
                In 2019, as a testament to his expertise and dedication, Mr. Amin transitioned to lead the Operations team. His proficiency spans across various domains including Process Development, Project Implementation (such as CBS), Strategic Planning, Credit Administration, Loan Processing, Liability Operation, Channel Financing, and Regulatory Compliance. 
                </p>
                <p>
                Having completed his BBA and MBA in Accounting & Information Systems from the University of Dhaka, Mr. Amin is a homegrown talent of Bangladesh Finance, embodying the organization&apos;s commitment to nurturing and empowering its personnel.
                </p>
                </>
              ),
            image: "/images/6. Md. Rafiqul Amin.png",
          },
          {
            id: 7,
            name: "Munshi Abu Naim",
            title: "Group Company Secretary",
            description: (
                <>
                <p>
                Mr. Munshi Abu Naim brings over 18 years of diverse professional experience both domestically and internationally, spanning customer service, accounting, auditing, taxation, and secretarial activities. Prior to his tenure at Bangladesh Finance Limited, he held positions at J Sainsbury’s Plc, a reputable public limited company in the United Kingdom. 
                </p>
                <p>
                Mr. Naim holds a Postgraduate Diploma from Anglia Ruskin University, UK, and an MBA in Accounting and Information System from the University of Dhaka. He is a fellow member of the Institute of Chartered Secretaries of Bangladesh (ICSB). Throughout his career, he has actively participated in various seminars and training programs, both locally and internationally. 
                </p>
                <p>
                His extensive travels across Europe have provided him with exposure to diverse communities and cultures, enriching his understanding of multi-dimensional environments.
                </p>
                </>
              ),
            image: "/images/7. Munshi Abu Naim.png",
          },
          {
            id: 8,
            name: "Suman Kumar Kundu",
            title: "Chief Risk Officer",
            description: (
                <>
                <p>
                Mr. Suman Kumar Kundu brings over 15 years of expertise in Credit Risk Management and Business Analysis within the financial services sector. He joined Bangladesh Finance in 2016, following a distinguished career path encompassing various roles at Alliance Financial Services Limited (AFSL) and Credit Rating Information and Services Limited (CRISL). 
                </p>
                <p>
                With a strong academic foundation, Mr. Kundu holds a BBA and MBA in Finance from the University of Dhaka. Furthermore, he has pursued additional qualifications, including an LLB degree, as well as certifications as a Chartered Financial Analyst (Level – I) and Chartered Secretary (Executive Level – II). Mr. Kundu has actively engaged in numerous training programs, workshops, seminars, and conferences focused on enhancing his expertise in Financial Analysis and Credit Risk Management.
                </p>
                </>
              ),
            image: "/images/8. Suman Kumar Kundu.png",
          },
          {
            id: 9,
            name: "Md. Jubraj Hossain",
            title: "Head of Treasury",
            description: (
                <>
                <p>
                Md. Jubraj Hossain assumed the role of Head of Treasury at Bangladesh Finance Ltd in November 2021, following his tenure at Delta Brac Housing Finance Corporation Ltd and VIPB Asset Management Company Ltd. With over 13 years of experience in treasury and investment, Jubraj has cultivated expertise through collaborations with Bangladesh Bank and various esteemed local and international entities, ensuring best practices in treasury, fund management, and investment. 
                </p>
                <p>
                In his current capacity, Jubraj spearheads Bangladesh Finance Ltd&apos;s strategic growth initiatives in the treasury and fund management sectors. Under his leadership, the company has fortified its standing as a compliant and transparent financial institution while achieving significant growth milestones. 
                </p>
                <p>
                Jubraj holds a BBA and MBA with a specialization in Finance from the University of Dhaka. His proficiency spans across vital functional domains including Treasury operations, Portfolio Management, Investment strategies, and Risk Management. Jubraj has actively participated in diverse training programs and workshops encompassing Treasury management, Bond Market Development, Risk Mitigation, BASEL II compliance, and Stress Testing methodologies. Beyond his professional pursuits, Jubraj&apos;s interests extend to sports and travel.
                </p>
                </>
              ),
            image: "/images/9. Md. Jubraj Hossain.png",
          },
          {
            id: 10,
            name: "Md. Anwar Hossain ",
            title: "Head of SAM and Monitoring",
            description: (
                <>
                <p>
                Mr. Md. Anwar Hossain boasts an extensive banking career spanning over 25 years, with a specialized focus on Special Asset Management for 15 of those years. He commenced his tenure at Bangladesh Finance in 2020, following a series of successful leadership roles including Head of Special Asset Management at NRB Bank and Head of Recovery Division at Prime Bank Limited. 
                </p>
                <p>
                His academic credentials are notable, having earned an MA from the National University and an MBA from Newcastle University. Additionally, Mr. Anwar is a registered Advocate and holds membership with the Dhaka Bar Association. He has actively engaged in numerous training programs, workshops, seminars, and conferences centered around Special Asset Management, further enriching his expertise in the domain. 
                </p>
                </>
              ),
            image: "/images/10. Md. Anwar Hossain.png",
          },
          {
            id: 11,
            name: "Munshi Md. Ashfaqul Alam ",
            title: "Head of Islamic Wing",
            description: (
                <>
                <p>
                Mr. Munshi Md. Ashfaqul Alam has more than 15 years of experience in Banking and Financial Institutions. Currently, he is working as a member of the Shariáh Supervisory Committee of Bangladesh Finance Islamic wing and Head of the Islamic Finance Division. 
                </p>
                <p>
                He has an outstanding record of professional excellence in several Banks and Financial Institutions both at home and abroad. His areas of expertise are in Islamic finance, Branch Banking, inward foreign remittance business, correspondent banking, channel development, sales force management, and investment risk management. Mr. Munshi’s previous employers include with others Social Islami Bank Ltd., Jamuna Bank Ltd., BRAC Bank Ltd., Asia Exchange Centre LLC.UAE, UAE Exchange Centre LLC. UAE, Atish Dipankar University of Science and Technology and University of Information Technology & Sciences. 
                </p>
                <p>
                He has obtained his MBA and BBA both from Department of Accounting & Information Systems- University of Dhaka. Mr. Munshi is a Certified Shariáh Advisor & Auditor (CSAA) from AAOIFI (Accounting & Auditing Organization for Islamic Financial Institutions, Bahrain. He is also a Certified Islamic Banking & Finance Professional (CIBFP) from BIBM (Bangladesh Institute of Bank Management).
                </p>
                </>
              ),
            image: "/images/11. Munshi Md. Ashfaqul Alam.png",
          },
          {
            id: 12,
            name: "Amitav Debnath, FCA  ",
            title: "Group Head of ICC",
            description: (
                <>
                <p>
                Mr. Amitav Debnath possesses over 12 years of extensive experience in finance and accounting, taxation, internal control and compliance, planning and budgeting, and risk management within the financial sector. He has previously held key positions such as Deputy Chief Financial Officer at NCC Bank Limited, Head of Head Office Audit at BRAC Bank Limited, and Manager of Audit and Consultancy at ACNABIN, Chartered Accountants. Mr. Debnath&apos;s areas of expertise include corporate reporting and financial management, strategic planning and forecasting, financial and business analysis, internal control and compliance, and policy development. 
                </p>
                <p>
                As a Fellow Chartered Accountant (FCA), Mr. Debnath graduated from BRAC University with a bachelor&apos;s degree in business administration. His professional repertoire encompasses a wide range of competencies essential for driving financial excellence and organizational growth.
                </p>
                </>
              ),
            image: "/images/12. Amitav Debnath, FCA.png",
          },
          {
            id: 13,
            name: "M. Kohinoor Hossain  ",
            title: "Head of SME & Sustainable Finance",
            description: (
                <>
                <p>
                Mr. M. Kohinoor Hossain is a seasoned business analyst with extensive expertise in global best practices across various domains, including small business financing, general banking, corporate and sustainable finance, CMSME risk management, credit control and monitoring, as well as product innovation and marketing of financial services. Currently serving as the Head of Sustainable Finance and SME at Bangladesh Finance, Mr. Hossain brings a wealth of experience from his previous roles at institutions such as Brac Bank Limited, Bangladesh Development Bank Limited, Union Capital, and CVC Finance Limited. 
                </p>
                <p>
                He holds a BSS Honors and an MSS in Economics from the University of Dhaka. Additionally, Mr. Hossain has actively participated in numerous training programs, workshops, and seminars focused on SME financing, green project financing, professional manager development, and credit risk management, further enhancing his professional acumen and skill set
                </p>
                </>
              ),
            image: "/images/13. M. Kohinoor Hossain.png",
          },
          {
            id: 14,
            name: "Mohammad Abu Obayed",
            title: "Head of Wealth Management",
            description: (
                <>
                <p>
                Mr. M. Kohinoor Hossain is a seasoned business analyst with extensive expertise in global best practices across various domains, including small business financing, general banking, corporate and sustainable finance, CMSME risk management, credit control and monitoring, as well as product innovation and marketing of financial services. Currently serving as the Head of Sustainable Finance and SME at Bangladesh Finance, Mr. Hossain brings a wealth of experience from his previous roles at institutions such as Brac Bank Limited, Bangladesh Development Bank Limited, Union Capital, and CVC Finance Limited. 
                </p>
                <p>
                He holds a BSS Honors and an MSS in Economics from the University of Dhaka. Additionally, Mr. Hossain has actively participated in numerous training programs, workshops, and seminars focused on SME financing, green project financing, professional manager development, and credit risk management, further enhancing his professional acumen and skill set
                </p>
                </>
              ),
            image: "/images/14. Mohammad Abu Obayed.png",
          },
    ],
    extendedManagement: [
        {
            id: 1,
            name: "Mohammad Masud Rana",
            title: "Head of Sales, SME & Retail",
            description: (
                <>
                <p>
                Mohammad Masud Rana brings with him a wealth of experience spanning 18 years, with expertise in sales, business development, and customer relationship management. In 2022, he assumed the role of Head of Sales at the SME & Retail Department of Bangladesh Finance, following his tenure as the Regional Sales Head at IPDC Finance. 
                </p>
                <p>
                Rana&apos;s academic background includes Honors and Masters degrees in Accounting from the National University, complemented by an MBA in Bank Management from Stamford University, Bangladesh. 
                </p>
                <p>
                Beyond his impressive credentials, Rana&apos;s leadership extends to driving strategic initiatives such as asset sales and alternative channel development. His proficiency in these areas underscores his commitment to optimizing the institution&apos;s performance and enhancing customer experience. Rana&apos;s strategic vision and hands-on approach position Bangladesh Finance for sustained growth and success in the dynamic financial landscape.
                </p>
                </>
              ),
            image: "/images/1. Mohammad Masud Rana.png",
          },
          {
            id: 2,
            name: "Md. Emran Hossain ",
            title: "Head of General Service Department",
            description: (
                <>
                <p>
                Mr. Md. Emran Hossain possesses 10 years of extensive experience within financial institutions. Since joining Bangladesh Finance Limited in 2012, he has held roles across multiple divisions, including Planning, Human Resources, Branch Control, Public Relations, and General Services, eventually assuming the position of Head of the General Service Department in 2020. 
                </p>
                <p>
                With more than ten years of experience, his areas of expertise encompass strategy and policy formulation, effective communication strategies, resource and space optimization, marketing, and developing value propositions tailored to diverse enterprises.
                </p>
                <p>
                Mr. Hossain holds an M.Phil. degree in Marketing from the Faculty of Business Studies at the University of Dhaka. Additionally, he completed MSS&BSS in Mass Communication from Rajshahi University and obtained an MBA degree in Marketing from a prominent private university in Bangladesh. Throughout his career, he has actively participated in numerous training programs, workshops, seminars, and conferences, further enriching his professional skills and knowledge base. In his professional life he obtained many awards and recognitions including National Integrity Award 2020-2021 under the National Integrity Strategy of Bangladesh Bank. 
                </p>
                </>
              ),
            image: "/images/2. Md. Emran Hossain.png",
          },
          {
            id: 3,
            name: "Barrister M Ibrahim Khalil",
            title: "Head of Legal & Corporate Affairs",
            description: (
                <>
                <p>
                Barrister M Ibrahim Khalil is an Advocate of the Bangladesh Supreme Court and a Barrister of the Honorable Society of the Middle Temple Inn, United Kingdom. Prior to joining Bangladesh Finance, Mr. Khalil garnered extensive experience working with the country’s leading corporate and litigation law firms. His exposure to both corporate and litigation matters has endowed him with a well-rounded expertise in both domains. Renowned for his meticulous legal advice, effective legal strategies, and swift dispute resolution, Mr. Khalil has earned recognition and appreciation for his professional acumen. 
                </p>
                <p>
                With a comprehensive academic background, Mr. Khalil completed his LL.B. (Hon’s) from BPP Law School, London, UK in 2013 and subsequently pursued his Bar Professional Training Course (BPTC) from the same institution in 2015. He is enrolled as an Advocate of the Supreme Court of Bangladesh, a member of the Honorable Society of the Middle Temple Inn, United Kingdom, and holds memberships with the Dhaka Bar Association, Supreme Court Bar Association, and Dhaka Taxes Bar Association. Mr. Khalil has actively participated in numerous training programs, workshops, seminars, and conferences across various fields of law, further enhancing his professional expertise.
                </p>
                </>
              ),
            image: "/images/3. Barrister M Ibrahim Khalil.png",
          },
          {
            id: 4,
            name: "Md. Ashekul Arifin Patwary",
            title: "Acting Head of Human Resources",
            description: (
                <>
                <p>
                Md. Ashekul Arifin Patwary is a distinguished AON-Certified Talent Management Professional with extensive collaboration experience within the financial sector&apos;s Human Resources domain. With over a decade of hands-on experience as an HR Generalist, his expertise encompasses Talent Management, Organizational Development, Training & Evaluation, Performance Management, Employee Engagement, and Employee Lifecycle Management. 
                </p>
                <p>
                Since joining Bangladesh Finance Limited on February 1, 2021, Mr. Patwary has been overseeing critical HR functions within the BFL Group. His responsibilities include Talent Management, Training & Development, Performance Management, Organizational Development, and HR Project & Compliance. 
                </p>
                <p>
                Before his tenure at Bangladesh Finance Limited, Mr. Patwary served as Assistant Manager (HR) at United Finance for nearly three years. He also made significant contributions during his four-year tenure at LankaBangla Finance Limited. His diverse HR experience includes Recruitment & Employer Branding, Performance Management, Organizational Development, HR Operations, and Learning and Development. 
                </p>
                <p>
                Mr. Patwary is an alumnus of the University of Dhaka, where he completed his BBA in Management and MBA in HRM. His commitment to continuous learning is demonstrated by his active participation in numerous volunteering activities and various Human Resources Management courses associated with the University of Dhaka.
                </p>
                </>
              ),
            image: "/images/4. Md. Ashekul Arifin Patwary.png",
          },
          {
            id: 5,
            name: "Md. Ashikur Rahman",
            title: "Manager, Brand & Communication",
            description: (
                <>
                <p>
                Ashikur Rahman, a seasoned marketing professional, brings nearly 7 years of experience spanning various industries such as Financial Institutions, Technology, E-commerce, and Consumer Goods to his role. Prior to joining Bangladesh Finance, he excelled in diverse teams at Square Toiletries Ltd, UNICEF, Shohoz, and Evaly, consistently delivering impactful results and demonstrating strategic acumen. 
                </p>
                <p>
                Rahman holds a BBA and MBA in Marketing from the esteemed North South University, complemented by a multitude of certifications from industry giants such as Facebook Blueprint and Google. These include Ad Auction and Delivery Overview, Campaign Manager Certification, Fundamentals of Digital Marketing, and Digital Sales & Google Analytics. 
                </p>
                <p>
                At Bangladesh Finance, Rahman steers the brand journey from the rebranding stage to a position of prominence in the market. Through strategic planning, innovative campaigns, and meticulous execution, he ensures that the organization&apos;s brand messaging resonates with its target audience, driving positive brand perception and loyalty. Rahman&apos;s leadership in brand communication reinforces Bangladesh Finance&apos;s market positioning and strengthens its presence in the competitive landscape. 
                </p>
                <p>
                In his capacity at Bangladesh Finance, Rahman is responsible not only for steering the brand journey but also for managing PR & Media engagements, driving CSR initiatives, optimizing customer experience, and ensuring the smooth functioning of call center operations.
                </p>
                </>
              ),
            image: "/images/5. Md. Ashikur Rahman.png",
          },
    ],
  };

  return (
    <div className="board-container">
      {/* Banner */}
      <div className="banner">
        <img
          src="/images/leadershipbanner.jpg"
          alt="Leadership Banner"
          className="banner-image"
        />
      </div>

      <h2 className="title">Leadership Team</h2>

      {/* Navbar */}
      <div className="navbar">
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            className={`nav-button ${
              selectedSection === section ? "active" : ""
            }`}
            onClick={() => setSelectedSection(section)}
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
              maxHeight: "80vh", // Ensures the modal fits within the viewport
              overflowY: "auto", // Enables scrolling when content overflows
            }}
          >
            <div
              style={{
                display: "flex", // Ensures image and content are side-by-side
                gap: "20px", // Adds spacing between the image and content
              }}
            >
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="modal-image"
                loading="lazy"
                style={{
                  width: "40%", // Adjust image size
                  maxHeight: "100%", // Prevents image overflow
                  objectFit: "cover", // Ensures the image retains aspect ratio
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

export default Leadership;
