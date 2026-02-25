// import { Box, Typography } from '@mui/material';

// export default function FeedTheDreamSection() {
//   const heroBannerSx = {
//     position: 'relative',
//     width: '100%',
//     display: 'flex',
//     alignItems: 'center',
//     padding: '70px 50px',
//     overflow: 'hidden',
//     backgroundColor: '#1A3C34',

//     // This recreates: .hero-banner::before { ... } from your CSS
//     '&::before': {
//       content: '""',
//       position: 'absolute',
//       bottom: 0,
//       right: 0,
//       width: '85%',
//       height: '100%',
//       backgroundImage: 'url(/images/banner-bg-img2.svg)',
//       backgroundSize: '76%',
//       backgroundRepeat: 'no-repeat',
//       backgroundPosition: '132% 46%',
//       zIndex: 1,
//     },

//     // Responsive: max-width 1199
//     '@media (max-width:1199px)': {
//       padding: '40px',
//     },

//     // Responsive: max-width 991
//     '@media (max-width:991px)': {
//       padding: '40px 24px',
//       '&::before': {
//         backgroundPosition: '160% 46%',
//       },
//     },

//     // Responsive: max-width 767 (mobile)
//     '@media (max-width:767px)': {
//       textAlign: 'center',
//       justifyContent: 'center',
//       padding: '60px 26px 300px',

//       '&::before': {
//         width: '100%',
//         height: '360px',
//         backgroundImage: 'url(/images/banner-bg-img2-mob.svg)',
//         backgroundPosition: '100% 50%',
//         backgroundSize: '100%',
//       },

//       // This recreates: .hero-banner::after { ... } from your CSS
//       '&::after': {
//         content: '""',
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '250px',
//         backgroundImage: 'url(/images/banner-bg-img-after-mob.svg)',
//         backgroundSize: '118%',
//         backgroundPosition: '94% -27%',
//         backgroundRepeat: 'no-repeat',
//         zIndex: 1,
//       },
//     },
//   };

//   const heroContentSx = {
//     maxWidth: '616px',
//     width: '36vw',
//     zIndex: 2, // keep content above ::before/::after
//     position: 'relative',

//     '@media (max-width:991px)': {
//       width: '47vw',
//       maxWidth: '380px',
//     },

//     '@media (min-width:768px) and (max-width:991px)': {
//       width: '47vw',
//       maxWidth: '43vw',
//       minWidth: '360px',
//     },

//     '@media (max-width:767px)': {
//       width: '100%',
//       maxWidth: '330px',
//     },
//   };

//   const heroLogoWrapSx = {
//     marginBottom: '20px',
//     '@media (max-width:767px)': {
//       display: 'flex',
//       justifyContent: 'center',
//     },
//   };

//   const heroLogoImgSx = {
//     display: 'block',
//     width: 'auto',
//     height: 'auto',
//     '@media (max-width:767px)': {
//       maxWidth: '162px',
//     },
//   };

//   const heroTitleSx = {
//     margin: 0,
//     fontSize: '80px',
//     lineHeight: 1.1,
//     marginBottom: '111px',
//     fontFamily: 'Chobani Serif, serif',
//     fontWeight: 600,
//     color: '#EAE8E1',

//     '@media (max-width:1599px)': {
//       fontSize: '60px',
//       marginBottom: '80px',
//     },

//     '@media (max-width:1299px)': {
//       fontSize: '50px',
//       marginBottom: '50px',
//     },

//     '@media (max-width:991px)': {
//       fontSize: '50px',
//       marginBottom: '30px',
//     },

//     '@media (max-width:767px)': {
//       fontWeight: 700,
//       fontSize: '45px',
//       lineHeight: '100%',
//       letterSpacing: '-0.5px',
//       marginLeft: 'auto',
//       marginRight: 'auto',
//       marginBottom: '30px',
//       maxWidth: '296px',
//       textAlign: 'center',
//     },
//   };

//   const heroParagraphSx = {
//     margin: 0,
//     marginBottom: '20px',
//     fontFamily: 'Chobani Serif, serif',
//     letterSpacing: '-0.24px',
//     color: '#EAE8E1',
//     fontWeight: 400,
//     fontSize: '22px',
//     lineHeight: '130%',

//     '@media (max-width:1599px)': {
//       fontSize: '15px',
//     },

//     '@media (max-width:1299px)': {
//       fontSize: '14px',
//     },

//     '@media (max-width:767px)': {
//       fontSize: '16px',
//     },
//   };

//   return (
//     <Box component="header" sx={heroBannerSx}>
//       <Box sx={heroContentSx}>
//         <Box sx={heroLogoWrapSx}>
//           <Box
//             component="img"
//             src="/images/flag-with-logo.svg"
//             alt="flag with logo"
//             sx={heroLogoImgSx}
//           />
//         </Box>

//         <Typography component="h1" sx={heroTitleSx}>
//           Feed the Dream.
//         </Typography>

//         <Box>
//           <Typography component="p" sx={heroParagraphSx}>
//             We became the Official Nutrition Partner of U.S. Soccer because we
//             believe what you put in your body matters.
//           </Typography>

//           <Typography
//             component="p"
//             sx={{ ...heroParagraphSx, marginBottom: 0 }}
//           >
//             Our belief goes beyond logos on jerseys. This is nutrition that
//             feeds dreams on and off the field. From national teams to youth
//             programs, U.S. Soccer is building the future of the game. And we're
//             feeding the players delicious, nutritious, natural food, made the
//             right way: with farm-fresh milk authentically strained, no powders.
//             Fermented, not formulated.
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

import { Box, Typography } from '@mui/material';

export default function FeedTheDreamSection() {
  const showcaseBannerSx = {
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '70px 50px',
    overflow: 'hidden',
    backgroundColor: '#1A3C34',

    '&::before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: '85%',
      height: '100%',
      backgroundImage: 'url(/images/banner-bg-img2.svg)',
      backgroundSize: '76%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '132% 46%',
      zIndex: 1,
    },

    '@media (max-width:1199px)': {
      padding: '40px',
    },

    '@media (max-width:991px)': {
      padding: '40px 24px',
      '&::before': {
        backgroundPosition: '160% 46%',
      },
    },

    '@media (max-width:767px)': {
      textAlign: 'center',
      justifyContent: 'center',
      padding: '60px 26px 300px',

      '&::before': {
        width: '100%',
        height: '360px',
        backgroundImage: 'url(/images/banner-bg-img2-mob.svg)',
        backgroundPosition: '100% 50%',
        backgroundSize: '100%',
      },

      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '250px',
        backgroundImage: 'url(/images/banner-bg-img-after-mob.svg)',
        backgroundSize: '118%',
        backgroundPosition: '94% -27%',
        backgroundRepeat: 'no-repeat',
        zIndex: 1,
      },
    },
  };

  const showcaseContentSx = {
    maxWidth: '616px',
    width: '36vw',
    zIndex: 2,
    position: 'relative',

    '@media (max-width:991px)': {
      width: '47vw',
      maxWidth: '380px',
    },

    '@media (min-width:768px) and (max-width:991px)': {
      width: '47vw',
      maxWidth: '43vw',
      minWidth: '360px',
    },

    '@media (max-width:767px)': {
      width: '100%',
      maxWidth: '330px',
    },
  };

  const partnershipLogoWrapSx = {
    marginBottom: '20px',
    '@media (max-width:767px)': {
      display: 'flex',
      justifyContent: 'center',
    },
  };

  const partnershipLogoImgSx = {
    display: 'block',
    width: 'auto',
    height: 'auto',
    '@media (max-width:767px)': {
      maxWidth: '162px',
    },
  };

  const showcaseTitleSx = {
    margin: 0,
    fontSize: '80px',
    lineHeight: 1.1,
    marginBottom: '111px',
    fontFamily: 'Chobani Serif, serif',
    fontWeight: 600,
    color: '#EAE8E1',

    '@media (max-width:1599px)': {
      fontSize: '60px',
      marginBottom: '80px',
    },

    '@media (max-width:1299px)': {
      fontSize: '50px',
      marginBottom: '50px',
    },

    '@media (max-width:991px)': {
      fontSize: '50px',
      marginBottom: '30px',
    },

    '@media (max-width:767px)': {
      fontWeight: 700,
      fontSize: '45px',
      lineHeight: '100%',
      letterSpacing: '-0.5px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '30px',
      maxWidth: '296px',
      textAlign: 'center',
    },
  };

  const showcaseParagraphSx = {
    margin: 0,
    marginBottom: '20px',
    fontFamily: 'Chobani Serif, serif',
    letterSpacing: '-0.24px',
    color: '#EAE8E1',
    fontWeight: 400,
    fontSize: '22px',
    lineHeight: '130%',

    '@media (max-width:1599px)': {
      fontSize: '15px',
    },

    '@media (max-width:1299px)': {
      fontSize: '14px',
    },

    '@media (max-width:767px)': {
      fontSize: '16px',
    },
  };

  return (
    <Box component="header" sx={showcaseBannerSx}>
      <Box sx={showcaseContentSx}>
        <Box sx={partnershipLogoWrapSx}>
          <Box
            component="img"
            src="/images/flag-with-logo.svg"
            alt="flag with logo"
            sx={partnershipLogoImgSx}
          />
        </Box>

        <Typography component="h1" sx={showcaseTitleSx}>
          Feed the Dream.
        </Typography>

        <Box>
          <Typography component="p" sx={showcaseParagraphSx}>
            We became the Official Nutrition Partner of U.S. Soccer because we
            believe what you put in your body matters.
          </Typography>

          <Typography
            component="p"
            sx={{ ...showcaseParagraphSx, marginBottom: 0 }}
          >
            Our belief goes beyond logos on jerseys. This is nutrition that
            feeds dreams on and off the field. From national teams to youth
            programs, U.S. Soccer is building the future of the game. And we're
            feeding the players delicious, nutritious, natural food, made the
            right way: with farm-fresh milk authentically strained, no powders.
            Fermented, not formulated.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
