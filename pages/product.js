import Planning from "../components/common/Planning";
import Deposits from "../components/common/PlanningDeposits";
import Faq from "../components/faq/Faq";
import Banner from "../components/product/Banner";
import Personalized from "../components/product/Personalized";

export default function Product() {
  return (
    <>
      <Banner />
      <Planning />
      <Deposits/>
      <Personalized />
      <Faq />
    </>
  );
}
