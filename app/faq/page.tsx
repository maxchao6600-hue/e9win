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
  general: [{ href: "/about", label: "About" }, { href: "/games", label: "Games" }],
  registration: [{ href: "/register", label: "Register" }, { href: "/guides/how-to-register", label: "Registration guide" }],
  login: [{ href: "/login", label: "Login" }, { href: "/guides/how-to-login", label: "Login guide" }],
  games: [{ href: "/games", label: "Games hub" }, { href: "/guides/games-guide", label: "Games guide" }],
  download: [{ href: "/download", label: "Download" }, { href: "/guides/mobile-guide", label: "Mobile guide" }],
  payments: [{ href: "/payment-methods", label: "Payment methods" }, { href: "/deposit", label: "Deposit" }],
  withdrawals: [{ href: "/withdrawal", label: "Withdrawal" }, { href: "/guides/withdrawal-guide", label: "Withdrawal guide" }],
  mobile: [{ href: "/download", label: "Download" }, { href: "/guides/iphone-guide", label: "iPhone guide" }],
  security: [{ href: "/guides/security-guide", label: "Security guide" }, { href: "/contact", label: "Contact" }],
  promotions: [{ href: "/promotions", label: "Promotions" }, { href: "/guides/promotions-guide", label: "Promotions guide" }],
  agent: [{ href: "/agent", label: "Agent" }, { href: "/contact", label: "Contact" }],
  slots: [{ href: "/games/slots", label: "Slots" }, { href: "/guides/slots-guide", label: "Slots guide" }],
  live: [{ href: "/games/live-casino", label: "Live casino" }, { href: "/guides/live-casino-guide", label: "Live casino guide" }],
  sports: [{ href: "/games/sports", label: "Sports" }, { href: "/guides/sports-guide", label: "Sports guide" }],
  esports: [{ href: "/games/esports", label: "Esports" }, { href: "/guides/esports-guide", label: "Esports guide" }],
  lottery: [{ href: "/games/4d", label: "4D" }, { href: "/guides/lottery-guide", label: "4D guide" }],
  fishing: [{ href: "/games/fishing", label: "Fishing" }, { href: "/guides/fishing-guide", label: "Fishing guide" }],
  vip: [{ href: "/vip", label: "VIP" }, { href: "/promotions", label: "Promotions" }],
  responsible: [{ href: "/responsible-gaming", label: "Responsible gaming" }, { href: "/guides/responsible-gaming-guide", label: "Limits guide" }],
  support: [{ href: "/contact", label: "Contact" }, { href: "/faq", label: "FAQ" }],
};

export default function FaqPage() {
  const entities = faqGroups.flatMap((group) => group.items);
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "FAQ" }]} />
      <section className="hub-hero">
        <div>
          <p className="tag">Help</p>
          <h1>FAQ</h1>
          <p>Answers drawn from the public E9WIN pages, grouped by the task you are trying to finish. Where a fact is not published, the answer says so.</p>
        </div>
        <img src="/images/brand/scene-account.webp" alt="A quiet desk beside a night window" width={1600} height={760} />
      </section>
      <VisualSplit src="/images/brand/scene-slots.webp" alt="Gates of Olympus on a display in a dark private room" reverse>
        <h2>How to use this page</h2>
        <p>Start with the group that matches the task: an account, a game category, a payment, a promotion, or membership. Each answer points at the page that carries the longer explanation.</p>
        <p>The player lobby still decides a stake, a cashier limit, and a campaign card. This page does not replace those screens.</p>
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
