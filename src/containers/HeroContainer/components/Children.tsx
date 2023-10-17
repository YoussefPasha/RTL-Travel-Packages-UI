import { Container, Typography } from "@mui/material";
import React from "react";
import SelectAge from "./SelectAge";
import { Children, changeChildAge } from "@/redux/reducers/roomSlice";
import { useDispatch } from "react-redux";

const Children = ({
  num,
  child,
  RoomId,
}: {
  num: number;
  child: Children;
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
        Child {num} Age
      </Typography>
      <SelectAge
        ages={[2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
        value={child.childAge}
        setValue={(roomId: string, childId: string, newAge: number) => {
          dispatch(changeChildAge({ roomId, childId, newAge }));
        }}
        childId={child.id}
        roomId={RoomId}
      />
    </Container>
  );
};

export default Children;
