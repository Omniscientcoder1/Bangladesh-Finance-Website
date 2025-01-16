import Banner from "../components/about/Banner";
import Career from "../components/about/Career";
import CoreValues from "../components/about/CoreValues";
import GlobalBanking from "../components/about/GlobalBanking";
import Hero from "../components/about/Hero";
import OurJourney from "../components/about/OurJourney";
import Team from "../components/team/Team";

export default function About() {
  return (
    <>
      <Banner />
      <Hero />
      <CoreValues />
      {/* <GlobalBanking /> */}
      <OurJourney />
      {/* <Team /> */}
      {/* <Career /> */}
    </>
  );
}
