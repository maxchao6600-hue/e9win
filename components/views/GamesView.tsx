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
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { presentGuide } from "@/lib/i18n/zhGuides";

const gamesDescription = "Explore the E9WIN games hub: slots, live casino, sports, 4D lottery, fishing, and esports. Search the public catalog, then open a title in the lobby.";

export function gamesMetadata(locale: Locale): Metadata {
  return pageMeta({
    title: tx(locale, "E9WIN Games | Slots, Live Casino, Sports, 4D and More", "E9WIN 游戏 | 老虎机、真人娱乐场、体育、4D、捕鱼与电竞"),
    description: tx(
      locale,
      gamesDescription,
      "浏览 E9WIN 游戏：老虎机、真人娱乐场、体育、4D、捕鱼和电竞。搜索公开目录，再在游戏大厅打开游戏。",
    ),
    path: localizePath("/games", locale),
    locale,
  });
}

const ALT: Record<string, string> = {
  "A quiet luxury gaming hall in gold light": "金色灯光下安静的豪华游戏厅",
  "Gates of Olympus on a display in a dark private room": "暗色私人房间屏幕上的 Gates of Olympus",
  "Playtech baccarat key art of a dealer holding cards": "Playtech 百家乐主视觉，荷官手持纸牌",
  "A worn football on a night pitch under warm stadium lights": "暖色球场灯光下的一只旧足球",
  "An empty brass lottery cage in a single warm light": "单束暖光下的空铜制摇奖笼",
  "A koi crossing a gold light shaft beside a submerged arch": "水下拱门旁，锦鲤穿过一道金光",
  "Hands on a keyboard lit by warm gold light": "暖金色灯光下、放在键盘上的双手",
  "A phone and a laptop on a dark marble desk": "深色大理石桌上的手机和笔记本电脑",
  "A quiet desk beside a night window": "夜窗旁安静的书桌",
  "A card and a phone on a dark cashier counter": "深色收银台柜台上的卡片和手机",
  "A dark entrance lit with gold": "金色灯光下的深色入口",
  "A dark entrance lit with gold, used as the welcome campaign still": "金色灯光下的深色入口，用作欢迎活动画面",
  "Gates of Olympus cover from the public catalog": "公开目录中的 Gates of Olympus 封面",
};

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

const categoryZh: Record<GameCategory, string> = {
  slots: "老虎机",
  "live-casino": "真人娱乐场",
  sports: "体育",
  lottery: "4D",
  fishing: "捕鱼",
  esports: "电竞",
};

function picture(locale: Locale, en: string) {
  return tx(locale, en, ALT[en] ?? en);
}

function categoryName(locale: Locale, slug: GameCategory) {
  const title = categories.find((item) => item.slug === slug)?.title ?? slug;
  const en = slug === "lottery" ? "4D Lottery" : title;
  return tx(locale, en, categoryZh[slug]);
}

export function GamesView({ locale }: { locale: Locale }) {
  const href = (path: string) => (path.startsWith("#") ? path : localizePath(path, locale));
  const t = (en: string, zh: string) => tx(locale, en, zh);
  const slotCount = games.filter((game) => game.category === "slots").length;
  const liveCount = games.filter((game) => game.category === "live-casino").length;
  const selected = featuredGames();
  const providerLabels = [...new Set(games.map((game) => game.provider))];
  const description = tx(
    locale,
    gamesDescription,
    "浏览 E9WIN 游戏：老虎机、真人娱乐场、体育、4D、捕鱼和电竞。搜索公开目录，再在游戏大厅打开游戏。",
  );
  const faqs = [
    {
      q: t("What games are available?", "有哪些游戏？"),
      a: t("E9WIN groups play into slots, live casino, sports, 4D lottery, fishing, and esports. This page stores covers for slots, live tables, and live horse racing. The other three categories open in the lobby after you sign in.", "E9WIN 把游戏分成老虎机、真人娱乐场、体育、4D、捕鱼和电竞。本页保存老虎机、真人桌和赛马的封面。另外三个分类在登录后于游戏大厅打开。"),
    },
    {
      q: t("How are games organized?", "游戏如何分类？"),
      a: t("Each title belongs to one category. On this page you can search a cover by name or studio, or use a category chip. Category pages explain what that product is and how to reach it.", "每个游戏属于一个分类。在本页可以按名称或工作室搜索封面，或使用分类标签。分类页说明该产品是什么，以及如何进入。"),
    },
    {
      q: t("How do I find a game?", "如何找到一个游戏？"),
      a: t("Open Games, search the title if you know it, or choose a category chip. If the grid has no cover, open the matching category page and continue in the lobby.", "打开游戏，如果知道名称就搜索，或选择分类标签。如果网格没有封面，打开对应的分类页，再在游戏大厅继续。"),
    },
    {
      q: t("Can I browse games before logging in?", "登录前可以浏览游戏吗？"),
      a: t("Yes. Covers, names, and studios on this site are visible without an account. Placing a stake requires a sign-in. The lobby is where the game actually opens.", "可以。本站的封面、名称和工作室不必有账户也能看。下注需要登录。游戏实际在游戏大厅打开。"),
    },
    {
      q: t("Where can I find slots?", "在哪里找老虎机？"),
      a: t("Use the Slots chip on this page or open the slots category. Published covers name Pragmatic Play and Lucky365. The paytable is inside the game, not on this website.", "使用本页的老虎机标签，或打开老虎机分类。已公布的封面写着 Pragmatic Play 和 Lucky365。赔付表在游戏里，不在这个网站上。"),
    },
    {
      q: t("How do I open a slot?", "如何打开老虎机？"),
      a: t("Find the cover, sign in, and launch it from the lobby. Read the stake range on that screen before you play.", "找到封面，登录，再从游戏大厅启动。玩之前先看那个画面上的投注范围。"),
    },
    {
      q: t("Where can I find live casino games?", "在哪里找真人娱乐场游戏？"),
      a: t("Open the live casino category. Published covers are Evolution and Playtech tables, including baccarat, roulette, and sic bo.", "打开真人娱乐场分类。已公布的封面是 Evolution 和 Playtech 桌台，包括百家乐、轮盘和骰宝。"),
    },
    {
      q: t("How does the live casino section work?", "真人娱乐场这一区如何运作？"),
      a: t("A cover identifies the table. The dealer, the current round, and the table limits stay on the live screen.", "封面用来认出桌台。荷官、当前局和桌限留在真人画面上。"),
    },
    {
      q: t("Where can I access sports?", "在哪里进入体育？"),
      a: t("Open the sports category. The public catalog shows live horse racing. Football, including the World Cup and the Premier League, is named in the sportsbook after you sign in.", "打开体育分类。公开目录展示赛马。足球，包括世界杯和英超，在登录后的体育博彩里有名称。"),
    },
    {
      q: t("How do I browse sports?", "如何浏览体育？"),
      a: t("Start with the horse racing cover if you want the artwork stored here. Current markets and prices are shown in the sportsbook after you sign in.", "如果要看本站保存的画面，从赛马封面开始。当前盘口和价格在登录后的体育博彩里显示。"),
    },
    {
      q: t("Where can I find 4D?", "在哪里找 4D？"),
      a: t("Open the 4D lottery category. Number selection happens in the lobby.", "打开 4D 分类。选号在游戏大厅进行。"),
    },
    {
      q: t("Which 4D operators are listed?", "列出了哪些 4D 经营者？"),
      a: t("The named games are Magnum, Da Ma Cai, Toto, and Singapore. Draw results and payout tables stay on the lobby screen.", "已列名的游戏是 Magnum（万能）、Da Ma Cai（大马彩）、Toto（多多）和 Singapore（新加坡）。开奖结果和派彩表留在游戏大厅画面上。"),
    },
    {
      q: t("Can I access games on mobile?", "可以在手机上进入游戏吗？"),
      a: t("Yes. The same categories are in the phone browser. iPhone can use Safari Add to Home Screen. Android can use the portal download on the download page. There is no App Store or Google Play listing.", "可以。手机浏览器里有同样的分类。iPhone 可以使用 Safari 加入主屏幕。Android 可以使用下载页上的门户下载。这条路径没有 App Store 或 Google Play 上架。"),
    },
    {
      q: t("How do I browse games on a phone?", "如何在手机上浏览游戏？"),
      a: t("Open Games, use search or a category chip, and launch from the lobby. If a cover is hard to read, rotate the phone or open the category page for the written explanation.", "打开游戏，使用搜索或分类标签，再从游戏大厅启动。如果封面不好读，转动手机，或打开分类页看文字说明。"),
    },
  ];

  return (
    <div className="container page-hero">
      <Breadcrumbs locale={locale} items={[{ href: href("/"), label: t("Home", "首页") }, { label: t("Games", "游戏") }]} />

      <section className="hub-hero">
        <div>
          <p className="tag">{t("Games hub", "游戏页")}</p>
          <h1>{t("E9WIN Games", "E9WIN 游戏")}</h1>
          <p>{t("E9WIN games cover slots, live casino, sports, 4D, fishing, and esports. Covers on this page are for discovery. A title opens in the lobby after you sign in.", "E9WIN 游戏包括老虎机、真人娱乐场、体育、4D、捕鱼和电竞。本页封面用来查找。登录后，游戏在游戏大厅打开。")}</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="#catalog">{t("Browse the catalog", "浏览目录")}</Link>
            <Link className="btn btn-line" href={href("/register")}>{t("Register", "注册")}</Link>
          </div>
        </div>
        <img src={categoryScenes.slots.src} alt={picture(locale, categoryScenes.slots.alt)} width={1680} height={945} />
      </section>

      <section className="section hub-split">
        <img src={categoryScenes["live-casino"].src} alt={picture(locale, categoryScenes["live-casino"].alt)} width={1600} height={760} />
        <div className="prose">
          <h2>{t("Explore E9WIN games", "浏览 E9WIN 游戏")}</h2>
          <p>{t("E9WIN game categories split the lobby into six products. This hub shows the covers the site stores, and it explains the categories that open after you sign in. You can read either part before you create an account.", "E9WIN 游戏分类把大厅分成六种产品。本页展示网站保存的封面，并说明登录后才打开的分类。建立账户之前，两部分都可以先读。")}</p>
          <p>{t(`Slots, live tables, and live horse racing have artwork here: ${slotCount} slot covers and ${liveCount} live covers, plus the horse racing cover. Fishing, 4D, and esports are real categories, but searching them will not invent a thumbnail.`, `老虎机、真人桌和赛马在这里有画面：${slotCount} 个老虎机封面和 ${liveCount} 个真人封面，另加赛马封面。捕鱼、4D 和电竞是真实分类，但搜索它们不会凭空出现缩略图。`)}</p>
          <p>{t("Start with a category if you know the kind of game. Use search if you already know the title. Open the category page when you want the longer explanation, then sign in when you are ready to play.", "如果知道想玩的种类，先从分类开始。如果已经知道名称，就用搜索。想看较长说明时打开分类页，准备玩时再登录。")}</p>
          <ul>
            <li>{t("Category cards below go to a dedicated page for that product.", "下面的分类卡片会进入该产品的专页。")}</li>
            <li>{t("The catalog grid searches names and studios on the stored covers.", "目录网格搜索已保存封面上的名称和工作室。")}</li>
            <li>{t("Launching a game, reading a paytable, or placing a stake happens in the lobby.", "启动游戏、阅读赔付表或下注，都在游戏大厅进行。")}</li>
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="categories-heading">
        <div className="section-head">
          <div>
            <p className="tag">{t("Categories", "分类")}</p>
            <h2 id="categories-heading">{t("E9WIN game categories", "E9WIN 游戏分类")}</h2>
            <p>{t("Six doors into the lobby. Each description is specific to what this site can show.", "进入游戏大厅的六道门。每段说明只写本站能够展示的内容。")}</p>
          </div>
          <Link className="cat-all" href="#catalog">{t("View all games", "查看全部游戏")}</Link>
        </div>
        <div className="cat-showcase">
          <Link className="cat-tile cat-slots" href={href("/games/slots")}>
            <img src={categoryScenes.slots.src} alt={picture(locale, categoryScenes.slots.alt)} width={1680} height={945} />
            <span className="cat-shade" />
            <span className="cat-copy">
              <h3>{t("E9WIN Slots", "E9WIN 老虎机")}</h3>
              <p>{t("Video slot covers from Pragmatic Play and Lucky365. The paytable stays inside the game.", "Pragmatic Play 和 Lucky365 的老虎机封面。赔付表留在游戏里。")}</p>
              <span className="cat-go">{t("Open", "打开")}</span>
            </span>
          </Link>
          <Link className="cat-tile cat-live" href={href("/games/live-casino")}>
            <img src={categoryScenes["live-casino"].src} alt={picture(locale, categoryScenes["live-casino"].alt)} width={1600} height={760} />
            <span className="cat-shade" />
            <span className="cat-copy">
              <h3>{t("E9WIN Live Casino", "E9WIN 真人娱乐场")}</h3>
              <p>{t("Evolution and Playtech tables, including baccarat, roulette, and sic bo. Limits stay on the table.", "Evolution 和 Playtech 桌台，包括百家乐、轮盘和骰宝。限额留在桌面上。")}</p>
              <span className="cat-go">{t("Open", "打开")}</span>
            </span>
          </Link>
          <Link className="cat-tile cat-sports" href={href("/games/sports")}>
            <img src={categoryScenes.sports.src} alt={picture(locale, categoryScenes.sports.alt)} width={1600} height={760} />
            <span className="cat-shade" />
            <span className="cat-copy">
              <h3>{t("E9WIN Sports", "E9WIN 体育")}</h3>
              <p>{t("Live horse racing has a cover. Football markets, including the World Cup and the Premier League, are read in the sportsbook.", "赛马有封面。足球盘口，包括世界杯和英超，在体育博彩里阅读。")}</p>
              <span className="cat-go">{t("Open", "打开")}</span>
            </span>
          </Link>
          <div className="cat-row">
            <Link className="cat-tile cat-lottery" href={href("/games/4d")}>
              <img src={categoryScenes.lottery.src} alt={picture(locale, categoryScenes.lottery.alt)} width={1400} height={760} />
              <span className="cat-shade" />
              <span className="cat-copy">
                <h3>{t("E9WIN 4D Lottery", "E9WIN 4D")}</h3>
                <p>{t("Magnum, Da Ma Cai, Toto, and Singapore. Number entry and draw results stay in the lobby.", "Magnum（万能）、Da Ma Cai（大马彩）、Toto（多多）和 Singapore（新加坡）。输入号码和开奖结果留在游戏大厅。")}</p>
                <span className="cat-go">{t("Open", "打开")}</span>
              </span>
            </Link>
            <Link className="cat-tile cat-fishing" href={href("/games/fishing")}>
              <img src={categoryScenes.fishing.src} alt={picture(locale, categoryScenes.fishing.alt)} width={1400} height={760} />
              <span className="cat-shade" />
              <span className="cat-copy">
                <h3>{t("E9WIN Fishing", "E9WIN 捕鱼")}</h3>
                <p>{t("Arcade fishing opens after sign-in. Great Blue and Dolphin Reef stay in the slots catalog.", "街机捕鱼在登录后打开。Great Blue 和 Dolphin Reef 留在老虎机目录。")}</p>
                <span className="cat-go">{t("Open", "打开")}</span>
              </span>
            </Link>
            <Link className="cat-tile cat-esports" href={href("/games/esports")}>
              <img src={categoryScenes.esports.src} alt={picture(locale, categoryScenes.esports.alt)} width={1400} height={760} />
              <span className="cat-shade" />
              <span className="cat-copy">
                <h3>{t("E9WIN Esports", "E9WIN 电竞")}</h3>
                <p>{t("Markets beside the sportsbook. Teams, tournaments, and prices open after you sign in.", "盘口在体育博彩旁边。队伍、赛事和价格在登录后打开。")}</p>
                <span className="cat-go">{t("Open", "打开")}</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="selected-heading">
        <div className="section-head">
          <div>
            <p className="tag">{t("Catalog", "目录")}</p>
            <h2 id="selected-heading">{t("Selected from the catalog", "从目录中选出")}</h2>
            <p>{t("These titles are marked in the public data. The mark is not a ranking, a jackpot, or a player count.", "这些名称在公开数据里被标出。这个标记不是排名、累积奖池或玩家人数。")}</p>
          </div>
          <Link className="cat-all" href="#catalog">{t("View all games", "查看全部游戏")}</Link>
        </div>
        <div className="game-grid">
          {selected.map((game) => (
            <article className="game-card" key={game.id}>
              <img src={game.image} alt={t(`${game.name} by ${game.provider}`, `${game.name}，${game.provider}`)} width={320} height={320} />
              <div className="meta">
                <h3>{game.name}</h3>
                <p>{game.provider} · {categoryName(locale, game.category)}</p>
                <Link className="btn btn-line" href={href(categoryPath(game.category))}>{t("View category", "查看分类")}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="catalog" aria-labelledby="browse-heading">
        <div className="section-head">
          <div>
            <h2 id="browse-heading">{t("Browse the game collection", "浏览游戏集合")}</h2>
            <p>{t("The grid is the stored catalog. It is not a second, secret lobby.", "这个网格就是已保存的目录。它不是第二个、隐藏的大厅。")}</p>
          </div>
        </div>
        <GameBrowser locale={locale} />
      </section>

      <section className="section prose">
        <h2>{t("Understanding E9WIN game categories", "理解 E9WIN 游戏分类")}</h2>
        <p>{t("A new player usually needs one distinction: some products have covers on this website, and some are only named here. The table uses that split. It does not rank categories or promise a return.", "新玩家通常只需要分清一件事：有些产品在本站有封面，有些只在这里被点名。表格用的就是这个区分。它不给分类排名，也不承诺回报。")}</p>
        <div className="hub-table-wrap">
          <table className="hub-table">
            <caption>{t("What each E9WIN category contains, and where you open it", "每个 E9WIN 分类包含什么，以及在哪里打开")}</caption>
            <thead>
              <tr>
                <th scope="col">{t("Category", "分类")}</th>
                <th scope="col">{t("What you can find", "你可以找到什么")}</th>
                <th scope="col">{t("How you open it", "如何打开")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><Link href={href("/games/slots")}>{t("Slots", "老虎机")}</Link></th>
                <td>{t("Video slot covers. Studios on those covers are Pragmatic Play and Lucky365.", "老虎机封面。封面上的工作室是 Pragmatic Play 和 Lucky365。")}</td>
                <td>{t("Filter the catalog, then launch in the lobby. The paytable is on the game screen.", "筛选目录，再在游戏大厅启动。赔付表在游戏画面上。")}</td>
              </tr>
              <tr>
                <th scope="row"><Link href={href("/games/live-casino")}>{t("Live Casino", "真人娱乐场")}</Link></th>
                <td>{t("Dealer-table covers from Evolution and Playtech, including baccarat, roulette, sic bo, and game-show titles in the catalog.", "Evolution 和 Playtech 的荷官桌台封面，包括目录里的百家乐、轮盘、骰宝和游戏节目标题。")}</td>
                <td>{t("Choose a cover, sign in, and read the limits on that table.", "选择封面，登录，再阅读该桌的限额。")}</td>
              </tr>
              <tr>
                <th scope="row"><Link href={href("/games/sports")}>{t("Sports", "体育")}</Link></th>
                <td>{t("A live horse racing cover. Football is named, including the World Cup and the Premier League.", "一张赛马封面。足球有名称，包括世界杯和英超。")}</td>
                <td>{t("Sign in and read the sportsbook. Odds and fixtures are not copied here.", "登录后阅读体育博彩。赔率和赛程不抄到这里。")}</td>
              </tr>
              <tr>
                <th scope="row"><Link href={href("/games/4d")}>{t("4D Lottery", "4D")}</Link></th>
                <td>{t("Magnum, Da Ma Cai, Toto, and Singapore.", "Magnum（万能）、Da Ma Cai（大马彩）、Toto（多多）和 Singapore（新加坡）。")}</td>
                <td>{t("Open the category and enter numbers in the lobby. Results are not stored on this site.", "打开分类，在游戏大厅输入号码。结果不保存在本站。")}</td>
              </tr>
              <tr>
                <th scope="row"><Link href={href("/games/fishing")}>{t("Fishing", "捕鱼")}</Link></th>
                <td>{t("Arcade fishing after sign-in. No public fishing covers.", "登录后的街机捕鱼。没有公开捕鱼封面。")}</td>
                <td>{t("Use the fishing category in the lobby. Do not treat a sea-themed slot as a fishing game.", "使用游戏大厅里的捕鱼分类。不要把海洋主题的老虎机当成捕鱼游戏。")}</td>
              </tr>
              <tr>
                <th scope="row"><Link href={href("/games/esports")}>{t("Esports", "电竞")}</Link></th>
                <td>{t("Markets offered with the sportsbook, separate from horse racing.", "和体育博彩一起提供的盘口，和赛马分开。")}</td>
                <td>{t("Sign in and read the market that is open. Teams and prices are not listed here.", "登录后阅读正在开放的盘口。队伍和价格不列在这里。")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section hub-split" id="slots">
        <img src={categoryScenes.slots.src} alt={picture(locale, categoryScenes.slots.alt)} width={1680} height={945} style={{ objectPosition: "36% 22%" }} />
        <div className="prose">
          <h2>{t("Online slots", "线上老虎机")}</h2>
          <p>{t("An online slot is a video game with its own rules screen. On E9WIN, the public slot list is the set of covers on this site. Names under the art are the catalog titles, and the studio is printed with the cover.", "线上老虎机是有自己规则画面的电子游戏。在 E9WIN，公开老虎机名单就是本站的这组封面。画面下的名称是目录标题，工作室印在封面上。")}</p>
          <p>{t("Browse by scrolling the slots chip, or search a name such as the title on the cover. Opening it still means signing in. Stake range, paylines, and any RTP figure belong on the paytable inside the game.", "滚动老虎机标签来浏览，或搜索封面上的名称。打开仍然要登录。投注范围、赔付线和任何 RTP 数字属于游戏内的赔付表。")}</p>
          <p>{t("The same covers are available in the phone browser. If you are choosing a promotion later, the campaign card says which slots are eligible. This grid does not.", "手机浏览器里有同样的封面。如果之后要选优惠，活动卡片会写明哪些老虎机符合资格。这个网格不写。")}</p>
          <p><Link href={href("/games/slots")}>{t("E9WIN Slots", "E9WIN 老虎机")}</Link>{" · "}<Link href={href("/guides/slots-guide")}>{t("E9WIN Slots Guide", "E9WIN 老虎机指南")}</Link></p>
        </div>
      </section>

      <section className="section hub-split reverse" id="live-casino">
        <img src={categoryScenes["live-casino"].src} alt={picture(locale, categoryScenes["live-casino"].alt)} width={1600} height={760} style={{ objectPosition: "center 22%" }} />
        <div className="prose">
          <h2>{t("Live casino", "真人娱乐场")}</h2>
          <p>{t("Live casino here means a table a studio is dealing, shown as a cover you can recognize before you join. The published covers are Evolution and Playtech. Titles in that set include baccarat, roulette, sic bo, dragon tiger, and game-show formats such as Mega Ball and Crazy Coin Flip.", "这里的真人娱乐场，是工作室正在发牌的桌台，加入前先以封面认出。已公布的封面来自 Evolution 和 Playtech。这组标题包括百家乐、轮盘、骰宝、龙虎，以及 Mega Ball、Crazy Coin Flip 这类游戏节目形式。")}</p>
          <p>{t("The cover is the discovery step. The live round, the shoe, and the table limits are only on the table. VIP Baccarat is a Playtech table name. Membership is explained on the", "封面是查找的一步。当前局、牌靴和桌限只在桌面上。VIP Baccarat 是 Playtech 桌名。VIP会员说明在")} <Link href={href("/vip")}>{t("VIP page", "VIP 页")}</Link>{t(".", "。")}</p>
          <p>{t("You can review covers on a phone, then sign in to sit at the table. Nothing on this page is a result or a limit.", "可以先在手机上看封面，再登录入座。本页没有结果，也没有限额。")}</p>
          <p><Link href={href("/games/live-casino")}>{t("E9WIN Live Casino", "E9WIN 真人娱乐场")}</Link>{" · "}<Link href={href("/guides/live-casino-guide")}>{t("E9WIN Live Casino Guide", "E9WIN 真人娱乐场指南")}</Link></p>
        </div>
      </section>

      <section className="section hub-split" id="sports">
        <img src={categoryScenes.sports.src} alt={picture(locale, categoryScenes.sports.alt)} width={1600} height={760} style={{ objectPosition: "left 46%" }} />
        <div className="prose">
          <h2>{t("Sports", "体育")}</h2>
          <p>{t("The sports category is the sportsbook, not a second slot lobby. The only sports cover stored with this site is live horse racing. Football is part of the category description: the World Cup and the Premier League are named. That naming is not a fixture list.", "体育分类是体育博彩，不是第二个老虎机大厅。本站保存的体育封面只有赛马。足球属于分类说明：世界杯和英超被点名。点名不是赛程表。")}</p>
          <p>{t("Event browsing, prices, and whether a market is open are all inside the sportsbook after you sign in. A number from a chat or a screenshot is not the current price. Esports is a separate category beside sports, so a football question and an esports question do not use the same page.", "浏览赛事、价格，以及盘口是否开放，都在登录后的体育博彩里。聊天或截图里的数字不是当前价格。电竞是体育旁边的另一个分类，所以足球问题和电竞问题不用同一页。")}</p>
          <p>{t("Mobile uses the same sportsbook and the same markets.", "手机使用同一个体育博彩和同样的盘口。")}</p>
          <p><Link href={href("/games/sports")}>{t("E9WIN Sports", "E9WIN 体育")}</Link>{" · "}<Link href={href("/guides/sports-guide")}>{t("E9WIN Sports Guide", "E9WIN 体育指南")}</Link></p>
        </div>
      </section>

      <section className="section hub-split reverse" id="lottery">
        <img src={categoryScenes.lottery.src} alt={picture(locale, categoryScenes.lottery.alt)} width={1400} height={760} style={{ objectPosition: "72% center" }} />
        <div className="prose">
          <h2>{t("4D lottery", "4D")}</h2>
          <p>{t("4D on E9WIN is a numbers category. The operators named on the site are Magnum, Da Ma Cai, Toto, and Singapore. You pick the game in the lobby and enter digits there.", "E9WIN 的 4D 是号码分类。本站点名的经营者是 Magnum（万能）、Da Ma Cai（大马彩）、Toto（多多）和 Singapore（新加坡）。在游戏大厅选择游戏并输入数字。")}</p>
          <p>{t("Draw time and the payout table are shown on the lobby screen for that attempt. The older address /games/lottery points at the same category as /games/4d.", "该次的开奖时间和派彩表显示在游戏大厅画面上。较早的地址 /zh/games/lottery 与 /zh/games/4d 是同一分类。")}</p>
          <p>{t("Use a phone browser the same way: open the category, sign in, and read the selection screen. Do not use a slot with a sea theme, or a live game show, as a stand-in for 4D.", "手机浏览器同样使用：打开分类，登录，阅读选号画面。不要用海洋主题的老虎机或真人游戏节目代替 4D。")}</p>
          <p><Link href={href("/games/4d")}>{t("E9WIN 4D Lottery", "E9WIN 4D")}</Link>{" · "}<Link href={href("/guides/lottery-guide")}>{t("E9WIN 4D Guide", "E9WIN 4D 指南")}</Link></p>
        </div>
      </section>

      <section className="section hub-split" id="fishing">
        <img src={categoryScenes.fishing.src} alt={picture(locale, categoryScenes.fishing.alt)} width={1400} height={760} style={{ objectPosition: "center 40%" }} />
        <div className="prose">
          <h2>{t("Fishing games", "捕鱼游戏")}</h2>
          <p>{t("Fishing games are arcade titles. Credit is spent on shots inside the game, and the stake for that shot is shown in the game. E9WIN Fishing is its own category, and the current list opens in the lobby after you sign in.", "捕鱼是街机游戏。游戏内的射击会用掉点数，该次射击的投注显示在游戏里。E9WIN 捕鱼是独立分类，当前名单在登录后的游戏大厅打开。")}</p>
          <p>{t("What is known is the boundary. Great Blue and Dolphin Reef are Lucky365 slots, so they stay in the slots grid. If a search for a fish name only returns those slots, that is the catalog working, not a fishing result.", "能够确定的是这条界线。Great Blue 和 Dolphin Reef 是 Lucky365 老虎机，所以留在老虎机网格。如果搜索鱼的名称只返回那些老虎机，那是目录在正常运作，不是捕鱼结果。")}</p>
          <p>{t("Sign in and open fishing in the lobby to see the list that account can launch. Mobile uses the same lobby path.", "登录后在游戏大厅打开捕鱼，才能看到该账户可以启动的名单。手机走同一条大厅路径。")}</p>
          <p><Link href={href("/games/fishing")}>{t("E9WIN Fishing", "E9WIN 捕鱼")}</Link>{" · "}<Link href={href("/guides/fishing-guide")}>{t("E9WIN Fishing Guide", "E9WIN 捕鱼指南")}</Link></p>
        </div>
      </section>

      <section className="section hub-split reverse" id="esports">
        <img src={categoryScenes.esports.src} alt={picture(locale, categoryScenes.esports.alt)} width={1400} height={760} style={{ objectPosition: "center 42%" }} />
        <div className="prose">
          <h2>{t("Esports", "电竞")}</h2>
          <p>{t("Esports is a market category offered with the sportsbook, separate from slots and from the horse racing cover. Current teams, tournaments, and prices are shown in the lobby after you sign in.", "电竞是和体育博彩一起提供的盘口分类，和老虎机、赛马封面分开。当前队伍、赛事和价格在登录后的游戏大厅显示。")}</p>
          <p>{t("Access is straightforward: open the esports category, sign in, and read the market the sportsbook is showing. If the market you wanted was football or racing, use the sports category instead. The phone uses that same sportsbook view.", "进入方式很直接：打开电竞分类，登录，阅读体育博彩正在显示的盘口。如果要看的是足球或赛马，改用体育分类。手机使用同一个体育博彩画面。")}</p>
          <p><Link href={href("/games/esports")}>{t("E9WIN Esports", "E9WIN 电竞")}</Link>{" · "}<Link href={href("/guides/esports-guide")}>{t("E9WIN Esports Guide", "E9WIN 电竞指南")}</Link></p>
        </div>
      </section>

      <VisualSplit src="/images/games/gates-of-olympus.webp" alt={picture(locale, "Gates of Olympus cover from the public catalog")} reverse>
        <h2>{t("How to find a game", "如何找到游戏")}</h2>
        <p>{t("Use the catalog when a cover exists. Use the category page when you need the product explained. Use the lobby when you are ready to open the client.", "有封面时用目录。需要说明该产品时用分类页。准备打开客户端时用游戏大厅。")}</p>
        <ol className="steps">
          <li>{t("Open Games from the menu, or stay on this page.", "从菜单打开游戏，或留在本页。")}</li>
          <li>{t("Choose a category chip, or open one of the six category links above.", "选择分类标签，或打开上面六个分类链接之一。")}</li>
          <li>{t("Search a title or studio if you already know it. Browse the grid if you do not.", "如果已经知道名称或工作室，就搜索。不知道就浏览网格。")}</li>
          <li>{t("Read the name and studio under the cover. If there is no cover, follow the category page instead of guessing from a similar image.", "阅读封面下的名称和工作室。如果没有封面，跟随分类页，不要凭相似图片猜测。")}</li>
          <li>{t("Sign in and continue into the lobby. The game client, the paytable, or the market is the next screen.", "登录后进入游戏大厅。下一屏是游戏客户端、赔付表或盘口。")}</li>
        </ol>
      </VisualSplit>

      <section className="section prose">
        <h2>{t("How to choose a game", "如何选择游戏")}</h2>
        <p>{t("Nothing on this hub is ranked as a better game. The useful choice is the category that matches what you meant to open, then a title whose screen you understand.", "本页没有把任何游戏排成更好的选择。有用的选择是：先选你本来要打开的分类，再选你看得懂画面的游戏。")}</p>
        <div className="topic-grid">
          <article className="panel">
            <h3>{t("Category", "分类")}</h3>
            <p>{t("Slots, a live table, a sportsbook market, a 4D entry, a fishing arcade, and esports are different products. Pick the category before you pick a picture.", "老虎机、真人桌、体育盘口、4D 投注、捕鱼街机和电竞是不同产品。先选分类，再选图片。")}</p>
          </article>
          <article className="panel">
            <h3>{t("What the screen is", "画面是什么")}</h3>
            <p>{t("A slot has a paytable. A live table has limits and a round in progress. A sportsbook has markets. Read that screen before you place a stake.", "老虎机有赔付表。真人桌有限额和正在进行的一局。体育博彩有盘口。下注前先读那个画面。")}</p>
          </article>
          <article className="panel">
            <h3>{t("Device", "设备")}</h3>
            <p>{t("Covers and category pages work in a phone browser. If a client is awkward on a small screen, switch to the category page for the written path, then open the lobby.", "封面和分类页可在手机浏览器使用。如果客户端在小屏幕上不好操作，先到分类页看文字路径，再打开游戏大厅。")}</p>
          </article>
          <article className="panel">
            <h3>{t("Your own preference", "你自己的选择")}</h3>
            <p>{t("Choose the format you meant to play. A promotion may later restrict which products count. That restriction is on the promotion card, not in this grid.", "选择你本来要玩的形式。优惠之后可能会限制哪些产品计入。限制写在优惠卡片上，不在这个网格里。")}</p>
          </article>
        </div>
      </section>

      <VisualSplit src="/images/brand/scene-payments.webp" alt={picture(locale, "A card and a phone on a dark cashier counter")}>
        <h2>{t("How to start playing", "如何开始玩")}</h2>
        <p>{t("The catalog and the category notes live on this site. The stake is placed in the player lobby after you sign in.", "目录和分类说明在本站。登录后，投注在玩家大厅进行。")}</p>
        <ol className="steps">
          <li><Link href={href("/register")}>{t("Register", "注册")}</Link>{t(" with details you can match to a payout later.", "时使用之后可以和收款对上的资料。")}</li>
          <li><Link href={href("/login")}>{t("Sign in", "登录")}</Link>{t(". Play continues in the player lobby.", "。游戏在玩家大厅继续。")}</li>
          <li>{t("Return to", "回到")} <Link href={href("/games")}>{t("Games", "游戏")}</Link>{t(" and choose a category, or use search.", "，选择分类或使用搜索。")}</li>
          <li>{t("Open the category page if you still need to know what that product is.", "如果还需要知道该产品是什么，就打开分类页。")}</li>
          <li>{t("Launch the title in the lobby and read the stake screen before the first bet.", "在游戏大厅启动游戏，第一次下注前阅读投注画面。")}</li>
        </ol>
        <p>{t("Payments are a separate step. The", "支付是另一步。")} <Link href={href("/payment-methods")}>{t("payment methods", "支付方式")}</Link>{t(" page lists what the cashier shows. Amounts and timing stay on that cashier attempt.", "页列出收银台显示的内容。金额和时间留在该次收银台。")}</p>
      </VisualSplit>

      <section className="section hub-split">
        <img src="/images/brand/scene-devices.webp" alt={picture(locale, "A phone and a laptop on a dark marble desk")} width={1400} height={760} />
        <div className="prose">
          <h2>{t("Mobile gaming", "手机游戏")}</h2>
          <p>{t("The games hub is the same site on a phone. Search, category chips, and the six category pages are in the mobile layout. You do not need a store app to read them.", "游戏页在手机上是同一个网站。搜索、分类标签和六个分类页都在手机版面里。阅读它们不必使用商店应用。")}</p>
          <p>{t("iPhone uses Safari’s Add to Home Screen when you want an icon. Android can use the portal download described on the", "想要图标时，iPhone 使用 Safari 的加入主屏幕。Android 可以使用")} <Link href={href("/download")}>{t("E9WIN download", "E9WIN 下载")}</Link>{t(" page. Both paths stay on the player portal and the mobile site.", "页说明的门户下载。两条路径都留在玩家门户和手机网站。")}</p>
          <p>{t("If a cover is cropped tightly, open the category page. The explanation there does not depend on the thumbnail. Account sign-in uses the same login as desktop.", "如果封面裁得太紧，打开分类页。那里的说明不依赖缩略图。账户登录和桌面使用同一次登录。")}</p>
          <p><Link href={href("/guides/mobile-guide")}>{t("E9WIN Mobile Guide", "E9WIN 手机指南")}</Link>{" · "}<Link href={href("/download")}>{t("E9WIN Download", "E9WIN 下载")}</Link></p>
        </div>
      </section>

      <section className="section prose">
        <h2>{t("Studios on the published covers", "已公布封面上的工作室")}</h2>
        <p>{t(`Provider names below are the studios printed on covers in this catalog: ${providerLabels.join(", ")}. There is no separate provider directory, and a name here is not a partnership claim beyond the covers themselves. The lobby can include more after you sign in.`, `下面的供应商名称是本目录封面上印着的工作室：${providerLabels.join(", ")}。没有另外的供应商目录。这里出现名称，只说明封面本身，不是封面以外的合作声明。登录后，游戏大厅可以包含更多。`)}</p>
        <div className="topic-grid">
          <article className="panel">
            <h3>Pragmatic Play</h3>
            <p>{t("Slot covers, including the titles marked in the catalog selection.", "老虎机封面，包括目录精选里标出的名称。")}</p>
          </article>
          <article className="panel">
            <h3>Lucky365</h3>
            <p>{t("Slot covers. Great Blue and Dolphin Reef are in this group, so they are not fishing games.", "老虎机封面。Great Blue 和 Dolphin Reef 在这一组，所以它们不是捕鱼游戏。")}</p>
          </article>
          <article className="panel">
            <h3>{t("Evolution and Playtech", "Evolution 和 Playtech")}</h3>
            <p>{t("Live table covers. Read the table for limits. VIP Baccarat is a Playtech table name.", "真人桌台封面。限额看桌面。VIP Baccarat 是 Playtech 桌名。")}</p>
          </article>
          <article className="panel">
            <h3>RCB</h3>
            <p>{t("The live horse racing cover in the sports catalog. Other sports markets are not given a second cover.", "体育目录里的赛马封面。其他体育盘口没有第二张封面。")}</p>
          </article>
        </div>
      </section>

      <section className="section prose">
        <h2>{t("Game discovery tips", "查找游戏的提示")}</h2>
        <div className="topic-grid">
          <article className="panel">
            <h3>{t("Start with the category", "先从分类开始")}</h3>
            <p>{t("A picture can look adjacent to the wrong product. The category label is the safer first filter.", "图片可能看起来靠近另一种产品。分类标签是更稳妥的第一层筛选。")}</p>
          </article>
          <article className="panel">
            <h3>{t("Search the printed name", "搜索印出的名称")}</h3>
            <p>{t("The search box matches the title and the studio on the cover. Odds, draws, and fishing lists stay in the lobby.", "搜索框匹配封面上的标题和工作室。赔率、开奖和捕鱼名单留在游戏大厅。")}</p>
          </article>
          <article className="panel">
            <h3>{t("Read the line under the art", "阅读画面下的那一行")}</h3>
            <p>{t("Studio and category are under the name. That is the identification this site can give you before the lobby.", "工作室和分类在名称下面。这是进入游戏大厅之前，本站能够给你的辨认信息。")}</p>
          </article>
          <article className="panel">
            <h3>{t("Use a guide when the category is new", "分类不熟时使用指南")}</h3>
            <p>{t("Slots, live tables, sports, 4D, fishing, and esports each have a short guide linked at the bottom of this page.", "老虎机、真人桌、体育、4D、捕鱼和电竞各有一篇短指南，链接在本页底部。")}</p>
          </article>
          <article className="panel">
            <h3>{t("Keep promotions on their own card", "优惠留在各自的卡片上")}</h3>
            <p>{t("A campaign can limit which games count. Open", "活动可以限制哪些游戏计入。打开")} <Link href={href("/promotions")}>{t("promotions", "优惠")}</Link>{t(" and then the account card. Do not infer eligibility from a cover.", "，再看账户卡片。不要从封面推断资格。")}</p>
          </article>
          <article className="panel">
            <h3>{t("Switch device only after the category is clear", "分类清楚后再换设备")}</h3>
            <p>{t("Phone and desktop show the same categories. Pick the product first, then use the screen that is comfortable.", "手机和桌面显示同样的分类。先选定产品，再用看得舒服的屏幕。")}</p>
          </article>
        </div>
      </section>

      <section className="section prose">
        <h2>{t("Common game access problems", "常见的游戏进入问题")}</h2>
        <p>{t("These are the checks that match how this site is built. They are not a diagnosis of the lobby software.", "这些核对符合本站的做法。它们不是对游戏大厅软件的诊断。")}</p>
        <ul>
          <li>{t("The game does not open from the cover. Sign in and launch it in the lobby. This page cannot start the client by itself.", "游戏不能从封面打开。登录后在游戏大厅启动。本页本身不能启动客户端。")}</li>
          <li>{t("A category chip shows no artwork. Fishing, 4D, and esports have no public covers. Open that category page and continue in the lobby.", "分类标签没有画面。捕鱼、4D 和电竞没有公开封面。打开该分类页，再在游戏大厅继续。")}</li>
          <li>{t("The page does not load. Reload it. Use the", "页面没有载入。重新加载。如果在手机上且门户链接失败，看")} <Link href={href("/download")}>{t("download", "下载")}</Link>{t(" notes if you are on a phone and the portal link failed. Do not install a file from another site.", "说明。不要安装来自其他网站的文件。")}</li>
          <li>{t("The layout looks wrong on a phone. Reload, and try the other orientation. The category page still has the written path if a cover is awkward.", "手机上的版面看起来不对。重新加载，并试另一种方向。封面不好看时，分类页仍有文字路径。")}</li>
          <li>{t("The connection drops mid-session. The stake, if one was placed, is in the account, not on this website. Sign in again and check the lobby.", "进行中断线。如果已经下注，该注在账户里，不在这个网站上。重新登录并查看游戏大厅。")}</li>
          <li>{t("You cannot get into the account. Use the", "无法进入账户。先看")} <Link href={href("/guides/security-guide")}>{t("security guide", "安全指南")}</Link>{t(", then", "，再")} <Link href={href("/contact")}>{t("contact", "客服")}</Link>{t(" or the", "或")} <Link href={href("/faq")}>{t("FAQ", "常见问题")}</Link>{t(". Send a username, not a password.", "。发送用户名，不要发送密码。")}</li>
        </ul>
      </section>

      <FaqBlock items={faqs} title={t("Frequently asked questions", "常见问题")} />

      <section className="section">
        <div className="section-head">
          <div>
            <h2>{t("Related guides", "相关指南")}</h2>
            <p>{t("Short instructions for the categories and the account tasks around them.", "分类以及周围账户事项的简短说明。")}</p>
          </div>
          <Link className="cat-all" href={href("/guides")}>{t("Guide hub", "指南")}</Link>
        </div>
        <div className="guide-grid">
          {relatedGuides.map((slug) => {
            const guide = guideBySlug(slug);
            if (!guide) return null;
            const scene = guideScenes[guide.category];
            const presented = presentGuide(guide, locale);
            return (
              <Link className="guide-card" href={href(`/guides/${guide.slug}`)} key={guide.slug}>
                {scene ? <img src={scene.src} alt={picture(locale, scene.alt)} width={640} height={360} loading="lazy" /> : null}
                <span className="guide-body">
                  <span className="tag">{presented.categoryLabel}</span>
                  <h3>{presented.title}</h3>
                  <p>{presented.excerpt}</p>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section prose">
        <h2>{t("Related categories", "相关分类")}</h2>
        <p>{t("If you opened the wrong door, the nearest alternative is usually one of these pairs.", "如果进错了门，最近的替代通常是下面这些配对之一。")}</p>
        <div className="topic-grid">
          {categories.map((category) => (
            <article className="panel" key={category.slug}>
              <h3><Link href={href(categoryPath(category.slug))}>{categoryName(locale, category.slug)}</Link></h3>
              <p>
                {t("Also see ", "也可查看")}
                {neighbors[category.slug].map((slug, index) => (
                  <span key={slug}>
                    {index > 0 ? t(" and ", "和") : null}
                    <Link href={href(categoryPath(slug))}>{categoryName(locale, slug)}</Link>
                  </span>
                ))}
                {t(".", "。")}
              </p>
            </article>
          ))}
        </div>
      </section>

      <VisualSplit src="/images/brand/hero-hall.webp" alt={picture(locale, "A quiet luxury gaming hall in gold light")} reverse>
        <h2>{t("Explore the E9WIN game collection", "浏览 E9WIN 游戏集合")}</h2>
        <p>{t("Use the catalog for covers, the category pages for an explanation, and the lobby when you are ready to play.", "封面用目录，说明用分类页，准备玩时用游戏大厅。")}</p>
        <div className="cta-row">
          <Link className="btn btn-primary" href="#catalog">{t("Browse the catalog", "浏览目录")}</Link>
          <Link className="btn btn-line" href={href("/register")}>{t("Register", "注册")}</Link>
          <Link className="btn btn-ghost" href={href("/contact")}>{t("Contact", "客服")}</Link>
        </div>
      </VisualSplit>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: t("E9WIN Games", "E9WIN 游戏"),
        url: absoluteUrl(href("/games")),
        description,
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("Home", "首页"), item: absoluteUrl(href("/")) },
          { "@type": "ListItem", position: 2, name: t("Games", "游戏"), item: absoluteUrl(href("/games")) },
        ],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: t("E9WIN game categories", "E9WIN 游戏分类"),
        itemListElement: categories.map((category, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: categoryName(locale, category.slug),
          url: absoluteUrl(href(categoryPath(category.slug))),
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
