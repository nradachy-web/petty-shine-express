/**
 * PETTY SHINE EXPRESS, single source of truth.
 *
 * Every fact the site prints lives here. Pages never type a phone number,
 * price, count or address inline. Sources, 2026-09-23:
 *   - Judson's photos of the property (sign: "SELF SERVICE / TOUCHLESS
 *     AUTOMATIC", entrance clearance 7'2", wash menu prices $8/$10/$12/$15,
 *     pay station: cash $1 to $20, quarters, chip and contactless, Apple Pay,
 *     Google Pay, "Clean. Shine. Protect.")
 *   - Nick, 2026-09-23: six self-serve bays, eight vacuums, cash, credit
 *     cards and tap to pay.
 *   - Petty Shine (the detailing shop) for the owner and phone.
 *
 * Items marked CONFIRM are best readings or placeholders awaiting Judson.
 */

export const site = {
  name: "Petty Shine Express",
  legalName: "Petty Shine Express",
  tagline: "Clean. Shine. Protect.",
  owner: "Judson Petty",
  parentBrand: { name: "Petty Shine", url: "https://www.pettyshine.com" },

  /* CONFIRM: this is the Petty Shine line, which reaches Judson. Swap if the
     wash gets its own number. */
  phoneDisplay: "(336) 653-9199",
  phoneTel: "+13366539199",

  /* CONFIRM: street address of the wash. Leave street empty until known;
     the site then prints city and state only and hides the directions button. */
  address: {
    street: "",
    city: "Randleman",
    state: "NC",
    stateName: "North Carolina",
    zip: "",
    county: "Randolph County",
  },
  directionsUrl: "",
  geo: null,

  /* "open" once he opens. "opening-soon" prints the status band and skips hours. */
  status: "opening-soon",
  /* CONFIRM: e.g. [{ days: "Every day", time: "Open 24 hours" }] */
  hours: [],

  facts: {
    automatics: 1,
    bays: 6,
    vacuums: 8,
    clearance: "7'2\"",
    clearanceWords: "seven feet two inches",
  },

  payment: [
    { label: "Cash", detail: "$1, $5, $10 and $20 bills" },
    { label: "Quarters", detail: "at the pay station and in the bays" },
    { label: "Cards", detail: "chip, swipe and tap to pay" },
    { label: "Apple Pay and Google Pay", detail: "tap your phone or watch" },
  ],

  /* Touchless automatic wash menu, prices read from the posted menu.
     CONFIRM the $8 and $15 names and the inclusions for every tier. */
  washes: [
    {
      slug: "express",
      name: "Express Wash",
      price: 8,
      blurb: "The fast touchless clean. High-pressure wash and rinse, then a dry.",
      confirmName: true,
    },
    {
      slug: "deep-clean",
      name: "Deep Clean",
      price: 10,
      blurb: "Adds a deeper pre-soak and underbody rinse to lift road grime.",
    },
    {
      slug: "clean-shine",
      name: "Clean & Shine",
      price: 12,
      blurb: "The Deep Clean plus a gloss finish that beads water and pops color.",
    },
    {
      slug: "petty-shine",
      name: "Petty Shine",
      price: 15,
      blurb: "Everything on the menu. Our best protection and the deepest shine.",
      featured: true,
      confirmName: true,
    },
  ],

  /* Towns drivers come from. Map-level facts only. CONFIRM once the address is set. */
  nearby: ["Randleman", "Asheboro", "Archdale", "Trinity", "Sophia", "Level Cross", "Climax", "High Point"],

  social: { facebook: "", instagram: "" },

  agency: { name: "Modern Apex Strategies", url: "https://modernapexstrategies.com" },

  /* Preview lives on the project page until a domain is chosen. */
  defaultUrl: "https://nradachy-web.github.io/petty-shine-express",
};

export const nav = [
  { href: "/wash-menu/", label: "Wash Menu" },
  { href: "/touchless-automatic/", label: "Touchless Automatic" },
  { href: "/self-serve/", label: "Self-Serve & Vacuums" },
  { href: "/faq/", label: "FAQ" },
  { href: "/location/", label: "Location" },
];

/* Frequently asked questions, shared by the home preview and the FAQ page. */
export const faqs = [
  {
    q: "Will a touchless automatic scratch my car?",
    a: "No. Nothing but water and wash chemistry touches your vehicle. Swirl marks and fine scratches come from brushes and cloth strips that carry grit from the car ahead of yours. A touchless wash has neither.",
  },
  {
    q: "Is touchless safe for ceramic coatings, paint protection film and wraps?",
    a: "Yes. Touchless is the wash detailers recommend for coated, filmed and wrapped vehicles because there is no friction on the surface. Petty Shine Express was built by the owner of Petty Shine, a ceramic coating and paint protection shop, with exactly those cars in mind.",
  },
  {
    q: "What does it cost?",
    a: "Touchless automatic washes start at $8 and top out at $15 for the full menu. Self-serve bay and vacuum pricing is posted on site.",
  },
  {
    q: "How do I pay?",
    a: "Cash ($1, $5, $10 and $20 bills), quarters, chip or swipe cards, tap to pay, Apple Pay and Google Pay. The pay station makes change.",
  },
  {
    q: "How tall a vehicle fits in the automatic?",
    a: "The entrance clearance is 7'2\". Most trucks, SUVs and vans fit. Fold in your mirrors, lower or remove antennas, and take off bike racks and loose accessories before you pull in.",
  },
  {
    q: "Can I wash a trailer, a lifted truck or a dually?",
    a: "Not in the automatic. Trailers, oversize tires and anything over the posted clearance belong in one of the six self-serve bays, which are open ended and sized for larger vehicles.",
  },
  {
    q: "Do I need an appointment?",
    a: "No. Pull in, pick a wash at the pay station, and go. There is no crew to wait on and no line to join.",
  },
  {
    q: "What is the difference between the automatic and the self-serve bays?",
    a: "The automatic does the whole wash for you while you sit in the car. The self-serve bays give you the wand and let you wash at your own pace, which is the right call for muddy vehicles, trailers and anything the automatic cannot fit.",
  },
  {
    q: "Are there vacuums?",
    a: "Yes. Eight vacuum stations sit right on the lot so you can finish the interior after your wash.",
  },
  {
    q: "Who runs Petty Shine Express?",
    a: "Judson Petty, the owner of Petty Shine, the paint correction, ceramic coating and paint protection film shop in Randleman. The wash carries the same standard: clean, shine, protect.",
  },
];
