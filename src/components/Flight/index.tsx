"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import FLIGHTCOMPANY from "@IMAGES/flightCompany.png";
import { Typography } from "@mui/material";
import stroke from "@SVGs/stroke.svg";
import plane from "@SVGs/plane.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  direction: ltr;
`;

const CompanyFlight = styled.div`
  border-radius: 12px;
  background: rgba(49, 98, 159, 0.04);
  padding: 8px;
  width: 50px;
  height: 50px;
`;

const CompanyFlightInfo = styled.div`
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
`;

const TravelFromToName = styled(Typography)`
  color: rgba(15, 24, 48, 0.49);
  text-align: left;
  line-height: 16px;
  letter-spacing: 0.12px;
  text-transform: capitalize;
`;

const TravelFromToTime = styled(Typography)`
  color: #0f2d3f;
  text-align: right;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px; /* 77.778% */
  letter-spacing: 0.18px;
  text-transform: uppercase;
  display: flex;
`;

const TravelFromToTimeAMPM = styled(Typography)`
  color: #0f2d3f;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.1px;
  text-transform: uppercase;
`;

const FlightTimeEstimate = styled(Typography)`
  color: rgba(15, 24, 48, 0.8);
  line-height: 16px;
  letter-spacing: 0.1px;
  text-transform: capitalize;
`;

const PlaneToGo = () => (
  <div
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  >
    <Image style={{ width: "40%" }} src={stroke} alt="stroke" />
    <Image src={plane} alt="plane" />
    <Image style={{ width: "40%" }} src={stroke} alt="stroke" />
  </div>
);

const Flight = () => {
  return (
    <Wrapper>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <CompanyFlight>
          <Image
            width={30}
            height={30}
            src={FLIGHTCOMPANY}
            alt="FLIGHTCOMPANY"
          />
        </CompanyFlight>
        <CompanyFlightInfo>
          <TravelFromToName variant="body2">CAI</TravelFromToName>
          <div style={{ display: "flex" }}>
            <TravelFromToTime fontWeight={"700"}>05:45</TravelFromToTime>
            <TravelFromToTimeAMPM
              fontWeight={"400"}
              style={{ fontSize: "10px" }}
              variant="subtitle1"
            >
              AM
            </TravelFromToTimeAMPM>
          </div>
        </CompanyFlightInfo>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PlaneToGo />
        <div style={{ display: "flex" }}>
          <FlightTimeEstimate
            color={"rgba(15, 24, 48, 0.8)"}
            style={{ fontSize: "10px" }}
          >
            2 hours 12 mins -
          </FlightTimeEstimate>
          <Typography color={"#F4B53F"} style={{ fontSize: "10px" }}>
            1 Stop
          </Typography>
        </div>
      </div>
      <CompanyFlightInfo>
        <TravelFromToName variant="body2">CAI</TravelFromToName>
        <div style={{ display: "flex" }}>
          <TravelFromToTime fontWeight={"700"}>05:45</TravelFromToTime>
          <TravelFromToTimeAMPM
            fontWeight={"400"}
            style={{ fontSize: "10px" }}
            variant="subtitle1"
          >
            AM
          </TravelFromToTimeAMPM>
        </div>
      </CompanyFlightInfo>
    </Wrapper>
  );
};

export default Flight;
