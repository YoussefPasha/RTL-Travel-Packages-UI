import React, { useCallback } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";

import "./css/embla.css";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import ScrollLeft from "@/components/Icons/scrollLeft";
import ScrollRight from "@/components/Icons/scrollRight";
import PackageItem from "@/components/PackageItem";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  name?: string;
};

const PackagesScroll: React.FC<PropType> = (props) => {
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
          {name}
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
                  flex: isMobile ? "0 0 90%" : isLg ? "0 0 25%" : "0 0 45%",
                }}
                key={index}
              >
                <PackageItem />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PackagesScroll;
