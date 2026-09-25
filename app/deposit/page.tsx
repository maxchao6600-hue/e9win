import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CopySections, FaqBlock, RelatedLinks } from "@/components/content/CopySections";
import { depositMethods, payments } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "E9WIN Deposit",
  description: "Deposit to E9WIN by instant transfer, e-wallet, bank transfer, telco PIN, or USDT.",
  path: "/deposit",
});

export default function DepositPage() {
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Deposit" }]} />
      <h1>Deposit</h1>
      <p>The cashier covers instant transfer, e-wallet, telco PIN, bank transfer, USDT, and sending credit to a friend.</p>
      <div className="pay-grid section">
        {payments.map((item) => (
          <div className="pay" key={item.id}><img src={item.image} alt={item.name} /></div>
        ))}
      </div>
      <div className="guide-grid">
        {depositMethods.map((method) => (
          <article className="panel" key={method.title}><h2>{method.title}</h2><p>{method.text}</p></article>
        ))}
      </div>
      <div className="section prose">
        <h2>Steps</h2>
        <ol className="steps">
          <li>Sign in and open Top Up.</li>
          <li>Pick the method and copy the account, reference, or wallet address on screen.</li>
          <li>Pay that exact instruction. Do not reuse an old account number from a screenshot.</li>
          <li>Keep the receipt until the wallet updates.</li>
        </ol>
        <p>Processing time is not published as a guarantee. See the <Link href="/guides/deposit-guide">deposit guide</Link> or <Link href="/contact">contact support</Link>.</p>
      </div>
      <div className="prose">
        <CopySections sections={[
          {
            title: "Banks and e-wallets",
            paragraphs: [
              "The marks on this page are the published set: Maybank, CIMB, Public Bank, RHB, Hong Leong, AmBank, BSN, Touch 'n Go, Boost, GrabPay, ShopeePay, and USDT.",
              "Instant transfer, manual bank transfer, telco PIN, and credit to a friend are cashier paths. The accepted PIN brands and the USDT network are shown in the cashier, not guessed here.",
            ],
          },
          {
            title: "If the credit is missing",
            paragraphs: [
              "Compare the amount and the reference with the receipt. Message support with the username. Do not send a password, and do not pay a new account number that arrived in a chat.",
            ],
          },
          {
            title: "Safety",
            paragraphs: [
              "The instruction on the cashier at the moment you pay is the one that counts. A screenshot from last month can be wrong. Withdrawals are a separate page and must match the profile name.",
            ],
          },
        ]} />
        <FaqBlock items={[
          { q: "Is a minimum deposit listed?", a: "No. The cashier shows the limits for the method you pick." },
          { q: "How long does a deposit take?", a: "A time is not guaranteed. It depends on the method." },
        ]} />
        <section className="topic">
          <h2>Related</h2>
          <RelatedLinks links={[
            { href: "/withdrawal", label: "Withdrawal" },
            { href: "/guides/deposit-guide", label: "Deposit guide" },
            { href: "/guides/withdrawal-guide", label: "Withdrawal guide" },
            { href: "/responsible-gaming", label: "Responsible gaming" },
          ]} />
        </section>
      </div>
    </div>
  );
}
