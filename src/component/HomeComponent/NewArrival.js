import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardNewArrival from "./CardNewArrival";
import "./NewArrivals.css";

const NewArrival = () => {
  //   const Item = styled(Paper)(({ theme }) => ({
  //     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //     ...theme.typography.body2,
  //     padding: theme.spacing(1),
  //     textAlign: "center",
  //     color: theme.palette.text.secondary,
  //   }));
  return (
    <>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        className="mt-4 container"
        direction="row"
      >
        <h3 className="arrivals">New Arrivals</h3>
        <a href="" className="view">
          View all{" "}
          <EastIcon
            sx={{
              ml: "5px",
              "@media only screen and (min-width: 320px) and (max-width: 600px) ":
                { fontSize: "16px" },
            }}
          />
        </a>
      </Stack>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        className="my-4 container"
        direction="row"
      >
        <Box sx={{ flexGrow: 1, position: "relative" }}>
          <Grid container spacing={2}>
            <Grid item sm={2} xs={6} md={2} lg={2}>
              <CardNewArrival
                image="../images/biscuit.jpg"
                cardtitle="Choco Biscuits"
                discountprice="499.00"
                currentprice="799.00"
                sale="sale"
              />
            </Grid>
            <Grid item sm={2} xs={6} md={2} lg={2}>
              <CardNewArrival
                image="../images/chocolate.jpg"
                cardtitle="Choco Bar"
                discountprice="499.00"
                currentprice="799.00"
                sale="sale"
              />
            </Grid>
            <Grid item sm={2} xs={6} md={2} lg={2}>
              <CardNewArrival
                image="../images/bread.jpg"
                cardtitle="Bread Notes"
                discountprice="499.00"
                currentprice="799.00"
                sale="sale"
              />
            </Grid>
            <Grid item sm={2} xs={6} md={2} lg={2}>
              <CardNewArrival
                image="../images/biscuit.jpg"
                cardtitle="Choco Biscuits"
                discountprice="499.00"
                currentprice="799.00"
                sale="sale"
              />
            </Grid>
            <Grid item sm={2} xs={6} md={2} lg={2}>
              <CardNewArrival
                image="../images/biscuit.jpg"
                cardtitle="Choco Biscuits"
                discountprice="499.00"
                currentprice="799.00"
                sale="sale"
              />
            </Grid>
            <Grid item sm={2} xs={6} md={2} lg={2}>
              <CardNewArrival
                image="../images/biscuit.jpg"
                cardtitle="Choco Biscuits"
                discountprice="499.00"
                currentprice="799.00"
                sale="sale"
              />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default NewArrival;
