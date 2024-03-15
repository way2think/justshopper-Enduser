import React from "react";
import Path from "../../component/Path";
import WorkDetailBlack from "../../component/HomeComponent/WorkDetailBlack";
import Category from "../../component/ShopCategory/Category";

const ShopCategory = () => {
  return (
    <>
      <Path link="/" pathhome="Home" pathdetails="Shop by Category" />
      <Category />
      <WorkDetailBlack />
    </>
  );
};

export default ShopCategory;
