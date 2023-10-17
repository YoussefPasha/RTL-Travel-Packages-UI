import * as React from "react";
import { Metadata } from "next";
import { useTranslation } from "../i18n";
import HomePage from "@/Pages/Home";

export default async function Page({ params: { lng } }: any) {
  const { t } = await useTranslation(lng, "header");

  return (
    <div>
      <HomePage lng={lng} />
    </div>
  );
}

export const generateMetadata = ({ params: { lng } }: any): Metadata => {
  return {
    title:
      lng === "en"
        ? "OFFTO: Ready made travel vacations & holidays by experts  "
        : "اوفتو: عطلات وباقات سفر حقيقية - OFFTO  ",
    description:
      "موقع حجوزات السفر أوفتو يمنحك تجربة فريدة لحجز تذاكر الطيران و الفنادق عبر باقات جاهزة صممها مسافرين ذوي خبرة واسعة في السفر بخيارات متعددة ومزايا فريدة بداية من تحركك للمطار حتى وصولك وجهتك",
  };
};
