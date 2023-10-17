import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography, useMediaQuery } from "@mui/material";
import filter from "@SVGs/FlightDetails/filter.svg";
import order from "@SVGs/FlightDetails/order.svg";
import Image from "next/image";
import RecommendedFlight from "./components/RecommendedFlight";
import OrderBy from "./OrderBy";
import Filters from "./Filters";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";

interface FlightDialogProps {
  open: boolean;
  handleClose: () => void;
}

export default function FlightDialog({ open, handleClose }: FlightDialogProps) {
  const [openFlightDialogFilters, setOpenFlightDialogFilters] =
    React.useState(false);
  const [openFlightDialogOrderBy, setOpenFlightDialogOrderBy] =
    React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Dialog
        PaperProps={{ sx: { borderRadius: "12px", position: "relative" } }}
        open={open}
        onClose={handleClose}
        scroll={"paper"}
        fullScreen={fullScreen}
      >
        <DialogTitle>Change flight</DialogTitle>
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
          }}
          dividers
        >
          <RecommendedFlight />
          <RecommendedFlight />
          <OrderBy
            open={openFlightDialogOrderBy}
            handleClose={() => setOpenFlightDialogOrderBy(false)}
          />
          <Filters
            open={openFlightDialogFilters}
            handleClose={() => setOpenFlightDialogFilters(false)}
          />
        </DialogContent>
        <DialogActions
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Button
            style={{
              display: "flex",
              color: "#182B49",
              justifyContent: "space-between",
            }}
            onClick={() => setOpenFlightDialogFilters(!openFlightDialogFilters)}
          >
            <Image src={filter} alt={"filter"} />
            <Typography style={{ paddingLeft: "5px" }}>Filters</Typography>
          </Button>
          <Button
            style={{
              display: "flex",
              color: "#182B49",
              justifyContent: "space-between",
            }}
            onClick={() => setOpenFlightDialogOrderBy(!openFlightDialogOrderBy)}
          >
            <Image src={order} alt={"order"} />
            <Typography style={{ paddingLeft: "5px" }}>Order by</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
