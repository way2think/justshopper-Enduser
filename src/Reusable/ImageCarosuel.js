import React from "react";
import Slider from "react-slick";
import "./ImageCarosuel.css";

export default function ImageCarosuel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={"../images/biscuit.jpg"} alt="" className="cardimage" />
      </div>
      <div>
        <img src={"../images/chocolate.jpg"} alt="" className="cardimage" />
      </div>
      <div>
        <img src={"../images/biscuit.jpg"} alt="" className="cardimage" />
      </div>
      <div>
        <img src={"../images/chocolate.jpg"} alt="" className="cardimage" />
      </div>
      <div>
        <img src={"../images/biscuit.jpg"} alt="" className="cardimage" />
      </div>
      <div>
        <img src={"../images/chocolate.jpg"} alt="" className="cardimage" />
      </div>
    </Slider>
  );
}
