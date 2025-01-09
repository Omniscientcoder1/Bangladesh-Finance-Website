import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";
import quote from "/public/images/icon/quote.png";
import testomonial from "/public/images/testomonial.png";

// Import css files
import "slick-carousel/slick/slick.css";

const Next = ({ onClick }) => {
  return (
    <button
      type="button"
      className="slick-arrow slick-prev pull-left"
      onClick={onClick}
    >
      <i>
        <BsChevronLeft />
      </i>
    </button>
  );
};

const Prev = ({ onClick }) => {
  return (
    <button
      type="button"
      className="slick-arrow slick-next pull-right"
      onClick={onClick}
    >
      <i>
        <BsChevronRight />
      </i>
    </button>
  );
};

const Testimonials = () => {
  const settings = {
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <Next />,
    nextArrow: <Prev />,
    dots: true,
    dotsClass: "section-dots",
    customPaging: function () {
      return (
        <button type="button" className="dot">
          <span className="string"></span>
        </button>
      );
    },
    responsive: [
      {
        breakpoint: 993,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="testimonials">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h5 className="sub-title">Testimonials</h5>
                <h2 className="title">
                  Don&#39;t take our word for it, take theirs
                </h2>
                <p>
                  Take a look at our past customers success stories. Our goal is
                  to help you grow
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <Slider {...settings} className="testimonials-carousel">
              <div className="slide-item">
                <div className="single-slide">
                  <div className="thumb">
                    <Image src={testomonial} alt="image" className="max-un" />
                  </div>
                  <div className="content">
                    <div className="top-content">
                      <Image src={quote} alt="quote" />
                      <h5>“I love Bangladesh Finance, they&#39;re the best”</h5>
                      <p className="xxlr">
                        “ It&#39;s been 2 years since I found Bangladesh Finance, and
                        it&#39;s such a relief as a small business owner to not
                        worry about unnecessary fees. I lost my credit card
                        once, and the service was so prompt that I was back to
                        work the next day!
                      </p>
                    </div>
                    <div className="bottom-content">
                      <h5 className="name">Ibrahim khalil</h5>
                      <span className="country"> Bangladesh</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="single-slide">
                  <div className="thumb">
                    <Image src={testomonial} alt="image" className="max-un" />
                  </div>
                  <div className="content">
                    <div className="top-content">
                      <Image src={quote} alt="quote" />
                      <h5>“I love Bangladesh Finance, they&#39;re the best”</h5>
                      <p className="xxlr">
                        “ It&#39;s been 2 years since I found Bangladesh finance, and
                        it&#39;s such a relief as a small business owner to not
                        worry about unnecessary fees. I lost my credit card
                        once, and the service was so prompt that I was back to
                        work the next day!
                      </p>
                    </div>
                    <div className="bottom-content">
                      <h5 className="name">Sophie Moore</h5>
                      <span className="country"> Sylhet</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="single-slide">
                  <div className="thumb">
                    <Image src={testomonial} alt="image" className="max-un" />
                  </div>
                  <div className="content">
                    <div className="top-content">
                      <Image src={quote} alt="quote" />
                      <h5>“I love Bangladesh Finance, they&#39;re the best”</h5>
                      <p className="xxlr">
                        “ It&#39;s been 2 years since I found Bangladesh Finance, and
                        it&#39;s such a relief as a small business owner to not
                        worry about unnecessary fees. I lost my credit card
                        once, and the service was so prompt that I was back to
                        work the next day!
                      </p>
                    </div>
                    <div className="bottom-content">
                      <h5 className="name">Sophie Moore</h5>
                      <span className="country"> United Kingdom</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="single-slide">
                  <div className="thumb">
                    <Image src={testomonial} alt="image" className="max-un" />
                  </div>
                  <div className="content">
                    <div className="top-content">
                      <Image src={quote} alt="quote" />
                      <h5>“I love Bangladesh Finance, they&#39;re the best”</h5>
                      <p className="xxlr">
                        “ It&#39;s been 2 years since I found Bangladesh Finance, and
                        it&#39;s such a relief as a small business owner to not
                        worry about unnecessary fees. I lost my credit card
                        once, and the service was so prompt that I was back to
                        work the next day!
                      </p>
                    </div>
                    <div className="bottom-content">
                      <h5 className="name">John Doe</h5>
                      <span className="country"> United Kingdom</span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
