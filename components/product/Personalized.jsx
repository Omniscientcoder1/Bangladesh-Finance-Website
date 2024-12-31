import Image from "next/image";
import Link from "next/link";
import personalized_solution_bg from "/public/images/personalised.jpg";

const Personalized = () => {
  return (
    <section className="personalized-solution">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Image src={personalized_solution_bg} alt="images" />
            </div>
            <div className="col-lg-6">
              <div className="section-text">
                <h2 className="title">Need a Personalized Solution?</h2>
                <p>
                  All your needs covered with a full range of credit and debit
                  cards.
                </p>
              </div>
              <Link href="/register" className="cmn-btn">
                Apply for a loan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personalized;
