import {
  Scissors,
  Zap,
  PenTool,
  Flame,
  Crown,
  Baby,
  Palette,
  Wind,
  type LucideIcon,
} from "lucide-react";

export const WHATSAPP_NUMBER = "923001234567";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_DISPLAY = "+92 300 1234567";
export const ADDRESS = "Shop 4, Plaza 12, Main Double Road, DHA Phase 2, Islamabad";

/* ------------------------------- services ------------------------------- */

export interface Service {
  id: string;
  name: string;
  price: number; // PKR
  duration: string;
  desc: string;
  icon: LucideIcon;
  tag?: string;
}

export const SERVICES: Service[] = [
  {
    id: "signature-cut",
    name: "Signature Haircut",
    price: 1200,
    duration: "40 min",
    desc: "Consultation, precision cut, wash and styled finish.",
    icon: Scissors,
    tag: "Most Booked",
  },
  {
    id: "skin-fade",
    name: "Skin Fade / Zero Fade",
    price: 1500,
    duration: "45 min",
    desc: "Razor-sharp blend, crisp lineup and hot-lather neckline.",
    icon: Zap,
  },
  {
    id: "beard-sculpt",
    name: "Beard Sculpt & Line-Up",
    price: 800,
    duration: "30 min",
    desc: "Shape, symmetry and detail work with oils and balm.",
    icon: PenTool,
  },
  {
    id: "royal-shave",
    name: "Hot-Towel Royal Shave",
    price: 1000,
    duration: "35 min",
    desc: "Steam towels, straight razor, cold finish and aftershave.",
    icon: Flame,
    tag: "Classic",
  },
  {
    id: "cut-beard-combo",
    name: "Cut + Beard Combo",
    price: 1800,
    duration: "60 min",
    desc: "The full works — haircut plus complete beard service.",
    icon: Crown,
    tag: "Best Value",
  },
  {
    id: "junior-cut",
    name: "Junior Cut (Under 12)",
    price: 900,
    duration: "30 min",
    desc: "Patient, gentle cuts for young gentlemen.",
    icon: Baby,
  },
  {
    id: "grey-blending",
    name: "Grey Blending / Color",
    price: 2500,
    duration: "60 min",
    desc: "Natural camouflage color or full color service.",
    icon: Palette,
  },
  {
    id: "head-massage",
    name: "Head Massage & Style",
    price: 700,
    duration: "25 min",
    desc: "Relaxing champi massage with a styled finish.",
    icon: Wind,
  },
];

export function formatPKR(n: number): string {
  return "Rs " + n.toLocaleString("en-US");
}

/* -------------------------------- barbers -------------------------------- */

export interface Barber {
  id: string;
  name: string;
  monogram: string;
  title: string;
  experience: string;
  specialties: string[];
  quote: string;
}

export const BARBERS: Barber[] = [
  {
    id: "ahmed",
    name: "Ahmed Raza",
    monogram: "AR",
    title: "Master Barber · Founder",
    experience: "12 yrs",
    specialties: ["Skin Fades", "Classic Tapers", "Razor Work"],
    quote: "A fade is architecture. I build it to last.",
  },
  {
    id: "bilal",
    name: "Bilal Sheikh",
    monogram: "BS",
    title: "Senior Barber",
    experience: "8 yrs",
    specialties: ["Beard Sculpting", "Hot-Towel Shaves"],
    quote: "Your beard is your frame — I make it gallery-worthy.",
  },
  {
    id: "usman",
    name: "Usman Tariq",
    monogram: "UT",
    title: "Barber & Stylist",
    experience: "5 yrs",
    specialties: ["Modern Styles", "Kids Cuts", "Texture Work"],
    quote: "Walk in ordinary, walk out unforgettable.",
  },
];

/* -------------------------------- booking -------------------------------- */

export const TIME_SLOTS = [
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:30 PM",
  "4:00 PM",
  "5:30 PM",
  "7:00 PM",
  "8:30 PM",
];

/* -------------------------------- gallery -------------------------------- */

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export const GALLERY: GalleryItem[] = [
  {
    src: "/gallery-fade.webp",
    alt: "Barber doing a precision skin fade with clippers",
    caption: "Precision Fades",
  },
  {
    src: "/gallery-beard.webp",
    alt: "Barber sculpting a sharp beard line-up with a straight razor",
    caption: "Beard Artistry",
  },
  {
    src: "/gallery-shave.webp",
    alt: "Traditional hot-towel shave in a vintage barber chair",
    caption: "Royal Shave Ritual",
  },
  {
    src: "/gallery-interior.webp",
    alt: "ClipCraft barbershop interior with vintage chairs and warm lights",
    caption: "The Lounge",
  },
];

/* ------------------------------- membership ------------------------------ */

export interface Package {
  id: string;
  name: string;
  price: number; // PKR / month
  tagline: string;
  perks: string[];
  tag?: string;
}

export const PACKAGES: Package[] = [
  {
    id: "regular",
    name: "The Regular",
    price: 3500,
    tagline: "Stay sharp all month",
    perks: [
      "4 signature haircuts / month",
      "Priority booking slots",
      "10% off grooming products",
      "Free neckline touch-ups",
    ],
  },
  {
    id: "suave",
    name: "Sharp & Suave",
    price: 6500,
    tagline: "Cut + beard, perfected",
    perks: [
      "4 cut + beard combos / month",
      "1 hot-towel royal shave / month",
      "Priority booking slots",
      "15% off grooming products",
      "Free styling product each visit",
    ],
    tag: "Most Popular",
  },
  {
    id: "royal",
    name: "The Royal",
    price: 11000,
    tagline: "The full gentleman's club",
    perks: [
      "Unlimited haircuts",
      "2 royal shaves / month",
      "Dedicated chair, zero wait",
      "20% off grooming products",
      "1 guest pass / month",
    ],
  },
];

/* ------------------------------ testimonials ----------------------------- */

export interface Testimonial {
  name: string;
  detail: string;
  text: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Hamza K.",
    detail: "Regular since 2023",
    text: "Best fade in Islamabad, hands down. Ahmed understands exactly what I want before I even finish explaining. I don't trust anyone else with my hair.",
  },
  {
    name: "Daniyal A.",
    detail: "Sharp & Suave member",
    text: "The hot-towel shave is an experience, not a service. Walked in stressed, walked out feeling like a new man. The membership pays for itself.",
  },
  {
    name: "Fahad M.",
    detail: "First-time visitor",
    text: "Booked on WhatsApp in two minutes, zero waiting when I arrived. My beard has never looked this clean. Already booked my next three visits.",
  },
];

/* --------------------------------- hours --------------------------------- */

export const HOURS: { days: string; time: string }[] = [
  { days: "Monday – Thursday", time: "11:00 AM – 10:00 PM" },
  { days: "Friday", time: "11:00 AM – 1:00 PM · 3:00 PM – 10:00 PM" },
  { days: "Saturday – Sunday", time: "10:00 AM – 11:00 PM" },
];
