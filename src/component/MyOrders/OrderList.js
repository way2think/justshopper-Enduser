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
    <Card>
      <Box>
        <Grid container spacing={2}>
          <Grid item sm={4} xs={12} md={7} lg={7}>
            <Stack direction="row" justifyContent="center" alignItems="center">
              <div className={classes.itemImg}>
                <img
                  src="../images/biscuit.jpg"
                  style={{
                    width: "150px",
                    height: "150px",
                    marginRight: "20px",
                  }}
                  alt=""
                />
              </div>

              <div className="itemDesc">
                <h5 className="titlename">Choco Biscuit</h5>
                <p>
                  Sold by: <span>Just Shopper</span>
                </p>
                <p>&#8377;413.00</p>
                <Button variant="contained" color="primary">
                  Buy it again
                </Button>
              </div>
            </Stack>
          </Grid>

          <Grid className="trackbtn" sm={4} xs={12} md={5} lg={5}>
            <div className="btn_group">
              {/* <ReturnIcon /> */}
              <button className="buy_again">Return or replace items</button>

              <button className="gift_btn">Write product review </button>

              <button className="gift_btn">Leave seller feedback</button>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default OrderList;
