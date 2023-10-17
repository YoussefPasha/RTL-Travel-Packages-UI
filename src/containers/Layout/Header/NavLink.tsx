import { Typography } from "@mui/material";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styled from "styled-components";

const NavText = styled(Typography)`
  user-select: none;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const Selected = styled.div`
  width: 45px;
  height: 2px;
  flex-shrink: 0;
  background: #4dccb5;
`;

interface NavLinkProps {
  href: string; // You can use the appropriate type for your href, like "string" or "URL"
  name: string; // Assuming name should be a string
}

function NavLink({ href, name }: NavLinkProps) {
  const root: string | undefined = usePathname()?.split("/")[2]
    ? usePathname()?.split("/")[2]
    : "";
  const dest = useMemo(() => href.replace(/\s+|\//g, ""), [href]);


  return (
    <StyledLink shallow={true} href={href}>
      <NavText
        fontWeight={700}
        fontSize={20}
        color={root === dest ? "#1D1B19" : "rgba(29, 27, 25, 0.50)"}
      >
        {name}
      </NavText>
      {root === dest && <Selected />}
    </StyledLink>
  );
}

export default NavLink;
