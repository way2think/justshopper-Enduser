import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProfileDetail from "../../component/Profile/ProfileDetail";
import ChangePassword from "../../component/Profile/ChangePassword";
import Path from "../../component/Path";
import ManageAddress from "../../component/Profile/ManageAddress";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import {
  CitySelect,
  GetCity,
  GetState,
  StateSelect,
} from "react-country-state-city";
import { errorNotification } from "../../utils/notifications";
import { selectUser, updateShippingAddress } from "../../store/userSlice";
import { useUpdateShippingAddressMutation } from "../../api/user";
import { useEffect, useState } from "react";
import { countryIndia } from "../../utils/constants";
import { isValidName, isValidPincode } from "../../utils/validator";
import { Autocomplete } from "@mui/material";

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
  borderRadius: "10px",
  "@media(max-width:768px)": {
    width: "345px",
  },
};

const add = {
  background: "#dc3237",
  color: "#fff",
  fontSize: "12px",
  padding: "8px 16px",
  height: "fit-content",
  float: "right",
  marginLeft: "auto",
  "&:hover": {
    background: "#dc3237",
    color: "#fff",
  },
  "@media only screen and (max-width: 767px)": {
    fontSize: "10px",
    padding: "12px 40px",
    // width: "10%",
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

  const user = useSelector(selectUser);

  const [updateShippingAddressDB, { isLoading, isSuccess, isError, error }] =
    useUpdateShippingAddressMutation();

  const [value, setValue] = useState(0);
  const [showModal, setShowModal] = useState({
    isOpen: false,
    isEdit: false,
  });

  const [addressDetails, setAddressDetails] = useState({
    id: "",
    name: "",
    line: "",
    city: "",
    state: "",
    country: "India",
    pincode: "",
    is_active: false,
  });

  const [country, setCountry] = useState({});
  const [state, setState] = useState({});
  const [city, setCity] = useState({});
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);

  let defaultValue1;

  useEffect(() => {
    if (addressDetails.country && addressDetails.state && addressDetails.city) {
      // GetCountries().then((result) => {
      setCountry(countryIndia);
      console.log("country: ", countryIndia);
      GetState(countryIndia.id).then((resultState) => {
        console.log("state: ", resultState);
        setStateData(resultState);
        const stateObj = resultState.find(
          (state) => state.name === addressDetails.state
        );
        setState(stateObj);
        GetCity(countryIndia.id, stateObj.id).then((resultCity) => {
          const cityObj = resultCity.find(
            (state) => state.name === addressDetails.city
          );
          setCity(cityObj);
        });
      });

      // });
    }
  }, [addressDetails]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setAddressDetails({
      id: "",
      name: "",
      line: "",
      city: "",
      state: "",
      country: "India",
      pincode: "",
      is_active: false,
    });
  };

  const onChangeHandler = (e) => {
    setAddressDetails((prevState) => {
      const { name, value } = e.target;
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const onChangeDropdown = async (type, object) => {
    console.log("object", object);
    if (type === "country") {
      setCountry(object);
    } else if (type === "state") {
      const name = object.target.innerHTML;
      const stateObj = stateData.filter((resultState) => {
        return resultState.name === name;
      });
      setState(stateObj[0]);
      const result = await GetCity(countryIndia.id, stateObj[0]?.id);
      setCityData(result);
      setCity(result[0]);
    } else if (type === "city") {
      const cityObj = cityData.filter((resultState) => {
        return resultState.name === object.target.innerHTML;
      });
      setCity(cityObj);
    }

    setAddressDetails((prevState) => ({
      ...prevState,
      [type]: object.target.innerHTML,
    }));
  };

  const handleUpdateShippingAddress = async (type) => {
    let updatedShippingAddresses = [...user.shipping_addresses];
    const { city, pincode, name, line, state } = addressDetails;
    console.log(city, pincode, name, line, state);

    if (
      isValidName(name) &&
      isValidPincode(pincode) &&
      city &&
      line !== "" &&
      state
    ) {
      if (type === "add") {
        updatedShippingAddresses = [
          ...updatedShippingAddresses,
          {
            ...addressDetails,
            id: new Date().getTime(),
            is_active: user.shipping_addresses.length === 0 ? true : false,
          },
        ];
      } else if (type === "edit") {
        const findIndex = updatedShippingAddresses.findIndex(
          (address) => address.id === addressDetails.id
        );
        updatedShippingAddresses[findIndex] = addressDetails;
      }

      const result = await updateShippingAddressDB({
        docId: user.id,
        dataObject: {
          shipping_addresses: updatedShippingAddresses,
        },
      });

      if (result.data) {
        // udpate the result in local state
        dispatch(updateShippingAddress(updatedShippingAddresses));
        setShowModal(false);
      } else {
        errorNotification(result.error.message);
      }

      handleClose();
    } else {
      errorNotification("Invalid Data");
    }
  };

  const onCloseHandler = () => {
    setShowModal({
      isOpen: false,
      isEdit: false,
    });
    setAddressDetails({
      id: "",
      name: "",
      line: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      is_active: false,
    });
    setCountry(null);
    setState(null);
    setCity(null);
  };

  const getStateData = (name) => {
    const stateObj = state.filter((resultState) => {
      return resultState.name === name;
    });
    GetCity(countryIndia.id, stateObj[0]?.id).then((resultCity) => {
      setCity(resultCity);
    });
  };
  // defaultValue1 = {
  //   id: state.id,
  //   name: state.name,
  //   state_code: state.state_code,
  // };
  // defaultValue1 = { id: 4026, name: "Karnataka", state_code: "KA" };
  return (
    <>
      {showModal.isOpen && (
        <Modal
          open={showModal.isOpen}
          onClose={onCloseHandler}
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
              {showModal.isEdit ? "Edit Address" : "Add New Address"}
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
                    onChange={onChangeHandler}
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
                    name="line"
                    value={addressDetails.line}
                    onChange={onChangeHandler}
                    sx={{ mb: 2, width: "100%" }}
                  />
                </Grid>

                <Grid md={6} xs={12} mb={2}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Country"
                    multiline
                    rows={1}
                    value="India"
                    sx={{ width: "100%" }}
                    disabled={true}
                  />
                  {/* {country ? (
                    <CountrySelect
                      defaultValue={country}
                      value={country?.id}
                      onChange={(e) => onChangeDropdown("country", e)}
                      placeHolder="Select Country"
                    />
                  ) : (
                    <CountrySelect
                      value={country?.id}
                      onChange={(e) => onChangeDropdown("country", e)}
                      placeHolder="Select Country"
                    />
                  )} */}
                </Grid>

                {/* <Grid md={6} xs={12}>
                  {state ? (
                    <StateSelect
                      defaultValue={state}
                      countryid={countryIndia.id}
                      value={state?.id}
                      onChange={(e) => onChangeDropdown("state", e)}
                      placeHolder="Select State"
                    />
                  ) : (
                    <StateSelect
                      countryid={countryIndia?.id}
                      value={state?.id}
                      onChange={(e) => onChangeDropdown("state", e)}
                      placeHolder="Select State"
                    />
                  )}
                </Grid> */}
                {console.log("state", stateData, state, defaultValue1)}
                <Grid md={6} xs={12}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={stateData}
                    value={state}
                    getOptionLabel={(option) => `${option.name}`}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="State"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                    onChange={(e) => onChangeDropdown("state", e)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        // handleSignup(e);
                      }
                    }}
                  />
                </Grid>
                <Grid md={6} xs={12} mt={2}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={cityData}
                    value={city}
                    // sx={{ width: 300 }}
                    getOptionLabel={(option) => `${option.name}`}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="City"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                    onChange={(e) => onChangeDropdown("city", e)}
                    // onChange={(e) => {
                    //   setSignUpDetails((prevState) => {
                    //     return {
                    //       ...prevState,
                    //       address: {
                    //         ...prevState.address,
                    //         city: e.target.innerHTML,
                    //       },
                    //     };
                    //   });
                    // }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        // handleSignup(e);
                      }
                    }}
                  />
                </Grid>

                {/* <Grid md={6} xs={12} mt={2}>
                  {city ? (
                    <CitySelect
                      defaultValue={city}
                      countryid={countryIndia?.id}
                      stateid={state?.id}
                      value={city?.id}
                      onChange={(e) => onChangeDropdown("city", e)}
                      placeHolder="Select City"
                    />
                  ) : (
                    <CitySelect
                      countryid={countryIndia?.id}
                      stateid={state?.id}
                      value={city?.id}
                      onChange={(e) => onChangeDropdown("city", e)}
                      placeHolder="Select City"
                    />
                  )}
                </Grid> */}

                <Grid md={6} xs={12} mt={2}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Pincode"
                    name="pincode"
                    value={addressDetails.pincode}
                    onChange={onChangeHandler}
                    sx={{ width: "100%", height: "50px" }}
                  />
                </Grid>
                <Grid xs={12} mt={3} textAlign="end">
                  <Button onClick={onCloseHandler} sx={cancel}>
                    Cancel
                  </Button>
                  <Button
                    onClick={() =>
                      handleUpdateShippingAddress(
                        showModal.isEdit ? "edit" : "add"
                      )
                    }
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
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            allowScrollButtonsMobile
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
            {/* {value === 2 && (
              <Button
                variant="contained"
                onClick={() =>
                  setShowModal({
                    isOpen: true,
                    data: null,
                  })
                }
                sx={add}
              >
                Add Address
              </Button>
            )} */}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <ProfileDetail />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ChangePassword />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          {/* {value === 2 && (
            <Button
              variant="contained"
              onClick={() =>
                setShowModal({
                  isOpen: true,
                  data: null,
                })
              }
              sx={add}
            >
              Add Address
            </Button>
          )} */}
          <ManageAddress
            openAddressModal={({ isOpen, isEdit, data }) => {
              // console.log(isOpen, isEdit, data);
              setShowModal({ isOpen, isEdit });
              setAddressDetails((prevState) => data);
            }}
            value={value}
            setShowModal={setShowModal}
            add={add}
          />
        </CustomTabPanel>
      </Box>
    </>
  );
}
