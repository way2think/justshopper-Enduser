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
import "./FilterCategory.css";

const FilterPrice = () => {
  const load = {
    background: "#dc3237",
    color: "#fff",
    fontSize: "13px",
    marginTop: 1,
    width: "80%",
    display: "flex",
    "&:hover": {
      background: "#dc3237",
      color: "#fff",
      fontSize: "14px",
    },
  };
  return (
    <>
      <Box className="filtercatergory">
        <Stack direction="row" alignItems="center" className="overallrow">
          <img src="../images/Select black.png" alt="" className="seleticon" />{" "}
          <Typography className="Categoryitemname" variant="body1">
            Pen
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" className="overallrow">
          <img src="../images/Select black.png" alt="" className="seleticon" />{" "}
          <Typography className="Categoryitemname" variant="body1">
            Notes
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" className="overallrow">
          <img src="../images/Select black.png" alt="" className="seleticon" />{" "}
          <Typography className="Categoryitemname" variant="body1">
            Letter Pad
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" className="overallrow">
          <img src="../images/Select black.png" alt="" className="seleticon" />{" "}
          <Typography className="Categoryitemname" variant="body1">
            Pen
          </Typography>
        </Stack>
        <Button fullWidth sx={load} variant="contained">
          <AddCircleOutlineIcon fontSize="small" />
          &nbsp; Load More
        </Button>
      </Box>
    </>
  );
};

export default FilterPrice;
