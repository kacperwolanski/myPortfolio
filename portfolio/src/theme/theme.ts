import { createTheme } from "@mui/material";

export const breakpointsValues = {
  xl: 1920,
  lg: 1440,
  md: 1200,
  sm: 600,
  xs: 375,
  xxs: 200,
  mobile: 1050,
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
      main: "#050505",
    },

    custom: {
      background: "224,232,246",
      darkGray: "##fffff9",
      lightGray: "#6B7280",
      borderGray: " #484E53",
      header: "#484E53",
      blurredBackground: "140,168,184",
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
