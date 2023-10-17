import React, { useCallback } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";

import "./css/embla.css";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import ScrollLeft from "@/components/Icons/scrollLeft";
import ScrollRight from "@/components/Icons/scrollRight";
import LikeCustomer from "@SVGs/LikeCustomer.svg";
import ClientComment from "@/components/ClientComment";
import Image from "next/image";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  name?: string;
};

const CustomersOpinionsScroll: React.FC<PropType> = (props) => {
  const { slides, options, name } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        spacing={5}
        flex={3}
        style={{ paddingBottom: "20px" }}
      >
        <Typography textTransform={"uppercase"} color="#2B679B" variant="h3">
          Our Customers' Opinions
        </Typography>
        <div>
          <Stack
            width={"100%"}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={1}
            style={{ direction: "ltr" }}
          >
            <div onClick={scrollPrev}>
              <ScrollLeft />
            </div>
            <div onClick={scrollNext}>
              <ScrollRight />
            </div>
          </Stack>
        </div>
      </Stack>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div
                className="embla__slide"
                style={{
                  flex: isMobile ? "0 0 80%" : isLg ? "0 0 25%" : "0 0 35%",
                }}
                key={index}
              >
                <ClientComment>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    <Image src={LikeCustomer} alt="LikeCustomer" />
                    <Typography
                      textTransform={"uppercase"}
                      lineHeight={"50px"}
                      fontWeight={"700"}
                      color="#04BDC5"
                      style={{ fontSize: "18px" }}
                    >
                      Mohammed Al Qamis
                    </Typography>
                    <Typography
                      color="#6F6F6F"
                      style={{ fontSize: "16px" }}
                      fontWeight={"400"}
                    >
                      offto Client
                    </Typography>
                    <Typography
                      color="#6F6F6F"
                      textAlign={"center"}
                      style={{ fontSize: "12px", paddingTop: "16px" }}
                      fontWeight={"300"}
                      lineHeight={"17px"}
                    >
                      Gives you a wellness offto application on the good trip.
                      Booking was wade easy, until I chose a higher room through
                      the app and the whole trip was perfect
                    </Typography>
                  </div>
                </ClientComment>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomersOpinionsScroll;
