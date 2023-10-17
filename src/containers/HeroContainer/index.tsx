"use client";

import {
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  Hidden,
} from "@mui/material";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import LeftArrow from "../../components/Icons/LeftArrow";
import RightArrow from "../../components/Icons/RightArrowFill";
import homePageHeroImage2 from "@IMAGES/HeroContainer/bg2.jpg";
import { useEffect, useState } from "react";
import SearchFlightAndHotel from "./container/SearchFlightAndHotel";

const HeroBackground = styled(Image)`
  position: absolute;
  left: calc(50% - 50vw);
  top: calc(-60px - 1rem);
  width: 100vw;
  height: calc(100% + 60px + 1rem);
  filter: brightness(0.4);
  user-select: none;
  z-index: -1;
  object-fit: cover;
`;
const StyledContainer = styled(Container)`
  padding: 0;
  padding-bottom: 4rem;
  padding-top: 160px;
  position: relative;
`;
StyledContainer.defaultProps = {
  ...StyledContainer.defaultProps,
  maxWidth: "xl",
};

interface Image {
  id: number;
  src: StaticImageData;
  order: number;
}

interface HeroContainerProps {
  images: StaticImageData[];
}

const delay: number = 5000;

function HeroContainer({ images }: HeroContainerProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [selectedImage, setSelectedImage] = useState<number>(1);
  const [delayAuto, setDelayAuto] = useState<boolean>(true);

  const defaultImage: StaticImageData = homePageHeroImage2;

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prevImage) => (prevImage + 1) % images.length);
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [images.length > 1, delayAuto === true]);

  const handleNext = async () => {
    setDelayAuto(false);
    await setSelectedImage((prevImage) => (prevImage + 1) % images.length);
    setDelayAuto(true);
  };

  const handlePrev = async () => {
    setDelayAuto(false);
    await setSelectedImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
    setDelayAuto(true);
  };

  const DisplayImages = () => {
    for (; selectedImage < images.length; setSelectedImage((prev) => prev++)) {
      return (
        <>
          <Image
            width={isMobile ? 50 : 65}
            height={isMobile ? 50 : 65}
            style={{
              borderRadius: "50%",
              marginRight: isMobile ? "15px" : "20px",
              marginLeft: isMobile ? "15px" : "0px",
            }}
            src={
              selectedImage == 0
                ? images[images.length - 1]
                : images[selectedImage - 1]
            }
            alt="1"
            onClick={handlePrev}
          />
          <Image
            width={isMobile ? 60 : 75}
            height={isMobile ? 60 : 75}
            style={{
              borderRadius: "50%",
              marginRight: isMobile ? "15px" : "20px",
            }}
            src={images[selectedImage]}
            alt="0"
          />
          <Image
            width={isMobile ? 50 : 65}
            height={isMobile ? 50 : 65}
            style={{
              borderRadius: "50%",
              marginRight: isMobile ? "15px" : "20px",
            }}
            src={
              selectedImage === images.length - 1
                ? images[0]
                : images[selectedImage + 1]
            }
            alt="-1"
            onClick={handleNext}
          />
        </>
      );
    }
  };

  return (
    <StyledContainer>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Stack
          style={{
            justifyContent: "center",
            display: "flex",
            paddingTop: "100px",
          }}
          spacing={16}
        >
          <Stack
            spacing={2}
            style={{
              width: isMobile ? "auto" : "590px",
            }}
          >
            <Hidden smDown={images.length < 1}>
              <Typography
                display={"inline"}
                variant="h2"
                color="white"
                textTransform={"uppercase"}
                textAlign={isMobile ? "center" : "left"}
                lineHeight={"37px"}
              >
                Hundreds of packages designed on real experiences!
              </Typography>
            </Hidden>

            <Hidden smDown>
              <Typography
                display={"inline"}
                variant="body1"
                color="white"
                textAlign="left"
                fontWeight={"400"}
                lineHeight={"30px"}
                textTransform={"capitalize"}
              >
                Most of the packages include Suggested Activities for Expert
                Travelers, which they try out for themselves.
              </Typography>
            </Hidden>
          </Stack>

          {images.length > 1 && (
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: isMobile ? "center" : "",
                direction: "ltr",
              }}
            >
              <div style={{ cursor: "pointer" }} onClick={handlePrev}>
                <LeftArrow />
              </div>

              <Hidden smDown>
                <Typography
                  fontWeight={700}
                  component="span"
                  display={"inline"}
                  fontSize={"13px"}
                  color="white"
                  textAlign="left"
                  style={{
                    padding: "16px",
                  }}
                >
                  PREV
                </Typography>
              </Hidden>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* <Image
                  width={isMobile ? 50 : 65}
                  height={isMobile ? 50 : 65}
                  style={{
                    borderRadius: "50%",
                    marginRight: isMobile ? "15px" : "20px",
                    marginLeft: isMobile ? "15px" : "0px",
                  }}
                  src={
                    selectedImage === 2
                      ? images[0]
                      : selectedImage === 1
                      ? images[2]
                      : images[1]
                  }
                  alt="1"
                  onClick={handlePrev}
                />
                <Image
                  width={isMobile ? 60 : 75}
                  height={isMobile ? 60 : 75}
                  style={{
                    borderRadius: "50%",
                    marginRight: isMobile ? "15px" : "20px",
                  }}
                  src={images[selectedImage]}
                  alt="0"
                />
                <Image
                  width={isMobile ? 50 : 65}
                  height={isMobile ? 50 : 65}
                  style={{
                    borderRadius: "50%",
                    marginRight: isMobile ? "15px" : "20px",
                  }}
                  src={
                    selectedImage === 0
                      ? images[2]
                      : selectedImage === 1
                      ? images[0]
                      : images[1]
                  }
                  alt="-1"
                  onClick={handleNext}
                /> */}
                {DisplayImages()}
              </div>
              <Hidden smDown>
                <Typography
                  fontWeight={700}
                  component="span"
                  display={"inline"}
                  fontSize={"13px"}
                  color="white"
                  textAlign="left"
                  style={{
                    padding: "16px",
                  }}
                >
                  NEXT
                </Typography>
              </Hidden>
              <div style={{ cursor: "pointer" }} onClick={handleNext}>
                <RightArrow />
              </div>
            </Box>
          )}
        </Stack>
        <Hidden mdDown={images.length > 1}>
          <SearchFlightAndHotel />
        </Hidden>
      </div>
      <HeroBackground
        alt="hero"
        src={images.length > 1 ? images[selectedImage] : defaultImage}
        style={{
          opacity: 1,
          transition: "opacity 0.1s ease-in-out",
        }}
        priority
      />
    </StyledContainer>
  );
}

export default HeroContainer;
