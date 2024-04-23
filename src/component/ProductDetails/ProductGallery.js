import React from "react";
import "./ProductGallery.css";

const ProductGallery = ({ name, images }) => {
  const imgs = document.querySelectorAll(".img-select a");
  const imgBtns = [...imgs];
  let imgId = 1;

  imgBtns.forEach((imgItem) => {
    imgItem.addEventListener("click", (event) => {
      event.preventDefault();
      imgId = imgItem.dataset.id;
      slideImage();
    });
  });

  function slideImage() {
    const displayWidth = document.querySelector(
      ".img-showcase img:first-child"
    ).clientWidth;

    document.querySelector(".img-showcase").style.transform = `translateX(${
      -(imgId - 1) * displayWidth
    }px)`;
  }

  window.addEventListener("resize", slideImage);

  return (
    <>
      <div className="card-wrappergellery">
        <div className="card">
          {/* <!-- card left --> */}
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                {images.length > 0
                  ? images.map((image) => (
                      <img
                        src={image}
                        alt={image}
                        className="galleryimage"
                        style={{
                          width: "100%",
                          display: "block",
                          borderRadius: "5px",
                        }}
                      />
                    ))
                  : Array.from(Array(5).keys()).map(() => (
                      <img
                        src="../images/dummy-image.jpg"
                        alt={name}
                        className="galleryimage"
                        style={{
                          width: "100%",
                          display: "block",
                          borderRadius: "5px",
                        }}
                      />
                    ))}
              </div>
              <div className="img-select">
                {images.length > 0
                  ? images.map((image, i) => (
                      <div className="img-item">
                        <a href="#" data-id={i + 1}>
                          <img
                            src={image}
                            alt={image}
                            style={{
                              width: "100%",
                              display: "block",
                              borderRadius: "5px",
                            }}
                          />
                        </a>
                      </div>
                    ))
                  : Array.from(Array(5).keys()).map((_, i) => (
                      <div className="img-item">
                        <a href="#" data-id={i + 1}>
                          <img
                            src="../images/dummy-image.jpg"
                            alt={name}
                            style={{
                              width: "100%",
                              display: "block",
                              borderRadius: "5px",
                            }}
                          />
                        </a>
                      </div>
                    ))}
              </div>
            </div>
            {/* <!-- card right --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductGallery;
