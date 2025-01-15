import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Social from "../social/Social";
import footer_Illu_left from "/public/images/footer-Illu-left.png";
import footer_Illu_right from "/public/images/footer-Illu-right.png";
import Logo from "/public/images/logo_main.png";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container pt-120">
        <div className="row cus-mar pt-120 pb-120 justify-content-between wow fadeInUp">
          <div className="col-xl-3 col-lg-3 col-md-4 col-6">
            <div className="footer-box">
              <Link href="/" className="logo">
                <Image src={Logo} alt="logo" />
              </Link>
              <p>
                A modern, technology-first NBFI built for you and your growing
                business.
              </p>
              <div className="social-link d-flex align-items-center">
                {/* Socials links here */}
                <Social
                  items={[
                    [FaFacebookF, "https://www.facebook.com/bdfinance"],
                    [FaLinkedinIn, "https://www.linkedin.com/company/bangladeshfinanceltd/posts/?feedView=all"],
                    [FaInstagram, "https://www.instagram.com/bangladesh_finance_ltd/"],
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-6">
            <div className="footer-box">
              <h5>Company</h5>
              <ul className="footer-link">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="https://www.bdfinance.org/">Banladesh Finance Islamic</Link>
                </li>
                {/* <li>
                  <Link href="/about">Awards</Link>
                </li> */}
                <li>
                  <Link href="/career-single">Careers</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-6">
            <div className="footer-box">
              <h5>Useful Links</h5>
              <ul className="footer-link">
                <li>
                  <Link href="/product">Products</Link>
                </li>
                <li>
                  <Link href="/business-loan">Business Loan</Link>
                </li>
                {/* <li>
                  <Link href="/affiliate">Affiliate Program</Link>
                </li> */}
                <li>
                  <Link href="/blog-list">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-6">
            <div className="footer-box">
              <h5>Support</h5>
              <ul className="footer-link">
                <li>
                  <Link href="mailto:support@bankio">info@bd.finance</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/faqs">FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-8">
            <div className="footer-box">
              <h5>Subscribe</h5>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Enter Your Email address"
                    required
                  />
                  <button className="cmn-btn">Subscribe</button>
                </div>
              </form>
              <p>
                Get the latest updates via email. Any time you may unsubscribe
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer-bottom">
              <div className="left">
                <p>
                  {" "}
                  Copyright © <Link href="index">Bangladesh Finance Limited</Link> | Web Master-{" Tahmidur Rahman- IT Division, Bangladesh Finance Limited."}
                  {/* <Link href="">
                   Bangladesh Finance
                  </Link> */}
                </p>
              </div>
              <div className="right">
                <Link href="/privacy-policy" className="cus-bor">
                  Privacy{" "}
                </Link>
                <Link href="terms-conditions">Terms &amp; Condition </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="img-area">
        <Image src={footer_Illu_left} className="left" alt="Images" />
        <Image src={footer_Illu_right} className="right" alt="Images" />
      </div> */}
    </div>
  );
};

export default Footer;
