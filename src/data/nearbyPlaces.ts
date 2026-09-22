// Single source of truth for nearby destinations shown in the hero trust
// bar, the Location page, FAQ answers, and blog cross-links.
//
// Before this file existed, several of these places had two or three
// different distances written independently across location.astro, the
// homepage, and blog posts. Where sources disagreed, the value below was
// chosen using the same rule: prefer whichever value has independent
// corroboration (e.g. two separate blog posts agreeing) over a single
// unconfirmed mention, and never invent a new number. Genuinely unresolved
// conflicts are marked with a TODO instead of a guess.

export type TransportMode = 'walking' | 'scooter' | 'driving';

export interface NearbyPlace {
  id: string;
  name: string;
  distance: string;
  time: string;
  transportMode: TransportMode;
  category: string;
  description: string;
  /** Set when sources in the codebase disagreed and this is a best-effort pick pending owner confirmation. */
  needsVerification?: boolean;
}

export const nearbyPlaces: NearbyPlace[] = [
  {
    id: 'batu-bolong-beach',
    name: 'Batu Bolong Beach',
    distance: '200m',
    time: '2 min',
    transportMode: 'walking',
    category: 'Beach & Surf',
    description: 'Legendary surf break ideal for longboards and beginners, black volcanic sands, and vibrant oceanside community shacks.',
  },
  {
    id: 'old-mans',
    name: "Old Man's Canggu",
    // Blog posts (walking-canggu-without-scooter.md, x2 mentions) independently
    // agree on 200m. location.astro previously had two different, mutually
    // contradictory entries for this same place (120m and 450m) — both were
    // reconciled to this value.
    distance: '200m',
    time: '2 min',
    transportMode: 'walking',
    category: 'Social & Sunset',
    description: 'The quintessential open-air beachfront beer garden and social hub. Cold Bintang, live acoustic gigs, and sunset vibes.',
  },
  {
    id: 'the-lawn',
    name: 'The Lawn Canggu',
    // Two independent blog posts (cafes-jl-batu-bolong-canggu.md,
    // walking-canggu-without-scooter.md) agree on ~450m / 5 min walk.
    // location.astro previously had two different entries (210m/3min and
    // 500m/6min) — reconciled to the blog-corroborated value.
    distance: '450m',
    time: '5 min',
    transportMode: 'walking',
    category: 'Beach Club & Dining',
    description: 'Oceanfront daybeds, saltwater infinity pool, artisan cocktails, and refined dining facing the sunset surf lineup.',
  },
  {
    id: 'crate-cafe',
    name: 'Crate Café',
    distance: '700m',
    time: '8 min',
    transportMode: 'walking',
    category: 'Specialty Coffee',
    description: 'The pulse of Canggu breakfast culture. Generous, vibrant chia bowls, specialty drip coffee, and an art-filled industrial space.',
  },
  {
    id: 'shady-shack',
    name: 'The Shady Shack',
    // TODO: PROPERTY OWNER VERIFICATION REQUIRED — cafes-jl-batu-bolong-canggu.md
    // says "1.2km — 15 min walk or 5 min scooter"; location.astro previously
    // said "800m • 3 min scooter". These are genuinely different distances,
    // not a rounding difference, and neither source is clearly authoritative.
    // Using the blog's more specific figure for now; confirm the real
    // distance before relying on either.
    distance: '1.2km',
    time: '5 min',
    transportMode: 'scooter',
    category: 'Plant-Based Dining',
    description: 'Lush garden setting overlooking rice fields, known for vegetarian bowls, cold-press tonics, and cacao treats.',
    needsVerification: true,
  },
  {
    id: 'echo-beach',
    name: 'Echo Beach',
    distance: '1.5km',
    time: '5 min',
    transportMode: 'scooter',
    category: 'Beach & Sunset',
    description: "Canggu's most photogenic sunset backdrop, with larger swell and a lively strip of sunset bars and warungs.",
  },
  {
    id: 'samadi-yoga',
    name: 'Samadi Yoga',
    distance: '1.2km',
    time: '4 min',
    transportMode: 'scooter',
    category: 'Yoga & Wellness',
    description: 'Authentic Ashtanga, Yin, and breathwork practices in an open-air timber shala, alongside a weekly Sunday farmers market.',
  },
  {
    id: 'airport',
    name: 'Ngurah Rai International Airport (DPS)',
    distance: '22km',
    time: '45–60 min',
    transportMode: 'driving',
    category: 'Airport',
    description: 'Private airport transfer available on request via WhatsApp.',
  },
];
