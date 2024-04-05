import React, { useState } from "react";
import MainBannerCarosuel from "../../component/MainBannerCarosuel";
import NewArrival from "../../component/HomeComponent/NewArrival";
import ShopByCatergory from "../../component/HomeComponent/ShopByCatergory";
import WorkDetails from "../../component/HomeComponent/WorkDetails";
import Testimonial from "../../component/HomeComponent/Testimonial";
import NewArrivalCarosuel from "../../component/HomeComponent/NewArrivalCarosuel";

const Home = () => {
  const [categoryList, setCategoryList] = useState([
    {
      label: "Pen",
      img: "../images/stationary.png",
    },
    {
      label: "Pencils",
      img: "../images/stati.png",
    },
    {
      label: "Erasers",
      img: "../images/2.png",
    },
  ]);
  const [themeList, setThemeList] = useState([
    {
      label: "Notes",
      img: "../images/1.png",
    },
    {
      label: "Pouches",
      img: "../images/4.png",
    },
    {
      label: "Gifts",
      img: "../images/3.png",
    },
  ]);
  return (
    <>
      <MainBannerCarosuel />
      {/* <NewArrival /> */}
      <NewArrivalCarosuel />
      <ShopByCatergory shopbytitle="Shop by Category" data={categoryList} />
      <ShopByCatergory shopbytitle="Shop by Theme" data={themeList} />
      {/* <Testimonial /> */}
      <WorkDetails />
    </>
  );
};

export default Home;
