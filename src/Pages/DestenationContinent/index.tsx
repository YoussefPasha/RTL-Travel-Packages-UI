import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import DestinationInfo from "@/containers/DestinationInfo";
import ContinentInfo from "@/containers/ContinentInfo";
import { Hidden } from "@mui/material";

const DestinationContinent = ({ lng }: { lng: string }) => {
  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <Hidden mdDown>
        <Breadcrumb lng={lng} />
      </Hidden>
      <DestinationInfo
        Title={"Destinations"}
        Content={
          "Istanbul, Islampol, Astana and Constantinople. Name it what you want, and choose the nickname you like, but everyone agrees that it is the paradise of the earth, the place where the East and the West, authenticity and modernity! Mestel Istanbul, Istanbul, Astana and Constantinople. Name it what you want, and choose the nickname you like, but everyone agrees that it is the paradise of the earth, the place where the East and the West, authenticity and modernity! Istanbul, Islampol, Astana and Constantinople. Name it what you want, and choose the nickname you like, but everyone agrees that it is the paradise of the earth, the place where the East and the West, authenticity and modernity! Istanbul, Islampol, Astana and Constantinople. Name it what you want, and choose the nickname you like, but everyone agrees that it is the paradise of the earth, the place where the East and the West, authenticity and modernity! Istanbul, Islampol, Astana and Constantinople."
        }
      />
      <ContinentInfo lng={lng}/>
    </div>
  );
};

export default DestinationContinent;
