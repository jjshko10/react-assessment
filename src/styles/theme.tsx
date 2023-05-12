import { Theme, createTheme } from '@mui/material/styles';

declare module '@mui/styles' {
  interface DefaultTheme extends Theme {}
}

export const primaryColor = '#188CFB';
export const whiteColor = '#FFFFFF';

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
    error: {
      main: errorColor,
    },
  },
  typography: {
    fontFamily: ['Proxima Nova', 'sans-serif'].join(','),
  },
});
