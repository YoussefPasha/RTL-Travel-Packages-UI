import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { InputLabel } from "@mui/material";
import { Children } from "@/redux/reducers/roomSlice";

export default function SelectAge({
  ages,
  value,
  setValue,
  childId,
  roomId,
}: {
  ages: number[];
  value?: number;
  setValue: (roomId: string, childId: string, newAge: number) => void;
  childId: string;
  roomId: string;
}) {
  const handleChange = (event: SelectChangeEvent) => {
    const newAge = Number(event.target.value);
    setValue(roomId, childId, newAge);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="simple-select-label">Age</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={value?.toString()}
          label="Age"
          onChange={handleChange}
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            backgroundColor: "#fff",
          }}
        >
          {ages.map((v, i) => {
            return <MenuItem key={i} value={v}>{`${v} Year`}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
