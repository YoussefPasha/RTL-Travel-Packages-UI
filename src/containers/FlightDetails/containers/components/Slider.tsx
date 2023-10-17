import React from "react";
import { Slider } from "@mui/material";

interface SliderComponentProps {
  value: number | number[];
  handleChange: (event: Event, newValue: number | number[]) => void;
  ariaLabel: string;
  getAriaLabel: () => string;
  valueLabelFormat: string;
}

const SliderComponent = ({
  value,
  handleChange,
  ariaLabel,
  getAriaLabel,
  valueLabelFormat,
}: SliderComponentProps) => {
  return (
    <Slider
      getAriaLabel={getAriaLabel}
      value={value}
      onChange={handleChange}
      aria-label={ariaLabel}
      valueLabelDisplay="on"
      valueLabelFormat={(value) => `${value} ${valueLabelFormat}`}
      style={{ marginTop: "50px" }}
      sx={{
        "& .MuiSlider-thumb": {
          height: 27,
          width: 27,
          backgroundColor: "#00B5BC",
          border: "1px solid currentColor",
          "&:hover": {
            boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
          },
          "& .airbnb-bar": {
            height: 9,
            width: 1,
            backgroundColor: "currentColor",
            marginLeft: 1,
            marginRight: 1,
          },
        },
        "& .MuiSlider-track": {
          height: 3,
        },
        "& .MuiSlider-rail": {
          color: "#d8d8d8",
          opacity: 1,
          height: 3,
        },
        "& .MuiSlider-valueLabel": {
          fontSize: 14,
          fontWeight: "300",
          top: -6,
          backgroundColor: "unset",
          color: "#404D58",
          "&:before": {
            display: "none",
          },
          "& *": {
            background: "transparent",
            color: "#000",
          },
        },
      }}
    />
  );
};

export default SliderComponent;
