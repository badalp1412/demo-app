// import React, { useEffect, useState } from 'react';
// import { Box, Typography, Container } from '@mui/material';

// export default function WhatsInsideCountsSection() {
//   const [showContent, setShowContent] = useState(false);
//   const [openIndex, setOpenIndex] = useState(null);

//   useEffect(() => {
//     const img = new Image();
//     const isMobile = typeof window !== 'undefined' && window.innerWidth < 900;

//     // Preload the *player* image (most important visible asset in this section)
//     img.src = isMobile
//       ? '/images/inside-player-mob.png'
//       : '/images/inside-player-desktop.png';

//     img.onload = () => setShowContent(true);
//     img.onerror = () => setShowContent(true);

//     const timer = setTimeout(() => setShowContent(true), 350);
//     return () => clearTimeout(timer);
//   }, []);

//   const items = [
//     {
//       title: 'Natural Protein',
//       body: 'Add your accordion body copy here exactly as in Figma.',
//     },
//     { title: 'Sugar', body: 'Add your accordion body copy here.' },
//     { title: 'Hydration', body: 'Add your accordion body copy here.' },
//     { title: 'Calcium', body: 'Add your accordion body copy here.' },
//     { title: 'Vitamin B12', body: 'Add your accordion body copy here.' },
//     { title: 'Other Fun Facts', body: 'Add your accordion body copy here.' },
//   ];

//   const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

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

//         // Decorative confetti / shapes (replace)
//         '&::before': {
//           content: '""',
//           position: 'absolute',
//           left: 0,
//           bottom: 0,
//           width: { xs: '55%', md: '30%' },
//           height: { xs: 220, md: 320 },
//           backgroundImage: {
//             xs: 'url(/images/inside-decor-left-mob.svg)',
//             md: 'url(/images/inside-decor-left.svg)',
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
//           top: 0,
//           width: { xs: '70%', md: '40%' },
//           height: { xs: 260, md: 380 },
//           backgroundImage: {
//             xs: 'url(/images/inside-decor-right-mob.svg)',
//             md: 'url(/images/inside-decor-right.svg)',
//           },
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'contain',
//           backgroundPosition: 'right top',
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
//           display: 'flex',
//           flexDirection: { xs: 'column', md: 'row' },
//           gap: { xs: 4, md: 6 },
//           alignItems: 'flex-start',
//         }}
//       >
//         {/* Left content */}
//         <Box
//           sx={{
//             flex: '1 1 auto',
//             opacity: showContent ? 1 : 0,
//             transition: 'opacity 0.4s ease-in',
//           }}
//         >
//           <Typography
//             variant="d2c_h1"
//             component="h2"
//             sx={{ color: '#F8F3E3', mb: { xs: 2, md: 2.5 } }}
//           >
//             What’s Inside Counts
//           </Typography>

//           <Typography
//             variant="d2c_h6"
//             component="p"
//             sx={{
//               color: '#EAE8E1',
//               fontFamily: 'Chobani-Serif-SemiBold',
//               mb: 1.5,
//               opacity: 0.95,
//             }}
//           >
//             Our Straining Lineup
//           </Typography>

//           <Typography
//             variant="d2c_p"
//             component="p"
//             sx={{
//               color: '#EAE8E1',
//               opacity: 0.9,
//               maxWidth: 720,
//               mb: { xs: 3, md: 4 },
//             }}
//           >
//             Delicious, nutritious, and natural food. That’s what makes Chobani
//             different. And why our food helps you perform, recover, and keep
//             going.
//           </Typography>

//           {/* Accordion list */}
//           <Box sx={{ maxWidth: 760 }}>
//             {items.map((it, i) => {
//               const isOpen = openIndex === i;

//               return (
//                 <Box key={it.title}>
//                   <Box
//                     onClick={() => toggle(i)}
//                     sx={{
//                       cursor: 'pointer',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'space-between',
//                       py: 1.8,
//                       borderBottom: '1px solid rgba(248,243,227,0.60)',
//                     }}
//                   >
//                     <Typography
//                       variant="d2c_h6"
//                       component="p"
//                       sx={{ color: '#F8F3E3', m: 0 }}
//                     >
//                       {it.title}
//                     </Typography>

//                     <Typography
//                       variant="d2c_h4"
//                       component="span"
//                       sx={{
//                         color: '#F8F3E3',
//                         lineHeight: 1,
//                         fontFamily: 'Chobani-Serif-Regular',
//                       }}
//                     >
//                       {isOpen ? '–' : '+'}
//                     </Typography>
//                   </Box>

//                   {isOpen && (
//                     <Box sx={{ pt: 1.5, pb: 2 }}>
//                       <Typography
//                         variant="d2c_p2"
//                         component="p"
//                         sx={{ color: '#EAE8E1', m: 0 }}
//                       >
//                         {it.body}
//                       </Typography>
//                     </Box>
//                   )}
//                 </Box>
//               );
//             })}
//           </Box>
//         </Box>

//         {/* Right player image */}
//         <Box
//           sx={{
//             flex: '0 0 auto',
//             width: { xs: '100%', md: 360 },
//             display: 'flex',
//             justifyContent: { xs: 'center', md: 'flex-end' },
//             alignItems: 'flex-start',
//             mt: { xs: 0, md: 6 },
//           }}
//         >
//           <Box
//             component="img"
//             src="/images/inside-player-desktop.png"
//             alt="player"
//             sx={{
//               display: { xs: 'none', md: 'block' },
//               width: '100%',
//               maxWidth: 320,
//               height: 'auto',
//               objectFit: 'contain',
//             }}
//           />
//           <Box
//             component="img"
//             src="/images/inside-player-mob.png"
//             alt="player mobile"
//             sx={{
//               display: { xs: 'block', md: 'none' },
//               width: '100%',
//               maxWidth: 260,
//               height: 'auto',
//               objectFit: 'contain',
//             }}
//           />
//         </Box>
//       </Box>
//     </Container>
//   );
// }

import React, { useEffect, useMemo, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function WhatsInsideCountsSection() {
  const [showContent, setShowContent] = useState(false);

  // multi-open accordion state
  const [openKeys, setOpenKeys] = useState({
    naturalProtein: false,
    sugar: false,
    hydration: false,
    calcium: false,
    vitaminB12: false,
    otherFunFacts: false,
  });

  const toggle = (key) => setOpenKeys((p) => ({ ...p, [key]: !p[key] }));

  // mobile lineup carousel
  const [lineupIndex, setLineupIndex] = useState(0);

  // preload player image
  useEffect(() => {
    const img = new Image();
    img.src = '/images/inside-player-desktop.png';
    img.onload = () => setShowContent(true);
    img.onerror = () => setShowContent(true);
    const timer = setTimeout(() => setShowContent(true), 350);
    return () => clearTimeout(timer);
  }, []);

  const accordionItems = useMemo(
    () => [
      {
        key: 'naturalProtein',
        label: 'Natural Protein',
        expandedLabel: 'Natural Protein: Build. Recover. Repeat.',
      },
      { key: 'sugar', label: 'Sugar' },
      { key: 'hydration', label: 'Hydration' },
      { key: 'calcium', label: 'Calcium' },
      { key: 'vitaminB12', label: 'Vitamin B12' },
      { key: 'otherFunFacts', label: 'Other Fun Facts' },
    ],
    []
  );

  const lineup = useMemo(
    () => [
      { name: 'Flip®', grams: '8-9g', img: '/images/lineup-flip.png' },
      {
        name: 'Greek Yogurt\nDrink',
        grams: '10g',
        img: '/images/lineup-drink.png',
      },
      {
        name: 'Zero Sugar*\nGreek Yogurt',
        grams: '15g',
        img: '/images/lineup-zero.png',
      },
      {
        name: 'Less Sugar**\nGreek Yogurt',
        grams: '12g',
        img: '/images/lineup-less.png',
      },
      {
        name: 'Greek Yogurt',
        grams: '10-14g',
        img: '/images/lineup-greek.png',
      },
      {
        name: 'High Protein\nGreek Yogurt',
        grams: '20g',
        img: '/images/lineup-high.png',
      },
      {
        name: 'High Protein\nGreek Yogurt Drink',
        grams: '25-30g',
        img: '/images/lineup-high-drink.png',
      },
    ],
    []
  );

  const currentLineup = lineup[lineupIndex];

  const nextLineup = () => {
    setLineupIndex((i) => (i + 1) % lineup.length);
  };

  const SectionSmallHeading = ({ children, mt = 0 }) => (
    <Typography
      variant="d2c_h6"
      component="p"
      sx={{ color: '#F8F3E3', fontFamily: 'Chobani-Serif-SemiBold', mt, mb: 1 }}
    >
      {children}
    </Typography>
  );

  const Body = ({ children, mt = 0, mb = 0 }) => (
    <Typography
      variant="d2c_p2"
      component="p"
      sx={{ color: '#EAE8E1', opacity: 0.92, mt, mb, lineHeight: 1.45 }}
    >
      {children}
    </Typography>
  );

  return (
    <Container
      component="section"
      disableGutters
      maxWidth={false}
      sx={{
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#1A3C34',
        px: { xs: 3, sm: 6, lg: 8 },
        py: { xs: 8, md: 10 },
      }}
    >
      {/* left aligned wrapper (like Figma section) */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1180,
          ml: 0,
          mr: 'auto',
          opacity: showContent ? 1 : 0,
          transition: 'opacity 0.4s ease-in',
        }}
      >
        <Typography
          variant="d2c_h1"
          component="h2"
          sx={{ color: '#F8F3E3', mb: 1 }}
        >
          What’s Inside Counts
        </Typography>

        <Typography
          variant="d2c_h6"
          component="p"
          sx={{ color: '#EAE8E1', opacity: 0.95, mb: 1.2 }}
        >
          Our Starting Lineup
        </Typography>

        <Typography
          variant="d2c_p2"
          component="p"
          sx={{ color: '#EAE8E1', opacity: 0.92, mb: 3, maxWidth: 520 }}
        >
          Delicious, nutritious, and natural food. That’s what makes Chobani
          different.
          <br />
          And why our food helps you perform, recover, and keep going.
        </Typography>

        {/* top-right player */}
        <Box
          component="img"
          src="/images/inside-player-desktop.png"
          alt=""
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: { xs: 120, md: 220 },
            height: 'auto',
            pointerEvents: 'none',
          }}
        />

        {/* Accordion (single list, multi-open) */}
        <Box sx={{ mt: 2, maxWidth: 900 }}>
          {accordionItems.map((it) => {
            const isOpen = !!openKeys[it.key];
            const title =
              it.key === 'naturalProtein' && isOpen
                ? it.expandedLabel
                : it.label;

            return (
              <Box key={it.key}>
                <Box
                  onClick={() => toggle(it.key)}
                  sx={{
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    py: 2.2,
                    borderBottom: '1px solid rgba(248,243,227,0.35)',
                  }}
                >
                  <Typography
                    variant="d2c_h4"
                    component="p"
                    sx={{ color: '#F8F3E3', m: 0, whiteSpace: 'pre-line' }}
                  >
                    {title}
                  </Typography>

                  <Typography
                    variant="d2c_h4"
                    component="span"
                    sx={{ color: '#F8F3E3', lineHeight: 1 }}
                  >
                    {isOpen ? '×' : '+'}
                  </Typography>
                </Box>

                {/* Expanded Natural Protein content (your provided text) */}
                {isOpen && it.key === 'naturalProtein' && (
                  <Box sx={{ pt: 2.2, pb: 3.2 }}>
                    <SectionSmallHeading>Why it Matters</SectionSmallHeading>
                    <Body>
                      Protein helps repair muscle, support recovery, and keeps
                      you strong. All our Greek Yogurts are made with fresh
                      milk, making them an excellent source of protein,
                      naturally.
                    </Body>

                    <SectionSmallHeading mt={2.6}>
                      What Makes Chobani Different
                    </SectionSmallHeading>
                    <Body>
                      Not all protein is created equal. And not all protein
                      sources are considered complete—and incomplete proteins
                      can’t be used as effectively. Dairy protein is a natural
                      source of complete protein, meaning it contains all nine
                      essential amino acids your body needs to support essential
                      processes like muscle growth and repair, helping your body
                      to grow—and stay—strong. Our protein comes from farm fresh
                      milk, not powders.
                    </Body>

                    <SectionSmallHeading mt={2.6}>
                      Our protein is different in 2 ways:
                    </SectionSmallHeading>

                    <Typography
                      variant="d2c_h5"
                      component="p"
                      sx={{ color: '#F8F3E3', opacity: 0.95, mt: 1.5, mb: 0.6 }}
                    >
                      1) Our protein is complete
                    </Typography>
                    <Body>
                      It’s the gold standard. We start with fresh milk with all
                      9 amino acids.
                    </Body>

                    <Typography
                      variant="d2c_h5"
                      component="p"
                      sx={{ color: '#F8F3E3', opacity: 0.95, mt: 1.6, mb: 0.6 }}
                    >
                      2) Our craftsmanship
                    </Typography>
                    <Body>
                      Our generations-old method of straining allows for higher
                      protein naturally, no added protein powders or artificial
                      ingredients. Simply, natural protein with super power.
                    </Body>

                    <SectionSmallHeading mt={2.6}>
                      Key Benefits for Athletes
                    </SectionSmallHeading>

                    {[
                      {
                        title: 'Before the Game',
                        text: "Getting enough protein in your diet on a regular basis helps make sure your body's ready come game day. Protein is important for building muscle strength and preventing muscle breakdown during activity.",
                        icon: '/images/icon-before-game.svg',
                      },
                      {
                        title: 'During the Game',
                        text: 'Keep your energy up with drinks and snacks during activities lasting longer than one hour. During exercise, protein and carbohydrates can provide the extra energy boost and help kickstart your recovery faster.',
                        icon: '/images/icon-during-game.svg',
                      },
                      {
                        title: 'After the Game',
                        text: 'Our products deliver the right blend of two important proteins: whey and casein. Whey hits muscles fast for rapid repair. Casein releases amino acids slowly, maximizing muscle protein synthesis for up to 8 hours. More efficient recovery means you can train harder and more often.',
                        icon: '/images/icon-after-game.svg',
                      },
                      {
                        title: 'What about kids?',
                        text: 'Protein is important for kids as they grow and develop. Getting enough protein helps athletes of all ages perform their best. Protein needs for children vary and increase with age. Check with your pediatrician to determine how much is right for you.',
                        icon: '/images/icon-kids.svg',
                      },
                    ].map((b) => (
                      <Box
                        key={b.title}
                        sx={{
                          display: 'flex',
                          gap: 2,
                          mt: 2.2,
                          alignItems: 'flex-start',
                        }}
                      >
                        <Box
                          component="img"
                          src={b.icon}
                          alt=""
                          sx={{
                            width: 38,
                            height: 38,
                            objectFit: 'contain',
                            mt: 0.3,
                          }}
                        />
                        <Box>
                          <Typography
                            variant="d2c_h6"
                            component="p"
                            sx={{ color: '#F8F3E3', m: 0, mb: 0.7 }}
                          >
                            {b.title}
                          </Typography>
                          <Body>{b.text}</Body>
                        </Box>
                      </Box>
                    ))}

                    <SectionSmallHeading mt={2.6}>
                      Protein Across Our Lineup
                    </SectionSmallHeading>
                    <Body>
                      Recommended protein levels vary. But we have a product for
                      everyone.
                    </Body>

                    {/* DESKTOP: full row (7 items) like screenshot */}
                    <Box
                      sx={{
                        display: { xs: 'none', md: 'block' },
                        mt: 2.2,
                        pt: 2.2,
                        borderTop: '1px solid rgba(248,243,227,0.25)',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
                          gap: 2.6,
                          alignItems: 'end',
                        }}
                      >
                        {lineup.map((p) => (
                          <Box key={p.name}>
                            <Typography
                              variant="d2c_h5"
                              component="p"
                              sx={{
                                color: '#EAE8E1',
                                m: 0,
                                mb: 1,
                                whiteSpace: 'pre-line',
                              }}
                            >
                              {p.name}
                            </Typography>

                            <Box
                              sx={{
                                width: '100%',
                                height: 140,
                                border: '1px solid rgba(248,243,227,0.25)',
                                backgroundColor: 'rgba(0,0,0,0.08)',
                                borderRadius: 0.8,
                                overflow: 'hidden',
                              }}
                            >
                              <Box
                                component="img"
                                src={p.img}
                                alt=""
                                sx={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'contain',
                                }}
                              />
                            </Box>

                            <Box
                              sx={{
                                mt: 1.2,
                                backgroundColor: '#0C77D8',
                                color: '#F8F3E3',
                                borderRadius: 0.8,
                                py: 1.1,
                                textAlign: 'center',
                              }}
                            >
                              <Typography variant="d2c_h6" component="span">
                                {p.grams}
                              </Typography>
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    </Box>

                    {/* MOBILE: arrow carousel like screenshot */}
                    <Box
                      sx={{
                        display: { xs: 'block', md: 'none' },
                        mt: 2.4,
                        pt: 2.2,
                        borderTop: '1px solid rgba(248,243,227,0.25)',
                      }}
                    >
                      <Typography
                        variant="d2c_h6"
                        component="p"
                        sx={{
                          color: '#EAE8E1',
                          m: 0,
                          mb: 1.4,
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {currentLineup.name}
                      </Typography>

                      <Box
                        sx={{
                          position: 'relative',
                          height: 190,
                          border: '1px solid rgba(248,243,227,0.25)',
                          backgroundColor: 'rgba(0,0,0,0.08)',
                          borderRadius: 0.8,
                          overflow: 'hidden',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Box
                          component="img"
                          src={currentLineup.img}
                          alt=""
                          sx={{
                            width: '80%',
                            height: '80%',
                            objectFit: 'contain',
                          }}
                        />

                        {/* Arrow button */}
                        <Box
                          component="button"
                          type="button"
                          onClick={nextLineup}
                          sx={{
                            position: 'absolute',
                            right: 14,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: 44,
                            height: 44,
                            borderRadius: '50%',
                            border: 'none',
                            backgroundColor: '#F8F3E3',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Typography
                            variant="d2c_h4"
                            component="span"
                            sx={{ color: '#1A3C34', lineHeight: 1 }}
                          >
                            →
                          </Typography>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          mt: 1.2,
                          backgroundColor: '#0C77D8',
                          color: '#F8F3E3',
                          borderRadius: 0.8,
                          py: 1.1,
                          textAlign: 'center',
                          width: 160,
                        }}
                      >
                        <Typography variant="d2c_h6" component="span">
                          {currentLineup.grams}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="d2c_h5"
                      component="p"
                      sx={{
                        color: '#EAE8E1',
                        opacity: 0.85,
                        mt: 2,
                        lineHeight: 1.45,
                      }}
                    >
                      Container size: 5.3oz for Greek Yogurt, Less Sugar Greek
                      Yogurt, and Zero Sugar Greek Yogurt; 6.7oz for High
                      Protein Greek Yogurt; 4.5 oz for Flip; 7.1 oz for Greek
                      Yogurt Drink; 7.14 fl oz for High Protein Greek Yogurt
                      Drink.
                      <br />
                      *Not a low calorie food
                      <br />
                      **Chobani® Less Sugar Greek Yogurt: 9g sugar per 5.3oz.
                    </Typography>
                  </Box>
                )}

                {/* Expanded placeholders for other items (until you share copy) */}
                {isOpen && it.key !== 'naturalProtein' && (
                  <Box sx={{ pt: 2, pb: 3 }}>
                    <Body>
                      Replace this content with the exact Figma copy for{' '}
                      <strong>{it.label}</strong>.
                    </Body>
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
}
