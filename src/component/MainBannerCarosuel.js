import React, { useState } from "react";
import {
  MDBBtn,
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import { useGetSettingsQuery } from "../api/api";
import "./MainBannerCarosuel.css";

export default function MainBannerCarosuel() {
  const { data } = useGetSettingsQuery();
  const [activeItem, setActiveItem] = useState(0);
  const homeBanner = data?.home_banner || [];
  console.log("data for banner", homeBanner);

  const handleNext = () => {
    setActiveItem((prevItem) =>
      prevItem === homeBanner.length - 1 ? 0 : prevItem + 1
    );
  };

  const handlePrev = () => {
    setActiveItem((prevItem) =>
      prevItem === 0 ? homeBanner.length - 1 : prevItem - 1
    );
  };

  return (
    <MDBCarousel showIndicators showControls fade>
      {homeBanner.map((banner, index) => (
        <MDBCarouselItem
          key={index}
          itemId={index}
          className="overall"
          activeItem={activeItem}
        >
          <img
            src={banner.images[0].url}
            className="d-block w-100 carousel-img"
            alt="..."
          />
          {/* <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <MDBCarouselCaption className="caption">
              <h1 className="slidercaption">{banner.description}</h1>
              <MDBBtn className="sliderbtn">Shop Now</MDBBtn>
            </MDBCarouselCaption>
          </div> */}
        </MDBCarouselItem>
      ))}
      <MDBBtn
        onClick={handlePrev}
        className="carousel-control-prev"
        aria-label="Previous"
      >
        <span aria-hidden="true">&laquo;</span>
      </MDBBtn>
      <MDBBtn
        onClick={handleNext}
        className="carousel-control-next"
        aria-label="Next"
      >
        <span aria-hidden="true">&raquo;</span>
      </MDBBtn>
    </MDBCarousel>
  );

  {
    /* <MDBCarouselItem itemId={2} className="overall">
        <img
          src="../images/Gift and toys.png"
          className="d-block w-100 carousel-img"
          alt="..."
        />
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <MDBCarouselCaption className="caption">
            <h1 className="slidercaption">
              As men get older,
              <br /> the toys get more expensive.
            </h1>
            <MDBBtn className="sliderbtn">Shop Now</MDBBtn>
          </MDBCarouselCaption>
        </div>
      </MDBCarouselItem> */
  }

  {
    /* <MDBCarouselItem itemId={3} className="overall">
        <img
          src="../images/Gift and toys.png"
          className=" w-100 carousel-img"
          alt="..."
        />
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <MDBCarouselCaption className="caption">
            <h1 className="slidercaption">
              As men get older,
              <br /> the toys get more expensive.
            </h1>
            <MDBBtn className="sliderbtn">Shop Now</MDBBtn>
          </MDBCarouselCaption>
        </div>
      </MDBCarouselItem> */
  }
}
