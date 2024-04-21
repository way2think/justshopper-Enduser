import React, { useEffect, useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import classes from "../ProductDetails/ProductCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  addItem,
  addItemQty,
  removeItemQty,
  selectCartItems,
} from "../../store/cartSlice";
import { formatAmount } from "../../utils";

const ProductCard = ({ product }) => {
  const buy = {
    backgroundColor: "#dc3237",
    color: "#fff",
    fontSize: "18px",
    fontFamily: "amazonbold",
    marginRight: "30px",
    "&:hover": {
      backgroundColor: "#dc3237",
      color: "#fff",

      fontFamily: "amazonbold",
      marginRight: "30px",
    },
    "@media only screen and (min-width: 320px) and (max-width: 600px)": {
      fontSize: "14px",
    },
    "@media only screen and (min-width: 768px) and (max-width: 1023px)": {
      fontSize: "14px",
    },
  };
  const addtocart = {
    border: "1px solid #dc3237",
    color: "#dc3237",
    fontSize: "18px",
    fontFamily: "amazonbold",
    marginRight: "30px",
    "&:hover": {
      border: "1px solid #dc3237",
      color: "#dc3237",
      fontFamily: "amazonbold",
      marginRight: "30px",
    },
    "@media only screen and (min-width: 320px) and (max-width: 600px)": {
      fontSize: "14px",
    },
    "@media only screen and (min-width: 768px) and (max-width: 1023px)": {
      fontSize: "14px",
    },
  };

  const dispatch = useDispatch();
  const { cartItems } = useSelector(selectCartItems);
  const [noOfItems, setNoOfItems] = useState(0);

  useEffect(() => {
    const item = cartItems.find((item) => item.id === product.id);
    if (item) {
      setNoOfItems(item.cart_quantity);
    } else {
      setNoOfItems(0);
    }
  }, [cartItems, product.id]);

  const handleAddCartItem = () => {
    dispatch(addItem(product));
  };

  const handleAddItemQty = () => {
    dispatch(addItemQty(product));
  };

  const handleRemoveItemQty = () => {
    dispatch(removeItemQty(product));
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `Just Shopper - ${product.name}`,
        text: product.description,
        url: `https://${
          window.location.hostname === "localhost"
            ? "localhost:3000"
            : window.location.hostname
        }/product/${product.id}`,
      });
      console.log("Successfully shared");
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <>
      <main>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <h3 className={classes.productdetailsHeading}>{product.name}</h3>
          <Box className={classes.icons}>
            <img
              src="../images/Heartred.png"
              alt=""
              className={classes.redheart}
            />
            <img
              src="../images/Share.png"
              alt={`Share ${product.name}`}
              className={classes.yellowshare}
              onClick={handleShare}
            />
          </Box>
        </Stack>
        <Stack direction="row" justifyContent="start" alignItems="center">
          <Box className={classes.mainSubtitle}>
            <h3 className={classes.Subtitle}>{product.category}</h3>
            <p className={classes.descripation}>{product.description}</p>
          </Box>
        </Stack>
        {product.is_multi_color && (
          <Stack direction="row" justifyContent="start" alignItems="center">
            <Box className={classes.maincolors}>
              <h3 className={classes.colors}>Colors : </h3>
              <Box className={classes.colorsCircle}>
                <span className={classes.color1}></span>
                <span className={classes.color2}></span>
                <span className={classes.color3}></span>
                <span className={classes.color4}></span>
                <span className={classes.color5}></span>
              </Box>
            </Box>
          </Stack>
        )}

        <Stack direction="row" justifyContent="start" alignItems="center">
          <Box className={classes.price}>
            <h3 className={classes.price1}>
              <CurrencyRupeeIcon className={classes.rupee1} />
              {formatAmount(product.discount_price)}
            </h3>
            <h3 className={classes.price2}>
              <CurrencyRupeeIcon className={classes.rupee2} />
              {formatAmount(product.selling_price)}
            </h3>
          </Box>
        </Stack>
        <Stack
          direction="row"
          justifyContent="start"
          alignItems="center"
          className={classes.overallbtn}
        >
          {noOfItems <= 0 ? (
            <Button sx={addtocart} onClick={handleAddCartItem}>
              Add to Cart
            </Button>
          ) : (
            <>
              <Button
                size="small"
                className="cart"
                onClick={handleRemoveItemQty}
              >
                <RemoveIcon sx={{ color: "#dc3237" }} />
              </Button>
              {noOfItems}
              <Button size="small" className="cart" onClick={handleAddItemQty}>
                <AddIcon sx={{ color: "#dc3237" }} />
              </Button>
            </>
          )}

          {/* <Button sx={buy}>Buy Now</Button> */}
        </Stack>
      </main>
    </>
  );
};

export default ProductCard;
