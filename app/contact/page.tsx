import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact E9WIN",
  description: "Contact E9WIN on the published WhatsApp and Facebook channels, or through in-lobby chat.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Contact" }]} />
      <h1>Contact</h1>
      <p>Reach E9WIN on WhatsApp or Facebook. After you sign in, live chat is also available in the lobby. No public email or phone number is listed.</p>
      <div className="split section">
        <article className="panel">
          <h2>WhatsApp</h2>
          <p>The site links to a WhatsApp chat for E9WIN support.</p>
          <a className="btn btn-primary" href={siteConfig.support.whatsapp}>Open WhatsApp</a>
        </article>
        <article className="panel">
          <h2>Facebook</h2>
          <p>The Facebook profile linked from the E9WIN footer.</p>
          <a className="btn btn-ghost" href={siteConfig.support.facebook}>Open Facebook</a>
        </article>
      </div>
      <p>Signed-in players are also pointed to live chat inside the lobby for login, deposit, and withdrawal help.</p>
    </div>
  );
}
