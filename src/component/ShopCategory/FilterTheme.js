import React from "react";
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
import { useSelector } from "react-redux";
import "./FilterTheme.css";
import { selectTheme } from "../../api/api";

const FilterTheme = ({ type, productType }) => {
  const navigate = useNavigate();
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

  const handleNavigate = (theme) => {
    navigate(`/shop-by-theme?theme=${theme.name}`);
  };

  return (
    <>
      <Box className="filterTheme">
        {themeList?.map((theme) => (
          <Stack
            key={theme?.name}
            direction="row"
            alignItems="center"
            className="overallrowtheme"
            onClick={() => handleNavigate(theme)}
          >
            <img
              src={
                type === "theme" && productType === theme?.name
                  ? `../images/Select red.png`
                  : `../images/Select black.png`
              }
              alt=""
              className="seleticontheme"
            />
            <Typography
              className="Themeitemname"
              variant="body1"
              color={
                type === "theme" && productType === theme?.name
                  ? "red"
                  : "black"
              }
            >
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
