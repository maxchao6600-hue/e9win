export type Locale = "en" | "zh";

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "zh";
}

export function localeFromPath(pathname: string): Locale {
  return pathname === "/zh" || pathname.startsWith("/zh/") ? "zh" : "en";
}

export function stripLocale(pathname: string): string {
  if (pathname === "/zh" || pathname === "/zh/") return "/";
  if (pathname.startsWith("/zh/")) return pathname.slice(3) || "/";
  return pathname || "/";
}

export function localizePath(path: string, locale: Locale): string {
  const bare = stripLocale(path.split("?")[0] || "/");
  const hash = path.includes("#") ? path.slice(path.indexOf("#")) : "";
  if (locale === "en") return `${bare}${hash}`;
  if (bare === "/") return `/zh${hash}`;
  return `/zh${bare}${hash}`;
}

export function tx(locale: Locale, en: string, zh: string): string {
  return locale === "zh" ? zh : en;
}

export function englishPath(path: string): string {
  return stripLocale(path);
}

export function chinesePath(path: string): string {
  return localizePath(stripLocale(path), "zh");
}
