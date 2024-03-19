import React from "react";
import Path from "../../component/Path";
import WorkDetailBlack from "../../component/HomeComponent/WorkDetailBlack";
import LatestCarousel from "../../component/ShopCategory/LatestCarousel";
import Product from "../../component/ProductDetails/Product";
import ProductInfo from "../../component/ProductDetails/ProductInfo";
import { Divider } from "@mui/material";

const ProductDetails = () => {
  return (
    <>
      <Path link="/" pathhome="Home" pathdetails="Product Details" />
      <Product />
     <Divider  sx={{borderBottomColor:"#000",margin:"auto",maxWidth:"95%" ,borderBottomWidth:"2px"}}  />
      <ProductInfo />
      <Divider  sx={{borderBottomColor:"#000",margin:"auto",maxWidth:"95%" ,borderBottomWidth:"2px"}}  />
      <LatestCarousel />
      <WorkDetailBlack />
    </>
  );
};

export default ProductDetails;
