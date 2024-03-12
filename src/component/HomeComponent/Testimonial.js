import React from "react";
import { Stack } from "@mui/material";

import "./Testimonial.css";

const Testimonial = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        className="maintestimonial"
      >
        <h3 className="testimonialhead">What Client Say</h3>
        <p className="testimonialdesc">Love is a letter on pink stationery</p>
      </Stack>
      <section class="testimonial text-center">
        <div class="container">
          {/* <div class="heading white-heading">What Client Say</div> */}
          <div
            id="testimonial4"
            class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
            data-ride="carousel"
            data-pause="hover"
            data-interval="5000"
            data-duration="2000"
          >
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <div class="testimonial4_slide">
                  <img
                    src="https://i.ibb.co/8x9xK4H/team.jpg"
                    class="img-circle img-responsive"
                  />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.{" "}
                  </p>
                  <h4>Client 1</h4>
                </div>
              </div>
              <div class="carousel-item">
                <div class="testimonial4_slide">
                  <img
                    src="https://i.ibb.co/8x9xK4H/team.jpg"
                    class="img-circle img-responsive"
                  />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.{" "}
                  </p>
                  <h4>Client 2</h4>
                </div>
              </div>
              <div class="carousel-item">
                <div class="testimonial4_slide">
                  <img
                    src="https://i.ibb.co/8x9xK4H/team.jpg"
                    class="img-circle img-responsive"
                  />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.{" "}
                  </p>
                  <h4>Client 3</h4>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#testimonial4"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a
              class="carousel-control-next"
              href="#testimonial4"
              data-slide="next"
            >
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
