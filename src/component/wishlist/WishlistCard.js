import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./WishlistCard.css";

const WishlistCard = () => {
  const cart = {
    "&:hover": {},
  };

  const deleteicon = {
    "&:hover": {},
  };
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
      <Stack
        justifyContent="space-between"
        alignItems="center"
        className="my-4 container wishlist-box"
        direction="row"
      >
        <Box sx={{ flexGrow: 1, position: "relative" }}>
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
                <Box>
                  <p>Choco Biscuits</p>
                  <p>Choco Biscuits</p>
                  <p>Choco Biscuits</p>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
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
    </>
  );
};

export default WishlistCard;
