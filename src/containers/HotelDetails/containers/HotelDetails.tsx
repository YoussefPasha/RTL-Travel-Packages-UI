import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  Rating,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import HotelBg from "@IMAGES/hotel.png";
import styled from "styled-components";
import room from "@SVGs/HotelDetails/room.svg";
import bed from "@SVGs/HotelDetails/bed.svg";
import beds from "@SVGs/HotelDetails/beds.svg";
import freeparking from "@SVGs/HotelDetails/freeparking.svg";
import swimming from "@SVGs/HotelDetails/swimming.svg";
import wifi from "@SVGs/HotelDetails/wifi.svg";

const InfoWrapper = styled.div`
  background: rgba(4, 0, 0, 0.5);
  backdrop-filter: blur(7.5px);
  width: 100%;
  height: 30%;
  z-index: 1;
  position: absolute;
  bottom: 0;
  padding-left: 25px;
  padding-top: 11px;
`;

interface HotelDetailsProps {
  open: boolean;
  handleClose: () => void;
}

export default function HotelDetails({ open, handleClose }: HotelDetailsProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState(0);

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <Dialog
        PaperProps={{ sx: { borderRadius: "12px", position: "relative" } }}
        open={open}
        onClose={handleClose}
        scroll={"paper"}
        fullScreen={fullScreen}
      >
        <DialogTitle>Hotel Details </DialogTitle>
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
            backgroundColor: "#F5F7F9",
            padding: 0,
          }}
          dividers
        >
          <div
            style={{
              position: "relative",
            }}
          >
            <InfoWrapper>
              <Rating
                style={{ marginTop: "10px" }}
                name="half-rating"
                defaultValue={3.5}
                precision={0.5}
                readOnly
              />
              <Typography color="#fff" variant="h5">
                Historia Hotel - Special Category
              </Typography>
            </InfoWrapper>
            <Image
              src={HotelBg}
              alt={"HotelBg"}
              style={{
                height: "40%",
                width: "100%",
              }}
            />
          </div>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            variant="fullWidth"
            style={{ paddingTop: "20px" }}
          >
            <Tab value={0} label="Hotel info" {...a11yProps(0)} />
            <Tab value={1} label="Rooms" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Typography color="#07689F" fontWeight={"600"} variant="h6">
              Amenities
            </Typography>
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                alignItems: "center",
              }}
            >
              <Image width={16} height={16} src={room} alt={"room"} />
              <Typography
                variant="subtitle1"
                paddingLeft={"5px"}
                color={"#555"}
                fontWeight={"300"}
              >
                Room area: 45 square metres
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "5px",
                alignItems: "center",
              }}
            >
              <Image width={16} height={16} src={swimming} alt={"swimming"} />
              <Typography
                variant="subtitle1"
                paddingLeft={"5px"}
                color={"#555"}
                fontWeight={"300"}
              >
                Swimming pool
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "5px",
                alignItems: "center",
              }}
            >
              <Image width={16} height={16} src={bed} alt={"bed"} />
              <Typography
                variant="subtitle1"
                paddingLeft={"5px"}
                color={"#555"}
                fontWeight={"300"}
              >
                4 beds{" "}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "5px",
                alignItems: "center",
              }}
            >
              <Image width={16} height={16} src={beds} alt={"beds"} />
              <Typography
                variant="subtitle1"
                paddingLeft={"5px"}
                color={"#555"}
                fontWeight={"300"}
              >
                1 king bed or 2 twin beds{" "}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "5px",
                alignItems: "center",
              }}
            >
              <Image width={16} height={16} src={wifi} alt={"wifi"} />
              <Typography
                variant="subtitle1"
                paddingLeft={"5px"}
                color={"#555"}
                fontWeight={"300"}
              >
                Free Wifi{" "}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "5px",
                alignItems: "center",
              }}
            >
              <Image
                width={16}
                height={16}
                src={freeparking}
                alt={"freeparking"}
              />
              <Typography
                variant="subtitle1"
                paddingLeft={"5px"}
                color={"#555"}
                fontWeight={"300"}
              >
                Free parking{" "}
              </Typography>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </DialogContent>
      </Dialog>
    </div>
  );
}
