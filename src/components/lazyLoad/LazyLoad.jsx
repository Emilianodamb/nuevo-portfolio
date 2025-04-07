import React, { Component } from "react";
import Slider from "react-slick";

import Pc from "/responsive-images/ejemplo-front.png"
import Mobile from "/responsive-images/ejemplomobile-left.png"
import MobilePortrait from "/responsive-images/ejemplomobile-portrait.png"
import Tablet from "/responsive-images/eventyfiertablet-landscape.png"

import "./LazyLoad.css";

function LazyLoad() {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    centerPadding: "60px"
  };
  return (
    <div id="slider" className="slider-ontainer">
      <Slider {...settings}>
        <div>
          <img src={Pc} />
        </div>
        <div>
          <img src={Mobile} />
        </div>
        <div>
          <img src={MobilePortrait} />
        </div>
        <div>
          <img src={Tablet} />
        </div>
      </Slider>
    </div>
  );
}

export default LazyLoad;