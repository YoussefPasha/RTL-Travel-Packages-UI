"use client";

import React from "react";
import {
  Grid,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import styled from "styled-components";
import PaginationComponent from "@/components/PaginationComponent";
import Search from "@/components/Icons/SearchIcon";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchWrapper = styled.div`
  width: 290px;
  height: 40px;
  flex-shrink: 0;
  background: #fff;
  display: flex;
  align-items: center;
  border: 1px solid #eaf8ff;
  padding-left: 18px;
  padding-right: 18px;
  margin-right: 20px;
`;

interface CitiesProps {
  DisplayComponent: React.ComponentType<any>;
  lng: string;
  showHeader?: boolean;
}

const Cities = ({ DisplayComponent, lng, showHeader }: CitiesProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Wrapper>
      {showHeader ? (
        <></>
      ) : (
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          style={{ paddingBottom: "20px" }}
        >
          <Typography textTransform={"uppercase"} color="#2B679B" variant="h2">
            ALL cities
          </Typography>

          {isMobile ? (
            <></>
          ) : (
            <SearchWrapper style={{ direction: "ltr" }}>
              <Search />
              <Typography
                color={"#9D9D9D"}
                gutterBottom
                variant="body1"
                component="b"
                sx={{
                  textAlign: "center",
                }}
                style={{
                  paddingTop: "5px",
                  paddingLeft: "12px",
                }}
              >
                Search for offers
              </Typography>
            </SearchWrapper>
          )}
        </Stack>
      )}
      <Grid container spacing={2}>
        {isMobile ? (
          <div style={{ width: isMobile ? "95%" : "" }}>
            <Grid style={{ margin: "20px" }} item xs={12}>
              <DisplayComponent Explore />
            </Grid>
            <Grid style={{ margin: "20px" }} item xs={12}>
              <DisplayComponent Explore />
            </Grid>
            <Grid style={{ margin: "20px" }} item xs={12}>
              <DisplayComponent Explore />
            </Grid>
          </div>
        ) : (
          <>
            <Grid item xs={6} md={3}>
              <DisplayComponent Explore />
            </Grid>
            <Grid item xs={6} md={3}>
              <DisplayComponent Explore />
            </Grid>
            <Grid item xs={6} md={3}>
              <DisplayComponent Explore />
            </Grid>
            <Grid item xs={6} md={3}>
              <DisplayComponent Explore />
            </Grid>
            <Grid item xs={6} md={3}>
              <DisplayComponent Explore />
            </Grid>
            <Grid item xs={6} md={3}>
              <DisplayComponent Explore />
            </Grid>
            <Grid item xs={6} md={3}>
              <DisplayComponent Explore />
            </Grid>
            <Grid item xs={6} md={3}>
              <DisplayComponent Explore />
            </Grid>
          </>
        )}
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "28px",
          marginRight: isMobile && lng === "en" ? "30px" : "",
          marginLeft: isMobile && lng === "ar" ? "30px" : "",
        }}
      >
        <PaginationComponent />
      </div>
    </Wrapper>
  );
};

export default Cities;
