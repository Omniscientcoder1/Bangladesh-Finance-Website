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
    pauseOnHover: false, // Pause on hover
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
