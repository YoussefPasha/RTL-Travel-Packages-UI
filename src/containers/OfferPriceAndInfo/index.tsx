"use client";

import React from "react";
import { Typography, useTheme, useMediaQuery, Container } from "@mui/material";
import styled from "styled-components";
import ImageCard from "./components/ImageCard";
import Image from "next/image";
import people from "@SVGs/OfferPriceAndInfo/people.svg";
import date from "@SVGs/OfferPriceAndInfo/date.svg";

const Wrapper = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 10%;
`;

const DataWrapper = styled.div`
  background-color: rgba(49, 98, 159, 0.04);
  display: flex;
  height: 48px;
  align-items: center;
  padding-left: 14px;
  padding-right: 14px;
  width: 186px;
  margin-right: 5px;
  border-radius: 12px;
`;

const DataInfo = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

const TravelFromToName = styled(Typography)``;

const OfferPriceAndInfo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Wrapper
      style={{
        paddingRight: isMobile ? "0px" : "",
        paddingTop: isMobile ? "0px" : "",
      }}
    >
      <ImageCard />
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "24px",
          width: isMobile ? "100%" : "90%",
        }}
      >
        <DataWrapper>
          <Image src={date} alt="date" />
          <DataInfo>
            <TravelFromToName
              color={"#07689F"}
              style={{ fontSize: "14px" }}
              variant="body1"
              fontWeight={"600"}
            >
              Change date
            </TravelFromToName>
          </DataInfo>
        </DataWrapper>
        <DataWrapper>
          <Image src={people} alt="people" />
          <DataInfo>
            <TravelFromToName
              variant="body1"
              fontWeight={"600"}
              style={{ fontSize: "14px" }}
              color="#A7A7A7"
            >
              2 adult, 1 infant
            </TravelFromToName>
          </DataInfo>
        </DataWrapper>
      </Container>
    </Wrapper>
  );
};

export default OfferPriceAndInfo;
