import React, { useEffect } from "react";
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

  useEffect(() => {
    const imgSelect = document.getElementById("img-select");
    let isDragging = false;
    let startX;
    let scrollLeft;

    imgSelect.addEventListener("mousedown", (e) => {
      isDragging = true;
      imgSelect.style.cursor = "grabbing";
      startX = e.pageX - imgSelect.offsetLeft;
      scrollLeft = imgSelect.scrollLeft;
    });

    imgSelect.addEventListener("mouseleave", () => {
      isDragging = false;
      imgSelect.style.cursor = "grab";
    });

    imgSelect.addEventListener("mouseup", () => {
      isDragging = false;
      imgSelect.style.cursor = "grab";
    });

    imgSelect.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - imgSelect.offsetLeft;
      const walk = (x - startX) * 3; // Adjust scrolling speed
      imgSelect.scrollLeft = scrollLeft - walk;
    });
  }, [window]);

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
              <div className="img-scroll-container">
                <div className="img-scroll" id="img-scroll">
                  <div className="img-select" id="img-select">
                    {images.length > 0
                      ? images.map((image, i) => (
                          <div className="img-item">
                            <a href="#" data-id={i + 1}>
                              <img
                                src={image}
                                alt={image}
                                style={{
                                  width: "100%",
                                  height: "100px",
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
              </div>
              {/* <div className="img-select">
                <div className="img-item">
                  <a href="#" data-id="1">
                    <img
                      src="../images/biscuit.jpg"
                      alt="shoe image"
                      style={{
                        width: "100%",
                        display: "block",
                        borderRadius: "5px",
                      }}
                    />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id="2">
                    <img
                      src="../images/biscuit.jpg"
                      alt="shoe image"
                      style={{
                        width: "100%",
                        display: "block",
                        borderRadius: "5px",
                      }}
                    />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id="3">
                    <img
                      src="../images/biscuit.jpg"
                      alt="shoe image"
                      style={{
                        width: "100%",
                        display: "block",
                        borderRadius: "5px",
                      }}
                    />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id="4">
                    <img
                      src="../images/biscuit.jpg"
                      alt="shoe image"
                      style={{
                        width: "100%",
                        display: "block",
                        borderRadius: "5px",
                      }}
                    />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id="5">
                    <img
                      src="../images/biscuit.jpg"
                      alt="shoe image"
                      style={{
                        width: "100%",
                        display: "block",
                        borderRadius: "5px",
                      }}
                    />
                  </a>
                </div>
              </div> */}
            </div>
            {/* <!-- card right --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductGallery;
