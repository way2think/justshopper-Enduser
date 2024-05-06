import { useState } from "react";
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
const sampleOptions = ["no option"];

export default function Searchbar() {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState([]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    // Here you can implement your logic to fetch options based on the input value
    // For now, using a sample set of options
    const filteredOptions = sampleOptions.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setOptions(filteredOptions);
  };

  const handleOptionSelect = (option) => {
    setSearchValue(option);
    handleClose(); // Close the search bar
    // You can add further logic here, such as navigating to the selected option
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
              <Button variant="contained" onClick={handleClose}>
                Search
              </Button>
            </Stack>
            {options.length > 0 && (
              <OptionsContainer>
                {options.map((option, index) => (
                  <OptionItem
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
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
