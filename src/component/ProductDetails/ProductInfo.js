import React from "react";
import { Typography } from "@mui/material";
import classes from "../ProductDetails/ProductInfo.module.css";

const ProductInfo = ({ product }) => {
  return (
    <div className={classes.productInfo}>
      <Typography
        variant="h6"
        sx={{ textAlign: "left", fontWeight: 800, color: "#000" }}
      >
        Product Details
      </Typography>
      <div>
        <ul className={classes.detailsbook}>
          {/* <li className={classes.gridItem} style={{ borderRadius: "10px 0 0" }}>
            Color
          </li>
          <li className={classes.gridItemWhite}>Color</li> */}
          <li className={classes.gridItem}>Category</li>
          <li className={classes.gridItemWhite}>{product.category}</li>
          {product.theme && (
            <>
              <li className={classes.gridItem}>Theme</li>
              <li className={classes.gridItemWhite}>{product.theme}</li>
            </>
          )}
          <li className={classes.gridItem}>Weight</li>
          <li className={classes.gridItemWhite}>
            {product.dimensions.weight} grams
          </li>
          {product.pack_of > 0 && (
            <>
              <li className={classes.gridItem}>Pack of</li>
              <li className={classes.gridItemWhite}>{product.pack_of}</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
