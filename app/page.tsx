import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqGroups, guides, payments, promotions } from "@/lib/content";
import { categories, featuredGames } from "@/lib/games";
import { siteConfig } from "@/lib/site";

const featured = featuredGames().slice(0, 8);
const homeFaq = faqGroups.flatMap((group) => group.items).slice(0, 5);

export default function HomePage() {
  const slots = categories[0];
  const live = categories[1];
  const rest = categories.slice(2);
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="kicker">Malaysia online gaming</p>
            <h1>E9WIN</h1>
            <p className="lede">Slots, live casino, sports, and 4D lottery in one lobby.</p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/register">Register now</Link>
              <Link className="btn btn-ghost" href="/games">Explore games</Link>
            </div>
          </div>
          <div className="stage" aria-label="E9WIN gaming showcase">
            <figure className="stage-main">
              <img src="/images/games/gates-of-olympus.webp" alt="Gates of Olympus, a Pragmatic Play slot in the E9WIN catalog" width={480} height={640} />
              <figcaption>Slots</figcaption>
            </figure>
            <figure className="stage-card stage-a">
              <img src="/images/games/lightning-baccarat.webp" alt="Lightning Baccarat live table" width={280} height={360} />
              <figcaption>Live casino</figcaption>
            </figure>
            <figure className="stage-card stage-b">
              <img src="/images/games/sweet-bonanza.webp" alt="Sweet Bonanza slot artwork" width={280} height={360} />
              <figcaption>Featured</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section follow" aria-labelledby="categories">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">Discover</p>
              <h2 id="categories">Game categories</h2>
              <p>Slots, live casino, sports, 4D lottery, fishing, and esports. Open a category, then play in the lobby.</p>
            </div>
            <Link className="btn btn-line" href="/games">View catalog</Link>
          </div>
          <div className="cat-layout">
            <Link className="cat-card large" href={`/games/${slots.slug}`}>
              {slots.image ? <img src={slots.image} alt="" /> : null}
              <div className="shade" />
              <div className="copy">
                <h3>{slots.title}</h3>
                <p>{slots.short}</p>
                <span className="btn btn-line">Open slots</span>
              </div>
            </Link>
            <div className="cat-stack">
              <Link className="cat-card" href={`/games/${live.slug}`}>
                {live.image ? <img src={live.image} alt="" /> : null}
                <div className="shade" />
                <div className="copy">
                  <h3>{live.title}</h3>
                  <p>{live.short}</p>
                </div>
              </Link>
              <Link className="cat-card" href="/games/sports">
                <img src="/images/games/horse-racing.webp" alt="" />
                <div className="shade" />
                <div className="copy">
                  <h3>Sports</h3>
                  <p>Football markets and live horse racing.</p>
                </div>
              </Link>
            </div>
            <div className="cat-band">
              {rest.slice(1).map((category) => (
                <Link className="band-link" key={category.slug} href={`/games/${category.slug}`}>
                  <span className="tag">{category.title}</span>
                  <strong>{category.short}</strong>
                  <span className="arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="featured">
        <div className="container">
          <div className="section-head">
            <div>
              <h2 id="featured">Featured games</h2>
              <p>A short list from the catalog. The full grid is on the games page.</p>
            </div>
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
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Promotions</h2>
              <p>Welcome, rebate, and mission campaigns. Active amounts and turnover are on the card in your account.</p>
            </div>
            <Link className="btn btn-line" href="/promotions">All promotions</Link>
          </div>
          <div className="promo-list">
            {promotions.slice(0, 3).map((item) => (
              <article className="promo" key={item.id}>
                <p className="tag">{item.category}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
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

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Payments</h2>
              <p>Marks shown on the E9WIN payment strip.</p>
            </div>
            <Link className="btn btn-line" href="/deposit">Deposit steps</Link>
          </div>
          <div className="pay-grid">
            {payments.map((item) => (
              <div className="pay" key={item.id}><img src={item.image} alt={item.name} /></div>
            ))}
          </div>
        </div>
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
