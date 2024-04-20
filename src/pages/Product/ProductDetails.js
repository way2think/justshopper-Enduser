import React, { useEffect, useState } from "react";
import Path from "../../component/Path";
import WorkDetailBlack from "../../component/HomeComponent/WorkDetailBlack";
import LatestCarousel from "../../component/ShopCategory/LatestCarousel";
import Product from "../../component/ProductDetails/Product";
import ProductInfo from "../../component/ProductDetails/ProductInfo";
import { Divider } from "@mui/material";
import ReviewAndRating from "../../component/ProductDetails/ReviewAndRating";
import { useLocation, useParams } from "react-router-dom";
import { useLazyGetProductByIdQuery } from "../../api/product";

const ProductDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  // console.log("id: ", id, state);
  const [product, setProduct] = useState(null);

  const [getProductById, result, lastPromiseInfo] =
    useLazyGetProductByIdQuery();

  useEffect(() => {
    const checkProduct = async () => {
      if (state) {
        setProduct(state);
      } else {
        const result = await getProductById(id);
        console.log("res: ", result.data);
        setProduct(result.data);
      }
    };

    checkProduct();
  }, [getProductById, id, state]);

  return (
    <>
      <Path link="/" pathhome="Home" pathdetails="Product Details" />
      <Product />
      <Divider
        sx={{
          borderBottomColor: "#000",
          margin: "auto",
          maxWidth: "95%",
          borderBottomWidth: "2px",
        }}
      />
      <ProductInfo />
      <Divider
        sx={{
          borderBottomColor: "#000",
          margin: "auto",
          maxWidth: "95%",
          borderBottomWidth: "2px",
        }}
      />
      <ReviewAndRating />
      {/* <Divider
        sx={{
          borderBottomColor: "#000",
          margin: "auto",
          maxWidth: "95%",
          borderBottomWidth: "2px",
        }}
      /> */}
      <LatestCarousel />
      <WorkDetailBlack />
    </>
  );
};

export default ProductDetails;
