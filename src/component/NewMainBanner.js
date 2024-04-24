import React from "react";

export default function App() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="5000">
            <img
              src="../images/web banner dino Theme.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-interval="5000">
            <img
              src="../images/web banner teddy Theme.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-interval="5000">
            <img
              src="../images/web banner Unicorn Theme.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}
