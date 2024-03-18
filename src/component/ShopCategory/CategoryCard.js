import React from "react";
import "./CategoryCard.css";
import { Box, Grid, Pagination, Stack } from "@mui/material";
import CardNewArrival from "../HomeComponent/CardNewArrival";

const CategoryCard = () => {
  return (
    <>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        className="my-4 container"
        direction="row"
      >
        <Box sx={{ flexGrow: 1, position: "relative" }}>
          <Grid container spacing={2} sx={{ mb: 10 }}>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <CardNewArrival
                image="../images/biscuit.jpg"
                cardtitle="Choco Biscuits"
                discountprice="499.00"
                currentprice="799.00"
                sale="sale"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <CardNewArrival
                image="../images/biscuit.jpg"
                cardtitle="Choco Biscuits"
                discountprice="499.00"
                currentprice="799.00"
                sale="sale"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <CardNewArrival
                image="../images/biscuit.jpg"
                cardtitle="Choco Biscuits"
                discountprice="499.00"
                currentprice="799.00"
                sale="sale"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <CardNewArrival
                image="../images/biscuit.jpg"
                cardtitle="Choco Biscuits"
                discountprice="499.00"
                currentprice="799.00"
                sale="sale"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <CardNewArrival
                image="../images/biscuit.jpg"
                cardtitle="Choco Biscuits"
                discountprice="499.00"
                currentprice="799.00"
                sale="sale"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <CardNewArrival
                image="../images/biscuit.jpg"
                cardtitle="Choco Biscuits"
                discountprice="499.00"
                currentprice="799.00"
                sale="sale"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <CardNewArrival
                image="../images/biscuit.jpg"
                cardtitle="Choco Biscuits"
                discountprice="499.00"
                currentprice="799.00"
                sale="sale"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <CardNewArrival
                image="../images/biscuit.jpg"
                cardtitle="Choco Biscuits"
                discountprice="499.00"
                currentprice="799.00"
                sale="sale"
              />
            </Grid>
          </Grid>
          <Pagination />
        </Box>
      </Stack>
    </>
  );
};

export default CategoryCard;
