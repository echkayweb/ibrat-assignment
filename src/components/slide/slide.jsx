import React from "react";

import "./slide.scss";

const Slide = ({ children, className, imgSrc }) => {
  return (
    <div
      className={`slide-container ${className}`}
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      {children}
    </div>
  );
};

export default Slide;
