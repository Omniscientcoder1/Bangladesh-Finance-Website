"use client";

import React from "react";
import Image from "next/image";
import FunFact from "@/components/FunFact";
import JourneyCarousel from "@/components/about/OurJourney.jsx";
import Hero from "@/components/about/Hero.jsx";
import CoreValues from "@/components/about/CoreValues.jsx";
import Banner from "../components/about/Banner";

export default function AtAGlance() {
  // Data for key highlights
  const highlights = [
    {
      id: 1,
      title: "Established in 1999",
      description: "Over two decades of excellence in financial services.",
    },
    {
      id: 2,
      title: "AA- Credit Rating",
      description: "Recognized for strong financial stability and performance.",
    },
    {
      id: 3,
      title: "Diverse Financial Solutions",
      description: "Offering a wide range of products for retail and corporate clients.",
    },
    {
      id: 4,
      title: "Nationwide Presence",
      description: "Serving clients across Bangladesh with multiple branches.",
    },
  ];

  // Data for subsidiaries
  const subsidiaries = [
    {
      id: 1,
      name: "Bangladesh Finance Securities Limited",
      description: "A leading brokerage firm providing comprehensive investment services.",
    },
    {
      id: 2,
      name: "Bangladesh Finance Capital Limited",
      description: "Specializing in investment banking and capital market services.",
    },
  ];

  return (
    
    <div className="flex flex-col items-center bg-gray-100 text-center text-white pt-30 mt-50">
      {/* Photo Banner Section
      <div className="w-full pt-48 sm:pt-64 md:pt-96 px-4">
        <Image
          src="/images/our-achievements" // Path to the image
          alt="At a Glance Banner"
          layout="responsive" // Adjusts both width and height responsively
          width={1366} // Replace with the actual width of your image
          height={400} // Replace with the actual height of your image
          objectFit="cover" // Ensures the entire image scales proportionally without cropping
          className="rounded-b-lg"
        />
      </div> */}
      {/* Overview Section */}
      <><Banner/></>
      <section className="py-12 pt-20">
        <div className="container mx-auto px-4">
          <div className="pt-12">
            
            <Hero />
          </div>
        </div>

        <div className="pt-12">
          <h2 className="text-center text-4xl font-bold text-orange-600 dark:text-orange-300 mb-8">
            Shareholding Structure
          </h2>

          <Image
            src="/images/Shareholding-01.png" // Path to the image
            alt="At a Glance Banner"
            layout="responsive" // Adjusts both width and height responsively
            width={400} // Replace with the actual width of your image
            height={100} // Replace with the actual height of your image
            objectFit="contain" // Ensures the entire image is visible without cropping
            className="rounded-b-lg"
          />
        </div>
      </section>
      <div className="pt-8">
        <CoreValues />
      </div>
      <div className="pt-8">
        <JourneyCarousel />
      </div>
    </div>
  );
}
