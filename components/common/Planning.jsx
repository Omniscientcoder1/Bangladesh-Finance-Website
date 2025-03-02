import Link from "next/link";
import PlanningDataLoans from "../../data/planningDataLoans"; // Ensure this file exists and exports data
import PlaningCardLoans from "../cards/PlaningCardLoans";

const Planning = () => {
  return (
    <section className="financial-planning">
      <div className="overlay pt-80 pb-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-6 col-lg-5">
              <div className="section-text">
                {/* <h5 className="sub-title">Loan Products</h5> */}
                <h2 className=" text-4xl font-bold text-gray-800 mb-4 pl-50">
                TURN YOUR DREAMS INTO REALITY WITH BANGLADESH FINANCE
                </h2>
                <p>Find the best loan for your needs</p>
              </div>
              <div>
                <Link href="/contact" className="cmn-btn">
                  Apply for a loan
                </Link>
              </div>
            </div>

            <div className="col-xl-6 col-lg-7">
              <div className="row cus-mar">
                {PlanningDataLoans.map((singlePlanning) => (
                  <div key={singlePlanning.id} className="col-md-6 col-sm-6">
                    <PlaningCardLoans singlePlanning={singlePlanning} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planning;
