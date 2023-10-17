import * as React from "react";
import Box from "@mui/material/Box";
import AccordionComponent from "@/components/Accordion";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "100px",
        flexDirection: "column",
      }}
    >
      <AccordionComponent />
    </Box>
  );
}
