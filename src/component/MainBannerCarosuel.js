import React from "react";
import {
  MDBBtn,
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import "./MainBannerCarosuel.css";

export default function MainBannerCarosuel() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1} className="overall">
        <img
          src="../images/testimonial.png"
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
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2} className="overall">
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
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3} className="overall">
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
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
