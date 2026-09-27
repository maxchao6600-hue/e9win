import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqBlock, RelatedLinks } from "@/components/content/CopySections";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact E9WIN | WhatsApp and Facebook Support",
  description: "Contact E9WIN on WhatsApp or Facebook. No public email or phone number is listed. In-lobby chat is available after sign-in.",
  path: "/contact",
});

const topics = [
  { title: "Registration", text: "If the form will not submit, check the required fields, then continue in the player lobby.", href: "/guides/how-to-register", label: "Registration guide" },
  { title: "Login", text: "This website does not keep a session. Password recovery is in the lobby. Send support the username, not the password.", href: "/guides/how-to-login", label: "Login guide" },
  { title: "Payments", text: "Bring the receipt and the username if a deposit has not appeared. Do not pay an account number from a chat.", href: "/payment-methods", label: "Payment methods" },
  { title: "Games", text: "Covers on this site are not the live stake screen. Open the title in the lobby for rules and limits.", href: "/games", label: "Games" },
  { title: "Promotions", text: "Amounts and turnover live on the account card. Closed campaign windows are not current offers.", href: "/guides/promotions-guide", label: "Promotion guide" },
  { title: "Agent", text: "Ask support for agent setup. Commission is not quoted on the public page.", href: "/agent", label: "Agent" },
  { title: "Mobile access", text: "Use the browser, an iPhone home-screen icon, or the Android portal link. There is no store listing.", href: "/download", label: "Download" },
];

const faq = [
  { q: "Is there a published email or phone number?", a: "No. Use WhatsApp or the Facebook page. In-lobby chat is available after you sign in." },
  { q: "How fast does support reply?", a: "A response time is not published. Use the channels above and include your username." },
];

export default function ContactPage() {
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Contact" }]} />
      <h1>Contact</h1>
      <p>Public support is WhatsApp and Facebook. After you sign in, live chat is also in the lobby. No other contact is published here.</p>
      <div className="split section">
        <article className="panel">
          <h2>WhatsApp</h2>
          <p>The published WhatsApp chat for E9WIN support.</p>
          <a className="btn btn-primary" href={siteConfig.support.whatsapp}>Open WhatsApp</a>
        </article>
        <article className="panel">
          <h2>Facebook</h2>
          <p>The Facebook profile linked from the E9WIN footer.</p>
          <a className="btn btn-ghost" href={siteConfig.support.facebook}>Open Facebook</a>
        </article>
      </div>
      <div className="guide-grid">
        {topics.map((topic) => (
          <article className="panel" key={topic.title}>
            <h2>{topic.title}</h2>
            <p>{topic.text}</p>
            <p><Link href={topic.href}>{topic.label}</Link></p>
          </article>
        ))}
      </div>
      <div className="prose section">
        <FaqBlock items={faq} />
        <section className="topic">
          <h2>Related</h2>
          <RelatedLinks links={[
            { href: "/faq", label: "FAQ" },
            { href: "/guides/security-guide", label: "Account safety" },
            { href: "/responsible-gaming", label: "Responsible gaming" },
          ]} />
        </section>
      </div>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }} />
    </div>
  );
}
