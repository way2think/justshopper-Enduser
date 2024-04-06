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
import "./FilterCategory.css";
import { selectCategory } from "../../api/api";

const FilterCategory = () => {
  const categoryList = useSelector(selectCategory);

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
        {categoryList?.map((category) => (
          <Stack
            direction="row"
            alignItems="center"
            className="overallrow"
            key={category?.name}
          >
            <img
              src="../images/Select black.png"
              alt="select-black"
              className="seleticon"
            />
            <Typography className="Categoryitemname" variant="body1">
              {category?.name}
            </Typography>
          </Stack>
        ))}
      </Box>
    </>
  );
};

export default FilterCategory;
