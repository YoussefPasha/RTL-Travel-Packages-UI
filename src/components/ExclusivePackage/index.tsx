import React from "react";
import styled from "styled-components";
import ImageItem from "@IMAGES/ItemImage.png";
import Image from "next/image";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import ICON from "@SVGs/ExclusivePackage/icon.svg";
import LINE from "@SVGs/ExclusivePackage/line.svg";

const Wrapper = styled.div`
  border-radius: 10px;
  padding-right: 20px;
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

interface ExclusivePackageItemProps {
  color: string; // Replace 'string' with the actual type of 'color' prop
}

const ExclusivePackageItem: React.FC<ExclusivePackageItemProps> = ({
  color,
}) => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Wrapper>
      <div
        style={{
          borderRadius: "0px 0px 12px 12px",
          backgroundColor: "#fff",
          padding: 0,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            padding: "20px 70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            color={"#fff"}
            variant={isLg ? "h5" : isMobile ? "h5" : "h6"}
            fontWeight={"700"}
            textAlign={"center"}
            style={{ paddingBottom: "20px" }}
          >
            Find out where you can travel for less
          </Typography>
          <Typography
            color="#FFC107"
            textAlign={"center"}
            variant={isLg ? "h4" : isMobile ? "h4" : "h5"}
            fontWeight={"700"}
            textTransform={"uppercase"}
            style={{
              textShadow:
                "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",
            }}
          >
            100 KWD
          </Typography>
          <Image src={LINE} alt="" />
        </div>
        <div
          style={{
            backgroundColor: color,
            borderRadius: "12px 12px 0px 0px",
          }}
        >
          <Image
            style={{
              height: "50%",
              width: "100%",
              borderRadius: "12px 12px 0px 0px",
              opacity: 0.15,
            }}
            priority
            src={ImageItem}
            alt="ImageItem"
          />
        </div>

        <div
          style={{ display: "flex", padding: "24px", flexDirection: "column" }}
        >
          <Typography
            color={"#283743"}
            variant="body1"
            fontWeight={"700"}
            lineHeight={"21px"}
            textTransform={"capitalize"}
            textAlign={"left"}
          >
            Lorem ipsum dolor sit amet
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              color={"#9FA6AB"}
              variant="subtitle2"
              fontWeight={"300"}
              lineHeight={"21px"}
              textTransform={"capitalize"}
              textAlign={"left"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </Typography>
            <div
              style={{
                width: "20%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "end",
              }}
            >
              <Image src={ICON} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ExclusivePackageItem;
