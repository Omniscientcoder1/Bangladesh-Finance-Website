import JourneyCarousel from "../carousel/JourneyCarousel";

const OurJourney = () => {
  return (
    <section className="our-journey">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10">
              <div className="section-header text-center">
                <h5 className="sub-title">Our journey so far</h5>
                <h2 className="title">
                  Everyone has a story behind. Here’s ours!
                </h2>
                <p>
                  For decades, the clearing of financial transactions remained
                  unchanged and unchallenged.Bangladesh Finance provide real-time payment
                  and innovative financial services to their customers . Our
                  company timeline:
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {/* Journey Carousel Slider */}
            <JourneyCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
