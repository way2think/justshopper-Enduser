import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Stack, Box, Typography } from "@mui/material";
import { useGetMultiProductByIdsQuery } from "../../api/product";
import { formatAmount, scrollToTop } from "../../utils";
import { useNavigate } from "react-router-dom";
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
        right: "15px",
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
        background: "#000",
        position: "absolute",
        left: "15px",
        borderRadius: "30px",
        padding: " 11px 27px 27px 8px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}
function LatestCarousel({ relatedProducts }) {
  const navigate = useNavigate();
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const {
    data: products,
    isFetching,
    isLoading,
  } = useGetMultiProductByIdsQuery(relatedProducts);

  console.log("related products: ", products, isFetching, isLoading);

  const handleNavigateToProductDetail = (product) => {
    navigate(`/product/${product.id}`, { state: product });
    scrollToTop();
  };

  return (
    <div className="slider-container container-fluid">
      <Stack
        direction="row"
        justifyContent="start"
        alignItems="start"
        className="container"
      >
        <h3
          className="latestheading"
          style={{
            fontSize: "30px",
            color: "#000",
            fontFamily: " amazonheavy",
          }}
        >
          Related Products
        </h3>
      </Stack>
      <Slider {...settings} style={{ margin: "20px" }}>
        {products &&
          products.map((product) => (
            <div>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                // style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                onClick={() => handleNavigateToProductDetail(product)}
              >
                <img
                  src={product.images[0] || "../images/dummy-image.jpg"}
                  alt=""
                  className="product-img"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    marginLeft: 3,
                  }}
                >
                  <h4 className="product-name">{product.name}</h4>
                  <p className="product-category">{product.category}</p>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "#7B7979" }}
                  >
                    ₹{formatAmount(product.discount_price)}
                    <span>
                      <del
                        style={{
                          fontWeight: "bold",
                          color: "#AAAAAA",
                          marginLeft: 5,
                          fontSize: "18px",
                        }}
                      >
                        ₹{formatAmount(product.selling_price)}
                      </del>
                    </span>
                  </Typography>
                </Box>
              </Stack>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default LatestCarousel;
