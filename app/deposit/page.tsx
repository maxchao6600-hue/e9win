import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AnchoredSections } from "@/components/content/AnchoredSections";
import { FaqBlock, RelatedLinks } from "@/components/content/CopySections";
import { JsonLd } from "@/components/seo/JsonLd";
import { depositMethods, payments } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "E9WIN Deposit | Bank, E-Wallet and USDT",
  description: "Deposit to E9WIN by instant transfer, e-wallet, bank transfer, telco PIN, or USDT.",
  path: "/deposit",
});

const faq = [
  { q: "Is a minimum deposit listed?", a: "The cashier shows the limits for the method you pick." },
  { q: "How long does a deposit take?", a: "Timing depends on the method. The cashier status shows when the wallet updates." },
];

export default function DepositPage() {
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Deposit" }]} />
      <section className="hub-hero">
        <div>
          <p className="tag">Cashier</p>
          <h1>E9WIN Deposit</h1>
          <p>E9WIN deposit covers instant transfer, e-wallet, telco PIN, bank transfer, USDT, and sending credit to a friend. The cashier shows the limit and the instruction for that attempt.</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/login">Sign in</Link>
            <Link className="btn btn-line" href="/payment-methods">E9WIN payment methods</Link>
          </div>
        </div>
        <img src="/images/brand/scene-payments.webp" alt="A card and a phone on a dark cashier counter" width={1600} height={760} />
      </section>
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
        <p>The cashier shows the timing for the method you chose. See the <Link href="/guides/deposit-guide">E9WIN deposit guide</Link> or <Link href="/contact">contact support</Link>.</p>
      </div>
      <div className="prose">
        <AnchoredSections sections={[
          {
            title: "Banks and e-wallets",
            paragraphs: [
              "The marks on this page are the published set: Maybank, CIMB, Public Bank, RHB, Hong Leong, AmBank, BSN, Touch 'n Go, Boost, GrabPay, ShopeePay, and USDT.",
              "Instant transfer, manual bank transfer, telco PIN, and credit to a friend are cashier paths. The accepted PIN brands and the USDT network are shown in the cashier, not guessed here.",
            ],
          },
          {
            title: "Choosing a method",
            paragraphs: [
              "Use a bank or e-wallet you already control, in the same name as the profile. Telco PIN and USDT are also cashier paths. Friend credit moves balance to another player account and is not a deposit from a bank.",
            ],
            note: "The cashier shows the fee, minimum, and timing for the method you select.",
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
        ]} scenes={[
          { src: "/images/brand/scene-account.webp", alt: "A quiet desk beside a night window" },
          { src: "/images/brand/scene-slots.webp", alt: "Gates of Olympus on a display in a dark private room" },
        ]} />
        <FaqBlock items={faq} />
        <section className="topic">
          <h2>Related</h2>
          <RelatedLinks links={[
            { href: "/payment-methods", label: "E9WIN payment methods" },
            { href: "/withdrawal", label: "E9WIN withdrawal" },
            { href: "/guides/payment-guide", label: "E9WIN payment guide" },
            { href: "/guides/deposit-guide", label: "E9WIN deposit guide" },
            { href: "/guides/withdrawal-guide", label: "E9WIN withdrawal guide" },
            { href: "/responsible-gaming", label: "Responsible gaming" },
          ]} />
        </section>
      </div>
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
