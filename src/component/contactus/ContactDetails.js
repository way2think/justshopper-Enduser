import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import "./ContactDetails.css";

const ContactDetails = () => {
  return (
    <>
      <Stack
        className="mainOuter container"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container spacing={2} margin="auto">
          <Grid sm={12} xs={12} md={12} lg={12}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              className="overallheading container"
            >
              <Box className="locationheading">
                <h3 className="contactdetailHeading">Contact Details</h3>
              </Box>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                className="socialicons"
              >
                <a href="">
                  <img
                    src="../images/Facebook F.png"
                    alt=""
                    className="sociallink"
                  />
                </a>
                <a href="">
                  <img
                    src="../images/YouTube.png"
                    alt=""
                    className="sociallink"
                  />
                </a>
                <a href="">
                  <img
                    src="../images/Instagram.png"
                    alt=""
                    className="sociallink"
                  />
                </a>
              </Stack>
            </Stack>

            <Grid container spacing={2} sx={{ mb: 3, p: 3 }}>
              <Grid sm={12} xs={12} md={4} lg={4}>
                <Box className="location1">
                  <Stack
                    direction="row"
                    justifyContent="start"
                    alignItems="center"
                    className="rowlocaton"
                    flexDirection="column"
                  >
                    <img
                      src="../images/Location.png"
                      alt=""
                      className="Location"
                    />
                    <p className="m-0 chennai">Chennai</p>
                  </Stack>
                </Box>
              </Grid>
              <Grid sm={12} xs={12} md={4} lg={4}>
                <Box className="location1">
                  <Stack
                    direction="row"
                    justifyContent="start"
                    alignItems="center"
                    bgcolor="#FFF"
                    flexDirection="column"
                    borderRadius={2}
                    className="rowlocaton"
                  >
                    <img
                      src="../images/Email.png"
                      alt=""
                      className="Location"
                    />
                    <p className="m-0 chennai">justshopperofficial@gmail.com</p>
                  </Stack>
                </Box>
              </Grid>
              <Grid sm={12} xs={12} md={4} lg={4}>
                <Box className="location1">
                  <Stack
                    direction="row"
                    justifyContent="start"
                    alignItems="center"
                    flexDirection="column"
                    bgcolor="#FFF"
                    borderRadius={2}
                    className="rowlocaton"
                  >
                    <img
                      src="../images/Phone.png"
                      alt=""
                      className="Location"
                    />
                    <p className="m-0 chennai">+91 77608 88801</p>
                  </Stack>
                </Box>
              </Grid>
              {/* <Grid sm={12} xs={12} md={3} lg={3}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      flexDirection="row"
                      bgcolor="#FFF"
                      borderRadius={2}
                      className="rowlocaton"
                    >
                      <a href="">
                        <img
                          src="../images/Facebook F.png"
                          alt=""
                          className="sociallink"
                        />
                      </a>
                      <a href="">
                        <img
                          src="../images/YouTube.png"
                          alt=""
                          className="sociallink"
                        />
                      </a>
                      <a href="">
                        <img
                          src="../images/Instagram.png"
                          alt=""
                          className="sociallink"
                        />
                      </a>
                    </Stack>
                  </Grid> */}
            </Grid>

            {/*  */}
          </Grid>
          <Grid sm={12} xs={12} md={12} lg={12}>
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
    </>
  );
};

export default ContactDetails;
