import Image from "next/image";
import Link from "next/link";
// import app_store from "/public/images/app-store.png";
import apps from "/public/images/apps.png";
import google_play from "/public/images/google-play.png";
import check from "/public/images/icon/check.png";
import sheled from "/public/images/icon/sheled.png";

const AppInfo = () => {
  return (
    <section className="features-section app-download">
      <div className="overlay pt-120">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-lg-6">
              <div className="top-section">
                <span className="head-icon d-flex justify-content-center align-items-center">
                  <Image src={sheled} alt="icon" />
                </span>
                <h5 className="sub-title">Financial Products at Your Fingertips</h5>
                <h2 className="title">
                  Your Financial experience anytime, anywhere
                </h2>
                <p>
                  Get your financial services with our simple to use, accessible
                  mobile app. As good as one of our branches within your phone!
                </p>
                <ul className="list">
                  <li className="list-item d-flex align-items-center">
                    <span className="check d-flex align-items-center justify-content-center">
                      <Image src={check} alt="icon" />
                    </span>
                    <span>Get loan,deposit and other services from your phone</span>
                  </li>
                  <li className="list-item d-flex align-items-center ">
                    <span className="check d-flex align-items-center justify-content-center">
                      <Image src={check} alt="icon" />
                    </span>
                    <span>Open an Account in Seconds</span>
                  </li>
                </ul>
              </div>
              <div className="button-group d-flex align-items-center flex-wrap">
                <Link href="https://play.google.com/store/search?q=bangladesh%20finance&c=apps&hl=en-US">
                  <Image src={google_play} alt="image" />
                </Link>
                {/* <Link href="/">
                  <Image src={app_store} alt="image" />
                </Link> */}
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <div className="img-area">
                <Image className="max-un" src={apps} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppInfo;
