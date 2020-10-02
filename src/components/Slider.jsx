import React from "react";
import "swiper/swiper.scss";
import "../scss/slider.scss";
import Swiper from "react-id-swiper";

import ukraine from "../assets/images/kiev.jpg";
import usa from "../assets/images/usa.jpg";
import germany from "../assets/images/germany.jpg";
import india from "../assets/images/india.jpg";
import israel from "../assets/images/israel.jpg";

const sliderConfigs = {
  containerClass: "swiper-container slider-container",
  parallax: true,
  centeredSlides: true,
  spaceBetween: 0,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  effect: "slide",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

const Slider = () => {
  const [parallaxSwiper, setParallaxSwiper] = React.useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;
  return (
    <Swiper {...sliderConfigs} getSwiper={setParallaxSwiper}>
      <div className="slide">
        <div
          className="slide__container"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={ukraine} alt="images"></img>
          <p>UKRAINE</p>
        </div>
      </div>
      <div className="slide">
        <div
          className="slide__container"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={usa} alt="images"></img>
          <p>USA</p>
        </div>
      </div>
      <div className="slide">
        <div
          className="slide__container"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={germany} alt="images"></img>
          <p>GERMANY</p>
        </div>
      </div>
      <div className="slide">
        <div
          className="slide__container"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={india} alt="images"></img>
          <p>INDIA</p>
        </div>
      </div>
      <div className="slide">
        <div
          className="slide__container"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={israel} alt="images"></img>
          <p>ISRAEL</p>
        </div>
      </div>
    </Swiper>
  );
};

export default Slider;
