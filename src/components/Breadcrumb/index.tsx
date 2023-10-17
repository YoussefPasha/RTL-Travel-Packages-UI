"use client";

import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { useTheme, useMediaQuery } from "@mui/material";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Separator from "./separator";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Breadcrumb({ lng }: { lng: string }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const breadcrumbs = [
    <Link underline="hover" key="1" href="/" onClick={handleClick}>
      <Typography color={"#4DCCB5"} variant="h6" fontWeight={"700"}>
        Home
      </Typography>
    </Link>,

    <Typography key="2" variant="h6" fontWeight={"500"} color="#000">
      Destination
    </Typography>,
  ];

  return (
    <Stack
      style={{
        height: "71px",
        backgroundColor: "#ECF9FF",
        padding: "24px 24px 24px 100px",
        paddingLeft: isMobile ? "10px" : "100px",
        paddingRight: isMobile ? "10px" : "100px",
      }}
      spacing={2}
    >
      <Breadcrumbs
        separator={<Separator style={{ marginTop: "10px" }} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
