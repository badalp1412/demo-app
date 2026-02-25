// // import { Box, Typography } from '@mui/material';

// // export default function EnterToWinSection() {
// //   // 🔥 Make sure this file exists in public/images
// //   const desktopBg = '/images/score-section-bg.svg';

// //   const sectionSx = {
// //     position: 'relative',
// //     width: '100%',
// //     overflow: 'hidden',
// //     backgroundColor: '#EAE8E1',
// //     padding: { xs: '40px 12px 390px', md: '56px 60px' },

// //     // ✅ Desktop background (RIGHT SIDE ONLY)
// //     '&::before': {
// //       content: '""',
// //       position: 'absolute',
// //       top: 0,
// //       right: 0,
// //       height: '100%',
// //       width: '100%',
// //       maxWidth: { md: '66%', lg: '68%' },
// //       backgroundImage: `url(${desktopBg})`,
// //       backgroundRepeat: 'no-repeat',
// //       backgroundSize: 'cover',

// //       // 🔥 THIS FIXES HEAD TOUCHING ISSUE
// //       backgroundPosition: 'right 40%',

// //       zIndex: 1,
// //       pointerEvents: 'none',
// //     },

// //     '&::after': {
// //       content: '""',
// //       display: 'none',
// //     },

// //     // ✅ MOBILE EXACT MATCH (from your CSS)
// //     '@media (max-width:767px)': {
// //       '&::before': {
// //         content: '""',
// //         position: 'absolute',
// //         backgroundImage: 'url(/images/score-section-bg-mob.svg)',
// //         backgroundPosition: 'top',
// //         width: '100%',
// //         height: '100%',
// //         maxHeight: '410px',
// //         marginTop: 'auto',
// //         right: 0,
// //         left: 0,
// //         maxWidth: '100%',
// //         backgroundSize: 'cover',
// //         backgroundRepeat: 'no-repeat',
// //         top: '0px',
// //         bottom: '0px',
// //         zIndex: 1,
// //       },

// //       '&::after': {
// //         content: '""',
// //         display: 'block',
// //         position: 'absolute',
// //         top: 0,
// //         left: 0,
// //         width: '100%',
// //         height: '151px',
// //         backgroundImage: 'url(/images/score-big-mob-bg.svg)',
// //         backgroundSize: '105%',
// //         backgroundRepeat: 'no-repeat',
// //         backgroundPosition: '-33px 0%',
// //         zIndex: 2,
// //       },
// //     },
// //   };

// //   const contentSx = {
// //     position: 'relative',
// //     zIndex: 5,
// //     width: { xs: '100%', md: '32vw' },
// //     maxWidth: { xs: '100%', md: '420px' },
// //     textAlign: { xs: 'center', md: 'left' },
// //   };

// //   const titleSx = {
// //     fontFamily: 'Chobani Serif, serif',
// //     color: '#1A3C34',
// //     fontWeight: 400,
// //     fontSize: { xs: '45px', md: '60px', lg: '70px' },
// //     lineHeight: '110%',
// //     margin: 0,
// //     marginBottom: { xs: '20px', md: '28px' },
// //   };

// //   const paragraphBaseSx = {
// //     fontFamily: 'Chobani Serif, serif',
// //     color: '#1A3C34',
// //     fontWeight: 400,
// //     letterSpacing: '-0.24px',
// //     lineHeight: '130%',
// //     margin: 0,
// //     marginBottom: { xs: '30px', md: '22px' },
// //     maxWidth: { xs: '296px', md: '320px' },
// //     marginLeft: { xs: 'auto', md: 0 },
// //     marginRight: { xs: 'auto', md: 0 },
// //     fontSize: '16px',
// //   };

// //   const ctaSx = {
// //     display: 'inline-block',
// //     padding: '10px 18px',
// //     borderRadius: '4px',
// //     textDecoration: 'none',
// //     fontFamily: 'Chobani Sans, sans-serif',
// //     fontWeight: 400,
// //     fontSize: '14px',
// //     lineHeight: '100%',
// //     textTransform: 'capitalize',
// //     backgroundColor: '#1A3C34',
// //     color: '#EAE8E1',
// //     border: '1px solid #1A3C34',
// //   };

// //   const termsSx = {
// //     marginTop: { xs: '18px', md: '16px' },
// //     fontFamily: 'Chobani Serif, serif',
// //     fontSize: '12px',
// //     lineHeight: '130%',
// //     color: '#1A3C34',
// //     maxWidth: { xs: '200px', md: '100%' },
// //     marginLeft: { xs: 'auto', md: 0 },
// //     marginRight: { xs: 'auto', md: 0 },
// //   };

// //   return (
// //     <Box component="section" sx={sectionSx}>
// //       <Box sx={contentSx}>
// //         <Typography component="h1" sx={titleSx}>
// //           Score Big
// //         </Typography>

// //         {/* Desktop text */}
// //         <Typography
// //           component="p"
// //           sx={{ ...paragraphBaseSx, display: { xs: 'none', md: 'block' } }}
// //         >
// //           Enter for a chance to get your soccer club sponsored or to win U.S.
// //           Soccer prizes.
// //         </Typography>

// //         {/* Mobile text */}
// //         <Typography
// //           component="p"
// //           sx={{ ...paragraphBaseSx, display: { xs: 'block', md: 'none' } }}
// //         >
// //           Chobani is making youth soccer dreams come true across America, and
// //           giving away hundreds of US Soccer prizes.
// //         </Typography>

// //         <Box component="a" href="#" sx={ctaSx}>
// //           Enter To Feed Your Dream
// //         </Box>

// //         <Typography component="div" sx={termsSx}>
// //           For terms and conditions please click{' '}
// //           <Box
// //             component="a"
// //             href="#"
// //             sx={{ textDecoration: 'underline', color: '#1A3C34' }}
// //           >
// //             here
// //           </Box>
// //           .
// //         </Typography>
// //       </Box>
// //     </Box>
// //   );
// // }

// import { Box, Typography } from '@mui/material';

// export default function EnterToWinSection() {
//   // ✅ Desktop artwork (put your correct desktop file here)
//   // Example: /public/images/score-section-bg.svg
//   const desktopBg = '/images/score-section-bg.svg';

//   const sectionSx = {
//     position: 'relative',
//     width: '100%',
//     overflow: 'hidden',
//     backgroundColor: '#EAE8E1',

//     // ✅ Reserve space for the right-side artwork so it NEVER overlaps text
//     // Mobile uses your original padding
//     paddingTop: { xs: '40px', md: '56px' },
//     paddingLeft: { xs: '12px', md: '60px' },
//     paddingBottom: { xs: '390px', md: '56px' },
//     paddingRight: {
//       xs: '12px',
//       // This is the key: content stays in left ~48% area
//       md: '52%',
//     },

//     // ✅ Desktop right-side artwork only (no overlap)
//     '&::before': {
//       content: '""',
//       position: 'absolute',
//       top: 0,
//       right: 0,
//       width: '52%', // matches paddingRight
//       height: '100%',
//       backgroundImage: `url(${desktopBg})`,
//       backgroundRepeat: 'no-repeat',

//       // ✅ No crop when zooming/resizing
//       backgroundSize: 'contain',

//       // ✅ adjust vertical positioning so head doesn't touch top
//       backgroundPosition: 'right 40%',

//       zIndex: 1,
//       pointerEvents: 'none',
//     },

//     // Desktop doesn't need overlay
//     '&::after': {
//       content: '""',
//       display: 'none',
//     },

//     // ✅ Mobile EXACT from your CSS (but with full image visible)
//     '@media (max-width:767px)': {
//       padding: '40px 12px 390px',

//       '&::before': {
//         content: '""',
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         width: '100%',
//         height: '100%',

//         backgroundImage: 'url(/images/score-section-bg-mob.svg)',
//         backgroundRepeat: 'no-repeat',

//         // ✅ show full image (no crop)
//         backgroundSize: 'contain',
//         backgroundPosition: 'bottom center',

//         zIndex: 1,
//         pointerEvents: 'none',
//       },

//       '&::after': {
//         content: '""',
//         display: 'block',
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '151px',
//         backgroundImage: 'url(/images/score-big-mob-bg.svg)',
//         backgroundSize: '105%',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: '-33px 0%',
//         zIndex: 2,
//         pointerEvents: 'none',
//       },
//     },
//   };

//   const contentSx = {
//     position: 'relative',
//     zIndex: 5, // above ::before/::after
//     width: '100%',
//     maxWidth: { xs: '100%', md: '420px' },
//     textAlign: { xs: 'center', md: 'left' },
//   };

//   const titleSx = {
//     fontFamily: 'Chobani Serif, serif',
//     color: '#1A3C34',
//     fontWeight: 400,
//     fontSize: { xs: '45px', md: '60px', lg: '70px' },
//     lineHeight: '110%',
//     margin: 0,
//     marginBottom: { xs: '20px', md: '28px' },
//   };

//   const paragraphBaseSx = {
//     fontFamily: 'Chobani Serif, serif',
//     color: '#1A3C34',
//     fontWeight: 400,
//     letterSpacing: '-0.24px',
//     lineHeight: '130%',
//     margin: 0,
//     marginBottom: { xs: '30px', md: '22px' },
//     fontSize: '16px',
//     maxWidth: { xs: '296px', md: '320px' },
//     marginLeft: { xs: 'auto', md: 0 },
//     marginRight: { xs: 'auto', md: 0 },
//   };

//   const ctaSx = {
//     display: 'inline-block',
//     padding: '10px 18px',
//     borderRadius: '4px',
//     textDecoration: 'none',
//     fontFamily: 'Chobani Sans, sans-serif',
//     fontWeight: 400,
//     fontSize: '14px',
//     lineHeight: '100%',
//     textTransform: 'capitalize',
//     backgroundColor: '#1A3C34',
//     color: '#EAE8E1',
//     border: '1px solid #1A3C34',
//   };

//   const termsSx = {
//     marginTop: { xs: '18px', md: '16px' },
//     fontFamily: 'Chobani Serif, serif',
//     fontSize: '12px',
//     lineHeight: '130%',
//     color: '#1A3C34',
//     maxWidth: { xs: '200px', md: '100%' },
//     marginLeft: { xs: 'auto', md: 0 },
//     marginRight: { xs: 'auto', md: 0 },
//   };

//   return (
//     <Box component="section" sx={sectionSx}>
//       <Box sx={contentSx}>
//         <Typography component="h1" sx={titleSx}>
//           Score Big
//         </Typography>

//         {/* Desktop copy */}
//         <Typography
//           component="p"
//           sx={{ ...paragraphBaseSx, display: { xs: 'none', md: 'block' } }}
//         >
//           Enter for a chance to get your soccer club sponsored or to win U.S.
//           Soccer prizes.
//         </Typography>

//         {/* Mobile copy */}
//         <Typography
//           component="p"
//           sx={{ ...paragraphBaseSx, display: { xs: 'block', md: 'none' } }}
//         >
//           Chobani is making youth soccer dreams come true across America, and
//           giving away hundreds of US Soccer prizes.
//         </Typography>

//         <Box component="a" href="#" sx={ctaSx}>
//           Enter To Feed Your Dream
//         </Box>

//         <Typography component="div" sx={termsSx}>
//           For terms and conditions please click{' '}
//           <Box
//             component="a"
//             href="#"
//             sx={{ textDecoration: 'underline', color: '#1A3C34' }}
//           >
//             here
//           </Box>
//           .
//         </Typography>
//       </Box>
//     </Box>
//   );
// }


import { Box, Typography } from '@mui/material';

export default function EnterToWinSection() {
  // 🔥 Make sure this file exists in public/images
  const desktopBg = '/images/score-section-bg.svg';

  const sectionSx = {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#EAE8E1',
    padding: { xs: '40px 12px 390px', md: '56px 60px' },

    // ✅ Desktop background (RIGHT SIDE ONLY)
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: '100%',
      maxWidth: { md: '66%', lg: '68%' },
      backgroundImage: `url(${desktopBg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',

      // 🔥 THIS FIXES HEAD TOUCHING ISSUE
      backgroundPosition: 'right 40%',

      zIndex: 1,
      pointerEvents: 'none',
    },

    '&::after': {
      content: '""',
      display: 'none',
    },

    // ✅ MOBILE EXACT MATCH (from your CSS)
    '@media (max-width:767px)': {
      '&::before': {
        content: '""',
        position: 'absolute',
        backgroundImage: 'url(/images/score-section-bg-mob.svg)',
        backgroundPosition: 'top',
        width: '100%',
        height: '100%',
        maxHeight: '410px',
        marginTop: 'auto',
        right: 0,
        left: 0,
        maxWidth: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        top: '0px',
        bottom: '0px',
        zIndex: 1,
      },

      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '151px',
        backgroundImage: 'url(/images/score-big-mob-bg.svg)',
        backgroundSize: '105%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-33px 0%',
        zIndex: 2,
      },
    },
  };

  const contentSx = {
    position: 'relative',
    zIndex: 5,
    width: { xs: '100%', md: '32vw' },
    maxWidth: { xs: '100%', md: '420px' },
    textAlign: { xs: 'center', md: 'left' },
  };

  const titleSx = {
    fontFamily: 'Chobani Serif, serif',
    color: '#1A3C34',
    fontWeight: 400,
    fontSize: { xs: '45px', md: '60px', lg: '70px' },
    lineHeight: '110%',
    margin: 0,
    marginBottom: { xs: '20px', md: '28px' },
  };

  const paragraphBaseSx = {
    fontFamily: 'Chobani Serif, serif',
    color: '#1A3C34',
    fontWeight: 400,
    letterSpacing: '-0.24px',
    lineHeight: '130%',
    margin: 0,
    marginBottom: { xs: '30px', md: '22px' },
    maxWidth: { xs: '296px', md: '320px' },
    marginLeft: { xs: 'auto', md: 0 },
    marginRight: { xs: 'auto', md: 0 },
    fontSize: '16px',
  };

  const ctaSx = {
    display: 'inline-block',
    padding: '10px 18px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontFamily: 'Chobani Sans, sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '100%',
    textTransform: 'capitalize',
    backgroundColor: '#1A3C34',
    color: '#EAE8E1',
    border: '1px solid #1A3C34',
  };

  const termsSx = {
    marginTop: { xs: '18px', md: '16px' },
    fontFamily: 'Chobani Serif, serif',
    fontSize: '12px',
    lineHeight: '130%',
    color: '#1A3C34',
    maxWidth: { xs: '200px', md: '100%' },
    marginLeft: { xs: 'auto', md: 0 },
    marginRight: { xs: 'auto', md: 0 },
  };

  return (
    <Box component="section" sx={sectionSx}>
      <Box sx={contentSx}>
        <Typography component="h1" sx={titleSx}>
          Score Big
        </Typography>

        {/* Desktop text */}
        <Typography
          component="p"
          sx={{ ...paragraphBaseSx, display: { xs: 'none', md: 'block' } }}
        >
          Enter for a chance to get your soccer club sponsored or to win U.S.
          Soccer prizes.
        </Typography>

        {/* Mobile text */}
        <Typography
          component="p"
          sx={{ ...paragraphBaseSx, display: { xs: 'block', md: 'none' } }}
        >
          Chobani is making youth soccer dreams come true across America, and
          giving away hundreds of US Soccer prizes.
        </Typography>

        <Box component="a" href="#" sx={ctaSx}>
          Enter To Feed Your Dream
        </Box>

        <Typography component="div" sx={termsSx}>
          For terms and conditions please click{' '}
          <Box
            component="a"
            href="#"
            sx={{ textDecoration: 'underline', color: '#1A3C34' }}
          >
            here
          </Box>
          .
        </Typography>
      </Box>
    </Box>
  );
}