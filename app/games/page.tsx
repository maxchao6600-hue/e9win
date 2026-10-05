import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqBlock } from "@/components/content/CopySections";
import { VisualSplit } from "@/components/content/VisualSplit";
import { JsonLd } from "@/components/seo/JsonLd";
import { GameBrowser } from "@/components/games/GameBrowser";
import { guideBySlug } from "@/lib/content";
import { categories, categoryPath, featuredGames, games, type GameCategory } from "@/lib/games";
import { pageMeta } from "@/lib/seo";
import { categoryScenes, guideScenes } from "@/lib/scenes";
import { absoluteUrl } from "@/lib/site";

const description = "Explore the E9WIN games hub: slots, live casino, sports, 4D lottery, fishing, and esports. Search the public catalog, then open a title in the lobby.";

export const metadata: Metadata = pageMeta({
  title: "E9WIN Games | Slots, Live Casino, Sports, 4D and More",
  description,
  path: "/games",
});

const faqs = [
  { q: "What games are available?", a: "E9WIN groups play into slots, live casino, sports, 4D lottery, fishing, and esports. This page stores covers for slots, live tables, and live horse racing. The other three categories open in the lobby after you sign in." },
  { q: "How are games organized?", a: "Each title belongs to one category. On this page you can search a cover by name or studio, or use a category chip. Category pages explain what that product is and how to reach it." },
  { q: "How do I find a game?", a: "Open Games, search the title if you know it, or choose a category chip. If the grid has no cover, open the matching category page and continue in the lobby." },
  { q: "Can I browse games before logging in?", a: "Yes. Covers, names, and studios on this site are visible without an account. Placing a stake requires a sign-in. The lobby is where the game actually opens." },
  { q: "Where can I find slots?", a: "Use the Slots chip on this page or open the slots category. Published covers name Pragmatic Play and Lucky365. The paytable is inside the game, not on this website." },
  { q: "How do I open a slot?", a: "Find the cover, sign in, and launch it from the lobby. Read the stake range on that screen before you play." },
  { q: "Where can I find live casino games?", a: "Open the live casino category. Published covers are Evolution and Playtech tables, including baccarat, roulette, and sic bo." },
  { q: "How does the live casino section work?", a: "A cover identifies the table. The dealer, the current round, and the table limits stay on the live screen. This site does not copy those limits." },
  { q: "Where can I access sports?", a: "Open the sports category. The public catalog shows live horse racing. Football, including the World Cup and the Premier League, is named in the sportsbook after you sign in." },
  { q: "How do I browse sports?", a: "Start with the horse racing cover if you want the artwork stored here. For other markets, sign in and read the sportsbook. Odds, fixtures, and results are not printed on this page." },
  { q: "Where can I find 4D?", a: "Open the 4D lottery category. Number selection happens in the lobby. This page does not show a thumbnail grid for it." },
  { q: "Which 4D operators are listed?", a: "The named games are Magnum, Da Ma Cai, Toto, and Singapore. Draw results, winning numbers, and payout tables are not reprinted here." },
  { q: "Can I access games on mobile?", a: "Yes. The same categories are in the phone browser. iPhone can use Safari Add to Home Screen. Android can use the portal download on the download page. There is no App Store or Google Play listing." },
  { q: "How do I browse games on a phone?", a: "Open Games, use search or a category chip, and launch from the lobby. If a cover is hard to read, rotate the phone or open the category page for the written explanation." },
];

const relatedGuides = [
  "games-guide",
  "slots-guide",
  "live-casino-guide",
  "sports-guide",
  "lottery-guide",
  "fishing-guide",
  "esports-guide",
  "mobile-guide",
  "security-guide",
] as const;

const neighbors: Record<GameCategory, GameCategory[]> = {
  slots: ["live-casino", "fishing"],
  "live-casino": ["slots", "sports"],
  sports: ["lottery", "esports"],
  lottery: ["sports", "slots"],
  fishing: ["slots", "live-casino"],
  esports: ["sports", "live-casino"],
};

export default function GamesPage() {
  const slotCount = games.filter((game) => game.category === "slots").length;
  const liveCount = games.filter((game) => game.category === "live-casino").length;
  const selected = featuredGames();
  const providerLabels = [...new Set(games.map((game) => game.provider))];

  return (
    <div className="container page-hero">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Games" }]} />

      <section className="hub-hero">
        <div>
          <p className="tag">Games hub</p>
          <h1>E9WIN Games</h1>
          <p>Look through slots, live casino, sports, 4D lottery, fishing, and esports in one place. Covers on this page are for discovery. The lobby is where a title opens after you sign in.</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="#catalog">Browse the catalog</Link>
            <Link className="btn btn-line" href="/register">Register</Link>
          </div>
        </div>
        <img src={categoryScenes.slots.src} alt={categoryScenes.slots.alt} width={1680} height={945} />
      </section>

      <section className="section hub-split">
        <img src={categoryScenes["live-casino"].src} alt={categoryScenes["live-casino"].alt} width={1600} height={760} />
        <div className="prose">
          <h2>Explore E9WIN games</h2>
          <p>The hub has two jobs. It shows the covers this website actually stores, and it explains the categories that only exist inside the lobby. You do not need an account to read either part.</p>
          <p>Slots, live tables, and live horse racing have artwork here: {slotCount} slot covers and {liveCount} live covers, plus the horse racing cover. Fishing, 4D, and esports are real categories, but searching them will not invent a thumbnail.</p>
          <p>Start with a category if you know the kind of game. Use search if you already know the title. Open the category page when you want the longer explanation, then sign in when you are ready to play.</p>
          <ul>
            <li>Category cards below go to a dedicated page for that product.</li>
            <li>The catalog grid searches names and studios on the stored covers.</li>
            <li>Launching a game, reading a paytable, or placing a stake happens in the lobby.</li>
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="categories-heading">
        <div className="section-head">
          <div>
            <p className="tag">Categories</p>
            <h2 id="categories-heading">Explore game categories</h2>
            <p>Six doors into the lobby. Each description is specific to what this site can show.</p>
          </div>
          <Link className="cat-all" href="#catalog">View all games</Link>
        </div>
        <div className="cat-showcase">
          <Link className="cat-tile cat-slots" href="/games/slots">
            <img src={categoryScenes.slots.src} alt={categoryScenes.slots.alt} width={1680} height={945} />
            <span className="cat-shade" />
            <span className="cat-copy">
              <h3>Slots</h3>
              <p>Video slot covers from Pragmatic Play and Lucky365. The paytable stays inside the game.</p>
              <span className="cat-go">Explore</span>
            </span>
          </Link>
          <Link className="cat-tile cat-live" href="/games/live-casino">
            <img src={categoryScenes["live-casino"].src} alt={categoryScenes["live-casino"].alt} width={1600} height={760} />
            <span className="cat-shade" />
            <span className="cat-copy">
              <h3>Live Casino</h3>
              <p>Evolution and Playtech tables, including baccarat, roulette, and sic bo. Limits stay on the table.</p>
              <span className="cat-go">Explore</span>
            </span>
          </Link>
          <Link className="cat-tile cat-sports" href="/games/sports">
            <img src={categoryScenes.sports.src} alt={categoryScenes.sports.alt} width={1600} height={760} />
            <span className="cat-shade" />
            <span className="cat-copy">
              <h3>Sports</h3>
              <p>Live horse racing has a cover. Football markets, including the World Cup and the Premier League, are read in the sportsbook.</p>
              <span className="cat-go">Explore</span>
            </span>
          </Link>
          <div className="cat-row">
            <Link className="cat-tile cat-lottery" href="/games/4d">
              <img src={categoryScenes.lottery.src} alt={categoryScenes.lottery.alt} width={1400} height={760} />
              <span className="cat-shade" />
              <span className="cat-copy">
                <h3>4D Lottery</h3>
                <p>Magnum, Da Ma Cai, Toto, and Singapore. Number entry is in the lobby. Results are not reprinted here.</p>
                <span className="cat-go">Explore</span>
              </span>
            </Link>
            <Link className="cat-tile cat-fishing" href="/games/fishing">
              <img src={categoryScenes.fishing.src} alt={categoryScenes.fishing.alt} width={1400} height={760} />
              <span className="cat-shade" />
              <span className="cat-copy">
                <h3>Fishing</h3>
                <p>Arcade fishing opens after sign-in. Great Blue and Dolphin Reef remain slots, so they are not fishing covers.</p>
                <span className="cat-go">Explore</span>
              </span>
            </Link>
            <Link className="cat-tile cat-esports" href="/games/esports">
              <img src={categoryScenes.esports.src} alt={categoryScenes.esports.alt} width={1400} height={760} />
              <span className="cat-shade" />
              <span className="cat-copy">
                <h3>Esports</h3>
                <p>Markets beside the sportsbook. This page does not list teams, tournaments, or prices.</p>
                <span className="cat-go">Explore</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="selected-heading">
        <div className="section-head">
          <div>
            <p className="tag">Catalog</p>
            <h2 id="selected-heading">Selected from the catalog</h2>
            <p>These titles are marked in the public data. The mark is not a ranking, a jackpot, or a player count.</p>
          </div>
          <Link className="cat-all" href="#catalog">View all games</Link>
        </div>
        <div className="game-grid">
          {selected.map((game) => (
            <article className="game-card" key={game.id}>
              <img src={game.image} alt={`${game.name} by ${game.provider}`} width={320} height={320} />
              <div className="meta">
                <h3>{game.name}</h3>
                <p>{game.provider} · {categories.find((item) => item.slug === game.category)?.title}</p>
                <Link className="btn btn-line" href={categoryPath(game.category)}>View category</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="catalog" aria-labelledby="browse-heading">
        <div className="section-head">
          <div>
            <h2 id="browse-heading">Browse the game collection</h2>
            <p>The grid is the stored catalog. It is not a second, secret lobby.</p>
          </div>
        </div>
        <GameBrowser />
      </section>

      <section className="section prose">
        <h2>Understanding E9WIN game categories</h2>
        <p>A new player usually needs one distinction: some products have covers on this website, and some are only named here. The table uses that split. It does not rank categories or promise a return.</p>
        <div className="hub-table-wrap">
          <table className="hub-table">
            <caption>What each E9WIN category contains, and where you open it</caption>
            <thead>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">What you can find</th>
                <th scope="col">How you open it</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><Link href="/games/slots">Slots</Link></th>
                <td>Video slot covers. Studios on those covers are Pragmatic Play and Lucky365.</td>
                <td>Filter the catalog, then launch in the lobby. The paytable is on the game screen.</td>
              </tr>
              <tr>
                <th scope="row"><Link href="/games/live-casino">Live Casino</Link></th>
                <td>Dealer-table covers from Evolution and Playtech, including baccarat, roulette, sic bo, and game-show titles in the catalog.</td>
                <td>Choose a cover, sign in, and read the limits on that table.</td>
              </tr>
              <tr>
                <th scope="row"><Link href="/games/sports">Sports</Link></th>
                <td>A live horse racing cover. Football is named, including the World Cup and the Premier League.</td>
                <td>Sign in and read the sportsbook. Odds and fixtures are not copied here.</td>
              </tr>
              <tr>
                <th scope="row"><Link href="/games/4d">4D Lottery</Link></th>
                <td>Magnum, Da Ma Cai, Toto, and Singapore.</td>
                <td>Open the category and enter numbers in the lobby. Results are not stored on this site.</td>
              </tr>
              <tr>
                <th scope="row"><Link href="/games/fishing">Fishing</Link></th>
                <td>Arcade fishing after sign-in. No public fishing covers.</td>
                <td>Use the fishing category in the lobby. Do not treat a sea-themed slot as a fishing game.</td>
              </tr>
              <tr>
                <th scope="row"><Link href="/games/esports">Esports</Link></th>
                <td>Markets offered with the sportsbook, separate from horse racing.</td>
                <td>Sign in and read the market that is open. Teams and prices are not listed here.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section hub-split" id="slots">
        <img src={categoryScenes.slots.src} alt={categoryScenes.slots.alt} width={1680} height={945} style={{ objectPosition: "36% 22%" }} />
        <div className="prose">
          <h2>Online slots</h2>
          <p>An online slot is a video game with its own rules screen. On E9WIN, the public slot list is the set of covers on this site. Names under the art are the catalog titles, and the studio is printed with the cover.</p>
          <p>Browse by scrolling the slots chip, or search a name such as the title on the cover. Opening it still means signing in. Stake range, paylines, and any feature rules are on the paytable inside the game. This hub does not reprint RTP, volatility, or jackpot amounts, because those figures are not stored with the covers.</p>
          <p>The same covers are available in the phone browser. If you are choosing a promotion later, the campaign card says which slots are eligible. This grid does not.</p>
          <p><Link href="/games/slots">Open slots</Link> · <Link href="/guides/slots-guide">Slots guide</Link></p>
        </div>
      </section>

      <section className="section hub-split reverse" id="live-casino">
        <img src={categoryScenes["live-casino"].src} alt={categoryScenes["live-casino"].alt} width={1600} height={760} style={{ objectPosition: "center 22%" }} />
        <div className="prose">
          <h2>Live casino</h2>
          <p>Live casino here means a table a studio is dealing, shown as a cover you can recognize before you join. The published covers are Evolution and Playtech. Titles in that set include baccarat, roulette, sic bo, dragon tiger, and game-show formats such as Mega Ball and Crazy Coin Flip.</p>
          <p>The cover is the discovery step. The live round, the shoe, and the table limits are only on the table. VIP Baccarat is a Playtech table name. Membership is explained on the <Link href="/vip">VIP page</Link>.</p>
          <p>You can review covers on a phone, then sign in to sit at the table. Nothing on this page is a result or a limit.</p>
          <p><Link href="/games/live-casino">Open live casino</Link> · <Link href="/guides/live-casino-guide">Live casino guide</Link></p>
        </div>
      </section>

      <section className="section hub-split" id="sports">
        <img src={categoryScenes.sports.src} alt={categoryScenes.sports.alt} width={1600} height={760} style={{ objectPosition: "left 46%" }} />
        <div className="prose">
          <h2>Sports</h2>
          <p>The sports category is the sportsbook, not a second slot lobby. The only sports cover stored with this site is live horse racing. Football is part of the category description: the World Cup and the Premier League are named. That naming is not a fixture list.</p>
          <p>Event browsing, prices, and whether a market is open are all inside the sportsbook after you sign in. A number from a chat or a screenshot is not the current price. Esports is a separate category beside sports, so a football question and an esports question do not use the same page.</p>
          <p>Mobile uses the same sportsbook. This page does not add a different set of markets for phones.</p>
          <p><Link href="/games/sports">Open sports</Link> · <Link href="/guides/sports-guide">Sports guide</Link></p>
        </div>
      </section>

      <section className="section hub-split reverse" id="lottery">
        <img src={categoryScenes.lottery.src} alt={categoryScenes.lottery.alt} width={1400} height={760} style={{ objectPosition: "72% center" }} />
        <div className="prose">
          <h2>4D lottery</h2>
          <p>4D on E9WIN is a numbers category. The operators named on the site are Magnum, Da Ma Cai, Toto, and Singapore. You pick the game in the lobby and enter digits there. This website does not keep a betting slip.</p>
          <p>There is no public cover grid, no winning-number archive, and no payout table on this hub. Draw time is shown on the lobby screen for that attempt. The older address /games/lottery points at the same category as /games/4d.</p>
          <p>Use a phone browser the same way: open the category, sign in, and read the selection screen. Do not use a slot with a sea theme, or a live game show, as a stand-in for 4D.</p>
          <p><Link href="/games/4d">Open 4D lottery</Link> · <Link href="/guides/lottery-guide">4D guide</Link></p>
        </div>
      </section>

      <section className="section hub-split" id="fishing">
        <img src={categoryScenes.fishing.src} alt={categoryScenes.fishing.alt} width={1400} height={760} style={{ objectPosition: "center 40%" }} />
        <div className="prose">
          <h2>Fishing games</h2>
          <p>Fishing games are arcade titles. Credit is spent on shots inside the game, and the stake for that shot is shown in the game, not on this page. E9WIN lists fishing as its own category. The public catalog does not include fishing covers or fishing titles.</p>
          <p>What is known is the boundary. Great Blue and Dolphin Reef are Lucky365 slots, so they stay in the slots grid. If a search for a fish name only returns those slots, that is the catalog working, not a fishing result.</p>
          <p>Sign in and open fishing in the lobby to see the list that account can launch. Mobile uses the same lobby path.</p>
          <p><Link href="/games/fishing">Open fishing</Link> · <Link href="/guides/fishing-guide">Fishing guide</Link></p>
        </div>
      </section>

      <section className="section hub-split reverse" id="esports">
        <img src={categoryScenes.esports.src} alt={categoryScenes.esports.alt} width={1400} height={760} style={{ objectPosition: "center 42%" }} />
        <div className="prose">
          <h2>Esports</h2>
          <p>Esports is a market category offered with the sportsbook. It is not a slot, and it is not the horse racing cover. This site does not store teams, tournaments, schedules, scores, or odds.</p>
          <p>Access is straightforward: open the esports category, sign in, and read the market the sportsbook is showing. If the market you wanted was football or racing, use the sports category instead. The phone uses that same sportsbook view.</p>
          <p><Link href="/games/esports">Open esports</Link> · <Link href="/guides/esports-guide">Esports guide</Link></p>
        </div>
      </section>

      <VisualSplit src="/images/games/gates-of-olympus.webp" alt="Gates of Olympus cover from the public catalog" reverse>
        <h2>How to find a game</h2>
        <p>Use the catalog when a cover exists. Use the category page when you need the product explained. Use the lobby when you are ready to open the client.</p>
        <ol className="steps">
          <li>Open Games from the menu, or stay on this page.</li>
          <li>Choose a category chip, or open one of the six category links above.</li>
          <li>Search a title or studio if you already know it. Browse the grid if you do not.</li>
          <li>Read the name and studio under the cover. If there is no cover, follow the category page instead of guessing from a similar image.</li>
          <li>Sign in and continue into the lobby. The game client, the paytable, or the market is the next screen.</li>
        </ol>
      </VisualSplit>

      <section className="section prose">
        <h2>How to choose a game</h2>
        <p>Nothing on this hub is ranked as a better game. The useful choice is the category that matches what you meant to open, then a title whose screen you understand.</p>
        <div className="topic-grid">
          <article className="panel">
            <h3>Category</h3>
            <p>Slots, a live table, a sportsbook market, a 4D entry, a fishing arcade, and esports are different products. Pick the category before you pick a picture.</p>
          </article>
          <article className="panel">
            <h3>What the screen is</h3>
            <p>A slot has a paytable. A live table has limits and a round in progress. A sportsbook has markets. Read that screen. This website does not replace it.</p>
          </article>
          <article className="panel">
            <h3>Device</h3>
            <p>Covers and category pages work in a phone browser. If a client is awkward on a small screen, switch to the category page for the written path, then open the lobby.</p>
          </article>
          <article className="panel">
            <h3>Your own preference</h3>
            <p>Choose the format you meant to play. A promotion may later restrict which products count. That restriction is on the promotion card, not in this grid.</p>
          </article>
        </div>
      </section>

      <VisualSplit src="/images/brand/scene-payments.webp" alt="A card and a phone on a dark cashier counter">
        <h2>How to start playing</h2>
        <p>This site can show you the catalog and the category notes. It does not take a stake. The path from reading to play is the account and the lobby.</p>
        <ol className="steps">
          <li><Link href="/register">Register</Link> with details you can match to a payout later.</li>
          <li><Link href="/login">Sign in</Link>. This website does not keep the play session.</li>
          <li>Return to <Link href="/games">Games</Link> and choose a category, or use search.</li>
          <li>Open the category page if you still need to know what that product is.</li>
          <li>Launch the title in the lobby and read the stake screen before the first bet.</li>
        </ol>
        <p>Payments are a separate step. The <Link href="/payment-methods">payment methods</Link> page lists what the cashier shows. Amounts and timing stay on that cashier attempt.</p>
      </VisualSplit>

      <section className="section hub-split">
        <img src="/images/brand/scene-devices.webp" alt="A phone and a laptop on a dark marble desk" width={1400} height={760} />
        <div className="prose">
          <h2>Mobile gaming</h2>
          <p>The games hub is the same site on a phone. Search, category chips, and the six category pages are in the mobile layout. You do not need a store app to read them.</p>
          <p>iPhone uses Safari’s Add to Home Screen when you want an icon. Android can use the portal download described on the <Link href="/download">download</Link> page. Neither path is an App Store or Google Play listing, and this site does not publish a device list.</p>
          <p>If a cover is cropped tightly, open the category page. The explanation there does not depend on the thumbnail. Account sign-in uses the same login as desktop.</p>
          <p><Link href="/guides/mobile-guide">Mobile guide</Link> · <Link href="/download">Download</Link></p>
        </div>
      </section>

      <section className="section prose">
        <h2>Studios on the published covers</h2>
        <p>Provider names below are the studios printed on covers in this catalog: {providerLabels.join(", ")}. There is no separate provider directory, and a name here is not a partnership claim beyond the covers themselves. The lobby can include more after you sign in.</p>
        <div className="topic-grid">
          <article className="panel">
            <h3>Pragmatic Play</h3>
            <p>Slot covers, including the titles marked in the catalog selection.</p>
          </article>
          <article className="panel">
            <h3>Lucky365</h3>
            <p>Slot covers. Great Blue and Dolphin Reef are in this group, so they are not fishing games.</p>
          </article>
          <article className="panel">
            <h3>Evolution and Playtech</h3>
            <p>Live table covers. Read the table for limits. VIP Baccarat is a Playtech table name.</p>
          </article>
          <article className="panel">
            <h3>RCB</h3>
            <p>The live horse racing cover in the sports catalog. Other sports markets are not given a second cover.</p>
          </article>
        </div>
      </section>

      <section className="section prose">
        <h2>Game discovery tips</h2>
        <div className="topic-grid">
          <article className="panel">
            <h3>Start with the category</h3>
            <p>A picture can look adjacent to the wrong product. The category label is the safer first filter.</p>
          </article>
          <article className="panel">
            <h3>Search the printed name</h3>
            <p>The search box matches the title and the studio on the cover. It does not search odds, draws, or fishing lists that are not stored here.</p>
          </article>
          <article className="panel">
            <h3>Read the line under the art</h3>
            <p>Studio and category are under the name. That is the identification this site can give you before the lobby.</p>
          </article>
          <article className="panel">
            <h3>Use a guide when the category is new</h3>
            <p>Slots, live tables, sports, 4D, fishing, and esports each have a short guide linked at the bottom of this page.</p>
          </article>
          <article className="panel">
            <h3>Keep promotions on their own card</h3>
            <p>A campaign can limit which games count. Open <Link href="/promotions">promotions</Link> and then the account card. Do not infer eligibility from a cover.</p>
          </article>
          <article className="panel">
            <h3>Switch device only after the category is clear</h3>
            <p>Phone and desktop show the same categories. Pick the product first, then use the screen that is comfortable.</p>
          </article>
        </div>
      </section>

      <section className="section prose">
        <h2>Common game access problems</h2>
        <p>These are the checks that match how this site is built. They are not a diagnosis of the lobby software.</p>
        <ul>
          <li>The game does not open from the cover. Sign in and launch it in the lobby. This page cannot start the client by itself.</li>
          <li>A category chip shows no artwork. Fishing, 4D, and esports have no public covers. Open that category page and continue in the lobby.</li>
          <li>The page does not load. Reload it. Use the <Link href="/download">download</Link> notes if you are on a phone and the portal link failed. Do not install a file from another site.</li>
          <li>The layout looks wrong on a phone. Reload, and try the other orientation. The category page still has the written path if a cover is awkward.</li>
          <li>The connection drops mid-session. The stake, if one was placed, is in the account, not on this website. Sign in again and check the lobby.</li>
          <li>You cannot get into the account. Use the <Link href="/guides/security-guide">security guide</Link>, then <Link href="/contact">contact</Link> or the <Link href="/faq">FAQ</Link>. Send a username, not a password.</li>
        </ul>
      </section>

      <FaqBlock items={faqs} title="Frequently asked questions" />

      <section className="section">
        <div className="section-head">
          <div>
            <h2>Related guides</h2>
            <p>Short instructions for the categories and the account tasks around them.</p>
          </div>
          <Link className="cat-all" href="/guides">Guide hub</Link>
        </div>
        <div className="guide-grid">
          {relatedGuides.map((slug) => {
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
        <h2>Related categories</h2>
        <p>If you opened the wrong door, the nearest alternative is usually one of these pairs.</p>
        <div className="topic-grid">
          {categories.map((category) => (
            <article className="panel" key={category.slug}>
              <h3><Link href={categoryPath(category.slug)}>{category.slug === "lottery" ? "4D Lottery" : category.title}</Link></h3>
              <p>
                Also see{" "}
                {neighbors[category.slug].map((slug, index) => (
                  <span key={slug}>
                    {index > 0 ? " and " : null}
                    <Link href={categoryPath(slug)}>{slug === "lottery" ? "4D Lottery" : categories.find((item) => item.slug === slug)?.title}</Link>
                  </span>
                ))}
                .
              </p>
            </article>
          ))}
        </div>
      </section>

      <VisualSplit src="/images/brand/hero-hall.webp" alt="A quiet luxury gaming hall in gold light" reverse>
        <h2>Explore the E9WIN game collection</h2>
        <p>Use the catalog for covers, the category pages for an explanation, and the lobby when you are ready to play.</p>
        <div className="cta-row">
          <Link className="btn btn-primary" href="#catalog">Browse the catalog</Link>
          <Link className="btn btn-line" href="/register">Register</Link>
          <Link className="btn btn-ghost" href="/contact">Contact</Link>
        </div>
      </VisualSplit>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "E9WIN Games",
        url: absoluteUrl("/games"),
        description,
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Games", item: absoluteUrl("/games") },
        ],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "E9WIN game categories",
        itemListElement: categories.map((category, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: category.slug === "lottery" ? "4D Lottery" : category.title,
          url: absoluteUrl(categoryPath(category.slug)),
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
