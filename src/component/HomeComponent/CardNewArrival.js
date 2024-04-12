import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import StarRateIcon from "@mui/icons-material/StarRate";
import "./CardNewArrival.css";
import { Stack } from "@mui/material";

export default function CardNewArrival({ product }) {
  const cart = {
    background: "#dc3237",
    color: "#fff",
    fontSize: "14px",
    padding: "5px 10px",
    fontFamily: "amazonbold",
    "&:hover": {
      background: "#dc3237",
      color: "#fff",
      fontSize: "14px",
      fontFamily: "amazonbold",
      padding: "5px 10px",
    },

    "@media only screen and (min-device-width: 768px) and (max-device-width: 1023px)":
      {
        fontSize: "12px",
      },
  };

  const { name, discount_price, selling_price } = product;

  return (
    <Card sx={{ maxWidth: 345, boxShadow: "none", py: 2, margin: "auto" }}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        image={props.image}
        sx={{ borderRadius: "5px" }}
        className="cardimage"
      /> */}
      {/* <span className="Sale">{props.sale}</span> */}
      <img src={"../images/biscuit.jpg"} alt={name} className="cardimage" />

      <CardContent
        sx={{
          p: 0,
          "@media only screen and (min-width: 320px) and (max-width: 600px)": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          },
        }}
      >
        <p className="cardtitle">{name}</p>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="start"
        ></Stack>

        <p className="cardamount">
          <CurrencyRupeeIcon fontSize="18px" />
          {discount_price}
        </p>
        <p className="cardamountstrickout">
          <CurrencyRupeeIcon fontSize="16px" /> {selling_price}
        </p>
      </CardContent>
      <CardActions
        sx={{
          p: 0,
          "@media only screen and (min-width: 320px) and (max-width: 600px)": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Button size="small" sx={cart} className="cart">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
