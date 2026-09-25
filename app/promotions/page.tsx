import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { promotions } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "E9WIN Promotions | Current Offers and Campaigns",
  description: "E9WIN campaigns for welcome play, slots, rebates, birthdays, referrals, and missions. Check your account for the active amount and terms.",
  path: "/promotions",
});

export default function PromotionsPage() {
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Promotions" }]} />
      <p className="kicker">Campaigns</p>
      <h1>Promotions</h1>
      <p>Welcome, daily slot, rebate, birthday, referral, and mission campaigns are part of the E9WIN rewards desk. Check the current campaign card in your account for the active amount, terms, and eligibility.</p>
      <div className="guide-grid section">
        {promotions.map((item, index) => (
          <article className="promo" key={item.id}>
            {item.image ? <img className="promo-art" src={item.image} alt="" width={1280} height={720} /> : null}
            <p className="tag">{String(index + 1).padStart(2, "0")} · {item.category}</p>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Link className="btn btn-line" href="/register">View in account</Link>
          </article>
        ))}
      </div>
      <div className="split">
        <article className="panel">
          <h2>Before you opt in</h2>
          <ol className="steps">
            <li>Read the minimum, the product list, and the turnover on that card.</li>
            <li>Some offers ask for a verified phone number and bank details.</li>
            <li>Offers are limited per person. The card states the rule.</li>
          </ol>
        </article>
        <article className="panel">
          <h2>Where to go next</h2>
          <p>Create an account to see the live list, or read the answers on payments and promotions.</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/register">Register now</Link>
            <Link className="btn btn-ghost" href="/faq">FAQ</Link>
          </div>
        </article>
      </div>
    </div>
  );
}
