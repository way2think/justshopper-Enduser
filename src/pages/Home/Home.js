import React from "react";
import { useSelector } from "react-redux";
import MainBannerCarosuel from "../../component/MainBannerCarosuel";
import NewArrival from "../../component/HomeComponent/NewArrival";
import ShopByType from "../../component/HomeComponent/ShopByType";
import WorkDetails from "../../component/HomeComponent/WorkDetails";
import Testimonial from "../../component/HomeComponent/Testimonial";
import NewArrivalCarosuel from "../../component/HomeComponent/NewArrivalCarosuel";
import { selectCategory, selectTheme } from "../../api/api";

const Home = () => {
  const categoryList = useSelector(selectCategory);
  const themeList = useSelector(selectTheme);

  return (
    <>
      <MainBannerCarosuel />
      {/* <NewArrival /> */}
      <NewArrivalCarosuel />
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
      {/* <Testimonial /> */}
      <WorkDetails />
    </>
  );
};

export default Home;
