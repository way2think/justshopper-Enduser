import React from "react";
import { useSelector } from "react-redux";
import ShopByType from "../../component/HomeComponent/ShopByType";
import WorkDetails from "../../component/HomeComponent/WorkDetails";

import NewArrivalCarosuel from "../../component/HomeComponent/NewArrivalCarosuel";
import { selectCategory, selectTheme } from "../../api/api";
import { useGetAllNewProductArrivalsQuery } from "../../api/product";
import NewMainBanner from "../../component/NewMainBanner";

const Home = () => {
  const conditions = [
    { type: "where", field: "status", operator: "==", value: "published" },
    { type: "where", field: "is_new_arrival", operator: "==", value: true },
    { type: "orderBy", field: "timestamp", order: "desc" },
    { type: "limit", value: 10 }, // max newArrivals only 10
  ];
  const {
    data: newArrivals,
    isLoading,
    isFetching,
  } = useGetAllNewProductArrivalsQuery({
    conditions,
  });

  // console.log("newArri: ", data);

  const categoryList = useSelector(selectCategory);
  const themeList = useSelector(selectTheme);

  return (
    <>
      {/* <MainBannerCarosuel /> */}
      {/* <NewArrival /> */}
      <NewMainBanner />
      <NewArrivalCarosuel products={newArrivals || []} />
      <ShopByType
        type="category"
        title="Shop by Category"
        subTitle="Love is a letter on pink stationery"
        dataList={categoryList || []}
      />
      <ShopByType
        type="theme"
        title="Shop by Theme"
        subTitle="Love is a letter on pink stationery"
        dataList={themeList || []}
      />
      <WorkDetails />
    </>
  );
};

export default Home;
