import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import comment1 from "@SVGs/comment1.svg";
import comment2 from "@SVGs/comment2.svg";

interface ClientCommentProps {
  children: React.ReactNode;
}

const ClientComment = ({ children }: ClientCommentProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid item xs={12} sm={3}>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "row" : "column",
          alignItems: "center",
          borderRadius: "12px",
          backgroundColor: "rgba(52, 109, 180, 0.05)",
          height: "350px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -8,
            right: 20,
          }}
        >
          <Image src={comment1} alt="comment1" />
        </div>
        <div
          style={{
            position: "absolute",
            top: -8,
            right: 40,
          }}
        >
          <Image src={comment2} alt="comment2" />
        </div>
        {children}
      </div>
    </Grid>
  );
};

export default ClientComment;
