import React from "react";
import FullScreenDialog from "./components/FullScreenScrollBottom";
import {
  Typography,
  Container,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Slider,
} from "@mui/material";
import SliderComponent from "./components/Slider";
import TimePickerViewRenderers from "./components/SliderTimePicker";

interface CheckBoxComponentProps {
  label: string;
  defaultChecked?: boolean;
}

interface FiltersProps {
  open: boolean;
  handleClose: () => void;
}

const CheckBoxComponent = ({
  label,
  defaultChecked = false,
}: CheckBoxComponentProps) => (
  <FormControlLabel
    control={
      <Checkbox
        defaultChecked={defaultChecked}
        sx={{
          "&.Mui-checked": {
            color: "#000", // Set checkbox color to #000 when checked
            borderRadius: "3px",
            borderColor: "#DCDCDC",
          },
        }}
      />
    }
    label={label}
    sx={{ color: "rgba(36, 53, 74, 0.66)", fontSize: "14px" }} // Set the font color of the label to blue
  />
);

const Filters = ({ open, handleClose }: FiltersProps) => {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const [selectedTimeRange, setSelectedTimeRange] = React.useState<
    [number, number]
  >([8 * 60, 16 * 60]);

  const handleTimeRangeChange = (newTimeRange: [number, number]) => {
    setSelectedTimeRange(newTimeRange);
  };

  return (
    <FullScreenDialog title={"Filters"} open={open} handleClose={handleClose}>
      <Container style={{ paddingTop: "20px", paddingLeft: "0px" }}>
        <Typography variant="body1" fontWeight={"500"}>
          Stops
        </Typography>
        <FormGroup style={{ display: "flex", flexDirection: "row" }}>
          <CheckBoxComponent defaultChecked label={"direct"} />
          <CheckBoxComponent label={"1 Stop"} />
          <CheckBoxComponent label={"2 Stop"} />
          <CheckBoxComponent label={"3 Stop"} />
        </FormGroup>
        <div
          style={{
            width: "95%",
            margin: "10px",
            marginTop: "24px",
            height: "1px",
            backgroundColor: "#F4F4F4",
          }}
        />
        <Typography variant="body1" fontWeight={"500"}>
          Price
        </Typography>
        <SliderComponent
          getAriaLabel={() => "Price"}
          value={value}
          handleChange={handleChange}
          ariaLabel="Price"
          valueLabelFormat={`KWD`}
        />
        <div
          style={{
            width: "95%",
            margin: "10px",
            marginTop: "24px",
            height: "1px",
            backgroundColor: "#F4F4F4",
          }}
        />
        <Typography variant="body1" fontWeight={"500"}>
          Departure time
        </Typography>
        <div style={{ marginTop: "20px" }}>
          <TimePickerViewRenderers onChange={handleTimeRangeChange} />
        </div>
      </Container>
    </FullScreenDialog>
  );
};

export default Filters;
