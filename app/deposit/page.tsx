import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
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
      <p>The cashier tutorials on e9win.net cover instant transfer, e-wallet, telco PIN, bank transfer, crypto, and sending credit to a friend.</p>
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
    </div>
  );
}
