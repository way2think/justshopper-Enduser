import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function StarRating({ rating, setRating }) {
  return (
    <Stack spacing={1}>
      <label>Start Rating:</label>
      <Rating
        name="half-rating"
        value={rating}
        precision={1}
        sx={{ top: "2px" }}
        onChange={(e) => setRating(+e.target.value)}
      />
    </Stack>
  );
}
