import React from "react";
import Slide from "../slide/slide";

import "./slide-animation.scss";

const SlideAnimation = ({ children }) => {
  return (
    <div className="slide-animation-container">
      {children}
      <div className="slides">
        <Slide className="slide-one slide" imgSrc="./assets/image-one.jpeg">
          <p>Strength</p>
          <i className="fa-solid fa-angle-right"></i>
        </Slide>
        <Slide className="slide-two slide" imgSrc="./assets/image-two.jpeg">
          <p>Mobility</p>
          <i className="fa-solid fa-angle-right"></i>
        </Slide>
        <Slide className="slide-three slide" imgSrc="./assets/image-three.jpeg">
          <p>Drills</p>
          <i className="fa-solid fa-angle-right"></i>
        </Slide>
      </div>
    </div>
  );
};

export default SlideAnimation;
