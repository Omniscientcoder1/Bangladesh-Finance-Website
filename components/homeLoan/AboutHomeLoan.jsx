import Image from "next/image";
import AboutLoan from "../common/AboutLoan";
import about_home_loan_Illus from "/public/images/about-home-loan-Illus.png";
import check from "/public/images/icon/check.png";

const AboutHomeLoan = () => {
  return (
    <AboutLoan
      img={about_home_loan_Illus}
      btnText="Apply for a home loan"
      link="/#home-loan-form"
    >
      <div className="section-text">
        {/* <h5 className="sub-title">Helping you own your home sooner</h5> */}
        <h2 className="title">A simple way to buy a home or refinance</h2>
        <p>
        Bangladesh Finance offers suitable Home loan facility to its customers to help them fulfill their dream of making/owning their own home. This facility covers Purchase of Apartment or House, Self-construction, Renovation of existing House or apartment, Purchase of commercial space and chamber for professionals.
        </p>
        <ul className="list">
          <li className="list-item d-flex align-items-center">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Tenure of a home loan generally up to 15 years for a resident individual</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Loan can be applied for a maximum of 70% of the property value.</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Early settlement option, either in full or partial, is allowed.</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Loan provided against registered mortgage and under tripartite agreement</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Structured repayment schedule to match with cash flow of the business</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Moratorium period based on construction schedule</span>
          </li>
        </ul>
      </div>
    </AboutLoan>
  );
};

export default AboutHomeLoan;
