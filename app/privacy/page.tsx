import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy",
  description: "How the E9WIN information site handles the details you type into login and register forms.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="container page-hero prose">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Privacy" }]} />
      <h1>Privacy</h1>
      <p>Login and register forms on this site run in your browser. They do not send the form to a server operated by this website. If you continue to the player portal, that portal’s own privacy rules apply.</p>
      <p>Do not send passwords through WhatsApp or Facebook. Support may ask for a username and a payment receipt when you report a deposit.</p>
      <p>This site does not sell visitor lists. A full corporate privacy notice, including a data controller address, is not published on the source pages used here.</p>
    </div>
  );
}
