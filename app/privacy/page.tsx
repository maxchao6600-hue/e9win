import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "E9WIN Privacy",
  description: "How the E9WIN information site handles the details you type into login and register forms.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="container page-hero prose">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Privacy" }]} />
      <section className="hub-hero">
        <div>
          <p className="tag">Legal</p>
          <h1>Privacy</h1>
          <p>This page describes the forms on this information site and the support channels that are published. It does not add a corporate privacy notice that the source pages do not contain.</p>
        </div>
        <img src="/images/brand/scene-account.webp" alt="A quiet desk beside a night window" width={1600} height={760} />
      </section>
      <h2>Forms on this website</h2>
      <p>Login and register forms on this site run in your browser. They do not send the form to a server operated by this website. If you continue to the player portal, that portal’s own privacy rules apply.</p>
      <h2>Support messages</h2>
      <p>Do not send passwords through WhatsApp or Facebook. Support may ask for a username and a payment receipt when you report a deposit.</p>
      <h2>What is not published</h2>
      <p>This site does not sell visitor lists. A full corporate privacy notice, including a data controller address, is not published on the source pages used here.</p>
      <p><Link href="/terms">Terms</Link> · <Link href="/guides/security-guide">Account safety</Link> · <Link href="/contact">Contact</Link></p>
    </div>
  );
}
