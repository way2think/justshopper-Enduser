import { ClassNames } from "@emotion/react";
import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import classes from "../ProductDetails/ProductInfo.module.css";

const ProductInfo = () => {
  return (
    <div className={classes.productInfo}>
        <Typography variant="h6" sx={{textAlign:"left",fontWeight:800,color:"#000"}}>Product Details</Typography>
      <div>
        <ul className={classes.detailsbook}>
          <li className={classes.gridItem} style={{ borderRadius: "10px 0 0" }}>
            Color
          </li>
          <li className={classes.gridItemWhite}>Color</li>
          <li className={classes.gridItem}>Model name</li>
          <li className={classes.gridItemWhite}>Choco Biscuits round</li>
          <li className={classes.gridItem}>Pack of</li>
          <li className={classes.gridItemWhite}>1</li>
          <li className={classes.gridItem}>Category</li>
          <li className={classes.gridItemWhite}>Stationery - Notes</li>
          <li className={classes.gridItem}>Color</li>
          <li className={classes.gridItemWhite}>Color</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
