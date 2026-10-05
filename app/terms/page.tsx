import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "E9WIN Terms",
  description: "Terms for using the E9WIN information website and the player-account rules described publicly.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="container page-hero prose">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Terms" }]} />
      <section className="hub-hero">
        <div>
          <p className="tag">Legal</p>
          <h1>Terms</h1>
          <p>These notes describe what this information website is for. Playing, deposits, and withdrawals follow the rules shown in the player lobby at the time you use them.</p>
        </div>
        <img src="/images/brand/scene-account.webp" alt="A quiet desk beside a night window" width={1600} height={760} />
      </section>
      <h2>What this website is</h2>
      <p>This website explains E9WIN products. Playing, deposits, and withdrawals are handled in the player lobby and follow the rules shown there at the time you use them.</p>
      <h2>Who can use it</h2>
      <p>You must be 18 or older. You are responsible for the accuracy of the name, mobile number, and payout details you submit. One person should keep one account.</p>
      <h2>Promotions</h2>
      <p>Promotions have their own turnover and eligibility rules. Those rules on the campaign card control the offer. Nothing on this website changes them.</p>
      <h2>Game results</h2>
      <p>Game results are decided by the game provider. This website does not operate the tables or guarantee outcomes.</p>
      <h2>What is not published</h2>
      <p>A company registration number and governing law are not published on the source pages, so they are not added here.</p>
      <p><Link href="/privacy">Privacy</Link> · <Link href="/responsible-gaming">Responsible gaming</Link> · <Link href="/contact">Contact</Link></p>
    </div>
  );
}
