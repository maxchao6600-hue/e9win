import Link from "next/link";
import { tx, type Locale } from "@/lib/i18n";

export function Breadcrumbs({ items, locale = "en" }: { items: { href?: string; label: string }[]; locale?: Locale }) {
  return (
    <nav className="crumbs" aria-label={tx(locale, "Breadcrumb", "页面路径")}>
      {items.map((item, index) => (
        <span key={item.label}>
          {index > 0 ? " / " : null}
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}
