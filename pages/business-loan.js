import AboutBusiness from "../components/businessLoan/AboutBusiness";
import ApplyForLoan from "../components/businessLoan/ApplyForLoan";
import Banner from "../components/businessLoan/Banner";
import Counter from "../components/businessLoan/Counter";
import HowItWorks from "../components/businessLoan/HowItWorks";
import Loan from "../components/businessLoan/Loan";
import SecurityArea from "../components/businessLoan/SecurityArea";
import Faq from "../components/faq/Faq";

export default function BusinessLoan() {
  return (
    <>
      <Banner />
      <AboutBusiness />
      {/* <Loan /> */}
      <SecurityArea />
      <ApplyForLoan />
      <Counter />
      {/* <HowItWorks /> */}
      {/* <Faq /> */}
    </>
  );
}
