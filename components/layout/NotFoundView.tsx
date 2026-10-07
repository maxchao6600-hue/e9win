"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPath, localizePath } from "@/lib/i18n";

export function NotFoundView() {
  const locale = localeFromPath(usePathname() || "/");
  const zh = locale === "zh";
  return (
    <div className="container page-hero" lang={zh ? "zh-MY" : "en-MY"}>
      <h1>{zh ? "找不到页面" : "Page not found"}</h1>
      <p>{zh ? "这个地址不在本站。" : "That address is not on this site."}</p>
      <Link className="btn btn-primary" href={localizePath("/", locale)}>{zh ? "返回首页" : "Back home"}</Link>
    </div>
  );
}
