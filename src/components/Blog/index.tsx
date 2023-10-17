import Image from "next/image";
import React from "react";
import styled from "styled-components";
import IMG from "@IMAGES/Blog/1.png";
import { Typography, useTheme, useMediaQuery } from "@mui/material";
import ScrollRight from "../Icons/scrollRight";
import ScrollLeft from "../Icons/scrollLeft";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding-right: 5%;
`;

const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 95%;
  height: 100%;
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0.87) 0%,
    rgba(0, 0, 0, 0.59) 58.3%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 12px;
`;

const Blog = ({ lng }: { lng: string }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Wrapper style={{ paddingRight: isMobile ? "0px" : "5%" }}>
      <GradientBackground style={{ width: isMobile ? "100%" : "95%" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          position: "absolute",
          bottom: 0,
          padding: isMobile ? "20px" : "40px",
        }}
      >
        <div
          style={{
            width: isMobile ? "60%" : "70%",
          }}
        >
          <Typography
            textOverflow={"ellipsis"}
            variant="h3"
            fontWeight={"700"}
            color="#FFF"
            whiteSpace={"nowrap"}
          >
            Get to know of to
          </Typography>
          <Typography
            color="#FFF"
            fontWeight={"300"}
            lineHeight={"18px"}
            variant="body2"
            textOverflow={"ellipsis"}
            overflow={"hidden"}
          >
            Offto is the first specialized Arab platform that offers all kinds
            of ready-made travel packages "Ready Made Packages" Which are
            designed by travelers with real travel experiences ...
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: isMobile ? "0px" : "20px",
          }}
        >
          <Typography
            lineHeight={"18px"}
            variant="body2"
            fontWeight={"300"}
            color="#fff"
            style={{ paddingRight: "10px" }}
          >
            Read More
          </Typography>
          {lng === "en" ? <ScrollRight /> : <ScrollLeft />}
        </div>
      </div>
      <Image style={{ width: "100%", height: "100%" }} src={IMG} alt={"IMG"} />
    </Wrapper>
  );
};

export default Blog;
