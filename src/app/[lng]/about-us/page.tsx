"use client";
import {
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import IMG from "@IMAGES/aboutusImage.png";

const Title = styled(Typography)`
  color: #4dccb5;
  font-family: Dubai;
  font-style: normal;
  font-weight: 700;
  line-height: 67px; /* 167.5% */
`;

const Desc = styled(Typography)`
  color: #333;
  text-align: justify;
  font-family: Dubai;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
`;

const AboutUs = ({ params: { lng } }: any) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container
      style={{
        marginTop: isMobile ? "55px" : "100px",
      }}
    >
      <Grid container spacing={2} columns={16}>
        <Grid style={{ padding: "30px" }} item sm={8} xs={16}>
          <Title variant="h3">ABOUT US</Title>
          <Desc variant="subtitle1">Welcome to OFFTO</Desc>
        </Grid>
        <Grid style={{ position: "relative" }} item sm={8} xs={16}>
          <div
            style={{
              background:
                "linear-gradient(143deg, rgba(255, 230, 0, 0.21) 17.43%, rgba(77, 204, 181, 0.29) 73.23%)",
              borderEndStartRadius: "50%",
              filter: "blur(172.67987060546875px)",
              position: "absolute",
              zIndex: -1,
              width: "100%",
              height: "100%",
            }}
          ></div>
          <Image
            width={isMobile ? 310 : 605}
            height={isMobile ? 200 : 495}
            src={IMG}
            alt="IMG"
            priority
            placeholder="blur"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
