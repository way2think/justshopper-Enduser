import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  selectUser,
  selectSavedAddress,
  updateSelectedAddress,
  updateShippingAddress,
} from "../store/userSlice";
import { Autocomplete, Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";

import { errorNotification } from "../utils/notifications";

import {
  CitySelect,
  CountrySelect,
  GetCity,
  GetState,
  StateSelect,
} from "react-country-state-city";
import { useUpdateShippingAddressMutation } from "../api/user";
import { isValidName, isValidPincode } from "../utils/validator";
import { countryIndia } from "../utils/constants";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 500,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  "@media (max-width: 768px)": {
    width: 350,
    maxHeight: "450px",
    overflowY: "scroll",
  },
};

const save = {
  background: "#dc3237",
  color: "#fff",
  fontSize: "16px",
  marginLeft: "8px",
  "&:hover": {
    background: "#dc3237",
    color: "#fff",
  },
  "@media only screen and (max-width: 600px)": {
    fontSize: "12px",
    marginTop: "14px !important",
  },
};
const cancel = {
  border: "1px solid #dc3237",
  color: "#dc3237",
  fontSize: "16px",
  "&:hover": {
    border: "1px solid #dc3237",
    color: "#dc3237",
  },
  "@media only screen and (max-width: 600px)": {
    fontSize: "12px",
  },
};

const addNewBtn = {
  width: "100%",
  background: "#dc3237",
  color: "#fff",
  fontsize: "18px",
  "&:hover": {
    background: "#fff",
    color: "#dc3237",
    fontsize: "18px",
    border: "1px solid #dc3237",
  },
};

export default function AddressModal({ open, setOpen }) {
  const dispatch = useDispatch();
  const [selectedAddress, setSelectedAddress] = useState({
    id: "",
    name: "",
    line: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });
  const [addNewAddress, setAddNewAddress] = useState(false);
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  const [countryName, setCountryName] = useState("");
  const [stateName, setstateName] = useState("");
  const [cityName, setCityName] = useState("");
  const [addressDetails, setAddressDetails] = useState({
    name: "",
    line: "",
    city: "",
    state: "",
    country: "India",
    pincode: "",
    is_active: false,
  });
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);

  const user = useSelector(selectUser);
  const address = useSelector(selectSavedAddress);

  const [addNewShippingAddress, { isLoading, isSuccess, isError, error }] =
    useUpdateShippingAddressMutation();

  useEffect(() => {
    setCountry(countryIndia);
    GetState(countryIndia.id).then((resultState) => {
      const stateObj = resultState;
      setState(stateObj);
      GetCity(countryIndia.id, stateObj.id).then((resultCity) => {
        const cityObj = resultCity;
        setCity(cityObj);
      });
    });
  }, []);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressDetails((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  function reset() {
    setAddressDetails({
      name: "",
      line: "",
      city: "",
      state: "",
      country: "India",
      pincode: "",
    });
    setAddNewAddress(false);
  }
  const getStateData = (name) => {
    const stateObj = state.filter((resultState) => {
      return resultState.name === name;
    });
    GetCity(countryIndia.id, stateObj[0]?.id).then((resultCity) => {
      setCity(resultCity);
    });
  };

  const handleAddNewShippingAddress = async () => {
    console.log("addressDeatils", addressDetails);
    if (
      isValidName(addressDetails.name) &&
      addressDetails.line !== "" &&
      addressDetails.country !== "" &&
      addressDetails.city !== "" &&
      addressDetails.state !== "" &&
      isValidPincode(addressDetails.pincode)
    ) {
      const updatedShippingAddresses = [
        ...user.shipping_addresses,
        {
          id: new Date().getTime(),
          ...addressDetails,
          is_active: user.shipping_addresses.length === 0 ? true : false,
        },
      ];

      const result = await addNewShippingAddress({
        docId: user.id,
        dataObject: {
          shipping_addresses: updatedShippingAddresses,
        },
      });

      // console.log("result: ", result);
      if (result.data) {
        // udpate the result in local state
        dispatch(updateShippingAddress(updatedShippingAddresses));
        reset();
      } else {
        errorNotification(result.error.message);
      }
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" component="h5">
            {addNewAddress ? "Add New Address" : "Saved Addresses"}
          </Typography>
          {addNewAddress ? (
            <>
              <Grid container mt={5}>
                <Grid xs={12} className="gridsignup">
                  <TextField
                    fullWidth
                    id="name"
                    label="Name"
                    autoComplete="new-password"
                    variant="outlined"
                    name="name"
                    type="text"
                    className="name"
                    value={addressDetails.name}
                    onChange={handleInputChange}
                    sx={{
                      mb: 2,
                      // width: "90%",
                      // "@media (max-width: 768px)": {
                      //   width: "100%",
                      // },
                    }}
                  />
                </Grid>
                {/* <Grid md={6} xs={12}>
                  <TextField
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    variant="outlined"
                    name="phonenumber"
                    type="tel"
                    value={addressDetails.phonenumber}
                    onChange={handleInputChange}
                    className="phone"
                    sx={{ mb: 2 }}
                  />
                </Grid> */}
              </Grid>
              <Grid container>
                <Grid xs={12}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Address Line"
                    autoComplete="new-password"
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
                  <TextField
                    id="outlined-multiline-static"
                    label="Country"
                    multiline
                    rows={1}
                    value="India"
                    sx={{ width: "100%" }}
                    disabled={true}
                  />
                  {/* <CountrySelect
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
                  /> */}
                </Grid>

                <Grid md={6} xs={6}>
                  {/* <StateSelect
                    countryid={countryIndia.id}
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
                  /> */}
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={state}
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
                    // onChange={(e) => {
                    //   getStateData(e.target.innerHTML);
                    //   setSignUpDetails((prevState) => {
                    //     return {
                    //       ...prevState,
                    //       address: {
                    //         ...prevState.address,
                    //         state: e.target.innerHTML,
                    //       },
                    //     };
                    //   });
                    // }}
                    onChange={(e) => {
                      getStateData(e.target.innerHTML);
                      setstateName(e.target.innerHTML);
                      setAddressDetails((prevState) => {
                        return {
                          ...prevState,
                          state: e.target.innerHTML,
                        };
                      });
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        // handleSignup(e);
                      }
                    }}
                  />
                </Grid>

                <Grid md={6} xs={6} pr={2} mt={2}>
                  {/* <CitySelect
                    countryid={countryIndia.id}
                    stateid={stateid}
                    onChange={(e) => {
                      setCityName(e.name);
                      setAddressDetails((prevState) => {
                        return {
                          ...prevState,
                          city: e.name,
                        };
                      });
                    }}
                    placeHolder="Select City"
                  /> */}
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={city}
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
                    onChange={(e) => {
                      setCityName(e.target.innerHTML);
                      setAddressDetails((prevState) => {
                        return {
                          ...prevState,
                          city: e.target.innerHTML,
                        };
                      });
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        // handleSignup(e);
                      }
                    }}
                  />
                </Grid>

                <Grid md={6} xs={6} mt={2}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Pincode"
                    multiline
                    rows={1}
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
                    sx={{ mb: 2, width: "100%" }}
                  />
                </Grid>
              </Grid>
              <Grid sx={{ justifyContent: "end" }} container>
                <Button
                  sx={cancel}
                  onClick={() => {
                    reset();
                  }}
                >
                  Cancel
                </Button>
                <Button sx={save} onClick={handleAddNewShippingAddress}>
                  Save
                </Button>
              </Grid>
            </>
          ) : (
            <>
              <div className="card my-2">
                <div
                  className={`p-2 ${
                    address?.id === user?.address?.id
                      ? "bg-primary text-white"
                      : ""
                  }`}
                  style={{
                    boxShadow: "0 2px 5px #7d7d7d",
                    borderRadius: "8px",
                  }}
                  onClick={() => {
                    dispatch(
                      updateSelectedAddress({
                        name: user.name,
                        ...user.address,
                      })
                    );
                    handleClose();
                  }}
                  role="button"
                >
                  <label
                    className="m-0 ms-2 me-4"
                    htmlFor="shipping"
                    role="button"
                  >
                    <span>{user.name + ", " + user.address.line}</span>
                    <div>{user.address.city + ", " + user.address.state}</div>
                    <div>
                      {user.address.country + " - " + user.address.pincode}{" "}
                      (Same as Billing Address)
                    </div>
                  </label>
                </div>
              </div>
              <div>
                <hr />
              </div>
              {user.shipping_addresses &&
                (user.shipping_addresses.length === 0 ? (
                  <div className="card my-2">
                    <Button
                      sx={addNewBtn}
                      onClick={() => setAddNewAddress(true)}
                    >
                      Add New Address
                    </Button>
                  </div>
                ) : (
                  <>
                    {user.shipping_addresses.map((add) => (
                      <div
                        className="card my-2"
                        key={add.id}
                        onClick={() => {
                          dispatch(updateSelectedAddress(add));
                          handleClose();
                        }}
                        role="button"
                      >
                        <div
                          className={`p-2 ${
                            address?.id === add?.id
                              ? "bg-primary text-white"
                              : ""
                          }`}
                          style={{
                            boxShadow: "0 2px 5px #7d7d7d",
                            borderRadius: "8px",
                          }}
                        >
                          <label
                            className="m-0 ms-2 me-4"
                            htmlFor="shipping"
                            role="button"
                          >
                            <span>{add.name + ": " + add.line}</span>
                            <div>{add.city + ", " + add.state}</div>
                            <div>{add.country + " - " + add.pincode}</div>
                          </label>
                        </div>
                      </div>
                    ))}
                    <div className="card mt-3">
                      <Button
                        sx={addNewBtn}
                        onClick={() => setAddNewAddress(true)}
                      >
                        Add New Address
                      </Button>
                    </div>
                  </>
                ))}
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
