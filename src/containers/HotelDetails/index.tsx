"use client";

import React, { useState } from "react";
import styled from "styled-components";
import {
  Typography,
  useTheme,
  useMediaQuery,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
  Rating,
} from "@mui/material";
import EmblaCarousel from "../EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import "@/containers/EmblaCarousel/css/main.css";
import checkin from "@SVGs/checkin.svg";
import checkout from "@SVGs/checkout.svg";
import Location from "@/components/Location";
import Room from "@/components/Room";
import Benefits from "@/components/Benefits";
import MiniLogo from "@/components/Icons/MiniLogo";
import HotelDialog from "./containers/HotelDialog";
import HotelDetailsPopup from "./containers/HotelDetails";

const Wrapper = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Headline = styled(Typography)`
  color: #07689f;
  font-size: 20px;
  font-weight: 600;
`;

const HeadlineLink = styled(Typography)`
  color: #07689f;
  font-size: 14px;
  font-weight: 400;
  text-decoration-line: underline;
  cursor: pointer;
`;

const HotelDetailsContainer = styled.div`
  height: auto;
  width: 100%;
  border-radius: 12px;
  padding-top: 23px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
`;

const CheckInOutWrapper = styled.div`
  background-color: rgba(49, 98, 159, 0.04);
  display: flex;
  height: 45px;
  align-items: center;
  padding-left: 14px;
  padding-right: 14px;
  width: 216px;
  margin-right: 20px;
  border-radius: 12px;
`;

const CheckInOutInfo = styled.div`
  padding-left: 10px;
`;
const TravelFromToName = styled(Typography)``;
const FromToTime = styled(Typography)``;

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const HotelDetails = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [openDialog, setOpenDialog] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <Wrapper style={{ padding: isMobile ? "24px" : "" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Headline variant="h3">Hotel details 🏩️</Headline>
        <HeadlineLink onClick={() => setOpenDetails(true)} variant="body1">
          Show all details
        </HeadlineLink>
      </div>
      <HotelDetailsContainer className="main">
        <section className="main__carousel">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section>
      </HotelDetailsContainer>
      <div>
        <Rating
          style={{ marginTop: "10px", direction: "ltr" }}
          defaultValue={3.5}
          precision={0.5}
          readOnly
        />
      </div>
      <Typography variant="h6">Histori Hotel - VIP</Typography>
      <Location />
      <div style={{ display: "flex" }}>
        <CheckInOutWrapper>
          <Image src={checkin} alt="checkin" />
          <CheckInOutInfo>
            <TravelFromToName style={{ fontSize: "10px" }} color="#A7A7A7">
              Check in
            </TravelFromToName>
            <div style={{ display: "flex" }}>
              <FromToTime style={{ fontSize: "12px" }} color="#323232">
                2022-08-22
              </FromToTime>
            </div>
          </CheckInOutInfo>
        </CheckInOutWrapper>
        <CheckInOutWrapper>
          <Image src={checkout} alt="checkout" />
          <CheckInOutInfo>
            <TravelFromToName style={{ fontSize: "10px" }} color="#A7A7A7">
              Check out
            </TravelFromToName>
            <div style={{ display: "flex" }}>
              <FromToTime style={{ fontSize: "12px" }} color="#323232">
                2022-08-22
              </FromToTime>
            </div>
          </CheckInOutInfo>
        </CheckInOutWrapper>
      </div>
      <Room />
      <Benefits />
      <div
        style={{
          paddingTop: "25px",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <Button
          component="label"
          variant="contained"
          endIcon={
            <div
              style={{
                paddingTop: "8px",
              }}
            >
              <MiniLogo />
            </div>
          }
          onClick={() => setOpenDialog(true)}
          href="#file-upload"
          style={{
            backgroundColor: "#346DB4",
            borderRadius: "12px",
            direction: "ltr",
          }}
        >
          <Typography
            color={"#fff"}
            textTransform={"none"}
            fontWeight={"400"}
            variant="body1"
          >
            Browse Hotels
          </Typography>
        </Button>
      </div>
      <HotelDialog open={openDialog} handleClose={() => setOpenDialog(false)} />
      <HotelDetailsPopup
        open={openDetails}
        handleClose={() => setOpenDetails(false)}
      />
    </Wrapper>
  );
};

export default HotelDetails;
