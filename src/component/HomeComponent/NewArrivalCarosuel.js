import { Button, Card, CardActions, CardContent, Stack } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CardNewArrival from "./CardNewArrival";

export default function SimpleSlider() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#dc3237",
          position: "absolute",
          right: "20px",
          borderRadius: "30px",
          padding: " 11px 27px 27px 8px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#dc3237",
          position: "absolute",
          left: "20px",
          borderRadius: "30px",
          padding: " 11px 27px 27px 8px",
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1535,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const cart = {
    background: "#dc3237",
    color: "#fff",
    fontSize: "14px",
    padding: "5px 10px",
    fontFamily: "amazonbold",
    "&:hover": {
      background: "#dc3237",
      color: "#fff",
      fontSize: "14px",
      fontFamily: "amazonbold",
      padding: "5px 10px",
    },
    "@media only screen and (min-device-width: 768px) and (max-device-width: 1023px)":
      {
        fontSize: "12px",
      },
  };
  return (
    <div className="container">
      <Stack
        justifyContent="space-between"
        alignItems="center"
        className="mt-5 container"
        direction="row"
      >
        <h3 className="arrivals">New Arrivals</h3>
      </Stack>
      <Slider {...settings}>
        <div>
          <CardNewArrival
            image="../images/biscuit.jpg"
            cardtitle="Choco Biscuits"
            discountprice="499.00"
            currentprice="799.00"
            sale="sale"
          />
        </div>
        <div>
          <CardNewArrival
            image="../images/biscuit.jpg"
            cardtitle="Choco Biscuits"
            discountprice="499.00"
            currentprice="799.00"
            sale="sale"
          />
        </div>
        <div>
          <CardNewArrival
            image="../images/biscuit.jpg"
            cardtitle="Choco Biscuits"
            discountprice="499.00"
            currentprice="799.00"
            sale="sale"
          />
        </div>
        <div>
          <CardNewArrival
            image="../images/biscuit.jpg"
            cardtitle="Choco Biscuits"
            discountprice="499.00"
            currentprice="799.00"
            sale="sale"
          />
        </div>
        <div>
          <CardNewArrival
            image="../images/biscuit.jpg"
            cardtitle="Choco Biscuits"
            discountprice="499.00"
            currentprice="799.00"
            sale="sale"
          />
        </div>
      </Slider>
    </div>
  );
}
