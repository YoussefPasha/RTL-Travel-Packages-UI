import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface FullScreenDialogProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  title: string;
}

export default function FullScreenDialog({
  open,
  handleClose,
  children,
  title,
}: FullScreenDialogProps) {
  return (
    <div>
      <Drawer
        anchor={"bottom"}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            position: "absolute",
            display: open ? "" : "none",
            marginBottom: "10%",
            height: "80%",
            borderTopRightRadius: "16px",
            borderTopLeftRadius: "16px",
          },
        }}
        style={{ height: "80%" }}
        variant="permanent"
      >
        <div style={{ padding: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" fontWeight={"500"}>
              {title}
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Typography color="#346DB4" fontWeight={"500"} fontSize={"18px"}>
                Reset
              </Typography>
              <div
                style={{ paddingLeft: "15px", cursor: "pointer" }}
                onClick={handleClose}
              >
                <CloseIcon />
              </div>
            </div>
          </div>
          {children}
        </div>
      </Drawer>
    </div>
  );
}
