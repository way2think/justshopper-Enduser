import React from "react";
import "./MyOrders.css";

import { Grid, Stack } from "@mui/material";
import styled from "@emotion/styled";
import { formatAmount } from "../../utils";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";
import ReviewModal from "../../Reusable/ReviewModal";
import { successNotification } from "../../utils/notifications";

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

const OrderItem = ({ item }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleBuyItAgain = () => {
    // console.log("handleBuyItAgain: ", item);
    dispatch(addItem(item));
    successNotification(`${item.name} added to cart`);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid container spacing={2}>
      <Grid item sm={12} xs={12} md={8} lg={8}>
        <Stack direction="row" justifyContent="start" alignItems="center">
          <div className={classes.itemImg}>
            <img
              src={item.images[0] || "../images/biscuit.jpg"}
              style={{
                width: "100px",
                height: "100px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "10px",
              }}
              alt={item.name}
            />
          </div>
          <div className="itemDesc">
            <h5 className="titlename">
              {item.name}{" "}
              {item.color &&
                `(${item.color[0].toUpperCase() + item.color.substring(1)})`}
            </h5>
            <p>Sold by: Just Shopper</p>
            <p>Quantity: {item.quantity}</p>
            <p>Item price: &#8377;{formatAmount(item.discount_price)}</p>
            <p>Total item price: &#8377;{formatAmount(item.total_price)}</p>
          </div>
        </Stack>
      </Grid>

      <Grid className="trackbtn" sm={12} xs={12} md={4} lg={4}>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <div className="btn_group">
            {/* <ReturnIcon /> */}
            {/* <button className="buy_again">Return or replace items</button> */}

            {/* <button className="gift_btn">Write product review </button> */}
            <ReviewModal
              open={open}
              handleOpen={handleOpen}
              handleClose={handleClose}
            />

            <button
              className="gift_btn"
              type="button"
              onClick={handleBuyItAgain}
            >
              Buy it again
            </button>
          </div>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default OrderItem;
