import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
const CountryAndStates = ({
  signUpDetails,
  setSignUpDetails,
  handleInputChange,
  countryid,
  setCountryid,
  stateid,
  setstateid,
  countryName,
  setCountryName,
  setstateName,
  setCityName,
}) => {
  // const [countryid, setCountryid] = useState(0);
  // const [stateid, setstateid] = useState(0);
  // const [countryName, setCountryName] = useState("");
  // const [stateName, setstateName] = useState("");
  // const [cityName, setCityName] = useState("");
  const handleInputValue = (name, value) => {
    setSignUpDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <div>
      <Grid container>
        <Grid md={5.5} xs={12} sx={{ mr: { md: 3 }, mb: { xs: 2, md: 0 } }}>
          {/* <h6>Country</h6> */}
          <CountrySelect
            onChange={(e) => {
              setCountryid(e.id);
              setCountryName(e.name);
              handleInputValue("country", e.name);
            }}
            placeHolder="Select Country"
          />
        </Grid>
        <Grid md={5.5} xs={12}>
          {/* <h6>State</h6> */}
          <StateSelect
            countryid={countryid}
            onChange={(e) => {
              setstateid(e.id);
              handleInputValue("state", e.name);
              setstateName(e.name);
            }}
            placeHolder="Select State"
          />
        </Grid>
        <Grid md={5.5} xs={12} sx={{ mt: 3, mr: { md: 3 } }}>
          {/* <h6>City</h6> */}
          <CitySelect
            countryid={countryid}
            stateid={stateid}
            onChange={(e) => {
              setCityName(e.name);
              handleInputValue("city", e.name);
            }}
            placeHolder="Select City"
          />
        </Grid>
        <Grid md={5.5} xs={12} sx={{ mb: 2 }}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Pincode"
            variant="outlined"
            name="pincode"
            // type="number"
            value={signUpDetails.pincode}
            onChange={handleInputChange}
            // className="pincode"
            sx={{ mt: 3 }}
            size="medium"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default CountryAndStates;
