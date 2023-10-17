"use client";

import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { EmblaOptionsType } from "embla-carousel-react";
import TypeOfVacationSCroll from "./Containers/EmblaCarousel";

const Wrapper = styled.div`
  padding-top: 0;
  background: #fff;
`;

const TypesOfVacation = ({ lng }: { lng: string }) => {
  const OPTIONS: EmblaOptionsType = {
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
    direction: lng === "en" ? "ltr" : "rtl",
  };
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <Wrapper
      style={{
        width: "100%",
        paddingTop: "65px",
        paddingBottom: "56px",
      }}
    >
      <Container maxWidth="xl" style={{ width: "100%" }}>
        <TypeOfVacationSCroll slides={SLIDES} options={OPTIONS} />
      </Container>
    </Wrapper>
  );
};

export default TypesOfVacation;
