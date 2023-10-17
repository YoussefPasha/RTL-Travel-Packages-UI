"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import BG from "@IMAGES/bg.png";
import love from "@SVGs/OfferPriceAndInfo/love.svg";
import options from "@SVGs/OfferPriceAndInfo/options.svg";
import back from "@SVGs/OfferPriceAndInfo/back.svg";
import { Typography, useMediaQuery, useTheme } from "@mui/material";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  height: 240px;
  padding-right: 10%;
`;

const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(10, 19, 32, 0.71) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 12px;
`;

const Info = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(41, 27, 27, 0.2);
  backdrop-filter: blur(12.5px);
  width: 90%;
  height: 30%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ImageCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Wrapper style={{ paddingRight: isMobile ? "0%" : "10%" }}>
      <GradientBackground style={{ width: isMobile ? "100%" : "90%" }} />
      <Image
        objectFit="cover"
        src={BG}
        alt={"BG"}
        style={{ height: "240px", width: "100%" }}
      />
      <Image
        style={{ position: "absolute", right: 100, marginTop: "22px" }}
        src={love}
        alt={"love"}
      />
      <Image
        style={{ position: "absolute", right: 60, marginTop: "22px" }}
        src={options}
        alt={"options"}
      />
      <Image
        style={{ position: "absolute", left: 24, marginTop: "22px" }}
        src={back}
        alt={"back"}
      />
      <Info style={{ width: isMobile ? "100%" : "90%" }}>
        <div>
          <Typography
            color="#fff"
            variant="body2"
            fontWeight={"700"}
            textTransform={"uppercase"}
          >
            Kuwait
          </Typography>
          <Typography color="#fff" variant="subtitle2" fontWeight={"300"}>
            Fri. 15/08/2022
          </Typography>
        </div>
        <div>
          <Typography
            color="#fff"
            variant="body2"
            fontWeight={"700"}
            textTransform={"uppercase"}
          >
            Istanbul
          </Typography>
          <Typography color="#fff" variant="subtitle2" fontWeight={"300"}>
            Mon. 15/08/2022
          </Typography>
        </div>
      </Info>
    </Wrapper>
  );
};

export default ImageCard;
