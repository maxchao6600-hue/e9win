import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqBlock } from "@/components/content/CopySections";
import { JsonLd } from "@/components/seo/JsonLd";
import { guideBySlug, promotions } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { guideScenes } from "@/lib/scenes";
import { absoluteUrl } from "@/lib/site";

const description = "Explore the E9WIN promotions that are named on this site. Review welcome, slot, rebate, referral, birthday, and mission campaigns, then read the account card before you opt in.";

const baseMeta = pageMeta({
  title: "E9WIN Promotions | Explore Available Offers",
  description,
  path: "/promotions",
});

export const metadata: Metadata = {
  ...baseMeta,
  openGraph: {
    ...baseMeta.openGraph,
    images: [{ url: absoluteUrl("/images/promotions/promo-welcome.webp"), alt: "Welcome campaign still used on the E9WIN promotions page" }],
  },
  twitter: {
    ...baseMeta.twitter,
    images: [absoluteUrl("/images/promotions/promo-welcome.webp")],
  },
};

const faqs = [
  { q: "What are E9WIN promotions?", a: "They are named campaigns on the rewards desk: welcome play, daily and extra slot campaigns, rebate, birthday, referral, and missions with redeem codes. This page lists those names. The amount, turnover, and product list stay on the account card." },
  { q: "Where can I find E9WIN promotions?", a: "Start on this page. Four campaigns also appear in the homepage slider because they have artwork. Birthday and missions are listed here without a homepage still. The card you can opt in to is in the account after you sign in." },
  { q: "How do I know whether a promotion is available to me?", a: "Open the card in the account. This site does not promise that every account sees every campaign. If a named campaign is missing, it may not be open for that account. Ask support with your username, not your password." },
  { q: "How do I join an E9WIN promotion?", a: "Sign in, open the rewards desk, and follow the opt-in on that card. Some offers ask for a verified phone number and bank details first. The homepage slider does not claim the offer for you. Redeem codes and missions are entered in the lobby when a campaign is open." },
  { q: "Do all promotions have the same requirements?", a: "No. A slot campaign may not include live tables, sports, or 4D. Turnover, if any, is printed on the card. This page does not copy those figures." },
  { q: "Where can I find promotion terms?", a: "On the account card for the campaign you are reading. If this page and the card disagree, the card is the offer. Closed windows that were dated on the public site are not current percentages." },
  { q: "Can a promotion apply to specific games only?", a: "Yes, when the card says so. Welcome campaigns name slots, live casino, and sports. Daily and extra campaigns point at slots. Other campaigns do not get a category assumed for them." },
  { q: "What should I do if I cannot participate?", a: "Read the product list and any opt-in line on the card. Check that you are in the correct account. If the card is not there, contact support with your username. This page cannot opt you in." },
  { q: "What if I completed a step and the promotion is not showing?", a: "Compare what you did with the qualifying action on the card. Then check the account again. If it still does not match, contact support. This site does not promise a manual credit or a response time." },
  { q: "Can I use promotions on mobile?", a: "Yes. The same page and the same account card are available in the phone browser. iPhone can use Safari Add to Home Screen. Android can use the portal download. There is no store listing." },
  { q: "Do promotions have expiry dates?", a: "None of the campaigns on this page carry a start or end date, so none are marked active, upcoming, or ending. Older dated windows on the public site have closed and are not relabelled as live offers." },
  { q: "Who should I contact about a promotion?", a: "Use WhatsApp or the Facebook page from the contact page, or in-lobby chat after you sign in. Send a username. Do not send the password." },
];

const guideSlugs = [
  "promotions-guide",
  "how-to-register",
  "deposit-guide",
  "withdrawal-guide",
  "account-guide",
  "security-guide",
  "responsible-gaming-guide",
  "mobile-guide",
  "games-guide",
] as const;

const types = [
  { title: "Welcome", text: "Named for new players, and the description includes slots, live casino, and sports. The live terms, including any turnover, are on the offer before you claim it." },
  { title: "Slot campaigns", text: "Daily and extra slot campaigns are published on the promotions desk. Check the current card. An older public window that has closed is not a current percentage." },
  { title: "Rebate", text: "A rebate campaign has been published for eligible play. The rate and the products that count are stated on the offer. They are not assumed on this page." },
  { title: "Referral", text: "After login, the profile share area can provide a referral link. Friends register through that link. Reward details stay on the current invite campaign." },
  { title: "Birthday", text: "A birthday reward has been offered to verified members. Eligibility is confirmed in the account after the profile date of birth is saved. There is no homepage still for this one." },
  { title: "Missions and codes", text: "Daily missions and redeem codes are listed in the promotions index. You enter them in the lobby when a campaign is open. This page does not print a code." },
];

export default function PromotionsPage() {
  const featured = promotions.filter((item) => item.image);
  const listed = promotions.filter((item) => !item.image);

  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Promotions" }]} />

      <section className="hub-hero">
        <div>
          <p className="tag">Promotions hub</p>
          <h1>E9WIN Promotions</h1>
          <p>This is the list of campaigns the site actually names. Use it to see what kind of offer exists, then open the account card before you opt in. Amounts, turnover, and dates are not copied here.</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="#offers">Explore promotions</Link>
            <Link className="btn btn-line" href="#how">How promotions work</Link>
          </div>
        </div>
        <img src="/images/promotions/promo-welcome.webp" alt="Welcome campaign still used on the E9WIN promotions page" width={1280} height={720} />
      </section>

      <section className="section prose">
        <h2>E9WIN promotions and offers</h2>
        <p>The promotions page is a directory of campaign names and short descriptions. It is not the cashier and it is not the opt-in button. A name here means the rewards desk has published that kind of campaign.</p>
        <p>Four of the names also sit in the homepage slider because they have stills: welcome, daily and extra slots, rebate, and invite friends. Birthday and missions stay in the list without that artwork.</p>
        <p>Availability can differ by account. The card in the account is where you see whether you can opt in, which products count, and any turnover that card prints. If this page and the card disagree, follow the card.</p>
        <p>Older campaign windows that were dated on the public site have closed. They are not relabelled as current offers, and this page does not reprint those percentages.</p>
      </section>

      <section className="section prose">
        <h2>Explore E9WIN promotions</h2>
        <p>These groups match the campaigns in the project data. They are not extra offers. A group with no named campaign is not given a placeholder card.</p>
        <div className="topic-grid">
          {types.map((item) => (
            <article className="panel" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="offers" aria-labelledby="offers-heading">
        <div className="section-head">
          <div>
            <p className="tag">Directory</p>
            <h2 id="offers-heading">Named E9WIN promotions</h2>
            <p>Homepage featured means the campaign has a still on the homepage. Listed means it is named here without that still. Neither label is a deadline.</p>
          </div>
        </div>
        <div className="offer-grid">
          {featured.map((item) => (
            <article className="promo" key={item.id}>
              <img className="promo-art" src={item.image} alt={`${item.title} campaign artwork`} width={1280} height={720} />
              <p className="tag">Homepage featured · {item.category}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link className="btn btn-line" href="/login">Sign in to view the card</Link>
            </article>
          ))}
        </div>
        <div className="topic-grid offer-listed">
          {listed.map((item) => (
            <article className="panel" key={item.id}>
              <p className="tag">Listed · {item.category}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p style={{ marginTop: 12 }}><Link href="/login">Sign in to view the card</Link></p>
            </article>
          ))}
        </div>
      </section>

      <section className="section prose">
        <h2>How to find a promotion</h2>
        <ol className="steps">
          <li>Read the names on this page, or the four stills in the homepage slider.</li>
          <li>Open the description and note the category: welcome, slots, rebate, referral, rewards, or missions.</li>
          <li>Sign in and open the matching card. That is where eligibility is shown for your account.</li>
          <li>Read the product list and any turnover the card prints before you opt in.</li>
          <li>Follow the participation step on the card. A code or mission is entered in the lobby when that campaign is open.</li>
          <li>Stop if the card does not match the play you intended. The slider cannot claim the offer for you.</li>
        </ol>
      </section>

      <section className="section prose" id="how">
        <h2>How E9WIN promotions work</h2>
        <p>The path is the same shape for every named campaign, and the details are not. Discover the name here, review the description, check the card, participate only if the card matches, then complete whatever qualifying action that card states.</p>
        <ol className="steps">
          <li>Discover the campaign name on this page or the homepage slider.</li>
          <li>Review the short description so you know which desk it belongs to.</li>
          <li>Check eligibility on the account card, not from a screenshot or an old percentage.</li>
          <li>Opt in, or enter a mission or code in the lobby, only when the card tells you to.</li>
          <li>Finish the requirement the card prints, if it prints one. That figure is not stored here.</li>
          <li>Use the result where the card says it applies. A withdrawal can wait while turnover on an open card is unfinished.</li>
        </ol>
        <p className="callout">Individual campaigns can differ. Nothing in this list is a percentage, a minimum deposit, or an expiry.</p>
      </section>

      <section className="section prose">
        <h2>Promotion eligibility</h2>
        <p>Depending on the specific promotion, the card may mention account status, a product list, a payment or profile check, a turnover line, or a limit per person. Not every campaign uses every one of those.</p>
        <ul>
          <li>Whether the card is visible on your account. A missing card can mean the campaign is not open for you.</li>
          <li>Whether you must opt in before you play.</li>
          <li>Which products count. Welcome names slots, live casino, and sports. Daily and extra campaigns point at slots.</li>
          <li>Whether a verified phone number or bank profile is required. Some offers ask for that first.</li>
          <li>Any turnover the card states. It is not copied onto this page.</li>
          <li>A per-person limit, if the card states one.</li>
        </ul>
        <p>Birthday eligibility is confirmed after a date of birth is saved on the profile. Referral uses the share link in the profile after login.</p>
      </section>

      <section className="section prose">
        <h2>Understanding promotion terms</h2>
        <p>Read the card before you opt in. The useful checks are the ones the card actually prints, not a standard table this website does not have.</p>
        <ul>
          <li>Eligibility and the qualifying action.</li>
          <li>Which games or categories count, and which do not.</li>
          <li>Any minimum, maximum, or turnover line, only if the card shows it.</li>
          <li>Any expiry the card shows. The campaigns on this page do not carry a public start or end date.</li>
          <li>Whether an unfinished card can hold a withdrawal. That is a reason to read the card, not a published clock.</li>
          <li>Account restrictions the card mentions, including a limit per person.</li>
        </ul>
        <p>More context sits on the <Link href="/faq">FAQ</Link>, the <Link href="/responsible-gaming">responsible gaming</Link> page, and <Link href="/contact">contact</Link>. There is no separate terms URL per campaign. The card is the offer.</p>
      </section>

      <section className="section prose" id="join">
        <h2>How to join an E9WIN promotion</h2>
        <p>Campaigns do not all use one button. Welcome, slot, rebate, and referral cards are reviewed in the account. Missions and redeem codes are entered in the lobby when a campaign is open. Birthday depends on the saved date of birth.</p>
        <ol className="steps">
          <li><Link href="/register">Register</Link> if you do not have an account, then <Link href="/login">sign in</Link>.</li>
          <li>Open this promotions list and choose the campaign you meant.</li>
          <li>Open that card on the rewards desk and read it.</li>
          <li>Confirm the account in front of you is the one that should receive the offer.</li>
          <li>Opt in, or enter the mission or code, only in the way that card describes.</li>
          <li>Complete any qualifying action the card names. A deposit, if one is required, follows the cashier instruction for that attempt.</li>
          <li>Check the account again for the result. This website does not show a live balance.</li>
        </ol>
      </section>

      <section className="section prose">
        <h2>Promotions and E9WIN games</h2>
        <p>Some campaigns name a product. Welcome campaigns name slots, live casino, and sports. Daily and extra slot campaigns point at the slots desk. Rebate says the products that count are on the offer. Birthday, referral, and missions do not get a game list invented here.</p>
        <p>A slot campaign may not include live tables, sports, or 4D. Check the card before you assume a category counts. The <Link href="/games">games hub</Link> is where those categories are explained. It does not opt you into a campaign.</p>
        <p>
          <Link href="/games/slots">Slots</Link>
          {" · "}
          <Link href="/games/live-casino">Live casino</Link>
          {" · "}
          <Link href="/games/sports">Sports</Link>
          {" · "}
          <Link href="/games/4d">4D lottery</Link>
          {" · "}
          <Link href="/games/fishing">Fishing</Link>
          {" · "}
          <Link href="/games/esports">Esports</Link>
        </p>
      </section>

      <section className="section prose">
        <h2>Promotions and your E9WIN account</h2>
        <p>Opt in from the account that should receive the campaign. A share link, a birthday profile, and a rewards card are all tied to that login. This website does not keep the play session.</p>
        <p>If a campaign the homepage names is not on your card, the account may not be eligible, or the card may ask for a verified phone number and bank details first. Compare the username you are using with the one you registered.</p>
        <p>When it still does not appear, use <Link href="/contact">contact</Link> or the <Link href="/faq">FAQ</Link>. Send the username. Do not send the password. <Link href="/login">Sign in</Link> or <Link href="/register">register</Link> if you are not in an account yet.</p>
      </section>

      <section className="section prose">
        <h2>Promotion troubleshooting</h2>
        <div className="topic-grid">
          <article className="panel">
            <h3>The promotion is not visible</h3>
            <p>It may not be open for that account, the card may require a verified phone or bank profile first, or you may be looking at a closed window. Check the rewards desk, then contact support with your username.</p>
          </article>
          <article className="panel">
            <h3>You cannot opt in</h3>
            <p>Read the product list and any opt-in line. A slot campaign may exclude other categories. If the card says the limit per person is already used, this page cannot reopen it.</p>
          </article>
          <article className="panel">
            <h3>You finished a step and nothing changed</h3>
            <p>Match the step to the qualifying action on the card. Check the same account again. Contact support if it still does not match. There is no promised manual credit and no published response time.</p>
          </article>
          <article className="panel">
            <h3>The requirements are unclear</h3>
            <p>Use the card, then the <Link href="/guides/promotions-guide">promotions guide</Link>, the <Link href="/faq">FAQ</Link>, and <Link href="/contact">contact</Link>. Do not treat an old percentage as the current offer.</p>
          </article>
        </div>
      </section>

      <section className="section prose">
        <h2>Tips for using the promotions page</h2>
        <ul>
          <li>Read the full description, not only the campaign name.</li>
          <li>Treat homepage featured and listed as artwork labels, not as urgency.</li>
          <li>Verify eligibility on the card before you play.</li>
          <li>Notice which action the card asks for: opt in, a profile date of birth, a share link, or a lobby code.</li>
          <li>Do not assume every campaign applies to every account or every category.</li>
          <li>Stay on E9WIN pages and the lobby. A percentage from a chat is not the card.</li>
          <li>Decide the budget before you opt in. The <Link href="/responsible-gaming">responsible gaming</Link> page is the place for that limit, not a reward claim.</li>
        </ul>
      </section>

      <section className="section hub-split">
        <img src="/images/brand/scene-devices.webp" alt="A phone and a laptop on a dark marble desk" width={1400} height={760} />
        <div className="prose">
          <h2>Explore promotions on mobile</h2>
          <p>The promotions list is the same site on a phone. Search is not required. Scroll the names, open a description, and sign in for the card. The homepage slider is the same four campaigns.</p>
          <p>iPhone can add the site from Safari. Android can use the portal download on the <Link href="/download">download</Link> page. There is no App Store or Google Play listing, and this page does not publish an install file.</p>
          <p>The <Link href="/guides/mobile-guide">mobile guide</Link> covers the browser, the home-screen icon, and the Android download. It does not change promotion rules.</p>
        </div>
      </section>

      <FaqBlock items={faqs} title="E9WIN promotions FAQ" />

      <section className="section">
        <div className="section-head">
          <div>
            <h2>Promotion guides</h2>
            <p>Short pages for the account tasks around a campaign. Only routes that exist are linked.</p>
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
                {scene ? <img src={scene.src} alt="" width={640} height={360} /> : null}
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
            <h3>Games</h3>
            <p>
              <Link href="/games">Games hub</Link>, <Link href="/games/slots">slots</Link>, <Link href="/games/live-casino">live casino</Link>, <Link href="/games/sports">sports</Link>, <Link href="/games/4d">4D</Link>, <Link href="/games/fishing">fishing</Link>, and <Link href="/games/esports">esports</Link>.
            </p>
          </article>
          <article className="panel">
            <h3>Account and payments</h3>
            <p>
              <Link href="/login">Sign in</Link>, <Link href="/register">register</Link>, <Link href="/payment-methods">payment methods</Link>, <Link href="/deposit">deposit</Link>, and <Link href="/withdrawal">withdrawal</Link>.
            </p>
          </article>
          <article className="panel">
            <h3>Help and membership</h3>
            <p>
              <Link href="/faq">FAQ</Link>, <Link href="/contact">contact</Link>, <Link href="/responsible-gaming">responsible gaming</Link>, <Link href="/download">download</Link>, <Link href="/vip">VIP</Link>, <Link href="/agent">agent</Link>, and <Link href="/guides">guides</Link>.
            </p>
          </article>
        </div>
      </section>

      <section className="section hub-cta">
        <h2>Explore E9WIN promotions</h2>
        <p>Use this list to see which campaigns are named. Use the account card to see whether you can join.</p>
        <div className="cta-row">
          <Link className="btn btn-primary" href="#offers">View promotions</Link>
          <Link className="btn btn-line" href="/games">Explore games</Link>
        </div>
      </section>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "E9WIN Promotions",
        url: absoluteUrl("/promotions"),
        description,
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Promotions", item: absoluteUrl("/promotions") },
        ],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Named E9WIN promotions",
        itemListElement: promotions.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.title,
          url: absoluteUrl("/promotions"),
        })),
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
