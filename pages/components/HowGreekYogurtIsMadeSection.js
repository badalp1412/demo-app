import React, { useEffect, useMemo, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function HowGreekYogurtIsMadeSection() {
  const [showContent, setShowContent] = useState(false);

  // Mobile carousel index
  const [activeStep, setActiveStep] = useState(0);

  // Image-first: fade in step content after step image is ready
  const [stepReady, setStepReady] = useState(false);

  const steps = useMemo(
    () => [
      {
        stepLabel: 'Step 1:',
        title: 'Farm-fresh milk sourcing',
        desc: 'We use locally sourced farm fresh milk from cows not treated with rBST†.',
        img: '/images/how-made-step1.svg',
      },
      {
        stepLabel: 'Step 2:',
        title: 'Traditional fermentation',
        desc: 'We ferment with live and active cultures to create that classic yogurt taste.',
        img: '/images/how-made-step2.svg',
      },
      {
        stepLabel: 'Step 3:',
        title: 'Authentic straining method',
        desc: 'Our generations-old straining process makes it thick, creamy, and delicious.',
        img: '/images/how-made-step3.svg',
      },
      {
        stepLabel: 'Step 4:',
        title: 'High protein, naturally',
        desc: 'Strained the real way—no powders. Just real protein from real milk.',
        img: '/images/how-made-step4.svg',
      },
    ],
    []
  );

  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 900 : true;

  // Preload hero decoration (image-first)
  useEffect(() => {
    const hero = new Image();
    hero.src = isMobile
      ? '/images/how-made-hero-mob.svg'
      : '/images/how-made-hero-desktop.svg';

    hero.onload = () => setShowContent(true);
    hero.onerror = () => setShowContent(true);

    const timer = setTimeout(() => setShowContent(true), 350);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Preload active step image (image-first per step)
  useEffect(() => {
    setStepReady(false);

    const img = new Image();
    img.src = steps[activeStep]?.img;

    img.onload = () => setStepReady(true);
    img.onerror = () => setStepReady(true);

    const timer = setTimeout(() => setStepReady(true), 350);
    return () => clearTimeout(timer);
  }, [activeStep, steps]);

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const StepCard = ({ item }) => (
    <Box
      sx={{
        backgroundColor: '#0C77D8',
        borderRadius: 2,
        px: { xs: 2.5, md: 3 },
        py: { xs: 3, md: 3.5 },
        textAlign: 'center',
        color: '#F8F3E3',
        minHeight: { xs: 260, md: 280 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      {/* Image (user will replace) */}
      <Box
        component="img"
        src={item.img}
        alt=""
        sx={{
          width: '100%',
          height: { xs: 120, md: 130 },
          objectFit: 'contain',
          mb: 2,
        }}
      />

      <Typography
        variant="d2c_h5"
        component="p"
        sx={{ m: 0, mb: 0.8, color: '#F8F3E3', opacity: 0.95 }}
      >
        {item.stepLabel}
      </Typography>

      <Typography
        variant="d2c_h6"
        component="p"
        sx={{
          m: 0,
          mb: 1.2,
          color: '#F8F3E3',
          fontFamily: 'Chobani-Serif-SemiBold',
        }}
      >
        {item.title}
      </Typography>

      <Typography
        variant="d2c_p2"
        component="p"
        sx={{ m: 0, color: '#F8F3E3', opacity: 0.95 }}
      >
        {item.desc}
      </Typography>
    </Box>
  );

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

        // Mobile hero decoration (soccer ball + stripes)
        '&::before': {
          content: '""',
          display: { xs: 'block', md: 'none' },
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 280,
          backgroundImage: 'url(/images/how-made-hero-mob.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          zIndex: 0,
          pointerEvents: 'none',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1180,
          mx: 'auto',
          opacity: showContent ? 1 : 0,
          transition: 'opacity 0.4s ease-in',
        }}
      >
        {/* Section Title */}
        <Typography
          variant="d2c_h1"
          component="h2"
          align="center"
          sx={{
            color: '#F8F3E3',
            mb: { xs: 3, md: 4 },
          }}
        >
          How All our Greek <br />
          Yogurt is Made
        </Typography>

        {/* Mobile: matches Figma (white text on green above carousel) */}
        <Box sx={{ display: { xs: 'block', md: 'none' }, textAlign: 'center', mb: 3 }}>
          <Typography
            variant="d2c_h2"
            component="h3"
            sx={{ color: '#F8F3E3', mb: 1.2, fontFamily: 'Chobani-Serif-Regular' }}
          >
            No subs, no shortcuts
          </Typography>
          <Typography
            variant="d2c_p2"
            component="p"
            sx={{ color: '#EAE8E1', opacity: 0.92, m: 0 }}
          >
            Great nutrition comes from a process.
            <br />
            And we’ve spent decades perfecting ours.
          </Typography>
        </Box>

        {/* Desktop panel (beige like desktop layout) */}
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            backgroundColor: '#F8F3E3',
            borderRadius: 2.5,
            px: { md: 6 },
            py: { md: 5 },
          }}
        >
          <Typography
            variant="d2c_h2"
            component="h3"
            align="center"
            sx={{ color: '#1A3C34', mb: 1.2 }}
          >
            No subs, no shortcuts
          </Typography>
          <Typography
            variant="d2c_p2"
            component="p"
            align="center"
            sx={{ color: '#1A3C34', opacity: 0.9, mb: 4 }}
          >
            Great nutrition comes from a process.
            <br />
            And we’ve spent decades perfecting ours.
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
              gap: 2.5,
            }}
          >
            {steps.map((s) => (
              <StepCard key={s.stepLabel} item={s} />
            ))}
          </Box>

          <Typography
            variant="d2c_h5"
            component="p"
            sx={{ color: '#1A3C34', opacity: 0.75, mt: 3.5, mb: 0 }}
          >
            † According to the FDA, no significant difference has been found between milk derived from rBST-treated and
            non-rBST-treated cows.
          </Typography>
        </Box>

        {/* MOBILE CAROUSEL (Figma arrow behavior) */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Box
            sx={{
              backgroundColor: '#F8F3E3',
              borderRadius: 2.5,
              px: 2.5,
              py: 3,
              position: 'relative',
              maxWidth: 360,
              mx: 'auto',
            }}
          >
            {/* Step card area */}
            <Box
              sx={{
                position: 'relative',
                opacity: stepReady ? 1 : 0,
                transition: 'opacity 0.35s ease-in',
              }}
            >
              <StepCard item={steps[activeStep]} />

              {/* Arrow button overlay */}
              <Box
                component="button"
                type="button"
                onClick={nextStep}
                aria-label="Next step"
                sx={{
                  position: 'absolute',
                  right: -18,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: '#F8F3E3',
                  cursor: 'pointer',
                  boxShadow: '0px 10px 24px rgba(0,0,0,0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="d2c_h4" component="span" sx={{ color: '#1A3C34', lineHeight: 1 }}>
                  →
                </Typography>
              </Box>
            </Box>

            {/* Footnote */}
            <Typography
              variant="d2c_h5"
              component="p"
              sx={{
                color: '#1A3C34',
                opacity: 0.75,
                mt: 2.2,
                mb: 0,
                lineHeight: 1.35,
              }}
            >
              † According to the FDA, no significant difference has been found between milk derived from rBST-treated and
              non-rBST-treated cows.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}