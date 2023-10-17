import React from "react";
import { Hidden } from "@mui/material";
import Breadcrumb from "@/components/Breadcrumb";
import CountryInfo from "@/containers/CountryInfo";

const DestinationCountry = ({ lng }: { lng: string }) => {
  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <Breadcrumb lng={lng} />
      <CountryInfo lng={lng} />
    </div>
  );
};

export default DestinationCountry;
