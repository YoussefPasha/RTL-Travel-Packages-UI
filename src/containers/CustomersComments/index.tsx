"use client";

import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { EmblaOptionsType } from "embla-carousel-react";
import CustomersOpinionsScroll from "./Containers/EmblaCarousel";

const Wrapper = styled.div`
  background: #fff;
  margin-bottom: 3rem;
  flex-shrink: 0;
`;

const CustomerOpinion = ({ lng }: { lng: string }) => {
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
        <CustomersOpinionsScroll slides={SLIDES} options={OPTIONS} />
      </Container>
    </Wrapper>
  );
};

export default CustomerOpinion;
