import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CopySections, FaqBlock, RelatedLinks } from "@/components/content/CopySections";
import { JsonLd } from "@/components/seo/JsonLd";
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
      <p>Welcome, daily slot, rebate, birthday, referral, and mission campaigns are named on the rewards desk. The active amount, turnover, and eligibility are on the account card. This page does not reprint expired percentages as current offers.</p>
      <div className="prose">
        <CopySections sections={[
          {
            title: "How promotions are published",
            paragraphs: [
              "A campaign on this website is a name and a short description. The homepage slider shows four of those names with stills. Birthday and missions stay in the list below because they do not have homepage artwork.",
              "Older campaign windows that were dated on the public site have closed. They are not relabelled as live offers.",
            ],
          },
          {
            title: "What to check before you opt in",
            paragraphs: [
              "Open the card in the account and read the product list. A slot campaign may not include live tables or 4D. The card is the rule.",
            ],
            list: [
              "Whether you must opt in before you play.",
              "Which products count.",
              "Any turnover the card states.",
              "Whether a verified phone number or bank profile is required.",
            ],
          },
          {
            title: "Welcome, games, and rebate",
            paragraphs: [
              "Welcome campaigns are for new players and name slots, live casino, and sports. Daily and extra slot campaigns point at the slots desk. Rebate is published as a campaign type; the rate is on the offer, not assumed here.",
              "Referral uses the share link in the profile after login. Birthday depends on a date of birth saved on the account. Missions and redeem codes are entered in the lobby when a campaign is active.",
            ],
          },
          {
            title: "Eligibility",
            paragraphs: [
              "Offers can be limited per person. The card states that rule. This website does not promise that every account sees every campaign.",
            ],
          },
        ]} />
        <FaqBlock items={[
          { q: "Where is the percentage?", a: "On the account card for the campaign that is open. It is not copied here." },
          { q: "Can I use a 2024 campaign figure?", a: "No. Closed windows are not current offers." },
          { q: "Does the slider replace the account?", a: "No. The slider introduces the campaign type. The card is the offer." },
        ]} />
        <section className="topic">
          <h2>Related</h2>
          <RelatedLinks links={[
            { href: "/guides/promotions-guide", label: "How to read a promotion" },
            { href: "/games/slots", label: "Slots" },
            { href: "/deposit", label: "Deposit" },
            { href: "/guides/account-guide", label: "Account guide" },
          ]} />
        </section>
      </div>
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
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Where is the percentage?", acceptedAnswer: { "@type": "Answer", text: "On the account card for the campaign that is open. It is not copied here." } },
          { "@type": "Question", name: "Can I use a 2024 campaign figure?", acceptedAnswer: { "@type": "Answer", text: "No. Closed windows are not current offers." } },
        ],
      }} />
    </div>
  );
}
