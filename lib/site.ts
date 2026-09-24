export const siteConfig = {
  name: "E9WIN",
  url: "https://e9win.net",
  description:
    "E9WIN is a Malaysia online gaming platform for slots, live casino, sports, lottery, and mobile play.",
  locale: "en_MY",
  logo: "/images/brand/logo.png",
  favicon: "/images/brand/favicon.png",
  playerPortal: "https://99e9win.org/r/rf2da642b",
  support: {
    whatsapp: "https://wa.link/e9winseo",
    facebook: "https://www.facebook.com/profile.php?id=61566605603764",
  },
} as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
