import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    mobile: true;
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }

  interface Palette {
    custom: {
      background: string;
      darkGray: string;
      lightGray: string;
      borderGray: string;
    };
  }

  interface PaletteOptions {
    custom: {
      background: string;
      darkGray: string;
      lightGray: string;
      borderGray: string;
    };
  }
}
