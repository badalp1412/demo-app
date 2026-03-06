import { Box, Container, Typography } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";

export default function HowGreekYogurtIsMadeSection() {
  const [showContent, setShowContent] = useState(false);

  // Responsive (md = 900)
  const [isMobile, setIsMobile] = useState(false);

  // Mobile carousel index
  const [activeStep, setActiveStep] = useState(0);

  // Image-first: fade in step content after step image is ready
  const [stepReady, setStepReady] = useState(false);

  // Measure carousel width for mobile layout
  const carouselViewportRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);

  // ----- MOBILE FIGMA TUNING -----
  // Left inset so the card is not flush to left (matches Figma)
  const MOBILE_LEFT_INSET = 24; // px (≈ theme spacing 3)
  // Small strip of next blue card visible on right (matches Figma)
  const MOBILE_BLUE_PEEK = 24; // px
  // Cream gap between cards (matches Figma feel)
  const MOBILE_GAP = 18; // px
  // Arrow circle + how much it is clipped on the right edge (matches Figma)
  const ARROW_SIZE = 56; // px
  const ARROW_CLIP = 16; // px (push outside so it’s clipped)
  // --------------------------------

  const steps = useMemo(
    () => [
      {
        stepLabel: "Step 1:",
        title: "Farm-fresh milk sourcing",
        desc: "To craft Chobani Greek Yogurt, we start with farm-fresh milk. We use locally sourced farm fresh milk from cows not treated with rBST†.",
        img: "/images/how-made-step1.svg",
      },
      {
        stepLabel: "Step 2:",
        title: "Traditional fermentation",
        desc: "We ferment the milk traditionally with live and active cultures, delivering billions of probiotics in every cup.",
        img: "/images/how-made-step2.svg",
      },
      {
        stepLabel: "Step 3:",
        title: "Authentic straining method",
        desc: "A generations-old method naturally increases protein. No protein powders, nothing artificial.",
        img: "/images/how-made-step3.svg",
      },
      {
        stepLabel: "Step 4:",
        title: "High protein, naturally",
        desc: "Velvety and smooth. Every spoonful (or sip!) tastes like real food because it is. ",
        img: "/images/how-made-step4.svg",
      },
    ],
    [],
  );

  // Detect mobile (standard MUI md breakpoint)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia("(max-width:899px)");
    const update = () => setIsMobile(mql.matches);

    update();
    if (mql.addEventListener) mql.addEventListener("change", update);
    else mql.addListener(update);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", update);
      else mql.removeListener(update);
    };
  }, []);

  // Preload hero decoration (image-first)
  useEffect(() => {
    setShowContent(false);

    const hero = new Image();
    hero.src = isMobile
      ? "/images/how-made-hero-mob.svg"
      : "/images/how-made-hero-desktop.svg";

    hero.onload = () => setShowContent(true);
    hero.onerror = () => setShowContent(true);

    const timer = setTimeout(() => setShowContent(true), 350);
    return () => clearTimeout(timer);
  }, [isMobile]);

  // Measure carousel viewport width (mobile)
  useEffect(() => {
    if (!isMobile) return;
    if (!carouselViewportRef.current) return;

    const el = carouselViewportRef.current;

    const update = () => {
      const rect = el.getBoundingClientRect();
      setCarouselWidth(rect.width);
    };

    update();

    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => update());
      ro.observe(el);
    } else if (typeof window !== "undefined") {
      window.addEventListener("resize", update);
    }

    return () => {
      if (ro) ro.disconnect();
      else if (typeof window !== "undefined")
        window.removeEventListener("resize", update);
    };
  }, [isMobile]);

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

  const StepCard = ({ item, mobile }) => (
    <Box
      sx={{
        backgroundColor: "#0C77D8",
        borderRadius: "4px",
        px: mobile ? 3 : "20px",
        py: mobile ? 5 : "40px",
        textAlign: "center",
        color: "#F8F3E3",
        minHeight: mobile ? 610 : 340,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={item.img}
        alt=""
        sx={{
          width: "100%",
          maxWidth: mobile ? 300 : 220,
          height: mobile ? 300 : "176px",
          objectFit: "contain",
          mb: mobile ? 3.5 : "29px",
          display: "block",
        }}
      />

      <Typography
        variant="d2c_h3"
        component="p"
        sx={{
          m: 0,
          mb: mobile ? 1 : 0.6,
          color: "#E8E6DF",
        }}
      >
        {item.stepLabel}
      </Typography>

      <Typography
        variant="d2c_h3"
        component="p"
        sx={{
          m: 0,
          mb: mobile ? 2.6 : 1.4,
          color: "#E8E6DF",
          marginBottom: mobile ? "16px" : "29px",
        }}
      >
        {item.title}
      </Typography>

      <Typography
        variant="d2c_p"
        component="p"
        sx={{
          m: 0,
          color: "#fff",
        }}
      >
        {item.desc}
      </Typography>
    </Box>
  );

  // MOBILE: compute card width so:
  // [LEFT_INSET] + [CARD] + [GAP] + [BLUE_PEEK] == viewportWidth
  const effectiveMobileWidth = Math.max(0, carouselWidth - MOBILE_LEFT_INSET);
  const mobileCardWidth = Math.max(
    280,
    effectiveMobileWidth - (MOBILE_BLUE_PEEK + MOBILE_GAP),
  );
  const mobileTranslateX = -(activeStep * (mobileCardWidth + MOBILE_GAP));

  return (
    <Container
      component="section"
      disableGutters
      maxWidth={false}
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#1A3C34",

        // Hero decoration
        backgroundImage: {
          xs: "url(/images/how-made-hero-mob.svg)",
          md: "url(/images/how-made-hero-desktop.svg)",
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center top",

        // IMPORTANT: on mobile, no side padding so the cream panel can be full-width
        px: { xs: 0, md: 6, lg: "50px" },
        pt: { xs: 8, md: "70px" },
        pb: { xs: "20px" },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1628,
          mx: "auto",
          opacity: showContent ? 1 : 0,
          transition: "opacity 0.4s ease-in",
        }}
      >
        {/* Title wrapper with padding only on mobile */}
        <Box sx={{ px: { xs: 3, md: 0 } }}>
          <Typography
            variant="d2c_h1"
            component="h2"
            align="center"
            sx={{
              color: "#F8F3E3",
              mb: { xs: 3.5, md: "77px" },
            }}
          >
            How All our Greek <br />
            Yogurt is Made
          </Typography>
        </Box>

        {/* Cream panel */}
        <Box
          sx={{
            backgroundColor: "#F8F3E3",

            // Mobile: full width cream (no visible green sides)
            borderRadius: { xs: 0, md: "16px" },

            // Desktop: panel centered in maxWidth
            mx: { xs: 0, md: "auto" },
            px: { xs: 0, md: 6 },
            pt: { xs: 4, md: "70px" },
            pb: { xs: 4, md: "64px" },
          }}
        >
          {/* Panel heading/subcopy with padding on mobile */}
          <Box sx={{ px: { xs: 3, md: 0 } }}>
            <Typography
              variant="d2c_h1"
              component="h3"
              align="center"
              sx={{
                color: "#1A3C34",
                mb: 1,
              }}
            >
              No subs, no shortcuts
            </Typography>

            <Typography
              variant="d2c_h3"
              component="p"
              align="center"
              sx={{
                color: "#1A3C34",
                my: { xs: 3, md: "50px" },
                maxWidth: "100%",
                mx: "auto",
              }}
            >
              At Chobani, we believe nutrition comes from real ingredients and
              craftsmanship.
              <br />
              And we’ve spent decades perfecting ours.
            </Typography>
          </Box>

          {/* DESKTOP grid */}
          <Box
            sx={{
              display: { xs: "none", md: "grid" },
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
            }}
          >
            {steps.map((s) => (
              <StepCard key={s.stepLabel} item={s} mobile={false} />
            ))}
          </Box>

          {/* MOBILE carousel (Figma: cream full width, arrow clipped at right, next card peeks) */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Box
              ref={carouselViewportRef}
              sx={{
                position: "relative",
                width: "100%",
                overflow: "hidden", // clips the arrow on the right like Figma
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: `${MOBILE_GAP}px`,
                  paddingLeft: `${MOBILE_LEFT_INSET}px`, // left inset to match Figma
                  transform: `translateX(${mobileTranslateX}px)`,
                  transition: "transform 0.55s ease",
                  opacity: stepReady ? 1 : 0,
                  transitionProperty: "transform, opacity",
                  willChange: "transform",
                }}
              >
                {steps.map((s, idx) => (
                  <Box
                    key={`${s.stepLabel}-${idx}`}
                    sx={{ flex: `0 0 ${mobileCardWidth}px` }}
                  >
                    <StepCard item={s} mobile />
                  </Box>
                ))}
              </Box>

              {/* Arrow button (Figma: pushed beyond right edge so it’s clipped, overlaps blue peek) */}
              <Box
                component="button"
                type="button"
                onClick={nextStep}
                aria-label="Next step"
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: `-${ARROW_CLIP}px`,
                  width: `${ARROW_SIZE}px`,
                  height: `${ARROW_SIZE}px`,
                  borderRadius: "50% 0% 0px 50%",
                  border: "none",
                  backgroundColor: "#F8F3E3",
                  cursor: "pointer",
                  boxShadow: "0px 10px 24px rgba(0,0,0,0.22)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 5,
                  paddingTop: "4px",
                }}
              >
                <Typography
                  variant="d2c_h3"
                  component="span"
                  sx={{
                    color: "#1A3C34",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="19"
                    viewBox="0 0 24 19"
                    fill="none"
                  >
                    <path
                      d="M22.7579 9.48542L1.00073 9.48543M22.7579 9.48542L14.0549 1.00014M22.7579 9.48542L14.0549 17.9707"
                      stroke="#1A3C34"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Footnote INSIDE cream panel at bottom-left (matches Figma) */}
      <Box
        sx={{
          px: { xs: 3, md: 0 },
          maxWidth: { xs: "100%", md: 1628 },
          margin: { xs: "16px auto 0", md: "0 auto 0" },
        }}
      >
        <Typography
          variant="d2c_h5"
          component="p"
          sx={{
            color: "#fff",
            mt: { xs: 2.5, md: "20px" },
            mb: 0,
            textAlign: "left",
            maxWidth: "296px",
          }}
        >
          † According to the FDA, no significant difference has been found
          between milk derived from rBST-treated and non-rBST-treated cows.
        </Typography>
      </Box>
    </Container>
  );
}
