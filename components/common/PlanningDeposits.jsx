import Link from "next/link";
import PlanningDataDeposits from "../../data/planningDataDeposits"; // Ensure this file exists and exports data
import PlaningCard from "../cards/PlaningCard";

const Deposits = () => {
  return (
    <section className="financial-planning">
      <div className="overlay pt-80 pb-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-6 col-lg-5">
              <div className="section-text">
                {/* <h5 className="sub-title">Deposit Products</h5> */}
                <h2 className=" text-4xl font-bold text-gray-800 mb-4 pl-50" >
                  CHOOSE YOUR FINANCIAL PLAN <br/> FOR A SECURED FUTURE
                </h2>
                {/* <p>All your Deposit needs</p> */}
              </div>
              <div>
            
                <Link href="/contact" className="cmn-btn">
                  Apply for a Secured Future
                </Link>
              </div>
            </div>

            <div className="col-xl-6 col-lg-7">
              <div className="row cus-mar">
                {PlanningDataDeposits.map((singlePlanning) => (
                  <div key={singlePlanning.id} className="col-md-6 col-sm-6">
                    <PlaningCard singlePlanning={singlePlanning} />
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

export default Deposits;






