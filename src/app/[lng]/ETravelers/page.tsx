"use client";
import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Title = styled(Typography)`
  color: #4dccb5;
  font-family: Dubai;
  font-style: normal;
  font-weight: 700;
  line-height: 67px; /* 167.5% */
`;

const Desc = styled(Typography)`
  color: #333;
  text-align: justify;
  font-family: Dubai;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
`;

const ETravellers = () => {
  return (
    <div
      style={{
        marginTop: "100px",
        padding: "30px",
      }}
    >
      <Title variant="h3">travel a lot</Title>
      <Desc variant="h3">
        You can benefit from your experiences in travel, from your home!
      </Desc>
    </div>
  );
};

export default ETravellers;
