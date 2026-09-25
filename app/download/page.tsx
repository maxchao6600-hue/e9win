import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CopySections, FaqBlock, RelatedLinks } from "@/components/content/CopySections";
import { pageMeta } from "@/lib/seo";
import { pageScenes } from "@/lib/scenes";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "E9WIN Download | Android, iOS and Mobile Web",
  description: "Get E9WIN on Android, add it to an iPhone home screen, or play in the mobile browser.",
  path: "/download",
});

export default function DownloadPage() {
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Download" }]} />
      <h1>Download</h1>
      <p>Use Android download, an iPhone home-screen icon, or the browser lobby. The documented path does not include an App Store or Google Play listing.</p>
      <figure className="scene-banner">
        <img src={pageScenes.download.src} alt={pageScenes.download.alt} width={1280} height={720} />
      </figure>
      <div className="prose">
        <CopySections sections={[
          {
            title: "Three ways onto the lobby",
            paragraphs: [
              "Desktop and mobile web need no install. iPhone uses Safari’s Add to Home Screen. Android uses the download that opens the player portal from this page.",
            ],
            list: [
              "Do not look for an App Store or Google Play listing. None is documented.",
              "Do not install a file that did not come from the portal link.",
              "Sign in with the same username after the lobby opens.",
            ],
          },
          {
            title: "After the lobby opens",
            paragraphs: [
              "The web version is described as updating when you load it, without a manual patch. Game rules and the cashier are inside that lobby, not in a separate desktop program.",
            ],
          },
          {
            title: "If access fails",
            paragraphs: [
              "Reload on a current Chrome or Safari build and a stable connection. E9WIN does not publish a device matrix. If the portal link fails, use WhatsApp support rather than a third-party download site.",
            ],
          },
        ]} />
        <FaqBlock items={[
          { q: "What are the system requirements?", a: "A device list is not published. A current phone browser is enough for the web lobby." },
          { q: "Does the web version update itself?", a: "The official description says the web lobby updates when you load it." },
        ]} />
        <section className="topic">
          <h2>Related</h2>
          <RelatedLinks links={[
            { href: "/guides/how-to-download", label: "Download guide" },
            { href: "/guides/mobile-guide", label: "Mobile guide" },
            { href: "/guides/how-to-login", label: "How to login" },
            { href: "/games", label: "Games" },
          ]} />
        </section>
      </div>
      <div className="split section">
        <article className="panel">
          <h2>Android</h2>
          <p>Start the Android install from the player portal linked here. Do not use a file from another site.</p>
          <a className="btn btn-primary" href={siteConfig.playerPortal}>Download now</a>
        </article>
        <article className="panel">
          <h2>iOS</h2>
          <p>Open the site in Safari, tap Share, then Add to Home Screen. The icon opens the web lobby.</p>
          <img className="qr-code" src="/images/mobile/qr.webp" alt="QR code published on the E9WIN download page" width={180} height={180} />
        </article>
        <article className="panel">
          <h2>Mobile web</h2>
          <p>The web version runs on Windows, Mac, Linux, iOS, and Android. It uses HTTPS and does not need a desktop install.</p>
          <Link className="btn btn-ghost" href="/login">Login</Link>
        </article>
        <article className="panel">
          <h2>Installation notes</h2>
          <ol className="steps">
            <li>Use the link on this page or the official download page.</li>
            <li>On Android, allow the install only if the file came from that portal.</li>
            <li>On iPhone, the home-screen shortcut is the documented method.</li>
            <li>Sign in with the same username after the lobby opens.</li>
          </ol>
        </article>
      </div>
    </div>
  );
}
