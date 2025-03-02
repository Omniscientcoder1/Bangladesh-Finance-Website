import CallToAction from "../components/callToAction/CallToAction";
import Planning from "../components/common/Planning";
import Faq from "../components/faq/Faq";
import AppInfo from "../components/home/AppInfo";
import BankioCard from "../components/home/BankioCard";
import BusinessSolutions from "../components/home/homeData";
import Features from "../components/home/Features";
import HomeBanner from "../components/home/HomeBanner";
import LatestArticles from "../components/home/LatestArticles";
import Personalized from "../components/home/Personalized";
import Testimonials from "../components/home/Testimonials";
import Deposits from "../components/common/PlanningDeposits";
import AllFaqs from "/components/faqs/AllFaqs.jsx"
import VisitorCount from "../components/VisitorCount";



import dbConnect from '../lib/dbConnect';
import Visit from '../models/Visit';
import HeroSection from "@/components/videoHeroSection";

// 1. Capture and store IP in getServerSideProps
export async function getServerSideProps({ req }) {
  await dbConnect();

  // Determine the IP address.
  // Check x-forwarded-for (common for proxies) or fallback to remoteAddress.
  const forwarded = req.headers['x-forwarded-for'];
  const ip = forwarded ? forwarded.split(',')[0] : req.socket.remoteAddress;

  // Store a new visit record
  await Visit.create({ ip });

  // Optionally, you can pass data to the page; but we’ll just pass an empty props
  return {
    props: {},
  };
}

// export default function Home() {
//   return (
//     <>
//       <HomeBanner />
//       {/* <Features /> */}
//       {/* <BusinessSolutions /> */}
//       <Deposits/>
//       <Planning />
//       <AppInfo />
//       {/* <BankioCard /> */}
//       <CallToAction />
//       {/* <Personalized /> */}
//       {/* <Testimonials /> */}
//       {/* <LatestArticles /> */}
//       {/* <Faq /> */}
//       <AllFaqs />
    
//     </>
//   );
// }

import { motion } from "framer-motion";
// import HomeBanner from "./HomeBanner";
// import Deposits from "./Deposits";
// import Planning from "./Planning";
// import AppInfo from "./AppInfo";
// import CallToAction from "./CallToAction";
// import AllFaqs from "./AllFaqs";
// import Features from "./Features";
// import BusinessSolutions from "./BusinessSolutions";
// import BankioCard from "./BankioCard";
// import Personalized from "./Personalized";
// import Testimonials from "./Testimonials";
// import LatestArticles from "./LatestArticles";
// import Faq from "./Faq";

const fadeInDirection = (direction) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };
};

export default function Home() {
  return (
    <>
    {/* <HeroSection />  */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInDirection("left")}
      >
        <HomeBanner />
      </motion.div>
      <VisitorCount />

      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInDirection("right")}
      >
        <Features />
      </motion.div> */}

      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInDirection("left")}
      >
        <BusinessSolutions />
      </motion.div> */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInDirection("right")}
      >
        <Deposits />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInDirection("left")}
      >
        <Planning />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInDirection("right")}
      >
        <AppInfo />
      </motion.div>

      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInDirection("left")}
      >
        <BankioCard />
      </motion.div> */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInDirection("left")}
      >
        <CallToAction />
      </motion.div>

      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInDirection("right")}
      >
        <Personalized />
      </motion.div> */}

      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInDirection("left")}
      >
        <Testimonials />
      </motion.div> */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInDirection("right")}
      >
        <LatestArticles />
      </motion.div>

      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInDirection("left")}
      >
        <Faq />
      </motion.div> */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInDirection("right")}
      >
        <AllFaqs />
      </motion.div>
    </>
  );
}
