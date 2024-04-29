import React, { useEffect, useMemo, useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import classes from "../ProductDetails/ProductCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  addItem,
  addItemQty,
  changeColor,
  removeItemQty,
  selectCartItems,
} from "../../store/cartSlice";
import { formatAmount } from "../../utils";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useUpdateFavouritesMutation } from "../../api/user";
import {
  selectFavourite,
  selectUserId,
  updateFavourites,
} from "../../store/userSlice";
import { errorNotification } from "../../utils/notifications";
import { useNavigate } from "react-router-dom";
// import DoneIcon from "@mui/icons-material/Done";

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
      width: "100%",
      marginRight: "0px",
      marginBottom: "10px",
      "&:hover": { marginRight: "0px" },
    },
    "@media only screen and (min-width: 768px) and (max-width: 1023px)": {
      fontSize: "14px",
    },
  };
  const favIcon = {
    width: "40px",
    height: "40px",
    "& path": {
      fill: "#dc3237",
    },
    "@media only screen and (min-width: 320px) and (max-width: 600px)": {
      width: "30px",
      height: "30px",
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
      width: "100%",
      marginRight: "0px",
      marginBottom: "10px",
      "&:hover": { marginRight: "0px" },
    },
    "@media only screen and (min-width: 768px) and (max-width: 1023px)": {
      fontSize: "14px",
    },
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector(selectCartItems);
  const favourites = useSelector(selectFavourite);
  const userId = useSelector(selectUserId);
  const [updateFavouritesDB, {}] = useUpdateFavouritesMutation();
  const [color, setColor] = useState("");

  useEffect(() => {
    const index = cartItems.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      setColor(cartItems[index].color);
    } else {
      if (product?.color_based_quantity) {
        !color && setColor(product?.color_based_quantity[0]?.color_name);
      }
    }
  }, [cartItems, color, product?.color_based_quantity, product.id]);

  const noOfItems = useMemo(() => {
    const item = cartItems.find((item) => item.id === product.id);
    return item ? item.cart_quantity : 0;
  }, [cartItems, product.id]);

  const isFavourite = useMemo(() => {
    return favourites.findIndex((fav) => fav.id === product.id) !== -1;
  }, [favourites, product.id]);

  const handleAddCartItem = () => {
    dispatch(addItem({ ...product, color }));
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

  const handleUpdateFavourites = async (type) => {
    const newFav = {
      id: product.id,
      name: product.name,
    };

    let updatedFavList = [];
    if (type === "add") {
      updatedFavList = [...favourites, newFav];
    } else {
      updatedFavList = favourites.filter((fav) => fav.id !== product.id);
    }

    const result = await updateFavouritesDB({
      docId: userId,
      dataObject: {
        favourites: updatedFavList,
      },
    });

    if (result.data) {
      dispatch(updateFavourites(updatedFavList));
    } else {
      errorNotification(`Network error: ${result.error.message}`);
    }
  };

  const handleColorChange = (colorItem) => {
    setColor(colorItem.color_name);
    dispatch(changeColor({ cartItem: product, color: colorItem.color_name }));
  };

  const handleBuyNow = () => {
    handleAddCartItem();
    navigate(`/cart`);
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
            {isFavourite ? (
              <FavoriteIcon
                sx={favIcon}
                onClick={() => handleUpdateFavourites("remove")}
              />
            ) : (
              <FavoriteBorderIcon
                sx={favIcon}
                onClick={() => handleUpdateFavourites("add")}
              />
            )}
            <img
              src="../images/Share.png"
              alt={`Share ${product.name}`}
              className={classes.yellowshare}
              onClick={handleShare}
            />
          </Box>
        </Stack>
        <Stack
          direction={{ sm: "column", md: "row" }}
          justifyContent="start"
          alignItems="center"
          className={classes.overallbtnmobile}
        >
          {noOfItems <= 0 ? (
            <Button sx={addtocart} onClick={handleAddCartItem}>
              Add to Cart
            </Button>
          ) : (
            <>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                  "@media only screen and (min-width: 320px) and (max-width: 600px)":
                    {
                      border: "1px solid #dc3237",
                      mb: 2,
                      borderRadius: "5px",
                      width: "100%",
                    },
                }}
              >
                <Button
                  size="small"
                  className="cart"
                  onClick={handleRemoveItemQty}
                >
                  <RemoveIcon sx={{ color: "#dc3237" }} />
                </Button>
                {noOfItems}
                <Button
                  size="small"
                  className="cart"
                  onClick={handleAddItemQty}
                >
                  <AddIcon sx={{ color: "#dc3237" }} />
                </Button>
              </Stack>
            </>
          )}

          <Button sx={buy} onClick={handleBuyNow}>
            Buy Now
          </Button>
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
                {product?.color_based_quantity?.map((item) => (
                  <span
                    key={item._id + item.color_name}
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      backgroundColor: item.color_name,
                      cursor: "pointer",
                      marginRight: "10px",
                      border:
                        color === item.color_name ? "3px solid black" : "none",
                    }}
                    onClick={() => handleColorChange(item)}
                  ></span>
                ))}
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
          direction={{ sm: "column", md: "row" }}
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
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                  "@media only screen and (min-width: 320px) and (max-width: 600px)":
                    {
                      border: "1px solid #dc3237",
                      mb: 2,
                      borderRadius: "5px",
                      width: "100%",
                    },
                }}
              >
                <Button
                  size="small"
                  className="cart"
                  onClick={handleRemoveItemQty}
                >
                  <RemoveIcon sx={{ color: "#dc3237" }} />
                </Button>
                {noOfItems}
                <Button
                  size="small"
                  className="cart"
                  onClick={handleAddItemQty}
                >
                  <AddIcon sx={{ color: "#dc3237" }} />
                </Button>
              </Stack>
            </>
          )}

          <Button sx={buy} onClick={handleBuyNow}>
            Buy Now
          </Button>
        </Stack>
      </main>
    </>
  );
};

export default ProductCard;
