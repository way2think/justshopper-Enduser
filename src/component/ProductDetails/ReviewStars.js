import React, { useState } from "react";
import classes from "./ReviewStars.module.css";
import { Box, Grid, Stack } from "@mui/material";

const ReviewStars = () => {
  const [reviews, setReviews] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  });

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

  const updateValues = () => {
    const rateBoxes = document.querySelectorAll(".rate-box");
    rateBoxes.forEach((box) => {
      const valueBox = box.querySelector(".value");
      const countBox = box.querySelector(".count");
      const progress = box.querySelector(".progress");
      countBox.textContent = nFormat(reviews[valueBox.textContent]);

      const progressValue = Math.round(
        (reviews[valueBox.textContent] / getTotal(reviews)) * 100
      );
      progress.style.width = `${progressValue}%`;
    });
    document.querySelector(".total-reviews").textContent = getTotal(reviews);
    finalRating();
  };

  const getTotal = (reviews) => {
    return Object.values(reviews).reduce((a, b) => a + b);
  };

  const handleClick = (event) => {
    const target = event.target.textContent;
    setReviews((prevReviews) => ({
      ...prevReviews,
      [target]: prevReviews[target] + 1,
    }));
    updateValues();
  };

  const finalRating = () => {
    let final = Object.entries(reviews)
      .map((val) => val[0] * val[1])
      .reduce((a, b) => a + b);
    let ratingValue = nFormat(parseFloat(final / getTotal(reviews)).toFixed(1));
    document.querySelector(".global-value").textContent = ratingValue;
    const two = document.querySelector(".two");
    two.style.background = `linear-gradient(to right, #66bb6a ${
      (ratingValue / 5) * 100
    }%, transparent 0%)`;
  };
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
              sm={6}
              xs={12}
              md={3}
              lg={3}
              className={classes.firsthalf}
              sx={{ p: 0 }}
            >
              <div className={classes.global}>
                <span className={classes.globalvalue}>0.0</span>
                <div className={classes.ratingicons}>
                  <span className={classes.one}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </span>
                  <span className={classes.two}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <span className={classes.totalreviews}>0</span>
              </div>
            </Grid>
            <Grid item sm={6} xs={12} md={9} lg={9} sx={{ p: 0 }}>
              <div className={classes.chart}>
                <div className={classes.ratebox}>
                  <span className={classes.value}>5</span>
                  <div className={classes.progressbar}>
                    <span className={classes.progress}></span>
                  </div>
                  <span className={classes.count}>0</span>
                </div>
                <div className={classes.ratebox}>
                  <span className={classes.value}>4</span>
                  <div className={classes.progressbar}>
                    <span className={classes.progress}></span>
                  </div>
                  <span className={classes.count}>0</span>
                </div>
                <div className={classes.ratebox}>
                  <span className={classes.value}>3</span>
                  <div className={classes.progressbar}>
                    <span className={classes.progress}></span>
                  </div>
                  <span className={classes.count}>0</span>
                </div>
                <div className={classes.ratebox}>
                  <span className={classes.value}>2</span>
                  <div className={classes.progressbar}>
                    <span className={classes.progress}></span>
                  </div>
                  <span className={classes.count}>0</span>
                </div>
                <div className={classes.ratebox}>
                  <span className={classes.value}>1</span>
                  <div className={classes.progressbar}>
                    <span className={classes.progress}></span>
                  </div>
                  <span className={classes.count}>0</span>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default ReviewStars;
