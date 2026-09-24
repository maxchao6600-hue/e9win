import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms",
  description: "Terms for using the E9WIN information website and player account rules described publicly.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="container page-hero prose">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Terms" }]} />
      <h1>Terms</h1>
      <p>This website explains E9WIN products. Playing, deposits, and withdrawals are handled in the player lobby and follow the rules shown there at the time you use them.</p>
      <p>You must be 18 or older. You are responsible for the accuracy of the name, mobile number, and payout details you submit. One person should keep one account.</p>
      <p>Promotions have their own turnover and eligibility rules. Those rules on the campaign card control the offer. Nothing on this website changes them.</p>
      <p>Game results are decided by the game provider. This website does not operate the tables or guarantee outcomes.</p>
      <p>A company registration number and governing law are not published on the source pages, so they are not added here.</p>
    </div>
  );
}
