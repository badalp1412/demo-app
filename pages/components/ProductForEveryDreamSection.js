// import React, { useEffect, useMemo, useState } from 'react';
// import { Box, Typography, Container } from '@mui/material';

// export default function ProductForEveryDreamSection() {
//   const [showContent, setShowContent] = useState(false);
//   const [activeTab, setActiveTab] = useState(0);
//   const [showPanelText, setShowPanelText] = useState(false);

//   const tabs = useMemo(
//     () => [
//       {
//         key: 'greek',
//         label: 'Greek Yogurt',
//         subLabel: 'Greek Yogurt',
//         tabBg: '#F8F3E3',
//         tabColor: '#1A3C34',
//         panelHeading: 'The original, everyday essentials',
//         panelText: [
//           "This is where it all began. Farm-fresh milk, fermented with live and active cultures, the way it’s been done for generations. Strained to be thick and creamy. Packed with protein.",
//           'And billions of probiotics.',
//           'The originals. The essentials. The yogurt that started it all.',
//         ],
//         highlights: ['0g\nFat', '12g\nProtein', 'B12', 'Probiotics'],
//         productImgDesktop: '/images/product-greek-desktop.png',
//         productImgMobile: '/images/product-greek-mobile.png',
//       },
//       {
//         key: 'highProtein',
//         label: 'High Protein',
//         subLabel: 'Greek Yogurt',
//         tabBg: '#0B2B4A',
//         tabColor: '#F8F3E3',
//         panelHeading: 'High protein, same great taste',
//         panelText: [
//           'Add your exact Figma copy here for High Protein.',
//           'Add your supporting text here.',
//         ],
//         highlights: ['Protein+', 'Low Fat', 'B12', 'Probiotics'],
//         productImgDesktop: '/images/product-high-protein-desktop.png',
//         productImgMobile: '/images/product-high-protein-mobile.png',
//       },
//       {
//         key: 'zeroSugar',
//         label: 'Zero Sugar*',
//         subLabel: 'Greek Yogurt',
//         tabBg: '#0C77D8',
//         tabColor: '#F8F3E3',
//         panelHeading: 'Zero sugar* options',
//         panelText: [
//           'Add your exact Figma copy here for Zero Sugar.',
//           'Add your supporting text here.',
//         ],
//         highlights: ['0g\nSugar', 'Protein', 'B12', 'Probiotics'],
//         productImgDesktop: '/images/product-zero-sugar-desktop.png',
//         productImgMobile: '/images/product-zero-sugar-mobile.png',
//       },
//       {
//         key: 'lessSugar',
//         label: 'Less Sugar*',
//         subLabel: 'Greek Yogurt',
//         tabBg: '#E9E5D8',
//         tabColor: '#1A3C34',
//         panelHeading: 'Less sugar without compromise',
//         panelText: [
//           'Add your exact Figma copy here for Less Sugar.',
//           'Add your supporting text here.',
//         ],
//         highlights: ['Less\nSugar', 'Protein', 'B12', 'Probiotics'],
//         productImgDesktop: '/images/product-less-sugar-desktop.png',
//         productImgMobile: '/images/product-less-sugar-mobile.png',
//       },
//       {
//         key: 'flip',
//         label: 'Flip*',
//         subLabel: 'Greek Yogurt',
//         tabBg: '#D7262E',
//         tabColor: '#F8F3E3',
//         panelHeading: 'Flip for a treat',
//         panelText: [
//           'Add your exact Figma copy here for Flip.',
//           'Add your supporting text here.',
//         ],
//         highlights: ['Crunch', 'Creamy', 'Fun', 'Delicious'],
//         productImgDesktop: '/images/product-flip-desktop.png',
//         productImgMobile: '/images/product-flip-mobile.png',
//       },
//     ],
//     []
//   );

//   const current = tabs[activeTab];

//   // Preload SECTION background image, then reveal section text
//   useEffect(() => {
//     const bgImage = new Image();
//     const isMobile = typeof window !== 'undefined' && window.innerWidth < 900;

//     bgImage.src = isMobile
//       ? '/images/product-every-dream-bg-mob.svg'
//       : '/images/product-every-dream-bg.svg';

//     bgImage.onload = () => setShowContent(true);
//     bgImage.onerror = () => setShowContent(true);

//     const timer = setTimeout(() => setShowContent(true), 350);
//     return () => clearTimeout(timer);
//   }, []);

//   // Preload TAB product image first, then reveal panel text (image-first requirement)
//   useEffect(() => {
//     const img = new Image();
//     const isMobile = typeof window !== 'undefined' && window.innerWidth < 900;
//     const src = isMobile ? current.productImgMobile : current.productImgDesktop;

//     setShowPanelText(false);

//     if (!src) {
//       setShowPanelText(true);
//       return;
//     }

//     img.src = src;
//     img.onload = () => setShowPanelText(true);
//     img.onerror = () => setShowPanelText(true);

//     const timer = setTimeout(() => setShowPanelText(true), 400);
//     return () => clearTimeout(timer);
//   }, [activeTab, current.productImgDesktop, current.productImgMobile]);

//   return (
//     <Container
//       component="section"
//       disableGutters
//       maxWidth={false}
//       sx={{
//         position: 'relative',
//         width: '100%',
//         overflow: 'hidden',
//         backgroundColor: '#1A3C34',

//         px: { xs: 3, sm: 6, lg: 8 },
//         py: { xs: 8, md: 10 },

//         // Decorative corners (replace with your Figma exports)
//         '&::before': {
//           content: '""',
//           position: 'absolute',
//           left: 0,
//           bottom: 0,
//           width: { xs: '60%', md: '38%' },
//           height: { xs: '240px', md: '360px' },
//           backgroundImage: {
//             xs: 'url(/images/product-decor-left-mob.svg)',
//             md: 'url(/images/product-decor-left.svg)',
//           },
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'contain',
//           backgroundPosition: 'left bottom',
//           zIndex: 0,
//           pointerEvents: 'none',
//         },
//         '&::after': {
//           content: '""',
//           position: 'absolute',
//           right: 0,
//           bottom: 0,
//           width: { xs: '60%', md: '38%' },
//           height: { xs: '240px', md: '360px' },
//           backgroundImage: {
//             xs: 'url(/images/product-decor-right-mob.svg)',
//             md: 'url(/images/product-decor-right.svg)',
//           },
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'contain',
//           backgroundPosition: 'right bottom',
//           zIndex: 0,
//           pointerEvents: 'none',
//         },
//       }}
//     >
//       <Box
//         sx={{
//           position: 'relative',
//           zIndex: 1,
//           maxWidth: '1180px',
//           mx: 'auto',
//         }}
//       >
//         {/* Title + intro */}
//         <Box
//           sx={{
//             textAlign: 'center',
//             opacity: showContent ? 1 : 0,
//             transition: 'opacity 0.4s ease-in',
//           }}
//         >
//           <Typography
//             variant="d2c_h1"
//             component="h2"
//             sx={{
//               color: '#F8F3E3',
//               mb: { xs: 2, md: 2.5 },
//             }}
//           >
//             A Product for <br /> Every Dream
//           </Typography>

//           <Typography
//             variant="d2c_p"
//             component="p"
//             sx={{
//               color: '#EAE8E1',
//               maxWidth: '760px',
//               mx: 'auto',
//               opacity: 0.92,
//             }}
//           >
//             Trusted by U.S. Soccer athletes for both on-the-field and off-the-field nutrition,
//             Chobani offers a range of delicious options always crafted with real ingredients and
//             nothing artificial.
//           </Typography>

//           <Typography
//             variant="d2c_p"
//             component="p"
//             sx={{
//               color: '#EAE8E1',
//               maxWidth: '760px',
//               mx: 'auto',
//               mt: 1.5,
//               opacity: 0.92,
//             }}
//           >
//             From recovering post-workout to powering through practice, or grabbing a little
//             something before you get your day going, there’s a Chobani yogurt for you.
//           </Typography>
//         </Box>

//         {/* Tabs + Panel Wrapper */}
//         <Box sx={{ mt: { xs: 4, md: 5 }, borderRadius: 2.5, overflow: 'hidden' }}>
//           {/* Tabs row */}
//           <Box
//             sx={{
//               display: 'flex',
//               overflowX: 'auto',
//               WebkitOverflowScrolling: 'touch',
//               '&::-webkit-scrollbar': { display: 'none' },
//             }}
//           >
//             {tabs.map((t, i) => {
//               const isActive = i === activeTab;

//               return (
//                 <Box
//                   key={t.key}
//                   component="button"
//                   type="button"
//                   onClick={() => setActiveTab(i)}
//                   sx={{
//                     flex: '0 0 auto',
//                     minWidth: { xs: 140, sm: 150, md: 0 },
//                     width: { md: `${100 / tabs.length}%` },
//                     border: 'none',
//                     cursor: 'pointer',
//                     backgroundColor: isActive ? '#F8F3E3' : t.tabBg,
//                     color: isActive ? '#1A3C34' : t.tabColor,
//                     px: { xs: 2, md: 2.5 },
//                     py: 1.5,
//                     textAlign: 'center',
//                     borderRight: i < tabs.length - 1 ? '1px solid rgba(26,60,52,0.12)' : 'none',
//                     outline: 'none',
//                   }}
//                 >
//                   <Typography
//                     variant="d2c_h6"
//                     component="div"
//                     sx={{
//                       fontFamily: 'Chobani-Serif-SemiBold',
//                       lineHeight: 1.05,
//                     }}
//                   >
//                     {t.label}
//                   </Typography>
//                   <Typography
//                     variant="d2c_h5"
//                     component="div"
//                     sx={{ opacity: 0.9, mt: 0.5 }}
//                   >
//                     {t.subLabel}
//                   </Typography>
//                 </Box>
//               );
//             })}
//           </Box>

//           {/* Panel */}
//           <Box
//             sx={{
//               backgroundColor: '#F8F3E3',
//               px: { xs: 3, md: 5 },
//               py: { xs: 3.5, md: 4.5 },
//               boxShadow: '0px 18px 40px rgba(0,0,0,0.18)',
//             }}
//           >
//             <Box
//               sx={{
//                 display: 'flex',
//                 flexDirection: { xs: 'column', md: 'row' },
//                 gap: { xs: 3, md: 4 },
//                 alignItems: 'center',
//               }}
//             >
//               {/* Left image */}
//               <Box
//                 sx={{
//                   width: { xs: '100%', md: '44%' },
//                   position: 'relative',
//                 }}
//               >
//                 {/* Decorative swoosh + ball (replace) */}
//                 <Box
//                   component="img"
//                   src="/images/product-panel-swoosh.svg"
//                   alt=""
//                   sx={{
//                     position: 'absolute',
//                     left: { xs: '-8%', md: '-10%' },
//                     top: { xs: '6%', md: '10%' },
//                     width: { xs: '90%', md: '85%' },
//                     height: 'auto',
//                     zIndex: 0,
//                     pointerEvents: 'none',
//                   }}
//                 />
//                 <Box
//                   component="img"
//                   src="/images/product-panel-ball.svg"
//                   alt=""
//                   sx={{
//                     position: 'absolute',
//                     right: { xs: '6%', md: '10%' },
//                     top: { xs: '0%', md: '0%' },
//                     width: { xs: 86, md: 110 },
//                     height: 'auto',
//                     zIndex: 0,
//                     pointerEvents: 'none',
//                   }}
//                 />

//                 <Box
//                   component="img"
//                   src={current.productImgDesktop}
//                   alt="product"
//                   sx={{
//                     display: { xs: 'none', md: 'block' },
//                     width: '100%',
//                     height: 'auto',
//                     position: 'relative',
//                     zIndex: 1,
//                     objectFit: 'contain',
//                   }}
//                 />
//                 <Box
//                   component="img"
//                   src={current.productImgMobile || current.productImgDesktop}
//                   alt="product mobile"
//                   sx={{
//                     display: { xs: 'block', md: 'none' },
//                     width: '100%',
//                     height: 'auto',
//                     position: 'relative',
//                     zIndex: 1,
//                     objectFit: 'contain',
//                   }}
//                 />
//               </Box>

//               {/* Right text */}
//               <Box
//                 sx={{
//                   width: { xs: '100%', md: '56%' },
//                   opacity: showContent && showPanelText ? 1 : 0,
//                   transition: 'opacity 0.35s ease-in',
//                 }}
//               >
//                 <Typography
//                   variant="d2c_h4"
//                   component="h3"
//                   sx={{ color: '#1A3C34', mb: 1.5 }}
//                 >
//                   {current.panelHeading}
//                 </Typography>

//                 {current.panelText.map((p, idx) => (
//                   <Typography
//                     key={idx}
//                     variant="d2c_p"
//                     component="p"
//                     sx={{
//                       color: '#1A3C34',
//                       mb: idx === current.panelText.length - 1 ? 0 : 1.5,
//                       opacity: 0.95,
//                     }}
//                   >
//                     {p}
//                   </Typography>
//                 ))}

//                 <Typography
//                   variant="d2c_h6"
//                   component="p"
//                   sx={{ color: '#1A3C34', mt: 2.5, mb: 1.5 }}
//                 >
//                   Nutritional Highlights:
//                 </Typography>

//                 <Box
//                   sx={{
//                     display: 'flex',
//                     flexWrap: 'wrap',
//                     gap: 1.5,
//                     alignItems: 'center',
//                     mb: 2.5,
//                   }}
//                 >
//                   {current.highlights.map((h, i) => (
//                     <Box
//                       key={i}
//                       sx={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: 1,
//                         px: 1.5,
//                         py: 1,
//                         borderRadius: 999,
//                         backgroundColor: 'rgba(26,60,52,0.06)',
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           width: 34,
//                           height: 34,
//                           borderRadius: '50%',
//                           border: '1px solid rgba(26,60,52,0.25)',
//                           backgroundColor: 'rgba(248,243,227,0.6)',
//                         }}
//                       />
//                       <Typography
//                         variant="d2c_h5"
//                         component="span"
//                         sx={{ color: '#1A3C34', whiteSpace: 'pre-line', lineHeight: 1.05 }}
//                       >
//                         {h}
//                       </Typography>
//                     </Box>
//                   ))}
//                 </Box>

//                 {/* Optional small badge block (replace with image if needed) */}
//                 <Box
//                   sx={{
//                     width: { xs: '100%', sm: 320 },
//                     maxWidth: '100%',
//                     border: '1px solid rgba(26,60,52,0.20)',
//                     borderRadius: 1.2,
//                     p: 1.5,
//                     color: '#1A3C34',
//                     backgroundColor: 'rgba(248,243,227,0.65)',
//                   }}
//                 >
//                   <Typography variant="d2c_h5" component="p" sx={{ m: 0, opacity: 0.9 }}>
//                     Replace this badge area with your Figma asset.
//                   </Typography>
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function ProductForEveryDreamSection() {
  const [showSection, setShowSection] = useState(false);

  // Desktop tab selection
  const [activeKey, setActiveKey] = useState('zeroSugar');

  // Mobile accordion open key (only ONE open at a time)
  const [openMobileKey, setOpenMobileKey] = useState(null);

  // Image-first: reveal text after active image preloads
  const [panelReady, setPanelReady] = useState(false);

  const openedPanelRef = useRef(null);

  const GREEN_BG = '#1A3C34';
  const PANEL_BG = '#F8F3E3';

  const tabs = [
    {
      key: 'greek',
      primary: 'Greek Yogurt',
      secondary: '',
      note: '',
      bg: PANEL_BG,
      fg: '#1A3C34',
      heading: 'The original, everyday essentials',
      paragraphs: [
        'This is where it all began. Farm-fresh milk, fermented with live and active cultures, the way it’s been done for generations. Strained to be thick and creamy. Packed with protein.',
        'And billions of probiotics.',
        'The originals. The essentials. The yogurt that started it all.',
      ],
      mode: 'pills',
      pills: ['0g\nFat', '12g\nProtein', 'B12', 'Probiotics'],
      productImgDesktop: '/images/product-greek-desktop.png',
      productImgMobile: '/images/product-greek-mobile.png',
    },
    {
      key: 'highProtein',
      primary: 'High Protein',
      secondary: 'Greek Yogurt',
      note: '',
      bg: '#082B49',
      fg: '#F8F3E3',
      heading: 'Maximum Protein,\nMinimum Ingredients',
      paragraphs: [
        'To craft our High Protein Greek Yogurt, we start with farm-fresh milk fermented traditionally with live and active cultures, delivering billions of probiotics in every cup.',
        'We use a generations-old authentic straining method to increase protein naturally. No protein powders. Nothing artificial. Velvety and smooth.',
        'Every spoonful tastes like real food because it is.',
      ],
      mode: 'stamps',
      stamps: [
        { top: 'BILLIONS', center: '', bottom: 'OF PROBIOTICS' },
        { top: 'ADDED', center: '0g', bottom: 'SUGAR' },
        { top: 'VITAMIN', center: 'B12', bottom: 'AS A SOURCE HERE' },
        { top: 'ONLY NATURAL', center: '', bottom: 'INGREDIENTS' },
        { top: 'LACTOSE', center: '', bottom: 'FREE' },
        { top: 'CRAFTED', center: '', bottom: 'THE REAL WAY' },
      ],
      showCompleteBox: true,
      productImgDesktop: '/images/product-high-protein-desktop.png',
      productImgMobile: '/images/product-high-protein-mobile.png',
    },
    {
      key: 'zeroSugar',
      primary: 'Zero Sugar*',
      secondary: 'Greek Yogurt',
      note: '*Not a low calorie food',
      bg: '#0C77D8',
      fg: '#F8F3E3',
      heading: 'Zero Sugar*',
      paragraphs: [
        'Replace this paragraph with your exact Figma copy for Zero Sugar.',
        '*Not a low calorie food',
      ],
      mode: 'pills',
      pills: ['0g\nSugar', 'Protein', 'B12', 'Probiotics'],
      productImgDesktop: '/images/product-zero-sugar-desktop.png',
      productImgMobile: '/images/product-zero-sugar-mobile.png',
    },
    {
      key: 'lessSugar',
      primary: 'Less Sugar*',
      secondary: 'Greek Yogurt',
      note: '*Not a low calorie food',
      bg: '#C9D9E8',
      fg: '#1A3C34',
      heading: 'Less Sugar*',
      paragraphs: [
        'Replace this paragraph with your exact Figma copy for Less Sugar.',
        '*Not a low calorie food',
      ],
      mode: 'pills',
      pills: ['Less\nSugar', 'Protein', 'B12', 'Probiotics'],
      productImgDesktop: '/images/product-less-sugar-desktop.png',
      productImgMobile: '/images/product-less-sugar-mobile.png',
    },
    {
      key: 'flip',
      primary: 'Flip®',
      secondary: 'Greek Yogurt',
      note: '',
      bg: '#E1261C',
      fg: '#F8F3E3',
      heading: 'Flip®',
      paragraphs: [
        'Replace this paragraph with your exact Figma copy for Flip®.',
      ],
      mode: 'pills',
      pills: ['Fun', 'Crunch', 'Creamy', 'Delicious'],
      productImgDesktop: '/images/product-flip-desktop.png',
      productImgMobile: '/images/product-flip-mobile.png',
    },
  ];

  const getTabByKey = (key) => tabs.find((t) => t.key === key) || tabs[0];

  const currentDesktop = getTabByKey(activeKey);
  const currentMobile = openMobileKey ? getTabByKey(openMobileKey) : null;

  // preload section bg (image first)
  useEffect(() => {
    const bg = new Image();
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 900;
    bg.src = isMobile
      ? '/images/product-every-dream-bg-mob.svg'
      : '/images/product-every-dream-bg.svg';

    bg.onload = () => setShowSection(true);
    bg.onerror = () => setShowSection(true);

    const timer = setTimeout(() => setShowSection(true), 350);
    return () => clearTimeout(timer);
  }, []);

  // preload active panel image (mobile OR desktop)
  useEffect(() => {
    // decide which one is "active" visually
    const keyToLoad = openMobileKey || activeKey;
    const tab = getTabByKey(keyToLoad);

    const img = new Image();
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 900;
    const src = isMobile ? tab.productImgMobile : tab.productImgDesktop;

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
  }, [activeKey, openMobileKey]);

  const openMobileTab = (key) => {
    setPanelReady(false);

    setOpenMobileKey((prev) => (prev === key ? null : key));

    // smooth scroll to opened content
    setTimeout(() => {
      if (openedPanelRef.current) {
        openedPanelRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 0);
  };

  const renderHighlights = (tab) => {
    if (tab.mode === 'stamps') {
      return (
        <Box sx={{ mt: 2.4 }}>
          <Typography
            variant="d2c_p2"
            component="p"
            sx={{ color: '#1A3C34', mb: 1.6 }}
          >
            Nutritional Highlights:
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 1.6,
              maxWidth: 520,
            }}
          >
            {tab.stamps.map((s, i) => (
              <Box
                key={i}
                sx={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: '50%',
                  border: '2px solid rgba(26,60,52,0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  p: 1,
                }}
              >
                <Box sx={{ lineHeight: 1.05 }}>
                  <Typography
                    variant="d2c_h5"
                    component="div"
                    sx={{ color: '#1A3C34', opacity: 0.95 }}
                  >
                    {s.top}
                  </Typography>

                  {s.center ? (
                    <Typography
                      variant="d2c_h4"
                      component="div"
                      sx={{ color: '#1A3C34', mt: 0.4, mb: 0.4 }}
                    >
                      {s.center}
                    </Typography>
                  ) : (
                    <Box sx={{ height: 10 }} />
                  )}

                  <Typography
                    variant="d2c_h5"
                    component="div"
                    sx={{ color: '#1A3C34', opacity: 0.95 }}
                  >
                    {s.bottom}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {tab.showCompleteBox && (
            <Box
              sx={{
                mt: 3,
                border: '2px solid rgba(26,60,52,0.55)',
                borderRadius: 1.4,
                overflow: 'hidden',
                maxWidth: 520,
              }}
            >
              <Box
                sx={{
                  px: 2,
                  py: 1.6,
                  borderBottom: '2px solid rgba(26,60,52,0.55)',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="d2c_h6"
                  component="p"
                  sx={{
                    m: 0,
                    color: '#1A3C34',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  COMPLETE PROTEINS <br /> &amp; VITAMIN B12 TO:
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  px: 2,
                  py: 2.2,
                  textAlign: 'center',
                }}
              >
                {[
                  {
                    label: 'SUPPORT\nSTRENGTH',
                    icon: '/images/icon-strength.svg',
                  },
                  { label: 'UNLOCK\nENERGY', icon: '/images/icon-energy.svg' },
                  { label: 'FEEL\nFULL', icon: '/images/icon-feel-full.svg' },
                ].map((b, i) => (
                  <Box key={i}>
                    <Box
                      component="img"
                      src={b.icon}
                      alt=""
                      sx={{
                        width: 46,
                        height: 46,
                        objectFit: 'contain',
                        mb: 1,
                      }}
                    />
                    <Typography
                      variant="d2c_h5"
                      component="p"
                      sx={{
                        m: 0,
                        color: '#1A3C34',
                        whiteSpace: 'pre-line',
                        letterSpacing: '0.8px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {b.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      );
    }

    // pills -> 2x2 on mobile, 4 across on desktop
    return (
      <Box sx={{ mt: 2.4 }}>
        <Typography
          variant="d2c_p2"
          component="p"
          sx={{ color: '#1A3C34', mb: 1.6 }}
        >
          Nutritional Highlights:
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, auto)' },
            gap: 1.4,
            maxWidth: 560,
          }}
        >
          {tab.pills.map((p, i) => (
            <Box
              key={i}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.2,
                px: 1.6,
                py: 1.2,
                borderRadius: 999,
                backgroundColor: 'rgba(26,60,52,0.06)',
              }}
            >
              <Box
                sx={{
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  border: '1px solid rgba(26,60,52,0.25)',
                  backgroundColor: 'rgba(248,243,227,0.75)',
                }}
              />
              <Typography
                variant="d2c_h5"
                component="span"
                sx={{
                  color: '#1A3C34',
                  whiteSpace: 'pre-line',
                  lineHeight: 1.05,
                }}
              >
                {p}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            mt: 3,
            border: '1px solid rgba(26,60,52,0.20)',
            borderRadius: 1.2,
            p: 1.6,
            maxWidth: 560,
            backgroundColor: 'rgba(248,243,227,0.6)',
          }}
        >
          <Typography
            variant="d2c_h5"
            component="p"
            sx={{ m: 0, color: '#1A3C34', opacity: 0.9 }}
          >
            Replace this badge area with your Figma asset.
          </Typography>
        </Box>
      </Box>
    );
  };

  const renderMobileAccordion = () => (
    <Box sx={{ display: { xs: 'block', md: 'none' }, mt: 4 }}>
      <Box
        sx={{
          maxWidth: 330,
          mx: 'auto',
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: '0px 18px 40px rgba(0,0,0,0.18)',
        }}
      >
        {tabs.map((tab, idx) => {
          const isOpen = openMobileKey === tab.key;

          return (
            <Box
              key={tab.key}
              sx={{
                borderBottom:
                  idx === tabs.length - 1
                    ? 'none'
                    : '1px solid rgba(0,0,0,0.10)',
              }}
            >
              {/* TAB HEADER */}
              <Box
                component="button"
                type="button"
                onClick={() => openMobileTab(tab.key)}
                sx={{
                  width: '100%',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: tab.bg,
                  color: tab.fg,
                  px: 2,
                  py: 2,
                  textAlign: 'center',
                  outline: 'none',
                }}
              >
                <Typography
                  variant="d2c_h4"
                  component="div"
                  sx={{
                    color: tab.fg,
                    lineHeight: 1.05,
                    fontFamily: 'Chobani Sans, serif',
                  }}
                >
                  {tab.primary}
                </Typography>

                {tab.secondary ? (
                  <Typography
                    variant="d2c_h5"
                    component="div"
                    sx={{ color: tab.fg, opacity: 0.9, mt: 0.6 }}
                  >
                    {tab.secondary}
                  </Typography>
                ) : null}

                {tab.note ? (
                  <Typography
                    variant="d2c_h5"
                    component="div"
                    sx={{ color: tab.fg, opacity: 0.9, mt: 0.6 }}
                  >
                    {tab.note}
                  </Typography>
                ) : null}
              </Box>

              {/* EXPANDED CONTENT (INSIDE THIS TAB) */}
              {isOpen && (
                <Box
                  ref={openedPanelRef}
                  sx={{
                    backgroundColor: PANEL_BG,
                    px: 2.6,
                    py: 3,
                    borderTop: '1px solid rgba(26,60,52,0.14)',
                  }}
                >
                  {/* Top label now matches the OPENED TAB (fixes “Greek Yogurt always” confusion) */}
                  <Typography
                    variant="d2c_h4"
                    component="div"
                    sx={{ color: '#1A3C34', textAlign: 'center', mb: 2 }}
                  >
                    {tab.primary}
                  </Typography>

                  {/* Image always shows first */}
                  <Box sx={{ mb: 2.5 }}>
                    <Box
                      component="img"
                      src={tab.productImgMobile || tab.productImgDesktop}
                      alt="product"
                      sx={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                      }}
                    />
                  </Box>

                  {/* Text appears AFTER image preload */}
                  <Box
                    sx={{
                      opacity: panelReady ? 1 : 0,
                      transition: 'opacity 0.35s ease-in',
                    }}
                  >
                    <Typography
                      variant="d2c_h6"
                      component="h3"
                      sx={{
                        color: '#1A3C34',
                        mb: 1.6,
                        whiteSpace: 'pre-line',
                        fontFamily: 'Chobani-Serif-SemiBold',
                      }}
                    >
                      {tab.heading}
                    </Typography>

                    {tab.paragraphs.map((p, i) => (
                      <Typography
                        key={i}
                        variant="d2c_p2"
                        component="p"
                        sx={{
                          color: '#1A3C34',
                          opacity: 0.95,
                          mb: i === tab.paragraphs.length - 1 ? 0 : 1.6,
                        }}
                      >
                        {p}
                      </Typography>
                    ))}

                    {renderHighlights(tab)}
                  </Box>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );

  const renderDesktopTabs = () => (
    <Box sx={{ display: { xs: 'none', md: 'block' }, mt: 5 }}>
      <Box
        sx={{
          maxWidth: 980,
          mx: 'auto',
          borderRadius: 2.5,
          overflow: 'hidden',
          boxShadow: '0px 18px 40px rgba(0,0,0,0.18)',
          backgroundColor: PANEL_BG,
        }}
      >
        {/* Tabs row */}
        <Box sx={{ display: 'flex', width: '100%' }}>
          {tabs.map((t, idx) => {
            const isActive = t.key === activeKey;
            const bg = isActive ? PANEL_BG : t.bg;
            const fg = isActive ? '#1A3C34' : t.fg;

            return (
              <Box
                key={t.key}
                component="button"
                type="button"
                onClick={() => setActiveKey(t.key)}
                sx={{
                  width: `${100 / tabs.length}%`,
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: bg,
                  color: fg,
                  px: 2,
                  py: 1.8,
                  textAlign: 'center',
                  outline: 'none',
                  borderRight:
                    idx === tabs.length - 1
                      ? 'none'
                      : '1px solid rgba(26,60,52,0.12)',
                }}
              >
                <Typography
                  variant="d2c_h6"
                  component="div"
                  sx={{
                    color: fg,
                    fontFamily: 'Chobani-Serif-SemiBold',
                    lineHeight: 1.05,
                  }}
                >
                  {t.primary}
                </Typography>
                <Typography
                  variant="d2c_h5"
                  component="div"
                  sx={{ color: fg, opacity: 0.9, mt: 0.6 }}
                >
                  {t.secondary || 'Greek Yogurt'}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* Panel */}
        <Box sx={{ px: 5, py: 4.5 }}>
          <Box sx={{ display: 'flex', gap: 4.5, alignItems: 'center' }}>
            <Box sx={{ width: '42%' }}>
              <Box
                component="img"
                src={currentDesktop.productImgDesktop}
                alt="product"
                sx={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </Box>

            <Box sx={{ width: '58%' }}>
              <Box
                sx={{
                  opacity: panelReady ? 1 : 0,
                  transition: 'opacity 0.35s ease-in',
                }}
              >
                <Typography
                  variant="d2c_h4"
                  component="h3"
                  sx={{ color: '#1A3C34', mb: 2, whiteSpace: 'pre-line' }}
                >
                  {currentDesktop.heading}
                </Typography>

                {currentDesktop.paragraphs.map((p, i) => (
                  <Typography
                    key={i}
                    variant="d2c_p"
                    component="p"
                    sx={{
                      color: '#1A3C34',
                      opacity: 0.95,
                      mb: i === currentDesktop.paragraphs.length - 1 ? 0 : 1.8,
                    }}
                  >
                    {p}
                  </Typography>
                ))}

                {renderHighlights(currentDesktop)}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Container
      component="section"
      disableGutters
      maxWidth={false}
      sx={{
        width: '100%',
        overflow: 'hidden',
        backgroundColor: GREEN_BG,
        px: { xs: 3, sm: 6, lg: 8 },
        py: { xs: 8, md: 10 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1180,
          mx: 'auto',
          opacity: showSection ? 1 : 0,
          transition: 'opacity 0.4s ease-in',
        }}
      >
        <Typography
          variant="d2c_h1"
          component="h2"
          align="center"
          sx={{ color: '#F8F3E3', mb: 2 }}
        >
          Feed your <br /> dream right
        </Typography>

        <Typography
          variant="d2c_p"
          component="p"
          align="center"
          sx={{
            color: '#EAE8E1',
            opacity: 0.92,
            maxWidth: 760,
            mx: 'auto',
            mb: 2.2,
          }}
        >
          Trusted by U.S. Soccer athletes for both on-the-field and
          off-the-field nutrition, Chobani offers a range of delicious options
          always crafted with real ingredients and nothing artificial.
        </Typography>

        <Typography
          variant="d2c_p"
          component="p"
          align="center"
          sx={{
            color: '#EAE8E1',
            opacity: 0.92,
            maxWidth: 760,
            mx: 'auto',
          }}
        >
          From recovering post-workout to powering through practice, or grabbing
          a little something before you get your day going, there’s a Chobani
          yogurt for you.
        </Typography>

        {/* Mobile fixed: content opens INSIDE clicked tab */}
        {renderMobileAccordion()}

        {/* Desktop */}
        {renderDesktopTabs()}
      </Box>
    </Container>
  );
}
