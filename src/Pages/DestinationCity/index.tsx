import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import CityInfo from "@/containers/CityInfo";

const DestinationCity = ({ lng }: { lng: string }) => {
  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <Breadcrumb lng={lng} />
      <CityInfo lng={lng} />
    </div>
  );
};

export default DestinationCity;
