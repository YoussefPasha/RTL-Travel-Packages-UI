"use client";
import React from "react";
import {
  Grid,
  useTheme,
  useMediaQuery,
  Hidden,
  Container,
} from "@mui/material";
import FlightDetails from "@/containers/FlightDetails";
import OfferPriceAndInfo from "@/containers/OfferPriceAndInfo";
import HotelDetails from "@/containers/HotelDetails";
import Activities from "@/containers/Activities";
import OfferCheckout from "@/containers/OfferCheckout";

function OfferDetails({ lng }: { lng: string }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const GapLine = () => (
    <div
      style={{
        width: isMobile ? "100%" : "90%",
        height: "10px",
        background: "#F5F7F9",
      }}
    />
  );

  return (
    <Grid
      container
      sx={{
        marginLeft: isMobile ? "0px" : "10%",
        marginRight: isMobile ? "0px" : "10%",
        display: "flex",
        flexDirection: isMobile ? "column-reverse" : "row",
      }}
    >
      <Grid item xs={12} sm={6}>
        <FlightDetails lng={lng} />
        <GapLine />
        <HotelDetails />
        <GapLine />
        <Activities />
        <Hidden mdUp>
          <OfferCheckout />
        </Hidden>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Container
          style={{ minWidth: "350px", maxWidth: "650px" }}
          sx={{ padding: 0, margin: 0 }}
        >
          <OfferPriceAndInfo />
          {isMobile && <GapLine />}
          <Hidden smDown>
            <OfferCheckout />
          </Hidden>
        </Container>
      </Grid>
    </Grid>
  );
}

export default OfferDetails;
