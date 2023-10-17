import React from "react";
import styled from "styled-components";
import ImageItem from "@IMAGES/ItemImage.png";
import Image from "next/image";
import { Container, Typography } from "@mui/material";
import MiniLogo from "../Icons/MiniLogo";
import UserImage from "@IMAGES/userImage.png";

const Wrapper = styled.div`
  border-radius: 10px;
  /* padding-right: 20px; */
`;

const InfoRectangle = styled.div`
  width: 122px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 0px 12px;
  background: rgba(4, 189, 197, 0.04);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoText = styled.p`
  color: #04bdc5;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
  text-transform: capitalize;
  opacity: 1;
`;

const PrevPrice = styled(Typography)`
  color: #e13535;
  font-size: 14px;
  font-style: normal;
  line-height: normal;
  text-decoration-line: strikethrough;
  text-transform: capitalize;
`;

const BookNowGreenContainer = styled(Container)`
  border-radius: 0px 0px 12px 12px;
  border: 2px solid #fff;
  background: #04bdc5;
`;

const PackageItem = () => {
  return (
    <Wrapper>
      <Container
        style={{
          borderRadius: "0px 0px 12px 12px",
          // borderBottom: "10px solid #4DCCB5",
          backgroundColor: "#fff",
          position: "relative",
          padding: 0,
        }}
      >
        <Image
          style={{
            height: "50%",
            width: "100%",
            borderRadius: "12px 12px 0px 0px",
            opacity: 2,
          }}
          priority
          src={ImageItem}
          alt="ImageItem"
        />

        <div
          style={{
            display: "flex",
            padding: "24px",
          }}
        >
          <InfoRectangle>
            <InfoText>3 nights - 4 days</InfoText>
          </InfoRectangle>
        </div>
        <div
          style={{
            display: "flex",
            padding: "0px 24px 24px 24px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <Typography textAlign={"left"} fontWeight={"700"}>
              Kuwait
            </Typography>
            <Typography
              color="#9FA6AB"
              variant="subtitle1"
              lineHeight={"16px"}
              textTransform={"capitalize"}
              textAlign={"left"}
            >
              Mon. 15/08/2022
            </Typography>
          </div>
          <div>
            <MiniLogo />
          </div>
          <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <Typography textAlign={"left"} fontWeight={"700"}>
              Maldives
            </Typography>
            <Typography
              color="#9FA6AB"
              variant="subtitle1"
              lineHeight={"16px"}
              textTransform={"capitalize"}
              textAlign={"left"}
            >
              Mon. 15/08/2022
            </Typography>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            padding: "0px 10px 10px 10px",
            justifyContent: "space-around",
          }}
        >
          <div>
            <Image
              width={50}
              height={50}
              style={{ borderRadius: "50%" }}
              src={UserImage}
              alt="userImage"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="body1"
              color={"#9FA6AB"}
              fontSize={"10px"}
              fontWeight={"300"}
            >
              Designed by
            </Typography>
            <Typography variant="body1" fontSize={"12px"}>
              Dr. Bashir rendy
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <PrevPrice
              fontWeight={"700"}
              style={{ textDecorationLine: "line-through" }}
            >
              175.9
            </PrevPrice>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <Typography
                variant="subtitle1"
                color={"rgba(7, 104, 159, 0.48)"}
                fontWeight={"400"}
                fontSize={"12px"}
                style={{ padding: "2px" }}
              >
                KWD
              </Typography>
              <Typography
                fontSize={"20px"}
                fontWeight={"700"}
                color={"#07689F"}
              >
                164.9
              </Typography>
            </div>
          </div>
        </div>
        <BookNowGreenContainer
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "12px",
          }}
        >
          <Typography
            variant="subtitle1"
            fontSize={"12px"}
            fontWeight={"300"}
            color={"#FFF"}
          >
            Book now and get 20% free
          </Typography>
          <Typography fontWeight={"700"} variant="body2" color={"#FFF"}>
            Book now
          </Typography>
        </BookNowGreenContainer>
      </Container>
    </Wrapper>
  );
};

export default PackageItem;
