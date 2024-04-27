import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, Stack, TextField } from "@mui/material";
import Start from "./Start";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  "@media only screen and (min-width: 320px) and (max-width: 600px)": {
    width: "350px",
  },
};

export default function ReviewModal({ open, handleOpen, handleClose }) {
  const review = {
    background: "#fff",
    color: "#000",
    fontFamily: "Poppins",
  };
  const save = {
    background: "#dc3237",
    color: "#fff",
    fontFamily: "Poppins",
    "&:hover": {
      background: "#dc3237",
      color: "#fff",
    },
  };
  const cancel = {
    border: "1px solid #dc3237",
    color: "#dc3237",
    fontFamily: "Poppins",
    "&:hover": {
      border: "1px solid #dc3237",
      color: "#dc3237",
    },
  };

  return (
    <div>
      <Button onClick={handleOpen} className="mb-3" sx={review}>
        Write product review
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            variant="h5"
            component="h2"
          >
            Review
          </Typography>
          <hr />
          <br />
          <Start />
          <TextField
            multiline
            rows={3}
            // maxRows={8}
            label="Description*"
            fullWidth
          />
          <Stack
            spacing={2}
            direction="row"
            justifyContent="end"
            alignItems="center"
            className="mt-4"
          >
            <Button variant="contained" sx={save}>
              Save
            </Button>
            <Button variant="outlined" sx={cancel}>
              Cancel
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
