import React from "react";
import { Container } from "@mui/material";

interface CustomContainerProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const CustomContainer: React.FC<CustomContainerProps> = ({
  children,
  style,
}) => {
  return style ? (
    <Container style={{ padding: 0, ...style }}>{children}</Container>
  ) : (
    <Container style={{ padding: 0 }}>{children}</Container>
  );
};

export default CustomContainer;
