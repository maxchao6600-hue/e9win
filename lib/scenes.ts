export type Scene = { src: string; alt: string };

export const categoryScenes: Record<string, Scene> = {
  slots: {
    src: "/images/brand/scene-slots.webp",
    alt: "Gates of Olympus on a display in a dark private room",
  },
  "live-casino": {
    src: "/images/brand/scene-live.webp",
    alt: "Playtech baccarat key art of a dealer holding cards",
  },
  sports: {
    src: "/images/brand/scene-sports.webp",
    alt: "A worn football on a night pitch under warm stadium lights",
  },
  lottery: {
    src: "/images/brand/scene-lottery.webp",
    alt: "An empty brass lottery cage in a single warm light",
  },
  fishing: {
    src: "/images/brand/scene-fishing.webp",
    alt: "A koi crossing a gold light shaft beside a submerged arch",
  },
  esports: {
    src: "/images/brand/scene-esports.webp",
    alt: "Hands on a keyboard lit by warm gold light",
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
    alt: "Gates of Olympus on a display in a dark private room",
  },
  Slots: {
    src: "/images/brand/scene-slots.webp",
    alt: "Gates of Olympus on a display in a dark private room",
  },
  "Live Casino": {
    src: "/images/brand/scene-live.webp",
    alt: "Playtech baccarat key art of a dealer holding cards",
  },
  Sports: {
    src: "/images/brand/scene-sports.webp",
    alt: "A worn football on a night pitch under warm stadium lights",
  },
  Lottery: {
    src: "/images/brand/scene-lottery.webp",
    alt: "An empty brass lottery cage in a single warm light",
  },
  Fishing: {
    src: "/images/brand/scene-fishing.webp",
    alt: "A koi crossing a gold light shaft beside a submerged arch",
  },
  Esports: {
    src: "/images/brand/scene-esports.webp",
    alt: "Hands on a keyboard lit by warm gold light",
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
