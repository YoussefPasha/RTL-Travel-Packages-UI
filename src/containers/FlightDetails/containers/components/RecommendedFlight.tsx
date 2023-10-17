import * as React from "react";
import Button from "@mui/material/Button";

import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import star from "@SVGs/FlightDetails/star.svg";
import Image from "next/image";
import Flight from "@/components/Flight";
const RecommendedFlight = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      style={{
        margin: isMobile ? "0px" : "25px",
        marginBottom: "25px",
        backgroundColor: "#fff",
        borderRadius: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            backgroundColor: "#346DB4",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderTopLeftRadius: "12px",
          }}
        >
          <Image style={{ margin: "10px" }} src={star} alt={"star"} />
        </div>
        <Typography
          style={{ paddingLeft: "22px" }}
          variant="body2"
          fontWeight={"700"}
          color={"#346DB4"}
        >
          Recommended by the Expert Explorer
        </Typography>
      </div>
      <Container
        style={{
          paddingTop: "22px",
          paddingBottom: "10px",
        }}
      >
        <Flight />
        <Flight />
      </Container>
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#F3F4F5",
        }}
      ></div>
      <Container
        style={{
          paddingTop: "10px",
          paddingBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: "30px" }}>
          <Typography
            fontWeight={"400"}
            fontSize={"12px"}
            variant="subtitle2"
            color="rgba(22, 42, 53, 0.72)"
          >
            Price will change by
          </Typography>
          <Typography
            fontSize={"15px"}
            fontWeight={"700"}
            color="#44C16E"
            variant="h6"
          >
            -17 KWD
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            component="label"
            variant="contained"
            href="#file-upload"
            style={{
              backgroundColor: "rgba(7, 104, 159, 0.05)",
              borderRadius: "12px",
              marginRight: "10px",
            }}
            disableElevation
          >
            <Typography
              color={"#07689F"}
              textTransform={"none"}
              fontWeight={"400"}
              variant="body2"
            >
              Flight Details
            </Typography>
          </Button>
          <Button
            component="label"
            variant="contained"
            href="#file-upload"
            style={{
              backgroundColor: "#04BDC5",
              borderRadius: "12px",
            }}
            disableElevation
          >
            <Typography
              color={"#fff"}
              textTransform={"none"}
              fontWeight={"700"}
              variant="body2"
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
              Select
            </Typography>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default RecommendedFlight;
