import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import "./ShopByType.css";
import CatergoryCard from "./CatergoryCard";

const ShopByType = ({ type, title, subTitle, dataList }) => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        className="mainshopbycatergory"
      >
        <h3 className="shopCategoryhead">{title}</h3>
        {/* <p className="shopCategorydesc">{subTitle}</p> */}
      </Stack>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        className="mt-3 container"
        direction="row"
      >
        <Box sx={{ flexGrow: 1, position: "relative" }}>
          <Grid container spacing={2} sx={{ mb: 10 }}>
            {dataList &&
              dataList?.map((item) =>
                item?.show_in_home ? (
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    md={4}
                    lg={4}
                    key={item?.name}
                    container
                    justifyContent="center"
                  >
                    <CatergoryCard
                      catergoryname={item?.name}
                      catergoryimage={item?.image}
                      type={type}
                    />
                  </Grid>
                ) : null
              )}
            {/* <Grid item xs={12} sm={4} md={4} lg={4}>
              <CatergoryCard
                catergoryname="Pencils"
                catergoryimage="../images/stati.png"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <CatergoryCard
                catergoryname="Erasers"
                catergoryimage="../images/2.png"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <CatergoryCard
                catergoryname="Pouches"
                catergoryimage="../images/4.png"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <CatergoryCard
                catergoryname="Gifts"
                catergoryimage="../images/3.png"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <CatergoryCard
                catergoryname="Notes"
                catergoryimage="../images/1.png"
              />
            </Grid> */}
          </Grid>
          {/* <a href="" className="viewmore">
            View More
          </a> */}
        </Box>
      </Stack>
    </>
  );
};

export default ShopByType;
