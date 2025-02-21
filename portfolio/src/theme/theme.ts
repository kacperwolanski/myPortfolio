import { createTheme } from "@mui/material";

export const breakpointsValues = {
  xl: 1920,
  lg: 1440,
  md: 1200,
  mobile: 1170,
  sm: 600,
  xs: 375,
  xxs: 200,
};
export const darkTheme = createTheme({
  breakpoints: {
    values: breakpointsValues,
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
    values: breakpointsValues,
  },
  palette: {
    primary: {
      main: "#245974",
    },
    secondary: {
      main: "#273038",
    },

    custom: {
      background: "116,140,148",
      darkGray: "##fffff9",
      lightGray: "#6B7280",
      borderGray: " #484E53",
      header: "rgb(236,242,232,255)",
      blurredBackground: "220,222,209",
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
