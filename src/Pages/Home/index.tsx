"use client";
import * as React from "react";
import HeroContainer from "@/containers/HeroContainer";
import Packages from "@/containers/Packages";
import WhyWeAre from "@/containers/WhyWeAre";
import NewUserSettingModel from "@/containers/newUserSettingModel";
import Deals from "@/containers/Deals";
import TypesOfVacation from "@/containers/TravelTypes";
import Blogs from "@/containers/Blogs";
import CustomerOpinion from "@/containers/CustomersComments";
import DownloadApp from "@/containers/Download";
import { useTranslation } from "@/app/i18n/client";
import { StaticImageData } from "next/image";
import homePageHeroImage from "@IMAGES/bg.png";
import homePageHeroImage2 from "@IMAGES/HeroContainer/bg2.jpg";
import homePageHeroImage3 from "@IMAGES/HeroContainer/bg3.jpg";
import { useMediaQuery, useTheme } from "@mui/material";
import SearchFlightAndHotel from "@/containers/HeroContainer/container/SearchFlightAndHotel";

export default function HomePage({ lng }: any) {
  const [modelOpen, setModelOpen] = React.useState(true);
  const { t } = useTranslation(lng, "translation");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const images: StaticImageData[] = [
    homePageHeroImage,
    homePageHeroImage2,
    homePageHeroImage3,
  ];

  return (
    <>
      <HeroContainer images={images} />
      {isMobile && images.length > 1 && <SearchFlightAndHotel />}
      <TypesOfVacation lng={lng} />
      <Deals lng={lng} />
      <Packages name={"Honey moaners 👩‍❤️‍👨"} lng={lng} />
      <WhyWeAre lng={lng} />
      <Packages name={"Weekend"} lng={lng} />
      <Packages name={"Riyadh Season"} lng={lng} />
      <NewUserSettingModel
        open={modelOpen}
        handleClose={() => setModelOpen(false)}
        lng={lng}
      />
      <CustomerOpinion lng={lng} />
      <Blogs lng={lng} />
      <DownloadApp />
    </>
  );
}
