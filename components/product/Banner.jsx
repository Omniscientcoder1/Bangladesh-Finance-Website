import Link from "next/link";
import BigBanner from "../common/BigBanner";

const Banner = () => {
  return (
    <BigBanner cls="product">
      <div className="main-content">
        <div className="section-text">
          <h5 className="sub-title">Build the future You See for Yourself</h5>
          <h2 className="title">Enjoy The Freedom To Dream Big</h2>
          <p>
            Fulfil your dreams with our deposit and loan products.
          </p>
        </div>
        <Link href="/register" className="cmn-btn">
          Apply Now
        </Link>
      </div>
    </BigBanner>
  );
};

export default Banner;
