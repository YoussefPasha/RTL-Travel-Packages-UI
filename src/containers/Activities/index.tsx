"use client";

import { Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Activity from "./components/Activity";

const Wrapper = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Headline = styled(Typography)`
  color: #07689f;
  font-size: 20px;
  font-weight: 600;
`;

const GapLine = styled.div`
  height: 1px;
  width: 100%;
  background: rgba(7, 104, 159, 0.09);
  margin-top: 14px;
  margin-bottom: 14px;
`;

const Activities = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Wrapper style={{ padding: isMobile ? "24px" : "" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
        }}
      >
        <Headline variant="h3">Activities 🛝️</Headline>
      </div>
      <Activity />
      <GapLine />
      <Activity />
      <GapLine />
      <Activity />
    </Wrapper>
  );
};

export default Activities;
