import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
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
      <p><Link href="/terms">Terms</Link> · <Link href="/contact">Contact</Link></p>
    </div>
  );
}
