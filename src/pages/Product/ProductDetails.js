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
import ReviewModal from "../../Reusable/ReviewModal";
import {
  errorNotification,
  successNotification,
} from "../../utils/notifications";
import {
  useLazyGetReviewByUserAndProductQuery,
  useLazyGetReviewsQuery,
  useUpdateReviewMutation,
} from "../../api/review";
import { useRTKLocalUpdate } from "../../hooks/rtk-hooks";
import { review as reviewApi } from "../../api/review";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [product, setProduct] = useState(null);
  const [reviewModal, setReviewModal] = useState({
    isOpen: false,
    review: null,
  });

  const [handleLocalRTKUpdate] = useRTKLocalUpdate();

  const [getProductById, result, lastPromiseInfo] =
    useLazyGetProductByIdQuery();

  const [updateReview, {}] = useUpdateReviewMutation();

  const [
    getReviewByUserAndProduct,
    { data: resultQuery, isFetching },
    lastPromiseInfo1,
  ] = useLazyGetReviewByUserAndProductQuery();

  const [getReviews, { data, isFetching: reviewFetching }, lastPromise] =
    useLazyGetReviewsQuery();

  // console.log("resultQuery: ", resultQuery, isFetching);

  const user = useSelector(selectUser);

  useEffect(() => {
    const getReviewByUser = async () => {
      const promises = [
        getReviewByUserAndProduct(
          { productId: product.id, userId: user.id },
          true
        ),
        getReviews({ productId: product.id, userId: user.id }, true),
        // true is preferCacheValue
      ];

      try {
        await Promise.all(promises);
        // console.log("result: ", result);
      } catch (e) {
        console.log("err-reviewandrating: ", e);
        errorNotification("Network Error");
      }
    };

    product && user && getReviewByUser();
  }, [getReviewByUserAndProduct, getReviews, product, user]);

  // tried lot, to get in query, state may be null sometime and it can't be handled in api, so created a lazy query and called it.
  useEffect(() => {
    const checkProduct = async () => {
      if (state) {
        setProduct(state);
      } else {
        const result = await getProductById(id, true); // true is preferCacheValue
        setProduct(result.data);
      }
    };

    checkProduct();
  }, [getProductById, id, state]);

  const handleUpdateReview = async ({ rating, review }) => {
    console.log("handleUpdateReview: ", reviewModal.review, rating, review);
    // // same rating & review don't update
    if (
      reviewModal.review.rating === rating &&
      reviewModal.review.review === review
    ) {
      errorNotification(`No changes to update!!!`);
    } else {
      // update rating, review
      // if rating is different, then decrement the old, increment the new
      // update review in reviews collection
      const result = await updateReview({
        dataObject: {
          old: {
            ...reviewModal.review,
          },
          new: {
            rating,
            review,
          },
        },
      });
      // console.log("result: ", result.data);
      if (result.data) {
        successNotification(`Review Updated, Will be published asap!!!`);

        // handleLocalRTKUpdate(reviewApi, "getReviewByUserAndProduct", [
        //   // ...result.data,
        //   { ...reviewModal.review, review, rating },
        // ]);

        handleLocalRTKUpdate(
          reviewApi,
          "getReviewByUserAndProduct",
          {
            productId: reviewModal.review.product_id,
            userId: reviewModal.review.user_details.user_id,
          },
          [{ ...reviewModal.review, review, rating }]
        );

        setReviewModal({
          isOpen: false,
          review: null,
        });
      } else {
        errorNotification(`${result.error.message}`);
      }
    }
  };

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

      <ReviewAndRating
        product={product}
        setOpen={setReviewModal}
        resultQuery={resultQuery}
        data={data}
        user={user}
      />
      <ReviewModal
        title={`Edit Review for ${product?.name}`}
        open={reviewModal.isOpen}
        review={reviewModal.review}
        handleClose={() =>
          setReviewModal({
            isOpen: false,
            review: null,
          })
        }
        handleUpdateReview={handleUpdateReview}
      />
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
