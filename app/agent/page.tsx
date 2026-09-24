import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "E9WIN Agent | Agent and Referral Information",
  description: "How the E9WIN agent path works: downline players, referral sharing, account tools, and support.",
  path: "/agent",
});

const points = [
  { n: "01", title: "Downline players", text: "Agents work with players who join through their referral. Commission follows downline play. The rate is confirmed in the agent setup, not quoted here." },
  { n: "02", title: "Account tools", text: "Top-up and withdrawal for the network sit in the same cashier flow as the player account." },
  { n: "03", title: "Referral link", text: "After login, open your profile and copy the link under Share. Friends register through that link." },
  { n: "04", title: "Apply with support", text: "Message WhatsApp or Facebook to start. There is no published application fee." },
];

export default function AgentPage() {
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Agent" }]} />
      <p className="kicker">Partners</p>
      <h1>Agent</h1>
      <p>Introduce players to E9WIN and work with a downline. Commission details are provided through the agent support process. Earnings are not guaranteed.</p>
      <div className="info-grid section">
        {points.map((point) => (
          <article className="panel" key={point.n}>
            <p className="tag">{point.n}</p>
            <h2>{point.title}</h2>
            <p>{point.text}</p>
          </article>
        ))}
      </div>
      <div className="split">
        <article className="panel">
          <h2>How to apply</h2>
          <ol className="steps">
            <li>Open a player account if you do not have one.</li>
            <li>Message support and ask for agent setup.</li>
            <li>Follow the downline steps support sends you.</li>
            <li>Share only the referral link from your profile.</li>
          </ol>
          <a className="btn btn-primary" href={siteConfig.support.whatsapp}>WhatsApp support</a>
        </article>
        <article className="panel faq">
          <h2>FAQ</h2>
          <details><summary>Is a commission rate listed?</summary><p>No. Support confirms the rate during setup.</p></details>
          <details><summary>Are earnings guaranteed?</summary><p>No. Results depend on downline activity and the rules you receive.</p></details>
          <p><Link href="/guides/account-guide">Account guide</Link> · <Link href="/contact">Contact</Link></p>
        </article>
      </div>
    </div>
  );
}
