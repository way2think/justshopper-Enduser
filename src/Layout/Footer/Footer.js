import React from "react";
import { Grid, Stack } from "@mui/material";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <MDBFooter
      bgColor="black"
      className="text-center text-lg-start text-muted p-4"
    >
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-4 companylogo">
              {/* <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6> */}
              <img src="../images/JS logo png.png" alt="" className="jslogo" />
              <Stack
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexDirection="row"
              >
                <a
                  href="https://www.facebook.com/profile.php?id=61557129773638"
                  className=" socialicon"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* <MDBIcon fab icon="facebook-f" /> */}
                  <img
                    src="../images/Facebook F.png"
                    alt=""
                    className="sociallink"
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCbaR43u7NOb76zzRopMGuBQ"
                  target="_blank"
                  className=" socialicon"
                  rel="noreferrer"
                >
                  {/* <MDBIcon fab icon="twitter" /> */}
                  <img
                    src="../images/YouTube.png"
                    alt=""
                    className="sociallink"
                  />
                </a>

                <a
                  href="https://www.instagram.com/justshopperofficial?igsh=MXB0eDBiaHNnbjRqYQ%3D%3D&utm_source=qr"
                  className=" socialicon"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* <MDBIcon fab icon="instagram" /> */}
                  <img
                    src="../images/Instagram.png"
                    alt=""
                    className="sociallink"
                  />
                </a>
              </Stack>
              {/* <p className="companydesc">
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p> */}
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 producthead">
                Products
              </h6>
              <p className="linkcontent">
                <Link to="/" className="text-reset">
                  Home
                </Link>
              </p>
              <p className="linkcontent">
                <Link to="/shop-by-category" className="text-reset">
                  Shop by Category
                </Link>
              </p>
              <p className="linkcontent">
                <Link to="/shop-by-theme" className="text-reset">
                  Shop by Theme
                </Link>
              </p>
              <p className="linkcontent">
                <Link to="/contact-us" className="text-reset">
                  Contact Us
                </Link>
              </p>
              <p className="linkcontent">
                <Link to="/about-us" className="text-reset">
                  About us
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 producthead">
                Useful links
              </h6>
              <p className="linkcontent">
                <Link to="/cancellation-refund-policy" className="text-reset ">
                  Cancellation Refund Policy
                </Link>
              </p>
              <p className="linkcontent">
                <Link to="/shipping-delivery-policy" className="text-reset">
                  Shipping & delivery Policy
                </Link>
              </p>
              <p className="linkcontent">
                <Link to="terms-and-condition" className="text-reset">
                  Terms & Condition
                </Link>
              </p>
              <p className="linkcontent">
                <a href="privacy-policy" className="text-reset">
                  Privacy Policy
                </a>
              </p>
              {/* <p className="linkcontent">
                <a href="#!" className="text-reset"></a>
              </p> */}
            </MDBCol>

            <MDBCol md="4" lg="4" xl="4" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 producthead">
                Contact
              </h6>
              <p className="linkcontent">
                <MDBIcon icon="home" className="me-3" />
                Chennai
              </p>
              <p className="linkcontent">
                <MDBIcon icon="envelope" className="me-3" />
                <a
                  className="linkcontent"
                  href="mailto:justshopperofficial@gmail.com"
                >
                  {" "}
                  justshopperofficial@gmail.com
                </a>
              </p>
              <p className="linkcontent">
                <MDBIcon icon="phone" className="me-3" />{" "}
                <a href="tel:+917760888801" className="linkcontent">
                  +91 77608 88801
                </a>
                {", "}
                <a href="tel:+919500231901" className="linkcontent">
                  +91 95002 31901
                </a>
              </p>
              {/* <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "@media only screen and (max-width: 600px)": {
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
          },
        }}
      >
        <Grid item lg={6}>
          <section className="copy">
            <div className="">© 2024 Copyright JustShopper</div>
          </section>
        </Grid>
        <Grid item lg={6}>
          <div className="text-center   copy">
            <br />
            Designed and developed by <br />
            <a
              href="https://way2think.com/"
              target="_blank"
              style={{ color: "#dc3237" }}
            >
              {" "}
              {/* <img
              src="../images/way2thinklogo.png"
              alt=""
              className="way2thinklogo"
            />{" "}
            <br /> */}
              Way2Think Technologies
            </a>
          </div>
        </Grid>
      </Grid>
    </MDBFooter>
  );
}
