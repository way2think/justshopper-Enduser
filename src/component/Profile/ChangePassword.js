import React from "react";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { collection, doc, updateDoc } from "firebase/firestore";
// import { db } from "../../services/firebase";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Stack } from "@mui/system";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import {
  GetCountries,
  GetState,
  GetCity,
  GetLanguages, //async functions
} from "react-country-state-city";
import classes from "./ProfileDetail.module.css";
// import { selectUser } from "../../store/userSlice";
// import {
//   isValidName,
//   isValidAddress,
//   isValidPassword,
//   isValidPhoneNumber,
// } from "../../utils/validator";
import {
  errorNotification,
  successNotification,
} from "../../utils/notifications";
// import { getAuth, updatePassword } from "firebase/auth";
// import { logout } from "../../api/auth";

const save = {
  background: "#dc3237",
  color: "#fff",
  fontSize: "16px",
  "&:hover": {
    background: "#dc3237",
    color: "#fff",
  },
  "@media only screen and (max-width: 600px)" :{
    fontSize:"12px",
  },
};
const Cancel = {
  border: "1px solid #dc3237",
  color: "#dc3237",
  fontSize: "16px",
  fontWeight:"bold",
  "&:hover": {
    border: "1px solid #dc3237",
    color: "#dc3237",
  },
  "@media only screen and (max-width: 600px)" :{
    fontSize:"12px",
  },
};

const sechalf = {
  padding: "0 50px",
  "@media (max-width: 768px)": {
    padding: "0",
  },
};
const ChangePassword = () => {
  return (
    <Box className={`${classes.pro} container`}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: "100%", mb: 2 }}
      >
        <Typography
          id="modal-modal-profile"
          variant="h4"
          component="h2"
          sx={{ color: "#000", fontWeight: "bold" }}
        >
          Settings
        </Typography>
        {/* {disableSettingsEdit && ( */}
        <IconButton
          aria-label="Edit"
          // onClick={() => setDisableSettingsEdit(false)}
        >
          <EditIcon sx={{ color: "#dc3237" }} />
        </IconButton>
        {/* )} */}
      </Stack>
      <Grid container spacing={2} sx={sechalf}>
        {/* <Grid item md={6} xs={12}>
        <FormControl sx={{ mb: 1, width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Current Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
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
            label="Current Password"
          />
        </FormControl>
      </Grid> */}
        <Grid item md={12} xs={12}>
          <FormControl sx={{ mb: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              New Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              //   disabled={disableSettingsEdit}
              //   type={showPassword ? "text" : "password"}
              //   value={pwd}
              //   onChange={(e) => setPwd(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    // disabled={disableSettingsEdit}
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                  </IconButton>
                </InputAdornment>
              }
              label="New Password"
            />
          </FormControl>
        </Grid>
        <Grid item md={12} xs={12}>
          <FormControl sx={{ mb: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              //   type={showCPassword ? "text" : "password"}
              //   disabled={disableSettingsEdit}
              //   value={cpwd}
              //   onChange={(e) => setCpwd(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    // disabled={disableSettingsEdit}
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowCPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {/* {showCPassword ? <VisibilityOff /> : <Visibility />} */}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
            />
          </FormControl>
        </Grid>
      </Grid>
      {/* {!disableSettingsEdit && ( */}
      <Stack spacing={2} direction="row" justifyContent="end" alignItems="end">
        <Button
          variant="contained"
          sx={save}
          // onClick={updateUserPassword}
        >
          Update Password
        </Button>
        <Button
          variant="outlined"
          sx={Cancel}
          onClick={() => {
            //   setDisableSettingsEdit(true);
            //   setPwd("");
            //   setCpwd("");
          }}
        >
          Cancel
        </Button>
      </Stack>
      {/* )} */}
    </Box>
  );
};

export default ChangePassword;
