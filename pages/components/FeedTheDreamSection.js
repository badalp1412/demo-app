import React, { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function FeedTheDreamSection() {
  const [showContent, setShowContent] = useState(false);

  // Preload the background image, then reveal the text
  useEffect(() => {
    const bgImage = new Image();
    const isMobile = window.innerWidth < 900; // Standard MUI 'md' breakpoint
    bgImage.src = isMobile
      ? '/images/banner-bg-img2-mob.svg'
      : '/images/banner-bg-img2.svg';

    bgImage.onload = () => setShowContent(true);
    bgImage.onerror = () => setShowContent(true); // Fallback to ensure text still loads if image path fails

    // Safety timeout in case cache prevents onload event
    const timer = setTimeout(() => setShowContent(true), 350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container
      component="section"
      disableGutters
      maxWidth={false}
      sx={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden', // Strictly prevents the horizontal scrollbar
        backgroundColor: '#1A3C34',

        // Responsive Padding mappings derived from your original CSS
        padding: {
          xs: '60px 26px 300px', // Mobile
          sm: '60px 26px 300px', // Mobile landscape
          md: '40px 24px', // Tablet (Max-width: 991px mapping)
          lg: '40px', // Small Desktop (Max-width: 1199px mapping)
          xl: '70px 50px', // Large Desktop
        },
        minHeight: { md: '500px', lg: '600px' },

        // --- Main Background (Desktop & Mobile Base) ---
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          right: 0,
          zIndex: 1,
          backgroundRepeat: 'no-repeat',
          width: { xs: '100%', md: '85%' },
          height: { xs: '359px', md: '100%' },
          backgroundImage: {
            xs: 'url(/images/banner-bg-img2-mob.svg)',
            md: 'url(/images/banner-bg-img2.svg)',
          },
          backgroundSize: { xs: '100%', md: '76%' },
          backgroundPosition: {
            xs: '100% 50%',
            md: '160% 46%',
            lg: '132% 46%',
          },
        },

        // --- Mobile Foreground (Only renders on mobile) ---
        '&::after': {
          content: '""',
          display: { xs: 'block', md: 'none' },
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
      }}
    >
      {/* --- Content Wrapper --- */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          // Re-applying your precise width caps so text never overlaps the person on the right
          width: { xs: '100%', md: '47vw', lg: '36vw' },
          maxWidth: { xs: '330px', md: '43vw', lg: '616px' },
          minWidth: { md: '360px', lg: 'auto' },
          margin: { xs: '0 auto', md: '0' },
          textAlign: { xs: 'center', md: 'left' },
          opacity: showContent ? 1 : 0,
          transition: 'opacity 0.4s ease-in',
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            marginBottom: '20px',
            display: { xs: 'flex', md: 'block' },
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src="/images/flag-with-logo.svg"
            alt="flag with logo"
            sx={{
              display: 'block',
              width: 'auto',
              height: 'auto',
              maxWidth: { xs: '162px', md: 'none' },
            }}
          />
        </Box>

        {/* Title */}
        <Typography
          variant="d2c_h1"
          component="h1"
          sx={{
            margin: 0,
            color: '#F8F3E3',
            marginBottom: { xs: '30px', md: '50px', lg: '80px', xl: '111px' },
            display: 'block',
          }}
        >
          Feed the Dream.
        </Typography>

        {/* Subhead / Paragraph 1 */}
        <Typography
          variant="d2c_p"
          component="p"
          sx={{
            margin: 0,
            marginBottom: '20px',
            color: '#EAE8E1',
            display: 'block',
            fontSize: { xs: '16px', md: '14px', lg: '15px', xl: '22px' },
            lineHeight: '130%',
          }}
        >
          We became the Official Nutrition Partner of U.S. Soccer because we
          believe what you put in your body matters.
        </Typography>

        {/* Description / Paragraph 2 */}
        <Typography
          variant="d2c_p"
          component="p"
          sx={{
            margin: 0,
            color: '#EAE8E1',
            display: 'block',
            fontSize: { xs: '16px', md: '14px', lg: '15px', xl: '22px' },
            lineHeight: '130%',
          }}
        >
          Our belief goes beyond logos on jerseys. This is nutrition that feeds
          dreams on and off the field. From national teams to youth programs,
          U.S. Soccer is building the future of the game. And we're feeding the
          players delicious, nutritious, natural food, made the right way: with
          farm-fresh milk authentically strained, no powders. Fermented, not
          formulated.
        </Typography>
      </Box>
    </Container>
  );
}
