import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

import SearchBar from "./SearchBar";
import FilterPrice from "./FilterPrice";
import FilterCategory from "./FilterCategory";
import FilterTheme from "./FilterTheme";
import LatestCarousel from "./LatestCarousel";
import CategoryCard from "./CategoryCard";
import SideNavFilter from "./SideNavFilter";
import "./Category.css";
import FilterRange from "./FilterRange";

const Category = () => {
  return (
    <>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        className="my-4 container-fluid"
        direction="row"
      >
        <Box sx={{ flexGrow: 1, position: "relative" }}>
          <Grid container spacing={2} sx={{ mb: 10 }}>
            <Grid item xs={12} sm={3} md={3} lg={3} className="filtersidenav">
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
                  Pick a Theme
                </Typography>

                <FilterTheme />
              </Box>
            </Grid>
            <Grid item xs={12} sm={9} md={9} lg={9}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box className="titleghead">
                  <h4 className="productheading">Stationery</h4>
                  <p className="titledesc">Love is Letter on pick Stationery</p>
                  {/* <div className="search-container">
                    <form action="/action_page.php">
                      <input
                        type="text"
                        placeholder="Search all orders"
                        name="search"
                      />
                      <button type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div> */}
                </Box>
                <SideNavFilter />
              </Stack>
              <CategoryCard />
            </Grid>
          </Grid>

          {/* <LatestCarousel /> */}
        </Box>
      </Stack>
      <LatestCarousel />
    </>
  );
};

export default Category;
