import React, { useState } from "react";

import MyOrders from "../../component/MyOrders/MyOrders";
import Path from "../../component/Path";
import { Stack } from "@mui/material";

const Order = () => {
  return (
    <>
      {/* <MyOrders /> */}
      <Stack>
        <Path pathhome="Home" pathdetails="Orders" />
        <MyOrders />
      </Stack>
    </>
  );
};

export default Order;
