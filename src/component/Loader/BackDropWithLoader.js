import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";

export default function BackDropWithLoader({ message }) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
    >
      <CircularProgress color="inherit" style={{ position: "absolute" }} />

      {message && (
        <>
          <Typography style={{ marginTop: "60px" }}>
            Your payment is loading, Please wait!!!
          </Typography>
        </>

        // <Typography>{message}</Typography>
      )}
    </Backdrop>
  );
}
