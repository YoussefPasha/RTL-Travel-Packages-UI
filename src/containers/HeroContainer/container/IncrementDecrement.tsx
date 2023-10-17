import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface IncrementDecrementProps {
  count: number;
  startCount: number;
  maxNumber: number;
  handleActionIncrement: () => void;
  handleActionDecrement: () => void;
}

function IncrementDecrementMui({
  count,
  startCount,
  maxNumber,
  handleActionIncrement,
  handleActionDecrement,
}: IncrementDecrementProps) {
  const handleIncrement = () => {
    if (count === maxNumber) {
      return;
    } else {
      handleActionIncrement();
    }
  };

  const handleDecrement = () => {
    if (count > startCount) {
      handleActionDecrement();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
      }}
    >
      <AddIcon
        style={{
          color: "#fff",
          cursor: "pointer",
          backgroundColor: "#32BDA4",
          width: "30px",
          height: "30px",
          borderRadius: "6px",
        }}
        onClick={handleIncrement}
      />
      <Typography variant="h6" fontWeight={"700"} style={{ margin: "16px" }}>
        {count.toString().padStart(2, "0")}
      </Typography>
      <RemoveIcon
        style={{
          color: "#fff",
          cursor: "pointer",
          backgroundColor: "#ccc8c8",
          width: "30px",
          height: "30px",
          borderRadius: "6px",
        }}
        onClick={handleDecrement}
      />
    </div>
  );
}

export default IncrementDecrementMui;
