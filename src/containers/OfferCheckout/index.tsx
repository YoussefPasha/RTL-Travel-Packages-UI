"use client";

import React from "react";
import styled from "styled-components";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import {
  Button,
  InputAdornment,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PF from "@IMAGES/pf.png";
import share from "@SVGs/share.svg";
import Image from "next/image";

const Wrapper = styled.div`
  padding-bottom: 24px;
  padding-right: 20%;
`;

const TotalWrapper = styled.div`
  display: flex;
  width: "90%";
  padding-right: 0px;
  justify-content: center;
  align-items: flex-start;
  gap: -0.412px;
  margin-top: 25px;
  padding: 25px;
  justify-content: space-around;
  box-shadow: 0px -2px 15px 0px rgba(0, 0, 0, 0.05);
`;

const OfferCheckout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Wrapper style={{ padding: isMobile ? "24px" : "" }}>
      <FormControl
        fullWidth
        sx={{
          m: 1,
          ".MuiOutlinedInput-notchedOutline": {
            border: "1px solid #ECF4FD",
            borderRadius: "8px",
          },
        }}
      >
        <OutlinedInput
          endAdornment={
            <div
              style={{
                width: "35%",
                height: "56px",
                backgroundColor: "#ECF4FD",
                borderRadius: "0px 8px 8px 0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography color="#31629F" fontWeight={"700"}>
                Apply
              </Typography>
            </div>
          }
          placeholder="Have a coupon ?"
          sx={{ padding: 0 }}
        />
      </FormControl>
      <Grid
        style={{ paddingTop: "15px", paddingBottom: "15px" }}
        container
        spacing={2}
      >
        <Grid item xs={4}>
          <Typography fontWeight={"500"} style={{ fontSize: "14px" }}>
            Package price
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            textAlign={"center"}
            fontWeight={"500"}
            style={{ fontSize: "14px" }}
          >
            3x
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            textAlign={"right"}
            fontWeight={"500"}
            style={{ fontSize: "18px" }}
          >
            345.75 KWD
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography fontWeight={"500"} style={{ fontSize: "14px" }}>
            Discount
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            textAlign={"center"}
            fontWeight={"500"}
            style={{ fontSize: "14px" }}
          >
            2%
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            textAlign={"right"}
            fontWeight={"500"}
            style={{ fontSize: "18px" }}
          >
            3.75 KWD
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            fontWeight={"500"}
            style={{ fontSize: "14px" }}
            color="#44C16E"
          >
            Total
          </Typography>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Typography
            textAlign={"right"}
            color="#44C16E"
            fontWeight={"500"}
            style={{ fontSize: "1^px" }}
          >
            3.75 KWD
          </Typography>
        </Grid>
      </Grid>
      <div
        style={{
          width: "100%",
          height: "10px",
          background: "#F5F7F9",
        }}
      />
      <div
        style={{
          display: "flex",
          paddingTop: "15px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <Image
            width={53}
            height={53}
            src={PF}
            alt="PF"
            style={{ borderRadius: "50%" }}
          />
          <div style={{ paddingLeft: "20px" }}>
            <Typography fontWeight={"300"} variant="subtitle1">
              Expert traveller
            </Typography>
            <Typography fontWeight={"700"} variant="body2">
              Mohamed Eloatabi
            </Typography>
          </div>
        </div>
        <div
          style={{
            width: "41px",
            height: "41px",
            borderRadius: "50%",
            backgroundColor: "#F3F4F5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={share} alt={"share"} />
        </div>
      </div>
      <TotalWrapper>
        <div>
          <Typography variant="h5" fontWeight={"700"}>
            565.7 KWD
          </Typography>
          <Typography>Flight + Hotel</Typography>
        </div>
        <Button
          variant="contained"
          style={{
            fontWeight: "600",
            color: "#fff",
            borderRadius: "8px",
            height: "48px",
            textTransform: "capitalize",
            backgroundColor: "#04BDC5",
            paddingLeft: "35px",
            paddingRight: "35px",
            paddingTop: "11px",
            paddingBottom: "11px",
            fontSize: "16px",
          }}
          size="large"
          disableElevation
        >
          Book Now
        </Button>
      </TotalWrapper>
    </Wrapper>
  );
};

export default OfferCheckout;
