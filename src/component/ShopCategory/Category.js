import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import "./Category.css";
import SearchBar from "./SearchBar";
import FilterPrice from "./FilterPrice";
import FilterCategory from "./FilterCategory";
import LatestCarousel from "./LatestCarousel";

const Category = () => {
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
              <Box>
                <h4 className="searchproducthead">Search Product</h4>
                <SearchBar />
              </Box>
              <Box className="filter">
                <h4 className="filterheading">Filter by Price</h4>
                <FilterPrice />
              </Box>
              <Box className="filter">
                <Typography variant="h5" sx={{ textAlign: "left",fontWeight:"bold",color:"#000" }}>
                  Filter
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "left" ,fontWeight:600,color:"#000" }}>
                  Pick a category
                </Typography>

                {/* <FilterCategory /> */}
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={9} lg={9}>
              <Box>
                <h4 className="productheading">Stationery</h4>
              </Box>
            </Grid>
          </Grid>
          <LatestCarousel />
        </Box>
      </Stack>
    </>
  );
};

export default Category;
