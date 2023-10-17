import React from "react";
import FullScreenDialog from "./components/FullScreenScrollBottom";
import { Typography } from "@mui/material";

interface OrderByProps {
  open: boolean;
  handleClose: () => void;
}

const OrderBy = ({ open, handleClose }: OrderByProps) => {
  return (
    <FullScreenDialog open={open} handleClose={handleClose} title={"Order By"}>
      <div style={{ paddingTop: "20px" }}>
        <Typography fontSize={"16px"} fontWeight={"300"}>
          Lowest price
        </Typography>
        <div
          style={{
            width: "95%",
            margin: "10px",
            height: "1px",
            backgroundColor: "#F4F4F4",
          }}
        />
        <Typography fontSize={"16px"} fontWeight={"300"}>
          Lowest price
        </Typography>
        <div
          style={{
            width: "95%",
            margin: "10px",
            height: "1px",
            backgroundColor: "#F4F4F4",
          }}
        />
        <Typography fontSize={"16px"} fontWeight={"300"}>
          Lowest price
        </Typography>
      </div>
    </FullScreenDialog>
  );
};

export default OrderBy;
