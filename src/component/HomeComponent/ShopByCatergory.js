import React from "react";
import { Stack } from "@mui/material";
import "./ShopByCatergory.css";

const ShopByCatergory = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{ my: 5 }}
      >
        <h3 className="shopCategoryhead">Shop by Catergory</h3>
        <p className="shopCategorydesc">Love is a letter on pink stationery</p>
      </Stack>
    </>
  );
};

export default ShopByCatergory;
