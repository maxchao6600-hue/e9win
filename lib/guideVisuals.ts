import type { Scene } from "@/lib/scenes";

export type GuideVisual = Scene & { position?: string };

/**
 * One existing asset per guide slug. Chosen by topic, not by card index.
 * Android and iPhone share the only phone-and-laptop photograph.
 */
export const guideVisuals: Record<string, GuideVisual> = {
  "how-to-register": {
    src: "/images/brand/scene-account.webp",
    alt: "A notebook on a quiet desk",
    position: "center 68%",
  },
  "how-to-login": {
    src: "/images/brand/scene-esports.webp",
    alt: "Hands on a keyboard",
    position: "center 58%",
  },
  "how-to-start": {
    src: "/images/brand/hero-hall.webp",
    alt: "A gold-lit hall of gaming screens",
    position: "center 42%",
  },
  "games-guide": {
    src: "/images/brand/hero-hall.webp",
    alt: "A gold-lit hall of gaming screens",
    position: "center 42%",
  },
  "slots-guide": {
    src: "/images/brand/scene-slots.webp",
    alt: "Gates of Olympus on a display in a dark room",
    position: "68% center",
  },
  "live-casino-guide": {
    src: "/images/brand/scene-live.webp",
    alt: "Playtech baccarat key art of a dealer holding cards",
    position: "center 28%",
  },
  "sports-guide": {
    src: "/images/brand/scene-sports.webp",
    alt: "A worn football on a night pitch under warm stadium lights",
    position: "left 46%",
  },
  "lottery-guide": {
    src: "/images/brand/scene-lottery.webp",
    alt: "An empty brass lottery cage in a single warm light",
    position: "72% center",
  },
  "fishing-guide": {
    src: "/images/brand/scene-fishing.webp",
    alt: "A koi crossing a gold light shaft beside a submerged arch",
    position: "center 40%",
  },
  "esports-guide": {
    src: "/images/brand/scene-esports.webp",
    alt: "Hands on a keyboard lit by warm gold light",
    position: "center 58%",
  },
  "mobile-guide": {
    src: "/images/brand/scene-devices.webp",
    alt: "A phone and a laptop on a dark marble desk",
    position: "center 62%",
  },
  "how-to-download": {
    src: "/images/promotions/promo-welcome.webp",
    alt: "A dark doorway opening onto a gold-lit hall",
    position: "center",
  },
  "android-guide": {
    src: "/images/brand/scene-devices.webp",
    alt: "A phone and a laptop on a dark marble desk",
    position: "center 62%",
  },
  "iphone-guide": {
    src: "/images/brand/scene-devices.webp",
    alt: "A phone on a dark marble desk beside a laptop",
    position: "28% 64%",
  },
  "payment-guide": {
    src: "/images/brand/scene-payments.webp",
    alt: "A card and a phone on a dark cashier counter",
    position: "62% center",
  },
  "deposit-guide": {
    src: "/images/promotions/promo-rebate.webp",
    alt: "A stack of gold coins on a dark table",
    position: "center",
  },
  "withdrawal-guide": {
    src: "/images/brand/scene-payments.webp",
    alt: "A card and a phone on a dark cashier counter",
    position: "38% center",
  },
  "promotions-guide": {
    src: "/images/promotions/promo-daily.webp",
    alt: "A row of dark gaming machines in gold light",
    position: "32% center",
  },
  "account-guide": {
    src: "/images/brand/scene-account.webp",
    alt: "A notebook on a quiet desk",
    position: "center 68%",
  },
  "security-guide": {
    src: "/images/brand/scene-agent.webp",
    alt: "Monitors and a keyboard at a dark desk",
    position: "42% 46%",
  },
  "responsible-gaming-guide": {
    src: "/images/brand/scene-account.webp",
    alt: "A lamp and a notebook on a quiet night desk",
    position: "center 62%",
  },
};

/** Second still for the steps block. Stays on the same topic as the hero. */
export const guideStepVisuals: Record<string, GuideVisual> = {
  "how-to-register": guideVisuals["mobile-guide"],
  "how-to-login": guideVisuals["how-to-register"],
  "how-to-start": guideVisuals["slots-guide"],
  "games-guide": guideVisuals["slots-guide"],
  "slots-guide": {
    src: "/images/promotions/promo-daily.webp",
    alt: "A row of dark gaming machines in gold light",
    position: "32% center",
  },
  "live-casino-guide": {
    src: "/images/games/lightning-baccarat.webp",
    alt: "Lightning Baccarat table artwork",
    position: "center",
  },
  "sports-guide": {
    src: "/images/games/horse-racing.webp",
    alt: "Horse racing cover from the sports catalog",
    position: "center",
  },
  "lottery-guide": guideVisuals["lottery-guide"],
  "fishing-guide": guideVisuals["fishing-guide"],
  "esports-guide": guideVisuals["esports-guide"],
  "mobile-guide": guideVisuals["how-to-download"],
  "how-to-download": guideVisuals["mobile-guide"],
  "android-guide": guideVisuals["mobile-guide"],
  "iphone-guide": guideVisuals["how-to-download"],
  "payment-guide": guideVisuals["deposit-guide"],
  "deposit-guide": guideVisuals["payment-guide"],
  "withdrawal-guide": guideVisuals["deposit-guide"],
  "promotions-guide": {
    src: "/images/promotions/promo-welcome.webp",
    alt: "A dark doorway opening onto a gold-lit hall",
    position: "center",
  },
  "account-guide": guideVisuals["mobile-guide"],
  "security-guide": guideVisuals["account-guide"],
  "responsible-gaming-guide": guideVisuals["account-guide"],
};

export function visualForGuide(slug: string) {
  return guideVisuals[slug];
}
