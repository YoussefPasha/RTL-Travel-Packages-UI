"use client";

import React from "react";
import styled from "styled-components";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { TypographyVariant } from "@mui/material";

const Wrapper = styled.div`
  padding: 30px 100px 10px 100px;
`;

const Green = styled.div`
  width: 47px;
  height: 8px;
  background: #4dccb5;
`;

interface DestinationInfoProps {
  Title?: string;
  Content?: string;
  variant?: TypographyVariant; // Replace with the actual type for TypographyVariant
  haveGreenDiv?: boolean;
}

const DestinationInfo = ({ Title, Content, variant, haveGreenDiv }: DestinationInfoProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Wrapper
      style={{
        padding: isMobile
          ? "0px 30px 30px 30px"
          : haveGreenDiv
          ? "210px 30px 30px 30px"
          : "",
      }}
    >
      {haveGreenDiv && <Green />}
      <Typography variant={variant ? variant : "h4"} fontWeight={"700"}>
        {Title}
      </Typography>
      <Typography variant="subtitle1">{Content}</Typography>
    </Wrapper>
  );
};

export default DestinationInfo;
