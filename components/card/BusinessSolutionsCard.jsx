import Image from "next/image";
import Link from "next/link";
import arrow_right from "/public/images/icon/arrow-right.png";

const BusinessSolutionsCard = ({ singleBusiness }) => {
  const { title, icon, desc, link } = singleBusiness;
  return (
    <div className="single-box text-center">
      <div className="thumb d-flex justify-content-center align-items-center">
        <Image src={icon} alt="checking" />
      </div>
      <div className="content">
        <h5>{title}</h5>
        <p>{desc}</p>
        <Link href={link} className="btn-arrow">
          Contact Us
          <Image src={arrow_right} alt="arrow" />
        </Link>
      </div>
    </div>
  );
};
export default BusinessSolutionsCard;