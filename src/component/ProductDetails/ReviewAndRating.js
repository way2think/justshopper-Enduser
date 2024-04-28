import React, { Fragment, useEffect } from "react";
import { Box, Grid, Stack, Typography, Rating } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import classes from "../ProductDetails/ReviewAndRating.module.css";
import ReviewStars from "./ReviewStars";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import {
  useLazyGetReviewByUserAndProductQuery,
  useLazyGetReviewsQuery,
} from "../../api/review";
import { errorNotification } from "../../utils/notifications";

const ReviewAndRating = ({ product }) => {
  const user = useSelector(selectUser);

  const [
    getReviewByUserAndProduct,
    { data: resultQuery, isFetching },
    lastPromiseInfo,
  ] = useLazyGetReviewByUserAndProductQuery();

  const [getReviews, { data, isFetching: reviewFetching }, lastPromise] =
    useLazyGetReviewsQuery();

  useEffect(() => {
    const getReviewByUser = async () => {
      const condition1 = [
        {
          type: "where",
          field: "product_id",
          operator: "==",
          value: product?.id,
        },
        {
          type: "where",
          field: "user_details.user_id",
          operator: "==",
          value: user?.id,
        },
      ];

      const condition2 = [
        {
          type: "where",
          field: "product_id",
          operator: "==",
          value: product?.id,
        },
        {
          type: "where",
          field: "user_details.user_id",
          operator: "!=",
          value: user?.id,
        },
        {
          type: "where",
          field: "status",
          operator: "==",
          value: "approved", // pending, approved, rejected
        },
        { type: "orderBy", field: "created_timestamp", order: "desc" },
        { type: "limit", value: 5 },
      ];

      const promises = [
        getReviewByUserAndProduct(
          {
            conditions: condition1,
          },
          true
        ),
        getReviews(
          {
            conditions: condition2,
          },
          true
        ),
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

  const handleEditReview = (review) => {
    console.log("review: ", review);
  };

  return (
    <div className={`${classes.review}`} id="review">
      <Typography
        variant="h6"
        sx={{ textAlign: "left", fontWeight: 800, color: "#000" }}
      >
        Review & Rating
      </Typography>

      <div className={`${classes.noreview} no-reviews text-center`}>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          className="my-4 container"
          direction="row"
        >
          <Box sx={{ flexGrow: 1, position: "relative" }}>
            <Grid container spacing={2} sx={{ p: 0 }}>
              <Grid item sm={12} xs={12} md={5} lg={5} sx={{ p: 0 }}>
                <ReviewStars product={product} />
              </Grid>
            </Grid>
          </Box>
        </Stack>
        <hr />
      </div>
      <div className={`${classes.row} row`}>
        <div className={`${classes.col8and9} col-sm-8 col-md-12`}>
          <Box className={classes.overflow}>
            {resultQuery && data && [...resultQuery, ...data].length > 0 ? (
              [...resultQuery, ...data].map((reviewObj) => (
                <Fragment key={reviewObj.id}>
                  <div className={`${classes.rev} review`}>
                    <div className={`${classes.row} row`}>
                      <div className={`${classes.col9} col-sm-12`}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <h5 className={classes.subtitle}>
                            {reviewObj.user_details.name}{" "}
                            {user.id === reviewObj.user_details.user_id &&
                              `(Your Review)`}
                          </h5>
                          {user.id === reviewObj.user_details.user_id && (
                            <div className={classes.pointer}>
                              <EditIcon
                                sx={{ mr: 3 }}
                                onClick={() => handleEditReview(reviewObj)}
                              />
                            </div>
                          )}
                        </Stack>
                        <Rating
                          name="review-read-only"
                          value={reviewObj.rating}
                          readOnly
                        />
                        <p className={classes.customerdesc}>
                          {reviewObj.review}
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                </Fragment>
              ))
            ) : (
              <p>
                No reviews yet!!! Purchase and add a review to help other people
                like you.
              </p>
            )}
          </Box>
          {/* <nav
            className={`${classes.navi} text-center`}
            aria-label="Page navigation"
          >
            <ul className={`${classes.pagi} pagination`}>
              <li className={classes.lipagi}>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className={classes.lipagi}>
                <a href="#">1</a>
              </li>
              <li className={classes.lipagi}>
                <a href="#">2</a>
              </li>
              <li className={classes.lipagi}>
                <a href="#">3</a>
              </li>
              <li className={classes.lipagi}>
                <a href="#">4</a>
              </li>
              <li className={classes.lipagi}>
                <a href="#">5</a>
              </li>
              <li className={classes.lipagi}>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
    </div>
  );
};

export default ReviewAndRating;
