import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "0",
  },

  {
    value: 100,
    label: "1000",
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

export default function FilterRange() {
  return (
    <Box sx={{ width: 280, padding: "8px" }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
        sx={{ color: "#Dc3237" }}
      />
    </Box>
  );
}
