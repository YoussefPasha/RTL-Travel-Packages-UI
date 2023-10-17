"use client";
import Cities from "@/containers/Cities";
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import PackageItem from "@/components/PackageItem";

import React from "react";
import styled from "styled-components";

const Title = styled(Typography)`
  color: #2b679b;
  font-family: Dubai;
  font-style: normal;
  font-weight: 700;
  line-height: 67px; /* 167.5% */
`;

const TermsAndConditions = ({ params: { lng } }: any) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      style={{
        marginTop: "100px",
        padding: "30px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Title variant="h3">Search results</Title>
        {isMobile ? (
          <></>
        ) : (
          <FormControl style={{ width: "200px" }}>
            <InputLabel id="demo-simple-select-label">Price</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": {
                  border: "1px solid#F3F4F5",
                },
                backgroundColor: "#fff",
              }}
            >
              <MenuItem value={10}>Low to High</MenuItem>
              <MenuItem value={20}>High to Low</MenuItem>
            </Select>
          </FormControl>
        )}
      </div>
      <div style={{ width: isMobile ? "95vw" : "", marginTop: "30px" }}>
        <Cities showHeader lng={lng} DisplayComponent={PackageItem} />
      </div>
    </div>
  );
};

export default TermsAndConditions;
