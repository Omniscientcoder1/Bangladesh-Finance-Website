import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner titile="Corporate Loan" cls="business-loan">
      <Breadcrumb
        breadcrumbs={[
          ["Home", ""],
          ["Product", ""],
          ["Loan", "/"],
          ["Business Loans", ""],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
