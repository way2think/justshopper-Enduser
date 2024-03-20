import React, { Component } from "react";
import { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";
import { Box, Grid, Stack, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import FilterPrice from "./FilterPrice";
import FilterCategory from "./FilterCategory";
import "../ShopCategory/Category.css";
import classes from "./SideNavFilter.module.css"; // Import your CSS module
import FilterRange from "./FilterRange";

const SideNavFilter = ({
  className,
  search,
  selectedItem,
  setSelectedItem,
}) => {
  const [isSidenavOpen, setIsSidenavOpen] = useState("");

  const openNav = () => setIsSidenavOpen(true);

  const closeNav = () => setIsSidenavOpen(false);

  return (
    <div>
      <span className={classes.openButton} onClick={openNav}>
        <FilterListIcon fontSize="40px" />
      </span>
      {/* Sidebar */}
      <div
        id="mySidenav"
        className={`${classes.sidenav} ${isSidenavOpen ? classes.open : ""}`}
      >
        <a
          href="javascript:void(0)"
          className={classes.closebtn}
          onClick={closeNav}
        >
          <Stack direction="row" justifyContent="end" alignItems="center">
            <FilterListOffIcon />
          </Stack>

          <Box
            sx={{ flexGrow: 1, position: "relative" }}
            className={classes.sidenavcontent}
          >
            <Grid container spacing={2} sx={{ mb: 10 }}>
              <Grid item xs={12} className={classes.filtersidenav}>
                <Box>
                  <h4 className="searchproducthead">Search Product</h4>
                  <SearchBar />
                </Box>
                <Box className="filter">
                  <h4 className="filterheading">Filter by Price</h4>
                  {/* <FilterPrice /> */}
                  <FilterRange />
                </Box>
                <Box className="filter">
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "22px",
                      textAlign: "left",
                      fontWeight: "bold",
                      color: "#000",
                      fontFamily: "amazonheavy",
                    }}
                  >
                    Filter
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "left",
                      fontWeight: 600,
                      color: "#000",
                      fontSize: "22px",
                      fontFamily: "amazonbold",
                    }}
                  >
                    Pick a category
                  </Typography>

                  <FilterCategory />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </a>
      </div>
    </div>
  );
};

export default SideNavFilter;
