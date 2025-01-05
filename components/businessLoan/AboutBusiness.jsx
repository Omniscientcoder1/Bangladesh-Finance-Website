import Image from "next/image";
import AboutLoan from "../common/AboutLoan";
import about_business_loan_Illus from "/public/images/about-business-loan-Illus.png";
import check from "/public/images/icon/check.png";

const AboutBusiness = () => {
  return (
    <AboutLoan
      img={about_business_loan_Illus}
      btnText="Apply for a business loan"
      link="/#business-loan-form"
    >
      <div className="section-text">
        <h5 className="sub-title">
          Business loan – without hidden fees & charges
        </h5>
        <h2 className="title">A business Loan, Just as You Need It</h2>
        <p>
          Get business loans approved within days with transparent lending
          criteria and transparent processes.
        </p>
        <ul className="list">
          <li className="list-item d-flex align-items-center">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Flexible loan amounts based on business requirements</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Competitive interest rates</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Customizable repayment schedules</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Dedicated relationship managers for personalized support</span>
          </li>
        </ul>
      </div>
    </AboutLoan>
  );
};

export default AboutBusiness;
