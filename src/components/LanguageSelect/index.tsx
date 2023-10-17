import { ButtonBase, Divider, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState, useCallback, RefObject, MouseEvent } from "react";
import styled from "styled-components";
import Expand from "../Icons/ExpandMoreIcon";
import SelectOption from "../Icons/SelectOption";
import Link from "next/link";

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

interface LanguageSettingsProps {
  userSettingButtonRef: RefObject<HTMLButtonElement>; // Replace 'number' with the actual type of 'width' prop
  lng: string; // Replace 'number' with the actual type of 'height' prop
}

const LanguageSettings = ({
  userSettingButtonRef,
  lng,
}: LanguageSettingsProps) => {

  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(lng); //En
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
        <Typography
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: "#28303F",
            color: "#fff",
            fontSize: "12px",
            fontWeight: "normal",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          ع
        </Typography>
        <Typography variant="body1" fontSize="3.2rem" fontWeight="700" noWrap>
          {selectedLanguage === "ar" ? "Arabic" : "English"}
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
          <Typography variant="body1" fontSize={"3,2rem"} fontWeight={"700"}>
            Language
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
          <Link
            href="/ar"
            style={{
              width: "240px",
              height: "38px",
              textDecoration: "none",
              color: "#000",
            }}
          >
            <ItemText text={"AR"} />
          </Link>
          {selectedLanguage === "ar" && <SelectOption />}
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
          <Link
            href="/en"
            style={{
              width: "240px",
              height: "38px",
              textDecoration: "none",
              color: "#000",
            }}
          >
            <ItemText text={"EN"} />
          </Link>
          {selectedLanguage === "en" && <SelectOption />}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageSettings;
