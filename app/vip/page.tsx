import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqBlock } from "@/components/content/CopySections";
import { VisualSplit } from "@/components/content/VisualSplit";
import { JsonLd } from "@/components/seo/JsonLd";
import { guideBySlug } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { guideScenes, pageScenes } from "@/lib/scenes";
import { absoluteUrl, siteConfig } from "@/lib/site";

const description = "Learn how E9WIN describes VIP membership, where to check a notice in your account, and how that label differs from the VIP Baccarat table. Levels and cash figures are not published here.";

const baseMeta = pageMeta({
  title: "E9WIN VIP | Membership Information",
  description,
  path: "/vip",
});

export const metadata: Metadata = {
  ...baseMeta,
  openGraph: {
    ...baseMeta.openGraph,
    images: [{ url: absoluteUrl(pageScenes.vip.src), alt: pageScenes.vip.alt }],
  },
  twitter: {
    ...baseMeta.twitter,
    images: [absoluteUrl(pageScenes.vip.src)],
  },
};

const faqs = [
  { q: "What is E9WIN VIP?", a: "VIP is the membership label on this site. It sits beside the rewards desk, which also names missions, rebates, referral, and redeem codes. It is a separate thing from the Playtech live table called VIP Baccarat." },
  { q: "How does E9WIN VIP membership work?", a: "You use a player account, sign in, and read any VIP notice in the rewards area of the lobby. This public page explains that path. It does not change the account by itself." },
  { q: "Does E9WIN have different VIP levels?", a: "No level names, point targets, or maintenance rules are published on this site, so this page does not show a ladder. If the rewards area in your account shows a status, that screen is the current detail for that account." },
  { q: "How can I check my VIP status?", a: "Sign in to the correct account and open the rewards area in the lobby. Read whatever membership information that account shows. This website does not include a membership dashboard." },
  { q: "How is VIP eligibility determined?", a: "A qualification formula is not published here. Eligibility is whatever the notice in your account states. If the notice is missing, ask support with your username." },
  { q: "What benefits are available to VIP members?", a: "Cash rates, dedicated managers, withdrawal priority, and exclusive games are not printed on this page. Check the rewards area, then any promotion card you are considering, before you rely on a benefit." },
  { q: "Are VIP benefits the same for every member?", a: "This page cannot say that they are. A notice is tied to the account you are signed in to, and one account can see a notice that another account does not." },
  { q: "Are VIP benefits connected to promotions?", a: "They are related topics, and they are not the same list. A campaign on the promotions page has its own card. A membership notice does not automatically include that campaign." },
  { q: "Can VIP benefits apply to specific games?", a: "Only if the notice or the campaign card names those games. The public catalog itself is the same set of categories for every visitor. Opening VIP Baccarat joins a Playtech table." },
  { q: "What should I do if I cannot see my VIP information?", a: "Confirm you are in the right account, look again in the rewards area, and read the promotions page if you were expecting a campaign. Then contact support with your username. Do not send the password." },
  { q: "How do I contact E9WIN about VIP questions?", a: "Use the contact page, WhatsApp, or the Facebook page. After you sign in, the lobby also refers players to live chat. Send a username." },
  { q: "Can I access VIP information on mobile?", a: "Yes. This page and the lobby work in the phone browser. iPhone can use Safari Add to Home Screen. Android can use the portal download on the download page. There is no store listing and no separate VIP app." },
];

const guideSlugs = [
  "account-guide",
  "security-guide",
  "promotions-guide",
  "how-to-register",
  "how-to-login",
  "deposit-guide",
  "withdrawal-guide",
  "responsible-gaming-guide",
  "mobile-guide",
] as const;

const checks = [
  { title: "The rewards area", text: "After you sign in, membership notices are read in the lobby rewards area, beside missions and rebates. If that area has a VIP line for your account, that line is the current detail." },
  { title: "The promotions list", text: "Campaigns such as welcome play, rebate, referral, birthday, and missions are named on the promotions page. Each one has its own card. A membership label does not copy those cards onto your account." },
  { title: "Support", text: "When the account is silent, WhatsApp, Facebook, and in-lobby chat can look up the username. They are the published way to ask. This page cannot confirm a status for you." },
];

export default function VipPage() {
  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "VIP" }]} />

      <section className="hub-hero">
        <div>
          <p className="tag">VIP hub</p>
          <h1>E9WIN VIP</h1>
          <p>This is the membership page. It explains the VIP label, where a notice can appear after you sign in, and how to ask when the account is unclear. Levels, points, and cash figures are not printed here.</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="#membership">Explore VIP information</Link>
            <Link className="btn btn-line" href="/contact">Contact support</Link>
          </div>
        </div>
        <img src={pageScenes.vip.src} alt={pageScenes.vip.alt} width={1600} height={900} />
      </section>

      <VisualSplit src="/images/brand/scene-slots.webp" alt="Gates of Olympus on a display in a dark private room" reverse id="membership">
        <h2>E9WIN VIP membership</h2>
        <p>Membership, on a gaming site, is a label an account can carry beside ordinary play. Here, that label is VIP. It is discussed with the rewards desk, the same desk that names missions, rebates, referral earning, and redeem codes.</p>
        <p>Those campaigns stay on their own cards. A VIP notice, when an account has one, is read in the lobby after you sign in. This page is the public explanation of that arrangement. Opening it does not attach a status to an account.</p>
        <p>What one account sees can differ from what another account sees. The notice in the rewards area is the current detail for the login you are using. Read it, and read any campaign card you open, before you treat a benefit as available.</p>
        <p>The public site leaves levels, point targets, and cash amounts unpublished. They are omitted here until E9WIN prints them. The Playtech table called VIP Baccarat is a live casino cover, and it is a different use of the word.</p>
      </VisualSplit>

      <section className="section prose">
        <h2>Who is E9WIN VIP for?</h2>
        <p>Use this page if you want a plain account of the membership label, a place to look after sign-in, or a support path when a notice is hard to read. It is also the page that separates membership from the VIP Baccarat table.</p>
        <ul>
          <li>You want to know what the public site actually publishes about membership.</li>
          <li>You want to know where a status would appear, which is the rewards area in the lobby.</li>
          <li>You want to compare that area with the promotions list, which is a different page.</li>
          <li>You have a question that depends on your own account, and you need WhatsApp, Facebook, or in-lobby chat.</li>
        </ul>
        <p>Creating an account does not by itself publish a VIP status on this page. Eligibility is not assumed from registration.</p>
      </section>

      <VisualSplit src="/images/brand/scene-account.webp" alt="A quiet desk beside a night window" id="how">
        <h2>How E9WIN VIP works</h2>
        <p>The path that this site can describe is an account path. It does not include a points target, a deposit threshold, or a named level, because those values are not published.</p>
        <ol className="steps">
          <li>Open or create the player account you intend to use.</li>
          <li>Sign in. This marketing site does not keep a play session.</li>
          <li>In the lobby, open the rewards area, where missions, rebates, and any VIP notice are read.</li>
          <li>Read the notice that belongs to that account, including any condition printed beside it.</li>
          <li>If you are also looking at a campaign, open that card on the promotions page and follow the card.</li>
          <li>Stay on the same account, and use the published support channels when the notice is missing or unclear.</li>
        </ol>
        <p className="callout">The rewards area is inside the player lobby. This page cannot show it, and it cannot complete a step for you.</p>
      </VisualSplit>

      <section className="section prose">
        <h2>Understanding VIP membership structure</h2>
        <p>A membership system can be organised in levels. E9WIN has not published level names, upgrade rules, downgrade rules, or maintenance requirements on this site, so there is no table to print.</p>
        <p>If the rewards area shows a status for your login, that screen is the structure that applies to that account. If it shows nothing, the gap stays empty. Contact support and send the username if you need the account looked up. A chat screenshot of a ladder is not a substitute for that screen.</p>
      </section>

      <section className="section prose">
        <h2>What to check about VIP benefits</h2>
        <p>Benefit figures are not part of the public VIP page. Cashback rates, VIP-only rebates, birthday amounts, dedicated account managers, faster withdrawals, member-only games, and event calendars are not listed, because the project does not publish them.</p>
        <p>What you can check today is narrower, and it is real:</p>
        <div className="topic-grid">
          {checks.map((item) => (
            <article className="panel" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <VisualSplit src="/images/brand/scene-payments.webp" alt="A card and a phone on a dark cashier counter">
        <h2>Understanding VIP eligibility</h2>
        <p>Depending on the current notice in the account, the details worth checking are the ones that notice actually prints. This page does not add a formula on top of them.</p>
        <ul>
          <li>You are signed in to the account you think you are using.</li>
          <li>A VIP notice is present in the rewards area, rather than assumed from an old message.</li>
          <li>Any profile step the lobby already asks for, such as a phone number or payout details, is complete on that account.</li>
          <li>Any activity, product, or time limit is taken from the notice itself, only when the notice states it.</li>
          <li>A promotion you hoped was included has its own card and its own conditions.</li>
        </ul>
        <p>If the notice does not state a requirement, do not treat a requirement from another site as yours.</p>
      </VisualSplit>

      <section className="section prose" id="status">
        <h2>How to check your VIP status</h2>
        <p>There is no membership dashboard on this website. The check is in the player lobby, on the account you sign in to.</p>
        <ol className="steps">
          <li><Link href="/login">Sign in</Link> with the username from registration.</li>
          <li>Open the rewards area in the lobby.</li>
          <li>Read the membership information that account shows, including any condition next to it.</li>
          <li>If you expected a campaign as well, compare that reading with the card on <Link href="/promotions">promotions</Link>.</li>
          <li>If the area is empty or you cannot tell what it means, use <Link href="/contact">contact</Link> or the <Link href="/faq">FAQ</Link>. WhatsApp and Facebook are the public channels. Send the username, not the password.</li>
        </ol>
      </section>

      <VisualSplit src="/images/promotions/promo-rebate.webp" alt="Rebate campaign artwork" reverse>
        <h2>VIP and E9WIN promotions</h2>
        <p>Membership and the promotions list answer different questions. The promotions page names campaigns anyone can read: welcome play, slot campaigns, rebate, referral, birthday, and missions with redeem codes. Opting in is a separate step on the account card.</p>
        <p>A VIP notice does not automatically include one of those campaigns. Some cards are limited to certain accounts, and the card says so when that is the case. Read the card before you play toward it. Start from <Link href="/promotions">promotions</Link>, then the <Link href="/guides/promotions-guide">promotions guide</Link> if you want the longer explanation of how a card is read.</p>
      </VisualSplit>

      <VisualSplit src="/images/brand/scene-live.webp" alt="Playtech baccarat key art of a dealer holding cards" reverse>
        <h2>VIP and E9WIN games</h2>
        <p>The public catalog does not change because of a membership label. Slots, live casino, sports, 4D, fishing, and esports are the categories on the games hub for every visitor. Stake rules, table limits, and paytables stay inside the game.</p>
        <p>VIP Baccarat is a Playtech live table in that catalog. Opening the cover joins the table. It does not join membership, and membership does not change the table. This page does not claim a different return, a different price, or a members-only title.</p>
        <p>
          <Link href="/games">Games hub</Link>, <Link href="/games/slots">slots</Link>, <Link href="/games/live-casino">live casino</Link>, <Link href="/games/sports">sports</Link>, <Link href="/games/4d">4D</Link>, <Link href="/games/fishing">fishing</Link>, and           <Link href="/games/esports">esports</Link>.
        </p>
      </VisualSplit>

      <section className="section prose">
        <h2>VIP and your E9WIN account</h2>
        <p>A notice is tied to the login that can see it. Use the account you registered. A second login is a different account, and it can show a different rewards area, or none.</p>
        <p>Keep the username and password to yourself. The <Link href="/guides/security-guide">security guide</Link> covers that habit. Phone number and payout details, when the lobby asks for them, belong on the same account you play with. The <Link href="/guides/account-guide">account guide</Link> walks through those profile steps.</p>
        <p>Account-specific questions go to support, because this page cannot see your lobby. <Link href="/login">Sign in</Link>, <Link href="/register">register</Link>, the <Link href="/faq">FAQ</Link>, and <Link href="/contact">contact</Link> are the routes around that.</p>
      </section>

      <section className="section prose">
        <h2>Understanding VIP terms and conditions</h2>
        <p>There is no separate VIP terms document on this site. When a notice or a campaign card is open, read the lines that card actually contains:</p>
        <ul>
          <li>Who it applies to.</li>
          <li>The action it asks you to take.</li>
          <li>The games or categories it names, if it names any.</li>
          <li>A period, a limit, or a turnover figure, only when the card prints one.</li>
          <li>Anything it says about withdrawal, account limits, or expiry.</li>
        </ul>
        <p>A missing line is not a hidden promise. Age and budget sit on the <Link href="/responsible-gaming">responsible gaming</Link> page, beside membership rather than inside a reward. The site terms are on <Link href="/terms">terms</Link>.</p>
      </section>

      <section className="section prose">
        <h2>VIP troubleshooting</h2>
        <div className="topic-grid">
          <article className="panel">
            <h3>I cannot see VIP information</h3>
            <p>The public page never shows a personal status. In the lobby, the rewards area can also be empty for that account. The programme text may have changed, or the notice may never have been on that login. Check the account, then ask support.</p>
          </article>
          <article className="panel">
            <h3>I think this account should already be VIP</h3>
            <p>Sign in to that username, read the rewards area, and read any condition on the notice. If you still disagree with what you see, contact support with the username. This page cannot upgrade an account, and it does not promise a manual change.</p>
          </article>
          <article className="panel">
            <h3>A benefit I expected is missing</h3>
            <p>Read the condition on the notice and, if you were following a campaign, the promotion card. Confirm the account. If both are silent, contact support. A response time and a reward are not promised.</p>
          </article>
        </div>
      </section>

      <section className="section prose">
        <h2>Tips for understanding E9WIN VIP</h2>
        <ul>
          <li>Read the rewards area on your own login before you expect a benefit.</li>
          <li>Treat unpublished levels and cash figures as unpublished. Do not fill them in from another site.</li>
          <li>Read the notice or the campaign card for the action it asks for.</li>
          <li>Keep the password off WhatsApp, Facebook, and live chat. Send the username.</li>
          <li>Use this site, the lobby, and the published support links. A ladder in a private message is not the account.</li>
          <li>Set the budget on the <Link href="/responsible-gaming">responsible gaming</Link> page before you deposit toward anything you have read.</li>
        </ul>
      </section>

      <section className="section hub-split">
        <img src="/images/brand/scene-devices.webp" alt="A phone and a laptop on a dark marble desk" width={1400} height={760} loading="lazy" />
        <div className="prose">
          <h2>Accessing E9WIN VIP on mobile</h2>
          <p>This page is the same site in a phone browser. Sign in, then open the rewards area in the lobby. There is no separate VIP app and no members-only install.</p>
          <p>iPhone can add the site from Safari with Share, then Add to Home Screen. Android can use the portal download on the <Link href="/download">download</Link> page. The download page does not document an App Store or Google Play listing.</p>
          <p>The <Link href="/guides/mobile-guide">mobile guide</Link> covers the browser, the home-screen icon, and the Android portal. It does not change membership rules.</p>
        </div>
      </section>

      <FaqBlock items={faqs} title="E9WIN VIP FAQ" />

      <section className="section">
        <div className="section-head">
          <div>
            <h2>VIP and account guides</h2>
            <p>These guides cover the account tasks around a membership question. Only routes that exist are linked.</p>
          </div>
          <Link className="cat-all" href="/guides">Guide hub</Link>
        </div>
        <div className="guide-grid">
          {guideSlugs.map((slug) => {
            const guide = guideBySlug(slug);
            if (!guide) return null;
            const scene = guideScenes[guide.category];
            return (
              <Link className="guide-card" href={`/guides/${guide.slug}`} key={guide.slug}>
                {scene ? <img src={scene.src} alt={scene.alt} width={640} height={360} loading="lazy" /> : null}
                <span className="guide-body">
                  <span className="tag">{guide.category}</span>
                  <h3>{guide.title}</h3>
                  <p>{guide.excerpt}</p>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section prose">
        <h2>Explore more on E9WIN</h2>
        <div className="topic-grid">
          <article className="panel">
            <h3>Games and offers</h3>
            <p>
              <Link href="/games">Games</Link>, <Link href="/promotions">promotions</Link>, <Link href="/games/slots">slots</Link>, <Link href="/games/live-casino">live casino</Link>, <Link href="/games/sports">sports</Link>, <Link href="/games/4d">4D</Link>, <Link href="/games/fishing">fishing</Link>, and <Link href="/games/esports">esports</Link>.
            </p>
          </article>
          <article className="panel">
            <h3>Account and payments</h3>
            <p>
              <Link href="/login">Sign in</Link>, <Link href="/register">register</Link>, <Link href="/payment-methods">payment methods</Link>, <Link href="/deposit">deposit</Link>, and <Link href="/withdrawal">withdrawal</Link>.
            </p>
          </article>
          <article className="panel">
            <h3>Help</h3>
            <p>
              <Link href="/faq">FAQ</Link>, <Link href="/contact">contact</Link>, <Link href="/responsible-gaming">responsible gaming</Link>, <Link href="/download">download</Link>, <Link href="/agent">agent</Link>, and <Link href="/guides">guides</Link>. Public support is also on <a href={siteConfig.support.whatsapp}>WhatsApp</a> and <a href={siteConfig.support.facebook}>Facebook</a>.
            </p>
          </article>
        </div>
      </section>

      <VisualSplit src="/images/promotions/promo-welcome.webp" alt="A dark entrance lit with gold">
        <h2>Explore E9WIN VIP</h2>
        <p>Use this page to understand the label. Use the rewards area in your account to see whether a notice is there.</p>
        <div className="cta-row">
          <Link className="btn btn-primary" href="#status">Check your VIP information</Link>
          <Link className="btn btn-line" href="/contact">Contact support</Link>
        </div>
      </VisualSplit>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "E9WIN VIP",
        url: absoluteUrl("/vip"),
        description,
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "VIP", item: absoluteUrl("/vip") },
        ],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }} />
    </div>
  );
}
