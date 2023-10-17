"use client";

import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { EmblaOptionsType } from "embla-carousel-react";
import DealsScroll from "./Containers/EmblaCarousel";

const Wrapper = styled.div`
  padding-bottom: 3rem;
  padding-top: 3rem;
`;

const Deals = ({ lng }: { lng: string }) => {
  const OPTIONS: EmblaOptionsType = {
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
    direction: lng === "en" ? "ltr" : "rtl",
  };
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <Wrapper>
      <Container maxWidth="xl" style={{ width: "100%" }}>
        <DealsScroll slides={SLIDES} options={OPTIONS} />
      </Container>
    </Wrapper>
  );
};

export default Deals;
