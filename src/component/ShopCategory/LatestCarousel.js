import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Stack, Box, Typography } from "@mui/material";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        position: "absolute",
        right: "65px",
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
        background: "black",
        position: "absolute",
        left: "65px",
        borderRadius: "30px",
        padding: " 11px 27px 27px 8px",
        zIndex:1
      }}
      onClick={onClick}
    />
  );
}
function LatestCarousel() {
  var settings = {
    dots: true,
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
          slidesToShow: 3,
          slidesToScroll: 3,
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
  return (
    <div className="slider-container">
      <Slider {...settings} style={{ margin: "20px" }}>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
          {" "}
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
        </div>

        <div>
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
        </div>
        <div>
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
        </div>
       <div>
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
       </div>
        <div>
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
        </div>
      </Slider>
    </div>
  );
}

export default LatestCarousel;

// function Responsive() {
//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//         <div>
//           <h3>7</h3>
//         </div>
//         <div>
//           <h3>8</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import React from "react";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };

// const CardCarousel = () => {
//   return (

//     <Carousel
//       swipeable={true}
//       draggable={true}
//       renderDotsOutside={true}
//       showDots={true}
//       responsive={responsive}
//       ssr={true} // means to render carousel on server-side.
//       infinite={true}
//     //   autoPlay={true}
//       autoPlaySpeed={1000}
//       keyBoardControl={true}
//       customTransition="all .10"
//       transitionDuration={500}
//       containerClass="carousel-container"
//       removeArrowOnDeviceType={["tablet", "mobile"]}
//       // deviceType={this.props.deviceType}
//         dotListClass="custom-dot-list-style"
//       itemClass="carousel-item-padding-40-px"
//       height="800px"

//     >
//       <Stack
//         direction="row"
//         justifyContent="center"
//         alignItems="center"
//         width="520px"
//         // style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
//       >
//         <img src="../images/chocolate.jpg" alt="" className="product-img" />
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "start",
//             marginLeft: 3,

//           }}
//         >
//           <h4 className="product-name"> Choco Biscuits</h4>
//           <p className="product-category">Stationery notes</p>
//           <Typography
//             variant="h5"
//             sx={{ fontWeight: "bold", color: "#7B7979" }}
//           >
//             {" "}
//             ₹499
//             <span>
//               <del
//                 style={{
//                   fontWeight: "bold",
//                   color: "#AAAAAA",
//                   marginLeft: 5,
//                   fontSize: "18px",
//                 }}
//               >
//                 ₹799
//               </del>
//             </span>
//           </Typography>
//         </Box>
//       </Stack>

//       <Stack
//         direction="row"
//         justifyContent="center"
//         alignItems="center"
//         width="520px"
//       >
//         <img src="../images/biscuit.jpg" alt="" className="product-img" />
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "start",
//             marginLeft: 3,
//           }}
//         >
//           <h4 className="product-name"> Choco Biscuits</h4>
//           <p className="product-category">Stationery notes</p>
//           <Typography
//             variant="h5"
//             sx={{ fontWeight: "bold", color: "#7B7979" }}
//           >
//             {" "}
//             ₹499
//             <span>
//               <del
//                 style={{
//                   fontWeight: "bold",
//                   color: "#AAAAAA",
//                   marginLeft: 5,
//                   fontSize: "18px",
//                 }}
//               >
//                 ₹799
//               </del>
//             </span>
//           </Typography>
//         </Box>
//       </Stack>
//       <Stack
//         direction="row"
//         justifyContent="center"
//         alignItems="center"
//         width="520px"
//       >
//         <img src="../images/biscuit.jpg" alt="" className="product-img" />
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "start",
//             marginLeft: 3,
//           }}
//         >
//           <h4 className="product-name"> Choco Biscuits</h4>
//           <p className="product-category">Stationery notes</p>
//           <Typography
//             variant="h5"
//             sx={{ fontWeight: "bold", color: "#7B7979" }}
//           >
//             {" "}
//             ₹499
//             <span>
//               <del
//                 style={{
//                   fontWeight: "bold",
//                   color: "#AAAAAA",
//                   marginLeft: 5,
//                   fontSize: "18px",
//                 }}
//               >
//                 ₹799
//               </del>
//             </span>
//           </Typography>
//         </Box>
//       </Stack>
//       <Stack
//         direction="row"
//         justifyContent="center"
//         alignItems="center"
//         width="520px"
//       >
//         <img src="../images/biscuit.jpg" alt="" className="product-img" />
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "start",
//             marginLeft: 3,
//           }}
//         >
//           <h4 className="product-name"> Choco Biscuits</h4>
//           <p className="product-category">Stationery notes</p>
//           <Typography
//             variant="h5"
//             sx={{ fontWeight: "bold", color: "#7B7979" }}
//           >
//             {" "}
//             ₹499
//             <span>
//               <del
//                 style={{
//                   fontWeight: "bold",
//                   color: "#AAAAAA",
//                   marginLeft: 5,
//                   fontSize: "18px",
//                 }}
//               >
//                 ₹799
//               </del>
//             </span>
//           </Typography>
//         </Box>
//       </Stack>
//       <Stack
//         direction="row"
//         justifyContent="center"
//         alignItems="center"
//         width="520px"
//       >
//         <img src="../images/biscuit.jpg" alt="" className="product-img" />
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "start",
//             marginLeft: 3,
//           }}
//         >
//           <h4 className="product-name"> Choco Biscuits</h4>
//           <p className="product-category">Stationery notes</p>
//           <Typography
//             variant="h5"
//             sx={{ fontWeight: "bold", color: "#7B7979" }}
//           >
//             {" "}
//             ₹499
//             <span>
//               <del
//                 style={{
//                   fontWeight: "bold",
//                   color: "#AAAAAA",
//                   marginLeft: 5,
//                   fontSize: "18px",
//                 }}
//               >
//                 ₹799
//               </del>
//             </span>
//           </Typography>
//         </Box>
//       </Stack>
//       <Stack
//         direction="row"
//         justifyContent="center"
//         alignItems="center"
//         width="520px"
//       >
//         <img src="../images/biscuit.jpg" alt="" className="product-img" />
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "start",
//             marginLeft: 3,
//           }}
//         >
//           <h4 className="product-name"> Choco Biscuits</h4>
//           <p className="product-category">Stationery notes</p>
//           <Typography
//             variant="h5"
//             sx={{ fontWeight: "bold", color: "#7B7979" }}
//           >
//             {" "}
//             ₹499
//             <span>
//               <del
//                 style={{
//                   fontWeight: "bold",
//                   color: "#AAAAAA",
//                   marginLeft: 5,
//                   fontSize: "18px",
//                 }}
//               >
//                 ₹799
//               </del>
//             </span>
//           </Typography>
//         </Box>
//       </Stack>
//       <Stack
//         direction="row"
//         justifyContent="center"
//         alignItems="center"
//         width="520px"
//       >
//         <img src="../images/biscuit.jpg" alt="" className="product-img" />
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "start",
//             marginLeft: 3,
//           }}
//         >
//           <h4 className="product-name"> Choco Biscuits</h4>
//           <p className="product-category">Stationery notes</p>
//           <Typography
//             variant="h5"
//             sx={{ fontWeight: "bold", color: "#7B7979" }}
//           >
//             {" "}
//             ₹499
//             <span>
//               <del
//                 style={{
//                   fontWeight: "bold",
//                   color: "#AAAAAA",
//                   marginLeft: 5,
//                   fontSize: "18px",
//                 }}
//               >
//                 ₹799
//               </del>
//             </span>
//           </Typography>
//         </Box>
//       </Stack>
//     </Carousel>

//   );
// };
