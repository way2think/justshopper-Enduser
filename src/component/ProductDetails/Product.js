import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import ProductGallery from "./ProductGallery";
import ProductCard from "./ProductCard";

const Product = ({ product }) => {
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
            <Grid item sm={6} xs={12} md={5} lg={5}>
              <ProductGallery
                name={product.name}
                images={product.images || []}
              />
            </Grid>
            <Grid
              item
              sm={6}
              xs={12}
              md={7}
              lg={7}
              sx={{
                paddingRight: "30px",
                "@media only screen and (min-width: 320px) and (max-width: 600px)":
                  {
                    paddingRight: "0px",
                  },
              }}
            >
              <ProductCard product={product} />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default Product;
