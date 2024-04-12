import { TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledQuantityField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    color: theme.palette.primary.main, // Set text color to red
    borderRadius: "4px",
    border: `1px solid ${theme.palette.primary.main}`, // Add red border
    padding: theme.spacing(1), // Add padding for spacing
    "& .MuiInputBase-input": {
      textAlign: "center", // Center align the text
      maxWidth: "30px", // Restrict input field width
    },
  },
  "& button": {
    padding: "4px", // Adjust button padding for better fit
    borderRadius: "4px", // Match border radius of the text field
    backgroundColor: theme.palette.primary.main, // Set button background to red
    color: "white", // Set button text color to white
    "&:hover": {
      backgroundColor: theme.palette.primary.dark, // Button hover effect
    },
  },
}));

const ProductQuantity = ({ value, onChange }) => (
  <StyledQuantityField
    type="number"
    label="" // Remove default label
    value={value}
    onChange={onChange}
    InputLabelProps={{ shrink: true }}
    variant="filled"
    inputProps={{ min: 0 }}
  />
);

export default ProductQuantity;
