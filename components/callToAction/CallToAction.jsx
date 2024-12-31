import Link from "next/link";

const callToAction = () => {
  return (
    <section className="call-action">
      <div className="overlay pt-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <div className="main-content">
                <div className="section-header text-center">
                  <h2 className="title">
                  Ready to start your financial journey with<span> Bangladesh Finance?</span>
                  </h2>
                </div>
                <div className="bottom-area text-center">
                  <Link href="/contact" className="cmn-btn">
                  Get in touch
                  </Link>
                  {/* <Link href="/contact" className="cmn-btn second">
                    Get in touch
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default callToAction;
