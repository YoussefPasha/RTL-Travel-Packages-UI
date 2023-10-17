import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography, useMediaQuery, Container } from "@mui/material";
import FLIGHTCOMPANY from "@IMAGES/flightCompany.png";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import styled from "styled-components";
import CustomContainer from "./components/CustomContainer";
import Image from "next/image";
import dot from "@SVGs/FlightDetails/dot.svg";
import wifi from "@SVGs/FlightDetails/wifi.svg";
import power from "@SVGs/FlightDetails/power.svg";
import tv from "@SVGs/FlightDetails/tv.svg";
import food from "@SVGs/FlightDetails/food.svg";

const TravelFromToTime = styled(Typography)`
  color: #0f2d3f;
  font-weight: 700;
  line-height: 14px; /* 77.778% */
  letter-spacing: 0.18px;
  text-transform: uppercase;
`;

const TravelFromToTimeAMPM = styled(Typography)`
  color: #0f2d3f;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.1px;
  text-transform: uppercase;
`;

const CompanyFlight = styled.div`
  border-radius: 12px;
  background: rgba(49, 98, 159, 0.04);
  padding: 8px;
  width: 50px;
  height: 50px;
  margin-top: 12px;
  margin-right: 16px;
`;

const BenefitsContainer = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 3.35px;
  background: #f7f8fa;
  padding: 5px;
  margin-right: 7px;
`;

interface FlightDetailsPopupProps {
  open: boolean;
  handleClose: () => void;
  lng: string;
}

export default function FlightDetailsPopup({
  open,
  handleClose,
  lng,
}: FlightDetailsPopupProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Dialog
        PaperProps={{
          sx: { borderRadius: "12px", position: "relative", width: "100%" },
        }}
        open={open}
        onClose={handleClose}
        scroll={"paper"}
        fullScreen={fullScreen}
      >
        <DialogTitle>Flight Details</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          style={{
            backgroundColor: "#fff",
          }}
          dividers
        >
          <Typography color={"#283743"} variant="h3" fontWeight={"700"}>
            Kuwait - Cairo
          </Typography>
          <CustomContainer style={{ paddingTop: "27px" }}>
            <CustomContainer
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div
                style={{
                  width: "40%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CustomContainer>
                  <Typography
                    color="rgba(15, 24, 48, 0.40)"
                    fontWeight={"300"}
                    textAlign={"left"}
                  >
                    sat. 28 sep.
                  </Typography>
                  <CustomContainer
                    style={{ display: "flex", alignItems: "end" }}
                  >
                    <TravelFromToTime
                      variant="h5"
                      textAlign={"left"}
                      fontWeight={"700"}
                    >
                      05:45
                    </TravelFromToTime>
                    <TravelFromToTimeAMPM
                      fontWeight={"400"}
                      variant="subtitle1"
                    >
                      PM
                    </TravelFromToTimeAMPM>
                  </CustomContainer>
                </CustomContainer>
                <CustomContainer>
                  <Typography
                    color="rgba(15, 24, 48, 0.40)"
                    fontWeight={"300"}
                    textAlign={"left"}
                  >
                    sat. 28 sep.
                  </Typography>
                  <CustomContainer
                    style={{ display: "flex", alignItems: "end" }}
                  >
                    <TravelFromToTime
                      variant="h5"
                      textAlign={"left"}
                      fontWeight={"700"}
                    >
                      05:45
                    </TravelFromToTime>
                    <TravelFromToTimeAMPM
                      fontWeight={"400"}
                      variant="subtitle1"
                    >
                      PM
                    </TravelFromToTimeAMPM>
                  </CustomContainer>
                </CustomContainer>
              </div>

              <CustomContainer
                style={{
                  display: "flex",
                }}
              >
                <div
                  style={{
                    marginRight: "18px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "5px",
                  }}
                >
                  <Image src={dot} alt={"dot"} />
                  <div
                    style={{
                      height: "100%",
                      width: "2px",
                      backgroundColor: "#D9DEE4",
                      marginTop: "5px",
                    }}
                  ></div>
                  <Image src={dot} alt={"dot"} />
                </div>
                <CustomContainer>
                  <Typography color="#0D2533" fontWeight={"500"}>
                    Kuwait International Airport - KWI
                  </Typography>
                  <CustomContainer
                    style={{ display: "flex", paddingTop: "5px" }}
                  >
                    <CustomContainer>
                      <Typography
                        textTransform={"capitalize"}
                        variant="subtitle1"
                        fontWeight={"400"}
                        color="rgba(15, 24, 48, 0.40)"
                        style={{
                          fontSize: "10px",
                        }}
                      >
                        time
                      </Typography>
                      <Typography
                        color="#808591"
                        fontWeight={"500"}
                        style={{
                          fontSize: "12px",
                        }}
                        textTransform={"capitalize"}
                      >
                        2 hours 15 mins
                      </Typography>
                    </CustomContainer>
                    <CustomContainer>
                      <Typography
                        textTransform={"capitalize"}
                        variant="subtitle1"
                        fontWeight={"400"}
                        color="rgba(15, 24, 48, 0.40)"
                        style={{
                          fontSize: "10px",
                        }}
                      >
                        Trip no.
                      </Typography>
                      <Typography
                        color="#808591"
                        fontWeight={"500"}
                        style={{
                          fontSize: "12px",
                        }}
                        textTransform={"capitalize"}
                      >
                        FT45643
                      </Typography>
                    </CustomContainer>
                  </CustomContainer>
                  <CustomContainer
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <CompanyFlight>
                      <Image
                        width={30}
                        height={30}
                        src={FLIGHTCOMPANY}
                        alt="FLIGHTCOMPANY"
                      />
                    </CompanyFlight>
                    <div>
                      <Typography
                        color="#808591"
                        fontWeight={"500"}
                        variant="subtitle1"
                        style={{ fontSize: "14px" }}
                      >
                        Saudi Airlines - Economic
                      </Typography>
                      <Typography
                        color={"#5A7280"}
                        fontWeight={"400"}
                        style={{ fontSize: "12px" }}
                      >
                        Boing - 5675
                      </Typography>
                    </div>
                  </CustomContainer>
                  <CustomContainer
                    style={{
                      display: "flex",
                      paddingTop: "18px",
                      alignItems: "self-end",
                    }}
                  >
                    <BenefitsContainer>
                      <Image src={wifi} alt={"wifi"} />
                    </BenefitsContainer>
                    <BenefitsContainer>
                      <Image src={power} alt={"power"} />
                    </BenefitsContainer>
                    <BenefitsContainer>
                      <Image src={tv} alt={"tv"} />
                    </BenefitsContainer>
                    <BenefitsContainer>
                      <Image src={food} alt={"food"} />
                    </BenefitsContainer>
                    <Typography
                      variant="body2"
                      color="#31629F"
                      textAlign={"right"}
                      fontWeight={"500"}
                      style={{
                        textDecorationLine: "underline",
                        paddingLeft: "30px",
                      }}
                    >
                      More details
                    </Typography>
                  </CustomContainer>
                  <Typography
                    style={{ paddingTop: "35px" }}
                    color="#0D2533"
                    fontWeight={"500"}
                  >
                    Dubai International Airport - DXC
                  </Typography>
                </CustomContainer>
              </CustomContainer>
            </CustomContainer>
            <CustomContainer
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div
                style={{
                  width: isMobile ? "" : "40%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <CustomContainer>
                  <Typography
                    fontWeight={"300"}
                    variant="subtitle2"
                    color="rgba(15, 24, 48, 0.40)"
                    textAlign={"left"}
                  >
                    Waiting time
                  </Typography>
                  <Typography
                    fontWeight={"500"}
                    variant="subtitle2"
                    color="#F0A20A"
                    textAlign={"left"}
                  >
                    2 hours 15 minutes
                  </Typography>
                </CustomContainer>
              </div>
              <div
                style={{
                  marginRight: "18px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingLeft: isMobile ? "" : "6.5%",
                  paddingRight: isMobile ? "" : "6.5%",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "2px",
                    // backgroundColor: "#D9DEE4",
                    borderRight: "2px dotted #F9C22D",

                    marginTop: "5px",
                  }}
                ></div>
              </div>
              <CustomContainer>
                <CustomContainer>
                  <div
                    style={{
                      background: "#FFFCF4",
                      borderRadius: "6px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      paddingLeft: "16px",
                      width: "80%",
                      margin: "30px",
                    }}
                  >
                    <Typography color="#F0A20A" fontWeight={"500"}>
                      Change plane in Dubai
                    </Typography>
                  </div>
                </CustomContainer>
              </CustomContainer>
            </CustomContainer>
            <CustomContainer
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div
                style={{
                  width: "40%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CustomContainer>
                  <Typography
                    color="rgba(15, 24, 48, 0.40)"
                    fontWeight={"300"}
                    textAlign={"left"}
                  >
                    sat. 28 sep.
                  </Typography>
                  <CustomContainer
                    style={{ display: "flex", alignItems: "end" }}
                  >
                    <TravelFromToTime
                      variant="h5"
                      textAlign={"left"}
                      fontWeight={"700"}
                    >
                      05:45
                    </TravelFromToTime>
                    <TravelFromToTimeAMPM
                      fontWeight={"400"}
                      variant="subtitle1"
                    >
                      PM
                    </TravelFromToTimeAMPM>
                  </CustomContainer>
                </CustomContainer>
                <CustomContainer>
                  <Typography
                    color="rgba(15, 24, 48, 0.40)"
                    fontWeight={"300"}
                    textAlign={"left"}
                  >
                    sat. 28 sep.
                  </Typography>
                  <CustomContainer
                    style={{ display: "flex", alignItems: "end" }}
                  >
                    <TravelFromToTime
                      variant="h5"
                      textAlign={"left"}
                      fontWeight={"700"}
                    >
                      05:45
                    </TravelFromToTime>
                    <TravelFromToTimeAMPM
                      fontWeight={"400"}
                      variant="subtitle1"
                    >
                      PM
                    </TravelFromToTimeAMPM>
                  </CustomContainer>
                </CustomContainer>
              </div>

              <CustomContainer
                style={{
                  display: "flex",
                }}
              >
                <div
                  style={{
                    marginRight: "18px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "5px",
                  }}
                >
                  <Image src={dot} alt={"dot"} />
                  <div
                    style={{
                      height: "100%",
                      width: "2px",
                      backgroundColor: "#D9DEE4",
                      marginTop: "5px",
                    }}
                  ></div>
                  <Image src={dot} alt={"dot"} />
                </div>
                <CustomContainer>
                  <Typography color="#0D2533" fontWeight={"500"}>
                    Dubai International Airport - DXC{" "}
                  </Typography>
                  <CustomContainer
                    style={{ display: "flex", paddingTop: "5px" }}
                  >
                    <CustomContainer>
                      <Typography
                        textTransform={"capitalize"}
                        variant="subtitle1"
                        fontWeight={"400"}
                        color="rgba(15, 24, 48, 0.40)"
                        style={{
                          fontSize: "10px",
                        }}
                      >
                        time
                      </Typography>
                      <Typography
                        color="#808591"
                        fontWeight={"500"}
                        style={{
                          fontSize: "12px",
                        }}
                        textTransform={"capitalize"}
                      >
                        2 hours 15 mins
                      </Typography>
                    </CustomContainer>
                    <CustomContainer>
                      <Typography
                        textTransform={"capitalize"}
                        variant="subtitle1"
                        fontWeight={"400"}
                        color="rgba(15, 24, 48, 0.40)"
                        style={{
                          fontSize: "10px",
                        }}
                      >
                        Trip no.
                      </Typography>
                      <Typography
                        color="#808591"
                        fontWeight={"500"}
                        style={{
                          fontSize: "12px",
                        }}
                        textTransform={"capitalize"}
                      >
                        FT45643
                      </Typography>
                    </CustomContainer>
                  </CustomContainer>
                  <CustomContainer
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <CompanyFlight>
                      <Image
                        width={30}
                        height={30}
                        src={FLIGHTCOMPANY}
                        alt="FLIGHTCOMPANY"
                      />
                    </CompanyFlight>
                    <div>
                      <Typography
                        color="#808591"
                        fontWeight={"500"}
                        variant="subtitle1"
                        style={{ fontSize: "14px" }}
                      >
                        Saudi Airlines - Economic
                      </Typography>
                      <Typography
                        color={"#5A7280"}
                        fontWeight={"400"}
                        style={{ fontSize: "12px" }}
                      >
                        Boing - 5675
                      </Typography>
                    </div>
                  </CustomContainer>
                  <CustomContainer
                    style={{
                      display: "flex",
                      paddingTop: "18px",
                      alignItems: "self-end",
                    }}
                  >
                    <BenefitsContainer>
                      <Image src={wifi} alt={"wifi"} />
                    </BenefitsContainer>
                    <BenefitsContainer>
                      <Image src={power} alt={"power"} />
                    </BenefitsContainer>
                    <BenefitsContainer>
                      <Image src={tv} alt={"tv"} />
                    </BenefitsContainer>
                    <BenefitsContainer>
                      <Image src={food} alt={"food"} />
                    </BenefitsContainer>
                    <Typography
                      variant="body2"
                      color="#31629F"
                      textAlign={"right"}
                      fontWeight={"500"}
                      style={{
                        textDecorationLine: "underline",
                        paddingLeft: "30px",
                      }}
                    >
                      More details
                    </Typography>
                  </CustomContainer>
                  <Typography
                    style={{ paddingTop: "35px" }}
                    color="#0D2533"
                    fontWeight={"500"}
                  >
                    Cairo International Airport - CAI{" "}
                  </Typography>
                </CustomContainer>
              </CustomContainer>
            </CustomContainer>
          </CustomContainer>
        </DialogContent>
      </Dialog>
    </div>
  );
}
