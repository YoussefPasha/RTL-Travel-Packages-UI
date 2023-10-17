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

const Terms = styled(Typography)`
  color: #333;
  text-align: justify;
  font-family: Dubai;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
`;

const TermsAndConditions = () => {
  return (
    <div
      style={{
        marginTop: "100px",
        padding: "30px",
      }}
    >
      <Title variant="h3">Terms And Conditions</Title>
      <Terms variant="h3">Welcome to OFFTO</Terms>
    </div>
  );
};

export default TermsAndConditions;
