import React, { memo, useEffect, useMemo, useState } from "react";
import classes from "./ReviewStars.module.css";
import { Box, Grid, Stack } from "@mui/material";

const ReviewStars = ({ product }) => {
  const [reviews, setReviews] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  });
  // const [reviews, setReviews] = useState({
  // 5: 100,
  // 4: 80,
  // 3: 300,
  // 2: 10,
  // 1: 25,
  // });

  useEffect(() => {
    product && product?.rating && setReviews(product.rating);
  }, [product]);

  const nFormat = (number) => {
    if (number >= 1000 && number < 1000000) {
      return `${(number / 1000).toFixed(1)}k`;
    } else if (number >= 1000000 && number < 1000000000) {
      return `${(number / 1000000).toFixed(1)}m`;
    } else if (number >= 1000000000) {
      return `${(number / 1000000000).toFixed(1)}md`;
    } else if (isNaN(number)) {
      return `0.0`;
    } else {
      return number;
    }
  };

  const totalReviews = useMemo(() => {
    return Object.values(reviews).reduce((a, b) => a + b);
  }, [reviews]);

  const finalRating = useMemo(() => {
    let final = Object.entries(reviews)
      .map((val) => val[0] * val[1])
      .reduce((a, b) => a + b);
    return nFormat(parseFloat(final / totalReviews).toFixed(1));
  }, [reviews, totalReviews]);

  return (
    <>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        className="my-4 container p-0"
        direction="row"
      >
        <Box sx={{ flexGrow: 1, position: "relative" }}>
          <Grid container spacing={2}>
            <Grid
              item
              sm={3}
              xs={12}
              md={3}
              lg={3}
              className={classes.firsthalf}
              sx={{ p: 0 }}
            >
              <div className={classes.global}>
                <span className={classes.globalvalue}>{finalRating}</span>
                <div className={classes.ratingicons}>
                  <span className={classes.one}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </span>
                  <span
                    className={classes.two}
                    style={{
                      background: `linear-gradient(to right, #dc3237 ${
                        (finalRating / 5) * 100
                      }%, transparent 0%)`,
                    }}
                  >
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <span className={classes.totalreviews}>{totalReviews}</span>
              </div>
            </Grid>
            <Grid item sm={9} xs={12} md={9} lg={9} sx={{ p: 0 }}>
              <div className={classes.chart}>
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div className={classes.ratebox}>
                    <span className={classes.value}>{rating}</span>
                    <div className={classes.progressbar}>
                      <span
                        className={classes.progress}
                        style={{
                          width: `${Math.round(
                            (reviews[rating] / totalReviews) * 100
                          )}%`,
                        }}
                      ></span>
                    </div>
                    <span className={classes.count}>
                      {nFormat(reviews[rating])}
                    </span>
                  </div>
                ))}
              </div>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default memo(ReviewStars);
