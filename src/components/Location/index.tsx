"use client";
import React from "react";
import { styled } from "styled-components";
import location from "@SVGs/location.svg";
import Image from "next/image";
import { Typography } from "@mui/material";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  padding-top: 5px;
`;

const Location = () => {
  return (
    <Wrapper>
      <Image src={location} alt="location" />
      <div style={{ display: "flex", paddingLeft: "5px" }}>
        <Typography color={"rgba(17, 36, 64, 0.30)"} variant="subtitle2">
          Istanbul fateh, atnbul mall.
        </Typography>
        <Typography color={"rgba(17, 36, 64, 0.82)"} variant="subtitle2">
          45 km from the center
        </Typography>
      </div>
    </Wrapper>
  );
};

export default Location;
