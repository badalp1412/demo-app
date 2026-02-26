import { Box, Typography } from "@mui/material";

export default function EnterToWinSection() {
  // 🔥 Make sure this file exists in public/images
  const desktopBg = "/images/score-section-bg.svg";

  const sectionSx = {
  position: "relative",
  width: "100%",
  overflow: "hidden",
  backgroundColor: "#F8F3E3",
  
  // --- DESKTOP (Default Styles) ---
  padding: "70px 50px",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: "-86px", // Combined your fixed desktop offset
    height: "100%",
    width: "100%",
    maxWidth: "70%", // Consolidated your various maxWidths
    backgroundImage: `url(${desktopBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "100% 20%", // The "Head Fix" position
    zIndex: 1,
    pointerEvents: "none",
  },

  "&::after": {
    content: '""',
    display: "none", // Hidden by default on desktop
  },

  // --- TABLET (768px to 1199px) ---
  "@media (min-width: 768px) and (max-width: 1199px)": {
    padding: "40px",
  },

  // --- MOBILE (Up to 767px) ---
  "@media (max-width: 767px)": {
    padding: "40px 12px 390px",

    "&::before": {
      // Overriding desktop before with mobile background
      backgroundImage: "url(/images/score-section-bg-mob.svg)",
      backgroundPosition: "top",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      maxWidth: "100%",
      maxHeight: "410px",
      right: 0,
      left: 0,
      top: 0,
      bottom: 0,
      marginTop: "auto",
    },

    "&::after": {
      content: '""',
      display: "block", // Shown only on mobile
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "151px",
      backgroundImage: "url(/images/score-big-mob-bg.svg)",
      backgroundSize: "105%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "-33px 0%",
      zIndex: 2,
    },
  },
};

  const contentSx = {
    position: "relative",
    zIndex: 5,
    width: { xs: "100%", md: "32vw", lg: "40vw !important" },
    maxWidth: { xs: "100%", md: "420px" },
    textAlign: { xs: "center", md: "left" },

    "@media (min-width:768px)": {
      flex: "1",
      zIndex: "10",
      maxWidth: "571px",
      width: "40vw",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
    }

  };

  const titleSx = {
    fontFamily: "Chobani Serif, serif",
    color: "#1A3C34",
    fontWeight: 400,
    fontSize: { xs: "45px", md: "50px", lg: "70px", xl: "80px" },
    lineHeight: "110%",
    margin: 0,
    marginBottom: { xs: "30px", md: "50px", lg: "80px", xl: "126px" },
  };

  const paragraphBaseSx = {
    fontFamily: "Chobani Serif, serif",
    color: "#1A3C34",
    fontWeight: 400,
    letterSpacing: "-0.24px",
    lineHeight: "130%",
    margin: 0,
    marginBottom: { xs: "30px", md: "25px" },
    maxWidth: { xs: "296px", md: "320px", lg: "450px" },
    marginLeft: { xs: "auto", md: 0 },
    marginRight: { xs: "auto", md: 0 },
    fontSize: { xs: "16px", md: "18px", lg: "22px" },
    minHeight: { xs: "auto", md: "60px", lg: "80px" },

    "@media (min-width:768px) and (max-width:1199px)": {
      margin: "0 0 25px",
      maxWidth: "310px",
      minHeight: "60px",
      fontSize: "18px",
    },
  };

  const ctaSx = {
    display: "inline-block",
    padding: "10px 18px",
    borderRadius: "4px",
    textDecoration: "none",
    fontFamily: "Chobani Sans, sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "100%",
    textTransform: "capitalize",
    backgroundColor: "#1A3C34",
    color: "#EAE8E1",
    border: "1px solid #1A3C34",
    maxWidth: "fit-content",
    transition: "all 0.3s ease-in-out",

    "&:hover": {
      backgroundColor: "transparent", // Or theme.palette.primary.light
      color: "var(--brand-green)",     // Or theme.palette.secondary.main
      transform: "translateY(-2px)", 
    },
  };

  const termsSx = {
    marginTop: { xs: "30px", md: "25px" },
    fontFamily: "Chobani Sans",
    fontSize: "14px",
    lineHeight: "130%",
    color: "#1A3C34",
    maxWidth: { xs: "200px", md: "100%" },
    marginLeft: { xs: "auto", md: 0 },
    marginRight: { xs: "auto", md: 0 },

    "@media (min-width:768px) and (max-width:1199px)": {
      margin: "25px 0 0",
      maxWidth: "100%",
    },

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
          sx={{ ...paragraphBaseSx, display: { xs: "none", md: "block !important" } }}
        >
          Enter for a chance to get your soccer club sponsored or to win U.S.
          Soccer prizes.
        </Typography>

        {/* Mobile text */}
        <Typography
          component="p"
          sx={{ ...paragraphBaseSx, display: { xs: "block", md: "none" } }}
        >
          Chobani is making youth soccer dreams come true across America, and
          giving away hundreds of US Soccer prizes.
        </Typography>

        <Box component="a" href="#" sx={ctaSx}>
          Enter To Feed Your Dream
        </Box>

        <Typography component="div" sx={termsSx}>
          For terms and conditions please click{" "}
          <Box
            component="a"
            href="#"
            sx={{ textDecoration: "underline", color: "#1A3C34" }}
          >
            here
          </Box>
          .
        </Typography>
      </Box>
    </Box>
  );
}
