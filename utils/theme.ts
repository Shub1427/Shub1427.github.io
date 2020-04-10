import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red, common } from '@material-ui/core/colors';

// Create a theme instance.
// Theme Colors from - https://picular.co/rock
let theme = createMuiTheme({
  palette: {
    common: {
      white: common.white,
      black: '#333',
    },
    // primary: {
    //   main: '#5491da',
    //   light: '#7ea7dd',
    //   dark: '#3f5ea5',
    // },
    primary: {
      main: '#DEC6A2',
      light: '#FAF9F2',
      dark: '#8E8369',
    },
    secondary: {
      main: '#8FADDC',
      light: '#C2D4F7',
      dark: '#6E7882',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FCFCF4',
      paper: common.white,
    },
  },
});

theme = responsiveFontSizes(theme);

export const HEADER_FONT_FACE = "'Merriweather Sans', sans-serif";

theme.typography.h1.fontFamily = HEADER_FONT_FACE;
theme.typography.h2.fontFamily = HEADER_FONT_FACE;

export default theme;
