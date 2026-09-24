import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { guides } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "E9WIN Guides | Account, Games, Payments and Mobile Help",
  description: "Step-by-step E9WIN help for registration, login, download, deposits, withdrawals, games, and mobile play.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Guides" }]} />
      <h1>Guides</h1>
      <p>Practical steps for the E9WIN workflows that are documented on the public site.</p>
      <div className="guide-grid section">
        {guides.map((guide) => (
          <Link className="guide-card" key={guide.slug} href={`/guides/${guide.slug}`}>
            <p className="tag">{guide.category}</p>
            <h2>{guide.title}</h2>
            <p>{guide.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
