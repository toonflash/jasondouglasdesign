import React from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
//import computer from "../assets/images/svg/computer.svg";

export default function GraphicSlider() {

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "leftArrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <BsChevronLeft />
    </button>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "rightArrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <BsChevronRight />
    </button>
  );
  
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />
  };




  return (
    <Slider {...settings} className={'graphicSlider'}>
      <div className={'graphicSlider__slide'}>
        {/* <img src={computer} alt=""/> */}
      </div>
      <div className={'graphicSlider__slide'}>
        {/* <img src={computer} alt=""/> */}
      </div>
      <div className={'graphicSlider__slide'}>
        {/* <img src={computer} alt=""/> */}
      </div>
    </Slider>
  );
}