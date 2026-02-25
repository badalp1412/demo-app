import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Chobani Sans, sans-serif',

    h1: {
      fontFamily: 'Chobani Serif, serif',
      fontWeight: 400,
      fontSize: '80px',
      lineHeight: 1.1,
    },

    body1: {
      fontFamily: 'Chobani Serif, serif',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '130%',
    },

    button: {
      fontFamily: 'Chobani Sans, sans-serif',
      textTransform: 'none',
      fontWeight: 400,
    },
  },
});

export default theme;
