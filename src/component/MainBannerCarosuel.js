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
          className="d-block w-100 "
          alt="..."
        />
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
          <MDBCarouselCaption className="caption">
            <h1 className="slidercaption">
              As men get older,
              <br /> the toys get more expensive.
            </h1>

            {/* <p>Nulla vitae elit libero, a phareStra augue mollis interdum.</p> */}
            <MDBBtn className="sliderbtn">Shop Now</MDBBtn>
          </MDBCarouselCaption>
        </div>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2} className="overall">
        <img
          src="../images/Gift and toys.png"
          className="d-block w-100 "
          alt="..."
        />
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
          <MDBCarouselCaption className="caption">
            <h1 className="slidercaption">
              As men get older,
              <br /> the toys get more expensive.
            </h1>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            <MDBBtn className="sliderbtn">Shop Now</MDBBtn>
          </MDBCarouselCaption>
        </div>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3} className="overall">
        <img
          src="../images/Gift and toys.png"
          className="d-block w-100 "
          alt="..."
        />
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
          <MDBCarouselCaption className="caption">
            <h1 className="slidercaption">
              As men get older,
              <br /> the toys get more expensive.
            </h1>
            {/* <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
            <MDBBtn className="sliderbtn">Shop Now</MDBBtn>
          </MDBCarouselCaption>
        </div>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
