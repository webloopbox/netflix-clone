import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    play: Palette["primary"];
    moreInfo: Palette["primary"];
    modal: {
      background: string;
    }
  }
  interface PaletteOptions {
    play: PaletteOptions["primary"];
    moreInfo: PaletteOptions["primary"];
    modal: {
      background: string;
    }
  }
}

declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    play: true;
    moreInfo: true;
  }
}
