import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AnchoredSections } from "@/components/content/AnchoredSections";
import { FaqBlock, RelatedLinks } from "@/components/content/CopySections";
import { JsonLd } from "@/components/seo/JsonLd";
import { depositMethods, payments } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "E9WIN Payment Methods | Banks, E-Wallets and USDT",
  description: "See the banks, e-wallets, telco PIN, and USDT marks published for E9WIN, then deposit or withdraw in the cashier.",
  path: "/payment-methods",
});

const faq = [
  { q: "Are limits printed here?", a: "No. The cashier shows the limits for the method you choose." },
  { q: "Is a processing time guaranteed?", a: "No. Timing depends on the method and any account checks." },
  { q: "Can I pay an account number from a chat?", a: "Use the instruction on the cashier for that attempt. Do not reuse an old screenshot or a number that arrived in chat." },
];

export default function PaymentMethodsPage() {
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Payment methods" }]} />
      <section className="hub-hero">
        <div>
          <p className="tag">Payments</p>
          <h1>Payment methods</h1>
          <p>These are the payment marks published with E9WIN. The cashier is where you pick one, copy the instruction, and later request a withdrawal to a matching name.</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/deposit">Deposit</Link>
            <Link className="btn btn-line" href="/withdrawal">Withdrawal</Link>
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
      <div className="prose section">
        <AnchoredSections sections={[
          {
            title: "Banks",
            paragraphs: [
              "Maybank, CIMB, Public Bank, RHB, Hong Leong, AmBank, and BSN appear on the payment strip. Instant transfer and manual bank transfer are both described as cashier paths.",
            ],
          },
          {
            title: "E-wallets",
            paragraphs: [
              "Touch 'n Go, Boost, GrabPay, and ShopeePay are the e-wallet marks. Which of them your account can use is confirmed in the cashier.",
            ],
          },
          {
            title: "Telco PIN, USDT, and friend credit",
            paragraphs: [
              "Telco PIN is a deposit path. The accepted pins are listed in the cashier, not on this page. USDT is shown as a mark; the wallet address and network are on the crypto cashier. Credit to a friend is a transfer between player accounts, not a bank withdrawal.",
            ],
          },
          {
            title: "Deposit and withdrawal",
            paragraphs: [
              "A deposit follows the instruction on screen and a receipt you keep until the wallet updates. A withdrawal goes to a bank or e-wallet in the same name as the profile. An active promotion can add a requirement; that rule is on the campaign card.",
            ],
          },
          {
            title: "Failed deposit",
            paragraphs: [
              "A deposit that does not appear should be checked against the receipt: amount, time, and reference. Message WhatsApp with the username. Do not send a second payment to a different account number from a chat.",
            ],
          },
          {
            title: "Pending withdrawal",
            paragraphs: [
              "A withdrawal can wait on a name check, a missing profile step, or turnover printed on an active promotion card. No processing time is published. Read the withdrawal history before you submit another request.",
            ],
          },
          {
            title: "When something stalls",
            paragraphs: [
              "Compare the amount and reference with the receipt, then message WhatsApp support with the username. Do not send the password.",
            ],
          },
        ]} scenes={[
          { src: "/images/brand/scene-account.webp", alt: "A quiet desk beside a night window" },
          { src: "/images/brand/scene-devices.webp", alt: "A phone and a laptop on a dark marble desk" },
          { src: "/images/promotions/promo-welcome.webp", alt: "A dark entrance lit with gold" },
        ]} />
        <FaqBlock items={faq} />
        <section className="topic">
          <h2>Related</h2>
          <RelatedLinks links={[
            { href: "/deposit", label: "Deposit steps" },
            { href: "/withdrawal", label: "Withdrawal steps" },
            { href: "/guides/deposit-guide", label: "Deposit guide" },
            { href: "/guides/withdrawal-guide", label: "Withdrawal guide" },
            { href: "/guides/security-guide", label: "Account safety" },
          ]} />
        </section>
        <p><Link className="btn btn-primary" href="/deposit">Start with a deposit</Link></p>
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
