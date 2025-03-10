import React from "react";


const Banner = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      {/* <h1>{title}</h1>
      <p>{subtitle}</p> */}
    </div>
  );
};

export default Banner;
