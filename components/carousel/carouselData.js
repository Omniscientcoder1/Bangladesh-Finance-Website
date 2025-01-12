import our_journey_1 from "/public/images/icon/our-journey-1.png";
import our_journey_2 from "/public/images/icon/our-journey-2.png";
import our_journey_3 from "/public/images/icon/our-journey-3.png";
import our_journey_4 from "/public/images/icon/our-journey-4.png";

const icons = [our_journey_1, our_journey_2, our_journey_3, our_journey_4];

const timelineData = [
  { date: "May 10, 1999", event: "Incorporation of the Company" },
  { date: "May 10, 1999", event: "Commencement of the Business" },
  { date: "Dec 22, 1999", event: "Obtained License from Bangladesh Bank" },
  { date: "Feb 15, 2000", event: "Commercial Operation" },
  { date: "July 12, 2005", event: "Second Branch Opening in Chattogram" },
  { date: "June 10, 2007", event: "Listing on Chattogram Stock Exchange" },
  { date: "Sept 6, 2007", event: "Listing on Dhaka Stock Exchange" },
  { date: "Sept 11, 2007", event: "Trading on DSE & CSE" },
  { date: "June 8, 2010", event: "Third Branch Opening in Bangshal, Dhaka" },
  { date: "Dec 28, 2010", event: "Equity Participation in Bangladesh Finance Securities" },
  { date: "Aug 10, 2011", event: "Equity Participation in Bangladesh Finance Investment Limited" },
  { date: "Sept 8, 2014", event: "Fourth Branch Opening in Uttara, Dhaka" },
  { date: "Sept 8, 2014", event: "Fifth Branch Opening in Sylhet" },
  { date: "Jan 17, 2016", event: "Launching of BD Finance First Mutual Fund" },
  { date: "Dec 7, 2017", event: "Sixth Branch Opening in Gazipur" },
  { date: "Dec 27, 2018", event: "Seventh Branch Opening in Jashore" },
  { date: "Jan 23, 2020", event: "International Finance Award-2019" },
  { date: "Nov 12, 2020", event: "Primary Approval for Opening Islamic Shariah-Based Wing" },
  { date: "Jan 21, 2021", event: "Achieved AA- Credit Rating" },
  { date: "July 28, 2021", event: "Rebranding of Bangladesh Finance" },
  { date: "Dec, 2021", event: "ICAB & ICSB Awards on Best Published Annual Report" },
  { date: "June, 2022", event: "Most Sustainable Financial Institution Declared by Bangladesh Bank" },
  { date: "Dec, 2022", event: "SAFA, ICAB and ICSB Awards on Best Published Annual Report 2022" },
];

export const journey_carousel_data = timelineData.map((item, index) => ({
  id: index + 1,
  icon: icons[index % icons.length], // Cycles through icons
  year: item.date,
  desc: item.event,
}));

console.log(journey_carousel_data);
