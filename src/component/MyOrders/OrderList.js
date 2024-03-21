import React from "react";
import "./MyOrders.css";

import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  Grid,
  IconButton,
  Avatar,
  Box,
  Stack,
} from "@mui/material";
import styled from "@emotion/styled";

const useStyles = styled((theme) => ({
  card: {
    marginBottom: theme.spacing(2),
  },
  itemImg: {
    width: 120,
    height: 120,
    borderRadius: 4,
  },
}));

const OrderList = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item sm={12} xs={12} md={8} lg={8}>
        <Stack
          direction="row"
          justifyContent="start
            "
          alignItems="center"
        >
          <div className={classes.itemImg}>
            <img
              src="../images/biscuit.jpg"
              style={{
                width: "100px",
                height: "100px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "10px",
              }}
              alt=""
            />
          </div>
          <div className="itemDesc">
            <h5 className="titlename">Choco Biscuit</h5>
            <p>Sold by: Just Shopper</p>
            <p>&#8377;413.00</p>
          </div>
        </Stack>
      </Grid>

      <Grid className="trackbtn" sm={12} xs={12} md={4} lg={4}>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <div className="btn_group">
            {/* <ReturnIcon /> */}
            {/* <button className="buy_again">Return or replace items</button> */}

            <button className="gift_btn">Write product review </button>

            <button className="gift_btn">Buy it again</button>
          </div>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default OrderList;
