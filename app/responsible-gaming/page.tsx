import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CopySections, FaqBlock, RelatedLinks } from "@/components/content/CopySections";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Responsible Gaming",
  description: "Age limit, spending control, and support notes for E9WIN players.",
  path: "/responsible-gaming",
});

export default function ResponsiblePage() {
  return (
    <div className="container page-hero prose">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Responsible gaming" }]} />
      <h1>Responsible gaming</h1>
      <p>E9WIN is for adults aged 18 and over. Gambling can be addictive. Only use money you can afford to lose, and treat play as entertainment.</p>
      <h2>Keep control of the account</h2>
      <ul className="steps">
        <li>Set a budget before you deposit.</li>
        <li>Do not chase losses.</li>
        <li>Take breaks, and do not play when you are upset or drinking.</li>
        <li>The platform describes deposit limits and self-exclusion as account tools. Use them in the lobby if they are offered on your account.</li>
      </ul>
      <h2>If play stops being fun</h2>
      <p>Stop depositing and message support on <a href={siteConfig.support.whatsapp}>WhatsApp</a> to ask about account limits. For personal help in Malaysia, contact a local counselling service you trust.</p>
      <CopySections sections={[
        {
          title: "What gambling can do",
          paragraphs: [
            "Play can continue longer than you planned, especially when a result feels close. That is a reason to decide the budget before the session, not a reason this page can diagnose a condition.",
          ],
        },
        {
          title: "Signs to pause",
          paragraphs: [
            "Pause if you are depositing to recover a loss, hiding play, or using money meant for rent or food. Those are practical warning signs, not a medical checklist.",
          ],
        },
        {
          title: "Tools the platform describes",
          paragraphs: [
            "Deposit limits and self-exclusion are described as account tools when the lobby offers them. This website cannot switch them on. Ask support on WhatsApp if you need the next step.",
          ],
        },
        {
          title: "Help outside the platform",
          paragraphs: [
            "For personal support in Malaysia, use a counselling service you trust. Befrienders is a listening service with a public site at befrienders.org.my. This page does not provide therapy and does not claim a treatment outcome.",
          ],
        },
      ]} />
      <FaqBlock items={[
        { q: "Is E9WIN for under 18s?", a: "No. The platform is for adults aged 18 and over." },
        { q: "Can this page set a deposit limit?", a: "No. Limits, when offered, are account tools in the lobby." },
      ]} />
      <section className="topic">
        <h2>Related</h2>
        <RelatedLinks links={[
          { href: "/guides/responsible-gaming-guide", label: "Limits guide" },
          { href: "/deposit", label: "Deposit" },
          { href: "/contact", label: "Contact" },
          { href: "/terms", label: "Terms" },
        ]} />
      </section>
      <p><Link href="/terms">Terms</Link> · <Link href="/contact">Contact</Link></p>
    </div>
  );
}
