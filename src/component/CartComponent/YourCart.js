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
        className="container-fluid"
      >
        <h3 className="yourcartheading"> Your Cart</h3>
      </Stack>
      <CartTable />
    </>
  );
};

export default YourCart;
