"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Typography, useTheme, useMediaQuery } from "@mui/material";
import BG from "@IMAGES/bg.png";
import MiniLogo from "../Icons/MiniLogo";

const Wrapper = styled.div`
  position: relative;
  width: 424px;
  height: 558px;
  flex-shrink: 0;
  border-radius: 10px;
`;

const InfoWrapper = styled.div`
  position: absolute;
  bottom: 57px;
  left: 45px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const BtnLinkTo = styled.div`
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
  width: 47px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

interface ContinentImageProps {
  ContinentName: string;
  Desc: string;
}

const ContinentImage = ({ ContinentName, Desc }: ContinentImageProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Wrapper style={{ height: "auto" }}>
      <Image
        style={{
          width: isMobile ? "80%" : "100%",
          height: isMobile ? "35%" : "100%",
          borderRadius: "10px",
          marginLeft: isMobile ? "8%" : "",
        }}
        src={BG}
        alt="Continent"
      />
      {isMobile ? (
        ""
      ) : (
        <InfoWrapper>
          <div>
            <Typography variant="h2">{ContinentName}</Typography>
            <Typography variant="subtitle1">{Desc}</Typography>
          </div>
          <BtnLinkTo>
            <MiniLogo />
          </BtnLinkTo>
        </InfoWrapper>
      )}
    </Wrapper>
  );
};

export default ContinentImage;
