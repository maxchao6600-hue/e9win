import type { Metadata } from "next";
import { chinesePath, englishPath, type Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

export function pageMeta(input: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  locale?: Locale;
  ogType?: "website" | "article";
}): Metadata {
  const locale = input.locale ?? (input.path === "/zh" || input.path.startsWith("/zh/") ? "zh" : "en");
  const enPath = englishPath(input.path);
  const zhPath = chinesePath(input.path);
  const canonicalPath = input.path === "/games/lottery" ? "/games/4d" : input.path === "/zh/games/lottery" ? "/zh/games/4d" : input.path;
  const url = absoluteUrl(canonicalPath);
  const languages = {
    "en-MY": absoluteUrl(enPath === "/games/lottery" ? "/games/4d" : enPath),
    "zh-MY": absoluteUrl(zhPath === "/zh/games/lottery" ? "/zh/games/4d" : zhPath),
    "x-default": absoluteUrl(enPath === "/games/lottery" ? "/games/4d" : enPath),
  };
  return {
    title: { absolute: input.title },
    description: input.description,
    alternates: { canonical: url, languages },
    robots: input.index === false ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      locale: locale === "zh" ? "zh_MY" : "en_MY",
      type: input.ogType ?? "website",
      images: [{ url: absoluteUrl("/images/brand/logo.png"), alt: "E9WIN" }],
    },
    twitter: {
      card: "summary",
      title: input.title,
      description: input.description,
    },
  };
}
