import { createTheme } from '@mui/material/styles';

// in d. files only type definitions

// @mui/material/styles/createPalette

declare module '@mui/material/styles' {
    interface Palette {
        play: Palette['primary'];
        moreInfo: Palette['primary'];
    }
    interface PaletteOptions {
        play: PaletteOptions['primary'];
        moreInfo: PaletteOptions['primary'];
    }
}

declare module "@mui/material" {
    interface ButtonPropsColorOverrides {
        play: true;
        moreInfo: true;
    }
}
