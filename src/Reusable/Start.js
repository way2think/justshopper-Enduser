import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function Start() {
  return (
    <Stack spacing={1}>
      <label>Start Rating:</label>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    </Stack>
  );
}
