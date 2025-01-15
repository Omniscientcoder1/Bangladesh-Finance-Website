import Link from "next/link";
import CareerCard from "../cards/CareerCard";
import { career_data } from "./aboutData";

const Career = () => {
  return (
    <section className="current-positions">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10">
              <div className="section-header text-center">
                <h5 className="sub-title">Current Positions</h5>
                <h2 className="title">Unlock Your Career at Bngladesh Finance</h2>
                <p>
                  Grow with us and take your professional life to the next
                  level.
                </p>
              </div>
            </div>
          </div>

          {/* Current Positions */}
          <div className="row mb-60">
            {career_data.map((career, i) => (
              <div key={career.id} className="col-lg-6 col-md-6">
                {/* Career Card  */}
                <CareerCard career={career} />
              </div>
            ))}
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="bottom-item">
                <h3 className="title">Can´t find the perfect position?</h3>
                <p>
                  Send us an email anyways! We will save your resume for next
                  time a relevant position opens.We&#39;re always looking for
                  talent
                </p>
                <Link href="/contact" className="cmn-btn">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
