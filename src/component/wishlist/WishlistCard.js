import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./WishlistCard.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";

const WishlistCard = () => {
  const cart = {
    padding: "8px 15px",
    bgcolor: "#DC3237",
    fontWeight: 600,
    "&:hover": {
      border: "2px solid #DC3237 ",
      bgcolor: "#fff",
      color: "#DC3237",
    },
    "@media only screen and (min-width: 320px) and (max-width: 600px)": {
      width: "100%",
    },
  };

  const deleteicon = {
    padding: "8px 15px",
    marginLeft: 2,
    bgcolor: "#000",
    fontWeight: 600,
    "&:hover": {
      border: "2px solid #000",
      bgcolor: "#fff",
      color: "#000",
    },
  };

  const user = useSelector(selectUser);
  console.log("user: ", user);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="start"
        alignItems="center"
        className="container"
      >
        <h3 className="yourcartheading">Favorites</h3>
      </Stack>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        className="my-4 container wishlist-box"
        direction="row"
      >
        <Box
          sx={{
            flexGrow: 1,
            position: "relative",
            overflowY: "scroll",
            maxHeight: "400px",
          }}
        >
          <Grid container spacing={2} sx={{ mb: 10 }}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  src="../images/biscuit.jpg"
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
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} className="add-cart">
              <Button sx={cart} variant="contained">
                Add to Cart
              </Button>
              <Button sx={deleteicon} variant="contained">
                <DeleteIcon />
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 10 }}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  src="../images/biscuit.jpg"
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
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} className="add-cart">
              <Button sx={cart} variant="contained">
                Add to Cart
              </Button>
              <Button sx={deleteicon} variant="contained">
                <DeleteIcon />
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 10 }}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  src="../images/biscuit.jpg"
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
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} className="add-cart">
              <Button sx={cart} variant="contained">
                Add to Cart
              </Button>
              <Button sx={deleteicon} variant="contained">
                <DeleteIcon />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Stack>
      {/* <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <img src="../images/arrow.png " alt="" className="favimage" />
        <h5 className="nofav">No Item in the Favorites</h5>
      </Stack> */}
    </>
  );
};

export default WishlistCard;
