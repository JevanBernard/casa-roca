// Single source of truth for room data, consumed by both /rooms (detailed
// cards) and /availability (compact booking cards).
//
// Before this file existed, /availability hard-coded its own separate price
// list that had drifted to completely different numbers (and a different
// room lineup — 2 generic rooms instead of these 3) from /rooms. Both pages
// now read the same `priceValue` per room, so that specific class of bug
// can't happen again by editing one file and forgetting the other.
//
// `bathroomType` exists as an explicit field (rather than leaving it implied
// by icon choice per page) because a previous audit found the Deluxe Triple
// room showing a bathtub icon on /rooms while its own description said
// "rain shower" — there is no bathtub anywhere in the actual room
// inclusions, so every room here is 'rain-shower'. Change this value, not
// the icon, if that ever becomes inaccurate.

export type BathroomType = 'rain-shower' | 'bathtub';

export interface RoomAmenityIcon {
  icon: string;
  label: string;
}

export interface Room {
  id: 'double' | 'twin' | 'triple';
  roomCode: string;
  name: string;
  tagline: string;
  badge: string;
  size: string;
  bed: string;
  capacity: number;
  bathroomType: BathroomType;
  priceValue: number;
  image: string;
  imageAlt: string;
  /** Longer copy for the /rooms detail card. */
  description: string;
  /** Shorter copy for the compact /availability card. */
  shortDescription: string;
  /** Spec pills shown on the /rooms detail card. */
  specs: RoomAmenityIcon[];
  /** Fuller bullet list shown on the /rooms detail card. */
  inclusions: string[];
  /** Short tag chips shown on the /availability card. */
  quickTags: RoomAmenityIcon[];
}

export const rooms: Room[] = [
  {
    id: 'double',
    roomCode: 'Room 01 – 03',
    name: 'Superior Double Room',
    tagline: 'Couples & Solo Travelers',
    badge: 'Most Popular for Couples & Solo Travelers',
    size: '22 m²',
    bed: '1 Queen Bed (160×200)',
    capacity: 2,
    bathroomType: 'rain-shower',
    priceValue: 750000,
    image: '/images/superior-double-room.jpg',
    imageAlt: 'Superior Double Room at Casa Roca Canggu — queen bed with private balcony',
    description:
      'Designed for a restorative rest after a day of surfing. Featuring a comfortable queen mattress, cool and cozy linens, and floor-to-ceiling glass doors that open directly onto your private balcony.',
    shortDescription: 'Queen bed, private balcony, en-suite rain shower bathroom, AC, and 4K Smart TV. Ideal for couples and solo travelers.',
    specs: [
      { icon: 'square_foot', label: '22 m²' },
      { icon: 'bed', label: '1 Queen Bed (160×200)' },
      { icon: 'person', label: 'Max 2 Guests' },
      { icon: 'shower', label: 'En-Suite Rain Shower' },
      { icon: 'deck', label: 'Private Balcony' },
    ],
    inclusions: [
      'Queen bed with orthopedic pocket-spring mattress',
      'Private balcony with garden & Batu Bolong view',
      'Private en-suite bathroom with rain shower & amenities',
      'Air conditioning with bedside remote controls',
      '32" 4K Smart TV',
      'High-speed dedicated fiber Wi-Fi (50+ Mbps)',
      'Free basement parking & daily housekeeping',
    ],
    quickTags: [
      { icon: 'wifi', label: 'Free Wi-Fi' },
      { icon: 'ac_unit', label: 'Climate Control' },
      { icon: 'balcony', label: 'Private Balcony' },
    ],
  },
  {
    id: 'twin',
    roomCode: 'Room 04 – 08',
    name: 'Superior Twin Room',
    tagline: 'Surf Buddies & Travel Friends',
    badge: 'Perfect for Surf Trips & Friends',
    size: '22 m²',
    bed: '2 Single Beds (100×200)',
    capacity: 2,
    bathroomType: 'rain-shower',
    priceValue: 850000,
    image: '/images/superior-twin-room.jpg',
    imageAlt: 'Superior Twin Room at Casa Roca Canggu — two single beds with private balcony',
    description:
      'Two single beds ideal for two travelers or friends exploring Canggu together. Same premium finishes and private balcony as the Double, with the flexibility of two separate sleeping surfaces.',
    shortDescription: 'Two single beds, the same premium finishes and private balcony as the Double. Ideal for friends or surf buddies.',
    specs: [
      { icon: 'square_foot', label: '22 m²' },
      { icon: 'bed', label: '2 Single Beds (100×200)' },
      { icon: 'group', label: 'Max 2 Guests' },
      { icon: 'shower', label: 'En-Suite Rain Shower' },
      { icon: 'deck', label: 'Private Balcony' },
    ],
    inclusions: [
      '2 single beds with orthopedic pocket-spring mattresses',
      'Private balcony with garden & Batu Bolong view',
      'Private en-suite bathroom with rain shower & amenities',
      'Air conditioning with bedside remote controls',
      '32" 4K Smart TV',
      'High-speed dedicated fiber Wi-Fi (50+ Mbps)',
      'Free basement parking & daily housekeeping',
    ],
    quickTags: [
      { icon: 'wifi', label: 'Free Wi-Fi' },
      { icon: 'ac_unit', label: 'Climate Control' },
      { icon: 'balcony', label: 'Private Balcony' },
    ],
  },
  {
    id: 'triple',
    roomCode: 'Room 09 – 10',
    name: 'Deluxe Triple Room',
    tagline: 'Families & Extended Stays',
    badge: 'Expanded Living & Flexible Space',
    size: '32 m²',
    bed: '1 King + 1 Single Bed',
    capacity: 3,
    bathroomType: 'rain-shower',
    priceValue: 1150000,
    image: '/images/deluxe-room.jpg',
    imageAlt: 'Deluxe Triple Room at Casa Roca Canggu — king bed and single bed with expanded balcony',
    description:
      'Our most generous room layout at 32 square meters. A king bed plus a separate single bed comfortably accommodates up to 3 adults. Extra wardrobe space, more natural light, and a larger balcony lounge.',
    shortDescription: 'Our most generous layout at 32m² — a king bed plus a single bed, sleeping up to 3 guests, with an expanded balcony.',
    specs: [
      { icon: 'square_foot', label: '32 m²' },
      { icon: 'bed', label: '1 King + 1 Single Bed' },
      { icon: 'group', label: 'Sleeps Up to 3 Guests' },
      { icon: 'shower', label: 'Large En-Suite Rain Shower' },
      { icon: 'deck', label: 'Expanded Balcony' },
    ],
    inclusions: [
      '1 King Bed + 1 Single Bed with premium linen',
      'Expanded private balcony terrace',
      'Spacious en-suite bathroom with rain shower',
      'Extra wardrobe space & luggage storage',
      'High-speed Wi-Fi, silent inverter AC & 32" 4K Smart TV',
      'Free basement parking & daily housekeeping',
      'Direct host concierge assistance via WhatsApp',
    ],
    quickTags: [
      { icon: 'balcony', label: 'Expanded Balcony' },
      { icon: 'shower', label: 'Rain Shower' },
      { icon: 'local_parking', label: 'Free Parking' },
    ],
  },
];

export function getRoomById(id: string): Room | undefined {
  return rooms.find((r) => r.id === id);
}
