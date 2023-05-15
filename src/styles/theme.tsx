import { Theme, createTheme } from '@mui/material/styles';

declare module '@mui/styles' {
  interface DefaultTheme extends Theme {}
}

declare module '@mui/material/styles' {
  interface Palette {
    textColor: Palette['primary'];
  }
  interface PaletteOptions {
    textColor?: PaletteOptions['primary'];
  }
}

export const primaryColor = '#188CFB';
export const whiteColor = '#FFFFFF';
export const blackColor = '#000000';
export const lightBlackColor = '#313131';
export const lightGreyColor = '#E5E5E5';
export const darkGreyColor = '#87898F';
export const redColor = '#E9281B';
export const errorColor = '#FF6C2D';

export const theme = createTheme({
  breakpoints: {
    values: {
        xs: 0,
        sm: 600,
        md: 1024,
        lg: 1440,
        xl: 1920,
    },
  },
  palette: {
    primary: {
      main: primaryColor,
      light: whiteColor,
    },
    background: {
      default: lightGreyColor,
    },
    textColor: {
      main: blackColor,
      light: darkGreyColor,
      dark: lightBlackColor,
    },
    error: {
      main: errorColor,
      dark: redColor,
    },
  },
  typography: {
    fontFamily: ['Proxima Nova', 'sans-serif'].join(','),
  },
});

theme.typography.h2 = {
  fontWeight: 700,
  fontSize: '32px',
  color: blackColor,
};

theme.typography.h6 = {
  fontWeight: 600,
  fontSize: '18px',
  color: blackColor,
};
