import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Divider,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Paper,
  Slide,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { MouseEvent, useCallback, useRef, useState } from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { Skeleton } from "@mui/material";
import { selectUser, setUser } from "@/redux/reducers/userSlice";
import useDialog from "@/hooks/useDialog";
import NavigationLink from "@/components/NavigationLink";
import AppLogo from "@/components/AppLogo";
import MenuNavIcon from "@/components/Icons/MenuMobileNav";
import CurrencySetting from "@/components/CurrencySelect";
import CountrySettings from "@/components/CountrySelect";
import LanguageSettings from "@/components/LanguageSelect";
import Image from "next/image";
import profileImg from "@IMAGES/ProfileImage.png";

const Wrapper = styled.div`
  width: 100vw;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  position: fixed;
  z-index: 100;
  height: auto;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.78);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(13.5px);
  color: #000;
  & > .MuiContainer-root {
    height: 100%;
  }
`;

const MenuWrapper = styled(Paper)`
  border-radius: 0;
  background: rgba(19, 19, 19, 0.9);
  color: #fff;
`;

const UserInfo = styled(ButtonBase)`
  padding: 0.25rem;
  border-radius: 8px;
  & > *:not(:first-child) {
    box-sizing: border-box;
    margin-left: 0.5rem;
  }
`;

function Header({ lng }: { lng: string }) {
  const user = useSelector(selectUser);
  const theme = useTheme();
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isLG = useMediaQuery(theme.breakpoints.up("lg"));
  const openUserMenu = useCallback(() => setUserMenuOpen(true), []);
  const menu = useDialog();
  const closeUserMenu = useCallback((ev: MouseEvent) => {
    ev.stopPropagation();
    ev.preventDefault();
    setUserMenuOpen(false);
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
  }, []);
  const userMenuButtonRef = useRef(null);
  const CountryButtonRef = useRef(null);
  const CurrencyButtonRef = useRef(null);
  const LanguageButtonRef = useRef(null);
  let authContent;
  if (user) {
    authContent = (
      <>
        <UserInfo
          ref={userMenuButtonRef}
          onClick={openUserMenu}
          aria-controls={isUserMenuOpen ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={isUserMenuOpen ? "true" : undefined}
        >
          {/* <Typography variant="body1" fontSize="3.2rem" fontWeight="700" noWrap>
            {user.fullName || "User name"}
          </Typography> */}
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src={profileImg}
              alt="profileImg"
            />
          </div>
        </UserInfo>
        <Menu
          id="basic-menu"
          anchorEl={userMenuButtonRef.current}
          open={isUserMenuOpen}
          onClose={closeUserMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          PaperProps={{
            sx: {
              padding: 0,
              backgroundColor: "rgba(255, 255, 255, 0.85)",
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {
            <NavigationLink href={`user/${user.id}`}>
              <MenuItem>My profile</MenuItem>
            </NavigationLink>
          }
          <MenuItem onClick={signOut}>Logout</MenuItem>
        </Menu>
      </>
    );
  } else if (user === undefined) {
    authContent = (
      <Stack direction="row" spacing={1}>
        <Skeleton
          sx={{ bgcolor: "gray", borderRadius: "5px" }}
          variant="rectangular"
          width={150}
          height={40}
        />
      </Stack>
    );
  } else {
    authContent = (
      <>
        <Hidden smDown>
          <NavigationLink href="/sign-in">
            <Button variant="contained" fullWidth>
              Log in
            </Button>
          </NavigationLink>
          <Divider orientation="vertical" />
          <NavigationLink href="/sign-up">
            <Button variant="contained" color="inherit">
              Sign up
            </Button>
          </NavigationLink>
        </Hidden>
      </>
    );
  }
  return (
    <AppBar position="static">
      <Wrapper
        style={{
          height: isMobile ? "55px" : "100px",
        }}
      >
        <Container maxWidth="xl">
          <Stack
            justifyContent={isMobile ? "space-between" : ""}
            direction="row"
            alignItems="center"
            height={"100%"}
          >
            <Hidden mdUp>
              <>
                <NavigationLink
                  style={{ paddingLeft: "20px", paddingTop: "10px" }}
                  href="/"
                >
                  <AppLogo lng={lng} isMobile={true} />
                </NavigationLink>
                {!menu.isOpen && (
                  <div>
                    <IconButton color="inherit" onClick={menu.open}>
                      <MenuNavIcon />
                    </IconButton>
                  </div>
                )}
              </>
            </Hidden>
            <Hidden smDown>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: isLG ? 40 : 1,
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(6, 1fr)",
                    gap: 1,
                    alignItems: "center",
                  }}
                >
                  <NavigationLink href="/">
                    <AppLogo lng={lng} isMobile={false} />
                  </NavigationLink>

                  <NavLink href="/" name="Home" />
                  <NavLink href="https://blog.offto.com.kw/" name="BLOG" />
                  <NavLink href="/help" name="HELP" />
                  <NavLink href="/destinations" name="DESTINATIONS" />
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    alignItems: "center",
                  }}
                >
                  <CountrySettings
                    lng={lng}
                    userSettingButtonRef={CountryButtonRef}
                  />
                  <CurrencySetting
                    lng={lng}
                    userSettingButtonRef={CurrencyButtonRef}
                  />
                  <LanguageSettings
                    lng={lng}
                    userSettingButtonRef={LanguageButtonRef}
                  />
                  {authContent}
                </Box>
              </Box>
            </Hidden>
          </Stack>
        </Container>
        <Hidden mdUp>
          <Modal open={menu.isOpen} onClose={menu.close}>
            <Slide direction="down" in={menu.isOpen}>
              <MenuWrapper>
                <Stack spacing={1}>
                  <Stack justifyContent="end" alignItems="end">
                    <IconButton color="primary" onClick={menu.close}>
                      <CloseIcon />
                    </IconButton>
                  </Stack>
                  <NavLink href="/" name="Home" />
                  <Divider />
                  <NavLink href="/blog" name="BLOG" />
                  <Divider />
                  <NavLink href="/news" name="NEWS" />
                  <Divider />
                  <NavLink href="/help" name="HELP" />
                  <Divider />

                  {authContent}

                  {user === undefined ? <Box>Loading</Box> : null}
                  {user === null ? (
                    <Stack marginTop={2} spacing={1}>
                      <NavigationLink href="/sign-in">
                        <Button variant="contained" fullWidth>
                          Log in
                        </Button>
                      </NavigationLink>
                      <NavigationLink href="/sign-up">
                        <Button variant="text" color="inherit" fullWidth>
                          Sign up
                        </Button>
                      </NavigationLink>
                    </Stack>
                  ) : null}
                </Stack>
              </MenuWrapper>
            </Slide>
          </Modal>
        </Hidden>
      </Wrapper>
    </AppBar>
  );
}

Header.propTypes = {
  transparent: PropTypes.bool,
};
export default Header;
