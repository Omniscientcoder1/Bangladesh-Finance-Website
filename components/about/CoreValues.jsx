import SingleBox from "../common/SingleBox";
import { core_values_data } from "./aboutData";

const CoreValues = () => {
  return (
    <section className="our-core-values">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-header text-center">
                <h5 className="sub-title"></h5>
                <h2 className="title">
                  OUR CORE VALUES
                </h2>
                <p>
                  Our values define us. They guide us in building and improving
                  our product, hiring teammates, and serving our customers.
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {core_values_data.map((singleData) => (
              <div key={singleData.id} className="col-xl-4 col-md-4">
                <SingleBox
                  icon={singleData.icon}
                  title={singleData.title}
                  desc={singleData.desc}
                />
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
