import { ButtonBase, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState, useCallback, RefObject } from "react";
import styled from "styled-components";
import Expand from "../Icons/ExpandMoreIcon";
import SelectOption from "../Icons/SelectOption";
import Currency from "../Icons/Currency";

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

const ItemText: React.FC<ItemTextProps> = ({ text }) => {
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

interface CurrencySettingProps {
  userSettingButtonRef: RefObject<HTMLButtonElement>;
  lng: string;
}

const CurrencySetting: React.FC<CurrencySettingProps> = ({
  userSettingButtonRef,
}) => {
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
        <Currency />
        <Typography variant="body1" fontSize="3.2rem" fontWeight="700" noWrap>
          KWD
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
        {/*  */}
        <MenuItem style={{ width: "240px", height: "38px" }}>
          <Typography variant="body1" fontSize={"3.2rem"} fontWeight={"700"}>
            Currency
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
          <ItemText text={"KWD"} />
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
          <ItemText text={"EUR"} />
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
          <ItemText text={"USD"} />
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
          <ItemText text={"SAR"} />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default CurrencySetting;
