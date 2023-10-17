"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import SelectOption from "@/components/Icons/SelectOption";
import CKW from "@/components/Icons/countries";
import SelectHomePage from "@/components/SelectFlight";
import { Container, useMediaQuery, useTheme } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "30px 10px 20px 20px",
      }}
      sx={{ m: 0, p: 1 }}
      {...other}
    >
      {children}
    </DialogTitle>
  );
}

interface NewUserSettingModelProps {
  open: boolean;
  handleClose: () => void;
  lng: string;
}

export default function NewUserSettingModel({
  open,
  handleClose,
  lng,
}: NewUserSettingModelProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{ sx: { borderRadius: "16px", overflow: "hidden" } }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <div>🌟.لنوفر لك أفضل تجربة مميزة! فقط حدد خياراتك التالية </div>
          <div>Create your best experience, choose below. 🌟</div>
        </BootstrapDialogTitle>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "1px",
            width: "80%",
            backgroundColor: "#F3F4F5",
            marginLeft: "7.5%",
            marginTop: "10px",
          }}
        ></div>
        <DialogContent
          style={{
            paddingTop: "10px",
            overflow: "hidden",
          }}
        >
          <Typography
            style={{
              direction: "rtl",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="body2"
          >
            اللغة - Language
          </Typography>
          <Grid
            container
            style={{
              width: "100%",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingBottom: "20px",
              direction: "ltr",
              justifyContent: "space-between",
            }}
          >
            <Grid item xs={5} sm={5}>
              <div
                style={{
                  width: "100%",
                  border: "1px solid #D8E8F1",
                  borderRadius: "12px",
                  height: "48px",
                  marginTop: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography fontWeight={"500"}>English</Typography>
              </div>
            </Grid>
            <Grid item xs={5} sm={5}>
              <div
                style={{
                  width: "100%",
                  border: "1px solid #D8E8F1",
                  background: "#F0FAFF",
                  borderRadius: "12px",
                  height: "48px",
                  marginTop: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SelectOption />
                <Typography fontWeight={"500"} color="#07689F">
                  العربية
                </Typography>
              </div>
            </Grid>
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "1px",
              width: "90%",
              backgroundColor: "#F3F4F5",
            }}
          ></div>
          <Typography
            style={{
              direction: "rtl",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
            variant="body2"
          >
            البلد - Country
          </Typography>
          <Grid
            container
            style={{
              width: "100%",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingBottom: "20px",
              direction: "ltr",
              justifyContent: "space-between",
            }}
          >
            <Grid item xs={5.5} sm={5}>
              <div
                style={{
                  width: "100%",
                  border: "1px solid #D8E8F1",
                  // background: "#F0FAFF",
                  borderRadius: "12px",
                  height: "48px",
                  marginTop: "18px",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",

                  justifyContent: "right",
                }}
              >
                {/* <SelectOption /> */}
                <Typography style={{}} fontWeight={"500"} color="#07689F">
                  السعودية
                </Typography>
                <div style={{ display: "flex", paddingLeft: "10px" }}>
                  <CKW />
                </div>
              </div>
            </Grid>
            <Grid item xs={5.5} sm={5}>
              <div
                style={{
                  width: "100%",
                  border: "1px solid #D8E8F1",
                  background: "#F0FAFF",
                  borderRadius: "12px",
                  height: "48px",
                  marginTop: "18px",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",

                  justifyContent: "right",
                }}
              >
                <SelectOption />
                <Typography style={{}} fontWeight={"500"} color="#07689F">
                  الكويت
                </Typography>
                <div style={{ display: "flex", paddingLeft: "10px" }}>
                  <CKW />
                </div>
              </div>
            </Grid>
            <Grid item xs={5.5} sm={5}>
              <div
                style={{
                  width: "100%",
                  border: "1px solid #D8E8F1",
                  // background: "#F0FAFF",
                  borderRadius: "12px",
                  height: "48px",
                  marginTop: "18px",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",

                  justifyContent: "right",
                }}
              >
                {/* <SelectOption /> */}
                <Typography style={{}} fontWeight={"500"} color="#07689F">
                  الإمارات
                </Typography>
                <div style={{ display: "flex", paddingLeft: "10px" }}>
                  <CKW />
                </div>
              </div>
            </Grid>
            <Grid
              // style={{
              //   paddingLeft: "40px",
              // }}
              item
              xs={5.5}
              sm={5}
            >
              <div
                style={{
                  width: "100%",
                  border: "1px solid #D8E8F1",
                  // background: "#F0FAFF",
                  borderRadius: "12px",
                  height: "48px",
                  marginTop: "18px",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",

                  justifyContent: "right",
                }}
              >
                {/* <SelectOption /> */}
                <Typography style={{}} fontWeight={"500"} color="#07689F">
                  البحرين
                </Typography>
                <div style={{ display: "flex", paddingLeft: "10px" }}>
                  <CKW />
                </div>
              </div>
            </Grid>
          </Grid>
          <Typography
            style={{
              direction: "rtl",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="body2"
          >
            مطار الإقلاع
          </Typography>
          <SelectHomePage
            rtl
            placeholder={"اختر مطار الإقلاع"}
            defaultSelect
            backgroundColor={"#fff"}
            border
          />
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "20px",
          }}
        >
          <Button
            style={{
              direction: "rtl",
              fontSize: "18px",
              fontWeight: "500",
              backgroundColor: "#31629F",
              margin: "20px",
              padding: "10px",
              borderRadius: "12px",
              color: "#fff",
            }}
            variant="contained"
            onClick={handleClose}
            fullWidth
          >
            استمرار - Continue
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
