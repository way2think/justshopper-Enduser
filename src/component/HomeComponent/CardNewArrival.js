import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "./CardNewArrival.css";

export default function CardNewArrival(props) {
  const cart = {
    background: "#dc3237",
    color: "#fff",
    fontSize: "16px",
    padding: "5px 10px",
    fontFamily: "amazonbold",
    "&:hover": {
      background: "#dc3237",
      color: "#fff",
      fontSize: "16px",
      fontFamily: "amazonbold",
      padding: "5px 10px",
    },
  };
  return (
    <Card sx={{ maxWidth: 345, boxShadow: "none", py: 2 }}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        image={props.image}
        sx={{ borderRadius: "5px" }}
        className="cardimage"
      /> */}
      {/* <span className="Sale">{props.sale}</span> */}
      <img src={props.image} alt="" className="cardimage" />

      <CardContent sx={{ px: 0 }}>
        <p className="cardtitle">{props.cardtitle}</p>
        <p className="cardamount">
          <CurrencyRupeeIcon fontSize="18px" />
          {props.discountprice}
        </p>
        <p className="cardamountstrickout">
          <CurrencyRupeeIcon fontSize="16px" /> {props.currentprice}
        </p>
      </CardContent>
      <CardActions sx={{ p: 0 }}>
        <Button size="small" sx={cart} className="cart">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
