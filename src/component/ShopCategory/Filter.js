import { Box, Grid, Stack, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import FilterPrice from "./FilterPrice";
import FilterCategory from "./FilterCategory";
import FilterTheme from "./FilterTheme";
import FilterRange from "./FilterRange";

const Filter = ({ type, productType }) => (
  <Grid item xs={12} sm={3} md={3} lg={3} className="filtersidenav">
    <Box>
      <h4 className="searchproducthead">Search Product</h4>
      {/* <SearchBar /> */}
    </Box>
    <Box className="filter">
      {/* <h4 className="filterheading">Filter by Price</h4> */}
      {/* <FilterPrice /> */}
      {/* <FilterRange /> */}
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

      <FilterCategory type={type} productType={productType} />
    </Box>
    <Box className="filter">
      {/* <Typography
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
      </Typography> */}
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

      <FilterTheme type={type} productType={productType} />
    </Box>
  </Grid>
);

export default Filter;
