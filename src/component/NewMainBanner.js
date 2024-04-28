import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./NewMainBanner.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useGetSettingsQuery } from "../api/api";
import { Button } from "@mui/material";
import { Padding } from "@mui/icons-material";

export default function NewMainBanner() {
  const { data } = useGetSettingsQuery();
  const homeBanner = data?.home_banner || [];
  // console.log("homeBanner: ", homeBanner);

  return (
    <>
      <Swiper
        navigation={false}
        className="mySwiper"
        autoplay={{ delay: "3000" }}
        modules={[Autoplay, Navigation]}
      >
        {homeBanner.map((banner) => (
          <SwiperSlide>
            <img
              src={banner.images[0].url}
              className="d-block w-100 banner-image"
              alt={banner.images[0].url}
              // style={{ height: "150px" }
            />
            <Button className="shopnow">Order Now</Button>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          {" "}
          <img
            src="../images/web banner teddy Theme.jpg"
            class="d-block w-100"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="../images/web banner Unicorn Theme.jpg"
            class="d-block w-100"
            alt="..."
          />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
