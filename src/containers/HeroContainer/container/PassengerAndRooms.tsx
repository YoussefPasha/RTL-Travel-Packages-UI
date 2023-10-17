import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography, useMediaQuery, Container, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import IncrementDecrement from "./IncrementDecrement";
import Room from "../components/Room";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementRoomCount,
  incrementRoomCount,
  decrementRoomByLastIndex,
} from "@/redux/reducers/roomSlice"; // Assuming you have a RootState type
import { RootState } from "@/redux/store";

interface DateRangePickerProps {
  open: boolean;
  handleClose: () => void;
  lng?: string;
}

export default function PAssengerAndRoomsPopup({
  open,
  handleClose,
  lng,
}: DateRangePickerProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { count, values } = useSelector((state: RootState) => state.rooms);

  const dispatch = useDispatch();

  const handleActionIncrement = () => {
    dispatch(incrementRoomCount());
  };

  const handleActionDecrement = (id: string) => {
    dispatch(decrementRoomCount(id));
  };

  const handleActionDecrementLastIndex = () => {
    dispatch(decrementRoomByLastIndex());
  };

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
        <DialogTitle component={"div"}>
          <Typography variant="h6" fontWeight={"700"} color="#32BDA4">
            Passengers & Rooms
          </Typography>
          <Typography color="gray" variant="subtitle2" component={"p"}>
            Add passengers numbers and rooms
          </Typography>
        </DialogTitle>
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
          <Container
            sx={{
              backgroundColor: "#f6fcff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "12px",
            }}
          >
            <Typography variant="h6" fontWeight={"700"}>
              Rooms Number
            </Typography>
            <IncrementDecrement
              startCount={1}
              count={count}
              maxNumber={6}
              handleActionIncrement={handleActionIncrement}
              handleActionDecrement={handleActionDecrementLastIndex}
            />
          </Container>
          {values.map((value, i) => (
            <div id="rooms" key={i}>
              <Room
                value={value}
                num={i + 1}
                handleDecrement={handleActionDecrement}
              />
            </div>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
}
