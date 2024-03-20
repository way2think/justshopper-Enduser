import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loaderpage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <CircularProgress sx={{ color: "#dc3237" }} />
    </Box>
  );
}
