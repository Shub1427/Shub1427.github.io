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
    primary: {
      main: '#5491da',
      light: '#7ea7dd',
      dark: '#3f5ea5',
    },
    secondary: {
      main: '#C86854',
      light: '#e3b3a9',
      dark: '#964130',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFFFFF',
      paper: common.white,
    },
  },
  typography: {
    fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
  },
});

theme = responsiveFontSizes(theme);

/**
 * Dark Theme
 */
let darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    common: {
      white: '#ccc',
      black: '#333',
    },
    primary: {
      main: '#7ea7dd',
      light: '#7ea7dd',
      dark: '#3f5ea5',
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
      default: '#222',
      paper: '#333',
    },
  },
  typography: {
    fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
  },
});

darkTheme = responsiveFontSizes(darkTheme);

export default theme;
export { darkTheme };
