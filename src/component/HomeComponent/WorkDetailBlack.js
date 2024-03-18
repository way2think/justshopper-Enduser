import { Box, Divider, Grid, Stack } from "@mui/material";
import React from "react";
import "./WorkDetailBlack.css";

const WorkDetailBlack = () => {
  return (
    <>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        className="mainworkdetail1 py-4 container-fluid"
        direction="row"
        bgcolor="#000"
      >
        <Box
          sx={{ flexGrow: 1, position: "relative" }}
          className="workdetail1  "
        >
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <img
                src="../images/Card Security (2).png"
                className="iconwork1 mb-2"
                alt=""
              />
              <h5 className="titlework1">Secure Payment</h5>
            </Grid>
            <Grid item xs={6} md={3}>
              <img
                src="../images/Online Support (1).png"
                className="iconwork1 mb-2"
                alt=""
              />
              <h5 className="titlework1">24/7 Support</h5>
            </Grid>
            <Grid item xs={6} md={3}>
              <img
                src="../images/Shipped (1).png"
                className="iconwork1 mb-2"
                alt=""
              />
              <h5 className="titlework1">
                Delivering quality
                <br /> Products
              </h5>
            </Grid>
            <Grid item xs={6} md={3}>
              <img
                src="../images/Human Resources (1).png"
                className="iconwork1 mb-2"
                alt=""
              />
              <h5 className="titlework1">
                Best Customer <br /> Services
              </h5>
            </Grid>
          </Grid>
        </Box>
      </Stack>
      <Divider color="#AAAAAA" />
    </>
  );
};

export default WorkDetailBlack;
