import { useState } from "react";
import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// import CountryAndStates from "./CountryAndStates";
import {
  isValidEmail,
  isValidName,
  isValidPassword,
  isValidPhoneNumber,
  isValidPincode,
} from "../../utils/validator";

import { auth, db } from "../../config/firebase";
import { errorNotification } from "../../utils/notifications";

import "./SignupModal.css";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import LoginModal from "../Login/LoginModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 645,
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

const signup = {
  // background: "#f19e38",
  border: 0,
  margin: 0,
  padding: 0,
  color: "#dc3237",
  marginTop: "5px",
  fontSize: "12px",
  fontweight: 800,
  fontfamily: "amazonbold",
  float: "left",
  // "&:hover": {
  //   // background: "#f19e38",
  //   color: "#fff",
  //   fontsize: "14px",
  //   fontweight: 500,
  //   fontfamily: "'Poppins', sans-serif",
  // },
};

const Signupbtn = {
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

// const text = {
//   maxHeight: "600px",
//   overflowY: "scroll",
// };

export default function SignupModal({ open, setOpen }) {
  // const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  const [countryName, setCountryName] = useState("");
  const [stateName, setstateName] = useState("");
  const [cityName, setCityName] = useState("");
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    phonenumber: "",
    createPassword: "",
    confirmPassword: "",
    address: {
      line: "",
      city: "",
      state: "",
      country: "India",
      pincode: "",
    },
  });
  // console.log("testing for name", signUpDetails);
  // const auth = getAuth();
  // const collection = "users";

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const countryIndia = {
    id: 101,
    name: "India",
    iso3: "IND",
    iso2: "IN",
    numeric_code: "356",
    phone_code: 91,
    region: "Asia",
    subregion: "Southern Asia",
    tld: ".in",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpDetails((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSignup = () => {
    const {
      name,
      email,
      phonenumber,
      confirmPassword,
      createPassword,
      address,
    } = signUpDetails;

    if (
      isValidName(name) &&
      isValidEmail(email) &&
      isValidPhoneNumber(phonenumber) &&
      isValidPassword(createPassword) &&
      isValidPassword(confirmPassword) &&
      isValidPincode(address.pincode) &&
      address.state !== "" &&
      address.city !== "" &&
      address.line !== "" &&
      createPassword === confirmPassword
    ) {
      createUserWithEmailAndPassword(auth, email, createPassword)
        .then(async (userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log("user1", user);
          const { uid } = userCredential.user;
          const docRef = doc(db, "user", uid);
          await setDoc(docRef, {
            name,
            phone: phonenumber,
            email,
            role: "consumer",
            address: {
              ...address,
              id: new Date().getTime(),
            },
            shipping_addresses: [],
            favourites: [],
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          errorNotification(`${errorCode}: ${errorMessage}`);
        });
    } else {
      errorNotification("Enter/select valid data");

      // !isValidName(name) && errorNotification("Invalid Name");

      // !isValidEmail(email) && errorNotification("Invalid Email");

      // !isValidPhoneNumber(phonenumber) &&
      //   errorNotification("Invalid Phone Number");

      // !isValidPassword(createPassword) &&
      //   errorNotification("Invalid CreatePassword");

      // !isValidPassword(confirmPassword) &&
      //   errorNotification("Invalid ConfirmPassword");

      // !(createPassword === confirmPassword) &&
      //   errorNotification("Password doesn't match");
    }
  };

  return (
    <div>
      {/* <Button onClick={handleOpen} sx={signup}>
        Create New Account?
      </Button> */}
      {/* {manageAddress && (
        <Button
          onClick={handleOpen}
          sx={Signupbtn}
          style={{
            width: "15%",
            float: "right",
          }}
        >
          Add Address
        </Button>
      )} */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <>
            <Grid xs={12} sx={{ textAlign: "center" }}>
              <img
                src="../images/JS logo png.png"
                alt=""
                style={{ width: "55px ", borderRadius: 5 }}
              />
            </Grid>
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h2"
              sx={{
                fontFamily: "amazonbold",
                marginBottom: 2,
                textAlign: "center",
              }}
            >
              Sign Up
            </Typography>
            <Grid container>
              <Grid md={6} xs={12} className="gridsignup">
                <TextField
                  fullWidth
                  id="name"
                  label="Name"
                  variant="outlined"
                  name="name"
                  type="text"
                  className="name"
                  value={signUpDetails.name}
                  onChange={handleInputChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSignup(e);
                    }
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
              <Grid md={6} xs={12}>
                <TextField
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  variant="outlined"
                  name="phonenumber"
                  type="tel"
                  value={signUpDetails.phonenumber}
                  onChange={handleInputChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSignup(e);
                    }
                  }}
                  className="phone"
                  sx={{ mb: 2 }}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid md={12} xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  variant="outlined"
                  name="email"
                  type="email"
                  value={signUpDetails.email}
                  onChange={handleInputChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSignup(e);
                    }
                  }}
                  className="email"
                  sx={{ mb: 2 }}
                />
              </Grid>

              <Grid xs={12}>
                <TextField
                  id="outlined-multiline-static"
                  label="Address Line"
                  placeholder="Door / House No, Street Name, Area"
                  name="addressLine"
                  value={signUpDetails.address.line}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSignup(e);
                    }
                  }}
                  onChange={(e) => {
                    setSignUpDetails((prevState) => {
                      return {
                        ...prevState,
                        address: {
                          ...prevState.address,
                          line: e.target.value,
                        },
                      };
                    });
                  }}
                  sx={{ mb: 2, width: "100%" }}
                />
              </Grid>

              <Grid md={6} xs={12} sx={{ marginBottom: "9px" }}>
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
                    setSignUpDetails((prevState) => {
                      return {
                        ...prevState,
                        address: {
                          ...prevState.address,
                          country: e.name,
                        },
                      };
                    });
                  }}
                  placeHolder="Select Country"
                /> */}
                {/* <TextField
                  id="outlined-multiline-static"
                  label="City"
                  placeholder="City"
                  name="city"
                  value={signUpDetails.address.city}
                  onChange={(e) => {
                    setSignUpDetails((prevState) => {
                      return {
                        ...prevState,
                        address: {
                          ...prevState.address,
                          city: e.target.value,
                        },
                      };
                    });
                  }}
                  sx={{ mb: 2, width: "100%" }}
                /> */}
              </Grid>

              <Grid md={6} xs={12}>
                {/* <TextField
                  id="outlined-multiline-static"
                  label="State"
                  placeholder="State"
                  name="state"
                  value={signUpDetails.address.state}
                  onChange={(e) => {
                    setSignUpDetails((prevState) => {
                      return {
                        ...prevState,
                        address: {
                          ...prevState.address,
                          state: e.target.value,
                        },
                      };
                    });
                  }}
                  sx={{ mb: 2, width: "100%" }}
                /> */}
                <StateSelect
                  countryid={countryIndia.id}
                  onChange={(e) => {
                    setstateid(e.id);
                    setstateName(e.name);
                    setSignUpDetails((prevState) => {
                      return {
                        ...prevState,
                        address: {
                          ...prevState.address,
                          state: e.name,
                        },
                      };
                    });
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSignup(e);
                    }
                  }}
                  placeHolder="Select State"
                />
              </Grid>

              <Grid md={6} xs={12} mt={2}>
                {/* <TextField
                  id="outlined-multiline-static"
                  label="Pincode"
                  multiline
                  rows={1}
                  name="country"
                  value={signUpDetails.address.country}
                  onChange={(e) => {
                    setSignUpDetails((prevState) => {
                      return {
                        ...prevState,
                        address: {
                          ...prevState.address,
                          country: e.target.value,
                        },
                      };
                    });
                  }}
                  sx={{ mb: 2, width: "100%" }}
                /> */}
                <CitySelect
                  countryid={countryIndia.id}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSignup(e);
                    }
                  }}
                  stateid={stateid}
                  onChange={(e) => {
                    setCityName(e.name);
                    setSignUpDetails((prevState) => {
                      return {
                        ...prevState,
                        address: {
                          ...prevState.address,
                          city: e.name,
                        },
                      };
                    });
                  }}
                  placeHolder="Select City"
                />
              </Grid>

              <Grid md={6} xs={12} mt={2}>
                <TextField
                  id="outlined-multiline-static"
                  label="Pincode"
                  multiline
                  rows={1}
                  name="pincode"
                  value={signUpDetails.address.pincode}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSignup(e);
                    }
                  }}
                  onChange={(e) => {
                    setSignUpDetails((prevState) => {
                      return {
                        ...prevState,
                        address: {
                          ...prevState.address,
                          pincode: e.target.value,
                        },
                      };
                    });
                  }}
                  sx={{ mb: 2, width: "100%" }}
                />
              </Grid>

              <Grid md={6} xs={12} className="gridsignup">
                <FormControl
                  fullWidth
                  sx={{
                    mb: 2,
                    // width: "90%",
                    // "@media (max-width: 768px)": {
                    //   width: "100%",
                    // },
                  }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="password">Create Password</InputLabel>
                  <OutlinedInput
                    label="Create Password"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSignup(e);
                      }
                    }}
                    name="createPassword"
                    value={signUpDetails.createPassword}
                    onChange={handleInputChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <Grid md={6} xs={12}>
                <FormControl sx={{ mb: 2, width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="confirmPassword">
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    label="Confirm Password"
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSignup(e);
                      }
                    }}
                    name="confirmPassword"
                    value={signUpDetails.confirmPassword}
                    onChange={handleInputChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Button sx={Signupbtn} onClick={handleSignup}>
              Sign up
            </Button>
            <Button sx={signup} onClick={() => setOpen(true, "login")}>
              If Already have account?
            </Button>
          </>
        </Box>
      </Modal>
    </div>
  );
}
