import type { Metadata } from "next";
import Link from "next/link";
import { PaymentRail } from "@/components/home/PaymentRail";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqGroups, guides, homepagePromotions, payments } from "@/lib/content";
import { PromoSlider } from "@/components/home/PromoSlider";
import { categoryPath, featuredGames } from "@/lib/games";
import { pageMeta } from "@/lib/seo";
import { VisualSplit } from "@/components/content/VisualSplit";
import { categoryScenes, guideScenes, pageScenes } from "@/lib/scenes";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "E9WIN Malaysia | Online Gaming, Games and Promotions",
  description: "E9WIN is a Malaysia online gaming lobby for slots, live casino, sports, 4D, fishing, esports, promotions, and mobile play.",
  path: "/",
});

const featured = featuredGames().slice(0, 8);
const homeGuideSlugs = ["how-to-register", "how-to-start", "games-guide", "mobile-guide", "deposit-guide", "promotions-guide", "security-guide", "responsible-gaming-guide"];
const homeGuides = homeGuideSlugs.flatMap((slug) => {
  const guide = guides.find((item) => item.slug === slug);
  return guide ? [guide] : [];
});
const homeFaqTitles = [
  "How do I register with E9WIN?",
  "How do I log in to E9WIN?",
  "Where do I open a game?",
  "How do E9WIN payments work?",
  "Do I have to install an app?",
  "How do I claim a promotion?",
  "How do I contact E9WIN support?",
];
const homeFaq = homeFaqTitles.flatMap((question) => {
  const item = faqGroups.flatMap((group) => group.items).find((entry) => entry.q === question);
  return item ? [item] : [];
});

export default function HomePage() {
  const slides = homepagePromotions();
  return (
    <>
      <section className="hero">
        <img
          className="hero-scene"
          src="/images/brand/hero-hall.webp"
          alt="A quiet luxury gaming hall in gold light"
          width={1600}
          height={900}
          fetchPriority="high"
        />
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="kicker">Malaysia online gaming</p>
            <h1>E9WIN Malaysia</h1>
            <p className="lede">Slots, live casino, sports, 4D, fishing, and esports in one player lobby.</p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/register">Register now</Link>
              <Link className="btn btn-ghost" href="/games">Explore games</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <VisualSplit plain src="/images/brand/scene-slots.webp" alt="Gates of Olympus on a display in a dark private room">
            <h2>What E9WIN is</h2>
            <p>E9WIN is a Malaysia-facing online gaming platform. Slots, live casino, sports, 4D, fishing, and esports open through one player lobby.</p>
            <p>These pages explain the categories, E9WIN payment methods, E9WIN promotions, and the support channels that are listed. Stake screens, paytables, and cashier limits stay in the lobby after you sign in.</p>
            <p><Link href="/games">E9WIN games</Link> · <Link href="/promotions">E9WIN promotions</Link> · <Link href="/vip">E9WIN VIP</Link> · <Link href="/download">E9WIN download</Link> · <Link href="/guides">E9WIN guides</Link> · <Link href="/payment-methods">E9WIN payment methods</Link></p>
          </VisualSplit>
        </div>
      </section>

      {slides.length > 0 ? (
        <section className="section promo-home" aria-labelledby="home-promos">
          <div className="feat-wrap">
            <div className="cat-head">
              <p className="kicker">Promotions</p>
              <div className="cat-head-row">
                <h2 id="home-promos">Latest activities</h2>
                <Link className="cat-all" href="/promotions">View all promotions <span aria-hidden="true">→</span></Link>
              </div>
              <p>Latest activities and campaigns from E9WIN.</p>
            </div>
            <PromoSlider items={slides} />
          </div>
        </section>
      ) : null}

      <section className="section follow" aria-labelledby="categories">
        <div className="cat-wrap">
          <div className="cat-head">
            <p className="kicker">Discover</p>
            <div className="cat-head-row">
              <h2 id="categories">Game categories</h2>
              <Link className="cat-all" href="/games">View all games <span aria-hidden="true">→</span></Link>
            </div>
            <p>E9WIN games are grouped into slots, live casino, sports, 4D lottery, fishing, and esports. Open a category, then play in the lobby.</p>
          </div>
          <div className="cat-showcase">
            <Link className="cat-tile cat-slots" href="/games/slots">
              <img src={categoryScenes.slots.src} alt={categoryScenes.slots.alt} width={1280} height={720} loading="lazy" />
              <span className="cat-shade" />
              <span className="cat-copy">
                <h3>E9WIN Slots</h3>
                <p>Browse video slot covers from the public catalog, then open a title in the lobby.</p>
                <span className="cat-go">Open <span aria-hidden="true">→</span></span>
              </span>
            </Link>
            <Link className="cat-tile cat-live" href="/games/live-casino">
              <img src={categoryScenes["live-casino"].src} alt={categoryScenes["live-casino"].alt} width={1280} height={720} loading="lazy" />
              <span className="cat-shade" />
              <span className="cat-copy">
                <h3>E9WIN Live Casino</h3>
                <p>Open live baccarat, roulette, sic bo, and other table covers from the catalog.</p>
                <span className="cat-go">Open <span aria-hidden="true">→</span></span>
              </span>
            </Link>
            <Link className="cat-tile cat-sports" href="/games/sports">
              <img src={categoryScenes.sports.src} alt={categoryScenes.sports.alt} width={1280} height={720} loading="lazy" />
              <span className="cat-shade" />
              <span className="cat-copy">
                <h3>E9WIN Sports</h3>
                <p>Preview live horse racing, then read football markets inside the sportsbook.</p>
                <span className="cat-go">Open <span aria-hidden="true">→</span></span>
              </span>
            </Link>
            <div className="cat-row">
              <Link className="cat-tile cat-lottery" href="/games/4d">
                <img src={categoryScenes.lottery.src} alt={categoryScenes.lottery.alt} width={1280} height={720} loading="lazy" />
                <span className="cat-shade" />
                <span className="cat-copy">
                  <h3>E9WIN 4D</h3>
                  <p>Choose Magnum, Da Ma Cai, Toto, or Singapore. Draws open in the lobby.</p>
                  <span className="cat-go">Open <span aria-hidden="true">→</span></span>
                </span>
              </Link>
              <Link className="cat-tile cat-fishing" href="/games/fishing">
                <img src={categoryScenes.fishing.src} alt={categoryScenes.fishing.alt} width={1280} height={720} loading="lazy" />
                <span className="cat-shade" />
                <span className="cat-copy">
                  <h3>E9WIN Fishing</h3>
                  <p>Arcade fishing titles open after sign-in. Sea-themed slot covers stay in slots.</p>
                  <span className="cat-go">Open <span aria-hidden="true">→</span></span>
                </span>
              </Link>
              <Link className="cat-tile cat-esports" href="/games/esports">
                <img src={categoryScenes.esports.src} alt={categoryScenes.esports.alt} width={1280} height={720} loading="lazy" />
                <span className="cat-shade" />
                <span className="cat-copy">
                  <h3>E9WIN Esports</h3>
                  <p>Esports markets sit with the sportsbook and open after you sign in.</p>
                  <span className="cat-go">Open <span aria-hidden="true">→</span></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="featured">
        <div className="feat-wrap">
          <div className="cat-head">
            <p className="kicker">Featured</p>
            <div className="cat-head-row">
              <h2 id="featured">Featured games</h2>
              <Link className="cat-all" href="/games">View all games <span aria-hidden="true">→</span></Link>
            </div>
            <p>A short list from the catalog. The full grid is on the games page.</p>
          </div>
          <div className="game-grid">
            {featured.map((game) => (
              <article className="game-card" key={game.id}>
                <img src={game.image} alt={`${game.name} by ${game.provider}`} width={640} height={640} loading="lazy" />
                <div className="meta">
                  <h3>{game.name}</h3>
                  <p>{game.provider}</p>
                  <Link className="btn btn-line" href={categoryPath(game.category)}>Play in lobby</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container why">
          <div>
            <h2>Why players open E9WIN</h2>
            <p className="lede">One lobby for slots, live tables, sports, lottery, and mobile play.</p>
            <img src="/images/brand/scene-live.webp" alt="Playtech baccarat key art of a dealer holding cards" width={1600} height={760} loading="lazy" />
          </div>
          <ol>
            <li><span className="num">01</span><div><strong>One catalog</strong>Slots and live tables have public covers. Sports has live horse racing. 4D, fishing, and esports open in the lobby after you sign in, on their own pages.</div></li>
            <li><span className="num">02</span><div><strong>Phone or browser</strong>The web lobby needs no install. iPhone uses Safari’s Add to Home Screen. Android uses the portal link on the download page. There is no store listing.</div></li>
            <li><span className="num">03</span><div><strong>Local payments</strong>The strip shows Malaysian banks, Touch ’n Go, Boost, GrabPay, ShopeePay, and USDT. The cashier also offers instant transfer, telco PIN, and bank transfer. Limits are on that screen.</div></li>
            <li><span className="num">04</span><div><strong>People who can help</strong>WhatsApp and Facebook are the public channels. In-lobby chat is available after sign-in. Send a username, not a password.</div></li>
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="lobby-map">
        <div className="container">
          <VisualSplit plain reverse src="/images/brand/scene-sports.webp" alt="A worn football on a night pitch under warm stadium lights">
          <h2 id="lobby-map">How the lobby is organised</h2>
          <p>Each category answers a different question. Use the page that matches what you want to open, then sign in when you are ready to play.</p>
          <div className="topic-grid">
            <article className="panel"><h3><Link href="/games/slots">E9WIN Slots</Link></h3><p>Video slot covers from Pragmatic Play and Lucky365. Rules and stake range are on the paytable inside the game.</p></article>
            <article className="panel"><h3><Link href="/games/live-casino">E9WIN Live Casino</Link></h3><p>Evolution and Playtech covers for baccarat, roulette, sic bo, and other tables. VIP Baccarat is a table name. Membership is the separate VIP page.</p></article>
            <article className="panel"><h3><Link href="/games/sports">E9WIN Sports</Link></h3><p>Live horse racing has a cover. Football, including the World Cup and the Premier League, is named. Current prices stay in the sportsbook.</p></article>
            <article className="panel"><h3><Link href="/games/4d">E9WIN 4D</Link></h3><p>Magnum, Da Ma Cai, Toto, and Singapore. Number selection and results open in the lobby.</p></article>
            <article className="panel"><h3><Link href="/games/fishing">E9WIN Fishing</Link></h3><p>Arcade titles after sign-in. Great Blue and Dolphin Reef stay in the slots catalog.</p></article>
            <article className="panel"><h3><Link href="/games/esports">E9WIN Esports</Link></h3><p>Markets with the sportsbook. Fixtures and prices open after you sign in.</p></article>
          </div>
          <p>Payments, access, and the rewards desk are separate: <Link href="/payment-methods">E9WIN payment methods</Link>, <Link href="/deposit">E9WIN deposit</Link>, <Link href="/withdrawal">E9WIN withdrawal</Link>, <Link href="/download">E9WIN download</Link>, <Link href="/promotions">E9WIN promotions</Link>, <Link href="/vip">E9WIN VIP</Link>, <Link href="/guides">E9WIN guides</Link>.</p>
          </VisualSplit>
        </div>
      </section>

      <section className="section" aria-labelledby="mobile-play">
        <div className="container">
          <VisualSplit plain src={pageScenes.download.src} alt={pageScenes.download.alt}>
          <h2 id="mobile-play">Play in the browser you already have</h2>
          <p>The same categories are available in the phone browser. An iPhone can add the site to the home screen from Safari. Android can use the player portal on the download page. A desktop browser is enough on Windows, Mac, and Linux.</p>
          <p>Reload the page to pick up the web lobby. If the portal link fails, use <Link href="/contact">WhatsApp</Link> and stay with the file the portal provides. The steps are in the <Link href="/guides/mobile-guide">E9WIN mobile guide</Link> and the <Link href="/guides/how-to-download">E9WIN download guide</Link>.</p>
          </VisualSplit>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <article className="panel panel-scene">
            <img src={pageScenes.download.src} alt={pageScenes.download.alt} width={1280} height={720} loading="lazy" />
            <p className="tag">Download</p>
            <h2>E9WIN download</h2>
            <p>Android uses the player portal on the download page. iPhone uses Safari’s Add to Home Screen. You can also stay in the mobile browser.</p>
            <Link className="btn btn-primary" href="/download">E9WIN mobile</Link>
          </article>
          <article className="panel panel-scene">
            <img src={pageScenes.vip.src} alt={pageScenes.vip.alt} width={1280} height={720} loading="lazy" />
            <p className="tag">VIP</p>
            <h2>E9WIN VIP</h2>
            <p>VIP is the membership label in the lobby rewards area. The account notice is where any current detail appears.</p>
            <Link className="btn btn-ghost" href="/vip">E9WIN VIP information</Link>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <article className="panel panel-scene">
            <img src={pageScenes.agent.src} alt={pageScenes.agent.alt} width={1280} height={720} loading="lazy" />
            <p className="tag">Agent</p>
            <h2>E9WIN agent</h2>
            <p>The agent program covers referrals and downline players. Commission details come from support when you apply.</p>
            <Link className="btn btn-ghost" href="/agent">E9WIN agent program</Link>
          </article>
          <article className="panel">
            <p className="tag">How it works</p>
            <h2>Register, fund, play, withdraw</h2>
            <ol className="steps">
              <li>Create an account with a name you can match to a payout.</li>
              <li>Sign in. Play continues in the player lobby.</li>
              <li>Browse a category, then open the title in the lobby.</li>
              <li>Read a promotion card before you opt in.</li>
              <li>Deposit with the cashier instruction for that attempt.</li>
              <li>Request a withdrawal to an account in the same name.</li>
              <li>Use WhatsApp or in-lobby chat if a step fails. Do not send the password.</li>
            </ol>
            <Link className="btn btn-line" href="/guides/how-to-register">Registration guide</Link>
          </article>
        </div>
      </section>

      <section className="section pay-section" aria-labelledby="payments">
        <div className="feat-wrap">
          <div className="cat-head">
            <div className="cat-head-row">
              <h2 id="payments">E9WIN payment methods</h2>
              <Link className="cat-all" href="/payment-methods">Payment methods <span aria-hidden="true">→</span></Link>
            </div>
            <p>Malaysia shown on the E9WIN payment strip.</p>
          </div>
        </div>
        <PaymentRail items={payments} />
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>E9WIN guides</h2>
              <p>Short instructions for the tasks players actually do.</p>
            </div>
            <Link className="btn btn-line" href="/guides">E9WIN Guides</Link>
          </div>
          <div className="guide-grid">
            {homeGuides.map((guide) => (
              <Link className="guide-card" key={guide.slug} href={`/guides/${guide.slug}`}>
                <img src={guideScenes[guide.category].src} alt={guideScenes[guide.category].alt} width={1280} height={720} loading="lazy" />
                <span className="guide-body">
                  <p className="tag">{guide.category}</p>
                  <h3>{guide.title}</h3>
                  <p>{guide.excerpt}</p>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="faq">
            <h2>FAQ</h2>
            {homeFaq.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
            <Link className="btn btn-line" href="/faq">Full FAQ</Link>
          </div>
          <article className="panel">
            <img className="still" src="/images/brand/scene-account.webp" alt="A quiet desk beside a night window" width={1600} height={760} loading="lazy" />
            <p className="tag">Responsible gaming</p>
            <h2>18+ and your own limits</h2>
            <p>E9WIN is for adults. Set a budget before you play, and stop when it is gone. Deposit limits and self-exclusion are described as account tools. Use them if the lobby offers them.</p>
            <Link className="btn btn-ghost" href="/responsible-gaming">Responsible gaming</Link>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <VisualSplit plain reverse src="/images/promotions/promo-welcome.webp" alt="A dark entrance lit with gold">
          <h2>Open an account or talk to support</h2>
          <p>Register to reach the player lobby. For help, use WhatsApp or the Facebook page published by E9WIN.</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/register">Register now</Link>
            <a className="btn btn-ghost" href={siteConfig.support.whatsapp}>WhatsApp</a>
          </div>
          </VisualSplit>
        </div>
      </section>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: homeFaq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }} />
    </>
  );
}
