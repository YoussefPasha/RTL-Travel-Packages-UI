"use client";

import React from "react";
import styled from "styled-components";
import {
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Hidden,
} from "@mui/material";
import MiniLogo from "@/components/Icons/MiniLogo";
import HandGif from "@/components/Icons/WhoWeAreGifs/HandIcon";
import ClockGif from "@/components/Icons/WhoWeAreGifs/ClockIcon";
import DocumentGif from "@/components/Icons/WhoWeAreGifs/DocumentIcon";

const Wrapper = styled.div`
  background: #fff;
  margin-bottom: 3rem;
  flex-shrink: 0;
`;
const WhyWeARE = ({ lng }: { lng: string }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Wrapper
      style={{
        width: isMobile ? "100vw" : "98.9vw",
        padding: "20px",
        paddingTop: "65px",
        paddingBottom: "56px",
      }}
    >
      <Grid
        container
        style={{
          paddingLeft: isMobile ? "0px" : isLg ? "10%" : "0px",
          paddingRight: isMobile ? "0px" : isLg ? "5%" : "0px",
        }}
      >
        <Grid item xs={12} sm={3}>
          <Hidden smDown>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "right",
                paddingRight: "40px",
                transform: lng === "en" ? "" : "rotate(180deg)",
              }}
            >
              <MiniLogo width={45} height={57} />
              <MiniLogo width={56} height={76} />
            </div>
          </Hidden>
          <Typography
            textTransform={"uppercase"}
            fontWeight={"700"}
            color="#2B679B"
            lineHeight={"51px"}
            variant={isLg ? "h1" : "h3"}
          >
            Why we are different?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "row" : "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "row" : "column",
                alignItems: "center",
              }}
            >
              <div style={{ padding: !isMobile ? "0px" : "18px" }}>
                <HandGif />
              </div>
            </div>
            <div>
              <Typography
                textTransform={"uppercase"}
                fontWeight={"700"}
                color="#4DCCB5"
                lineHeight={isMobile ? "" : "51px"}
                variant="h6"
              >
                Experience Seller
              </Typography>
              <Typography
                style={{ width: isMobile ? "auto" : "251px" }}
                lineHeight={isMobile ? "18px" : "24px"}
                variant="body2"
              >
                All packages are designed by professional travellers, and we
                will save you a lot of time and effort.
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "row" : "column",
              alignItems: "center",
            }}
          >
            <div style={{ padding: !isMobile ? "0px" : "18px" }}>
              <ClockGif />
            </div>
            <div>
              <Typography
                textTransform={"uppercase"}
                fontWeight={"700"}
                color="#4DCCB5"
                lineHeight={isMobile ? "" : "51px"}
                variant="h6"
              >
                Instantly Booking
              </Typography>
              <Typography
                style={{ width: isMobile ? "auto" : "251px" }}
                lineHeight={isMobile ? "18px" : "24px"}
                variant="body2"
              >
                No more calls and visits, book and pay online, get your
                Reservation immediately.
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "row" : "column",
              alignItems: "center",
            }}
          >
            <div style={{ padding: !isMobile ? "0px" : "18px" }}>
              <DocumentGif />
            </div>
            <div>
              <Typography
                textTransform={"uppercase"}
                fontWeight={"700"}
                color="#4DCCB5"
                lineHeight={isMobile ? "" : "51px"}
                variant="h6"
              >
                Different Payments
              </Typography>
              <Typography
                style={{ width: isMobile ? "auto" : "251px" }}
                lineHeight={isMobile ? "18px" : "24px"}
                variant="body2"
              >
                We offer different payment methods, local and global, and a very
                high security payment gateway.
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default WhyWeARE;
