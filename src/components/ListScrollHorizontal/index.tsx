"use client";

import { Container, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { EmblaOptionsType } from "embla-carousel-react";
import ListScroll from "./Containers/EmblaCarousel";

const Wrapper = styled.div`
  padding: 20px 0px 0px 40px;
`;

interface ListScrollHorizontalProps {
  Title: string;
  ListComponent: React.FC<any>;
  country?: boolean;
  offer?: boolean;
  lng?: string;
}

const ListScrollHorizontal = ({
  Title,
  ListComponent,
  country,
  offer,
  lng,
}: ListScrollHorizontalProps) => {
  const OPTIONS: EmblaOptionsType = {
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
    direction: lng === "en" ? "ltr" : "rtl",
  };
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Wrapper style={{ paddingLeft: country ? "0px" : "" }}>
      <Container
        maxWidth="xl"
        style={{
          width: country ? "100%" : isMobile ? "85vw" : "55vw",
          padding: 0,
        }}
        sx={{ padding: 0, margin: 0 }}
      >
        <ListScroll Title={Title} slides={SLIDES} options={OPTIONS}>
          <ListComponent offer={offer} country={country} />
        </ListScroll>
      </Container>
    </Wrapper>
  );
};

export default ListScrollHorizontal;
