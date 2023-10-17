import { Stack, Typography, Paper } from "@mui/material";
import { Container } from "@mui/system";
import { useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import styled from "styled-components";
import NavigationLink from "@/components/NavigationLink";
import NavLink from "@/components/NavLink";
import PropTypes from "prop-types";
import method1 from "@IMAGES/method1.png";
import method2 from "@IMAGES/method2.png";
import method3 from "@IMAGES/method3.png";
import FooterLogo from "@SVGs/FooterLogo.svg";
import Image from "next/image";

import FB from "@SVGs/fb.svg";
import instagram from "@SVGs/instagram.svg";
import twitter from "@SVGs/twitter.svg";
import YT from "@SVGs/yt.svg";
import IATA from "@SVGs/IATA.svg";

const Wrapper = styled.div`
  /* margin-bottom: 1rem; */
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: fit-content(100%);
  column-gap: 2rem;
  row-gap: 2rem;
`;

const SocialWrapper = styled.div`
  border-radius: 12px;
  width: 33.43px;
  height: 33.43px;
  background: rgba(255, 255, 255, 0.16);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 7px;
`;

function Footer({ lng }: { lng: string }) {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Wrapper>
      <Paper
        style={{
          backgroundColor: "#31629F",
          paddingTop: "4rem",
          paddingBottom: "3rem",
        }}
      >
        <Container maxWidth="xl">
          <ContentWrapper
            style={{ gridTemplateColumns: isMobile ? " repeat(1, 1fr)" : "" }}
          >
            <Stack alignItems="start">
              <Typography
                color="#fff"
                style={{ fontSize: "18px", paddingBottom: "14px" }}
                fontWeight={700}
              >
                Follow Us
              </Typography>
              <div style={{ display: "flex" }}>
                <SocialWrapper>
                  <Image src={FB} alt="FB" />
                </SocialWrapper>
                <SocialWrapper>
                  <Image src={instagram} alt="instagram" />
                </SocialWrapper>
                <SocialWrapper>
                  <Image src={twitter} alt="twitter" />
                </SocialWrapper>
                <SocialWrapper>
                  <Image src={YT} alt="YT" />
                </SocialWrapper>
              </div>
            </Stack>
            <Stack alignItems="start">
              <Typography
                color="#fff"
                style={{ fontSize: "18px", paddingBottom: "14px" }}
                fontWeight={700}
              >
                Company
              </Typography>
              <NavLink lng={lng} href={"/about-us"} name="About" />
              <NavLink lng={lng} href={"/ETravelers"} name="Expert Traveler" />
            </Stack>
            <Stack alignItems="start">
              <Typography
                color="#fff"
                style={{ fontSize: "18px", paddingBottom: "14px" }}
                fontWeight={700}
              >
                Support
              </Typography>
              <NavLink lng={lng} href="/contact" name="Contact us" />
              <NavLink lng={lng} href="/help" name="Help/FAQ" />
            </Stack>

            <Stack alignItems="start">
              <Typography
                color="#fff"
                style={{ fontSize: "18px", paddingBottom: "14px" }}
                fontWeight={700}
              >
                Legal
              </Typography>
              <NavLink lng={lng} href="/privacy_policy" name="Privacy" />
              <NavLink
                lng={lng}
                href="/term_conditions"
                name="Terms & Conditions"
              />
            </Stack>
            <Stack
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "row",
              }}
              alignItems="start"
            >
              <Image src={IATA} alt="IATA" />
              <div style={{ color: "#fff" }}>
                <Typography>42228476</Typography>
                <Typography>2021/12996</Typography>
              </div>
            </Stack>
          </ContentWrapper>
        </Container>
      </Paper>
      <Paper
        style={{
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: isLg ? "10%" : "30px",
          paddingRight: isLg ? "10%" : "30px",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <Typography
            color="#2C2C2C"
            style={{
              fontSize: "18px",
              fontWeight: "400",
              paddingRight: "30px",
            }}
          >
            We Accept
          </Typography>
          <div>
            <Image
              style={{ marginRight: "10px" }}
              width={37}
              height={23}
              src={method1}
              alt="method1"
            />
            <Image
              style={{ marginRight: "10px" }}
              width={37}
              height={23}
              src={method2}
              alt="method2"
            />
            <Image
              style={{ marginRight: "10px" }}
              width={37}
              height={23}
              src={method3}
              alt="method3"
            />
          </div>
        </div>
        <div>
          <Image src={FooterLogo} alt="FooterLogo" />
        </div>
      </Paper>
    </Wrapper>
  );
}

Footer.propTypes = {
  transparent: PropTypes.bool,
};
export default Footer;
