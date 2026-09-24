import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { pageMeta } from "@/lib/seo";
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
      <div className="split section">
        <article className="panel">
          <h2>Android</h2>
          <p>Start the Android install from the player portal linked here. Do not use a file from another site.</p>
          <a className="btn btn-primary" href={siteConfig.playerPortal}>Download now</a>
        </article>
        <article className="panel">
          <h2>iOS</h2>
          <p>Open the site in Safari, tap Share, then Add to Home Screen. The icon opens the web lobby.</p>
          <img src="/images/mobile/qr.webp" alt="QR code published on the E9WIN download page" width={180} height={180} />
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
      <div className="faq prose">
        <h2>FAQ</h2>
        <details><summary>What are the system requirements?</summary><p>E9WIN does not publish a device list. A current phone browser is enough for the web lobby.</p></details>
        <details><summary>Does the web version update itself?</summary><p>The official description says the web lobby updates when you load it, without a manual patch.</p></details>
        <p>More detail is in the <Link href="/guides/how-to-download">download guide</Link>.</p>
      </div>
    </div>
  );
}
