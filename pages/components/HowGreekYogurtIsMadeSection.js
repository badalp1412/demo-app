import React, { useEffect, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function HowGreekYogurtIsMadeSection() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const bgImage = new Image();
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 900;

    bgImage.src = isMobile
      ? '/images/how-made-bg-mob.svg'
      : '/images/how-made-bg.svg';

    bgImage.onload = () => setShowContent(true);
    bgImage.onerror = () => setShowContent(true);

    const timer = setTimeout(() => setShowContent(true), 350);
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    {
      title: 'Step 1:\nFarm-fresh milk sourced',
      desc: 'We start with real milk. Our process is crafted for quality from the beginning.',
      icon: '/images/step1-icon.svg',
    },
    {
      title: 'Step 2:\nTraditional fermentation',
      desc: 'We ferment with live and active cultures to create that classic yogurt taste.',
      icon: '/images/step2-icon.svg',
    },
    {
      title: 'Step 3:\nAuthentic straining method',
      desc: 'We strain to achieve a thick and creamy texture—no powders, no shortcuts.',
      icon: '/images/step3-icon.svg',
    },
    {
      title: 'Step 4:\nHigh protein, naturally',
      desc: 'Straining naturally concentrates protein for a satisfying, nutritious yogurt.',
      icon: '/images/step4-icon.svg',
    },
  ];

  return (
    <Container
      component="section"
      disableGutters
      maxWidth={false}
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#1A3C34',
        px: { xs: 3, sm: 6, lg: 8 },
        py: { xs: 8, md: 10 },

        // Decorative corners (replace with your exports)
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: { xs: '55%', md: '32%' },
          height: { xs: 220, md: 320 },
          backgroundImage: {
            xs: 'url(/images/how-made-decor-left-mob.svg)',
            md: 'url(/images/how-made-decor-left.svg)',
          },
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'left bottom',
          zIndex: 0,
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: { xs: '55%', md: '32%' },
          height: { xs: 220, md: 320 },
          backgroundImage: {
            xs: 'url(/images/how-made-decor-right-mob.svg)',
            md: 'url(/images/how-made-decor-right.svg)',
          },
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'right bottom',
          zIndex: 0,
          pointerEvents: 'none',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1180px',
          mx: 'auto',
          opacity: showContent ? 1 : 0,
          transition: 'opacity 0.4s ease-in',
        }}
      >
        <Typography
          variant="d2c_h2"
          component="h2"
          align="center"
          sx={{ color: '#F8F3E3', mb: { xs: 4, md: 5 } }}
        >
          How All our Greek <br /> Yogurt is Made
        </Typography>

        <Box
          sx={{
            backgroundColor: '#F8F3E3',
            borderRadius: 2.5,
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 5 },
            boxShadow: '0px 18px 40px rgba(0,0,0,0.18)',
          }}
        >
          <Typography
            variant="d2c_h2"
            component="h3"
            align="center"
            sx={{ color: '#1A3C34', mb: 1.5 }}
          >
            No subs, no shortcuts
          </Typography>

          <Typography
            variant="d2c_p2"
            component="p"
            align="center"
            sx={{
              color: '#1A3C34',
              opacity: 0.9,
              maxWidth: 720,
              mx: 'auto',
              mb: { xs: 3, md: 4 },
            }}
          >
            At Chobani, we believe nutrition comes from real ingredients and
            craftsmanship. And we’ve spent decades perfecting ours.
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                md: 'repeat(4, 1fr)',
              },
              gap: { xs: 2, md: 2.5 },
            }}
          >
            {steps.map((s, idx) => (
              <Box
                key={idx}
                sx={{
                  backgroundColor: '#0C77D8',
                  borderRadius: 2,
                  px: 2.5,
                  py: 3,
                  color: '#F8F3E3',
                  minHeight: { xs: 200, md: 240 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}
              >
                <Box
                  component="img"
                  src={s.icon}
                  alt=""
                  sx={{
                    width: 64,
                    height: 64,
                    objectFit: 'contain',
                    mx: 'auto',
                    mb: 1.5,
                  }}
                />

                <Typography
                  variant="d2c_h6"
                  component="p"
                  align="center"
                  sx={{
                    fontFamily: 'Chobani-Serif-SemiBold',
                    whiteSpace: 'pre-line',
                    mb: 1,
                  }}
                >
                  {s.title}
                </Typography>

                <Typography
                  variant="d2c_p2"
                  component="p"
                  align="center"
                  sx={{ opacity: 0.95 }}
                >
                  {s.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Typography
          variant="d2c_h5"
          component="p"
          sx={{
            color: '#EAE8E1',
            opacity: 0.7,
            mt: 2.5,
            maxWidth: 1180,
          }}
        >
          *Replace this small disclaimer with your Figma copy if needed.
        </Typography>
      </Box>
    </Container>
  );
}
