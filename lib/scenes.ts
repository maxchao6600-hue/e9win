export type Scene = { src: string; alt: string };

export const categoryScenes: Record<string, Scene> = {
  slots: {
    src: "/images/brand/scene-slots.webp",
    alt: "A black gaming monitor showing one online slot game in gold light",
  },
  "live-casino": {
    src: "/images/brand/scene-live.webp",
    alt: "A black gaming monitor showing an online baccarat table",
  },
  sports: {
    src: "/images/brand/scene-sports.webp",
    alt: "A black gaming monitor showing a dark sportsbook of blank match cards",
  },
  lottery: {
    src: "/images/brand/scene-lottery.webp",
    alt: "A black gaming monitor showing four empty 4D selection wells",
  },
  fishing: {
    src: "/images/brand/scene-fishing.webp",
    alt: "A black gaming monitor showing an online fishing scene without scores",
  },
  esports: {
    src: "/images/brand/scene-esports.webp",
    alt: "A black gaming desk with a headset and an online arena on the monitor",
  },
};

export const pageScenes = {
  vip: {
    src: "/images/brand/scene-vip.webp",
    alt: "A private lounge with velvet seating and gold light",
  },
  agent: {
    src: "/images/brand/scene-agent.webp",
    alt: "A gallery desk overlooking a gaming floor",
  },
  download: {
    src: "/images/brand/scene-devices.webp",
    alt: "A phone and a laptop on a dark marble desk",
  },
} as const;

export const guideScenes: Record<string, Scene> = {
  Account: {
    src: "/images/brand/scene-account.webp",
    alt: "A quiet desk beside a night window",
  },
  Download: {
    src: "/images/brand/scene-devices.webp",
    alt: "A phone and a laptop on a dark marble desk",
  },
  Payments: {
    src: "/images/brand/scene-payments.webp",
    alt: "A card and a phone on a dark cashier counter",
  },
  Games: {
    src: "/images/brand/scene-slots.webp",
    alt: "A black gaming monitor showing one online slot game in gold light",
  },
  Slots: {
    src: "/images/brand/scene-slots.webp",
    alt: "A black gaming monitor showing one online slot game in gold light",
  },
  "Live Casino": {
    src: "/images/brand/scene-live.webp",
    alt: "A black gaming monitor showing an online baccarat table",
  },
  Sports: {
    src: "/images/brand/scene-sports.webp",
    alt: "A black gaming monitor showing a dark sportsbook of blank match cards",
  },
  Lottery: {
    src: "/images/brand/scene-lottery.webp",
    alt: "A black gaming monitor showing four empty 4D selection wells",
  },
  Fishing: {
    src: "/images/brand/scene-fishing.webp",
    alt: "A black gaming monitor showing an online fishing scene without scores",
  },
  Esports: {
    src: "/images/brand/scene-esports.webp",
    alt: "A black gaming desk with a headset and an online arena on the monitor",
  },
  Promotions: {
    src: "/images/promotions/promo-welcome.webp",
    alt: "A dark entrance lit with gold, used as the welcome campaign still",
  },
  Security: {
    src: "/images/brand/scene-account.webp",
    alt: "A quiet desk beside a night window",
  },
  "Responsible gaming": {
    src: "/images/brand/scene-account.webp",
    alt: "A quiet desk beside a night window",
  },
};
