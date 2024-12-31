import Image from "next/image";
import Link from "next/link";
import check from "/public/images/icon/check.png";

const PlaningCardLoans = ({ singlePlanning }) => {
  const { icon1, icon2, title, dsc_list, link } = singlePlanning;

  return (
    <div className="plan-box">
      {/* Image Thumbnails */}
      <div className="thumb">
        <Image src={icon1} alt={`${title} icon`} className="active" />
        <Image src={icon2} alt={`${title} alternate icon`} className="alt" />
      </div>

      {/* Dynamic Link for Title with Fallback */}
      {link ? (
        <Link href={link}>
          <h5 className="plan-title">{title}</h5>
        </Link>
      ) : (
        <h5 className="plan-title">{title}</h5>
      )}

      {/* Description List */}
      <ul className="list">
        {dsc_list?.map((item, index) => (
          <li key={index} className="list-item d-flex align-items-center">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="check icon" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaningCardLoans;
