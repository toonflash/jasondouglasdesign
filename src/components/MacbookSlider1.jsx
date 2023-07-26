import React from "react";
import Slider from "react-slick";

import slide1 from "../assets/images/macbookSlider/kitAndAce/kitAndAceSlide-1.jpg";
import slide2 from "../assets/images/macbookSlider/kitAndAce/kitAndAceSlide-2.jpg";
import slide3 from "../assets/images/macbookSlider/kitAndAce/kitAndAceSlide-3.jpg";
import slide4 from "../assets/images/macbookSlider/kitAndAce/kitAndAceSlide-4.jpg";
import slide5 from "../assets/images/macbookSlider/kitAndAce/kitAndAceSlide-5.jpg";

export default function MacbookSlider() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    draggable: false,
    accessibility: false,
    focusOnSelect: false
  };


  return (
    <Slider {...settings} className="macbookSlider">
      <div className="macbookSlider__slide">
        <img src={slide1} alt="Kit and Ace carousel slide" width="100%"/>
      </div>
      <div className="macbookSlider__slide">
        <img src={slide2} alt="Kit and Ace carousel slide" width="100%" />
      </div>
      <div className="macbookSlider__slide">
        <img src={slide3} alt="Kit and Ace carousel slide" width="100%" />
      </div>
      <div className="macbookSlider__slide">
        <img src={slide4} alt="Kit and Ace carousel slide" width="100%" />
      </div>
      <div className="macbookSlider__slide">
        <img src={slide5} alt="Kit and Ace carousel slide" width="100%" />
      </div>
    </Slider>
  );
}