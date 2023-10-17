"use client";

import React from "react";
import  styled  from "styled-components";
import roomImage from "@IMAGES/roomImage.png";
import Image from "next/image";
import { Typography } from "@mui/material";
import info from "@SVGs/info.svg";

const Wrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const Room = () => {
  return (
    <Wrapper>
      <div style={{ display: "flex" }}>
        <Image
          style={{ borderRadius: "12px" }}
          width={100}
          height={75}
          src={roomImage}
          alt="roomImage"
        />
        <div style={{ padding: "10px" }}>
          <Typography fontWeight={"500"}>Single room - Sea view</Typography>
          <div style={{ display: "flex" }}>
            <Typography variant="subtitle2" fontWeight={"400"}>
              stay only . Non refundable
            </Typography>
            <Image src={info} alt={info} style={{ marginLeft: "5px" }} />
          </div>
        </div>
      </div>
      <div
        style={{ display: "flex", alignItems: "end", paddingBottom: "10px" }}
      >
        <Typography
          variant="body2"
          style={{
            textDecorationLine: "underline",
          }}
          color="#07689F"
          fontWeight={"600"}
        >
          Change room
        </Typography>
      </div>
    </Wrapper>
  );
};

export default Room;
