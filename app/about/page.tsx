import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About E9WIN",
  description: "What E9WIN publishes about its Malaysia gaming lobby, games, and support.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="container page-hero prose">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "About" }]} />
      <h1>About E9WIN</h1>
      <p>E9WIN is a Malaysia-facing online gaming lobby. The public site describes slots, live casino, sports betting, 4D lottery, fishing games, and esports, with play on mobile web, an Android download, or an iPhone home-screen shortcut.</p>
      <p>The game catalog shown here uses titles that appear in the public E9WIN game list, including Pragmatic Play, Evolution, Playtech, and Lucky365. Payment marks include major Malaysian banks, e-wallets, and USDT.</p>
      <p>Company history, licences, offices, and ownership are not stated here because they are not part of the published product information.</p>
      <p><Link href="/contact">Contact</Link> · <Link href="/responsible-gaming">Responsible gaming</Link></p>
    </div>
  );
}
