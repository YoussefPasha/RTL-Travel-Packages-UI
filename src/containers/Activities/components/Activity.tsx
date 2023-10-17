import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

import plus from "@SVGs/Activities/plus.svg";
import minus from "@SVGs/Activities/minus.svg";
import Image from "next/image";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PlusWrapper = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 5px;
  border: 1px solid rgba(7, 104, 159, 0.66);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Activity = () => {
  return (
    <Wrapper>
      <div>
        <Typography variant="body1">
          Boulevard City Admission (Weekend)
        </Typography>
        <Typography variant="body1" fontWeight={"600"} color={"#07689F"}>
          36 KWD
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "end", direction: "ltr" }}>
        <Image style={{ marginRight: "12px" }} src={minus} alt={"minus"} />
        <Typography>02</Typography>
        <PlusWrapper style={{ marginLeft: "12px" }}>
          <Image src={plus} alt={"plus"} />
        </PlusWrapper>
      </div>
    </Wrapper>
  );
};

export default Activity;
