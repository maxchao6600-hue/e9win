import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { VisualSplit } from "@/components/content/VisualSplit";
import { guides, faqGroups } from "@/lib/content";
import { guideHubs } from "@/lib/guideHub";
import { guideScenes } from "@/lib/scenes";
import { pageMeta } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "E9WIN Guides | Account, Games, Payments and Mobile Help",
  description: "E9WIN guides for registration, payments, slots, live tables, sports, 4D, fishing, esports, and promotions. Amounts stay on the account card.",
  path: "/guides",
});

const featured = ["how-to-register", "how-to-login", "deposit-guide", "games-guide", "mobile-guide", "promotions-guide"];
const faq = faqGroups
  .filter((group) => ["registration", "login", "payments", "download"].includes(group.id))
  .flatMap((group) => group.items.slice(0, 1));

export default function GuidesPage() {
  const groups = guideHubs
    .map((hub) => ({
      ...hub,
      items: hub.slugs.map((slug) => guides.find((guide) => guide.slug === slug)).filter((guide) => guide !== undefined),
    }))
    .filter((group) => group.items.length > 0);
  const featuredGuides = featured.flatMap((slug) => {
    const guide = guides.find((item) => item.slug === slug);
    return guide ? [guide] : [];
  });
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Guides" }]} />
      <section className="hub-hero">
        <div>
          <p className="tag">Knowledge hub</p>
          <h1>E9WIN Guides</h1>
          <p>Practical steps for registration, login, payments, and each product the public site actually describes. Amounts that are not on an account card are not repeated here.</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="#getting-started">Start here</Link>
            <Link className="btn btn-line" href="/faq">FAQ</Link>
          </div>
        </div>
        <img src="/images/brand/scene-account.webp" alt="A quiet desk beside a night window" width={1600} height={760} />
      </section>

      <VisualSplit src="/images/brand/scene-slots.webp" alt="Gates of Olympus on a display in a dark private room" reverse>
        <h2>Start with the task</h2>
        <p>New players usually need <Link href="/guides/how-to-register">registration</Link>, then <Link href="/guides/deposit-guide">a deposit</Link>, then a category: <Link href="/guides/slots-guide">slots</Link>, <Link href="/guides/live-casino-guide">live tables</Link>, <Link href="/guides/sports-guide">sports</Link>, or <Link href="/guides/lottery-guide">4D</Link>.</p>
        <p>If you are choosing a campaign, read <Link href="/guides/promotions-guide">how to read a promotion</Link> before you opt in. If you want to stop, use the <Link href="/guides/responsible-gaming-guide">limits guide</Link>.</p>
      </VisualSplit>

      <section className="section">
        <div className="section-head">
          <div>
            <h2>Featured guides</h2>
            <p>The shortest path from a new account to a category you understand.</p>
          </div>
        </div>
        <div className="guide-grid">
          {featuredGuides.map((guide) => (
            <Link className="guide-card" key={guide.slug} href={`/guides/${guide.slug}`}>
              <img src={guideScenes[guide.category].src} alt={guideScenes[guide.category].alt} width={1280} height={720} loading="lazy" />
              <span className="guide-body">
                <p className="tag">{guide.category}</p>
                <h3>{guide.title}</h3>
                <p>{guide.excerpt}</p>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {groups.map((group) => (
        <section className="section" key={group.id} aria-labelledby={`guides-${group.id}`}>
          <h2 id={group.id}>{group.title}</h2>
          <div className="guide-grid">
            {group.items.map((guide) => (
              <Link className="guide-card" key={guide.slug} href={`/guides/${guide.slug}`}>
                <img src={guideScenes[guide.category].src} alt={guideScenes[guide.category].alt} width={1280} height={720} loading="lazy" />
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

      <section className="section faq">
        <h2>Guide questions</h2>
        {faq.map((item) => (
          <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>
        ))}
        <p><Link href="/faq">Full FAQ</Link></p>
      </section>

      <section className="section hub-cta">
        <h2>Use a guide, then the lobby</h2>
        <p>The guides explain the public path. The player lobby is where the account, the cashier, and the game actually open.</p>
        <div className="cta-row">
          <Link className="btn btn-primary" href="/register">Register</Link>
          <Link className="btn btn-line" href="/games">Games</Link>
          <Link className="btn btn-ghost" href="/contact">Contact</Link>
        </div>
      </section>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Guides", item: absoluteUrl("/guides") },
        ],
      }} />
    </div>
  );
}
