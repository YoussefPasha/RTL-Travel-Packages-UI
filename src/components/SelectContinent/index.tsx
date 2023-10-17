"use client";

import { Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SelectedText = styled(Typography)`
  cursor: pointer;
  text-transform: uppercase;
  color: #000;
`;

const NotSelectedText = styled(Typography)`
  cursor: pointer;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.27);
  padding: 35px 0px 35px 35px;
  font-weight: 500;
`;

const GreenSelected = styled.div`
  width: 47px;
  height: 8px;
  background: #4dccb5;
`;

const SelectContinent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Wrapper style={{ width: "100%" }}>
      <div
        style={{
          paddingTop: isMobile ? "20px" : "5px",
          paddingLeft: "35px",
        }}
      >
        <GreenSelected />
        <SelectedText variant={isMobile ? "h2" : "h1"}>Asia</SelectedText>
      </div>
      <NotSelectedText
        style={{ paddingLeft: isMobile ? "15px" : "" }}
        variant={isMobile ? "h6" : "h4"}
      >
        Americas
      </NotSelectedText>
      <NotSelectedText
        style={{ paddingLeft: isMobile ? "15px" : "" }}
        variant={isMobile ? "h6" : "h4"}
      >
        Europe
      </NotSelectedText>
      <NotSelectedText
        style={{ paddingLeft: isMobile ? "15px" : "" }}
        variant={isMobile ? "h6" : "h4"}
      >
        AFrica
      </NotSelectedText>
    </Wrapper>
  );
};

export default SelectContinent;
