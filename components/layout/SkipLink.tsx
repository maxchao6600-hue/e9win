"use client";

import { usePathname } from "next/navigation";
import { localeFromPath } from "@/lib/i18n";

export function SkipLink() {
  const zh = localeFromPath(usePathname() || "/") === "zh";
  return <a className="skip" href="#main">{zh ? "跳到主要内容" : "Skip to content"}</a>;
}
