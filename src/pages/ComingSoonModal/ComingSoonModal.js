import * as React from "react";
import Box from "@mui/material/Box";

import "./ComingSoonModal.css";

export default function ComingSoonModal() {
  return (
    <div>
      <Box>
        <img
          src="../images/Websitecomingsoon.png"
          alt="coming soon"
          className="comingsoonwebsite"
        />
        <img
          src="../images/Add a subheading.jpg"
          alt="coming soon"
          className="comingsoonmobile"
        />
      </Box>
    </div>
  );
}
