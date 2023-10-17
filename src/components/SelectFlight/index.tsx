import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Dropdown from "@/components/Icons/Dropdown";
import FLY from "@/components/Icons/Fly";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import { TextField, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const airports = [
  {
    id: 0,
    airport: "Bahrain international airport",
    location: "Manama Bahrain",
    code: "BAH",
  },
  {
    id: 1,
    airport: "Kuwait international airport",
    location: "Kuwait Kuwait",
    code: "KWI",
  },
];

function getStyles(name: string, personName: string, theme: Theme) {
  return {
    fontWeight:
      personName === name
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

interface SelectHomePageProps {
  backgroundColor?: string;
  defaultSelect?: boolean;
  rtl?: boolean;
  placeholder?: string;
  border?: boolean;
}

export default function SelectHomePage({
  backgroundColor = "#F4F4F4",
  defaultSelect,
  rtl,
  placeholder,
  border,
}: SelectHomePageProps) {
  const theme = useTheme();
  const [selectedAirport, setAirport] = React.useState<string>("");
  const [search, setSearch] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent<typeof selectedAirport>) => {
    const {
      target: { value },
    } = event;
    setAirport(value);
  };

  return (
    <div>
      <FormControl
        sx={{ m: 1, mt: 3 }}
        style={{
          backgroundColor: backgroundColor,
          borderRadius: "8px",
          width: "95%",
          border: border ? "1px solid#F3F4F5" : "",
        }}
        fullWidth
      >
        <Select
          style={{ direction: "ltr" }}
          displayEmpty
          value={selectedAirport}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    direction: rtl ? "rtl" : "ltr",
                  }}
                >
                  {defaultSelect ? "" : <FLY />}
                  <div
                    style={{
                      color: "rgba(25, 44, 70, 0.35)",
                      paddingLeft: "15px",
                    }}
                  >
                    {placeholder ? placeholder : "Travel From"}
                  </div>
                </div>
              );
            }

            return selected;
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": {
              border: border ? "1px solid#F3F4F5" : 0,
            },
          }}
          IconComponent={() => (
            <div style={{ paddingRight: "25px" }}>
              <Dropdown />
            </div>
          )}
        >
          <div style={{ padding: "10px" }}>
            <TextField
              label="Search for a city or airport name"
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          {airports.map((airport) => (
            <MenuItem
              key={airport.id}
              value={airport.airport}
              style={getStyles(airport.airport, selectedAirport, theme)}
            >
              <div style={{ display: "flex" }}>
                <LocalAirportIcon />
                <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                  <Typography fontWeight={"700"} variant="body1">
                    {airport.airport}
                  </Typography>
                  <Typography fontWeight={"400"} variant="subtitle1">
                    {airport.location}
                  </Typography>
                </div>
                <Typography
                  fontWeight={"700"}
                  color={"#32BDA4"}
                  variant="body1"
                >
                  {airport.code}
                </Typography>
              </div>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
