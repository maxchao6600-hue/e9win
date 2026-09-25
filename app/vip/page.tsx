import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { pageMeta } from "@/lib/seo";
import { pageScenes } from "@/lib/scenes";

export const metadata: Metadata = pageMeta({
  title: "E9WIN VIP",
  description: "How E9WIN VIP is described: membership recognition, rewards desk access, and support. No unpublished tier amounts.",
  path: "/vip",
});

const points = [
  { title: "Named on the rewards desk", text: "VIP sits with rebates, referral earning, daily missions, and redeem codes on the E9WIN promotions index." },
  { title: "Account first", text: "VIP treatment is tied to a real player account. Sign in, keep your profile complete, and use the rewards area in the lobby." },
  { title: "Support through published channels", text: "Agents and customer support help with login, deposits, and withdrawals. Public contact is WhatsApp and Facebook." },
  { title: "No invented ladder", text: "The public site does not print VIP levels, point targets, or cash benefits. Those figures are omitted until E9WIN publishes them." },
];

export default function VipPage() {
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "VIP" }]} />
      <h1>VIP</h1>
      <p>VIP sits with the rewards desk: missions, rebates, and account notices. Levels and cash values are confirmed in your account, so they are not listed here.</p>
      <figure className="scene-banner">
        <img src={pageScenes.vip.src} alt={pageScenes.vip.alt} width={1280} height={720} />
      </figure>
      <div className="info-grid section">
        {points.map((point) => (
          <article className="panel" key={point.title}><h2>{point.title}</h2><p>{point.text}</p></article>
        ))}
      </div>
      <div className="split">
        <article className="panel">
          <h2>How VIP works</h2>
          <ol className="steps">
            <li>Register and verify the mobile number and payout details the lobby requests.</li>
            <li>Play the products you already use: slots, live tables, sports, or lottery.</li>
            <li>Open the rewards area for missions, rebates, and any VIP notice on the account.</li>
            <li>Ask support if a VIP invitation is mentioned in the lobby and you need the next step.</li>
          </ol>
        </article>
        <article className="panel faq">
          <h2>FAQ</h2>
          <details><summary>Are VIP cash amounts listed?</summary><p>No public figure is available, so none is shown.</p></details>
          <details><summary>Is VIP Baccarat the same as VIP membership?</summary><p>VIP Baccarat is a Playtech live table. Membership VIP is a separate rewards label.</p></details>
          <Link className="btn btn-primary" href="/register">Register</Link>
        </article>
      </div>
    </div>
  );
}
