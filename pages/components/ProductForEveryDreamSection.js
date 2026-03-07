import { Box, Container, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

export default function ProductForEveryDreamSection({ data }) {
  const [showSection, setShowSection] = useState(false);
  const [panelReady, setPanelReady] = useState(false);

  // Desktop selected tab
  const [activeKey, setActiveKey] = useState("greek");

  // Mobile accordion open tab (only one open like Figma)
  const [openMobileKey, setOpenMobileKey] = useState("greek");

  // Standard md breakpoint (900)
  const [isMobile, setIsMobile] = useState(false);

  const GREEN_BG = "#1A3C34";
  const CREAM = "#F8F3E3";

  const tabs = useMemo(
    () => [
      {
        key: "greek",
        size: 80,
        tabBg: CREAM,
        tabFg: "#1A3C34",
        panelBg: CREAM,
        panelFg: "#1A3C34",
        tabPrimary: "Greek Yogurt",
        tabSecondary: "",
        tabNote: "",
        heading: "The original, everyday essentials",
        body: [
          "This is where it all began. Farm-fresh milk fermented with live and active cultures, the way it’s been done for generations. Strained to be thick and creamy. Packed with protein. And billions of probiotics. The Greek Yogurt that started it all. Ready to spoon and sip.",
        ],
        // ✅ PNGs (you will add real assets)
        highlightsFolder: "/images",
        highlights: [
          "tab-1_1.png",
          "tab-1_2.png",
          "tab-1_3.png",
          "tab-1_4.png",
          "tab-1_5.png",
          "tab-1_6.png",
        ],
        benefits: [
          "12g Protein",
          "Good Source of Calcium",
          "Simple Ingredients",
        ],
        // ✅ Your names
        productImgDesktop: "/images/yogurt-img.png",
        productImgMobile: "/images/yogurt-img-mob.png",
      },
      {
        key: "highProtein",
        size: 80,
        tabBg: "#082B49",
        tabFg: "#F8F3E3",
        panelBg: "#082B49",
        panelFg: "#F8F3E3",
        tabPrimary: "High Protein",
        tabSecondary: "Greek Yogurt",
        tabNote: "",
        heading: "Maximum Protein, Minimum Ingredients",
        body: [
          "To craft our High Protein Greek Yogurt, we start with farm-fresh milk fermented traditionally with live and active cultures, delivering billions of probiotics in every cup and bottle.",
          "We use a generations-old authentic straining method to increase protein naturally. No protein powders. Nothing artificial. Velvety and smooth. From a cup in the morning to a drink on the go, every spoonful and sip tastes like real food because it is.",
        ],
        highlightsFolder: "/images",
        highlights: [
          "tab-2_1.png",
          "tab-2_2.png",
          "tab-2_3.png",
          "tab-2_4.png",
          "tab-2_5.png",
        ],
        benefits: [
          "Billions of probiotics",
          "0 added sugar",
          "Vitamin B12",
          "Only natural ingredients",
        ],
        showCompleteBox: true,
        productImgDesktop: "/images/product-high-protein-img.png",
        productImgMobile: "/images/product-high-protein-img-mob.png",
      },
      {
        key: "zeroSugar",
        size: 80,
        tabBg: "#0C77D8",
        tabFg: "#F8F3E3",
        panelBg: "#0C77D8",
        panelFg: "#F8F3E3",
        tabPrimary: "Zero Sugar*",
        tabSecondary: "Greek Yogurt",
        tabNote: "*Not a low calorie food",
        heading: "All the taste. 0g added sugar.",
        body: [
          "All the flavor of our creamy Greek Yogurt. None of the added sugar. We take our authentic Greek yogurt, strained the traditional way, packed with up to 12 grams of protein, and remove the sugar. Naturally lactose-free. No artificial sweeteners trying to fake sweetness. Great for anyone managing their sugar intake.",
        ],
        highlightsFolder: "/images",
        highlights: [
          "tab-3_1.png",
          "tab-3_2.png",
          "tab-3_3.png",
          "tab-3_4.png",
          "tab-3_5.png",
        ],
        benefits: [
          "0g sugar",
          "11-12g protein",
          "60 calories",
          "Lactose-Free",
          "Billions of Probiotics",
        ],
        productImgDesktop: "/images/product-zero-sugar-img.png",
        productImgMobile: "/images/product-zero-sugar-img-mob.png",
      },
      {
        key: "lessSugar",
        size: 80,
        tabBg: "#C9D9E8",
        tabFg: "#1A3C34",
        panelBg: "#C9D9E8",
        panelFg: "#1A3C34",
        tabPrimary: "Less Sugar*",
        tabSecondary: "Greek Yogurt",
        tabNote: "*Not a low calorie food",
        heading: "Subtly sweet. Super satisfying.",
        body: [
          "Sometimes you want a touch of sweetness. That’s why we crafted our Less Sugar Greek Yogurt with just a hint of cane sugar and real fruit. With just 9 grams of sugar, 40% less* than other yogurts, with 12 grams of protein. The yogurt that's light on sugar but never light on flavor. Subtly sweet.",
        ],
        highlightsFolder: "/images",
        highlights: [
          "tab-4_1.png",
          "tab-4_2.png",
          "tab-4_3.png",
          "tab-4_4.png",
          "tab-4_5.png",
        ],
        benefits: [
          "40% Less sugar*",
          "12g protein",
          "Real fruit",
          "Lactose-Free",
          "Good source of Calcium",
          "Billions of Probiotics",
        ],
        productImgDesktop: "/images/product-less-sugar-img.png",
        productImgMobile: "/images/product-less-sugar-img-mob.png",
      },
      {
        key: "flip",
        size: 80,
        tabBg: "#E1261C",
        tabFg: "#F8F3E3",
        panelBg: "#E1261C",
        panelFg: "#F8F3E3",
        tabPrimary: "Flip®",
        tabSecondary: "Greek Yogurt",
        tabNote: "",
        heading: "Food that feels like play.",
        body: [
          "Food that’s big on play. Greek yogurt on one side. Crunchy mix-ins on the other. Perfectly-portioned Greek yogurt that's a good source of protein and fun to eat, with the good stuff: crunchy granola, real chocolate chunks, toasted nuts. Only natural ingredients. Nothing artificial.",
        ],
        highlightsFolder: "/images",
        highlights: [
          "tab-5_1.png",
          "tab-5_2.png",
          "tab-5_3.png",
          "tab-5_4.png",
        ],
        benefits: [
          "9-10g Protein",
          "Billions of Probiotics",
          "Only natural ingredients",
          "Nothing artificial",
          "Perfectly-portioned",
          "Good source of Calcium",
        ],
        productImgDesktop: "/images/product-flip-img.png",
        productImgMobile: "/images/product-flip-img-mob.png",
      },
    ],
    [CREAM],
  );

  const getTab = (key) => tabs.find((t) => t.key === key) || tabs[0];

  // Active tab differs per device:
  const activeTab = isMobile ? getTab(openMobileKey) : getTab(activeKey);

  // Detect mobile
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

  // Background preload (image-first)
  useEffect(() => {
    const bg = new Image();
    const src = isMobile
      ? "/images/product-every-dream-bg-mob.svg"
      : "/images/product-every-dream-bg.svg";

    bg.src = src;
    bg.onload = () => setShowSection(true);
    bg.onerror = () => setShowSection(true);

    const timer = setTimeout(() => setShowSection(true), 350);
    return () => clearTimeout(timer);
  }, [isMobile]);

  // Panel image preload (image-first then text fades in)
  useEffect(() => {
    const img = new Image();
    const src = isMobile
      ? activeTab.productImgMobile
      : activeTab.productImgDesktop;

    setPanelReady(false);

    if (!src) {
      setPanelReady(true);
      return;
    }

    img.src = src;
    img.onload = () => setPanelReady(true);
    img.onerror = () => setPanelReady(true);

    const timer = setTimeout(() => setPanelReady(true), 450);
    return () => clearTimeout(timer);
  }, [activeTab, isMobile]);

  // Title + text with V2 priority
  const title = data?.titleV2 || data?.title || "A Product for\nEvery Dream";
  const sub1 =
    data?.subheadV2 ||
    data?.subhead ||
    "Trusted by US Soccer athletes for both on-the-field and off-the-field nutrition, Chobani offers a range of delicious options always crafted with real ingredients and nothing artificial.";
  const sub2 =
    data?.descriptionV2 ||
    data?.description ||
    "From recovering post-workout to powering through practice, or grabbing a little something before you get your day going, there's a Chobani yogurt for you.";

  const renderHighlights = (tab, size) => (
    <Box
      sx={{
        display: "flex",
        gap: { xs: 3.5, md: 2 },
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {tab.highlights.map((file, i) => (
        <Box
          key={i}
          component="img"
          src={`${tab.highlightsFolder}/${file}`}
          alt="highlight"
          sx={{
            width: size,
            height: size,
            objectFit: "contain",
            display: "block",
          }}
        />
      ))}
    </Box>
  );

  const renderDesktop = () => (
    <Box sx={{ display: { xs: "none", md: "block" }, mt: 4 }}>
      {/* ✅ Tabs row (FIXED: continuous, no gaps) */}
      <Box
        sx={{
          mx: "auto",
          display: "flex",
          alignItems: "stretch",
          position: "relative",
          zIndex: 3,
        }}
      >
        {tabs.map((t, idx) => {
          const isActive = t.key === activeKey;

          return (
            <Box
              key={t.key}
              component="button"
              type="button"
              onClick={() => setActiveKey(t.key)}
              sx={{
                // ✅ KEY FIX (removes gaps)
                width: "100%",
                flex: "1 1 0",
                border: "none",
                cursor: "pointer",
                backgroundColor: t.tabBg,
                color: t.tabFg,
                textAlign: "center",
                outline: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",

                px: 2,
                py: 1.6,
                minHeight: 78,

                borderTopLeftRadius: idx === 0 ? 14 : 0,
                borderTopRightRadius: idx === tabs.length - 1 ? 14 : 0,

                boxShadow: isActive ? "0px 10px 22px rgba(0,0,0,0.20)" : "none",
              }}
            >
              <Typography
                variant="d2c_h6"
                component="div"
                sx={{
                  color: t.tabFg,
                  lineHeight: 1.05,
                }}
              >
                {t.tabPrimary}
              </Typography>

              {t.tabSecondary ? (
                <Typography
                  variant="d2c_h5"
                  component="div"
                  sx={{
                    color: t.tabFg,
                    opacity: 0.95,
                    mt: 0.5,
                  }}
                >
                  {t.tabSecondary}
                </Typography>
              ) : null}

              {t.tabNote ? (
                <Typography
                  variant="d2c_h5"
                  component="div"
                  sx={{
                    color: t.tabFg,
                    opacity: 0.95,
                    mt: 0.4,
                    lineHeight: 1.2,
                    whiteSpace: "pre-line",
                  }}
                >
                  {t.tabNote}
                </Typography>
              ) : null}
            </Box>
          );
        })}
      </Box>

      {/* ✅ Panel (overlaps under tabs like Figma) */}
      <Box
        sx={{
          mx: "auto",
          mt: "-10px", // overlap so tabs sit on panel
          // borderRadius: 24,
          overflow: "hidden",
          boxShadow: "0px 20px 44px rgba(0,0,0,0.22)",
          backgroundColor: getTab(activeKey).panelBg,
          color: getTab(activeKey).panelFg,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "470px 1fr",
            gap: 4,
            px: 4,
            py: 4,
            alignItems: "start",
          }}
        >
          {/* Left product image frame */}
          <Box
            sx={{
              backgroundColor: CREAM,
              // borderRadius: 12,
              p: 2.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={getTab(activeKey).productImgDesktop}
              alt={getTab(activeKey).tabPrimary}
              sx={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Box>

          {/* Right content */}
          <Box
            sx={{
              opacity: panelReady ? 1 : 0,
              transition: "opacity 0.35s ease-in",
            }}
          >
            <Typography
              variant="d2c_h3"
              component="h3"
              sx={{
                mb: 1.6,
                color: getTab(activeKey).panelFg,
              }}
            >
              {getTab(activeKey).heading}
            </Typography>

            {getTab(activeKey).body.map((p, i) => (
              <Typography
                key={i}
                variant="d2c_p2"
                component="p"
                sx={{
                  mb: i === getTab(activeKey).body.length - 1 ? 2.2 : 1.6,
                  maxWidth: 560,
                  color: getTab(activeKey).panelFg,
                  opacity: 0.95,
                }}
              >
                {p}
              </Typography>
            ))}

            <Typography
              variant="d2c_p2"
              component="p"
              sx={{ mb: 1.2, color: getTab(activeKey).panelFg }}
            >
              Nutritional Highlights:
            </Typography>

            {renderHighlights(getTab(activeKey), 90)}

            <Box
              sx={{
                mt: 2.6,
                display: "flex",
                gap: 3,
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ minWidth: 260 }}>
                <Typography
                  variant="d2c_p2"
                  component="p"
                  sx={{ mb: 1, color: getTab(activeKey).panelFg }}
                >
                  Key Benefits:
                </Typography>

                <Box component="ul" sx={{ m: 0, pl: 2.4 }}>
                  {getTab(activeKey).benefits.map((b, i) => (
                    <Typography
                      key={i}
                      component="li"
                      variant="d2c_p2"
                      sx={{
                        mb: 0.7,
                        color: getTab(activeKey).panelFg,
                        opacity: 0.95,
                      }}
                    >
                      {b}
                    </Typography>
                  ))}
                </Box>
              </Box>

              {getTab(activeKey).showCompleteBox ? (
                <Box
                  sx={{
                    border: `2px solid ${
                      getTab(activeKey).panelFg === "#F8F3E3"
                        ? "rgba(248,243,227,0.70)"
                        : "rgba(26,60,52,0.45)"
                    }`,
                    borderRadius: 1.5,
                    overflow: "hidden",
                    mt: 0.4,
                  }}
                >
                  <Box
                    sx={{
                      borderBottom: `2px solid ${
                        getTab(activeKey).panelFg === "#F8F3E3"
                          ? "rgba(248,243,227,0.70)"
                          : "rgba(26,60,52,0.45)"
                      }`,
                      px: 1.6,
                      py: 1.2,
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="d2c_h5"
                      component="p"
                      sx={{
                        m: 0,
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        color: getTab(activeKey).panelFg,
                      }}
                    >
                      COMPLETE PROTEINS <br /> &amp; VITAMIN B12 TO:
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      px: 1.6,
                      py: 1.6,
                      textAlign: "center",
                      gap: 1,
                    }}
                  >
                    {[
                      {
                        label: "SUPPORT\nSTRENGTH",
                        icon: "/images/icon-strength.svg",
                      },
                      {
                        label: "UNLOCK\nENERGY",
                        icon: "/images/icon-energy.svg",
                      },
                      {
                        label: "FEEL\nFULL",
                        icon: "/images/icon-feel-full.svg",
                      },
                    ].map((it, i) => (
                      <Box key={i}>
                        <Box
                          component="img"
                          src={it.icon}
                          alt=""
                          sx={{
                            width: 34,
                            height: 34,
                            objectFit: "contain",
                            mb: 0.8,
                          }}
                        />
                        <Typography
                          variant="d2c_h5"
                          component="p"
                          sx={{
                            m: 0,
                            whiteSpace: "pre-line",
                            letterSpacing: "0.8px",
                            textTransform: "uppercase",
                            color: getTab(activeKey).panelFg,
                          }}
                        >
                          {it.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ) : null}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  const renderMobile = () => (
    <Box sx={{ display: { xs: "block", md: "none" }, mt: 4 }}>
      <Box
        sx={{
          maxWidth: 340,
          mx: "auto",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0px 18px 40px rgba(0,0,0,0.18)",
        }}
      >
        {tabs.map((t, idx) => {
          const isOpen = openMobileKey === t.key;

          return (
            <Box
              key={t.key}
              sx={{
                backgroundColor: t.panelBg,
                color: t.panelFg,
                borderTop: idx === 0 ? "none" : "1px solid rgba(0,0,0,0.10)",
              }}
            >
              {/* ✅ Mobile tab header (NO scroll / NO jump) */}
              <Box
                component="button"
                type="button"
                onClick={() => {
                  setActiveKey(t.key);
                  setOpenMobileKey(t.key); // opens here, closes previous (single open)
                }}
                sx={{
                  width: "100%",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  color: t.panelFg,
                  px: 2,
                  py: t.tabNote ? 1.35 : 1.7,
                  textAlign: "center",
                  outline: "none",
                }}
              >
                <Typography
                  variant="d2c_h4"
                  component="div"
                  sx={{
                    color: t.panelFg,
                    lineHeight: 1.05,
                  }}
                >
                  {t.tabPrimary}
                </Typography>

                {t.tabSecondary ? (
                  <Typography
                    variant="d2c_h5"
                    component="div"
                    sx={{
                      color: t.panelFg,
                      opacity: 0.95,
                      mt: 0.45,
                    }}
                  >
                    {t.tabSecondary}
                  </Typography>
                ) : null}

                {t.tabNote ? (
                  <Typography
                    variant="d2c_h5"
                    component="div"
                    sx={{
                      color: t.panelFg,
                      opacity: 0.95,
                      mt: 0.45,
                      lineHeight: 1.2,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {t.tabNote}
                  </Typography>
                ) : null}
              </Box>

              {/* ✅ Expanded content inside the same tab */}
              {isOpen ? (
                <Box sx={{ px: 2.2, pb: 2.8 }}>
                  <Box
                    sx={{
                      backgroundColor: CREAM,
                      borderRadius: 1.8,
                      p: 2,
                      mb: 2,
                    }}
                  >
                    <Box
                      component="img"
                      src={t.productImgMobile || t.productImgDesktop}
                      alt={t.tabPrimary}
                      sx={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      opacity: panelReady ? 1 : 0,
                      transition: "opacity 0.35s ease-in",
                    }}
                  >
                    <Typography
                      variant="d2c_h6"
                      component="h3"
                      sx={{
                        color: t.panelFg,
                        mb: 1.2,
                      }}
                    >
                      {t.heading}
                    </Typography>

                    {t.body.map((p, i) => (
                      <Typography
                        key={i}
                        variant="d2c_p2"
                        component="p"
                        sx={{
                          color: t.panelFg,
                          opacity: 0.95,
                          mb: i === t.body.length - 1 ? 1.6 : 1.2,
                        }}
                      >
                        {p}
                      </Typography>
                    ))}

                    <Typography
                      variant="d2c_p2"
                      component="p"
                      sx={{
                        color: t.panelFg,
                        mb: 1.2,
                      }}
                    >
                      Nutritional Highlights:
                    </Typography>

                    {renderHighlights(t, t.size)}

                    <Typography
                      variant="d2c_p2"
                      component="p"
                      sx={{
                        mt: 2,
                        color: t.panelFg,
                        mb: 1,
                      }}
                    >
                      Key Benefits
                    </Typography>

                    <Box component="ul" sx={{ m: 0, pl: 2.2 }}>
                      {t.benefits.map((b, i) => (
                        <Typography
                          key={i}
                          component="li"
                          variant="d2c_p2"
                          sx={{
                            color: t.panelFg,
                            opacity: 0.95,
                            mb: 0.6,
                          }}
                        >
                          {b}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Box>
              ) : null}
            </Box>
          );
        })}
      </Box>
    </Box>
  );

  return (
    <Container
      component="section"
      disableGutters
      maxWidth={false}
      sx={{
        overflowX: "hidden",
        backgroundColor: GREEN_BG,
        backgroundImage: {
          xs: "url(/images/product-every-dream-bg-mob.svg)",
          md: "url(/images/product-every-dream-bg.svg)",
        },
        backgroundRepeat: "no-repeat",
        backgroundPosition: { xs: "center top", md: "center top" },
        backgroundSize: { xs: "cover", md: "cover" },
        px: { xs: 3, sm: 6, lg: 8 },
        py: { xs: 8, md: 10 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1728,
          mx: "auto",
          opacity: showSection ? 1 : 0,
          transition: "opacity 0.4s ease-in",
        }}
      >
        <Typography
          variant="d2c_h1"
          component="h2"
          align="center"
          sx={{ color: "#F8F3E3", mb: 2, whiteSpace: "pre-line" }}
        >
          {title}
        </Typography>

        <Typography
          variant="d2c_p"
          component="p"
          align="center"
          sx={{
            color: "#EAE8E1",
            opacity: 0.92,
            maxWidth: 760,
            mx: "auto",
            mb: 2.2,
          }}
        >
          {sub1}
        </Typography>

        <Typography
          variant="d2c_p"
          component="p"
          align="center"
          sx={{ color: "#EAE8E1", opacity: 0.92, maxWidth: 760, mx: "auto" }}
        >
          {sub2}
        </Typography>

        {renderMobile()}
        {renderDesktop()}
      </Box>
    </Container>
  );
}
