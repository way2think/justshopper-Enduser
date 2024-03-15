import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import "./Category.css";
import SearchBar from "./SearchBar";

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
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Box>
                <h4 className="searchproducthead">Search Product</h4>
                <SearchBar />
              </Box>
              <Box></Box>
            </Grid>
            <Grid item xs={12} sm={4} md={8} lg={8}>
              Hello
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default Category;
