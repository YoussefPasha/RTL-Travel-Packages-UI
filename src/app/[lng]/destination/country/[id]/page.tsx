import React from "react";
import DestinationCountry from "@/Pages/DestinationCountry";

const Country = ({ params: { lng } }: any) => {
  return <DestinationCountry lng={lng} />;
};

export default Country;
