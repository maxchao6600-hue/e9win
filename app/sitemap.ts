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
  "/deposit",
  "/withdrawal",
  "/guides",
  "/faq",
  "/about",
  "/contact",
  "/responsible-gaming",
  "/terms",
  "/privacy",
  ...categories.map((category) => `/games/${category.slug}`),
  ...guides.map((guide) => `/guides/${guide.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    lastModified: new Date("2026-09-25"),
  }));
}
