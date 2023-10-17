import { Container, Typography } from "@mui/material";
import React, { useState } from "react";
import IncrementDecrementMui from "../container/IncrementDecrement";
import DeleteIcon from "@mui/icons-material/Delete";
import Infant from "./Infant";
import Children from "./Children";
import {
  RoomDetails,
  decrementAdultCount,
  decrementChildCount,
  decrementInfantCount,
  incrementAdultCount,
  incrementChildCount,
  incrementInfantCount,
} from "@/redux/reducers/roomSlice";
import { useDispatch } from "react-redux";

const Room = ({
  num,
  handleDecrement,
  value,
}: {
  num: number;
  handleDecrement: (id: string) => void;
  value: RoomDetails;
}) => {
  const dispatch = useDispatch();
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);

  return (
    <Container style={{ paddingBottom: "20px", paddingTop: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight={"700"} color="#32BDA4">
          Room {num}
        </Typography>
        {num > 1 && (
          <DeleteIcon
            onClick={() => handleDecrement(value.id)}
            style={{
              color: "#bb0404",
              width: "30px",
              height: "30px",
            }}
          />
        )}
      </div>
      <Container
        sx={{
          backgroundColor: "#defff5f8",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "12px",
          marginTop: "20px",
        }}
      >
        <Typography variant="h6" fontWeight={"700"}>
          Adult
        </Typography>
        <Typography variant="subtitle2">Above 11 years</Typography>
        <IncrementDecrementMui
          startCount={1}
          count={value.adultCounter}
          maxNumber={6}
          handleActionDecrement={() => {
            dispatch(decrementAdultCount({ roomId: value.id }));
          }}
          handleActionIncrement={() => {
            dispatch(incrementAdultCount({ roomId: value.id }));
          }}
        />
      </Container>
      <Container
        sx={{
          backgroundColor: "#defff5f8",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "12px",
          marginTop: "10px",
        }}
      >
        <Typography variant="h6" fontWeight={"700"}>
          Child
        </Typography>
        <Typography variant="subtitle2">2-11 years</Typography>

        <IncrementDecrementMui
          startCount={0}
          count={value.children.length}
          maxNumber={6}
          handleActionDecrement={() => {
            dispatch(decrementChildCount({ roomId: value.id }));
          }}
          handleActionIncrement={() => {
            dispatch(incrementChildCount({ roomId: value.id }));
          }}
        />
      </Container>
      {value.children.map((child, i) => (
        <div id="children" key={i}>
          <Children num={i + 1} child={child} RoomId={value.id} />
        </div>
      ))}
      <Container
        sx={{
          backgroundColor: "#defff5f8",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "12px",
          marginTop: "10px",
        }}
      >
        <Typography variant="h6" fontWeight={"700"}>
          Infant
        </Typography>
        <Typography variant="subtitle2">less than 1 years</Typography>

        <IncrementDecrementMui
          startCount={0}
          count={value.infants.length}
          maxNumber={4}
          handleActionDecrement={() => {
            dispatch(decrementInfantCount({ roomId: value.id }));
          }}
          handleActionIncrement={() => {
            dispatch(incrementInfantCount({ roomId: value.id }));
          }}
        />
      </Container>
      {value.infants.map((infant, i) => (
        <div id="Infant" key={i}>
          <Infant num={i + 1} infant={infant} RoomId={value.id} />
        </div>
      ))}
    </Container>
  );
};

export default Room;
