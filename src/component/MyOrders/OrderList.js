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
        <Grid container spacing={2} >
          <Grid item xs={12} md={3} sm={4} lg={2}>
            <div className={classes.itemImg}>
              <img
               src="../images/biscuit.jpg"  style={{width:"150px",height:"150px"}}               
                alt=""
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4} sm={4} lg={5} style={{ display: "flex" }}>
            <div className="itemDesc">
              <Typography variant="h6">Choco Biscuit</Typography>
              <Typography variant="body1">
                Sold by: <span>Just Shopper</span>
              </Typography>
              <Typography variant="body1">&#8377;413.00</Typography>
              <Button variant="contained" color="primary">
                Buy it again
              </Button>
            </div>
          </Grid>
          <Grid
            container
            spacing={1}
            direction="column"
            xs={12}
            md={5}
            sm={4}
            lg={5}
            mt={2}
            // ml={2}
          >
          <div className="btn_group">
            <Grid item>
              {/* <ReturnIcon /> */}
              <button className="buy_again">Return or replace items</button>
            </Grid>
            <Grid item>
              <button className="gift_btn">Write product review </button>
            </Grid>
            <Grid item>
              <button className="gift_btn">Leave seller feedback</button>
            </Grid>
            </div>
          </Grid>
          
        </Grid>
      </Box>
    </Card>
  );
};

export default OrderList;
