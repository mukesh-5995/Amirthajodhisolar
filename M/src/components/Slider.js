import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        <div>
          <img
            src="https://via.placeholder.com/1200x400?text=Slide+1"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1200x400?text=Slide+2"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1200x400?text=Slide+3"
            alt="Slide 3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
