import React from "react";
import "./ContactDetails.css";
import { Box, Grid, Stack } from "@mui/material";

const ContactDetails = () => {
  return (
    <>
      <Stack className="mainOuter container ">
        <Grid container spacing={2}>
          <Grid xs={12} md={6} lg={6}>
            <Box className="locationheading">
              <h3 className="contactdetailHeading">Contact Details</h3>
            </Box>
            <Box className="location1">
              <Stack
                direction="row"
                justifyContent="start"
                alignItems="center"
                className="rowlocaton"
              >
                <img src="../images/Location.png" alt="" className="Location" />
                <p className="m-0 chennai">Chennai</p>
              </Stack>
            </Box>
            <Box className="location1">
              <Stack
                direction="row"
                justifyContent="start"
                alignItems="center"
                bgcolor="#FFF"
                p={2}
                borderRadius={2}
                className="rowlocaton"
              >
                <img src="../images/Email.png" alt="" className="Location" />
                <p className="m-0 chennai">justshopperofficial@gmail.com</p>
              </Stack>
            </Box>
            <Box className="location1">
              <Stack
                direction="row"
                justifyContent="start"
                alignItems="center"
                bgcolor="#FFF"
                p={2}
                borderRadius={2}
                className="rowlocaton"
              >
                <img src="../images/Phone.png" alt="" className="Location" />
                <p className="m-0 chennai">+91 77608 88801</p>
              </Stack>
            </Box>
          </Grid>
          <Grid xs={12} md={6} lg={6}>
            <Box className="locationheading">
              <h3 className="Enquiry">Enquiry Form</h3>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default ContactDetails;
