import { createTheme } from "@mui/material";

// SPACING SYSTEM (px)
// 2 / 4 / 8 /12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

// FONT SIZE SYSTEM (px)
// 10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52
// / 62 / 74 / 86 / 98

export const darkTheme = createTheme({
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
      main: "#245974",
    },
    secondary: {
      main: "#C1C1C1",
    },

    custom: {
      background: "14,14,14",
      darkGray: "#1F1E1E",
      lightGray: "#6B7280",
      borderGray: " #484E53",
      header: "#FFF",
      blurredBackground: "36, 89, 116",
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

export const lightTheme = createTheme({
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
      main: "#245974",
    },
    secondary: {
      main: "#050505",
    },

    custom: {
      background: "224,232,246",
      darkGray: "##fffff9",
      lightGray: "#6B7280",
      borderGray: " #484E53",
      header: "#484E53",
      blurredBackground: "255,255,255",
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
