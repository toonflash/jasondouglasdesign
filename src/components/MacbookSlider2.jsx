import React from "react";
import Slider from "react-slick";

import slide1 from "../assets/images/macbookSlider/openroad/openroadSlide-1.jpg";
import slide2 from "../assets/images/macbookSlider/openroad/openroadSlide-2.jpg";
import slide3 from "../assets/images/macbookSlider/openroad/openroadSlide-3.jpg";
import slide4 from "../assets/images/macbookSlider/openroad/openroadSlide-4.jpg";
import slide5 from "../assets/images/macbookSlider/openroad/openroadSlide-5.jpg";

export default function MacbookSlider() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    fade: true,
    cssEase: 'linear',
    draggable: false,
    accessibility: false,
    focusOnSelect: false
  };

  return (
    <Slider {...settings} className="macbookSlider openroad">
      <div className="macbookSlider__slide">
        <img src={slide1} alt="Openroad carousel slide" width="100%"/>
      </div>
      <div className="macbookSlider__slide">
        <img src={slide2} alt="Openroad carousel slide" width="100%" />
      </div>
      <div className="macbookSlider__slide">
        <img src={slide3} alt="Openroad carousel slide" width="100%" />
      </div>
      <div className="macbookSlider__slide">
        <img src={slide4} alt="Openroad carousel slide" width="100%" />
      </div>
      <div className="macbookSlider__slide">
        <img src={slide5} alt="Openroad carousel slide" width="100%" />
      </div>
    </Slider>
  );
}