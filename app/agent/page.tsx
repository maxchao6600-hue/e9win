import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CopySections, FaqBlock, RelatedLinks } from "@/components/content/CopySections";
import { pageMeta } from "@/lib/seo";
import { pageScenes } from "@/lib/scenes";
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
      <figure className="scene-banner">
        <img src={pageScenes.agent.src} alt={pageScenes.agent.alt} width={1280} height={720} />
      </figure>
      <div className="prose">
        <CopySections sections={[
          {
            title: "Who it is for",
            paragraphs: [
              "The agent path is for people who introduce players and work with a downline. It is not a job offer and it does not quote income.",
            ],
          },
          {
            title: "How the model is described",
            paragraphs: [
              "Players who join through your referral are the downline. Commission follows their play. The rate is confirmed during setup, not on this page.",
              "Top-up and withdrawal for the network use the same cashier flow as a player account. There is no published application fee.",
            ],
          },
          {
            title: "What you are responsible for",
            paragraphs: [
              "Share only the referral link from your profile after login. Do not invent a bonus to recruit someone. Do not ask a player for their password.",
            ],
          },
        ]} />
        <FaqBlock items={[
          { q: "Is a commission rate listed?", a: "No. Support confirms the rate during setup." },
          { q: "Are earnings guaranteed?", a: "No. Results depend on downline activity and the rules you receive." },
        ]} />
        <section className="topic">
          <h2>Related</h2>
          <RelatedLinks links={[
            { href: "/guides/account-guide", label: "Account guide" },
            { href: "/contact", label: "Contact" },
            { href: "/promotions", label: "Promotions" },
          ]} />
        </section>
      </div>
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
      </div>
    </div>
  );
}
