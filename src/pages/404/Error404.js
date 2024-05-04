import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./Error404.css"; // Import CSS file for styling

const Error404 = () => {
  return (
    <div className="error-container container">
      <dotlottie-player
        src="https://lottie.host/868079c5-3462-4768-b051-91440754d7f8/0kAdr1jRju.json"
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
      <h1>404 - Page Not Found</h1>
      <p>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default Error404;
