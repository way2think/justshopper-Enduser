import React from "react";
import Path from "../../component/Path";
import WorkDetailBlack from "../../component/HomeComponent/WorkDetailBlack";
import LatestCarousel from "../../component/ShopCategory/LatestCarousel";
import Product from "../../component/ProductDetails/Product";

const ProductDetails = () => {
  return (
    <>
      <Path link="/" pathhome="Home" pathdetails="Product Details" />
      <Product />
      <LatestCarousel />
      <WorkDetailBlack />
    </>
  );
};

export default ProductDetails;
