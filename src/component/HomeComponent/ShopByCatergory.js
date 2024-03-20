import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import "./ShopByCatergory.css";
import CatergoryCard from "./CatergoryCard";

const ShopByCatergory = (props) => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        className="mainshopbycatergory"
      >
        <h3 className="shopCategoryhead">{props.shopbytitle}</h3>
        <p className="shopCategorydesc">Love is a letter on pink stationery</p>
      </Stack>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        className="my-4 container"
        direction="row"
      >
        <Box sx={{ flexGrow: 1, position: "relative" }}>
          <Grid container spacing={2} sx={{ mb: 10 }}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <CatergoryCard
                catergoryname="Pen"
                catergoryimage="../images/stationary.png"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <CatergoryCard
                catergoryname="Pencils"
                catergoryimage="../images/stati.png"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <CatergoryCard
                catergoryname="Erasers"
                catergoryimage="../images/2.png"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <CatergoryCard
                catergoryname="Pouches"
                catergoryimage="../images/4.png"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <CatergoryCard
                catergoryname="Gifts"
                catergoryimage="../images/3.png"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <CatergoryCard
                catergoryname="Notes"
                catergoryimage="../images/1.png"
              />
            </Grid>
          </Grid>
          <a href="" className="viewmore">
            View More
          </a>
        </Box>
      </Stack>
    </>
  );
};

export default ShopByCatergory;
