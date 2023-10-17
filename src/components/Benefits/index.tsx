"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import boat from "@SVGs/Benefits/boat.svg";
import cardgames from "@SVGs/Benefits/cardgames.svg";
import serve from "@SVGs/Benefits/serve.svg";
import swim from "@SVGs/Benefits/swim.svg";
import wifi from "@SVGs/Benefits/wifi.svg";
import { Typography } from "@mui/material";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

const Container = styled.div`
  width: 39px;
  height: 39px;
  border-radius: 5.85px;
  background: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Benefits = () => {
  return (
    <Wrapper>
      <Container>
        <Image src={boat} alt={"boat"} />
      </Container>
      <Container>
        <Image src={cardgames} alt={"cardgames"} />
      </Container>
      <Container>
        <Image src={serve} alt={"serve"} />
      </Container>
      <Container>
        <Image src={swim} alt={"swim"} />
      </Container>
      <Container>
        <Image src={wifi} alt={"wifi"} />
      </Container>
      <Container>
        <Image src={boat} alt={"boat"} />
      </Container>
      <Container>
        <Image src={cardgames} alt={"cardgames"} />
      </Container>
      <Container>
        <Image src={serve} alt={"serve"} />
      </Container>
      <Container>
        <Image src={swim} alt={"swim"} />
      </Container>
      <Container>
        <Typography color={"#31629F"}>+5</Typography>
      </Container>
    </Wrapper>
  );
};

export default Benefits;
