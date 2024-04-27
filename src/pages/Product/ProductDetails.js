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
  const [product, setProduct] = useState(null);

  const [getProductById, result, lastPromiseInfo] =
    useLazyGetProductByIdQuery();

  // tried lot, to get in query, state may be null sometime and it can't be handled in api, so created a lazy query and called it.
  useEffect(() => {
    const checkProduct = async () => {
      if (state) {
        setProduct(state);
      } else {
        const result = await getProductById(id);
        setProduct(result.data);
      }
    };

    checkProduct();
  }, [getProductById, id, state]);

  return (
    <>
      <Path link="/" pathhome="Home" pathdetails="Product Details" />
      {product && <Product product={product} />}
      <Divider
        sx={{
          borderBottomColor: "#000",
          margin: "auto",
          maxWidth: "95%",
          borderBottomWidth: "2px",
        }}
      />
      {product && <ProductInfo product={product} />}
      <Divider
        sx={{
          borderBottomColor: "#000",
          margin: "auto",
          maxWidth: "95%",
          borderBottomWidth: "2px",
        }}
      />
      <ReviewAndRating product={product} />
      {/* <Divider
        sx={{
          borderBottomColor: "#000",
          margin: "auto",
          maxWidth: "95%",
          borderBottomWidth: "2px",
        }}
      /> */}
      {product && product.related_products.length > 0 && (
        <LatestCarousel relatedProducts={product.related_products} />
      )}
      <WorkDetailBlack />
    </>
  );
};

export default ProductDetails;
