// Single source of truth for Casa Roca Canggu's factual property information.
//
// This file exists so a fact (address, beach distance, breakfast policy...)
// is written ONCE and every page/component imports it, instead of each page
// hand-typing its own copy that can silently drift out of sync with the
// others. See MEMORY / conversation history for the audit that found many
// of these values disagreeing with each other across the site before this
// file existed.
//
// RULE: do not "fix" a TODO below by guessing a plausible-sounding value.
// Get the real value from the property owner first.

export const property = {
  name: 'Casa Roca Canggu',
  legalName: 'Casa Roca Canggu',
  managedBy: 'Villa Villa Bali',
  siteUrl: 'https://casarocacanggu.com',

  address: {
    // "Jl. Batu Bolong" is the majority form across the codebase (Footer,
    // about.astro, llms.txt, blog — 6+ occurrences) vs. "Jl. Pantai Batu
    // Bolong" (4 occurrences, mostly on the location page). Same street,
    // both plausibly correct (Indonesian street names are often referred to
    // with or without a descriptive prefix), so the majority form was kept.
    street: 'Jl. Batu Bolong',
    locality: 'Canggu',
    region: 'Kuta Utara, Badung, Bali',
    // Consistently 80361 across every existing occurrence in the codebase
    // (Footer, BaseLayout schema, location.astro schema + copy, llms.txt,
    // blog). No conflicting value (e.g. 80363) was found anywhere in this
    // repo, so this is treated as the established value, not a guess.
    postalCode: '80361',
    country: 'Indonesia',
    countryCode: 'ID',
    full: 'Jl. Batu Bolong, Canggu, Kuta Utara, Badung, Bali 80361, Indonesia',
  },

  // Verified against the property's own Google Maps listing (see
  // location.astro's MAPS_URL): the short link resolves to a URL containing
  // both `@lat,lng` (the map viewport center) and `!3d{lat}!4d{lng}` (the
  // actual place pin). This is the pin value — the viewport-center value was
  // found hard-coded as a *different*, ~300m-off coordinate pair in
  // location.astro's own schema before being fixed to match this one.
  coordinates: {
    latitude: -8.6578776,
    longitude: 115.1310599,
  },
  mapsUrl: 'https://maps.app.goo.gl/XDhPWpNPfqz8EDCD8',

  email: 'info@casarocacanggu.com',

  // TODO: PROPERTY OWNER VERIFICATION REQUIRED
  // No real WhatsApp number exists anywhere in the codebase — every
  // "Chat on WhatsApp" link across the site (Header, Footer, CTABanner,
  // about, availability, blog, location) currently points at this literal
  // placeholder. Replace with the real WhatsApp Business number (with
  // country code, digits only, e.g. "628123456789") and it will take effect
  // everywhere at once once components are wired to this file.
  whatsapp: '62XXXXXXXXX',

  // TODO: PROPERTY OWNER VERIFICATION REQUIRED — no phone number (voice/SMS,
  // as opposed to WhatsApp) appears anywhere in the codebase.
  phone: null as string | null,

  roomCount: 10,

  checkIn: '14:00',
  checkOut: '12:00',
  // WITA = Waktu Indonesia Tengah (Central Indonesia Time), used consistently
  // alongside these times everywhere they appear in the existing copy.
  timezoneLabel: 'WITA',
  receptionHours: '08:00–20:00',

  beach: {
    name: 'Batu Bolong Beach',
    // 200m / 2-minute walk is the value used in the overwhelming majority of
    // occurrences across the codebase (about.astro, location.astro, rooms.astro,
    // every blog post, llms.txt — 30+ instances). Two outliers said "400m"
    // (index.astro FAQ, HeroSection.astro trust bar) and were already
    // corrected to match this value.
    distance: '200m',
    walkingTime: '2 min',
  },

  parking: {
    type: 'Free basement parking',
    access: '24/7 keycard-secured',
  },

  wifi: {
    type: 'Dedicated fiber',
    speed: '50+ Mbps',
  },

  breakfast: {
    available: false,
    // "Room-only, no breakfast" is the value stated on the homepage FAQ and
    // reinforced by the "room-only retreat" / "no shared kitchen" framing on
    // the About page. The one contradicting mention (availability.astro
    // advertising "Complimentary Breakfast... included daily for all direct
    // bookings") was already corrected to match this policy.
    description:
      "Room-only property — breakfast is not included, but Canggu's cafés and warungs (Crate Café, Shady Shack, Motion Café, Old Man's Kitchen) are within a short walk.",
  },

  cancellationPolicy: {
    freeUntilHoursBeforeCheckIn: 48,
    lateCancellationCharge: 'first night charge',
    noShowCharge: 'full stay charge',
    summary: 'Free cancellation up to 48 hours before check-in. Cancellations within 48 hours incur the first night charge. No-shows are charged in full.',
  },

  pets: {
    allowed: false,
    description: 'Casa Roca is a pet-free property to maintain the highest standards of hygiene and cleanliness for all guests.',
  },

  airport: {
    name: 'Ngurah Rai International Airport (DPS)',
    distance: '22km',
    driveTime: '45–60 min',
  },

  analytics: {
    ga4MeasurementId: 'G-KZLNMEWL6D',
  },
} as const;

export type Property = typeof property;
