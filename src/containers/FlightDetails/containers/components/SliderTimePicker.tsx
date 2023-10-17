import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

interface TimeRangeSliderProps {
  onChange: (timeRange: [number, number]) => void;
}

function TimeRangeSlider({ onChange }: TimeRangeSliderProps) {
  const [timeRange, setTimeRange] = useState<[number, number]>([
    8 * 60,
    16 * 60,
  ]); // Initial time range in minutes (8:00 AM - 4:00 PM)

  const handleChange: any = (
    event: Event,
    newValue: [number, number] | number
  ) => {
    if (Array.isArray(newValue)) {
      setTimeRange(newValue);
      onChange(newValue);
    }
  };

  const formatTime = (minutes: number) => {
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;
    const ampm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    const formattedMinute = minute.toString().padStart(2, "0");
    return `${formattedHour}:${formattedMinute} ${ampm}`;
  };

  return (
    <div>
      <Typography gutterBottom>Time Range</Typography>
      <Slider
        value={timeRange}
        onChange={handleChange}
        valueLabelDisplay="on"
        valueLabelFormat={(value) => formatTime(value)}
        min={0}
        max={24 * 60}
        step={15} // 15 minutes interval
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
      <Typography variant="caption" gutterBottom>
        {formatTime(timeRange[0])} - {formatTime(timeRange[1])}
      </Typography>
    </div>
  );
}

export default TimeRangeSlider;
