import { createTheme } from "@mui/material";

// SPACING SYSTEM (px)
// 2 / 4 / 8 /12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

// FONT SIZE SYSTEM (px)
// 10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52
// / 62 / 74 / 86 / 98

const theme = createTheme({
  breakpoints: {
    values: {
      xl: 1920,
      lg: 1440,
      md: 1200,
      sm: 600,
      xs: 375,
      xxs: 200,
      mobile: 800,
    },
  },
  palette: {
    primary: {
      main: "#9351CC",
    },
    secondary: {
      main: "#272727",
    },

    custom: {
      background: "#0b182f",
      darkGray: "#374151",
      lightGray: "#6B7280",
      errorRed: "#ff3333",
      lightBorder: "#F3F4F6",
      positiveGreen: "#1F7640",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          minWidth: "unset",
          padding: 0,
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          cursor: "default",
          userSelect: "none",
        },
      },
    },
  },
});

export default theme;
