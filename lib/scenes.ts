export type Scene = { src: string; alt: string };

export const categoryScenes: Record<string, Scene> = {
  slots: {
    src: "/images/brand/scene-slots.webp",
    alt: "A row of illuminated cabinets in a dark gaming hall",
  },
  "live-casino": {
    src: "/images/brand/scene-live.webp",
    alt: "An empty baccarat table in a private salon",
  },
  sports: {
    src: "/images/brand/scene-sports.webp",
    alt: "A floodlit racetrack and grandstand at night",
  },
  lottery: {
    src: "/images/brand/scene-lottery.webp",
    alt: "A lottery draw sphere in a quiet hall",
  },
  fishing: {
    src: "/images/brand/scene-fishing.webp",
    alt: "Dark water lit by warm gold light shafts",
  },
  esports: {
    src: "/images/brand/scene-esports.webp",
    alt: "An empty arena stage under gold light",
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
    alt: "A row of illuminated cabinets in a dark gaming hall",
  },
};
