import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProfileDetail, { temp } from "../../component/Profile/ProfileDetail";
import ChangePassword from "../../component/Profile/ChangePassword";
import Path from "../../component/Path";
import { ManageAccounts } from "@mui/icons-material";
import ManageAddress from "../../component/Profile/ManageAddress";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import { errorNotification } from "../../utils/notifications";
import {
  selectUser,
  selectSavedAddress,
  updateSelectedAddress,
  updateShippingAddress,
} from "../../store/userSlice";
import { useAddNewShippingAddressMutation } from "../../api/user";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: "0 2px 7px #000",
  p: 4,
};

const add = {
  background: "#dc3237",
  color: "#fff",
  fontSize: "12px",
  padding: "8px 16px",
  height: "fit-content",
  marginLeft: "auto",
  "&:hover": {
    background: "#dc3237",
    color: "#fff",
  },
  "@media only screen and (max-width: 600px)": {
    fontSize: "10px",
  },
};

const cancel = {
  border: "1px solid #dc3237",
  color: "#dc3237",
  fontSize: "12px",
  padding: "8px 16px",
  height: "fit-content",
  marginLeft: "auto",
  "&:hover": {
    border: "1px solid #dc3237",
    color: "#dc3237",
  },
  "@media only screen and (max-width: 600px)": {
    fontSize: "10px",
  },
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Profile() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const user = useSelector(selectUser);

  const [addNewShippingAddress, { isLoading, isSuccess, isError, error }] =
    useAddNewShippingAddressMutation();

  const [countryid, setCountryid] = React.useState(0);
  const [stateid, setstateid] = React.useState(0);
  const [cityid, setcityid] = React.useState(0);
  const [countryName, setCountryName] = React.useState("");
  const [stateName, setstateName] = React.useState("");
  const [cityName, setCityName] = React.useState("");
  const [addressDetails, setAddressDetails] = React.useState({
    name: "",
    line: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const handleAddNewShippingAddress = async () => {
    const updatedShippingAddresses = [
      ...user.shipping_addresses,
      {
        id: new Date().getTime(),
        ...addressDetails,
        country_id: countryid,
        state_id: stateid,
        city_id: cityid,
        is_active: user.shipping_addresses.length === 0 ? true : false,
      },
    ];

    const result = await addNewShippingAddress({
      docId: user.id,
      dataObject: {
        shipping_addresses: updatedShippingAddresses,
      },
    });

    console.log("result: ", result);
    if (result.data) {
      // udpate the result in local state
      dispatch(updateShippingAddress(updatedShippingAddresses));
      setShowModal(false);
    } else {
      errorNotification(result.error.message);
    }
  };

  return (
    <>
      {showModal && (
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              textAlign="start"
              variant="h6"
              component="h2"
              sx={{ textAlign: "left !important" }}
            >
              Add New Address
            </Typography>
            <Box pt={2}>
              <Grid container style={{ width: "100%" }}>
                <Grid xs={12}>
                  <TextField
                    fullWidth
                    id="name"
                    label="Name"
                    variant="outlined"
                    name="name"
                    type="text"
                    className="name"
                    value={addressDetails.name}
                    onChange={(e) => {
                      setAddressDetails((prevState) => {
                        return {
                          ...prevState,
                          name: e.target.value,
                        };
                      });
                    }}
                    sx={{
                      mb: 2,
                      // width: "90%",
                      // "@media (max-width: 768px)": {
                      //   width: "100%",
                      // },
                    }}
                  />
                </Grid>
                <Grid xs={12}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Address Line"
                    placeholder="Door / House No, Street Name, Area"
                    name="addressLine"
                    value={addressDetails.line}
                    onChange={(e) => {
                      setAddressDetails((prevState) => {
                        return {
                          ...prevState,
                          line: e.target.value,
                        };
                      });
                    }}
                    sx={{ mb: 2, width: "100%" }}
                  />
                </Grid>

                <Grid md={6} xs={6} pr={2}>
                  <CountrySelect
                    value={countryid}
                    onChange={(e) => {
                      setCountryid(e.id);
                      setCountryName(e.name);
                      setAddressDetails((prevState) => {
                        return {
                          ...prevState,
                          country: e.name,
                        };
                      });
                    }}
                    placeHolder="Select Country"
                  />
                </Grid>

                <Grid md={6} xs={6}>
                  <StateSelect
                    countryid={countryid}
                    value={stateid}
                    onChange={(e) => {
                      setstateid(e.id);
                      setstateName(e.name);
                      setAddressDetails((prevState) => {
                        return {
                          ...prevState,
                          state: e.name,
                        };
                      });
                    }}
                    placeHolder="Select State"
                  />
                </Grid>

                <Grid md={6} xs={6} pr={2} mt={2}>
                  <CitySelect
                    countryid={countryid}
                    stateid={stateid}
                    value={cityid}
                    onChange={(e) => {
                      setcityid(e.id);
                      setCityName(e.name);
                      setAddressDetails((prevState) => {
                        return {
                          ...prevState,
                          city: e.name,
                        };
                      });
                    }}
                    placeHolder="Select City"
                  />
                </Grid>

                <Grid md={6} xs={6} mt={2}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Pincode"
                    name="pincode"
                    value={addressDetails.pincode}
                    onChange={(e) => {
                      setAddressDetails((prevState) => {
                        return {
                          ...prevState,
                          pincode: e.target.value,
                        };
                      });
                    }}
                    sx={{ width: "100%", height: "50px" }}
                  />
                </Grid>
                <Grid xs={12} mt={3} textAlign="end">
                  <Button onClick={() => setShowModal(false)} sx={cancel}>
                    Cancel
                  </Button>
                  <Button
                    onClick={handleAddNewShippingAddress}
                    sx={add}
                    className="ml-2"
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Modal>
      )}
      <Path link="/" pathhome="Home" pathdetails="Profile" />
      <Box sx={{ width: "100%", marginTop: "10px" }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            //   textColor="secondary"
            //   indicatorColor="secondary"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#dc3237",
                color: "#000",
              },
            }}
            className="container"
          >
            <Tab
              label="My Profile"
              {...a11yProps(0)}
              //    sx={{ color: "#fff" ,backgroundColor:"#dc3237","mui-selected":{
              //     color: "#000",backgroundColor:"#dc3237"
              //    } }}
            />
            <Tab
              label="Change Password"
              {...a11yProps(1)}
              // sx={{ color: "#dc3237" }}
            />
            <Tab
              label="Manage Address"
              {...a11yProps(1)}
              // sx={{ color: "#dc3237" }}
            />
            {value === 2 && (
              <Button
                variant="contained"
                onClick={() => setShowModal(true)}
                sx={add}
              >
                Add Address
              </Button>
            )}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <ProfileDetail />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ChangePassword />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <ManageAddress />
          {/* <ChangePassword /> */}
        </CustomTabPanel>
      </Box>
    </>
  );
}
