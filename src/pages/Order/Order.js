import React from "react";
import { Stack } from "@mui/material";

import MyOrders from "../../component/MyOrders/MyOrders";
import Path from "../../component/Path";

const Order = () => {
  return (
    <>
      <Stack>
        <Path pathhome="Home" pathdetails="Orders" />
        <MyOrders />
      </Stack>
    </>
  );
};

export default Order;
