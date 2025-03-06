import Account from "./Account";
import Affiliates from "./Affiliates";
import Security from "./Security";

const AllFaqs = () => {
  return (
    <section className="faqs-section">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h5 className="sub-title">
                 
                </h5>
                <h2 className="title">FREQUENTLY ASKED QUESTIONS</h2>
                {/* <p>
                  Get answers to all questions you have and boost your knowledge
                  so you can save, invest and spend smarter.
                </p> */}
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="account-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#account"
                  type="button"
                  role="tab"
                  aria-controls="account"
                  aria-selected="true"
                >
                  account
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="affiliates-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#affiliates"
                  type="button"
                  role="tab"
                  aria-controls="affiliates"
                  aria-selected="false"
                >
                  affiliates
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="security-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#security"
                  type="button"
                  role="tab"
                  aria-controls="security"
                  aria-selected="false"
                >
                  security
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="account"
              role="tabpanel"
              aria-labelledby="account-tab"
            >
              {/* Account */}
              <Account />
            </div>
            <div
              className="tab-pane fade"
              id="affiliates"
              role="tabpanel"
              aria-labelledby="affiliates-tab"
            >
              {/* Affiliates */}
              <Affiliates />
            </div>
            <div
              className="tab-pane fade"
              id="security"
              role="tabpanel"
              aria-labelledby="security-tab"
            >
              {/* Security */}
              <Security />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllFaqs;
