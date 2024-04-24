import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import "./WorkDetail.css";

const WorkDetails = () => {
  return (
    <>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        className="mainworkdetail py-4 container-fluid"
        direction="row"
      >
        <Box
          sx={{ flexGrow: 1, position: "relative" }}
          className="workdetail"
        >
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <img
                src="../images/Card Security (1).png"
                className="iconwork mb-2"
                alt=""
              />
              <h5 className="titlework">Secure Payment</h5>
            </Grid>
            <Grid item xs={6} md={3}>
              <img
                src="../images/Online Support.png"
                className="iconwork mb-2"
                alt=""
              />
              <h5 className="titlework">24/7 Support</h5>
            </Grid>
            <Grid item xs={6} md={3}>
              <img src="../images/Shipped.png" className="iconwork mb-2" alt="" />
              <h5 className="titlework">
                Delivering quality
                <br /> Products
              </h5>
            </Grid>
            <Grid item xs={6} md={3}>
              <img
                src="../images/Human Resources.png"
                className="iconwork mb-2"
                alt=""
              />
              <h5 className="titlework">
                Best Customer <br /> Services
              </h5>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default WorkDetails;
