import React from "react";

const AlignmentWithSDGs = () => {
  return (
    <div className="alignment-with-sdgs-page">
      {/* Banner Section */}
      <section className="banner-section">
        <div className="overlay">
          {/* <h1>Alignment with SDGs</h1>
          <p>
            Our commitment to achieving the United Nations Sustainable
            Development Goals (SDGs).
          </p> */}
        </div>
      </section>

      {/* Title and Content Section */}
      <section className="content-section">
        <div className="container">
          <h2>Alignment with SDG's</h2>
          <p>
          In promoting sustainable development, we have chosen to focus on 11 SDGs which we believe we can make meaningful contributions to, and after taking into account the markets in which we operate.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="image-section">
        <div className="image-container">
          <img
            src="/images/SDG.png"
            alt="SDGs Overview"
            className="large-image"
          />
        </div>
      </section>
    </div>
  );
};

export default AlignmentWithSDGs;
