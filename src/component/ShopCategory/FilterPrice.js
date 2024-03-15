import React from "react";

import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import RemoveIcon from "@mui/icons-material/Remove";
import "./FilterPrice.css";

const FilterPrice = () => {
  const go = {
    background: "#dc3237",
    color: "#fff",
    fontSize: "16px",
    "&:hover": {
      background: "#dc3237",
      color: "#fff",
      fontSize: "16px",
    },
  };
  return (
    <>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Checkbox />
          <span className="under">Under</span> <RemoveIcon />{" "}
          <span className="currency">
            <CurrencyRupeeIcon />
            299
          </span>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Checkbox />
          <span className="under">
            {" "}
            <CurrencyRupeeIcon />
            499
          </span>{" "}
          <RemoveIcon />{" "}
          <span className="currency">
            <CurrencyRupeeIcon />
            999
          </span>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Checkbox />
          <span className="under">
            {" "}
            <CurrencyRupeeIcon />
            999
          </span>{" "}
          <RemoveIcon />{" "}
          <span className="currency">
            <CurrencyRupeeIcon />
            1499
          </span>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Checkbox />
          <span className="under">
            {" "}
            <CurrencyRupeeIcon />
            1499
          </span>{" "}
          <RemoveIcon />{" "}
          <span className="currency">
            <CurrencyRupeeIcon />
            1999
          </span>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Checkbox />
          <span className="under">Over</span> <RemoveIcon />{" "}
          <span className="currency">
            <CurrencyRupeeIcon />
            2000
          </span>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <OutlinedInput
              placeholder="Min"
              sx={{ padding: 0, m: 0 }}
              id="outlined-adornment-weight"
              startAdornment={
                <InputAdornment position="start">
                  <CurrencyRupeeIcon />
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              className="outlined"
            />
            {/* <FormHelperText id="outlined-weight-helper-text">
            Weight
          </FormHelperText> */}
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <OutlinedInput
              placeholder=" Max"
              sx={{ padding: 0, m: 0 }}
              id="outlined-adornment-weight"
              startAdornment={
                <InputAdornment position="start">
                  {" "}
                  <CurrencyRupeeIcon />
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              className="outlined"
            />
            {/* <FormHelperText id="outlined-weight-helper-text">
            Weight
          </FormHelperText> */}
          </FormControl>
        </Stack>
        <Button fullWidth sx={go} variant="contained">
          Go
        </Button>
      </Box>
    </>
  );
};

export default FilterPrice;
