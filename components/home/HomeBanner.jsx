// import Link from "next/link";
// import Partners from "./Partners";

// const HomeBanner = () => {
//   return (
//     <section className="banner-section">
//        <Partners />
//       <div className="overlay">
//         <div className="banner-content d-flex align-items-center">
//           <div className="container">
//             <div className="row justify-content-start">
//               <div className="col-lg-7 col-md-10">
//                 <div className="main-content">
//                   <div className="top-area section-text justify-content-center">
//                     {/* <h4 className="sub-title">এখনই সময়</h4> */}
//                     {/* <h1 className="title">
//                       <span className="word-1">Bangladesh</span> <span className="word-2">Finance</span>
//                     </h1> */}
//                     <p className="xlr">
//                       Complete Products and services designed to help you reach your
//                       financial goals.
//                     </p>
//                   </div>
//                   <div className="bottom-area">
//                     <Link href="/contact" className="cmn-btn">
//                       Get in touch
//                     </Link>
//                     {/* <Link href="/contact" className="cmn-btn second">
//                       Get in touch
//                     </Link> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Partners slider here */}
     
//     </section>
//   );
// };

// export default HomeBanner;

import Link from "next/link";
import Partners from "./Partners";

const HomeBanner = () => {
  return (
    <section className="banner-section">
      <Partners />
      <div className="overlay">
        <div className="banner-content d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-10">
                <div className="main-content">
                  <div className="top-area section-text justify-content-center">
                  <h2 className="main-title text-center">
                     The most Trusted Financial Institution of Bangladesh
                  </h2>
                  </div>
                  <div className="bottom-area text-center">
                    <Link href="/contact" className="cmn-btn">
                      Get in touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
