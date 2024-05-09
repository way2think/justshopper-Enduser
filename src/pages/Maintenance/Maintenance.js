import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./Maintenance.css"; // Import CSS file for styling

const Maintenance = () => {
  return (
    <div className="error-container container bg">
      <br />
      <dotlottie-player
        src="https://lottie.host/caa7403e-e7f2-4856-a0cc-9fb299eaadc0/rSyMtfAEJK.json"
        background="transparent"
        speed="1"
        style={{
          width: "300px",
          height: "300px",
          margin: "auto",
          "@media screen and (max-width: 768px)": {
            width: "200px",
            height: "200px",
          },
        }}
        loop
        autoplay
      ></dotlottie-player>
      <h1>Under Maintenance</h1>
      <p>
        We're currently renovating our website to bring you an even better
        experience. Thanks for your support and patience!"
      </p>
    </div>
  );
};

export default Maintenance;
