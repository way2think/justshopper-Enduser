import React from "react";
import MainBannerCarosuel from "../../component/MainBannerCarosuel";
import NewArrival from "../../component/HomeComponent/NewArrival";
import ShopByCatergory from "../../component/HomeComponent/ShopByCatergory";
import WorkDetails from "../../component/HomeComponent/WorkDetails";
import Testimonial from "../../component/HomeComponent/Testimonial";

const Home = () => {
  return (
    <>
      <MainBannerCarosuel />
      <NewArrival />
      <ShopByCatergory />
      {/* <Testimonial /> */}
      <WorkDetails />
    </>
  );
};

export default Home;
