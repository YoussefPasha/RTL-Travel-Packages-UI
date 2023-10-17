"use client";
import OfferDetails from "@/Pages/offerDetails";
import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const ETravellers = ({ params: { lng } }: any) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      style={{
        marginTop: isMobile ? "55px" : "100px",
        padding: isMobile ? "0px" : "30px",
        backgroundColor: "#fff",
      }}
    >
      <OfferDetails lng={lng} />
    </div>
  );
};

export default ETravellers;
