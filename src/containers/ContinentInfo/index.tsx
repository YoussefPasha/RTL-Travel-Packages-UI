"use client";

import ContinentImage from "@/components/ContinentImage";
import CountryOffersItem from "@/components/CountryWithOffersITem";
import ListScrollHorizontal from "@/components/ListScrollHorizontal";
import SelectContinent from "@/components/SelectContinent";
import React from "react";
import styled from "styled-components";
import Cities from "../Cities";
import { Hidden, useMediaQuery, useTheme } from "@mui/material";

const Wrapper = styled.div`
  margin: 20px 100px 100px 100px;
  display: flex;
  flex-direction: column;
`;

const OptionsAndSelectionsWrapper = styled.div`
  margin-left: 70px;
  margin-right: 70px;
  margin-top: 40px;
`;

const ContinentInfo = ({ lng }: { lng: string }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Wrapper
      style={{
        marginLeft: isMobile ? "0px" : "",
        marginRight: isMobile ? "30px" : "",
      }}
    >
      <div style={{ display: "flex", marginBottom: "83px" }}>
        <Hidden mdDown>
          <ContinentImage
            Desc={"Explore the beauty of ASIA "}
            ContinentName={"ASIA"}
          />
        </Hidden>
        <OptionsAndSelectionsWrapper
          style={{
            marginLeft: isMobile ? "0px" : "",
            marginRight: isMobile ? "0px" : "",
            marginTop: isMobile ? "0px" : "",
          }}
        >
          <SelectContinent />
          <ListScrollHorizontal
            Title={"Offers"}
            ListComponent={CountryOffersItem}
            offer={true}
            lng={lng}
          />
        </OptionsAndSelectionsWrapper>
      </div>
      <div style={{ width: isMobile ? "100vw" : "" }}>
        <Cities lng={lng} DisplayComponent={CountryOffersItem} />
      </div>
    </Wrapper>
  );
};

export default ContinentInfo;
