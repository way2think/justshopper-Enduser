// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./NewMainBanner.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useGetSettingsQuery } from "../api/api";
import { Button } from "@mui/material";

export default function NewMainBanner() {
  const { data } = useGetSettingsQuery();
  const homeBanner = data?.home_banner || [];

  return (
    <>
      <Swiper
        navigation={false}
        className="mySwiper"
        autoplay={{ delay: "3000" }}
        modules={[Autoplay, Navigation]}
      >
        {homeBanner.map((banner) => (
          <SwiperSlide key={banner.timestamp}>
            <img
              src={banner.images[0].url}
              className="d-block w-100 banner-image"
              alt={banner.images[0].url}
              // style={{ height: "150px" }
            />
            <Button
              className="shopnow"
              type="button"
              onClick={() => window.open(banner.url, "_blank")}
            >
              Order Now
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
