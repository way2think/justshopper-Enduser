import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./WishlistCard.css";

const WishlistCard = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="start"
        alignItems="center"
        className="container"
      >
        <h3 className="yourcartheading">WishList</h3>
      </Stack>
      <Stack className="container wishlist-box">
        <Stack direction="column" spacing={3}>
          <Grid container>
            <Stack
              xs={12}
              direction="row"
              spacing={3}
              justifyContent="space-between"
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Box >
                  <img src="../images/biscuit.jpg" className="product-img" />

                  <Stack
                    direction="column"
                    justifyContent="start"
                    alignItems="start"
                    className="container"
                  >
                    <h4 style={{ fontWeight: "bolder", color: "#000" }}>
                      Choco Biscuits
                    </h4>
                    <h6 style={{ color: "#7D7D7D" }}>Stationery notes</h6>
                    <Stack direction="row">
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: "bold", color: "#7B7979" }}
                      >
                        ₹499{" "}
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: "bold", color: "#AAAAAA" }}
                      >
                        <del> ₹799</del>
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Grid>

              <Grid lg={6}>
                <Button>Add to Cart</Button>
                <Button>
                  <DeleteIcon />
                </Button>
              </Grid>
            </Stack>
          </Grid>
          <Grid container>
            <Stack xs={8} direction="row">
              <Grid>
                <img src="../images/biscuit.jpg" width={145} height={145} />
              </Grid>
              <Grid>
                <Stack direction="column">
                  <Typography variant="h4">Choco Biscuits</Typography>
                  <Typography variant="h6">Stationery notes</Typography>
                  <Stack direction="row">
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", color: "#7B7979" }}
                    >
                      ₹499
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", color: "#AAAAAA" }}
                    >
                      <del>₹799</del>
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid>
                <Button>Add to Cart</Button>
                <Button>
                  <DeleteIcon />
                </Button>
              </Grid>
            </Stack>
          </Grid>
        </Stack>
      </Stack>
    </>
  );
};

export default WishlistCard;
