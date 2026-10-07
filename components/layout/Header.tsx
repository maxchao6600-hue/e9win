"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { localeFromPath, localizePath, stripLocale } from "@/lib/i18n";

const links = [
  { href: "/", en: "Home", zh: "首页" },
  { href: "/games", en: "Games", zh: "游戏" },
  { href: "/promotions", en: "Promotions", zh: "优惠" },
  { href: "/vip", en: "VIP", zh: "VIP" },
  { href: "/download", en: "Download", zh: "下载" },
  { href: "/agent", en: "Agent", zh: "代理" },
  { href: "/guides", en: "Guides", zh: "指南" },
];

function LanguageSwitch({ pathname, className = "" }: { pathname: string; className?: string }) {
  const locale = localeFromPath(pathname);
  const bare = stripLocale(pathname);
  return (
    <div className={`lang-switch${className ? ` ${className}` : ""}`} aria-label={locale === "zh" ? "语言" : "Language"}>
      <Link href={localizePath(bare, "en")} hrefLang="en-MY" aria-current={locale === "en" ? "true" : undefined}>EN</Link>
      <span className="sep" aria-hidden="true">|</span>
      <Link href={localizePath(bare, "zh")} hrefLang="zh-MY" aria-current={locale === "zh" ? "true" : undefined}>中文</Link>
    </div>
  );
}

export function Header() {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const bare = stripLocale(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const current = (href: string) => {
    if (href === "/") return bare === "/" ? "page" : undefined;
    return bare === href || bare.startsWith(`${href}/`) ? "page" : undefined;
  };

  const label = (link: (typeof links)[number]) => (locale === "zh" ? link.zh : link.en);
  const login = locale === "zh" ? "登录" : "Login";
  const register = locale === "zh" ? "注册" : "Register";
  const menu = open ? (locale === "zh" ? "关闭" : "Close") : (locale === "zh" ? "菜单" : "Menu");

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link href={localizePath("/", locale)} className="logo" aria-label={locale === "zh" ? "E9WIN 首页" : "E9WIN home"}>
          <img src="/images/brand/logo.png" alt="E9WIN" width={132} height={40} />
        </Link>
        <nav className="nav" aria-label={locale === "zh" ? "主导航" : "Primary"}>
          {links.map((link) => (
            <Link key={link.href} href={localizePath(link.href, locale)} aria-current={current(link.href)}>
              {label(link)}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSwitch pathname={pathname} className="desk" />
          <Link className="btn btn-login desk" href={localizePath("/login", locale)}>{login}</Link>
          <Link className="btn btn-primary desk" href={localizePath("/register", locale)}>{register}</Link>
          <div className="mobile-auth">
            <LanguageSwitch pathname={pathname} />
            <Link className="btn btn-login" href={localizePath("/login", locale)}>{login}</Link>
            <Link className="btn btn-primary" href={localizePath("/register", locale)}>{register}</Link>
            <button className="btn btn-ghost menu-btn" type="button" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((value) => !value)}>
              {menu}
            </button>
          </div>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" className="drawer" aria-label={locale === "zh" ? "手机导航" : "Mobile"}>
          {links.map((link) => (
            <Link key={link.href} href={localizePath(link.href, locale)} aria-current={current(link.href)}>
              {label(link)}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
