
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  typography: {
   fontFamily: '"Chobani Serif", serif',
    /**
     * INFO: New font changes tags
     */
    d2c_h1: {
      fontFamily: '"Chobani Serif", serif',
      '@media all and (max-width: 1199px)': {
        fontSize: '45px',
        lineHeight: '1',
        letterSpacing: '-1px',
      },
      '@media all and (min-width:1200px)': {
        fontSize: '5rem',
        lineHeight: '1',
        letterSpacing: '-1.5px',
      },
    },
    d2c_perks: {
      fontFamily: '"Chobani Serif", serif',
      '@media all and (max-width: 1199px)': {
        fontSize: '1.3rem',
        lineHeight: '0.5',
        letterSpacing: '-.2px',
      },
      '@media all and (min-width:1200px)': {
        fontSize: '1.5rem',
        lineHeight: '0.5',
        letterSpacing: '-.2px',
      },
    },
    d2c_h2: {
      fontFamily: '"Chobani Serif", serif',
      '@media all and (max-width: 899px)': {
        fontSize: '1.6rem',
        lineHeight: '1',
        letterSpacing: '-.2px',
      },
      '@media all and (min-width:900px) and (max-width:1199px)': {
        fontSize: '1.9rem',
        lineHeight: '1',
        letterSpacing: '-.2px',
      },
      '@media all and (min-width:1200px)': {
        fontSize: '2.2rem',
        lineHeight: '1',
        letterSpacing: '-.5px',
      },
    },
    d2c_3_image: {
      fontFamily: '"Chobani Serif", serif',
      '@media all and (max-width: 899px)': {
        fontSize: '1.6rem',
        lineHeight: '1',
        letterSpacing: '-.2px',
      },
      '@media all and (min-width:900px) and (max-width:1199px)': {
        fontSize: '1.9rem',
        lineHeight: '1',
        letterSpacing: '-.2px',
      },
      '@media all and (min-width:1200px)': {
        fontSize: '3.2rem',
        lineHeight: '1',
        letterSpacing: '-.5px',
      },
    },
    d2c_h3: {
      fontFamily: '"Chobani Serif", serif',
      '@media all and (max-width: 899px)': {
        fontSize: '1.3rem',
        lineHeight: '1',
        letterSpacing: '-.1px',
      },
      '@media all and (min-width:900px) and (max-width:1199px)': {
        fontSize: '1.4rem',
        lineHeight: '1',
        letterSpacing: '-.1px',
      },
      '@media all and (min-width:1200px)': {
        fontSize: '1.6rem',
        lineHeight: '1',
        letterSpacing: '-.2px',
      },
    },
    d2c_h4: {
      fontFamily: 'Chobani-Serif-SemiBold',
      '@media all and (max-width: 899px)': {
        fontSize: '1.46rem',
        lineHeight: '1',
        letterSpacing: '-.2px',
      },
      '@media all and (min-width:900px) and (max-width:1199px)': {
        fontSize: '1.46rem',
        lineHeight: '1',
        letterSpacing: '-.2px',
      },
      '@media all and (min-width:1200px)': {
        fontSize: '1.6rem',
        lineHeight: '1',
        letterSpacing: '-.2px',
      },
    },
    d2c_h5: {
      fontFamily: '"Chobani Serif", serif',
      '@media all and (max-width: 899px)': {
        fontSize: '0.75rem',
        lineHeight: '1',
        letterSpacing: '0',
      },
      '@media all and (min-width:900px) and (max-width:1199px)': {
        fontSize: '0.75rem',
        lineHeight: '1',
        letterSpacing: '0',
      },
      '@media all and (min-width:1200px)': {
        fontSize: '0.75rem',
        lineHeight: '1',
        letterSpacing: '0',
      },
    },
    d2c_h6: {
      fontFamily: 'Chobani-Serif-SemiBold',
      '@media all and (max-width: 899px)': {
        fontSize: '1rem',
        lineHeight: '1.3',
        letterSpacing: '-.2px',
      },
      '@media all and (min-width:900px) and (max-width:1199px)': {
        fontSize: '1rem',
        lineHeight: '1.3',
        letterSpacing: '-.2px',
      },
      '@media all and (min-width:1200px)': {
        fontSize: '1rem',
        lineHeight: '1.3',
        letterSpacing: '-.2px',
      },
    },
    d2c_link: {
      fontFamily: 'Chobani-Sans-Regular',
      '@media all and (max-width: 899px)': {
        fontSize: '0.9rem',
        lineHeight: '1',
        letterSpacing: '0',
      },
      '@media all and (min-width:900px) and (max-width:1199px)': {
        fontSize: '0.9rem',
        lineHeight: '1',
        letterSpacing: '0',
      },
      '@media all and (min-width:1200px)': {
        fontSize: '0.9rem',
        lineHeight: '1',
        letterSpacing: '0',
      },
    },
    d2c_link_CorpPages: {
      fontFamily: 'Chobani-Sans-Regular',
      '@media all and (max-width: 899px)': {
        fontSize: '0.9rem',
        lineHeight: '1',
        letterSpacing: '0',
      },
      '@media all and (min-width:900px) and (max-width:1199px)': {
        fontSize: '0.9rem',
        lineHeight: '1',
        letterSpacing: '0',
      },
      '@media all and (min-width:1200px)': {
        fontSize: '0.9rem',
        lineHeight: '1',
        letterSpacing: '0',
      },
    },
    d2c_link3: {
      fontFamily: 'Chobani-Sans-Regular',
      '@media all and (max-width: 899px)': {
        fontSize: '0.75rem',
        lineHeight: '1',
        letterSpacing: '0',
      },
      '@media all and (min-width:900px) and (max-width:1199px)': {
        fontSize: '0.75rem',
        lineHeight: '1',
        letterSpacing: '0',
      },
      '@media all and (min-width:1200px)': {
        fontSize: '0.75rem',
        lineHeight: '1',
        letterSpacing: '0',
      },
    },
    d2c_p: {
      fontFamily: '"Chobani Serif", serif',
      '@media all and (max-width: 1199px)': {
        fontSize: '1rem',
        lineHeight: '1.3',
        letterSpacing: '-.2px',
      },
      '@media all and (min-width:1200px)': {
        fontSize: '1rem',
        lineHeight: '1.3',
        letterSpacing: '-.2px',
      },
    },
    d2c_p2: {
      fontFamily: '"Chobani Serif", serif',
      '@media all and (max-width: 899px)': {
        fontSize: '0.9rem',
        lineHeight: '1.2',
        letterSpacing: '-.2px',
      },
      '@media all and (min-width:900px) and (max-width:1199px)': {
        fontSize: '0.9rem',
        lineHeight: '1.2',
        letterSpacing: '-.2px',
      },
      '@media all and (min-width:1200px)': {
        fontSize: '0.9rem',
        lineHeight: '1.2',
        letterSpacing: '-.2px',
      },
    },
    d2c_NavBar: {
      fontFamily: '"Chobani Serif", serif',
      '@media all and (max-width: 899px)': {
        fontSize: '1.4rem',
      },
      '@media all and (min-width:900px) and (max-width:1199px)': {
        fontSize: '1.2rem',
      },
      '@media all and (min-width:1200px)': {
        fontSize: '1rem',
      },
    },
    d2c_NavCat: {
      fontFamily: 'Chobani-Serif-SemiBold',
      '@media all and (max-width: 899px)': {
        fontSize: '1.4rem',
      },
      '@media all and (min-width:900px) and (max-width:1199px)': {
        fontSize: '1.2rem',
      },
      '@media all and (min-width:1200px)': {
        fontSize: '1rem',
      },
    },
    d2c_NavItems: {
      fontFamily: '"Chobani Serif", serif',
      '@media all and (max-width: 899px)': {
        fontSize: '1.3rem',
      },
      '@media all and (min-width:900px) and (max-width:1199px)': {
        fontSize: '1.1rem',
      },
      '@media all and (min-width:1200px)': {
        fontSize: '0.9rem',
      },
    },
    d2c_NavAllItems: {
      fontFamily: 'Chobani-Sans-Medium',
      '@media all and (max-width: 899px)': {
        fontSize: '0.8rem',
      },
      '@media all and (min-width:900px) and (max-width:1199px)': {
        fontSize: '0.7rem',
      },
      '@media all and (min-width:1200px)': {
        fontSize: '0.6rem',
      },
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          padding: '12px 18px',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      hd: 1920,
      xl: 2560,
    },
  },
});

export default responsiveFontSizes(theme);
