import React from "react";
import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import CardNewArrival from "../HomeComponent/CardNewArrival";
import CategoryPagination from "./CategoryPagination";
import "./CategoryCard.css";

const CategoryCard = ({ products }) => {
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
            {products.length === 0 ? (
              <Typography align="center">No Products</Typography>
            ) : (
              products.map((product) => (
                <Grid item sm={3} xs={6} md={3} lg={3} key={product.id}>
                  <CardNewArrival
                    product={product}
                    // image="../images/biscuit.jpg"
                    // cardtitle="Choco Biscuits"
                    // discountprice="499.00"
                    // currentprice="799.00"
                    // sale="sale"
                  />
                </Grid>
              ))
            )}
            {/* {} */}
          </Grid>
          <CategoryPagination />
        </Box>
      </Stack>
    </>
  );
};

export default CategoryCard;
