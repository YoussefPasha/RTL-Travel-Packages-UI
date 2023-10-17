import React from "react";
import styled from "styled-components";
import ImageItem from "@IMAGES/ItemImage.png";
import Image from "next/image";
import { Container, Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import BG from "@SVGs/bg.svg";

const Wrapper = styled.div`
  border-radius: 10px;
  padding-right: 20px;
  padding-bottom: 20px;
`;

const WrapBrowseOffers = styled(Typography)`
  color: #4dccb5;
  font-weight: 700;
  text-decoration-line: underline;
  text-transform: uppercase;
  cursor: pointer;
`;

const OffersWrapper = styled.div`
  height: 65px;
  border-radius: 5px;
  background: rgba(57, 101, 164, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

interface CountryOffersItemProps {
  offer: boolean;
  Explore: boolean;
  country: boolean;
}

const CountryOffersItem: React.FC<CountryOffersItemProps> = ({
  offer,
  Explore,
  country,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Wrapper>
      <Container
        style={{
          borderRadius: "0px 0px 12px 12px",
          borderBottom: "13px solid #4DCCB5",
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
            margin: "23px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography
              variant="h3"
              fontWeight={"700"}
              textTransform={"uppercase"}
              textAlign={"left"}
            >
              Turkey
            </Typography>
            {country && (
              <Typography
                variant="subtitle2"
                color={"#666"}
                fontWeight={"400"}
                textAlign={"left"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </Typography>
            )}
            <WrapBrowseOffers textAlign={"right"} variant="subtitle2">
              {Explore ? "Explore more" : "Browse offers"}
            </WrapBrowseOffers>
          </div>
          {offer ? (
            <OffersWrapper>
              <Typography
                variant="h5"
                fontWeight={"700"}
                textTransform={"capitalize"}
                color="#255A9C"
                lineHeight={"normal"}
                textAlign={"end"}
              >
                48
              </Typography>
              <Typography
                lineHeight={"normal"}
                textTransform={"capitalize"}
                variant="body1"
                fontWeight={"300"}
                color="#255A9C"
                style={{ paddingBottom: "3px" }}
                textAlign={"start"}
              >
                offers
              </Typography>
            </OffersWrapper>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "right",
                position: "absolute",
                right: "0px",
                bottom: "0px",
                marginRight: isMobile ? "0px" : "50px",
              }}
            >
              <Image src={BG} alt="" />
            </div>
          )}
        </div>
      </Container>
    </Wrapper>
  );
};

export default CountryOffersItem;
