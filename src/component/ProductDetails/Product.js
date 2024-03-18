import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import ProductGallery from "./ProductGallery";

const Product = () => {
  return (
    <>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        className="my-4 container-fluid py-4"
        direction="row"
      >
        <Box sx={{ flexGrow: 1, position: "relative" }}>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12} md={6} lg={6}>
              <ProductGallery />
            </Grid>
            <Grid item sm={6} xs={12} md={6} lg={6}>
              hello
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default Product;
