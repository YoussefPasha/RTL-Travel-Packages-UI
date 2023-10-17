import React from "react";
import { Container, Typography } from "@mui/material";
import SelectAge from "./SelectAge";
import { Infants, changeInfantAge } from "@/redux/reducers/roomSlice";
import { useDispatch } from "react-redux";

const Infant = ({
  num,
  infant,
  RoomId,
}: {
  num: number;
  infant: Infants;
  RoomId: string;
}) => {
  const dispatch = useDispatch();

  return (
    <Container
      sx={{
        backgroundColor: "#f8f8f8f8",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      <Typography variant="body1" fontWeight={"700"}>
        infant {num} Age
      </Typography>
      <SelectAge
        ages={[0, 1]}
        value={infant.infantsAge}
        setValue={(roomId: string, childId: string, newAge: number) => {
          dispatch(changeInfantAge({ roomId, infantId: childId, newAge }));
        }}
        childId={infant.id}
        roomId={RoomId}
      />
    </Container>
  );
};

export default Infant;
