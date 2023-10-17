import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Stack, Container } from "@mui/material";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = styled(Stack)`
  min-height: 100vh;
  overflow-x: hidden;
`;

const ContentWrapper = styled(Container)`
  flex: 1;
  padding-top: calc(60px+1rem);
  padding-bottom: calc(1rem);
`;

const Layout = ({ children, lng }: any) => {
  return (
    <Wrapper>
      <Header lng={lng} />
      <ContentWrapper style={{ padding: 0 }} disableGutters maxWidth={false}>
        {children}
      </ContentWrapper>
      <Footer lng={lng} />
    </Wrapper>
  );
};

export default Layout;
