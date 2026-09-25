import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CopySections, RelatedLinks } from "@/components/content/CopySections";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "E9WIN Withdrawal",
  description: "Withdraw from E9WIN to a matching bank or e-wallet. Processing time is not guaranteed.",
  path: "/withdrawal",
});

export default function WithdrawalPage() {
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Withdrawal" }]} />
      <h1>Withdrawal</h1>
      <p>Withdrawals use the bank and e-wallet methods shown for E9WIN. The payout name should match the account.</p>
      <ol className="steps">
        <li>Sign in and open Withdrawal or Cash Out.</li>
        <li>Choose bank transfer or an e-wallet.</li>
        <li>Enter an amount inside the limits shown in the cashier.</li>
        <li>Confirm any extra verification the lobby asks for.</li>
        <li>Check the withdrawal history and your email notification.</li>
      </ol>
      <div className="panel section">
        <h2>Notes</h2>
        <p>Turnover on an active promotion can block a withdrawal until that requirement is met. The campaign card states the rule. This site does not promise a processing time.</p>
        <p><Link href="/guides/withdrawal-guide">Withdrawal guide</Link> · <Link href="/contact">Support</Link></p>
      </div>
      <div className="prose">
        <CopySections sections={[
          {
            title: "What can receive the payout",
            paragraphs: [
              "The same banks and e-wallets shown for deposits are the published set. The cashier confirms which of them your account can use.",
            ],
          },
          {
            title: "Why a request can wait",
            paragraphs: [
              "A name that does not match the profile, a missing verification step, or turnover on an active promotion can hold a request. The promotion card states its own rule. This page does not add a clock to it.",
            ],
          },
        ]} />
        <section className="topic">
          <h2>Related</h2>
          <RelatedLinks links={[
            { href: "/deposit", label: "Deposit" },
            { href: "/guides/withdrawal-guide", label: "Withdrawal guide" },
            { href: "/promotions", label: "Promotions" },
            { href: "/contact", label: "Contact" },
          ]} />
        </section>
      </div>
      <div className="faq">
        <h2>FAQ</h2>
        <details><summary>Which banks can receive a withdrawal?</summary><p>The payment strip shows Maybank, CIMB, Public Bank, RHB, Hong Leong, AmBank, and BSN, plus the listed e-wallets. The cashier confirms what your account can use.</p></details>
        <details><summary>Can I withdraw to someone else?</summary><p>Use an account in the same name as the E9WIN profile. A friend-credit transfer is a separate cashier action, not a bank withdrawal.</p></details>
      </div>
    </div>
  );
}
