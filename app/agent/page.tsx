import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "E9WIN Agent",
  description: "How the E9WIN agent path works: downline players, referral sharing, and support. No commission rate is published.",
  path: "/agent",
});

export default function AgentPage() {
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Agent" }]} />
      <h1>Agent</h1>
      <p>E9WIN invites members to become agents and work with downline players. The public page does not state a commission percentage, so this page does not invent one or promise income.</p>
      <div className="info-grid section">
        <article className="panel"><h2>Downline players</h2><p>An agent account is described as earning commission from downline play. The calculation stays in the agent tools.</p></article>
        <article className="panel"><h2>Cashier tools</h2><p>The agent page mentions an automatic flow for top-up and withdrawal together with the player system.</p></article>
        <article className="panel"><h2>Share link</h2><p>Members are told to copy a referral link from the profile Share area after login.</p></article>
        <article className="panel"><h2>Apply with support</h2><p>The published next step is to contact E9WIN. Use WhatsApp or Facebook. There is no public application fee.</p></article>
      </div>
      <div className="split">
        <article className="panel">
          <h2>Registration process</h2>
          <ol className="steps">
            <li>Open a player account if you do not have one.</li>
            <li>Message support and ask for the agent or affiliate setup.</li>
            <li>Create the downline account using the steps support provides.</li>
            <li>Share only the referral link from your profile.</li>
          </ol>
          <a className="btn btn-primary" href={siteConfig.support.whatsapp}>Contact on WhatsApp</a>
        </article>
        <article className="panel faq">
          <h2>FAQ</h2>
          <details><summary>Is a commission rate published?</summary><p>No. The page says commission exists and does not print a number.</p></details>
          <details><summary>Does becoming an agent guarantee earnings?</summary><p>No. Earnings depend on downline activity and the unpublished commission rules.</p></details>
          <p><Link href="/guides/account-guide">Account guide</Link></p>
        </article>
      </div>
    </div>
  );
}
