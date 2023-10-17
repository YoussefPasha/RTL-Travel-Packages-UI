import { ButtonBase, Divider, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState, useCallback, RefObject } from "react";
import styled from "styled-components";
import Expand from "../Icons/ExpandMoreIcon";
import CKW from "../Icons/countries";
import SelectOption from "../Icons/SelectOption";

const UserInfo = styled(ButtonBase)`
  padding: 0.25rem;
  border-radius: 8px;
  & > *:not(:first-child) {
    box-sizing: border-box;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

interface ItemTextProps {
  text: string;
}

const ItemText = ({ text }: ItemTextProps) => {
  return (
    <Typography
      variant="body1"
      fontSize={"2.8rem"}
      fontWeight={"500"}
      style={{
        color: "rgba(29, 27, 25, 0.70)",
      }}
    >
      {text}
    </Typography>
  );
};

interface CountrySettingsProps {
  userSettingButtonRef: RefObject<HTMLButtonElement>;
  lng: string;
}

const CountrySettings = ({
  userSettingButtonRef,
  lng,
}: CountrySettingsProps) => {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const openUserMenu = useCallback(() => setUserMenuOpen(true), []);
  const closeUserMenu = useCallback((ev: MouseEvent) => {
    ev.stopPropagation();
    ev.preventDefault();
    setUserMenuOpen(false);
  }, []);

  return (
    <div>
      <UserInfo
        ref={userSettingButtonRef}
        onClick={openUserMenu}
        aria-controls={isUserMenuOpen ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isUserMenuOpen ? "true" : undefined}
      >
        <CKW />
        <Typography variant="body1" fontSize="3.2rem" fontWeight="700" noWrap>
          KUWAIT
        </Typography>
        <Expand />
      </UserInfo>
      <Menu
        id="basic-menu"
        anchorEl={userSettingButtonRef.current}
        open={isUserMenuOpen}
        onClose={closeUserMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          sx: {
            padding: 0,
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(2px)",
          },
        }}
        style={{ marginTop: "50px" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem style={{ width: "240px", height: "38px" }}>
          <Typography variant="body1" fontSize={"3.2rem"} fontWeight={"700"}>
            Country
          </Typography>
        </MenuItem>
        <MenuItem
          style={{
            width: "240px",
            height: "38px",
            padding: "14px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.40)",
            marginBottom: "2px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                paddingRight: lng === "en" ? "7px" : "0px",
                paddingLeft: lng === "ar" ? "7px" : "0px",
              }}
            >
              <CKW />
            </div>
            <ItemText text={"Kuwait"} />
          </div>
          <SelectOption />
        </MenuItem>
        <MenuItem
          style={{
            width: "240px",
            height: "38px",
            padding: "14px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.40)",
            marginBottom: "2px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                paddingRight: lng === "en" ? "7px" : "0px",
                paddingLeft: lng === "ar" ? "7px" : "0px",
              }}
            >
              <CKW />
            </div>
            <ItemText text={"Kuwait"} />
          </div>
          <SelectOption />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default CountrySettings;
