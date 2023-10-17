import DestinationCity from "@/Pages/DestinationCity";
import React from "react";

const page = ({ params: { lng } }: any) => {
  return <DestinationCity lng={lng} />;
};

export default page;
