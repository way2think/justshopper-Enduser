import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import classes from "../ProductDetails/ReviewAndRating.module.css";
import ReviewStars from "./ReviewStars";

const ReviewAndRating = () => {
  return (
    <div className={`${classes.review} `}>
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
                <ReviewStars />
              </Grid>
              {/* <Grid item sm={12} xs={12} md={7} lg={7} sx={{ p: 0 }}>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "left", fontWeight: 800, color: "#000" }}
                >
                  Write a Review
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="start"
                  alignItems="start"
                  flexDirection="column"
                >
                  <textarea
                    className={classes.reviewtextarea}
                    id="textarea"
                    name="textarea"
                    rows="4"
                    cols="30"
                    placeholder="Write a Review"
                  ></textarea>
                  <button className={`${classes.reviewandrating} btn`}>
                    Post a review
                  </button>
                </Stack>
              </Grid> */}
            </Grid>
          </Box>
        </Stack>
        <hr />
      </div>
      <div className={`${classes.row} row`}>
        <div className={`${classes.col8and9} col-sm-8 col-md-12`}>
          {/* <form name="form" method="post" action="#">
            <div className={`${classes.row} row`}>
              <div
                className={`${classes.push} col-sm-6 col-sm-push-6 col-md-4 col-md-push-8`}
              >
                <select className={`${classes.control} form-control`}>
                  <option value="new">sort newest to oldest</option>
                  <option value="old">sort oldest to newest</option>
                  <option value="good">sort best to worst</option>
                  <option value="bad">sort worst to best</option>
                </select>
              </div>
              <div
                className={`${classes.groupcol} col-sm-6 col-sm-pull-6 col-md-8 col-md-pull-4`}
              >
                <h5>Showing 1230 - 1235 of 1346</h5>
              </div>
            </div>
          </form> */}
          <Box className={classes.overflow}>
            <div className={`${classes.rev} review`}>
              <div className={`${classes.row} row`}>
                <div className={`${classes.col9} col-sm-12`}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <h4 className={classes.stars}>★★★☆☆</h4>
                    <EditIcon sx={{ mr: 3 }} />
                  </Stack>
                  <h4 className={classes.title}>
                    Regione mentitum legendos ne usu
                  </h4>
                  <h5 className={classes.subtitle}>Zoë Washburne</h5>
                  <p className={classes.customerdesc}>
                    Regione mentitum legendos ne usu. Nam omnesque detraxit
                    contentiones cu.
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className={`${classes.rev} review`}>
              <div className={`${classes.row} row`}>
                <div className={`${classes.col9} col-sm-9`}>
                  <h4 className={classes.stars}>★★★☆☆</h4>

                  <h4 className={classes.title}>
                    Regione mentitum legendos ne usu
                  </h4>
                  <h5 className={classes.subtitle}>Zoë Washburne</h5>
                  <p className={classes.customerdesc}>
                    Regione mentitum legendos ne usu. Nam omnesque detraxit
                    contentiones cu.
                  </p>
                </div>
              </div>
            </div>
            <hr />
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
