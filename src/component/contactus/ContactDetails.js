import React, { useState } from "react";
import { Box, Grid, Stack } from "@mui/material";
import "./ContactDetails.css";
import {
  useSendEnquiryMutation,
  useSendNotificationMutation,
} from "../../api/api";
import {
  errorNotification,
  successNotification,
} from "../../utils/notifications";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../store/appSlice";
import { scrollToTop } from "../../utils";
import {
  isValidEmail,
  isValidName,
  isValidPhoneNumber,
} from "../../utils/validator";

const ContactDetails = () => {
  const dispatch = useDispatch();
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const [sendEnquiry, { isLoading, isSuccess, isError, error }] =
    useSendEnquiryMutation();

  const [sendNotification, {}] = useSendNotificationMutation();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true));

    if (
      isValidName(contactInfo.name) &&
      isValidEmail(contactInfo.email) &&
      isValidPhoneNumber(contactInfo.phone) &&
      contactInfo.description !== ""
    ) {
      const result = await sendEnquiry(contactInfo);
      if (result.data) {
        // console.log("result: ", result.data);
        const { id } = result.data;
        await sendNotification({
          id,
          body: `New Enquiry added from website`,
          title: `New Enquiry - ${id}`,
          type: "enquiry",
        });
        dispatch(setIsLoading(false));
        successNotification(
          "Enquiry Successfully sent, we will reach to you asap!!!"
        );
        setContactInfo({
          name: "",
          email: "",
          phone: "",
          description: "",
        });
        scrollToTop();
      } else {
        dispatch(setIsLoading(false));
        errorNotification("Enquiry failed, try after sometime!!!");
      }
    } else {
      dispatch(setIsLoading(false));
      errorNotification("Invalid details!!!");
    }
  };

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
                <a
                  href="https://www.facebook.com/profile.php?id=61557129773638"
                  target="_blank"
                >
                  <img
                    src="../images/Facebook F.png"
                    alt=""
                    className="sociallink"
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCbaR43u7NOb76zzRopMGuBQ"
                  target="_blank"
                >
                  <img
                    src="../images/YouTube.png"
                    alt=""
                    className="sociallink"
                  />
                </a>
                <a
                  href="https://www.instagram.com/justshopperofficial?igsh=MXB0eDBiaHNnbjRqYQ%3D%3D&utm_source=qr"
                  target="_blank"
                >
                  <img
                    src="../images/Instagram.png"
                    alt=""
                    className="sociallink"
                  />
                </a>
              </Stack>
            </Stack>

            <Grid container spacing={2} sx={{ mb: 3, p: 3 }}>
              <Grid sm={12} xs={12} md={12} lg={12}>
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
                    <p className="m-0 chennai">
                      No. 9, old 2a, 3rd cross street, Vijayanagar, Velachery,
                      chennai - 600042
                    </p>
                  </Stack>
                </Box>
              </Grid>
              <Grid sm={12} xs={12} md={6} lg={6}>
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
              <Grid sm={12} xs={12} md={6} lg={6}>
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
                    <p className="m-0 chennai">+91 95002 31901</p>
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
            <form className="enquiryform" onSubmit={submitHandler}>
              {/* <label for="fname">First Name</label> */}
              <input
                className="input"
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={contactInfo.name}
                onChange={onChangeHandler}
              />
              {/* <label for="lname">Last Name</label> */}
              <input
                className="input"
                type="mail"
                id="email"
                name="email"
                placeholder="Email"
                value={contactInfo.email}
                onChange={onChangeHandler}
              />
              <input
                className="input"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={contactInfo.phone}
                onChange={onChangeHandler}
              />
              <textarea
                className="textinput"
                id="description"
                name="description"
                rows="4"
                cols="50"
                placeholder="Description of your enquiry"
                value={contactInfo.description}
                onChange={onChangeHandler}
              ></textarea>
              <input
                className="submit"
                type="submit"
                value="Submit"
                onClick={submitHandler}
              />
            </form>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default ContactDetails;
