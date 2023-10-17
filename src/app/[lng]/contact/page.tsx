"use client";
import React from "react";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

const TermsAndConditions = () => {
  const [phone, setPhone] = React.useState("");

  const handleChange = (newPhone: string) => {
    setPhone(newPhone);
  };

  const names = ["General", "Complaint", "Booking Request"];

  return (
    <div
      style={{
        marginTop: "100px",
        padding: "30px",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" color="rgb(43, 103, 155)">
            CONTACT US
          </Typography>
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            style={{
              marginBottom: "20px",
              marginTop: "30px",
            }}
          />
          <MuiTelInput
            label="Mobile number"
            value={phone}
            onChange={handleChange}
            fullWidth
            style={{
              marginBottom: "20px",
              marginTop: "10px",
            }}
          />
          <FormControl
            style={{
              marginBottom: "20px",
              marginTop: "10px",
            }}
            sx={{ m: 1, width: "100%" }}
          >
            <InputLabel id="demo-multiple-name-label">Category</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              input={<OutlinedInput label="Category" />}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            id="outlined-textarea"
            label="your issue"
            placeholder="Issue"
            multiline
            fullWidth
          />
        </Paper>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
