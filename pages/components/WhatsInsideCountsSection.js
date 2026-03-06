import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";

export default function WhatsInsideCountsSection() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const [showContent, setShowContent] = useState(false);

  // Multi-open accordion state (matches Figma: multiple sections can stay open)
  const [openKeys, setOpenKeys] = useState({
    protein: false,
    sugar: false,
    probiotics: false,
    calcium: false,
    vitaminB12: false,
    hydration: false,
    otherFunFacts: false,
  });

  const toggle = (key) => setOpenKeys((p) => ({ ...p, [key]: !p[key] }));

  // Protein lineup carousel (mobile)
  const [lineupIndex, setLineupIndex] = useState(0);
  const lineupScrollRef = useRef(null);

  const nextLineup = () => setLineupIndex((i) => (i + 1) % lineup.length);

  // Preload player / decoration so we can fade-in like your other sections
  useEffect(() => {
    const img = new Image();
    img.src = mobile
      ? "/images/inside-player-mob.png"
      : "/images/inside-player-desktop.png";
    img.onload = () => setShowContent(true);
    img.onerror = () => setShowContent(true);
    const t = setTimeout(() => setShowContent(true), 350);
    return () => clearTimeout(t);
  }, [mobile]);

  // Scroll mobile lineup to active item (shows a “peek” of next card like Figma)
  useEffect(() => {
    const el = lineupScrollRef.current;
    if (!el) return;

    const child = el.querySelector(`[data-lineup-idx="${lineupIndex}"]`);
    if (!child) return;

    el.scrollTo({
      left: child.offsetLeft,
      behavior: "smooth",
    });
  }, [lineupIndex]);

  const SectionSmallHeading = ({ children, mt = 0 }) => (
    <Typography
      variant="d2c_h6"
      component="p"
      sx={{
        color: "#F8F3E3",
        mt,
        mb: 1,
      }}
    >
      {children}
    </Typography>
  );

  const Body = ({ children, mt = 0, mb = 0 }) => (
    <Typography
      variant="d2c_p2"
      component="p"
      sx={{
        color: "#EAE8E1",
        opacity: 0.92,
        mt,
        mb,
        lineHeight: 1.45,
      }}
    >
      {children}
    </Typography>
  );

  const BulletList = ({ items, mt = 1.2 }) => (
    <Box component="ul" sx={{ m: 0, mt, pl: 2.6 }}>
      {items.map((t) => (
        <Box
          component="li"
          key={t}
          sx={{ mb: 1.1, color: "#EAE8E1", opacity: 0.92 }}
        >
          <Typography
            variant="d2c_p2"
            component="p"
            sx={{ m: 0, lineHeight: 1.45 }}
          >
            {t}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  const BenefitRow = ({ title, text, icon }) => (
    <Box sx={{ display: "flex", gap: 2, mt: 2.2, alignItems: "flex-start" }}>
      <Box
        component="img"
        src={icon}
        alt=""
        sx={{
          width: 38,
          height: 38,
          objectFit: "contain",
          mt: 0.3,
          flex: "0 0 auto",
        }}
      />
      <Box sx={{ minWidth: 0 }}>
        <Typography
          variant="d2c_h6"
          component="p"
          sx={{ color: "#F8F3E3", m: 0, mb: 0.7 }}
        >
          {title}
        </Typography>
        <Body>{text}</Body>
      </Box>
    </Box>
  );

  /**
   * Protein lineup (MATCHES Figma values from your screenshot):
   *  Flip® 9-10g
   *  Greek Yogurt Drink 10g
   *  Zero Sugar* Greek Yogurt 12g
   *  Less Sugar** Greek Yogurt 12g
   *  Greek Yogurt 10-14g
   *  High Protein Greek Yogurt 20g
   *  High Protein Greek Yogurt Drink 15-30g
   */
  const lineup = useMemo(
    () => [
      { name: "Flip®", grams: "9-10g", img: "/images/lineup-flip.png" },
      {
        name: "Greek Yogurt\nDrink",
        grams: "10g",
        img: "/images/lineup-drink.png",
      },
      {
        name: "Zero Sugar*\nGreek Yogurt",
        grams: "12g",
        img: "/images/lineup-zero.png",
      },
      {
        name: "Less Sugar**\nGreek Yogurt",
        grams: "12g",
        img: "/images/lineup-less.png",
      },
      {
        name: "Greek Yogurt",
        grams: "10-14g",
        img: "/images/lineup-greek.png",
      },
      {
        name: "High Protein\nGreek Yogurt",
        grams: "20g",
        img: "/images/lineup-high.png",
      },
      {
        name: "High Protein\nGreek Yogurt Drink",
        grams: "15-30g",
        img: "/images/lineup-high-drink.png",
      },
    ],
    [],
  );

  const accordionItems = useMemo(
    () => [
      {
        key: "protein",
        label: "Protein",
        expandedLabel: "Natural Protein: Build. Recover. Repeat.",
      },
      {
        key: "sugar",
        label: "Sugar",
        expandedLabel: "Fake nothing. Real everything. Sweetened naturally.",
      },
      {
        key: "probiotics",
        label: "Probiotics",
        expandedLabel: "Tiny Teammates. Feed your gut, power your game.",
      },
      {
        key: "calcium",
        label: "Calcium",
        expandedLabel: "Built For Sprints. Strong bones, stronger game.",
      },
      {
        key: "vitaminB12",
        label: "Vitamin B12",
        expandedLabel: "Stamina for Every Sprint. Energy from the inside out.",
      },
      {
        key: "hydration",
        label: "Hydration",
        expandedLabel: "Hydration wins games. A surprising source.",
      },
      {
        key: "otherFunFacts",
        label: "Other Fun Facts",
        expandedLabel: "More Good Stuff. The Full Lineup.",
      },
    ],
    [],
  );

  const renderProtein = () => (
    <Box sx={{ maxWidth: 980 }}>
      <SectionSmallHeading>Why it Matters</SectionSmallHeading>
      <Body>
        Protein helps repair muscle, support recovery, and keeps you strong. All
        our Greek Yogurts are made with fresh milk, making them an excellent
        source of protein, naturally.
      </Body>

      <SectionSmallHeading mt={2.6}>
        What Makes Chobani Different
      </SectionSmallHeading>
      <Body>
        Not all protein is created equal. And not all protein sources are
        considered complete—and incomplete proteins can’t be used as
        effectively. Dairy protein is a natural source of complete protein,
        meaning it contains all nine essential amino acids your body needs to
        support essential processes like muscle growth and repair, helping your
        body to grow—and stay—strong. Our protein comes from farm fresh milk,
        not powders.
      </Body>

      <SectionSmallHeading mt={2.6}>
        Our protein is different in 2 ways:
      </SectionSmallHeading>

      <Typography
        variant="d2c_h6"
        component="p"
        sx={{ color: "#F8F3E3", opacity: 0.98, mt: 1.5, mb: 0.6 }}
      >
        1) Our protein is complete
      </Typography>
      <Body>
        It’s the gold standard. We start with fresh milk with all 9 amino acids.
      </Body>

      <Typography
        variant="d2c_h6"
        component="p"
        sx={{ color: "#F8F3E3", opacity: 0.98, mt: 1.8, mb: 0.6 }}
      >
        2) Our craftsmanship
      </Typography>
      <Body>
        Our generations-old method of straining allows for higher protein
        naturally, no added protein powders or artificial ingredients. Simply,
        natural protein with super power.
      </Body>

      <SectionSmallHeading mt={2.6}>
        Key Benefits for Athletes
      </SectionSmallHeading>

      {[
        {
          title: "Before the Game",
          text: "Getting enough protein in your diet on a regular basis helps make sure your body's ready come game day. Protein is important for building muscle strength and preventing muscle breakdown during activity.",
          icon: "/images/icon-before-game.svg",
        },
        {
          title: "During the Game",
          text: "Keep your energy up with drinks and snacks during activities lasting longer than one hour. During exercise, protein and carbohydrates can provide that extra energy boost and help kickstart your recovery faster.",
          icon: "/images/icon-during-game.svg",
        },
        {
          title: "After the Game",
          text: "Our products deliver the right blend of two important proteins: whey and casein. Whey hits muscles fast for rapid repair. Casein releases amino acids slowly, maximizing muscle protein synthesis for up to 8 hours. More efficient recovery means you can train harder and more often.",
          icon: "/images/icon-after-game.svg",
        },
        {
          title: "What about kids?",
          text: "Protein is important for kids as they grow and develop. Getting enough protein helps athletes of all ages perform their best. Protein needs for children vary and increase with age. Check with your pediatrician to determine how much is right for you.",
          icon: "/images/icon-kids.svg",
        },
      ].map((b) => (
        <BenefitRow key={b.title} {...b} />
      ))}

      <SectionSmallHeading mt={2.6}>
        Protein Across Our Lineup
      </SectionSmallHeading>
      <Body>
        Recommended protein levels vary. But we have a product for everyone.
      </Body>

      {/* Lineup strip (desktop row / mobile carousel) */}
      <Box
        sx={{
          mt: 2.2,
          pt: 2.2,
          borderTop: "1px solid rgba(248,243,227,0.25)",
        }}
      >
        {/* DESKTOP: 7 in a row, aligned LEFT like Figma */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
              gap: 2.6,
              alignItems: "end",
              mt: 2,
            }}
          >
            {lineup.map((p) => (
              <Box key={p.name} sx={{ textAlign: "center" }}>
                <Typography
                  variant="d2c_h5"
                  component="p"
                  sx={{ color: "#EAE8E1", m: 0, mb: 1, whiteSpace: "pre-line" }}
                >
                  {p.name}
                </Typography>

                <Box
                  component="img"
                  src={p.img}
                  alt=""
                  sx={{
                    width: "100%",
                    height: 140,
                    objectFit: "contain",
                    display: "block",
                  }}
                />

                <Box
                  sx={{
                    mt: 1.2,
                    backgroundColor: "#0C77D8",
                    color: "#F8F3E3",
                    borderRadius: 0.8,
                    py: 1.1,
                    textAlign: "center",
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

        {/* MOBILE: scroll-snap carousel + “peek” of next card + arrow at far right */}
        <Box sx={{ display: { xs: "block", md: "none" }, mt: 2 }}>
          <Box sx={{ position: "relative" }}>
            <Box
              ref={lineupScrollRef}
              sx={{
                display: "flex",
                gap: 2,
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                pb: 1,
                // Hide scrollbar
                "&::-webkit-scrollbar": { display: "none" },
                scrollbarWidth: "none",
                // small right padding so next card “peeks” and arrow can sit on the edge
                pr: 6,
              }}
            >
              {lineup.map((p, idx) => (
                <Box
                  key={p.name}
                  data-lineup-idx={idx}
                  sx={{
                    flex: "0 0 calc(100% - 72px)", // this creates the “peek” of the next card
                    scrollSnapAlign: "start",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="d2c_h6"
                    component="p"
                    sx={{
                      color: "#EAE8E1",
                      m: 0,
                      mb: 1.2,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {p.name}
                  </Typography>

                  <Box
                    component="img"
                    src={p.img}
                    alt=""
                    sx={{
                      width: "100%",
                      height: 190,
                      objectFit: "contain",
                      display: "block",
                    }}
                  />

                  <Box
                    sx={{
                      mt: 1.2,
                      backgroundColor: "#0C77D8",
                      color: "#F8F3E3",
                      borderRadius: 0.8,
                      py: 1.1,
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    <Typography variant="d2c_h6" component="span">
                      {p.grams}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Arrow button (touches right edge like Figma) */}
            <Box
              component="button"
              type="button"
              onClick={() => setLineupIndex((i) => (i + 1) % lineup.length)}
              aria-label="Next product"
              sx={{
                position: "absolute",
                right: -18, // push to the edge / slightly outside
                top: 118,
                width: 54,
                height: 54,
                borderRadius: "50%",
                border: "none",
                backgroundColor: "#F8F3E3",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 10px 24px rgba(0,0,0,0.22)",
              }}
            >
              <Typography
                variant="d2c_h4"
                component="span"
                sx={{ color: "#1A3C34", lineHeight: 1 }}
              >
                →
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography
          variant="d2c_h5"
          component="p"
          sx={{
            color: "#EAE8E1",
            opacity: 0.85,
            mt: 2,
            lineHeight: 1.45,
            mb: 0,
            maxWidth: 980,
          }}
        >
          Container size: 5.3oz for Greek Yogurt, Less Sugar Greek Yogurt, and
          Zero Sugar Greek Yogurt; 6.7oz for High Protein Greek Yogurt; 4.5 oz
          for Flip; 7.1 fl oz for Greek Yogurt Drink; 7.14 fl oz for High
          Protein Greek Yogurt Drink.
          <br />
          *Not a low calorie food
          <br />
          **Chobani® Less Sugar Greek Yogurt: 9g sugar per 5.3oz.
        </Typography>
      </Box>
    </Box>
  );

  const renderSugar = () => (
    <Box sx={{ maxWidth: 980 }}>
      <SectionSmallHeading>Why it Matters</SectionSmallHeading>
      <Body>
        Carbohydrates—including natural sugars—are your body&apos;s preferred
        fuel during exercise. The right amount supports performance, recovery,
        and makes nutrient-dense foods enjoyable enough to eat consistently.
      </Body>

      <SectionSmallHeading mt={2.6}>The Chobani Difference</SectionSmallHeading>
      <Body>
        Chobani Greek Yogurt contains natural dairy sugars plus just the right
        amount of added sweetness to balance tart yogurt and real fruit.
      </Body>

      <SectionSmallHeading mt={2.6}>Our Approach</SectionSmallHeading>
      <BulletList
        items={[
          "No artificial sweeteners. No high-fructose corn syrup. No refined sugar ingredients.",
          "Natural sweeteners only: Cane sugar, stevia, monk fruit, and allulose found across all platforms to give you options without compromise.",
          "Nutrient-dense first: Every gram of sugar comes with a powerhouse of essential nutrients many athletes under-consume—calcium, potassium, magnesium, B vitamins.",
        ]}
      />

      <SectionSmallHeading mt={2.6}>
        Key Benefits for Athletes
      </SectionSmallHeading>

      {[
        {
          title: "Power for performance",
          text: "Carbohydrates—including natural sugars from dairy and fruit—are your body's preferred energy source during exercise. Sugar helps replenish glycogen stores and supports sustained performance.",
          icon: "/images/icon-sugar-performance.svg",
        },
        {
          title: "Strong recovery",
          text: "Post-workout, combining protein with carbohydrates (including sugars) drives nutrients into muscles, aiding in recovery and adaptation from training.",
          icon: "/images/icon-sugar-recovery.svg",
        },
        {
          title: "Delicious nutrition delivery",
          text: "A touch of sweetness makes nutrient-dense foods more enjoyable to eat consistently, helping athletes meet their needs for calcium, protein, potassium, and B vitamins.",
          icon: "/images/icon-sugar-delicious.svg",
        },
        {
          title: "Sugar Options Across Our Lineup",
          text: "We have a range of options to meet different sugar tolerances and training needs—Core, Zero Sugar, Less Sugar, High Protein.",
          icon: "/images/icon-sugar-options.svg",
        },
      ].map((b) => (
        <BenefitRow key={b.title} {...b} />
      ))}
    </Box>
  );

  const renderProbiotics = () => (
    <Box sx={{ maxWidth: 980 }}>
      <SectionSmallHeading>Why it Matters</SectionSmallHeading>
      <Body>
        Probiotics are the &quot;good&quot; bacteria that naturally live in your
        gut and keep your gut (and your game) strong. Think of them as tiny
        teammates assisting digestion.
      </Body>

      <SectionSmallHeading mt={2.6}>The Chobani Difference</SectionSmallHeading>
      <Body>
        Probiotics can be found in fermented foods like yogurt, kefir, kimchi,
        and sauerkraut. But the sheer amount of probiotics found in each Chobani
        serving is the real kicker. All Chobani Greek Yogurts are traditionally
        fermented with live and active cultures, delivering billions of
        probiotics in every cup.
      </Body>

      <SectionSmallHeading mt={2.6}>
        Key Benefits for Athletes
      </SectionSmallHeading>

      {[
        {
          title: "Supports digestion",
          text: "Exercise, the food you eat, and your environment can impact your gut microbiome. Probiotics help maintain balance, support regularity, and reduce digestive discomfort. So you can focus on performance.",
          icon: "/images/icon-probiotic-digestion.svg",
        },
        {
          title: "Probiotics Across Our Lineup",
          text: "All Chobani Greek Yogurt cups and all Chobani Greek Yogurt drinks contain billions of probiotics.",
          icon: "/images/icon-probiotic-lineup.svg",
        },
      ].map((b) => (
        <BenefitRow key={b.title} {...b} />
      ))}
    </Box>
  );

  const renderCalcium = () => (
    <Box sx={{ maxWidth: 980 }}>
      <SectionSmallHeading>Why it Matters</SectionSmallHeading>
      <Body>
        Calcium promotes the growth and maintenance of strong, healthy bones.
        Calcium also triggers muscle contractions with every movement and
        enables nerves to send signals throughout your body—coordinating
        strength, balance, and split-second reactions.
      </Body>

      <SectionSmallHeading mt={2.6}>The Chobani Difference</SectionSmallHeading>
      <Body>
        Chobani Greek Yogurt delivers both calcium and complete protein—the
        dynamic duo for bone strength and fracture prevention. Unlike plant
        sources where natural compounds can block absorption, dairy calcium is
        readily absorbed and put to work strengthening bones and preventing
        fractures.
      </Body>

      <SectionSmallHeading mt={2.6}>
        Key Benefits for Athletes
      </SectionSmallHeading>

      {[
        {
          title: "Build Strong Bones",
          text: "For younger athletes, calcium supports bone growth, peak bone mass development, and mineralization—building the foundation for lifelong strength.",
          icon: "/images/icon-calcium-build.svg",
        },
        {
          title: "Maintain Bone Mass Density",
          text: "For active adults, dairy delivers the calcium needed to maintain bone density and resilience under the stress of training and everyday life.",
          icon: "/images/icon-calcium-density.svg",
        },
        {
          title: "Prevent Bone Loss",
          text: "Age-related bone loss is more common in women than in men. Getting enough calcium helps protect what you’ve built and reduces the risk for fracture.",
          icon: "/images/icon-calcium-prevent.svg",
        },
        {
          title: "Calcium Across Our Lineup",
          text: "Most adults should consume 1,000–1,200 mg of calcium per day. In addition to dairy, other sources include tofu, fortified orange juice and non-dairy milk, and green leafy vegetables.",
          icon: "/images/icon-calcium-lineup.svg",
        },
      ].map((b) => (
        <BenefitRow key={b.title} {...b} />
      ))}
    </Box>
  );

  const renderVitaminB12 = () => (
    <Box sx={{ maxWidth: 980 }}>
      <SectionSmallHeading>Why it Matters</SectionSmallHeading>
      <Body>
        Vitamin B12 helps unlock the energy in food, supports oxygen delivery to
        muscles, and keeps your nervous system sharp. It&apos;s essential for
        everyone, especially athletes who eat little or no animal-based foods,
        or older athletes who may not get enough B12 from diet alone.
      </Body>

      <SectionSmallHeading mt={2.6}>The Chobani Difference</SectionSmallHeading>
      <Body>
        Excellent source of B12—naturally. Yogurt is one of the few foods that
        naturally provides vitamin B12. The vitamin B12 in Chobani Greek Yogurt
        comes from real dairy, not artificial additives. One serving delivers a
        meaningful portion of your daily needs. All of our Greek Yogurt products
        are an excellent source of vitamin B12.
      </Body>

      <SectionSmallHeading mt={2.6}>
        Key Benefits for Athletes
      </SectionSmallHeading>

      {[
        {
          title: "Pre-Game Energy",
          text: "Vitamin B12 helps convert the food you eat into usable energy—fueling workouts, endurance, and everything in between.",
          icon: "/images/icon-b12-energy.svg",
        },
        {
          title: "Perform for Longer",
          text: "Vitamin B12 supports healthy red blood cell formation, which carries oxygen to working muscles. Oxygen supports strong performance and stamina.",
          icon: "/images/icon-b12-perform.svg",
        },
        {
          title: "Stay In the Game",
          text: "Vitamin B12 keeps nerve cells healthy and functioning optimally—critical for reaction time, coordination, and the mind-muscle connection that separates good athletes from great ones.",
          icon: "/images/icon-b12-stay.svg",
        },
        {
          title: "Vitamin B12 Across Our Lineup",
          text: "Most healthy adults need about 2.4 mcg of vitamin B12. Other sources include clams, oysters, and beef.",
          icon: "/images/icon-b12-lineup.svg",
        },
      ].map((b) => (
        <BenefitRow key={b.title} {...b} />
      ))}
    </Box>
  );

  const renderHydration = () => (
    <Box sx={{ maxWidth: 980 }}>
      <SectionSmallHeading>Why it Matters</SectionSmallHeading>
      <Body>
        In addition to other key hydrating products in athletes&apos; lives like
        water, dairy also contains naturally hydrating elements like potassium,
        sodium and other salts called electrolytes, known to be hydrating. When
        combined with carbs, protein, and water found in milk, it makes a
        surprisingly nutrient dense way to get some hydration in your day.
      </Body>

      <SectionSmallHeading mt={2.6}>The Chobani Difference</SectionSmallHeading>
      <Body>
        Surprisingly, dairy contains naturally hydrating elements. Dairy
        provides many of the electrolytes your body needs, like potassium,
        calcium, and magnesium. When combined with carbs, protein and water
        found in milk - it makes a surprisingly nutrient dense way to get some
        hydration in your day.
      </Body>

      <SectionSmallHeading mt={2.6}>
        Key Benefits for Athletes
      </SectionSmallHeading>
      <Body>
        Even mild dehydration can make us slower, less focused, and tired. Sip
        before, during, and after exercise to play at your best.
      </Body>

      {[
        {
          title: "Before the Game",
          text: "Drink water with meals/snacks and 8–16 oz (1-2 cups) in the 2 hours before activity.",
          icon: "/images/icon-before-game.svg",
        },
        {
          title: "During the Game",
          text: "Sip water at every break; don’t wait until you’re thirsty. Sports drinks are optional, mainly for long games, hot days, or when heavy sweating is expected.",
          icon: "/images/icon-during-game.svg",
        },
        {
          title: "After the Game",
          text: "Rehydrate: aim for about 16–20 oz (~2 cups) of water per pound of body weight lost through sweat.",
          icon: "/images/icon-after-game.svg",
        },
      ].map((b) => (
        <BenefitRow key={b.title} {...b} />
      ))}

      <Typography
        variant="d2c_h6"
        component="p"
        sx={{
          color: "#F8F3E3",
          mt: 2.2,
          mb: 0.6,
        }}
      >
        Tip:
      </Typography>
      <Body>
        Steadily sipping hydrates better than chugging a whole bottle at once.
      </Body>
    </Box>
  );

  const renderOtherFunFacts = () => {
    const nutrients = [
      {
        title: "Phosphorus (15% DV)*",
        desc: "Found in teeth and bones; plays a role in how the body metabolizes energy.",
      },
      {
        title: "Potassium (4% DV)*",
        desc: "Most Americans don't consume enough potassium, which helps maintain body fluids and blood pressure.",
      },
      {
        title: "Selenium (25% DV)*",
        desc: "Plays a role in cell growth and acts as an antioxidant to prevent cellular damage.",
      },
      {
        title: "Zinc (6% DV)*",
        desc: "Crucial for growing and developing bodies and for supporting the immune system.",
      },
      {
        title: "Magnesium (4% DV)*",
        desc: "Essential for maintaining bone health and supporting energy metabolism.",
      },
      {
        title: "Choline (4% DV)*",
        desc: "Supports nerve and brain functions and a healthy metabolism.",
      },
    ];

    return (
      <Box sx={{ maxWidth: 980 }}>
        <SectionSmallHeading>The Full Roster</SectionSmallHeading>
        <Body>
          Beyond protein, probiotics, calcium, B12, and smart sugar options,
          Chobani Greek Yogurt delivers a lineup of essential nutrients that
          support performance and recovery.
        </Body>

        <SectionSmallHeading mt={2.6}>
          What&apos;s in your cup?
        </SectionSmallHeading>

        {nutrients.map((n) => (
          <Box key={n.title} sx={{ mt: 1.8 }}>
            <Typography
              variant="d2c_h6"
              component="p"
              sx={{
                color: "#F8F3E3",
                m: 0,
                mb: 0.6,
              }}
            >
              {n.title}
            </Typography>
            <Body>{n.desc}</Body>
          </Box>
        ))}

        <SectionSmallHeading mt={2.6}>Gluten-Free</SectionSmallHeading>
        <Body>
          Our 5.3oz yogurt cups (excluding most Flip® flavors) are gluten-free,
          as verified by an independent scientific organization.
        </Body>

        <SectionSmallHeading mt={2.2}>Less Than 5% Lactose</SectionSmallHeading>
        <Body>
          Each cup of our yogurt contains less than 5% lactose due to our
          straining process making it easier to digest.
        </Body>

        <Typography
          variant="d2c_h5"
          component="p"
          sx={{
            color: "#EAE8E1",
            opacity: 0.85,
            mt: 2.2,
            mb: 0,
            lineHeight: 1.4,
          }}
        >
          *Based on 5.3 oz cup of Core Greek Yogurt
        </Typography>
      </Box>
    );
  };

  const contentByKey = {
    protein: renderProtein,
    sugar: renderSugar,
    probiotics: renderProbiotics,
    calcium: renderCalcium,
    vitaminB12: renderVitaminB12,
    hydration: renderHydration,
    otherFunFacts: renderOtherFunFacts,
  };

  return (
    <Container
      component="section"
      disableGutters
      maxWidth={false}
      sx={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#1A3C34",
        px: { xs: 3, sm: 6, lg: 8 },
        py: { xs: 8, md: 10 },

        /**
         * OPTIONAL (you can plug your exact Figma bg assets here):
         * - Mobile: /images/inside-counts-bg-mob.svg
         * - Desktop: /images/inside-counts-bg-desktop.svg
         */
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: {
            xs: "url(/images/inside-counts-bg-mob.svg)",
            md: "url(/images/inside-counts-bg-desktop.svg)",
          },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1180,
          ml: 0,
          mr: "auto",
          opacity: showContent ? 1 : 0,
          transition: "opacity 0.4s ease-in",
        }}
      >
        <Typography
          variant="d2c_h1"
          component="h2"
          sx={{ color: "#F8F3E3", mb: 1 }}
        >
          What’s Inside Counts
        </Typography>

        <Typography
          variant="d2c_h6"
          component="p"
          sx={{ color: "#EAE8E1", opacity: 0.95, mb: 1.2 }}
        >
          Our Starting Lineup
        </Typography>

        <Typography
          variant="d2c_p2"
          component="p"
          sx={{ color: "#EAE8E1", opacity: 0.92, mb: 3, maxWidth: 520 }}
        >
          Delicious, nutritious, and natural food. That’s what makes Chobani
          different.
          <br />
          And why our food helps you perform, recover, and keep going.
        </Typography>

        {/* Player (Figma top-right) */}
        <Box
          component="img"
          src={
            mobile
              ? "/images/inside-player-mob.png"
              : "/images/inside-player-desktop.png"
          }
          alt=""
          sx={{
            position: "absolute",
            right: 0,
            top: { xs: 0, md: -10 },
            width: { xs: 130, sm: 170, md: 240, lg: 280 },
            height: "auto",
            pointerEvents: "none",
          }}
        />

        {/* Accordion list (multi-open) */}
        <Box sx={{ mt: 2, maxWidth: 900 }}>
          {accordionItems.map((it) => {
            const isOpen = !!openKeys[it.key];

            return (
              <Box key={it.key}>
                <Box
                  component="button"
                  type="button"
                  onClick={() => toggle(it.key)}
                  sx={{
                    width: "100%",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "left",
                    py: { xs: 2.1, md: 2.3 },
                    px: 0,
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(248,243,227,0.35)",
                  }}
                >
                  <Typography
                    variant="d2c_h4"
                    component="p"
                    sx={{
                      color: "#F8F3E3",
                      m: 0,
                      pr: 2,
                      whiteSpace: "normal",
                    }}
                  >
                    {isOpen ? it.expandedLabel : it.label}
                  </Typography>

                  <Typography
                    variant="d2c_h4"
                    component="span"
                    sx={{ color: "#F8F3E3", lineHeight: 1, flex: "0 0 auto" }}
                  >
                    {isOpen ? "×" : "+"}
                  </Typography>
                </Box>

                {isOpen && (
                  <Box sx={{ pt: { xs: 2.2, md: 2.6 }, pb: { xs: 3, md: 4 } }}>
                    {contentByKey[it.key]?.()}
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
