"use client";
import React, { useState } from "react";
import {
  Typography,
  useTheme,
  useMediaQuery,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import Flight from "@/components/Flight";
import styled from "styled-components";
import Dropdown from "@/components/Icons/Dropdown";
import MiniLogo from "@/components/Icons/MiniLogo";
import FlightDialog from "./containers/FlightDialog";
import FlightDetailsPopup from "./containers/FlightDetails";

const Wrapper = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 10%;
`;
const Headline = styled(Typography)`
  color: #07689f;
  font-size: 20px;
  font-weight: 600;
`;

const HeadlineLink = styled(Typography)`
  color: #07689f;
  font-size: 14px;
  font-weight: 400;
  text-decoration-line: underline;
  cursor: pointer;
`;

const FlightDetailsContainer = styled.div`
  height: auto;
  width: 100%;
  border-radius: 12px;
  padding: 23px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const FlightDetails = ({ lng }: { lng: string }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [age, setAge] = React.useState("10");

  const [openFlightDialog, setOpenFlightDialog] = useState(false);
  const [openFlightDialogDetails, setOpenFlightDialogDetails] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <Wrapper
      style={{
        paddingRight: isMobile ? "0px" : "",
        padding: isMobile ? "24px" : "",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Headline variant="h3">Flight details ✈️</Headline>
        <HeadlineLink
          onClick={() => setOpenFlightDialogDetails(true)}
          variant="body1"
        >
          Show all details
        </HeadlineLink>
      </div>
      <FlightDetailsContainer style={{ padding: isMobile ? "0px" : "" }}>
        <Flight />
        <Flight />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              autoWidth
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
              }}
              IconComponent={() => (
                <div
                  style={{
                    paddingRight: "25px",
                    cursor: "pointer",
                  }}
                >
                  <Dropdown />
                </div>
              )}
            >
              <MenuItem value={10}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
          </div>
          <div style={{ direction: "ltr" }}>
            <Button
              component="label"
              variant="contained"
              onClick={() => setOpenFlightDialog(true)}
              endIcon={
                <div
                  style={{
                    paddingTop: "8px",
                  }}
                >
                  <MiniLogo />
                </div>
              }
              style={{
                backgroundColor: "#346DB4",
                borderRadius: "12px",
              }}
            >
              <Typography
                color={"#fff"}
                textTransform={"none"}
                fontWeight={"400"}
                variant="body1"
              >
                Browse flights
              </Typography>
            </Button>
          </div>
        </div>
      </FlightDetailsContainer>
      <FlightDialog
        open={openFlightDialog}
        handleClose={() => setOpenFlightDialog(false)}
      />
      <FlightDetailsPopup
        open={openFlightDialogDetails}
        handleClose={() => setOpenFlightDialogDetails(false)}
        lng={lng}
      />
    </Wrapper>
  );
};

export default FlightDetails;
