import React from "react";
import "./ProductGallery.css";

const ProductGallery = () => {
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
                <img src="../images/biscuit.jpg" alt="shoe image" />
                <img src="../images/biscuit.jpg" alt="shoe image" />
                <img src="../images/biscuit.jpg" alt="shoe image" />
                <img src="../images/biscuit.jpg" alt="shoe image" />
                <img src="../images/biscuit.jpg" alt="shoe image" />
              </div>
              <div className="img-select">
                <div className="img-item">
                  <a href="#" data-id="1">
                    <img src="../images/biscuit.jpg" alt="shoe image" />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id="2">
                    <img src="../images/biscuit.jpg" alt="shoe image" />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id="3">
                    <img src="../images/biscuit.jpg" alt="shoe image" />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id="4">
                    <img src="../images/biscuit.jpg" alt="shoe image" />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id="5">
                    <img src="../images/biscuit.jpg" alt="shoe image" />
                  </a>
                </div>
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
