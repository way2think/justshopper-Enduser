import { useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import SearchIcon from "@mui/icons-material/Search";
import { bgBlur } from "../Reusable/css";
import { Stack } from "@mui/material";
import { input } from "@testing-library/user-event/dist/cjs/event/input.js";
import { useGetAllProductsQuery } from "../api/product";
import { errorNotification } from "../utils/notifications";
import { useNavigate } from "react-router-dom";

// import Iconify from "src/components/iconify";

// ----------------------------------------------------------------------

const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 92;

const StyledSearchbar = styled("div")(({ theme }) => ({
  ...bgBlur({
    color: theme.palette.background.default,
  }),
  top: 0,
  left: 0,
  zIndex: 99,
  width: "100%",
  display: "flex",
  position: "absolute",
  alignItems: "center",
  flexDirection: "column", // Adjusted to show options beneath input
  height: HEADER_MOBILE,
  padding: theme.spacing(0, 3),
  //   boxShadow: theme.customShadows.z8,
  [theme.breakpoints.up("md")]: {
    height: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

const OptionsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: 0,
  width: "106.8%",
  background: "#fff",
  justifyContent: "start",
  alignItems: "center",
  "@media only screen and (min-width: 320px) and (max-width: 600px)": {
    width: "106.8% !important",
  },
});

const OptionItem = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.divider}`,
  width: "106.8%",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  "@media only screen and (min-width: 320px) and (max-width: 600px)": {
    width: "106.8% !important",
  },
}));

// Sample options for demonstration
const sampleOptions = ["eraser", "duck", "monkey", "horse"];

export default function Searchbar(
  {
    // value,
    // setValue,
    // inputValue,
    // setInputValue,
    // optionsData,
    // productData,
  }
) {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState("");
  const [optionData, setOptionData] = useState([]);
  const navigate = useNavigate();

  const conditions = [
    {
      type: "where",
      field: "status",
      operator: "==",
      value: "published",
    },
    {
      type: "where",
      field: "search_tags",
      operator: "array-contains",
      value: searchValue,
    },
  ];
  const {
    data: productData,
    isProductLoading,
    isFetching,
  } = useGetAllProductsQuery({
    conditions,
  });

  // console.log("optionsdata", options, optionData, productData, searchValue);

  useEffect(() => {
    if (productData && productData.length) {
      setOptionData(() => productData);
    }
  }, [productData]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
    setSearchValue("");
    setOptions("");
    setOptionData([]);
  };

  const handleInputChange = (event, newInputValue) => {
    const { value } = event.target;
    setSearchValue(() => value.toLowerCase());
    // Here you can implement your logic to fetch options based on the input value
    // For now, using a sample set of options

    const filteredOptions = sampleOptions.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setOptionData(productData);
  };

  const handleOptionSelect = (option) => {
    setSearchValue(option.name);
    setOptions(option);
    // handleClose(); // Close the search bar
    // You can add further logic here, such as navigating to the selected option
  };

  const handleSearch = () => {
    // console.log("options", options);
    if (options !== "") {
      navigate(`product/${options.id}`);
      handleClose();
    } else {
      errorNotification("no data found");
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!open && <SearchIcon onClick={handleOpen} />}

        <Slide direction="down" in={open} mountOnEnter unmountOnExit>
          <StyledSearchbar>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ width: "100%", marginTop: "20px" }}
            >
              <Input
                autoFocus
                fullWidth
                disableUnderline
                placeholder="Search…"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon
                      sx={{ color: "text.disabled", width: 20, height: 20 }}
                    />
                  </InputAdornment>
                }
                value={searchValue}
                onChange={handleInputChange}
                sx={{ mr: 1, fontWeight: "fontWeightBold" }}
              />
              <Button
                variant="contained"
                onClick={handleSearch}
                sx={{ backgroundColor: "#DC3227" }}
              >
                Search
              </Button>
            </Stack>
            {optionData.length > 0 && (
              <OptionsContainer>
                {optionData.map((option, index) => (
                  <OptionItem
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option.name}
                  </OptionItem>
                ))}
              </OptionsContainer>
            )}
          </StyledSearchbar>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}
