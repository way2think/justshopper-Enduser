import * as React from "react";
import { useState } from "react";
// import {
//   isValidEmail,
//   isValidPassword,
//   isValidAddress,
//   isValidPhoneNumber,
//   isValidName,
//   isValidNumber,
// } from "../utils/validator";
// import { doc, setDoc } from "firebase/firestore";
// import { db } from "../services/firebase";
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
// import "./SignupModal.css";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { errorNotification, successNotification } from "../utils/notifications";
// import { async } from "q";
import CountryAndStates from "./CountryAndStates";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 440,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  "@media (max-width: 768px)": {
    width: 400,
    maxHeight: "450px",
    overflowY: "scroll",
  },
};

const signup = {
  // background: "#f19e38",
  color: "#dc3237",
  marginTop: "5px",
  fontSize: "12px",
  fontweight: 800,
  fontfamily: "amazonbold",
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

export default function SignupModal({ manageAddress }) {
  const [open, setOpen] = useState(false);
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
    address: "",
    createPassword: "",
    confirmPassword: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpDetails((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  //   const handleSignUP = () => {
  //     const {
  //       name,
  //       email,
  //       phonenumber,
  //       address,
  //       confirmPassword,
  //       createPassword,
  //       country,
  //       state,
  //       city,
  //       pincode,
  //     } = signUpDetails;

  //     if (
  //       isValidName(name) &&
  //       isValidEmail(email) &&
  //       isValidPhoneNumber(phonenumber) &&
  //       isValidAddress(address) &&
  //       isValidPassword(createPassword) &&
  //       isValidPassword(confirmPassword) &&
  //       isValidNumber(pincode) &&
  //       country &&
  //       state &&
  //       city &&
  //       createPassword === confirmPassword
  //     ) {
  //       createUserWithEmailAndPassword(auth, email, createPassword)
  //         .then(async (userCredential) => {
  //           // Signed up
  //           const user = userCredential.user;
  //           console.log("user1", user);
  //           const { uid } = userCredential.user;
  //           const docRef = doc(db, collection, uid);
  //           await setDoc(docRef, {
  //             name,
  //             phone: phonenumber,
  //             address,
  //             email,
  //             country: countryName,
  //             state: stateName,
  //             city: cityName,
  //             pincode,
  //             role: "consumer",
  //           });
  //         })
  //         .catch((error) => {
  //           const errorCode = error.code;
  //           const errorMessage = error.message;
  //           errorNotification(errorCode);
  //         });
  //     } else {
  //       !isValidName(name) && errorNotification("Invalid Name");

  //       !isValidEmail(email) && errorNotification("Invalid Email");

  //       !isValidPhoneNumber(phonenumber) &&
  //         errorNotification("Invalid Phone Number");
  //       !isValidAddress(address) && errorNotification("Invalid Address");
  //       !isValidPassword(createPassword) &&
  //         errorNotification("Invalid CreatePassword");
  //       !isValidPassword(confirmPassword) &&
  //         errorNotification("Invalid ConfirmPassword");
  //       !(createPassword === confirmPassword) &&
  //         errorNotification("Password doesn't match");
  //       !isValidNumber(pincode) && errorNotification("Enter valid pincode");
  //       !country && errorNotification("Select Country");
  //       !state && errorNotification("Select State");
  //       !city && errorNotification("Select City");
  //     }
  //   };

  return (
    <div>
      {!manageAddress && (
        <Button onClick={handleOpen} sx={signup}>
          Create New Account?
        </Button>
      )}
      {manageAddress && (
        <Button
          onClick={handleOpen}
          sx={Signupbtn}
          style={{
            width:"15%",
            float:"right"
          }}
        >
          Add Address
        </Button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
         {!manageAddress && <>   <Grid xs={12} sx={{ textAlign: "center" }}>
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
              <Grid md={6} xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic1"
                  label="Name"
                  variant="outlined"
                  name="name"
                  type="text"
                  className="name"
                  value={signUpDetails.name}
                  onChange={handleInputChange}
                  sx={{
                    mb: 2,
                    width: "90%",
                    "@media (max-width: 768px)": {
                      width: "100%",
                    },
                  }}
                />
              </Grid>
              <Grid md={6} xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  name="phonenumber"
                  type="tel"
                  value={signUpDetails.phonenumber}
                  onChange={handleInputChange}
                  className="phone"
                  sx={{ mb: 2 }}
                />
              </Grid>
            </Grid>

            <Grid container>
              <Grid md={12} xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  name="email"
                  type="email"
                  value={signUpDetails.email}
                  onChange={handleInputChange}
                  className="email"
                  sx={{ mb: 2 }}
                />
              </Grid>

              <Grid md={6} xs={12}>
                <FormControl
                  sx={{
                    mb: 2,
                    width: "90%",
                    "@media (max-width: 768px)": {
                      width: "100%",
                    },
                  }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Create Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
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
                    label="Create Password"
                  />
                </FormControl>
              </Grid>
              <Grid md={6} xs={12}>
                <FormControl sx={{ mb: 2, width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
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
                    label="Password"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Button
              sx={Signupbtn}
              //   onClick={handleSignUP}
            >
              Sign up
            </Button>
          
          </> }
          {manageAddress && (
            <>
              {" "}
              <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
              sx={{
                fontFamily: "amazonbold",
                marginBottom: 2,
                textAlign: "left",
                marginTop:3,
              }}
             
            >
            ADD ADDRESS
            </Typography>
              <Grid md={12} xs={12} sx={{marginTop:3}}>
                <TextField
                  id="outlined-multiline-static"
                  label="Address"
                  multiline
                  rows={1}
                  name="address"
                  value={signUpDetails.address}
                  onChange={handleInputChange}
                  sx={{ mb: 2, width: "100%" }}
                />
              </Grid>
              <Grid md={12} xs={12}>
                <CountryAndStates
                  signUpDetails={signUpDetails}
                  setSignUpDetails={setSignUpDetails}
                  handleInputChange={handleInputChange}
                  countryid={countryid}
                  setCountryid={setCountryid}
                  setCountryName={setCountryName}
                  stateid={stateid}
                  setstateid={setstateid}
                  setstateName={setstateName}
                  setCityName={setCityName}
                />
              </Grid>
              <Button
              sx={Signupbtn}
              //   onClick={handleSignUP}
            >
             Add 
            </Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
