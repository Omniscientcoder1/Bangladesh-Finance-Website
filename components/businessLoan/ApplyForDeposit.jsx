import LoanForm from "../common/LoanForm";

const ApplyForDeposit = () => {
  return (
    <section className="apply-for-loan business-loan" id="business-loan-form">
      <div className="overlay pt-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                {/* <h2 className="title">
                  Apply for a loan today.
                </h2> */}
                {/* <p>
                  Get loans approved within days with transparent
                  lending criteria and transparent processes.
                </p> */}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="form-content">
                <div className="section-header text-center">
                  <h2 className="title">Apply for a secured future</h2>
                  <p>
                    Please fill the form below. We will get in touch with you
                    within 1-2 business days, to request all necessary details
                  </p>
                </div>
                {/* Loan form  */}
                <LoanForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyForDeposit;
