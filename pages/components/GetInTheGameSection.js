import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

export default function GetInTheGameSection({ data }) {
  const [showContent, setShowContent] = useState(false);

  // Preload the background image, then reveal the text
  useEffect(() => {
    const bgImage = new Image();
    const isMobile = window.innerWidth < 900; // Standard MUI 'md' breakpoint
    bgImage.src = isMobile
      ? data?.backgroundAssetMobile?.url || "/images/get-in-game-bg-mob.png"
      : data?.backgroundAssetDesktop?.url || "/images/get-in-game-bg.png";

    bgImage.onload = () => setShowContent(true);
    bgImage.onerror = () => setShowContent(true); // Fallback to ensure text still loads if image path fails

    // Safety timeout in case cache prevents onload event
    const timer = setTimeout(() => setShowContent(true), 350);
    return () => clearTimeout(timer);
  }, [data]);

  // Shared form input styles mapped exactly from your CSS
  const formInputSx = {
    width: "stretch",
    backgroundColor: "#1A3C34",
    border: "1px solid #F8F3E3",
    borderRadius: "5px",
    padding: "20px 15px",
    boxSizing: "border-box",
    color: "#F8F3E3",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "100%",
    textTransform: "capitalize",
    outline: "none",
    "&::placeholder": {
      color: "#F8F3E3",
    },
    "&:focus": {
      boxShadow: "0px 0px 0px 3px #f8f3e33a",
    },
  };

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
        textAlign: "center",

        // Padding translated from your CSS, making it standard responsive
        padding: { xs: "200px 30px 300px", md: "80px 40px 120px" },
        minHeight: { md: "800px" },

        // Background styling identical to FeedTheDream methodology
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          width: "100%",
          heigh: "200px",
          backgroundRepeat: "no-repeat",
          backgroundImage: {
            xs: `url(${
              data?.backgroundAssetMobile?.url ||
              "../images/get-in-game-bg-mob.png"
            })`,
            md: `url(${
              data?.backgroundAssetDesktop?.url ||
              "../images/get-in-game-bg.png"
            })`,
          },
          backgroundSize: "contain",
          backgroundPosition: { xs: "top right", md: "center bottom" },
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: {
            xs: "70%",
            sm: "65%",
            md: "auto",
          },
          '@media (max-width: 390px)': {
            top: "74%", 
          },
          '@media (max-height: 700px) and (max-width: 450px)': {
            top: "76%", 
          },
          left: "0%",
          right: "12%",
          bottom: 0,
          zIndex: 1,
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundImage: {
            xs: `url(${
              data?.backgroundAssetMobile?.url ||
              "../images/get-in-game-bg-after.png"
            })`,
            md: `url(${data?.backgroundAssetDesktop?.url || "none"})`,
          },
          backgroundSize: "contain",
          backgroundPosition: { xs: "top right", md: "center bottom" },
          pointerEvents: "none",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: "696px",
          margin: {
            xs: "0 auto",
            sm: "75px auto",
            md: "0 auto",
          },
          opacity: showContent ? 1 : 0,
          transition: "opacity 0.4s ease-in",
        }}
      >
        <Typography
          variant="d2c_h1"
          component="h1"
          sx={{
            color: "#F8F3E3",
            fontSize: { xs: "45px", md: "60px", lg: "80px" },
            fontWeight: 400,
            lineHeight: "100%",
            letterSpacing: "-1.2px",
            marginBottom: { xs: "30px", md: "50px" },
          }}
        >
          {data?.title || "Get in the Game"}
        </Typography>
        <Typography
          variant="d2c_p"
          component="p"
          sx={{
            color: "#EAE8E1",
            fontSize: { xs: "16px", md: "18px", lg: "22px" },
            fontWeight: 400,
            lineHeight: "130%",
            letterSpacing: "-0.044px",
            maxWidth: { xs: "315px", md: "570px" },
            margin: { xs: "0 auto 40px auto", md: "0 auto 54px auto" },
          }}
        >
          {data?.subhead ||
            "Get training tips, nutrition insights, exclusive sweeps updates, and recipes straight from the pros."}
        </Typography>
        <Box component="form" sx={{ textAlign: "left" }}>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ flex: 1, minWidth: "280px" }}>
              <Box
                component="input"
                type="text"
                placeholder="First Name*"
                sx={formInputSx}
              />
            </Box>
            <Box sx={{ flex: 1, minWidth: "280px" }}>
              <Box
                component="input"
                type="text"
                placeholder="Last Name*"
                sx={formInputSx}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ flex: 1, minWidth: "280px" }}>
              <Box
                component="input"
                type="email"
                placeholder="Email Address*"
                sx={formInputSx}
              />
            </Box>
          </Box>

          {/* Row 3 */}
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ flex: 1, minWidth: "280px" }}>
              <Box
                component="input"
                type="text"
                placeholder="Zip Code*"
                sx={formInputSx}
              />
            </Box>
          </Box>

          {/* Age Checkbox */}
          <Box
            sx={{
              color: "#F8F3E3",
              display: "flex",
              gap: "10px",
              alignItems: "flex-start",
              justifyContent: { xs: "flex-start", md: "center" },
              mt: "20px",
            }}
          >
            <input type="checkbox" id="age" style={{ cursor: "pointer" }} />
            <Typography
              component="label"
              htmlFor="age"
              sx={{
                fontSize: "13px",
                fontWeight: 400,
                lineHeight: "130%",
                letterSpacing: "-0.065px",
                cursor: "pointer",
              }}
            >
              By checking the box, you agree that you are at least 18 years of
              age.
            </Typography>
          </Box>

          {/* Submit Button */}
          <Box sx={{ textAlign: "center", mt: "25px" }}>
            <Box
              component="button"
              type="submit"
              sx={{
                backgroundColor: "#F8F3E3",
                color: "#1A3C34",
                border: "1px solid transparent",
                padding: "12px 40px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "100%",
                textTransform: "capitalize",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#F8F3E3",
                  border: "1px solid #F8F3E3",
                },
              }}
            >
              Sign Up
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
