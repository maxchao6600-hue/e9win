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
          <span className="rays" />
          <span className="haze" />
          <span className="band" />
          <span className="floor" />
          <span className="motes" />
          <span className="grain" />
          <span className="vignette" />
        </div>
        <img
          className="hero-scene"
          src="/images/brand/hero-hall.webp"
          alt="A quiet luxury gaming hall in blue and gold light"
          width={1280}
          height={720}
          fetchPriority="high"
        />
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="kicker">Malaysia online gaming</p>
            <h1>E9WIN</h1>
            <p className="lede">Slots, live casino, sports, and 4D lottery in one lobby.</p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/register">Register now</Link>
              <Link className="btn btn-ghost" href="/games">Explore games</Link>
            </div>
          </div>
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
            <p>Slots, live casino, sports, 4D lottery, fishing, and esports. Open a category, then play in the lobby.</p>
          </div>
          <div className="cat-showcase">
            <Link className="cat-tile cat-slots" href="/games/slots">
              <img src="/images/games/sweet-bonanza.webp" alt="Colorful slot artwork from Sweet Bonanza" width={640} height={640} loading="lazy" />
              <span className="cat-shade" />
              <span className="cat-copy">
                <h3>Slots</h3>
                <p>A wide selection of video slots from the E9WIN lobby.</p>
                <span className="cat-go">Explore <span aria-hidden="true">→</span></span>
              </span>
            </Link>
            <Link className="cat-tile cat-live" href="/games/live-casino">
              <span className="cat-scene" aria-hidden="true">
                <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <radialGradient id="live-glow" cx="70%" cy="38%" r="62%">
                      <stop offset="0%" stopColor="#ffe08a" stopOpacity="0.85" />
                      <stop offset="42%" stopColor="#c47a12" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#1a0d08" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="live-wheel" cx="40%" cy="38%" r="65%">
                      <stop offset="0%" stopColor="#fff4cc" />
                      <stop offset="55%" stopColor="#e2b03a" />
                      <stop offset="100%" stopColor="#7a4e08" />
                    </radialGradient>
                  </defs>
                  <rect width="640" height="360" fill="#1a0c0a" />
                  <rect width="640" height="360" fill="url(#live-glow)" />
                  <ellipse cx="390" cy="150" rx="280" ry="120" fill="#7a1420" />
                  <ellipse cx="390" cy="132" rx="230" ry="92" fill="none" stroke="#f5d20a" strokeWidth="16" />
                  <ellipse cx="390" cy="132" rx="150" ry="58" fill="none" stroke="#f6f3ea" strokeWidth="6" />
                  <circle cx="390" cy="132" r="62" fill="url(#live-wheel)" />
                  <circle cx="390" cy="132" r="14" fill="#1a1008" />
                  <g fill="#f4efe4">
                    <ellipse cx="210" cy="150" rx="46" ry="26" transform="rotate(-18 210 150)" />
                    <ellipse cx="560" cy="168" rx="42" ry="24" transform="rotate(14 560 168)" />
                  </g>
                  <g fill="#d01228">
                    <ellipse cx="250" cy="96" rx="36" ry="20" transform="rotate(20 250 96)" />
                    <ellipse cx="520" cy="88" rx="36" ry="20" transform="rotate(-16 520 88)" />
                  </g>
                </svg>
              </span>
              <span className="cat-shade" />
              <span className="cat-copy">
                <h3>Live Casino</h3>
                <p>Baccarat, roulette, blackjack, and live table games.</p>
                <span className="cat-go">Explore <span aria-hidden="true">→</span></span>
              </span>
            </Link>
            <Link className="cat-tile cat-sports" href="/games/sports">
              <img src="/images/games/horse-racing.webp" alt="Live horse racing artwork from the sports lobby" width={640} height={640} loading="lazy" />
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
                  <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <radialGradient id="lot-glow" cx="62%" cy="38%" r="58%">
                        <stop offset="0%" stopColor="#ffe56a" stopOpacity="0.55" />
                        <stop offset="42%" stopColor="#146b38" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#06140e" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient id="lot-gold" cx="32%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#fff6c4" />
                        <stop offset="46%" stopColor="#f5d20a" />
                        <stop offset="100%" stopColor="#8a6408" />
                      </radialGradient>
                      <radialGradient id="lot-cream" cx="32%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="48%" stopColor="#f3ecdc" />
                        <stop offset="100%" stopColor="#b7a78a" />
                      </radialGradient>
                    </defs>
                    <rect width="640" height="360" fill="#07140e" />
                    <rect width="640" height="360" fill="url(#lot-glow)" />
                    <ellipse cx="400" cy="150" rx="250" ry="92" fill="#0b3a22" />
                    <ellipse cx="400" cy="138" rx="210" ry="64" fill="none" stroke="rgba(245,210,10,0.4)" strokeWidth="3" />
                    <circle cx="290" cy="118" r="72" fill="url(#lot-cream)" />
                    <circle cx="410" cy="92" r="64" fill="url(#lot-gold)" />
                    <circle cx="520" cy="128" r="56" fill="url(#lot-cream)" />
                    <circle cx="360" cy="176" r="46" fill="url(#lot-gold)" />
                    <text x="290" y="132" textAnchor="middle" fontSize="48" fontWeight="700" fill="#1a1408">8</text>
                    <text x="410" y="106" textAnchor="middle" fontSize="42" fontWeight="700" fill="#1a1408">4</text>
                    <text x="520" y="142" textAnchor="middle" fontSize="36" fontWeight="700" fill="#1a1408">2</text>
                    <text x="360" y="190" textAnchor="middle" fontSize="30" fontWeight="700" fill="#1a1408">6</text>
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
                  <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <linearGradient id="fish-water" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1a6ea8" />
                        <stop offset="46%" stopColor="#0b3d66" />
                        <stop offset="100%" stopColor="#06141f" />
                      </linearGradient>
                      <linearGradient id="fish-ray" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#d7f4ff" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#d7f4ff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <rect width="640" height="360" fill="url(#fish-water)" />
                    <polygon points="90,0 150,0 230,360 20,360" fill="url(#fish-ray)" />
                    <polygon points="280,0 330,0 410,360 230,360" fill="url(#fish-ray)" opacity="0.65" />
                    <polygon points="470,0 520,0 600,360 420,360" fill="url(#fish-ray)" opacity="0.4" />
                    <g fill="#e8f8ff">
                      <ellipse cx="250" cy="118" rx="92" ry="36" />
                      <polygon points="338,118 392,78 392,158" />
                      <circle cx="196" cy="110" r="5" fill="#062033" />
                    </g>
                    <g fill="#7fd4ea">
                      <ellipse cx="470" cy="168" rx="70" ry="26" />
                      <polygon points="404,168 360,142 360,194" />
                      <circle cx="508" cy="162" r="4" fill="#062033" />
                    </g>
                    <g fill="#b7ecff" opacity="0.9">
                      <ellipse cx="360" cy="78" rx="36" ry="14" />
                      <polygon points="396,78 424,62 424,94" />
                    </g>
                    <circle cx="160" cy="60" r="5" fill="rgba(255,255,255,0.4)" />
                    <circle cx="540" cy="48" r="4" fill="rgba(255,255,255,0.32)" />
                    <circle cx="200" cy="200" r="7" fill="rgba(255,255,255,0.18)" />
                    <circle cx="430" cy="40" r="3" fill="rgba(255,255,255,0.35)" />
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
                  <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <radialGradient id="esp-glow" cx="68%" cy="40%" r="60%">
                        <stop offset="0%" stopColor="#7a46e0" stopOpacity="0.7" />
                        <stop offset="50%" stopColor="#24124a" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#070814" stopOpacity="0" />
                      </radialGradient>
                      <linearGradient id="esp-line" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#f5d20a" stopOpacity="0" />
                        <stop offset="50%" stopColor="#f5d20a" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#f5d20a" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <rect width="640" height="360" fill="#0c0818" />
                    <rect width="640" height="360" fill="url(#esp-glow)" />
                    <g stroke="rgba(170,140,255,0.35)" fill="none">
                      <path d="M80 40 L560 300" strokeWidth="1" />
                      <path d="M140 20 L620 240" strokeWidth="1" />
                      <path d="M40 120 L520 340" strokeWidth="1" />
                    </g>
                    <ellipse cx="400" cy="130" rx="150" ry="54" fill="none" stroke="url(#esp-line)" strokeWidth="3" />
                    <path d="M250 168h210c22 0 36-16 36-36v-16c0-34-30-60-70-60h-120c-40 0-70 26-70 60v16c0 20 14 36 36 36z" fill="#1a1030" stroke="#f6f3ea" strokeWidth="5" />
                    <path d="M214 148h-36c-16 0-28 12-28 28v12c0 16 16 28 34 24l30-12" fill="none" stroke="#f5d20a" strokeWidth="6" strokeLinecap="round" />
                    <path d="M496 148h36c16 0 28 12 28 28v12c0 16-16 28-34 24l-30-12" fill="none" stroke="#f5d20a" strokeWidth="6" strokeLinecap="round" />
                    <circle cx="318" cy="128" r="10" fill="#f5d20a" />
                    <circle cx="392" cy="128" r="10" fill="#f6f3ea" />
                    <circle cx="500" cy="70" r="6" fill="#f5d20a" />
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
                <img src={game.image} alt={`${game.name} by ${game.provider}`} width={640} height={640} loading="lazy" />
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
