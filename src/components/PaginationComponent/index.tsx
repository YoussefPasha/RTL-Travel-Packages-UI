import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

export default function PaginationComponent() {
  return (
    <Stack spacing={2}>
      <Pagination
        style={{ direction: "ltr" }}
        count={10}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
}
