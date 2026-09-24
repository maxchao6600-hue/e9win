import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { promotions } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "E9WIN Promotions",
  description: "E9WIN promotion types for welcome play, slots, rebates, birthdays, referrals, and missions. Confirm live terms in your account.",
  path: "/promotions",
});

export default function PromotionsPage() {
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Promotions" }]} />
      <h1>Promotions</h1>
      <p>E9WIN publishes welcome, daily, rebate, birthday, referral, and mission campaigns. A public set of cards was dated through the end of 2024. Those dates have passed, so amounts are not repeated here as current offers.</p>
      <div className="guide-grid">
        {promotions.map((item) => (
          <article className="promo" key={item.id}>
            <p className="tag">{item.category}</p>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      <div className="section prose">
        <h2>Before you opt in</h2>
        <ul className="steps">
          <li>Read the minimum, the product list, and the turnover on that campaign card.</li>
          <li>Some offers ask for a verified phone number and bank details.</li>
          <li>Offers are limited per person. The card states the rule.</li>
        </ul>
        <p><Link href="/guides/how-to-register">Create an account</Link> to see the live list, or read the <Link href="/faq">FAQ</Link>.</p>
      </div>
    </div>
  );
}
