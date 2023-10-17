import React from "react";
import NavigationLink from "@/components/NavigationLink";
import { Typography } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styled from "styled-components";
import FooterLogoLink from "@SVGs/FooterNavLink.svg";

const NavText = styled(Typography)`
  user-select: none;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: "rgba(255, 255, 255, 0.69)";
  &:hover {
    color: #fff;
  }
`;

interface NavLinkProps {
  href?: string;
  name: string;
  heading?: string;
  lng: string;
}

function NavLink({ href = "/", name, heading = "", lng }: NavLinkProps) {
  return (
    <NavigationLink
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      href={href}
    >
      <Image
        width={14}
        height={16}
        style={{
          paddingRight: lng === "en" ? "14px" : "0px",
          paddingLeft: lng === "ar" ? "14px" : "0px",
        }}
        src={FooterLogoLink}
        alt="FooterLogoLink"
      />
      <NavText fontWeight={"400"} color="rgba(255, 255, 255, 0.69)">
        {name}
      </NavText>
    </NavigationLink>
  );
}

NavLink.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string,
};

export default NavLink;
