import React from "react";
import DestinationContinent from "@/Pages/DestenationContinent";

const Destination = ({ params: { lng } }: any) => {
  return <DestinationContinent lng={lng} />;
};

export default Destination;
