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
import { useSelector } from "react-redux";
import "./FilterTheme.css";
import { selectTheme } from "../../api/api";

const FilterTheme = () => {
  const themeList = useSelector(selectTheme);

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
      <Box className="filterTheme">
        {themeList?.map((theme) => (
          <Stack
            direction="row"
            alignItems="center"
            className="overallrowtheme"
          >
            <img
              src="../images/Select black.png"
              alt=""
              className="seleticontheme"
            />
            <Typography className="Themeitemname" variant="body1">
              {theme?.name}
            </Typography>
          </Stack>
        ))}

        {/* <Button fullWidth sx={load} variant="contained">
          <AddCircleOutlineIcon fontSize="small" />
          &nbsp; Load More
        </Button> */}
      </Box>
    </>
  );
};

export default FilterTheme;
