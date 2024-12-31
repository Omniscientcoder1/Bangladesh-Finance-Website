import Image from "next/image";
import feature_item_1 from "/public/images/feature-item-1.png";
import feature_item_2 from "/public/images/feature-item-2.png";
import check from "/public/images/icon/check.png";
import notification from "/public/images/icon/notification.png";
import sheled from "/public/images/icon/sheled.png";

const Features = () => {
  return (
    <>
      <section className="features-section">
        <div className="overlay pt-120">
          <div className="container wow fadeInUp">
            <div className="row">
              <div className="col-lg-6">
                <div className="top-section">
                  <span className="head-icon d-flex justify-content-center align-items-center">
                    <Image src={notification} alt="icon" />
                  </span>
                  <h5 className="sub-title">Smart Banking</h5>
                  <h2 className="title">Real time Notifications</h2>
                  <p>
                    Your customer stay informed in real time with everything
                    that’s happening on his account: payments, transfer, advice.
                    Get visibility on your customers&#39; flows to anticipate
                    their needs.
                  </p>
                  <ul className="list">
                    <li className="list-item d-flex align-items-center">
                      <span className="check d-flex align-items-center justify-content-center">
                        <Image src={check} alt="icon" />
                      </span>
                      <span>Cards that work all across the world.</span>
                    </li>
                    <li className="list-item d-flex align-items-center ">
                      <span className="check d-flex align-items-center justify-content-center">
                        <Image src={check} alt="icon" />
                      </span>
                      <span>
                        No ATM fees. No minimum balance. No overdrafts.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 text-end">
                <div className="img-area">
                  <Image src={feature_item_1} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section second">
        <div className="overlay pt-120 pb-120">
          <div className="container wow fadeInUp">
            <div className="row">
              <div className="col-lg-6 text-start cus-ord">
                <div className="img-area">
                  <Image src={feature_item_2} alt="image" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="top-section">
                  <span className="head-icon d-flex justify-content-center align-items-center">
                    <Image src={sheled} alt="icon" />
                  </span>
                  <h5 className="sub-title">Safe Investments</h5>
                  <h2 className="title">The Better Way to Save & Invest</h2>
                  <p>
                    Bangladesh Finance helps over 2 million customers achieve their
                    financial goals by helping them save and invest with ease.
                    Put that extra cash to use without putting it at risk with
                    Bankio.
                  </p>
                  <ul className="list">
                    <li className="list-item d-flex align-items-center">
                      <span className="check d-flex align-items-center justify-content-center">
                        <Image src={check} alt="icon" />
                      </span>
                      <span>Profitable to invest and Handy to manage</span>
                    </li>
                    <li className="list-item d-flex align-items-center ">
                      <span className="check d-flex align-items-center justify-content-center">
                        <Image src={check} alt="icon" />
                      </span>
                      <span>Highest Returns on your investments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
