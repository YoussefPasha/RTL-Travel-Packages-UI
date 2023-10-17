"use client";

import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import AppStore from "@SVGs/Download/AppStore.svg";
import GooglePlay from "@SVGs/Download/GooglePlay.svg";
import email from "@SVGs/Download/email.svg";
import phone from "@SVGs/Download/phone.svg";
import whatsapp from "@SVGs/Download/whatsapp.svg";

const Wrapper = styled.div`
  padding-top: 0;
  background: rgba(179, 233, 226, 0.19);
`;

const DownloadApp = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Wrapper
      style={{
        width: "100%",
        paddingTop: "65px",
        paddingBottom: "56px",
      }}
    >
      <Container maxWidth="xl" style={{ width: "100%" }}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} sm={6}>
            <div
              style={{ paddingRight: "10%", padding: isMobile ? "10%" : "0px" }}
            >
              <Typography color={"#346DB4"} variant="h2">
                Download our app
              </Typography>
              <Typography fontWeight={"400"} color={"#2B679B"} variant="body2">
                All what you need to feel a live, now in your hands Download our
                app for IOS & Android now.
              </Typography>
              <div
                style={{
                  paddingTop: "20%",
                  display: "flex",
                }}
              >
                <Image
                  src={AppStore}
                  alt={"AppStore"}
                  style={{ marginRight: "10px" }}
                />
                <Image src={GooglePlay} alt={"GooglePlay"} />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div
              style={{
                display: "flex",
                direction: "ltr",
                justifyContent: "end",
                paddingRight: "5%",
              }}
            >
              <div
                style={{
                  borderRadius: "12px 0px 0px 12px",
                  backgroundColor: "#4DCCB5",
                  padding: "5%",
                  paddingTop: "10%",
                }}
              >
                <Typography
                  variant="h3"
                  color={"#fff"}
                  style={{ paddingBottom: "30px" }}
                >
                  You Need Help?
                </Typography>
                <Typography color={"#fff"} variant="body2">
                  We Are Here to Hear from you
                </Typography>
              </div>
              <div
                style={{
                  borderRadius: "0px 12px 12px 0px",
                  backgroundColor: "#07689F",
                  padding: "5%",
                  paddingRight: "10%",
                }}
              >
                <div style={{ display: "flex" }}>
                  <Image src={phone} alt={"phone"} style={{ margin: "10px" }} />
                  <Image
                    src={whatsapp}
                    alt={"whatsapp"}
                    style={{ margin: "10px" }}
                  />
                </div>
                <Typography fontWeight={"700"} variant="body1" color={"#fff"}>
                  +965 222 57 225
                </Typography>
                <Typography fontWeight={"700"} variant="body1" color={"#fff"}>
                  +965 222 57 224
                </Typography>
                <Image
                  src={email}
                  alt={"email"}
                  style={{ marginTop: "20px" }}
                />
                <Typography variant="body1" color={"#fff"}>
                  care@offto.com.kw
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default DownloadApp;
