import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import Search from "./Icons/SearchIcon";
const Wrapper = styled.div`
  width: 222px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #4dccb5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchForOffers = () => {
  return (
    <Wrapper>
      <Search />
      <Typography
        color={"#C6F3EB"}
        gutterBottom
        variant="body1"
        component="b"
        sx={{
          textAlign: "center",
        }}
        style={{
          paddingTop: "5px",
          paddingLeft: "12px",
        }}
      >
        Search for offers
      </Typography>
    </Wrapper>
  );
};

export default SearchForOffers;
