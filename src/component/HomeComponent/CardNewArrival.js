import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import StarRateIcon from "@mui/icons-material/StarRate";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./CardNewArrival.css";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  addItemQty,
  removeItemQty,
  selectCartItems,
} from "../../store/cartSlice";
import { useEffect, useMemo, useState } from "react";
import ImageCarousel from "../../Reusable/ImageCarosuel";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  selectFavourite,
  selectUserId,
  updateFavourites,
} from "../../store/userSlice";
import { useUpdateFavouritesMutation } from "../../api/user";
import { errorNotification } from "../../utils/notifications";
import ColorPicker from "../../Reusable/ColorPicker";
import Color from "../../Reusable/ColorPicker";

export default function CardNewArrival({ product }) {
  const cart = {
    background: "#dc3237",
    color: "#fff",
    fontSize: "14px",
    padding: "5px 10px",
    fontFamily: "Poppins",
    "&:hover": {
      background: "#dc3237",
      color: "#fff",
      fontSize: "14px",
      fontFamily: "Poppins",
      padding: "5px 10px",
    },

    "@media only screen and (min-width: 320px) and (max-width: 600px)": {
      fontSize: "10px",
      padding: "5px",
    },
  };

  const { name, discount_price, selling_price, images, is_multi_color } =
    product;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector(selectCartItems);
  const favourites = useSelector(selectFavourite);
  const userId = useSelector(selectUserId);
  const [updateFavouritesDB, {}] = useUpdateFavouritesMutation();

  const noOfItems = useMemo(() => {
    const item = cartItems.find((item) => item.id === product.id);
    return item ? item.cart_quantity : 0;
  }, [cartItems, product.id]);

  const isFavourite = useMemo(() => {
    return favourites.findIndex((fav) => fav.id === product.id) !== -1;
  }, [favourites, product.id]);

  const handleAddCartItem = () => {
    is_multi_color
      ? dispatch(
          addItem({
            ...product,
            color: product.color_based_quantity[0].color_name,
          })
        )
      : dispatch(addItem(product));
  };

  const handleAddItemQty = () => {
    dispatch(addItemQty(product));
  };

  const handleRemoveItemQty = () => {
    dispatch(removeItemQty(product));
  };

  const handleNavigateToProductDetail = () => {
    navigate(`/product/${product.id}`, { state: product });
  };

  const handleUpdateFavourites = async (type) => {
    if (userId) {
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
    } else {
      errorNotification(`Please login to add favourites`);
    }
  };

  return (
    <Card
      sx={{
        position: "relative",
        maxWidth: 300,
        boxShadow: "none",
        py: 2,
        margin: "auto",
        height: "inherit",
        "@media only screen and (min-width: 320px) and (max-width: 600px)": {
          maxWidth: 150,
        },
        cursor: "pointer",
      }}
    >
      <div onClick={handleNavigateToProductDetail}>
        <img
          src={images[0].url || "../images/dummy-image.jpg"}
          alt={name}
          className="cardimage"
        />
      </div>
      <div
        className="favImage"
        onClick={() => handleUpdateFavourites(isFavourite ? "remove" : "add")}
      >
        {isFavourite ? (
          <FavoriteIcon sx={{ cursor: "pointer" }} />
        ) : (
          <FavoriteBorderIcon sx={{ cursor: "pointer" }} />
        )}
      </div>

      <CardContent
        onClick={handleNavigateToProductDetail}
        sx={{
          p: "5px 8px",
          marginTop: "6px",
          "@media only screen and (min-width: 320px) and (max-width: 600px)": {
            display: "flex",
            justifyContent: "Start",
            alignItems: "Start",
            flexDirection: "column",
            p: "5px 8px",
            marginTop: "6px",
          },
          "@media only screen and (min-width: 768px) and (max-width: 1023px)": {
            display: "flex",
            justifyContent: "Start",
            alignItems: "Start",
            flexDirection: "column",
            p: "5px 8px",
            marginTop: "6px",
          },
          "@media only screen and (min-width: 1024px) and (max-width: 1535px)":
            {
              display: "flex",
              justifyContent: "Start",
              alignItems: "Start",
              flexDirection: "column",
              p: "5px 8px",
              marginTop: "6px",
            },
          "@media only screen and (min-width: 1536px) and (max-width: 2560px)":
            {
              display: "flex",
              justifyContent: "Start",
              alignItems: "Start",
              flexDirection: "column",
              p: "5px 8px",
              marginTop: "6px",
            },
        }}
      >
        <p className="cardtitle titlename">{name}</p>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <p className="cardamount">
            <CurrencyRupeeIcon fontSize="18px" />
            {discount_price}
          </p>
          <Color />
        </Stack>

        <p className="cardamountstrickout">
          <CurrencyRupeeIcon fontSize="16px" /> {selling_price}
        </p>
      </CardContent>
    </Card>
  );
}
