import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
import { selectCategory } from "../../api/api";

const FilterCategory = ({ type, productType }) => {
  const navigate = useNavigate();
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

  const handleNavigate = (category) => {
    navigate(`/shop-by-category?category=${category.name}`);
  };

  return (
    <>
      <Box className="filtercatergory">
        {categoryList?.map((category) => (
          <Stack
            key={category?.name}
            direction="row"
            alignItems="center"
            className="overallrow"
            onClick={() => handleNavigate(category)}
          >
            <img
              src={
                type === "category" && productType === category?.name
                  ? `../images/Select red.png`
                  : `../images/Select black.png`
              }
              alt="select-black"
              className="seleticon"
            />
            <Typography
              className="Categoryitemname"
              variant="body1"
              color={
                type === "category" && productType === category?.name
                  ? "red"
                  : "black"
              }
            >
              {category?.name}
            </Typography>
          </Stack>
        ))}
      </Box>
    </>
  );
};

export default FilterCategory;
