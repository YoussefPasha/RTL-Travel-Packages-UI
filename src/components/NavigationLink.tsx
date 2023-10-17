import Link from "next/link";
import styled from "styled-components";

const NavigationLink = styled(Link)`
  all: unset;
  cursor: pointer;
  transition: opacity 100ms;
  &:hover {
    opacity: 0.8;
  }
`;

export default NavigationLink;
