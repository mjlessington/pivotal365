// All site copy and data in one place, so pages and sections stay presentational.

export const AMAZON_URL = "https://www.amazon.com/dp/B0GX2TFF6J";
export const SITE_URL = "https://pivotal365.com";

export const stages = [
  {
    num: "01",
    label: "Stage One",
    name: "Identity",
    antidote: "Antidote to Imposter Syndrome",
    body: "You must identify as a finisher before you can become one. The internal shift required before any execution begins, because you cannot out-execute a broken self-concept.",
  },
  {
    num: "02",
    label: "Stage Two",
    name: "Vision",
    antidote: "Antidote to Shiny Object Syndrome",
    body: "Curation over goal-setting. Cultivating the quiet focus to commit to one through-line while the world floods your attention with every other possibility.",
  },
  {
    num: "03",
    label: "Stage Three",
    name: "Structure",
    antidote: "Antidote to the Messy Middle",
    body: "Discipline designed to be elegant, not exhausting. The frictionless system that carries you forward when initial motivation has completely evaporated.",
  },
  {
    num: "04",
    label: "Stage Four",
    name: "Adjustment",
    antidote: "Antidote to All-or-Nothing Thinking",
    body: "The vital bridge between a plan and reality. Course-correct quietly and strategically, without blowing up the foundation. Changing direction is not failure. Abandoning the journey is.",
  },
  {
    num: "05",
    label: "Stage Five",
    name: "Reflection",
    antidote: "Antidote to Abandonment at 80%",
    body: "Confronting perfectionism through structured review. Prioritizing done over perfect: refining the approach instead of abandoning the work when it gets difficult.",
  },
] as const;

export const voices = [
  "I'm a great starter but a terrible finisher.",
  "I work best under pressure, because that's the only time I actually work.",
  "I have so many ideas, I just can't focus on one long enough.",
  "I was 80% done and then just... stopped.",
];

export const tenets = [
  { title: "Identity before execution", body: "You can't out-execute a broken self-concept. The pivot starts with deciding who you are, then acting like it." },
  { title: "Start less. Finish more.", body: "Pick one through-line and let the rest wait. Focus is a choice you make again every week." },
  { title: "Discipline is self-respect", body: "Showing up is how you honor what you said mattered. Every day you follow through is a vote for the future you." },
  { title: "Growth requires subtraction", body: "No is the most useful word you have. Clearing space gives the important work room to grow." },
  { title: "Adjust, don't abandon", body: "Changing direction is allowed. Walking away from the journey is the only real failure." },
  { title: "Quiet consistency wins", body: "Small, unremarkable days add up to a change that big bursts of effort rarely reach." },
];

// "Coming soon" offerings are placeholders until confirmed by the Pivotal365 team.
export const ways = [
  {
    status: "Coming soon",
    step: "Step 02",
    title: "The Weekly Pivot",
    body: "A short note from Carlton each week with one idea, one prompt and one small step to keep your year moving.",
    cta: "Get on the list",
    href: "#join",
  },
  {
    status: "Coming soon",
    step: "Step 03",
    title: "The Pivot Community",
    body: "Do the work alongside other people who are done starting over, with shared check-ins through the year.",
    cta: "Get on the list",
    href: "#join",
  },
  {
    status: "Coming soon",
    step: "For teams and events",
    title: "Workshops & Speaking",
    body: "Carlton brings the Quiet Power framework to teams, classrooms and stages, for groups who want to finish what they start together.",
    cta: "Ask about a booking",
    href: "#join",
    wide: true,
  },
];

export type TileIcon = "grid" | "coin" | "book" | "chat" | "calendar" | "star";

export const tiles: { title: string; body: string; tag: string; icon: TileIcon; size?: "wide" | "full"; tiers?: string[] }[] = [
  { title: "Vision Board Collage", body: "A two-page spread that translates intention into a visual anchor: the through-line you return to when new ideas try to hijack your focus.", tag: "Vision Section", icon: "grid", size: "wide" },
  { title: "Financial Clarity & Freedom", body: "Know Your Money. Build a Financial Vision. The Budget Framework. Track & Adjust. The missing section in every other lifestyle planner, connecting ambition to material reality.", tag: "Section 2", icon: "coin" },
  { title: "10 Mini Chapters", body: "Psychological coaching embedded throughout the planning year, at exactly the moments motivation dies. Discipline Is Self-Respect. Protect Your Energy. Quiet Consistency Beats Loud Intensity.", tag: "Throughout", icon: "book" },
  { title: "6 Personal Vignettes", body: "First-person narratives that normalize the emotional cost of becoming: walking away from toxicity, rebuilding self-trust, and refusing to stop when you're close.", tag: "Throughout", icon: "chat" },
  { title: "Full Planning Structure", body: "Each tier designed to build on the last, creating a cadence that doesn't require willpower to maintain.", tag: "Sections 3 to 7", icon: "calendar", tiers: ["Yearly", "Quarterly", "Monthly", "Weekly", "Daily"] },
  { title: "Who You Became", body: "The end-of-year reflection that closes the loop: a reckoning with who you chose to become in the process of doing the work, beyond a list of what you did.", tag: "Section 8", icon: "star", size: "full" },
];

export const vignetteList = [
  "Losing Myself in People-Pleasing",
  "Choosing Myself",
  "Walking Away From Toxicity",
  "Rebuilding Self-Trust",
  "You Did Not Come This Far to Only Come This Far",
];

export const miniChapters = [
  { label: "Mini Chapter 2", title: "Discipline Is Self-Respect", body: "Reframing discipline from punishment to the highest form of honoring what you said mattered. Every time you show up is a vote for the future version of you." },
  { label: "Mini Chapter 8", title: "Growth Requires Subtraction", body: "The most powerful word in your vocabulary is no. Saying it is the strategic sophistication of someone who knows their lane." },
  { label: "Mini Chapter 10", title: "Quiet Consistency Beats Loud Intensity", body: "The quiet ones finish first. Unremarkable daily action compounds into transformation that heroic but unsustainable sprints never could." },
];

export const formats = [
  {
    format: "Digital",
    name: "Kindle",
    sub: "Read instantly on any device",
    dollars: "9",
    cents: ".99",
    desc: "The lowest barrier to entry. Start your quiet pivot today: no waiting, no shipping.",
    cta: "Get the Kindle Edition",
    features: ["The complete planner, in digital form", "Read on Kindle, phone, or tablet", "Instant delivery", "Word Wise & Enhanced Typesetting enabled"],
  },
  {
    format: "Print",
    name: "Paperback",
    sub: "The tactile planning experience",
    dollars: "14",
    cents: ".99",
    desc: "The planner as it was meant to be used: pen in hand, pages turned. The ritual is part of the work.",
    cta: "Get the Paperback",
    features: ["The complete planner, in print", "Write directly in the pages", "Durable matte cover finish", "Ships from Amazon"],
    featured: true,
  },
  {
    format: "Premium",
    name: "Hardcover",
    sub: "The permanent edition",
    dollars: "24",
    cents: ".99",
    desc: "For the person who means it. A premium, durable edition worthy of a year of serious work, and the most intentional gift you can give.",
    cta: "Get the Hardcover",
    features: ["The complete planner, in premium hardcover", "Durable case-bound construction", "Gift-ready presentation", "Ships from Amazon"],
  },
];

export const bookJsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Pivotal365: The Quiet Power Lifestyle Planner",
  description:
    "A full-year lifestyle planner and psychological coaching system built around five sequential stages (Identity, Vision, Structure, Adjustment, and Reflection), designed for the chronically ambitious who are done starting over.",
  author: { "@type": "Person", name: "Carlton Chapman" },
  publisher: { "@type": "Person", name: "Carlton Chapman" },
  inLanguage: "en",
  genre: ["Self-Help", "Productivity", "Personal Development"],
  offers: formats.map((f) => ({
    "@type": "Offer",
    name: f.name === "Kindle" ? "Kindle Edition" : f.name,
    price: `${f.dollars}${f.cents}`,
    priceCurrency: "USD",
    url: AMAZON_URL,
    availability: "https://schema.org/InStock",
  })),
  url: SITE_URL + "/",
};
