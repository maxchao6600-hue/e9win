"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/promotions", label: "Promotions" },
  { href: "/vip", label: "VIP" },
  { href: "/download", label: "Download" },
  { href: "/agent", label: "Agent" },
  { href: "/guides", label: "Guides" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    if (href === "/") return pathname === "/" ? "page" : undefined;
    return pathname === href || pathname.startsWith(`${href}/`) ? "page" : undefined;
  };

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="logo" aria-label="E9WIN home">
          <img src="/images/brand/logo.png" alt="E9WIN" width={132} height={40} />
        </Link>
        <nav className="nav" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href} aria-current={current(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="btn btn-ghost desk" href="/login">Login</Link>
          <Link className="btn btn-primary desk" href="/register">Register</Link>
          <div className="mobile-auth">
            <Link className="btn btn-ghost" href="/login">Login</Link>
            <Link className="btn btn-primary" href="/register">Register</Link>
            <button className="btn btn-ghost menu-btn" type="button" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((v) => !v)}>
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" className="drawer" aria-label="Mobile">
          {links.map((link) => (
            <Link key={link.href} href={link.href} aria-current={current(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
