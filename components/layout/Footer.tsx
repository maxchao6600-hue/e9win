import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img src="/images/brand/logo.png" alt="E9WIN" width={132} height={40} />
          <p>Malaysia online gaming for slots, live casino, sports, lottery, and mobile play.</p>
          <p>18+ only. Play with money you can afford to lose.</p>
        </div>
        <div>
          <h2>Games</h2>
          <Link href="/games">All games</Link>
          <Link href="/games/slots">Slots</Link>
          <Link href="/games/live-casino">Live casino</Link>
          <Link href="/games/sports">Sports</Link>
          <Link href="/games/lottery">Lottery</Link>
        </div>
        <div>
          <h2>Information</h2>
          <Link href="/promotions">Promotions</Link>
          <Link href="/vip">VIP</Link>
          <Link href="/download">Download</Link>
          <Link href="/agent">Agent</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/about">About</Link>
        </div>
        <div>
          <h2>Support</h2>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/deposit">Deposit</Link>
          <Link href="/withdrawal">Withdrawal</Link>
          <a href={siteConfig.support.whatsapp} rel="noopener noreferrer">WhatsApp</a>
          <a href={siteConfig.support.facebook} rel="noopener noreferrer">Facebook</a>
        </div>
        <div>
          <h2>Legal</h2>
          <Link href="/responsible-gaming">Responsible gaming</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
      <div className="container legal">
        <span>© {new Date().getFullYear()} E9WIN</span>
        <span>Public support: WhatsApp and Facebook. No other contact is published here.</span>
      </div>
    </footer>
  );
}
