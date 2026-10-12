// Single source of truth. Every fact below comes from
// "Sai-Girishma-Ravi-Engagement-Invitation-Content.docx" (the family's content brief),
// except the venue street address, which was verified against the brief's Google Maps link.

export const couple = {
  bride: "Sai Girishma",
  groom: "Ravi",
  names: "Sai Girishma & Ravi",
};

export const blessing = "శ్రీరస్తు · శుభమస్తు · అవిఘ్నమస్తు";

export const headline = "A ring today, a lifetime to follow.";

/** 2026-11-20 09:34 IST. */
export const MUHURTHAM_ISO = "2026-11-20T09:34:00+05:30";

export const event = {
  dateLong: "Friday, 20 November 2026",
  time: "09:34 AM",
  followedBy: "Breakfast and lunch",
};

/** The panchangam block, verbatim from section 1 of the brief. */
export const muhurtham = [
  { label: "Date", en: "Friday, 20 November 2026", te: "20.11.2026, శుక్రవారం" },
  { label: "Muhurtham", en: "09:34 AM IST", te: "ఉదయం 09:34 గంటలకు" },
  { label: "Nakshatra", en: "Uttarabhadra", te: "ఉత్తరాభాద్ర" },
  { label: "Lagna", en: "Dhanus · Sagittarius", te: "ధనుస్సు" },
  { label: "Month", en: "Karthika", te: "కార్తీకం" },
  { label: "Tithi", en: "Shuddha Ekadashi", te: "శుద్ధ ఏకాదశి" },
] as const;

export const venue = {
  name: "Quality Inn Ramachandra",
  nameTe: "క్వాలిటీ ఇన్ రామచంద్ర, దువ్వాడ, విశాఖపట్నం",
  area: "Duvvada (Kurmannapalem)",
  city: "Visakhapatnam, Andhra Pradesh",
  // Verified from the brief's Maps link (Google place data): door number and PIN.
  street: "31-41/10/1, Ward 58",
  pin: "530046",
  full: "Quality Inn Ramachandra, 31-41/10/1, Ward 58, Duvvada (Kurmannapalem), Visakhapatnam, Andhra Pradesh 530046",
  directions: "https://maps.app.goo.gl/AXHFhzJQMuHbFLYA9?g_st=iw",
  // Keyless embed of the same place (name + area resolves to the brief's pin, not the
  // similarly named "Cygnett Inn Ramachandra" 1.6 km away).
  mapEmbed:
    "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sQualityInn+Ramachandra,+Duvvada,+Visakhapatnam!6i16",
};

export const invitation = {
  en: {
    title: "Invitation to our Engagement",
    body: "With the blessings of our parents and elders, we, Sai Girishma and Ravi, joyfully invite you and your family to our engagement ceremony.",
    lines: ["Friday, 20 November 2026 · Muhurtham at 09:34 AM", "Quality Inn Ramachandra, Duvvada, Visakhapatnam"],
    close: "Please join us, bless us, and be part of the morning where our forever begins.",
  },
  te: {
    title: "నిశ్చితార్థ మహోత్సవ ఆహ్వానం",
    body: "పెద్దల ఆశీస్సులతో, మా — సాయి గిరీష్మ మరియు రవి — నిశ్చితార్థ వేడుకకు మీరు సకుటుంబ సపరివార సమేతంగా విచ్చేసి, మమ్మల్ని ఆశీర్వదించవలసిందిగా కోరుతున్నాము.",
    lines: ["తేది: 20.11.2026, శుక్రవారం", "ముహూర్తం: ఉదయం 09:34 గంటలకు", "వేదిక: క్వాలిటీ ఇన్ రామచంద్ర, దువ్వాడ, విశాఖపట్నం"],
  },
};

/** Section-break quotes, section 3 of the brief. */
export const quotes = {
  elders: "With the blessings of our elders and the love of our families, we begin.",
  journey: "Not the end of a search, but the start of a journey — together.",
  morning: "Two hearts, two families, one auspicious morning.",
  presence: "Your presence is the celebration; your blessings are the gift.",
};

export const story = [
  {
    chapter: "One",
    title: "How it began",
    caption: "August 2023",
    text: "It started in August 2023 with a common friend’s get-together. What was meant to be a short conversation at Brew and Bistro, Rushikonda went on much longer than either of us planned.",
    photo: "palm-garden",
  },
  {
    chapter: "Two",
    title: "Getting to know each other",
    text: "Over phone calls, we found how much we had in common and how well our differences fit together.",
    photo: "beach-night",
  },
  {
    chapter: "Three",
    title: "The moment we knew",
    text: "Our think-alike nature, after countless talks. That was when we both knew this was it.",
    photo: "lantern-steps",
  },
  {
    chapter: "Four",
    caption: "20 November 2026 · Karthika Shuddha Ekadashi",
    title: "The yes",
    text: "With our families’ blessings, we are getting engaged on 20 November 2026, on Karthika Shuddha Ekadashi. This is the first step; the wedding will follow next year.",
    photo: "ring-of-light",
  },
] as const;

export const about = [
  { name: "Sai Girishma", lines: ["MBBS, MD Anaesthesia", "Vizag", "Painting and dancing"] },
  { name: "Ravi", lines: ["Chartered Accountant", "Vizag", "Business enthusiast — financial markets"] },
];

export const families = [
  { side: "Bride’s family", names: ["Manga bai", "Bhikshalu"], place: "Tenali" },
  { side: "Groom’s family", names: ["Sushila", "Kesava Rao"], place: "Vizag" },
];

export const rsvp = {
  /** WhatsApp click-to-chat number: India 91 + 9550887700. */
  whatsapp: "919550887700",
  display: "+91 95508 87700",
};
