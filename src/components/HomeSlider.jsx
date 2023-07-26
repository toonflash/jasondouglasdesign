import React from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"

import jddLogo from "../assets/images/logos/jddLogo.png";
import Jay from "../assets/images/jayIntro.png";
import wordpressSlider1 from "../assets/images/homeSlider/wordpressSlider1.jpg";
// import wpLogo2 from "../assets/images/logos/wpLogo-2.jpg";
// import slide3 from "../assets/images/homeSlider/image3.jpg";
// import slide4 from "../assets/images/homeSlider/image4.jpg";

export default function HomeSlider({ scrollDown, section2, section3 }) {

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
    autoplaySpeed: 350000,
    pauseOnHover: false,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />
  };

  return (
    <Slider {...settings} className={'homeSlider'}>
      <div className={'homeSlider__slide slide1'}>
        <div className={'homeSlider__slide__content'}>
          <img src={jddLogo} className="jddLogo" />
          <h1 className="sectionHeader">Hello,<br/>I'm Jay Douglas</h1>
          <p>I'm a front-end web developer based in Nelson, BC Canada. I specialize in making websites engaging and fun.</p>
          <p><a href="#">Say Hi!</a>&nbsp;<a href="#">Linked In</a></p>
        </div>
        <img src={Jay} className="jayIntro" />
      </div>
      <div className={'homeSlider__slide slide2'}>
        <div className={'homeSlider__slide__content'}>
          <div className="innerWrapper">
            <h1 className="sectionHeader">I make custom Wordpress themes</h1>
            <button className="cta" onClick={() => scrollDown(section2)}>Learn More</button>
          </div>
        </div>
        <img src={wordpressSlider1} className="wordpressSlider1"/>
      </div>
      <div className={'homeSlider__slide slide3'}>
        <div className={'homeSlider__slide__content'}>
          <h1 className="sectionHeader">Graphic</h1>
          <button className="sliderButton" onClick={() => scrollDown(section3)}>Graphic Design projects</button>
        </div>
        {/* <img src={slide3} alt="slide 3" /> */}
      </div>
    </Slider>
  );
}