import React from "react";
import styled from "styled-components";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import BG from "@SVGs/bg.svg";
import Image from "next/image";
import U from "@SVGs/U.svg";
import ED from "@SVGs/ED.svg";
import EFH from "@SVGs/EFH.svg";
import HM from "@SVGs/HM.svg";
import Rs from "@SVGs/Rs.svg";
import SV from "@SVGs/SV.svg";

const Wrapper = styled.div`
  border-radius: 10px;
  margin-right: 20px;
  background: rgba(4, 189, 197, 0.04);
  width: 157.621px;
  height: 135.772px;
  position: relative;
`;
const TypeVacation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "right",
          position: "absolute",
          right: "0px",
        }}
      >
        <Image src={BG} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "20px",
        }}
      >
        <Image src={U} alt="" />
        <Typography
          color="#707A82"
          fontWeight={"500"}
          lineHeight={"40px"}
          fontSize={"14px"}
        >
          RiYadh Season
        </Typography>
      </div>
    </Wrapper>
  );
};

export default TypeVacation;
