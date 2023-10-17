import React, { useState } from "react";
import SelectFlight from "@/components/SelectFlight";
import SelectTravel from "@/components/SelectTravelTo";
import {
  Button,
  Container,
  FormControl,
  OutlinedInput,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DateRange from "./DateRange";
import PassengerAndRooms from "./PassengerAndRooms";
import { Range } from "react-date-range";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getTotalCounts } from "@/redux/reducers/roomSlice";

const SearchFlightAndHotel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  //get room state
  const { count, values } = useSelector((state: RootState) => state.rooms);
  const { totalAdults, totalChildren, totalInfants } = getTotalCounts(values);

  // open select date range
  const [openDateRange, setOpenDateRange] = React.useState(false);

  // open passenger & rooms popup
  const [openPassengerAndRooms, setOpenPassengerAndRooms] =
    React.useState(false);

  //today and max date to validate if user did not add dates
  let today = new Date();
  let maxEndDate = new Date(today);
  maxEndDate.setDate(maxEndDate.getDate() + 28);

  //selection for the library
  const [selection, setSelection] = useState<Range[]>([
    {
      startDate: today,
      endDate: maxEndDate,
      key: "selection",
      color: "#32BDA4",
    },
  ]);

  // onchange for the library
  const handleDateRangeChange = (newSelection: Range[]) => {
    if (
      newSelection[0] &&
      newSelection[0].startDate &&
      newSelection[0].endDate
    ) {
      // Explicitly cast startDate and endDate to Date types
      const startDate: Date = newSelection[0].startDate;
      const endDate: Date = newSelection[0].endDate;
      newSelection[0].color = "#32BDA4";
      // Calculate the number of days in the selected range
      const daysInSelectedRange =
        (endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000);

      if (daysInSelectedRange <= 28) {
        // Update the selection if the range is within 28 days
        setSelection(newSelection);
      } else {
        // Reset the selection if it exceeds 28 days
        setSelection([
          {
            startDate,
            endDate: maxEndDate,
            key: "selection",
            color: "#32BDA4",
          },
        ]);
      }
    }
  };

  return (
    <Container
      style={{
        width: isMobile ? "100%" : "30%",
        height: "72%",
        backgroundColor: "#fff",
        borderRadius: "12px",
        paddingTop: "30px",
        marginRight: isMobile ? "0px" : "100px",
      }}
    >
      <Typography color="#0B1522" variant="h3">
        Discover <strong style={{ color: "#32BDA4" }}>1,456</strong> expertly
        crafted packages, just for you! ✈️
      </Typography>
      <SelectFlight />
      <SelectTravel />

      <div style={{ display: "flex", width: "100%", padding: 0 }}>
        <FormControl
          style={{
            backgroundColor: "#F4F4F4",
            borderRadius: "8px",
            width: "95%",
          }}
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            m: 1,
          }}
          fullWidth
        >
          <OutlinedInput
            id="1"
            placeholder="Departure & Return date"
            onClick={() => setOpenDateRange(true)}
            value={`${dayjs(selection[0].startDate).format("D MMM, YYYY	")} `}
            sx={{
              cursor: "pointer",
            }}
          />
        </FormControl>
        <FormControl
          style={{
            backgroundColor: "#F4F4F4",
            borderRadius: "8px",
            width: "95%",
          }}
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            m: 1,
          }}
          fullWidth
        >
          <OutlinedInput
            id="2"
            placeholder="Departure & Return date"
            onClick={() => setOpenDateRange(true)}
            value={`${dayjs(selection[0].endDate).format("D MMM, YYYY	")}`}
            sx={{
              cursor: "pointer",
            }}
          />
        </FormControl>
      </div>
      <FormControl
        style={{
          backgroundColor: "#F4F4F4",
          borderRadius: "8px",
          width: "95%",
        }}
        sx={{
          boxShadow: "none",
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
          m: 1,
        }}
        fullWidth
      >
        <OutlinedInput
          id="3"
          placeholder="2 adult, 0 Children, 0 infant"
          onClick={() => setOpenPassengerAndRooms(true)}
          value={`${count} Rooms ${totalAdults} Adults ${totalChildren} Children ${totalInfants} Infants`}
        />
      </FormControl>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "20px",
        }}
      >
        <Button
          style={{
            fontSize: "18px",
            fontWeight: "500",
            backgroundColor: "#31629F",
            margin: "20px",
            padding: "10px",
            borderRadius: "12px",
            color: "#fff",
          }}
          variant="contained"
          fullWidth
        >
          Start search
        </Button>
      </div>
      <DateRange
        selection={selection}
        handleDateRangeChange={handleDateRangeChange}
        open={openDateRange}
        handleClose={() => setOpenDateRange(false)}
      />
      <PassengerAndRooms
        open={openPassengerAndRooms}
        handleClose={() => setOpenPassengerAndRooms(false)}
      />
    </Container>
  );
};

export default SearchFlightAndHotel;
