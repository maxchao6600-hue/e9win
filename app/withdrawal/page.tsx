import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AnchoredSections } from "@/components/content/AnchoredSections";
import { FaqBlock, RelatedLinks } from "@/components/content/CopySections";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "E9WIN Withdrawal",
  description: "Withdraw from E9WIN to a matching bank or e-wallet. Processing time is not guaranteed.",
  path: "/withdrawal",
});

const faq = [
  { q: "Which banks can receive a withdrawal?", a: "The payment strip shows Maybank, CIMB, Public Bank, RHB, Hong Leong, AmBank, and BSN, plus the listed e-wallets. The cashier confirms what your account can use." },
  { q: "Can I withdraw to someone else?", a: "Use an account in the same name as the E9WIN profile. A friend-credit transfer is a separate cashier action, not a bank withdrawal." },
];

export default function WithdrawalPage() {
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Withdrawal" }]} />
      <section className="hub-hero">
        <div>
          <p className="tag">Cashier</p>
          <h1>Withdrawal</h1>
          <p>Withdrawals use the bank and e-wallet methods shown for E9WIN. The payout name should match the account. A processing time is not published.</p>
        </div>
        <img src="/images/brand/scene-account.webp" alt="A quiet desk beside a night window" width={1600} height={760} />
      </section>
      <section className="section prose">
      <h2>How a withdrawal is requested</h2>
      <ol className="steps">
        <li>Sign in and open Withdrawal or Cash Out.</li>
        <li>Choose bank transfer or an e-wallet.</li>
        <li>Enter an amount inside the limits shown in the cashier.</li>
        <li>Confirm any extra verification the lobby asks for.</li>
        <li>Check the withdrawal history and your email notification.</li>
      </ol>
      </section>
      <div className="panel section">
        <h2>Notes</h2>
        <p>Turnover on an active promotion can block a withdrawal until that requirement is met. The campaign card states the rule. This site does not promise a processing time.</p>
        <p><Link href="/guides/withdrawal-guide">Withdrawal guide</Link> · <Link href="/contact">Support</Link></p>
      </div>
      <div className="prose">
        <AnchoredSections sections={[
          {
            title: "What can receive the payout",
            paragraphs: [
              "The same banks and e-wallets shown for deposits are the published set. The cashier confirms which of them your account can use.",
            ],
          },
          {
            title: "Before you submit",
            paragraphs: [
              "Open the cashier and read the limit on that screen. This website does not print a minimum, a maximum, or a processing time.",
              "If a promotion is active, read its card first. Turnover stated there can hold a request. The card is the rule.",
            ],
          },
          {
            title: "If the payout fails",
            paragraphs: [
              "Check the withdrawal history before you submit a second request. Message WhatsApp with the username and the amount. Do not send the password, and do not switch the payout to a different person’s account to make it faster.",
            ],
          },
          {
            title: "Why a request can wait",
            paragraphs: [
              "A name that does not match the profile, a missing verification step, or turnover on an active promotion can hold a request. The promotion card states its own rule. This page does not add a clock to it.",
            ],
          },
        ]} scenes={[
          { src: "/images/brand/scene-payments.webp", alt: "A card and a phone on a dark cashier counter" },
          { src: "/images/brand/scene-devices.webp", alt: "A phone and a laptop on a dark marble desk" },
        ]} />
        <section className="topic">
          <h2>Related</h2>
          <RelatedLinks links={[
            { href: "/payment-methods", label: "Payment methods" },
            { href: "/deposit", label: "Deposit" },
            { href: "/guides/withdrawal-guide", label: "Withdrawal guide" },
            { href: "/promotions", label: "Promotions" },
            { href: "/contact", label: "Contact" },
          ]} />
        </section>
      </div>
      <FaqBlock items={faq} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }} />
    </div>
  );
}
