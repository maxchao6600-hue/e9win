import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { VisualSplit } from "@/components/content/VisualSplit";
import { faqGroups } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = pageMeta({
  title: "E9WIN FAQ | Account, Games, Payments and Support",
  description: "Answers about E9WIN accounts, games, download, payments, promotions, agents, and support.",
  path: "/faq",
});

const related: Record<string, { href: string; label: string }[]> = {
  general: [{ href: "/about", label: "About E9WIN" }, { href: "/games", label: "E9WIN Games" }],
  registration: [{ href: "/register", label: "Register" }, { href: "/guides/how-to-register", label: "Registration guide" }],
  login: [{ href: "/login", label: "Login" }, { href: "/guides/how-to-login", label: "Login guide" }],
  games: [{ href: "/games", label: "E9WIN Games" }, { href: "/guides/games-guide", label: "E9WIN Games Guide" }],
  download: [{ href: "/download", label: "E9WIN Download" }, { href: "/guides/mobile-guide", label: "E9WIN Mobile Guide" }],
  payments: [{ href: "/payment-methods", label: "E9WIN payment methods" }, { href: "/deposit", label: "E9WIN deposit" }],
  withdrawals: [{ href: "/withdrawal", label: "E9WIN withdrawal" }, { href: "/guides/withdrawal-guide", label: "E9WIN Withdrawal Guide" }],
  mobile: [{ href: "/download", label: "E9WIN Download" }, { href: "/guides/iphone-guide", label: "iPhone access" }],
  security: [{ href: "/guides/security-guide", label: "E9WIN Security Guide" }, { href: "/contact", label: "Contact" }],
  promotions: [{ href: "/promotions", label: "E9WIN Promotions" }, { href: "/guides/promotions-guide", label: "Promotion guide" }],
  agent: [{ href: "/agent", label: "E9WIN Agent" }, { href: "/contact", label: "Contact" }],
  slots: [{ href: "/games/slots", label: "E9WIN Slots" }, { href: "/guides/slots-guide", label: "E9WIN Slots Guide" }],
  live: [{ href: "/games/live-casino", label: "E9WIN Live Casino" }, { href: "/guides/live-casino-guide", label: "E9WIN Live Casino Guide" }],
  sports: [{ href: "/games/sports", label: "E9WIN Sports" }, { href: "/guides/sports-guide", label: "E9WIN Sports Guide" }],
  esports: [{ href: "/games/esports", label: "E9WIN Esports" }, { href: "/guides/esports-guide", label: "E9WIN Esports Guide" }],
  lottery: [{ href: "/games/4d", label: "E9WIN 4D" }, { href: "/guides/lottery-guide", label: "E9WIN 4D Guide" }],
  fishing: [{ href: "/games/fishing", label: "E9WIN Fishing" }, { href: "/guides/fishing-guide", label: "E9WIN Fishing Guide" }],
  vip: [{ href: "/vip", label: "E9WIN VIP" }, { href: "/promotions", label: "Promotions" }],
  responsible: [{ href: "/responsible-gaming", label: "Responsible gaming" }, { href: "/guides/responsible-gaming-guide", label: "Limits guide" }],
  support: [{ href: "/contact", label: "Contact" }, { href: "/faq", label: "E9WIN FAQ" }],
};

export default function FaqPage() {
  const entities = faqGroups.flatMap((group) => group.items);
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "FAQ" }]} />
      <section className="hub-hero">
        <div>
          <p className="tag">Help</p>
          <h1>E9WIN FAQ</h1>
          <p>Answers drawn from the public pages, grouped by the task you are trying to finish. Each answer points at the longer page for that topic.</p>
        </div>
        <img src="/images/brand/scene-account.webp" alt="A quiet desk beside a night window" width={1600} height={760} />
      </section>
      <VisualSplit src="/images/brand/scene-slots.webp" alt="Gates of Olympus on a display in a dark private room" reverse>
        <h2>How to use this page</h2>
        <p>Start with the group that matches the task: an account, a game category, a payment, a promotion, or membership. Each answer points at the page that carries the longer explanation.</p>
        <p>The player lobby still decides a stake, a cashier limit, and a campaign card. Use this page to find the right screen.</p>
      </VisualSplit>
      {faqGroups.map((group) => (
        <section className="faq" key={group.id} aria-labelledby={group.id}>
          <h2 id={group.id}>{group.title}</h2>
          {group.items.map((item) => (
            <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>
          ))}
          {related[group.id] ? (
            <p>{related[group.id].map((link, index) => (
              <span key={link.href}>{index > 0 ? " · " : null}<Link href={link.href}>{link.label}</Link></span>
            ))}</p>
          ) : null}
        </section>
      ))}
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: entities.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }} />
    </div>
  );
}
