import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import "./LatestCarousel.css"
import { Box, Stack, Typography } from "@mui/material";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CardCarousel = () => {
  return (
 
    <Carousel
      swipeable={true}
      draggable={true}
      renderDotsOutside={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
    //   autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .10"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      height="800px"
      
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="520px"
        // style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
      >
        <img src="../images/chocolate.jpg" alt="" className="product-img" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginLeft: 3,
            
          }}
        >
          <h4 className="product-name"> Choco Biscuits</h4>
          <p className="product-category">Stationery notes</p>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#7B7979" }}
          >
            {" "}
            ₹499
            <span>
              <del
                style={{
                  fontWeight: "bold",
                  color: "#AAAAAA",
                  marginLeft: 5,
                  fontSize: "18px",
                }}
              >
                ₹799
              </del>
            </span>
          </Typography>
        </Box>
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="520px"
      >
        <img src="../images/biscuit.jpg" alt="" className="product-img" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginLeft: 3,
          }}
        >
          <h4 className="product-name"> Choco Biscuits</h4>
          <p className="product-category">Stationery notes</p>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#7B7979" }}
          >
            {" "}
            ₹499
            <span>
              <del
                style={{
                  fontWeight: "bold",
                  color: "#AAAAAA",
                  marginLeft: 5,
                  fontSize: "18px",
                }}
              >
                ₹799
              </del>
            </span>
          </Typography>
        </Box>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="520px"
      >
        <img src="../images/biscuit.jpg" alt="" className="product-img" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginLeft: 3,
          }}
        >
          <h4 className="product-name"> Choco Biscuits</h4>
          <p className="product-category">Stationery notes</p>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#7B7979" }}
          >
            {" "}
            ₹499
            <span>
              <del
                style={{
                  fontWeight: "bold",
                  color: "#AAAAAA",
                  marginLeft: 5,
                  fontSize: "18px",
                }}
              >
                ₹799
              </del>
            </span>
          </Typography>
        </Box>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="520px"
      >
        <img src="../images/biscuit.jpg" alt="" className="product-img" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginLeft: 3,
          }}
        >
          <h4 className="product-name"> Choco Biscuits</h4>
          <p className="product-category">Stationery notes</p>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#7B7979" }}
          >
            {" "}
            ₹499
            <span>
              <del
                style={{
                  fontWeight: "bold",
                  color: "#AAAAAA",
                  marginLeft: 5,
                  fontSize: "18px",
                }}
              >
                ₹799
              </del>
            </span>
          </Typography>
        </Box>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="520px"
      >
        <img src="../images/biscuit.jpg" alt="" className="product-img" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginLeft: 3,
          }}
        >
          <h4 className="product-name"> Choco Biscuits</h4>
          <p className="product-category">Stationery notes</p>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#7B7979" }}
          >
            {" "}
            ₹499
            <span>
              <del
                style={{
                  fontWeight: "bold",
                  color: "#AAAAAA",
                  marginLeft: 5,
                  fontSize: "18px",
                }}
              >
                ₹799
              </del>
            </span>
          </Typography>
        </Box>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="520px"
      >
        <img src="../images/biscuit.jpg" alt="" className="product-img" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginLeft: 3,
          }}
        >
          <h4 className="product-name"> Choco Biscuits</h4>
          <p className="product-category">Stationery notes</p>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#7B7979" }}
          >
            {" "}
            ₹499
            <span>
              <del
                style={{
                  fontWeight: "bold",
                  color: "#AAAAAA",
                  marginLeft: 5,
                  fontSize: "18px",
                }}
              >
                ₹799
              </del>
            </span>
          </Typography>
        </Box>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="520px"
      >
        <img src="../images/biscuit.jpg" alt="" className="product-img" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginLeft: 3,
          }}
        >
          <h4 className="product-name"> Choco Biscuits</h4>
          <p className="product-category">Stationery notes</p>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#7B7979" }}
          >
            {" "}
            ₹499
            <span>
              <del
                style={{
                  fontWeight: "bold",
                  color: "#AAAAAA",
                  marginLeft: 5,
                  fontSize: "18px",
                }}
              >
                ₹799
              </del>
            </span>
          </Typography>
        </Box>
      </Stack>
    </Carousel>
  
  );
};

export default CardCarousel;
