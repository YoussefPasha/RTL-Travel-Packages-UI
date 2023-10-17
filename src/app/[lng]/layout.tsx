"use client";
import * as React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import StyledComponentsRegistry from "@/lib/registry";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Layout from "@/containers/Layout";
import { IBM } from "@/components/ThemeRegistry/theme";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import { Metadata } from "next";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }: any) {
  return (
    <html className={IBM.className} lang={lng} dir={dir(lng)}>
      <body style={{ backgroundColor: "#f6fcff" }}>
        <ThemeRegistry>
          <Provider store={store}>
            <StyledComponentsRegistry>
              <Layout lng={lng}>{children}</Layout>
            </StyledComponentsRegistry>
          </Provider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
