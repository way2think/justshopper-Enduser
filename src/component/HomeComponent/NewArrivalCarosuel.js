import { Button, Card, CardActions, CardContent, Stack } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CardNewArrival from "./CardNewArrival";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./NewArrivalCarosuel.css";

export default function SimpleSlider({ products }) {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#000",
          position: "absolute",
          right: "2px",
          borderRadius: "30px",
          padding: " 11px 27px 27px 8px",
          "@media only screen and (min-width: 320px) and (max-width: 600px)": {
            right: "0rem",
          },
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
          background: "#000",
          position: "absolute",
          Left: "0px",
          borderRadius: "30px",
          padding: " 11px 27px 27px 8px",
          zIndex: 1,
          "@media only screen and (min-width: 320px) and (max-width: 600px)": {
            Left: "0rem",
          },
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
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 2300,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
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
          slidesToShow: 2,
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
    <div className="container-fluid new-arrivals ">
      <Stack
        justifyContent="space-between"
        alignItems="center"
        className="mt-5 container-fluid"
        direction="row"
      >
        <h3 className="arrivals">New Arrivals</h3>
      </Stack>
      <Slider className="new" {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <CardNewArrival product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
