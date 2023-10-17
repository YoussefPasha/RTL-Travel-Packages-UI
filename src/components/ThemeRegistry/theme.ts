import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
export const IBM = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#32BDA4",
    },
  },
  typography: {
    fontFamily: IBM.style.fontFamily, // Fallback font
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1100,
      xl: 1536,
    },
  },
});

theme = responsiveFontSizes(theme);

theme.typography.h1 = {
  fontSize: "2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
  fontFamily: IBM.style.fontFamily, // Fallback font
};

theme.typography.h2 = {
  fontSize: "1.5rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
  fontFamily: IBM.style.fontFamily, // Fallback font
};

theme.typography.h3 = {
  fontSize: "1.2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
  fontFamily: IBM.style.fontFamily, // Fallback font
};

theme.typography.body1 = {
  fontSize: "0.8rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.1rem",
  },
  fontWeight: "400",
  fontFamily: IBM.style.fontFamily, // Fallback font
};

theme.typography.body2 = {
  fontSize: "0.8rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
  fontFamily: IBM.style.fontFamily, // Fallback font
};

export default theme;
