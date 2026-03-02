import React, { useState, useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";

export default function EnterToWinSection() {
  const [showContent, setShowContent] = useState(false);

  // Preload the background image, then reveal the text
  useEffect(() => {
    const bgImage = new Image();
    const isMobile = window.innerWidth <= 767;
    bgImage.src = isMobile
      ? "/images/score-section-bg-mob.svg"
      : "/images/score-section-bg.svg";

    bgImage.onload = () => setShowContent(true);
    bgImage.onerror = () => setShowContent(true);

    const timer = setTimeout(() => setShowContent(true), 350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container
      component="section"
      disableGutters
      maxWidth={false}
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#F8F3E3",
        padding: {
          xs: "40px 12px 390px",
          md: "40px",
          lg: "70px 50px",
        },

        "&::before": {
          content: '""',
          position: "absolute",
          zIndex: 1,
          pointerEvents: "none",
          backgroundRepeat: "no-repeat",
          top: 0,
          right: { xs: 0, md: "-86px" },
          left: { xs: 0, md: "auto" },
          bottom: { xs: 0, md: "auto" },
          width: "100%",
          height: { xs: "auto", md: "100%" },
          maxWidth: { xs: "100%", md: "70%" },
          maxHeight: { xs: "410px", md: "none" },
          marginTop: { xs: "auto", md: 0 },
          backgroundImage: {
            xs: "url(/images/score-section-bg-mob.svg)",
            md: "url(/images/score-section-bg.svg)",
          },
          backgroundSize: "cover",
          backgroundPosition: {
            xs: "top",
            md: "100% 20%",
          },
        },

        "&::after": {
          content: '""',
          display: { xs: "block", md: "none" },
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "151px",
          backgroundImage: "url(/images/score-big-mob-bg.svg)",
          backgroundSize: "105%",
          backgroundPosition: "-33px 0%",
          backgroundRepeat: "no-repeat",
          zIndex: 2,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          opacity: showContent ? 1 : 0,
          transition: "opacity 0.4s ease-in",
          zIndex: { xs: 5, md: 10 },
          width: { xs: "100%", md: "40vw" },
          maxWidth: { xs: "100%", md: "571px" },
          textAlign: { xs: "center", md: "left" },
          display: { xs: "block", md: "flex" },
          flexDirection: { md: "column" },
          flex: { md: "1" },
        }}
      >
        <Typography
          variant="d2c_h1"
          component="h1"
          sx={{
            color: "#1A3C34",
            margin: 0,
            marginBottom: { xs: "30px", md: "50px", lg: "80px", xl: "126px" },
            display: "block",
          }}
        >
          Score Big
        </Typography>

        {/* Desktop text */}
        <Typography
          variant="d2c_p"
          component="p"
          sx={{
            display: { xs: "none", md: "block !important" },
            color: "#1A3C34",
            lineHeight: "130%",
            margin: 0,
            marginBottom: "25px",
            maxWidth: { md: "310px", lg: "450px" },
            fontSize: { md: "18px", lg: "22px" },
          }}
        >
          Enter for a chance to get your soccer club sponsored or to win U.S.
          Soccer prizes.
        </Typography>

        {/* Mobile text */}
        <Typography
          variant="d2c_p"
          component="p"
          sx={{
            display: { xs: "block", md: "none" },
            color: "#1A3C34",
            lineHeight: "130%",
            margin: "0 auto",
            marginBottom: "30px",
            maxWidth: "296px",
            fontSize: "16px",
          }}
        >
          Chobani is making youth soccer dreams come true across America, and
          giving away hundreds of US Soccer prizes.
        </Typography>

        <Box
          component="a"
          href="#"
          sx={{
            display: "inline-block",
            padding: "10px 18px",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "100%",
            textTransform: "capitalize",
            backgroundColor: "#1A3C34",
            color: "#EAE8E1",
            border: "1px solid #1A3C34",
            maxWidth: "fit-content",
            transition: "all 0.3s ease-in-out",
            margin: { xs: "0 auto", md: "0" },
            "&:hover": {
              backgroundColor: "transparent",
              color: "#1A3C34",
              transform: "translateY(-2px)",
            },
          }}
        >
          Enter To Feed Your Dream
        </Box>

        <Typography
          component="div"
          sx={{
            marginTop: { xs: "30px", md: "25px" },
            fontSize: "14px",
            lineHeight: "130%",
            color: "#1A3C34",
            maxWidth: { xs: "200px", md: "100%" },
            marginLeft: { xs: "auto", md: 0 },
            marginRight: { xs: "auto", md: 0 },
          }}
        >
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
    </Container>
  );
}
