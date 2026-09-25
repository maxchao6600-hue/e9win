import type { Metadata } from "next";
import Link from "next/link";
import { PaymentRail } from "@/components/home/PaymentRail";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqGroups, guides, homepagePromotions, payments } from "@/lib/content";
import { PromoSlider } from "@/components/home/PromoSlider";
import { featuredGames } from "@/lib/games";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "E9WIN | Malaysia Online Gaming",
  description: siteConfig.description,
  path: "/",
});

const featured = featuredGames().slice(0, 8);
const homeFaq = faqGroups.flatMap((group) => group.items).slice(0, 5);

export default function HomePage() {
  const slides = homepagePromotions();
  return (
    <>
      <section className="hero">
        <div className="hero-world" aria-hidden="true">
          <span className="wash wash-navy" />
          <span className="wash wash-blue" />
          <span className="wash wash-violet" />
          <span className="wash wash-magenta" />
          <span className="wash wash-gold" />
          <span className="atmosphere" />
          <span className="rays" />
          <span className="band" />
          <span className="motes" />
          <span className="grain" />
          <span className="vignette" />
        </div>
        <div className="hero-copy">
          <p className="kicker">Malaysia online gaming</p>
          <h1>E9WIN</h1>
          <p className="lede">Slots, live casino, sports, and 4D lottery in one lobby.</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/register">Register now</Link>
            <Link className="btn btn-ghost" href="/games">Explore games</Link>
          </div>
        </div>
        <div className="hero-figure">
          <img
            className="figure-main"
            src="/images/games/gates-of-olympus.webp"
            alt="Gates of Olympus artwork from the E9WIN lobby"
            width={720}
            height={960}
            fetchPriority="high"
          />
        </div>
      </section>

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
          {slides.length > 0 ? <PromoSlider items={slides} /> : <p className="promo-empty">No current promotions available.</p>}
        </div>
      </section>

      <section className="section follow" aria-labelledby="categories">
        <div className="cat-wrap">
          <div className="cat-head">
            <p className="kicker">Discover</p>
            <div className="cat-head-row">
              <h2 id="categories">Game categories</h2>
              <Link className="cat-all" href="/games">View all games <span aria-hidden="true">→</span></Link>
            </div>
            <p>Slots, live casino, sports, 4D lottery, fishing, and esports. Open a category, then play in the lobby.</p>
          </div>
          <div className="cat-showcase">
            <Link className="cat-tile cat-slots" href="/games/slots">
              <img src="/images/games/sweet-bonanza.webp" alt="Online slots games" width={720} height={960} loading="lazy" />
              <span className="cat-shade" />
              <span className="cat-copy">
                <h3>Slots</h3>
                <p>A wide selection of video slots from the E9WIN lobby.</p>
                <span className="cat-go">Explore <span aria-hidden="true">→</span></span>
              </span>
            </Link>
            <Link className="cat-tile cat-live" href="/games/live-casino">
              <img src="/images/games/gold-vault-roulette.webp" alt="Live casino games" width={720} height={960} loading="lazy" />
              <span className="cat-shade" />
              <span className="cat-copy">
                <h3>Live Casino</h3>
                <p>Baccarat, roulette, blackjack, and live table games.</p>
                <span className="cat-go">Explore <span aria-hidden="true">→</span></span>
              </span>
            </Link>
            <Link className="cat-tile cat-sports" href="/games/sports">
              <img src="/images/games/horse-racing.webp" alt="Sports betting and horse racing" width={720} height={960} loading="lazy" />
              <span className="cat-shade" />
              <span className="cat-copy">
                <h3>Sports</h3>
                <p>Sports markets and live horse racing.</p>
                <span className="cat-go">Explore <span aria-hidden="true">→</span></span>
              </span>
            </Link>
            <div className="cat-row">
              <Link className="cat-tile cat-lottery" href="/games/lottery">
                <span className="cat-scene" aria-hidden="true">
                  <svg viewBox="0 0 320 180">
                    <circle cx="168" cy="78" r="34" fill="#f4efe4" />
                    <circle cx="214" cy="96" r="30" fill="#f5d20a" />
                    <circle cx="188" cy="128" r="26" fill="#efe6d4" />
                    <circle cx="246" cy="132" r="22" fill="#ffe56a" />
                    <text x="168" y="84" textAnchor="middle" fontSize="22" fontWeight="700" fill="#1a1408">8</text>
                    <text x="214" y="102" textAnchor="middle" fontSize="20" fontWeight="700" fill="#1a1408">4</text>
                    <text x="188" y="134" textAnchor="middle" fontSize="16" fontWeight="700" fill="#1a1408">2</text>
                    <text x="246" y="138" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1a1408">6</text>
                  </svg>
                </span>
                <span className="cat-shade" />
                <span className="cat-copy">
                  <h3>4D Lottery</h3>
                  <p>4D games including Magnum, Da Ma Cai, Toto, and Singapore.</p>
                  <span className="cat-go">Explore <span aria-hidden="true">→</span></span>
                </span>
              </Link>
              <Link className="cat-tile cat-fishing" href="/games/fishing">
                <span className="cat-scene" aria-hidden="true">
                  <svg viewBox="0 0 320 180">
                    <path d="M40 150c40-28 90-18 140-34" fill="none" stroke="rgba(180,230,255,0.35)" strokeWidth="1.5" />
                    <path d="M70 40c30 18 20 40-8 48 28-2 48 16 42 36-22-14-48-10-62-2 8-18 6-36 28-82z" fill="#7fd4ea" opacity="0.9" />
                    <path d="M150 70c36 10 58 8 78-8-8 22-6 36 10 48-28 2-52-6-78-12-8 16-28 22-46 16 10-16 22-28 36-44z" fill="#d7f6ff" />
                    <circle cx="92" cy="62" r="2.2" fill="#073044" />
                    <circle cx="196" cy="78" r="2" fill="#073044" />
                  </svg>
                </span>
                <span className="cat-shade" />
                <span className="cat-copy">
                  <h3>Fishing</h3>
                  <p>Arcade-style fishing games from the E9WIN lobby.</p>
                  <span className="cat-go">Explore <span aria-hidden="true">→</span></span>
                </span>
              </Link>
              <Link className="cat-tile cat-esports" href="/games/esports">
                <span className="cat-scene" aria-hidden="true">
                  <svg viewBox="0 0 320 180">
                    <path d="M118 108h84c10 0 16-8 16-16v-8c0-16-14-28-32-28h-52c-18 0-32 12-32 28v8c0 8 6 16 16 16z" fill="none" stroke="#f6f3ea" strokeWidth="3" />
                    <path d="M102 92h-16c-8 0-14 6-14 14v6c0 8 8 14 16 12l14-6" fill="none" stroke="#f5d20a" strokeWidth="3" />
                    <path d="M218 92h16c8 0 14 6 14 14v6c0 8-8 14-16 12l-14-6" fill="none" stroke="#f5d20a" strokeWidth="3" />
                    <circle cx="142" cy="86" r="4" fill="#f5d20a" />
                    <circle cx="178" cy="86" r="4" fill="#f6f3ea" />
                  </svg>
                </span>
                <span className="cat-shade" />
                <span className="cat-copy">
                  <h3>Esports</h3>
                  <p>Competitive gaming and esports markets.</p>
                  <span className="cat-go">Explore <span aria-hidden="true">→</span></span>
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
                <img src={game.image} alt={`${game.name} by ${game.provider}`} width={320} height={320} />
                <div className="meta">
                  <h3>{game.name}</h3>
                  <p>{game.provider}</p>
                  <Link className="btn btn-line" href={`/games/${game.category}`}>Play in lobby</Link>
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
          </div>
          <ol>
            <li><span className="num">01</span><div><strong>One catalog</strong>Slots, live tables, sports, lottery, fishing, and esports are described on the official pages.</div></li>
            <li><span className="num">02</span><div><strong>Phone or browser</strong>Android download, iOS home screen, and a web lobby that does not need an install.</div></li>
            <li><span className="num">03</span><div><strong>Local payments</strong>Malaysian banks, e-wallets, telco PIN, and USDT are shown on the payment strip.</div></li>
            <li><span className="num">04</span><div><strong>People who can help</strong>WhatsApp, Facebook, and in-lobby chat are the support paths that are actually published.</div></li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <article className="panel">
            <p className="tag">Download</p>
            <h2>Play on the phone you already use</h2>
            <p>Android uses the download on the Download page. iPhone uses Safari’s Add to Home Screen. You can also stay in the browser.</p>
            <Link className="btn btn-primary" href="/download">Get the app path</Link>
          </article>
          <article className="panel">
            <p className="tag">VIP</p>
            <h2>A membership path, not a made-up ladder</h2>
            <p>VIP sits with missions, rebates, and account notices. Tier details are shown in your account.</p>
            <Link className="btn btn-ghost" href="/vip">Read VIP</Link>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <article className="panel">
            <p className="tag">Agent</p>
            <h2>Introduce players. Commission is not quoted here.</h2>
            <p>Agents work with downline players and the in-account cashier. Commission details come from support when you apply.</p>
            <Link className="btn btn-ghost" href="/agent">Agent details</Link>
          </article>
          <article className="panel">
            <p className="tag">How it works</p>
            <h2>Register, fund, play, withdraw</h2>
            <ol className="steps">
              <li>Create an account with details you can verify.</li>
              <li>Deposit by bank, e-wallet, telco PIN, or USDT.</li>
              <li>Open a game from the lobby.</li>
              <li>Request a withdrawal to a matching account.</li>
            </ol>
            <Link className="btn btn-line" href="/guides/how-to-register">Registration guide</Link>
          </article>
        </div>
      </section>

      <section className="section pay-section" aria-labelledby="payments">
        <div className="feat-wrap">
          <div className="cat-head">
            <div className="cat-head-row">
              <h2 id="payments">Payments</h2>
              <Link className="cat-all" href="/deposit">Deposit guide <span aria-hidden="true">→</span></Link>
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
              <h2>Guides</h2>
              <p>Short instructions for the tasks players actually do.</p>
            </div>
            <Link className="btn btn-line" href="/guides">Guide hub</Link>
          </div>
          <div className="guide-grid">
            {guides.slice(0, 4).map((guide) => (
              <Link className="guide-card" key={guide.slug} href={`/guides/${guide.slug}`}>
                <p className="tag">{guide.category}</p>
                <h3>{guide.title}</h3>
                <p>{guide.excerpt}</p>
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
            <p className="tag">Responsible gaming</p>
            <h2>18+ and your own limits</h2>
            <p>E9WIN is for adults. Set a budget before you play, and stop when it is gone. Deposit limits and self-exclusion are described as account tools. Use them if the lobby offers them.</p>
            <Link className="btn btn-ghost" href="/responsible-gaming">Responsible gaming</Link>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container panel">
          <h2>Open an account or talk to support</h2>
          <p>Register to reach the player lobby. For help, use WhatsApp or the Facebook page published by E9WIN.</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/register">Register now</Link>
            <a className="btn btn-ghost" href={siteConfig.support.whatsapp}>WhatsApp</a>
          </div>
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
