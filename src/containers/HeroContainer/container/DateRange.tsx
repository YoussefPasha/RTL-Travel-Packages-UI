import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { DateRangePicker as Calender } from "react-date-range";
import { Range } from "react-date-range";
import "./dateRange.css";

interface DateRangePickerProps {
  open: boolean;
  handleClose: () => void;
  lng?: string;
  handleDateRangeChange: (newSelection: Range[]) => void;
  selection: Range[];
}

export default function DateRangePicker({
  open,
  handleClose,
  lng,
  handleDateRangeChange,
  selection,
}: DateRangePickerProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  let today = new Date();

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
        maxWidth="xs"
      >
        <DialogTitle>Departure & Return date</DialogTitle>
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
            paddingLeft: "50px",
          }}
          dividers
        >
          <Calender
            ranges={selection}
            onChange={(item) => handleDateRangeChange([item.selection])}
            showMonthAndYearPickers={false}
            className="rdrDefinedRangesWrapper"
            minDate={today}
            color="#32BDA4"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
