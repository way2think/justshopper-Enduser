import React from "react";

import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import RemoveIcon from "@mui/icons-material/Remove";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./FilterPrice.css";

const FilterPrice = () => {
  const load = {
    background: "#dc3237",
    color: "#fff",
    fontSize: "13px",
    marginTop:1,
    "&:hover": {
      background: "#dc3237",
      color: "#fff",
      fontSize: "13px",
    },
  };
  return (
    <>
      <Box>
        <Stack direction="row" alignItems="center">
          <Checkbox /> <Typography variant="body1">Pen</Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Checkbox /> <Typography variant="body1">Notes</Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Checkbox /> <Typography variant="body1">Books</Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Checkbox /> <Typography variant="body1">Letter pad</Typography>
        </Stack>
        <Button fullWidth sx={load} variant="contained">
          <AddCircleOutlineIcon fontSize="small" />&nbsp; Load More
        </Button>
      </Box>
    </>
  );
};

export default FilterPrice;
