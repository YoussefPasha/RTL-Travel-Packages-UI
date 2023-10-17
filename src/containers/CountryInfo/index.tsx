"use client";

import ContinentImage from "@/components/ContinentImage";
import { useMediaQuery, useTheme, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import DestinationInfo from "../DestinationInfo";
import BGCountry from "@SVGs/BGCountry.svg";
import Image from "next/image";
import CountryOffersItem from "@/components/CountryWithOffersITem";
import ListScrollHorizontal from "@/components/ListScrollHorizontal";
import CountryAccordionComponent from "@/components/Accordion/CountryAccordion";

const Wrapper = styled.div`
  margin: 20px 100px 100px 100px;
  display: flex;
  flex-direction: column;
`;

const OptionsAndSelectionsWrapper = styled.div`
  margin-top: 40px;
  position: relative;
  display: flex;
  height: 100%;
`;

const CountryInfo = ({ lng }: { lng: string }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Wrapper
      style={{
        marginLeft: isMobile ? "0px" : "",
        marginRight: isMobile ? "0px" : "",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}
      >
        <ContinentImage
          Desc={"Explore the beauty of ASIA "}
          ContinentName={"Turkey"}
        />
        <OptionsAndSelectionsWrapper>
          <div>
            <DestinationInfo
              Title={"Turkey"}
              Content={
                "Istanbul, Islampol, Astana and Constantinople. Name it what you want, and choose the nickname you like, but everyone agrees that it is the paradise of the earth, the place where the East and the West, authenticity and modernity! Mestel Istanbul, Istanbul, Astana and Constantinople. Name it what you want, and choose the nickname you like, but everyone agrees that it is the paradise of the earth, the place where the East and the West, authenticity and modernity! Istanbul, Islampol, Astana and Constantinople. Name it what you want, and choose the nickname you like, but everyone agrees that it is the paradise of the earth, the place where the East and the West, authenticity and modernity! Istanbul, Islampol, Astana and Constantinople. Name it what you want, and choose the nickname you like, but everyone agrees that it is the paradise of the earth, the place where the East and the West, authenticity and modernity! Istanbul, Islampol, Astana and Constantinople."
              }
              haveGreenDiv
              variant={"h1"}
            />
          </div>
          {isMobile ? (
            ""
          ) : (
            <Image
              style={{ position: "absolute", top: 0, zIndex: -1, right: -100 }}
              src={BGCountry}
              alt="BGCountry"
            />
          )}
        </OptionsAndSelectionsWrapper>
      </div>
      <div style={{ marginLeft: isMobile ? "20px" : "", marginTop: "35px" }}>
        <ListScrollHorizontal
          Title={"Turkey's best destinations"}
          ListComponent={CountryOffersItem}
          country={true}
          lng={lng}
        />
        <Typography
          style={{ marginTop: "35px", marginBottom: "30px" }}
          textTransform={"uppercase"}
          variant="h3"
          color={"#2B679B"}
        >
          Question and Answer
        </Typography>
        <CountryAccordionComponent lng={lng} />
      </div>
    </Wrapper>
  );
};

export default CountryInfo;
