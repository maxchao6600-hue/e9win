import type { Metadata } from "next";
import Link from "next/link";
import { PaymentRail } from "@/components/home/PaymentRail";
import { JsonLd } from "@/components/seo/JsonLd";
import { guides, homepagePromotions, payments } from "@/lib/content";
import { PromoSlider } from "@/components/home/PromoSlider";
import { categoryPath, featuredGames } from "@/lib/games";
import { VisualSplit } from "@/components/content/VisualSplit";
import { categoryScenes, guideScenes, pageScenes } from "@/lib/scenes";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { presentGuide } from "@/lib/i18n/zhGuides";

const homeDescription = "E9WIN is a Malaysia online gaming lobby for slots, live casino, sports, 4D, fishing, esports, promotions, and mobile play.";

export function homeMetadata(locale: Locale): Metadata {
  return pageMeta({
    title: tx(locale, "E9WIN Malaysia | Online Gaming, Games and Promotions", "E9WIN 马来西亚 | 线上游戏平台与优惠"),
    description: tx(
      locale,
      homeDescription,
      "E9WIN 是面向马来西亚的线上游戏平台，提供老虎机、真人娱乐场、体育、4D、捕鱼、电竞、优惠和手机游玩。",
    ),
    path: localizePath("/", locale),
    locale,
  });
}

const featured = featuredGames().slice(0, 8);
const homeGuideSlugs = ["how-to-register", "how-to-start", "games-guide", "mobile-guide", "deposit-guide", "promotions-guide", "security-guide", "responsible-gaming-guide"];
const homeGuides = homeGuideSlugs.flatMap((slug) => {
  const guide = guides.find((item) => item.slug === slug);
  return guide ? [guide] : [];
});

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
  "A private lounge with velvet seating and gold light": "丝绒座椅与金色灯光的私人休息室",
  "A gallery desk overlooking a gaming floor": "俯瞰游戏楼层的廊台书桌",
  "A dark entrance lit with gold, used as the welcome campaign still": "金色灯光下的深色入口，用作欢迎活动画面",
};

const promoZh: Record<string, { title: string; category: string; description: string }> = {
  welcome: {
    title: "欢迎优惠",
    category: "欢迎",
    description: "新玩家可以参加老虎机、真人娱乐场和体育的欢迎优惠。包括流水在内的现行条款，会在领取前显示在该优惠上。",
  },
  daily: {
    title: "每日与额外老虎机优惠",
    category: "老虎机",
    description: "优惠区会发布每日和额外老虎机优惠。请查看账户里的当前卡片。本站较早的活动期已经结束。",
  },
  rebate: {
    title: "返水",
    category: "返水",
    description: "已公布符合条件投注的返水优惠。比例和计入的产品写在该优惠上，这里不作假设。",
  },
  referral: {
    title: "邀请好友",
    category: "推荐",
    description: "登录后，个人资料的分享区可以提供推荐链接。好友通过该链接注册。奖励细节以当前邀请优惠为准。",
  },
};

function picture(locale: Locale, en: string) {
  return tx(locale, en, ALT[en] ?? en);
}

export function HomeView({ locale }: { locale: Locale }) {
  const href = (path: string) => (path.startsWith("#") ? path : localizePath(path, locale));
  const t = (en: string, zh: string) => tx(locale, en, zh);
  const slides = homepagePromotions().map((item) => ({
    ...item,
    href: href(item.href ?? "/promotions"),
    title: t(item.title, promoZh[item.id]?.title ?? item.title),
    category: t(item.category, promoZh[item.id]?.category ?? item.category),
    description: t(item.description, promoZh[item.id]?.description ?? item.description),
  }));
  const homeFaq = [
    {
      q: t("How do I register with E9WIN?", "如何在 E9WIN 注册？"),
      a: t(
        "Use the register form, then continue in the player portal. Provide a real name, mobile number, and login you can verify later.",
        "使用注册表格，然后在玩家门户继续。填写之后可以核对的真实姓名、手机号码和登录资料。",
      ),
    },
    {
      q: t("How do I log in to E9WIN?", "如何登录 E9WIN？"),
      a: t(
        "Enter the username and password from registration. Play continues in the E9WIN lobby.",
        "输入注册时的用户名和密码。游戏在 E9WIN 游戏大厅里继续。",
      ),
    },
    {
      q: t("Where do I open a game?", "在哪里打开游戏？"),
      a: t(
        "Browse covers on the games pages, then launch the title in the lobby after you sign in. Fishing, 4D, and esports have no public thumbnail grid.",
        "先在游戏页浏览封面，登录后再在游戏大厅打开该游戏。捕鱼、4D 和电竞没有公开缩略图网格。",
      ),
    },
    {
      q: t("How do E9WIN payments work?", "E9WIN 支付方式如何运作？"),
      a: t(
        "The cashier uses the published marks: Maybank, CIMB, Public Bank, RHB, Hong Leong, AmBank, BSN, Touch 'n Go, Boost, GrabPay, ShopeePay, and USDT, plus instant transfer, telco PIN, and bank transfer. Limits for the method you choose stay on that screen.",
        "收银台使用已公布的标志：Maybank、CIMB、Public Bank、RHB、Hong Leong、AmBank、BSN、Touch 'n Go、Boost、GrabPay、ShopeePay 和 USDT，另有即时转账、电信 PIN 和银行转账。你所选择方式的限额会显示在该页面上。",
      ),
    },
    {
      q: t("Do I have to install an app?", "一定要安装应用吗？"),
      a: t(
        "No. The web version runs in the browser on Windows, Mac, Linux, iOS, and Android.",
        "不必。网页版可在 Windows、Mac、Linux、iOS 和 Android 的浏览器里运行。",
      ),
    },
    {
      q: t("How do I claim a promotion?", "如何领取优惠？"),
      a: t(
        "Open the promotion in the lobby and follow the opt-in on that card. Some offers ask for a verified phone number and bank details first.",
        "在游戏大厅打开该优惠，并按卡片上的参加步骤操作。有些优惠会先要求已验证的电话号码和银行资料。",
      ),
    },
    {
      q: t("How do I contact E9WIN support?", "如何联系 E9WIN 客服？"),
      a: t(
        "WhatsApp and the Facebook page are the published public channels. The lobby also refers players to live chat when they are signed in.",
        "WhatsApp 和 Facebook 专页是已公布的公开渠道。登录后，游戏大厅也会引导玩家使用在线聊天。",
      ),
    },
  ];

  return (
    <>
      <section className="hero">
        <img
          className="hero-scene"
          src="/images/brand/hero-hall.webp"
          alt={picture(locale, "A quiet luxury gaming hall in gold light")}
          width={1600}
          height={900}
          fetchPriority="high"
        />
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="kicker">{t("Malaysia online gaming", "马来西亚线上游戏")}</p>
            <h1>{t("E9WIN Malaysia", "E9WIN 马来西亚")}</h1>
            <p className="lede">{t("Slots, live casino, sports, 4D, fishing, and esports in one player lobby.", "老虎机、真人娱乐场、体育、4D、捕鱼和电竞，都在同一个玩家大厅。")}</p>
            <div className="cta-row">
              <Link className="btn btn-primary" href={href("/register")}>{t("Register now", "立即注册")}</Link>
              <Link className="btn btn-ghost" href={href("/games")}>{t("Explore games", "浏览游戏")}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <VisualSplit plain src="/images/brand/scene-slots.webp" alt={picture(locale, "Gates of Olympus on a display in a dark private room")}>
            <h2>{t("What E9WIN is", "E9WIN 是什么")}</h2>
            <p>{t("E9WIN is a Malaysia-facing online gaming platform. Slots, live casino, sports, 4D, fishing, and esports open through one player lobby.", "E9WIN 是面向马来西亚的线上游戏平台。老虎机、真人娱乐场、体育、4D、捕鱼和电竞通过同一个玩家大厅打开。")}</p>
            <p>{t("These pages explain the categories, E9WIN payment methods, E9WIN promotions, and the support channels that are listed. Stake screens, paytables, and cashier limits stay in the lobby after you sign in.", "这些页面说明各个分类、E9WIN 支付方式、E9WIN 优惠，以及已列出的客服渠道。投注画面、赔付表和收银台限额在登录后的游戏大厅里。")}</p>
            <p>
              <Link href={href("/games")}>{t("E9WIN games", "E9WIN 游戏")}</Link>
              {" · "}
              <Link href={href("/promotions")}>{t("E9WIN promotions", "E9WIN 优惠")}</Link>
              {" · "}
              <Link href={href("/vip")}>{t("E9WIN VIP", "E9WIN VIP会员")}</Link>
              {" · "}
              <Link href={href("/download")}>{t("E9WIN download", "E9WIN 下载")}</Link>
              {" · "}
              <Link href={href("/guides")}>{t("E9WIN guides", "E9WIN 指南")}</Link>
              {" · "}
              <Link href={href("/payment-methods")}>{t("E9WIN payment methods", "E9WIN 支付方式")}</Link>
            </p>
          </VisualSplit>
        </div>
      </section>

      {slides.length > 0 ? (
        <section className="section promo-home" aria-labelledby="home-promos">
          <div className="feat-wrap">
            <div className="cat-head">
              <p className="kicker">{t("Promotions", "优惠")}</p>
              <div className="cat-head-row">
                <h2 id="home-promos">{t("Latest activities", "最新活动")}</h2>
                <Link className="cat-all" href={href("/promotions")}>{t("View all promotions", "查看全部优惠")} <span aria-hidden="true">→</span></Link>
              </div>
              <p>{t("Latest activities and campaigns from E9WIN.", "E9WIN 的最新活动。")}</p>
            </div>
            <PromoSlider items={slides} locale={locale} />
          </div>
        </section>
      ) : null}

      <section className="section follow" aria-labelledby="categories">
        <div className="cat-wrap">
          <div className="cat-head">
            <p className="kicker">{t("Discover", "浏览")}</p>
            <div className="cat-head-row">
              <h2 id="categories">{t("Game categories", "游戏分类")}</h2>
              <Link className="cat-all" href={href("/games")}>{t("View all games", "查看全部游戏")} <span aria-hidden="true">→</span></Link>
            </div>
            <p>{t("E9WIN games are grouped into slots, live casino, sports, 4D lottery, fishing, and esports. Open a category, then play in the lobby.", "E9WIN 游戏分为老虎机、真人娱乐场、体育、4D、捕鱼和电竞。先打开一个分类，再在游戏大厅里玩。")}</p>
          </div>
          <div className="cat-showcase">
            <Link className="cat-tile cat-slots" href={href("/games/slots")}>
              <img src={categoryScenes.slots.src} alt={picture(locale, categoryScenes.slots.alt)} width={1280} height={720} loading="lazy" />
              <span className="cat-shade" />
              <span className="cat-copy">
                <h3>{t("E9WIN Slots", "E9WIN 老虎机")}</h3>
                <p>{t("Browse video slot covers from the public catalog, then open a title in the lobby.", "浏览公开目录里的老虎机封面，再在游戏大厅打开游戏。")}</p>
                <span className="cat-go">{t("Open", "打开")} <span aria-hidden="true">→</span></span>
              </span>
            </Link>
            <Link className="cat-tile cat-live" href={href("/games/live-casino")}>
              <img src={categoryScenes["live-casino"].src} alt={picture(locale, categoryScenes["live-casino"].alt)} width={1280} height={720} loading="lazy" />
              <span className="cat-shade" />
              <span className="cat-copy">
                <h3>{t("E9WIN Live Casino", "E9WIN 真人娱乐场")}</h3>
                <p>{t("Open live baccarat, roulette, sic bo, and other table covers from the catalog.", "打开目录里的真人百家乐、轮盘、骰宝和其他桌台封面。")}</p>
                <span className="cat-go">{t("Open", "打开")} <span aria-hidden="true">→</span></span>
              </span>
            </Link>
            <Link className="cat-tile cat-sports" href={href("/games/sports")}>
              <img src={categoryScenes.sports.src} alt={picture(locale, categoryScenes.sports.alt)} width={1280} height={720} loading="lazy" />
              <span className="cat-shade" />
              <span className="cat-copy">
                <h3>{t("E9WIN Sports", "E9WIN 体育")}</h3>
                <p>{t("Preview live horse racing, then read football markets inside the sportsbook.", "先预览赛马，再在体育博彩中查看足球盘口。")}</p>
                <span className="cat-go">{t("Open", "打开")} <span aria-hidden="true">→</span></span>
              </span>
            </Link>
            <div className="cat-row">
              <Link className="cat-tile cat-lottery" href={href("/games/4d")}>
                <img src={categoryScenes.lottery.src} alt={picture(locale, categoryScenes.lottery.alt)} width={1280} height={720} loading="lazy" />
                <span className="cat-shade" />
                <span className="cat-copy">
                  <h3>{t("E9WIN 4D", "E9WIN 4D")}</h3>
                  <p>{t("Choose Magnum, Da Ma Cai, Toto, or Singapore. Draws open in the lobby.", "选择 Magnum（万能）、Da Ma Cai（大马彩）、Toto（多多）或 Singapore（新加坡）。最新开奖结果会显示在游戏大厅内。")}</p>
                  <span className="cat-go">{t("Open", "打开")} <span aria-hidden="true">→</span></span>
                </span>
              </Link>
              <Link className="cat-tile cat-fishing" href={href("/games/fishing")}>
                <img src={categoryScenes.fishing.src} alt={picture(locale, categoryScenes.fishing.alt)} width={1280} height={720} loading="lazy" />
                <span className="cat-shade" />
                <span className="cat-copy">
                  <h3>{t("E9WIN Fishing", "E9WIN 捕鱼")}</h3>
                  <p>{t("Arcade fishing titles open after sign-in. Sea-themed slot covers stay in slots.", "登录后即可进入街机捕鱼。海洋主题的老虎机封面仍属于老虎机。")}</p>
                  <span className="cat-go">{t("Open", "打开")} <span aria-hidden="true">→</span></span>
                </span>
              </Link>
              <Link className="cat-tile cat-esports" href={href("/games/esports")}>
                <img src={categoryScenes.esports.src} alt={picture(locale, categoryScenes.esports.alt)} width={1280} height={720} loading="lazy" />
                <span className="cat-shade" />
                <span className="cat-copy">
                  <h3>{t("E9WIN Esports", "E9WIN 电竞")}</h3>
                  <p>{t("Esports markets sit with the sportsbook and open after you sign in.", "电竞盘口与体育博彩放在一起，登录后即可查看。")}</p>
                  <span className="cat-go">{t("Open", "打开")} <span aria-hidden="true">→</span></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="featured">
        <div className="feat-wrap">
          <div className="cat-head">
            <p className="kicker">{t("Featured", "精选")}</p>
            <div className="cat-head-row">
              <h2 id="featured">{t("Featured games", "精选游戏")}</h2>
              <Link className="cat-all" href={href("/games")}>{t("View all games", "查看全部游戏")} <span aria-hidden="true">→</span></Link>
            </div>
            <p>{t("A short list from the catalog. The full grid is on the games page.", "这是目录中的一小部分。完整列表在游戏页。")}</p>
          </div>
          <div className="game-grid">
            {featured.map((game) => (
              <article className="game-card" key={game.id}>
                <img src={game.image} alt={t(`${game.name} by ${game.provider}`, `${game.name}，${game.provider}`)} width={640} height={640} loading="lazy" />
                <div className="meta">
                  <h3>{game.name}</h3>
                  <p>{game.provider}</p>
                  <Link className="btn btn-line" href={href(categoryPath(game.category))}>{t("Play in lobby", "在游戏大厅打开")}</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container why">
          <div>
            <h2>{t("Why players open E9WIN", "玩家为什么打开 E9WIN")}</h2>
            <p className="lede">{t("One lobby for slots, live tables, sports, lottery, and mobile play.", "老虎机、真人桌、体育、4D 和手机游戏，都在同一个大厅。")}</p>
            <img src="/images/brand/scene-live.webp" alt={picture(locale, "Playtech baccarat key art of a dealer holding cards")} width={1600} height={760} loading="lazy" />
          </div>
          <ol>
            <li><span className="num">01</span><div><strong>{t("One catalog", "一个目录")}</strong>{t("Slots and live tables have public covers. Sports has live horse racing. 4D, fishing, and esports open in the lobby after you sign in, on their own pages.", "老虎机和真人桌有公开封面。体育有赛马。4D、捕鱼和电竞在登录后于各自页面的游戏大厅打开。")}</div></li>
            <li><span className="num">02</span><div><strong>{t("Phone or browser", "手机或浏览器")}</strong>{t("The web lobby needs no install. iPhone uses Safari’s Add to Home Screen. Android uses the portal link on the download page. There is no store listing.", "网页大厅不必安装。iPhone 使用 Safari 的加入主屏幕。Android 使用下载页上的门户链接。路径里没有应用商店上架。")}</div></li>
            <li><span className="num">03</span><div><strong>{t("Local payments", "本地支付方式")}</strong>{t("The strip shows Malaysian banks, Touch ’n Go, Boost, GrabPay, ShopeePay, and USDT. The cashier also offers instant transfer, telco PIN, and bank transfer. Limits are on that screen.", "这条展示马来西亚银行、Touch ’n Go、Boost、GrabPay、ShopeePay 和 USDT。收银台也提供即时转账、电信 PIN 和银行转账。限额在那个画面上。")}</div></li>
            <li><span className="num">04</span><div><strong>{t("People who can help", "可以帮忙的人")}</strong>{t("WhatsApp and Facebook are the public channels. In-lobby chat is available after sign-in. Send a username, not a password.", "WhatsApp 和 Facebook 是公开渠道。登录后可以使用大厅内聊天。发送用户名，不要发送密码。")}</div></li>
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="lobby-map">
        <div className="container">
          <VisualSplit plain reverse src="/images/brand/scene-sports.webp" alt={picture(locale, "A worn football on a night pitch under warm stadium lights")}>
            <h2 id="lobby-map">{t("How the lobby is organised", "游戏大厅如何安排")}</h2>
            <p>{t("Each category answers a different question. Use the page that matches what you want to open, then sign in when you are ready to play.", "每个分类回答不同的问题。打开你想进入的那一页，准备玩时再登录。")}</p>
            <div className="topic-grid">
              <article className="panel"><h3><Link href={href("/games/slots")}>{t("E9WIN Slots", "E9WIN 老虎机")}</Link></h3><p>{t("Video slot covers from Pragmatic Play and Lucky365. Rules and stake range are on the paytable inside the game.", "Pragmatic Play 和 Lucky365 的老虎机封面。规则和投注范围在游戏内的赔付表上。")}</p></article>
              <article className="panel"><h3><Link href={href("/games/live-casino")}>{t("E9WIN Live Casino", "E9WIN 真人娱乐场")}</Link></h3><p>{t("Evolution and Playtech covers for baccarat, roulette, sic bo, and other tables. VIP Baccarat is a table name. Membership is the separate VIP page.", "Evolution 和 Playtech 的百家乐、轮盘、骰宝和其他桌台封面。VIP Baccarat 是桌名。VIP会员是另一页。")}</p></article>
              <article className="panel"><h3><Link href={href("/games/sports")}>{t("E9WIN Sports", "E9WIN 体育")}</Link></h3><p>{t("Live horse racing has a cover. Football, including the World Cup and the Premier League, is named. Current prices stay in the sportsbook.", "赛马有封面。足球有名称，包括世界杯和英超。当前价格会显示在体育博彩中。")}</p></article>
              <article className="panel"><h3><Link href={href("/games/4d")}>{t("E9WIN 4D", "E9WIN 4D")}</Link></h3><p>{t("Magnum, Da Ma Cai, Toto, and Singapore. Number selection and results open in the lobby.", "Magnum（万能）、Da Ma Cai（大马彩）、Toto（多多）和 Singapore（新加坡）。选号和开奖结果会显示在游戏大厅内。")}</p></article>
              <article className="panel"><h3><Link href={href("/games/fishing")}>{t("E9WIN Fishing", "E9WIN 捕鱼")}</Link></h3><p>{t("Arcade titles after sign-in. Great Blue and Dolphin Reef stay in the slots catalog.", "登录后即可进入街机捕鱼。Great Blue 和 Dolphin Reef 仍属于老虎机。")}</p></article>
              <article className="panel"><h3><Link href={href("/games/esports")}>{t("E9WIN Esports", "E9WIN 电竞")}</Link></h3><p>{t("Markets with the sportsbook. Fixtures and prices open after you sign in.", "电竞盘口与体育博彩放在一起。登录后可查看赛程和价格。")}</p></article>
            </div>
            <p>
              {t("Payments, access, and the rewards desk are separate:", "支付、进入方式和奖励区是分开的：")}
              {" "}
              <Link href={href("/payment-methods")}>{t("E9WIN payment methods", "E9WIN 支付方式")}</Link>
              {", "}
              <Link href={href("/deposit")}>{t("E9WIN deposit", "E9WIN 存款")}</Link>
              {", "}
              <Link href={href("/withdrawal")}>{t("E9WIN withdrawal", "E9WIN 提款")}</Link>
              {", "}
              <Link href={href("/download")}>{t("E9WIN download", "E9WIN 下载")}</Link>
              {", "}
              <Link href={href("/promotions")}>{t("E9WIN promotions", "E9WIN 优惠")}</Link>
              {", "}
              <Link href={href("/vip")}>{t("E9WIN VIP", "E9WIN VIP会员")}</Link>
              {", "}
              <Link href={href("/guides")}>{t("E9WIN guides", "E9WIN 指南")}</Link>
              .
            </p>
          </VisualSplit>
        </div>
      </section>

      <section className="section" aria-labelledby="mobile-play">
        <div className="container">
          <VisualSplit plain src={pageScenes.download.src} alt={picture(locale, pageScenes.download.alt)}>
            <h2 id="mobile-play">{t("Play in the browser you already have", "用你已有的浏览器玩")}</h2>
            <p>{t("The same categories are available in the phone browser. An iPhone can add the site to the home screen from Safari. Android can use the player portal on the download page. A desktop browser is enough on Windows, Mac, and Linux.", "手机浏览器里有同样的分类。iPhone 可以用 Safari 把网站加到主屏幕。Android 可以使用下载页上的玩家门户。Windows、Mac 和 Linux 用桌面浏览器即可。")}</p>
            <p>
              {t("Reload the page to pick up the web lobby. If the portal link fails, use", "重新加载页面即可拿到网页大厅。如果门户链接打不开，使用")}
              {" "}
              <Link href={href("/contact")}>WhatsApp</Link>
              {" "}
              {t("and stay with the file the portal provides. The steps are in the", "并只使用该门户提供的文件。步骤在")}
              {" "}
              <Link href={href("/guides/mobile-guide")}>{t("E9WIN mobile guide", "E9WIN 手机指南")}</Link>
              {" "}
              {t("and the", "和")}
              {" "}
              <Link href={href("/guides/how-to-download")}>{t("E9WIN download guide", "E9WIN 下载指南")}</Link>
              .
            </p>
          </VisualSplit>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <article className="panel panel-scene">
            <img src={pageScenes.download.src} alt={picture(locale, pageScenes.download.alt)} width={1280} height={720} loading="lazy" />
            <p className="tag">{t("Download", "下载")}</p>
            <h2>{t("E9WIN download", "E9WIN 下载")}</h2>
            <p>{t("Android uses the player portal on the download page. iPhone uses Safari’s Add to Home Screen. You can also stay in the mobile browser.", "Android 使用下载页上的玩家门户。iPhone 使用 Safari 的加入主屏幕。也可以继续留在手机浏览器。")}</p>
            <Link className="btn btn-primary" href={href("/download")}>{t("E9WIN mobile", "E9WIN 手机")}</Link>
          </article>
          <article className="panel panel-scene">
            <img src={pageScenes.vip.src} alt={picture(locale, pageScenes.vip.alt)} width={1280} height={720} loading="lazy" />
            <p className="tag">{t("VIP", "VIP会员")}</p>
            <h2>{t("E9WIN VIP", "E9WIN VIP会员")}</h2>
            <p>{t("VIP is the membership label in the lobby rewards area. The account notice is where any current detail appears.", "VIP 是游戏大厅奖励区里的会员标签。当前细节出现在账户通知里。")}</p>
            <Link className="btn btn-ghost" href={href("/vip")}>{t("E9WIN VIP information", "E9WIN VIP会员说明")}</Link>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <article className="panel panel-scene">
            <img src={pageScenes.agent.src} alt={picture(locale, pageScenes.agent.alt)} width={1280} height={720} loading="lazy" />
            <p className="tag">{t("Agent", "代理")}</p>
            <h2>{t("E9WIN agent", "E9WIN 代理")}</h2>
            <p>{t("The agent program covers referrals and downline players. Commission details come from support when you apply.", "代理计划涵盖推荐和下线玩家。申请时，佣金详情由客服说明。")}</p>
            <Link className="btn btn-ghost" href={href("/agent")}>{t("E9WIN agent program", "E9WIN 代理计划")}</Link>
          </article>
          <article className="panel">
            <p className="tag">{t("How it works", "如何进行")}</p>
            <h2>{t("Register, fund, play, withdraw", "注册、存款、游戏、提款")}</h2>
            <ol className="steps">
              <li>{t("Create an account with a name you can match to a payout.", "用可以和收款姓名对上的名字建立账户。")}</li>
              <li>{t("Sign in. Play continues in the player lobby.", "登录。游戏在玩家大厅继续。")}</li>
              <li>{t("Browse a category, then open the title in the lobby.", "浏览一个分类，再在游戏大厅打开游戏。")}</li>
              <li>{t("Read a promotion card before you opt in.", "选择参加前，先阅读优惠卡片。")}</li>
              <li>{t("Deposit with the cashier instruction for that attempt.", "按该次收银台的指示存款。")}</li>
              <li>{t("Request a withdrawal to an account in the same name.", "提款到同名账户。")}</li>
              <li>{t("Use WhatsApp or in-lobby chat if a step fails. Do not send the password.", "某一步失败时，使用 WhatsApp 或大厅内聊天。不要发送密码。")}</li>
            </ol>
            <Link className="btn btn-line" href={href("/guides/how-to-register")}>{t("Registration guide", "注册指南")}</Link>
          </article>
        </div>
      </section>

      <section className="section pay-section" aria-labelledby="payments">
        <div className="feat-wrap">
          <div className="cat-head">
            <div className="cat-head-row">
              <h2 id="payments">{t("E9WIN payment methods", "E9WIN 支付方式")}</h2>
              <Link className="cat-all" href={href("/payment-methods")}>{t("Payment methods", "支付方式")} <span aria-hidden="true">→</span></Link>
            </div>
            <p>{t("Malaysia shown on the E9WIN payment strip.", "E9WIN 支付条上展示的马来西亚方式。")}</p>
          </div>
        </div>
        <PaymentRail items={payments} locale={locale} />
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>{t("E9WIN guides", "E9WIN 指南")}</h2>
              <p>{t("Short instructions for the tasks players actually do.", "玩家实际会做的事项，写成简短说明。")}</p>
            </div>
            <Link className="btn btn-line" href={href("/guides")}>{t("E9WIN Guides", "E9WIN 指南")}</Link>
          </div>
          <div className="guide-grid">
            {homeGuides.map((guide) => {
              const presented = presentGuide(guide, locale);
              const scene = guideScenes[guide.category];
              return (
                <Link className="guide-card" key={guide.slug} href={href(`/guides/${guide.slug}`)}>
                  <img src={scene.src} alt={picture(locale, scene.alt)} width={1280} height={720} loading="lazy" />
                  <span className="guide-body">
                    <p className="tag">{presented.categoryLabel}</p>
                    <h3>{presented.title}</h3>
                    <p>{presented.excerpt}</p>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="faq">
            <h2>{t("FAQ", "常见问题")}</h2>
            {homeFaq.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
            <Link className="btn btn-line" href={href("/faq")}>{t("Full FAQ", "全部常见问题")}</Link>
          </div>
          <article className="panel">
            <img className="still" src="/images/brand/scene-account.webp" alt={picture(locale, "A quiet desk beside a night window")} width={1600} height={760} loading="lazy" />
            <p className="tag">{t("Responsible gaming", "理性娱乐")}</p>
            <h2>{t("18+ and your own limits", "18+ 与你自己的限额")}</h2>
            <p>{t("E9WIN is for adults. Set a budget before you play, and stop when it is gone. Deposit limits and self-exclusion are described as account tools. Use them if the lobby offers them.", "E9WIN 面向成年人。玩之前先定预算，用完就停。存款限额和自我排除被说明为账户工具。游戏大厅若提供，就使用它们。")}</p>
            <Link className="btn btn-ghost" href={href("/responsible-gaming")}>{t("Responsible gaming", "理性娱乐")}</Link>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <VisualSplit plain reverse src="/images/promotions/promo-welcome.webp" alt={picture(locale, "A dark entrance lit with gold")}>
            <h2>{t("Open an account or talk to support", "开户或联系客服")}</h2>
            <p>{t("Register to reach the player lobby. For help, use WhatsApp or the Facebook page published by E9WIN.", "注册后进入玩家大厅。需要帮助时，使用 WhatsApp 或 E9WIN 公布的 Facebook 专页。")}</p>
            <div className="cta-row">
              <Link className="btn btn-primary" href={href("/register")}>{t("Register now", "立即注册")}</Link>
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
