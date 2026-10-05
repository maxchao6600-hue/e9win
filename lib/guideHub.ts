export const guideHubs = [
  { id: "getting-started", title: "Getting started", slugs: ["how-to-register", "how-to-login", "how-to-start"] },
  { id: "games", title: "Games", slugs: ["games-guide", "slots-guide", "live-casino-guide", "sports-guide", "lottery-guide", "fishing-guide", "esports-guide"] },
  { id: "mobile", title: "Mobile", slugs: ["mobile-guide", "how-to-download", "android-guide", "iphone-guide"] },
  { id: "payments", title: "Payments", slugs: ["payment-guide", "deposit-guide", "withdrawal-guide"] },
  { id: "promotions", title: "Promotions", slugs: ["promotions-guide"] },
  { id: "account", title: "Account", slugs: ["account-guide", "security-guide"] },
  { id: "responsible-gaming", title: "Responsible gaming", slugs: ["responsible-gaming-guide"] },
] as const;

export function hubForSlug(slug: string) {
  return guideHubs.find((hub) => (hub.slugs as readonly string[]).includes(slug));
}
