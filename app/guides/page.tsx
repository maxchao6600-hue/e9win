import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { guides } from "@/lib/content";
import { guideScenes } from "@/lib/scenes";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "E9WIN Guides | Account, Games, Payments and Mobile Help",
  description: "E9WIN guides for registration, payments, slots, live tables, sports, 4D, fishing, esports, and promotions. Amounts stay on the account card.",
  path: "/guides",
});

const order = ["Account", "Download", "Payments", "Games", "Slots", "Live Casino", "Sports", "Lottery", "Fishing", "Esports", "Promotions", "Responsible gaming"];

export default function GuidesPage() {
  const groups = order
    .map((category) => ({ category, items: guides.filter((guide) => guide.category === category) }))
    .filter((group) => group.items.length > 0);
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Guides" }]} />
      <h1>Guides</h1>
      <p>Practical steps for registration, login, payments, and each product the public site actually describes. Amounts that are not on an account card are not repeated here.</p>
      <section className="topic prose">
        <h2>Start with the task</h2>
        <p>New players usually need <Link href="/guides/how-to-register">registration</Link>, then <Link href="/guides/deposit-guide">a deposit</Link>, then a category: <Link href="/guides/slots-guide">slots</Link>, <Link href="/guides/live-casino-guide">live tables</Link>, <Link href="/guides/sports-guide">sports</Link>, or <Link href="/guides/lottery-guide">4D</Link>.</p>
        <p>If you are choosing a campaign, read <Link href="/guides/promotions-guide">how to read a promotion</Link> before you opt in. If you want to stop, use the <Link href="/guides/responsible-gaming-guide">limits guide</Link>.</p>
      </section>
      {groups.map((group) => (
        <section className="section" key={group.category} aria-labelledby={`guides-${group.category}`}>
          <h2 id={`guides-${group.category}`}>{group.category}</h2>
          <div className="guide-grid">
            {group.items.map((guide) => (
              <Link className="guide-card" key={guide.slug} href={`/guides/${guide.slug}`}>
                <img src={guideScenes[guide.category].src} alt="" width={1280} height={720} />
                <span className="guide-body">
                  <p className="tag">{guide.category}</p>
                  <h3>{guide.title}</h3>
                  <p>{guide.excerpt}</p>
                </span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
