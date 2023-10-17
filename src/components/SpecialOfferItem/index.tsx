import React from "react";
import styled from "styled-components";
import ImageItem from "@IMAGES/ItemImage.png";
import Image from "next/image";
import { Container, Typography } from "@mui/material";
import Special from "../Icons/Special";
const Wrapper = styled.div`
  border-radius: 10px;
  padding-right: 50px;
`;

const SpecialOfferItem = () => {
  return (
    <Wrapper>
      <Container
        style={{
          borderRadius: "0px 0px 10px 10px",
          borderBottom: "10px solid #4DCCB5",
          backgroundColor: "#fff",
          position: "relative",
          padding: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "30%",
            height: "40px",
            backgroundColor: "#fff",
            top: "20px",
            borderRadius: "0px 1000px 1000px 0px",
            display: "flex",
          }}
        >
          <div style={{ marginLeft: "10px", marginTop: "2px" }}>
            <Special />
          </div>
          <Typography
            fontWeight={"700"}
            textAlign={"right"}
            variant="body1"
            lineHeight="21px"
            style={{
              padding: "12px 10px 10px 4px",
              color: "#3965A4",
            }}
            textTransform={"uppercase"}
          >
            Special
          </Typography>
        </div>
        <Image
          style={{
            height: "50%",
            width: "100%",
            borderRadius: "10px 10px 0px 0px",
          }}
          priority
          src={ImageItem}
          alt="ImageItem"
        />
        <Typography textAlign={"left"} variant="h6" style={{ padding: "6px" }}>
          MALDIVES
        </Typography>
        <Typography
          fontWeight={"300"}
          textAlign={"left"}
          variant="body2"
          lineHeight="21px"
          textTransform={"uppercase"}
          style={{ padding: "10px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Typography>
        <Typography
          fontWeight={"700"}
          textAlign={"right"}
          variant="body1"
          lineHeight="21px"
          style={{
            padding: "24px",
            textDecorationLine: "underline",
            color: "#3965A4",
          }}
          textTransform={"uppercase"}
        >
          Browse offers
        </Typography>
      </Container>
    </Wrapper>
  );
};

export default SpecialOfferItem;
