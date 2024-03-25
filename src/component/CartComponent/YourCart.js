import React from "react";
import { Stack } from "@mui/material";
import "./YourCart.css";
import CartTable from "./CartTable";

const YourCart = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="start"
        alignItems="center"
        className="container"
      >
        <h3 className="yourcartheading"> Your Cart</h3>
      </Stack>
      <CartTable />
      {/* <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <img src="../images/shopping.png " alt="" className="cartimage" />
        <h5 className="noitem">No Item in the cart</h5>
      </Stack> */}
    </>
  );
};

export default YourCart;
