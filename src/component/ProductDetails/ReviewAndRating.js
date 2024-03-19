import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import classes from "../ProductDetails/ReviewAndRating.module.css";

const ReviewAndRating = () => {
  return (
    <div className={`${classes.review} `}>
      <Typography
        variant="h6"
        sx={{ textAlign: "left", fontWeight: 800, color: "#000" }}
      >
        Product Details
      </Typography>

      <div className={`${classes.noreview} no-reviews text-center`}>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          className="my-4 container"
          direction="row"
        >
          <Box sx={{ flexGrow: 1, position: "relative" }}>
            <Grid container spacing={2}>
              <Grid item sm={12} xs={6} md={3} lg={3}></Grid>
              <Grid item sm={12} xs={6} md={9} lg={9}>
                <p>There are currently no reviews for this product.</p>
                <button className={`${classes.reviewandrating} btn `}>
                  Write a Review
                </button>
              </Grid>
            </Grid>
          </Box>
        </Stack>
        <hr />
      </div>
      <div className={`${classes.row} row`}>
        {/* <div className={`${classes.colmun} col-sm-4 col-md-3`}>
          <div className={`${classes.visibsle} visible-xs-block`}>
            <div className={`${classes.form} form-group`}></div>
            <div className={`${classes.form}form-group`}>
              <select className={`${classes.formcontrol} form-control`}>
                <option value="0">show all (1346)</option>
                <option value="5">★★★★★ (1247)</option>
                <option value="4">★★★★☆ (47)</option>
                <option value="3">★★★☆☆ (27)</option>
                <option value="2">★★☆☆☆ (24)</option>
                <option value="1">★☆☆☆☆ (1)</option>
              </select>
            </div>
          </div>
          <div className={`${classes.hidden} hidden-xs`}>
            <div className={`${classes.form} form-group`}>
              <h5></h5>
              <Typography
                variant="h6"
                sx={{ textAlign: "left", fontWeight: 800, color: "#000" }}
              >
                Filter Reviews
              </Typography>
              <ul className={`${classes.listgroup} list-group`}>
                <li className={`${classes.startgroup} list-group-item`}>
                  <a href="#" className={classes.stars}>
                    ★★★★★ <span className={classes.count}>(1247)</span>
                  </a>
                </li>
                <li className={`${classes.startgroup} list-group-item`}>
                  <a href="#" className={classes.stars}>
                    ★★★★☆ <span className={classes.count}>(47)</span>
                  </a>
                </li>
                <li className={`${classes.startgroup} list-group-item`}>
                  <a href="#" className={classes.stars}>
                    ★★★☆☆ <span className={classes.count}>(27)</span>
                  </a>
                </li>
                <li className={`${classes.startgroup} list-group-item`}>
                  <a href="#" className={classes.stars}>
                    ★★☆☆☆ <span className={classes.count}>(24)</span>
                  </a>
                </li>
                <li className={`${classes.startgroup} list-group-item`}>
                  <a href="#" className={classes.stars}>
                    ★☆☆☆☆ <span className={classes.count}>(1)</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${classes.group} form-group`}>
              <a
                className={`${classes.reviewandrating} btn  btn-block btn-lg`}
                href="#"
              >
                Write a Review
              </a>
            </div>
          </div>
        </div> */}
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
          <div className={`${classes.rev} review`}>
            <div className={`${classes.row} row`}>
              <div className={`${classes.col9} col-sm-9`}>
                <h4 className={classes.stars}>★★★☆☆</h4>

                <h4>Regione mentitum legendos ne usu</h4>
                <h5>Zoë Washburne</h5>
                <p>
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
                <h4>Regione mentitum legendos ne usu</h4>
                <h5>Zoë Washburne</h5>
                <p>
                  Regione mentitum legendos ne usu. Nam omnesque detraxit
                  contentiones cu.
                </p>
              </div>
            </div>
          </div>

          <nav
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
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ReviewAndRating;
