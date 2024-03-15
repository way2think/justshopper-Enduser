import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import "./ContactDetails.css";

const ContactDetails = () => {
  return (
    <>
      <div className="mainpadding">
        <Stack className="mainOuter container ">
          <Grid container spacing={2} margin="auto">
            <Grid sm={12} xs={12} md={6} lg={6}>
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
                  <img
                    src="../images/Location.png"
                    alt=""
                    className="Location"
                  />
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
              <Box className="location1">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  px={4}
                >
                  <a href="">
                    <img
                      src="../images/Facebook F (2).png"
                      alt=""
                      className="sociallink"
                    />
                  </a>
                  <a href="">
                    <img
                      src="../images/YouTube (2).png"
                      alt=""
                      className="sociallink"
                    />
                  </a>
                  <a href="">
                    <img
                      src="../images/Instagram (2).png"
                      alt=""
                      className="sociallink"
                    />
                  </a>
                  <a href="">
                    <img
                      src="../images/TwitterX (2).png"
                      alt=""
                      className="sociallink"
                    />
                  </a>
                  {/* <img src="../images/Phone.png" alt="" className="Location" /> */}
                </Stack>
              </Box>
            </Grid>
            <Grid sm={12} xs={12} md={6} lg={6}>
              <Box className="locationheading">
                <h3 className="Enquiry">Enquiry Form</h3>
              </Box>
              <form className="enquiryform">
                {/* <label for="fname">First Name</label> */}
                <input
                  className="input"
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                />

                {/* <label for="lname">Last Name</label> */}
                <input
                  className="input"
                  type="mail"
                  id="mail"
                  name="mail"
                  placeholder="Email.."
                />
                <input
                  className="input"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone.."
                />
                <textarea
                  className="textinput"
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                  placeholder="Desc"
                ></textarea>
                <input className="submit" type="submit" value="Submit" />
              </form>
            </Grid>
          </Grid>
        </Stack>
      </div>
    </>
  );
};

export default ContactDetails;
