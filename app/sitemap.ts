import type { MetadataRoute } from "next";
import { guides } from "@/lib/content";
import { categories } from "@/lib/games";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const paths = [
  "/",
  "/games",
  "/promotions",
  "/vip",
  "/download",
  "/agent",
  "/payment-methods",
  "/deposit",
  "/games/4d",
  "/withdrawal",
  "/guides",
  "/faq",
  "/about",
  "/contact",
  "/responsible-gaming",
  "/terms",
  "/privacy",
  ...categories.filter((category) => category.slug !== "lottery").map((category) => `/games/${category.slug}`),
  ...guides.map((guide) => `/guides/${guide.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const dated = new Date("2026-10-07");
  return paths.flatMap((path) => {
    const english = `${siteConfig.url}${path === "/" ? "" : path}`;
    const chinese = path === "/" ? `${siteConfig.url}/zh` : `${siteConfig.url}/zh${path}`;
    return [
      { url: english, lastModified: dated },
      { url: chinese, lastModified: dated },
    ];
  });
}
