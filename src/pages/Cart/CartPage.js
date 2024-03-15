import React from "react";
import Path from "../../component/Path";
import WorkDetailBlack from "../../component/HomeComponent/WorkDetailBlack";
import YourCart from "../../component/CartComponent/YourCart";

const CartPage = () => {
  return (
    <>
      <Path link="/" pathhome="Home" pathdetails="Cart" />
      <YourCart />
      <WorkDetailBlack />
    </>
  );
};

export default CartPage;
