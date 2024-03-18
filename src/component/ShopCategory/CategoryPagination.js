import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function CategoryPagination() {
  return (
    <Stack spacing={2}>
      <Pagination
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#000",
        }}
        count={5}
        renderItem={(item) => (
          <PaginationItem
            sx={{
              background: "#dc3237",
              color: "#fff",
              "&:hover": {
                bgcolor: "#aaa",
                color: "#Dc3237",
              },
            }}
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
