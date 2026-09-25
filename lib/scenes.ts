export type Scene = { src: string; alt: string };

export const categoryScenes: Record<string, Scene> = {
  slots: {
    src: "/images/brand/scene-slots.webp",
    alt: "A desktop and phone lobby showing six slot covers from the catalog",
  },
  "live-casino": {
    src: "/images/brand/scene-live.webp",
    alt: "A desktop and phone lobby showing live casino covers from the catalog",
  },
  sports: {
    src: "/images/brand/scene-sports.webp",
    alt: "A sports lobby screen with live horse racing and named football markets",
  },
  lottery: {
    src: "/images/brand/scene-lottery.webp",
    alt: "A 4D selection screen listing Magnum, Da Ma Cai, Toto, and Singapore",
  },
  fishing: {
    src: "/images/brand/scene-fishing.webp",
    alt: "A fishing lobby screen that opens after sign-in",
  },
  esports: {
    src: "/images/brand/scene-esports.webp",
    alt: "An esports market screen that opens after sign-in",
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
    alt: "A desktop and phone lobby showing six slot covers from the catalog",
  },
  Slots: {
    src: "/images/brand/scene-slots.webp",
    alt: "A desktop and phone lobby showing six slot covers from the catalog",
  },
  "Live Casino": {
    src: "/images/brand/scene-live.webp",
    alt: "A desktop and phone lobby showing live casino covers from the catalog",
  },
  Sports: {
    src: "/images/brand/scene-sports.webp",
    alt: "A sports lobby screen with live horse racing and named football markets",
  },
  Lottery: {
    src: "/images/brand/scene-lottery.webp",
    alt: "A 4D selection screen listing Magnum, Da Ma Cai, Toto, and Singapore",
  },
  Fishing: {
    src: "/images/brand/scene-fishing.webp",
    alt: "A fishing lobby screen that opens after sign-in",
  },
  Esports: {
    src: "/images/brand/scene-esports.webp",
    alt: "An esports market screen that opens after sign-in",
  },
  Promotions: {
    src: "/images/promotions/promo-welcome.webp",
    alt: "A dark entrance lit with gold, used as the welcome campaign still",
  },
  "Responsible gaming": {
    src: "/images/brand/scene-account.webp",
    alt: "A quiet desk beside a night window",
  },
};
