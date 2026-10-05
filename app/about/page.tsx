import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AnchoredSections } from "@/components/content/AnchoredSections";
import { FaqBlock, RelatedLinks } from "@/components/content/CopySections";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About E9WIN | Malaysia Online Gaming Lobby",
  description: "What the E9WIN public site explains: games, mobile access, payments, promotions, and support. History and licences are not published here.",
  path: "/about",
});

const faq = [
  { q: "Is company history published here?", a: "No. Founding dates, offices, ownership, and licences are not part of the published product information, so they are not added." },
  { q: "Where is play handled?", a: "In the player lobby after you sign in. This website explains the categories and the access paths." },
];

export default function AboutPage() {
  return (
    <div className="container page-hero prose">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "About" }]} />
      <section className="hub-hero">
        <div>
          <p className="tag">E9WIN</p>
          <h1>About E9WIN</h1>
          <p>E9WIN is a Malaysia-facing online gaming lobby. This website explains how to find games, payments, promotions, and support. Stakes are placed in the player lobby.</p>
        </div>
        <img src="/images/brand/scene-slots.webp" alt="Gates of Olympus on a display in a dark private room" width={1600} height={760} />
      </section>
      <AnchoredSections sections={[
        {
          title: "What the public site covers",
          paragraphs: [
            "The catalog pages show slot covers from Pragmatic Play and Lucky365, and live covers from Evolution and Playtech. Sports artwork is live horse racing. Football, including the World Cup and the Premier League, is named for the sportsbook.",
            "4D names Magnum, Da Ma Cai, Toto, and Singapore. Fishing and esports are lobby categories without public covers.",
          ],
        },
        {
          title: "How people open the lobby",
          paragraphs: [
            "A desktop or phone browser is enough. iPhone can add the site to the home screen from Safari. Android can use the portal link on the download page. App Store and Google Play listings are not part of that path.",
          ],
        },
        {
          title: "Payments and promotions",
          paragraphs: [
            "Published payment marks include Malaysian banks, Touch 'n Go, Boost, GrabPay, ShopeePay, and USDT. The cashier also lists instant transfer, telco PIN, and bank transfer. Limits are not printed on this site.",
            "Promotion names are published. Amounts and turnover stay on the account card. Closed campaign windows are not shown as current offers.",
          ],
        },
        {
          title: "Support",
          paragraphs: [
            "Public contact is WhatsApp and Facebook. In-lobby chat is available after sign-in. No email address or phone number is published here.",
          ],
        },
      ]} scenes={[
        { src: "/images/brand/scene-devices.webp", alt: "A phone and a laptop on a dark marble desk" },
        { src: "/images/brand/scene-payments.webp", alt: "A card and a phone on a dark cashier counter" },
        { src: "/images/brand/scene-account.webp", alt: "A quiet desk beside a night window" },
      ]} />
      <FaqBlock items={faq} />
      <section className="topic">
        <h2>Related</h2>
        <RelatedLinks links={[
          { href: "/games", label: "Games" },
          { href: "/payment-methods", label: "Payment methods" },
          { href: "/contact", label: "Contact" },
          { href: "/responsible-gaming", label: "Responsible gaming" },
        ]} />
      </section>
      <p><Link className="btn btn-primary" href="/register">Register</Link></p>
    </div>
  );
}
