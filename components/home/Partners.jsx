// import Image from "next/image";
// import Slider from "react-slick";
// import partner_1 from "/public/images/partner-1.png";
// import partner_2 from "/public/images/partner-2.png";
// import partner_3 from "/public/images/partner-3.png";
// import partner_4 from "/public/images/partner-4.png";
// import partner_5 from "/public/images/partner-5.png";

// // Import css files
// import "slick-carousel/slick/slick.css";

// const Partners = () => {
//   const settings = {
//     infinite: true,
//     autoplay: true,
//     focusOnSelect: false,
//     speed: 1000,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 993,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//     ],
//   };
//   return (
//     <div className="partner">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-md-3 col-3">
//             <h4>Partners</h4>
//           </div>
//           <div className="col-md-9 col-9">
//             <Slider {...settings} className="partner-box">
//               {[
//                 partner_1,
//                 partner_2,
//                 partner_3,
//                 partner_4,
//                 partner_5,
//                 partner_2,
//               ].map((singleItm, i) => (
//                 <div key={i} className="single">
//                   <div className="item">
//                     <Image src={singleItm} alt="image" />
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Partners;
// import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Import your images
// import hero1 from "/public/images/hero-1.jpg";
// import hero2 from "/public/images/hero-2.jpg";
// import hero3 from "/public/images/hero-3.jpg";
// import hero4 from "/public/images/hero-4.jpg";
// import hero5 from "/public/images/hero5.png";
// import hero6 from "/public/images/hero6.png";

// const Partners = () => {
//   const settings = {
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 2000, // 2 seconds
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true, // Show arrow buttons
//     pauseOnHover: true, // Pause on hover
//   };

//   const images = [hero1, hero2, hero3, hero4, hero5, hero6];

//   return (
//     <section className="hero-section">
//       <Slider {...settings} className="hero-slider">
//         {images.map((image, index) => (
//           <div key={index} className="hero-slide">
//            <div className="hero-image-wrapper">
//               <Image
//                 src={image}
//                 alt={`Hero Slide ${index + 1}`}
//                 layout="intrinsic"
//                 objectFit="contain"
//                 priority
//               />
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default Partners;

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your images
import hero1 from "/public/images/hero-1.jpg";
import hero2 from "/public/images/hero-2.jpg";
import hero3 from "/public/images/hero-3.jpg";
import hero4 from "/public/images/hero-4.jpg";
// import hero5 from "/public/images/hero5.png";
// import hero6 from "/public/images/hero6.png";

const Partners = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000, // 2 seconds
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Show arrow buttons
    pauseOnHover: true, // Pause on hover
  };

  const images = [hero2,hero1, hero3, hero4];

  return (
    <section className="hero-section">
      <Slider {...settings} className="hero-slider">
        {images.map((image, index) => (
          <div key={index} className="hero-slide">
            <div className="hero-image-wrapper">
              <Image
                src={image}
                alt={`Hero Slide ${index + 1}`}
                layout="responsive"
                width={1920}
                height={1080}
                objectFit="contain"
                priority
              />
            </div>
          </div>
        ))}
      </Slider>
      <style jsx>{`
        .hero-section {
          width: 100%;
          max-width: 100%;
          overflow: hidden;
          margin: 0 auto;
          padding-top: 100px;
          padding-bottom: 0px;
        }

        .hero-slider {
          width: 100%;
        }

        .hero-slide {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image-wrapper {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </section>
  );
};

export default Partners;
