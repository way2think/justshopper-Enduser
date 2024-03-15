import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import "./Category.css";
import SearchBar from "./SearchBar";
import FilterPrice from "./FilterPrice";

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
            </Grid>
            <Grid item xs={12} sm={4} md={9} lg={9}>
              <Box>
                <h4 className="productheading">Stationery</h4>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default Category;
