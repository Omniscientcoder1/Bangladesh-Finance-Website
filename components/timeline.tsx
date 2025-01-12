"use client";

const Timeline = () => {
  // Editable Timeline Data
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

  return (
    <div className="container mx-auto py-16 px-4 lg:px-16">
      <h2 className="text-center text-4xl font-bold text-white-600 dark:text-orange-300 mb-12">
        Our Journey
      </h2>
      <div className="relative">
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500 dark:bg-blue-300"></div>

        {/* Timeline Items */}
        {timelineData.map((item, index) => (
          <div key={index} className="mb-5 flex justify-between items-center w-full">
            {/* Left Side */}
            {index % 2 === 0 && (
              <div className="w-5/12 text-right relative">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg shadow-lg">
                  <p className="text-sm font-semibold text-blue-500 dark:text-blue-300">{item.date}</p>
                  <h3 className="text-lg font-bold text-black dark:text-white mt-1">{item.event}</h3>
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 -right-4 w-6 h-6 bg-blue-500 dark:bg-blue-300 rounded-full border-2 border-white dark:border-gray-900"></div>
              </div>
            )}

            {/* Central Dot */}
            <div className="w-1/12 flex justify-center relative">
              <div className="absolute w-6 h-6 bg-blue-500 dark:bg-blue-300 rounded-full border-2 border-white dark:border-gray-900"></div>
            </div>

            {/* Right Side */}
            {index % 2 !== 0 && (
              <div className="w-5/12 text-left relative">
                <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-lg">
                  <p className="text-sm font-semibold text-blue-500 dark:text-blue-300">{item.date}</p>
                  <h3 className="text-lg font-bold text-black dark:text-white mt-1">{item.event}</h3>
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 -left-4 w-6 h-6 bg-blue-500 dark:bg-blue-300 rounded-full border-2 border-white dark:border-gray-900"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
