import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqBlock } from "@/components/content/CopySections";
import { VisualSplit } from "@/components/content/VisualSplit";
import { JsonLd } from "@/components/seo/JsonLd";
import { guideBySlug, promotions, type Promotion } from "@/lib/content";
import { presentGuide } from "@/lib/i18n/zhGuides";
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { guideScenes } from "@/lib/scenes";
import { absoluteUrl } from "@/lib/site";

const enDescription = "Explore the E9WIN promotions that are named on this site. Review welcome, slot, rebate, referral, birthday, and mission campaigns, then read the account card before you opt in.";
const zhDescription = "查看本站列出的 E9WIN 优惠。先了解欢迎、老虎机、返水、推荐、生日和任务活动，再阅读账户卡片，然后选择参加。";

const welcomeAlt = "Welcome campaign still used on the E9WIN promotions page";

const zhAlt: Record<string, string> = {
  "A phone and a laptop on a dark marble desk": "深色大理石桌上的手机和笔记本电脑",
  "A quiet desk beside a night window": "夜窗旁安静的书桌",
  "Gates of Olympus on a display in a dark private room": "昏暗私人房间屏幕上的 Gates of Olympus",
  "A card and a phone on a dark cashier counter": "深色收银台柜台上的卡片和手机",
  "Daily and extra slot campaign artwork": "每日与额外老虎机活动画面",
  "Rebate campaign artwork": "返水活动画面",
  "Referral campaign artwork": "推荐活动画面",
  [welcomeAlt]: "E9WIN 优惠页使用的欢迎活动画面",
  "A dark entrance lit with gold, used as the welcome campaign still": "金色灯光下的深色入口，用作欢迎活动画面",
};

const promoZh: Record<string, { title: string; description: string; category: string }> = {
  welcome: {
    title: "欢迎活动",
    description: "新玩家可选择参加老虎机、真人娱乐场和体育的欢迎活动。包括流水在内的现行条件，会在领取前显示在该优惠上。",
    category: "欢迎",
  },
  daily: {
    title: "每日与额外老虎机活动",
    description: "优惠页会公布每日与额外老虎机活动。请查看账户里的当前卡片。本站较早的公开档期已经结束。",
    category: "老虎机",
  },
  rebate: {
    title: "返水",
    description: "已为符合条件的游戏公布返水活动。比例和计入的产品写在该优惠上，这里不作假设。",
    category: "返水",
  },
  birthday: {
    title: "生日奖励",
    description: "已向完成验证的会员提供生日奖励。个人资料保存出生日期后，资格在账户里确认。",
    category: "奖励",
  },
  referral: {
    title: "邀请好友",
    description: "登录后，个人资料的分享位置可以提供推荐链接。好友通过该链接注册。奖励细节在当前邀请活动上。",
    category: "推荐",
  },
  missions: {
    title: "每日任务与兑换码",
    description: "优惠目录也列出每日任务和兑换码。活动开放时，在大厅里输入代码和任务。",
    category: "任务",
  },
};

function sceneAlt(locale: Locale, alt: string) {
  return tx(locale, alt, zhAlt[alt] ?? alt);
}

function promoCopy(locale: Locale, item: Promotion) {
  if (locale === "en") return { title: item.title, description: item.description, category: item.category };
  return promoZh[item.id] ?? { title: item.title, description: item.description, category: item.category };
}

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

export function promotionsMetadata(locale: Locale): Metadata {
  const description = tx(locale, enDescription, zhDescription);
  const path = localizePath("/promotions", locale);
  const title = tx(locale, "E9WIN Promotions | Explore Available Offers", "E9WIN 优惠 | 当前活动与账户条件");
  const baseMeta = pageMeta({ title, description, path, locale });
  return {
    ...baseMeta,
    openGraph: {
      ...baseMeta.openGraph,
      images: [{ url: absoluteUrl("/images/promotions/promo-welcome.webp"), alt: sceneAlt(locale, welcomeAlt) }],
    },
    twitter: {
      ...baseMeta.twitter,
      images: [absoluteUrl("/images/promotions/promo-welcome.webp")],
    },
  };
}

export function PromotionsView({ locale }: { locale: Locale }) {
  const t = (en: string, zh: string) => tx(locale, en, zh);
  const href = (path: string) => localizePath(path, locale);
  const description = t(enDescription, zhDescription);
  const pagePath = href("/promotions");
  const featured = promotions.filter((item) => item.image);
  const listed = promotions.filter((item) => !item.image);

  const faqs = [
    { q: t("What are E9WIN promotions?", "E9WIN 优惠是什么？"), a: t("They are named campaigns on the rewards desk: welcome play, daily and extra slot campaigns, rebate, birthday, referral, and missions with redeem codes. This page lists those names. The amount, turnover, and product list stay on the account card.", "它们是奖励区里已列名的活动：欢迎游戏、每日与额外老虎机活动、返水、生日、推荐，以及带兑换码的任务。本页列出这些名称。金额、流水和产品列表留在账户卡片上。") },
    { q: t("Where can I find E9WIN promotions?", "在哪里可以找到 E9WIN 优惠？"), a: t("Start on this page. Four campaigns also appear in the homepage slider because they have artwork. Birthday and missions are listed here without a homepage still. The card you can opt in to is in the account after you sign in.", "从本页开始。四个活动因为有画面，也会出现在首页轮播里。生日和任务列在这里，没有首页画面。可以参加的卡片在登录后的账户里。") },
    { q: t("How do I know whether a promotion is available to me?", "怎么知道一项优惠是否对我开放？"), a: t("Open the card in the account. This site does not promise that every account sees every campaign. If a named campaign is missing, it may not be open for that account. Ask support with your username, not your password.", "打开账户里的卡片。本站不承诺每个账户都能看到每一项活动。如果某个已列名的活动不在，它可能没有对该账户开放。用用户名询问客服，不要发送密码。") },
    { q: t("How do I join an E9WIN promotion?", "如何参加 E9WIN 优惠？"), a: t("Sign in, open the rewards desk, and follow the opt-in on that card. Some offers ask for a verified phone number and bank details first. The homepage slider does not claim the offer for you. Redeem codes and missions are entered in the lobby when a campaign is open.", "登录，打开奖励区，按该卡片上的参加步骤操作。有些优惠会先要求已验证的电话号码和银行资料。首页轮播不会替你领取。活动开放时，在大厅里输入兑换码和任务。") },
    { q: t("Do all promotions have the same requirements?", "所有优惠的要求都一样吗？"), a: t("No. A slot campaign may not include live tables, sports, or 4D. Turnover, if any, is printed on the card. This page does not copy those figures.", "不一样。老虎机活动可能不包括真人桌、体育或 4D。如果有流水，会印在卡片上。本页不抄写这些数字。") },
    { q: t("Where can I find promotion terms?", "在哪里查看优惠条件？"), a: t("On the account card for the campaign you are reading. If this page and the card disagree, the card is the offer. Closed windows that were dated on the public site are not current percentages.", "在你正在看的那项活动的账户卡片上。如果本页和卡片不一致，以卡片为准。公开网站上已注明日期并结束的档期，不是当前比例。") },
    { q: t("Can a promotion apply to specific games only?", "优惠可以只适用于指定游戏吗？"), a: t("Yes, when the card says so. Welcome campaigns name slots, live casino, and sports. Daily and extra campaigns point at slots. Other campaigns do not get a category assumed for them.", "可以，当卡片这样写的时候。欢迎活动点名老虎机、真人娱乐场和体育。每日与额外活动指向老虎机。其他活动不会在这里被假定成某个分类。") },
    { q: t("What should I do if I cannot participate?", "如果不能参加怎么办？"), a: t("Read the product list and any opt-in line on the card. Check that you are in the correct account. If the card is not there, contact support with your username. This page cannot opt you in.", "阅读卡片上的产品列表和任何参加说明。确认你在正确的账户里。如果没有这张卡片，用用户名联系客服。本页不能替你参加。") },
    { q: t("What if I completed a step and the promotion is not showing?", "我完成了一步，但优惠没有显示怎么办？"), a: t("Compare what you did with the qualifying action on the card. Then check the account again. If it still does not match, contact support. This site does not promise a manual credit or a response time.", "把你做的步骤和卡片上的合格操作对照。然后再看一次账户。如果仍然对不上，联系客服。本站不承诺人工入账，也不承诺回复时间。") },
    { q: t("Can I use promotions on mobile?", "可以在手机上使用优惠吗？"), a: t("Yes. The same page and the same account card are available in the phone browser. iPhone can use Safari Add to Home Screen. Android can use the portal download. There is no store listing.", "可以。同一页面和同一张账户卡片都在手机浏览器里。iPhone 可以使用 Safari 加入主屏幕。Android 可以使用门户下载。没有应用商店上架。") },
    { q: t("Do promotions have expiry dates?", "优惠有到期日吗？"), a: t("None of the campaigns on this page carry a start or end date, so none are marked active, upcoming, or ending. Older dated windows on the public site have closed and are not relabelled as live offers.", "本页的活动都没有开始或结束日期，所以都没有标成进行中、即将开始或即将结束。公开网站上较早的注明日期档期已经结束，不会被重新标成现行优惠。") },
    { q: t("Who should I contact about a promotion?", "优惠问题应该联系谁？"), a: t("Use WhatsApp or the Facebook page from the contact page, or in-lobby chat after you sign in. Send a username. Do not send the password.", "使用联系页上的 WhatsApp 或 Facebook 专页，或登录后的大厅内聊天。发送用户名。不要发送密码。") },
  ];

  const types = [
    { title: t("Welcome", "欢迎"), text: t("Named for new players, and the description includes slots, live casino, and sports. The live terms, including any turnover, are on the offer before you claim it.", "面向新玩家，说明里包括老虎机、真人娱乐场和体育。包括流水在内的现行条件，在你领取前写在该优惠上。") },
    { title: t("Slot campaigns", "老虎机活动"), text: t("Daily and extra slot campaigns are published on the promotions desk. Check the current card. An older public window that has closed is not a current percentage.", "每日与额外老虎机活动公布在优惠页上。请查看当前卡片。已经结束的较早公开档期不是当前比例。") },
    { title: t("Rebate", "返水"), text: t("A rebate campaign has been published for eligible play. The rate and the products that count are stated on the offer. They are not assumed on this page.", "已为符合条件的游戏公布返水活动。比例和计入的产品写在该优惠上。本页不作假设。") },
    { title: t("Referral", "推荐"), text: t("After login, the profile share area can provide a referral link. Friends register through that link. Reward details stay on the current invite campaign.", "登录后，个人资料的分享位置可以提供推荐链接。好友通过该链接注册。奖励细节留在当前邀请活动上。") },
    { title: t("Birthday", "生日"), text: t("A birthday reward has been offered to verified members. Eligibility is confirmed in the account after the profile date of birth is saved. There is no homepage still for this one.", "已向完成验证的会员提供生日奖励。个人资料保存出生日期后，资格在账户里确认。这一项没有首页画面。") },
    { title: t("Missions and codes", "任务与代码"), text: t("Daily missions and redeem codes are listed in the promotions index. You enter them in the lobby when a campaign is open. This page does not print a code.", "每日任务和兑换码列在优惠目录里。活动开放时，在大厅里输入。本页不印出代码。") },
  ];

  return (
    <div className="container page-hero">
      <Breadcrumbs locale={locale} items={[{ href: href("/"), label: t("Home", "首页") }, { label: t("Promotions", "优惠") }]} />

      <section className="hub-hero">
        <div>
          <p className="tag">{t("Promotions hub", "优惠")}</p>
          <h1>{t("E9WIN Promotions", "E9WIN 优惠")}</h1>
          <p>{t("E9WIN promotions name the campaigns this site actually describes. Open the account card before you opt in. That card carries the current amount, turnover, and dates.", "E9WIN 优惠列出的是本站实际说明的活动。选择参加前先打开账户卡片。该卡片上有当前金额、流水和日期。")}</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="#offers">{t("Explore promotions", "查看优惠")}</Link>
            <Link className="btn btn-line" href="#how">{t("How promotions work", "优惠如何运作")}</Link>
          </div>
        </div>
        <img src="/images/promotions/promo-welcome.webp" alt={sceneAlt(locale, welcomeAlt)} width={1280} height={720} />
      </section>

      <VisualSplit src="/images/promotions/promo-daily.webp" alt={sceneAlt(locale, "Daily and extra slot campaign artwork")} reverse>
        <h2>{t("E9WIN promotions and offers", "E9WIN 优惠与活动")}</h2>
        <p>{t("The promotions page is a directory of campaign names and short descriptions. It is not the cashier and it is not the opt-in button. A name here means the rewards desk has published that kind of campaign.", "优惠页是活动名称和简短说明的目录。它不是收银台，也不是参加按钮。这里出现一个名称，表示奖励区公布了这一类活动。")}</p>
        <p>{t("Four of the names also sit in the homepage slider because they have stills: welcome, daily and extra slots, rebate, and invite friends. Birthday and missions stay in the list without that artwork.", "其中四个名称因为有画面，也放在首页轮播里：欢迎、每日与额外老虎机、返水，以及邀请好友。生日和任务留在列表里，没有该画面。")}</p>
        <p>{t("Availability can differ by account. The card in the account is where you see whether you can opt in, which products count, and any turnover that card prints. If this page and the card disagree, follow the card.", "是否开放可以因账户而不同。账户里的卡片会显示你能否参加、哪些产品计入，以及该卡片印出的流水。如果本页和卡片不一致，以卡片为准。")}</p>
        <p>{t("Older campaign windows that were dated on the public site have closed. They are not relabelled as current offers, and this page does not reprint those percentages.", "公开网站上已注明日期的较早活动档期已经结束。它们不会被重新标成当前优惠，本页也不重印那些比例。")}</p>
      </VisualSplit>

      <section className="section prose">
        <h2>{t("Explore E9WIN promotions", "了解 E9WIN 优惠")}</h2>
        <p>{t("These groups match the campaigns in the project data. They are not extra offers. A group with no named campaign is not given a placeholder card.", "这些分组对应项目资料里的活动。它们不是额外优惠。没有已列名活动的分组，不会放一张占位卡片。")}</p>
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
            <p className="tag">{t("Directory", "目录")}</p>
            <h2 id="offers-heading">{t("Named E9WIN promotions", "已列名的 E9WIN 优惠")}</h2>
            <p>{t("Homepage featured means the campaign has a still on the homepage. Listed means it is named here without that still. Neither label is a deadline.", "首页展示表示该活动在首页有画面。已列出表示它在这里有名称，但没有该画面。这两个标签都不是截止日期。")}</p>
          </div>
        </div>
        <div className="offer-grid">
          {featured.map((item) => {
            const copy = promoCopy(locale, item);
            return (
              <article className="promo" key={item.id}>
                <img className="promo-art" src={item.image} alt={t(`${item.title} campaign artwork`, `${copy.title}活动画面`)} width={1280} height={720} />
                <p className="tag">{t(`Homepage featured · ${item.category}`, `首页展示 · ${copy.category}`)}</p>
                <h3>{copy.title}</h3>
                <p>{copy.description}</p>
                <Link className="btn btn-line" href={href("/login")}>{t("Sign in to view the card", "登录后查看卡片")}</Link>
              </article>
            );
          })}
        </div>
        <div className="topic-grid offer-listed">
          {listed.map((item) => {
            const copy = promoCopy(locale, item);
            return (
              <article className="panel" key={item.id}>
                <p className="tag">{t(`Listed · ${item.category}`, `已列出 · ${copy.category}`)}</p>
                <h3>{copy.title}</h3>
                <p>{copy.description}</p>
                <p style={{ marginTop: 12 }}><Link href={href("/login")}>{t("Sign in to view the card", "登录后查看卡片")}</Link></p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section prose">
        <h2>{t("How to find a promotion", "如何找到一项优惠")}</h2>
        <ol className="steps">
          <li>{t("Read the names on this page, or the four stills in the homepage slider.", "阅读本页的名称，或首页轮播里的四张画面。")}</li>
          <li>{t("Open the description and note the category: welcome, slots, rebate, referral, rewards, or missions.", "打开说明，并记下分类：欢迎、老虎机、返水、推荐、奖励或任务。")}</li>
          <li>{t("Sign in and open the matching card. That is where eligibility is shown for your account.", "登录并打开对应的卡片。你的账户是否符合，显示在那里。")}</li>
          <li>{t("Read the product list and any turnover the card prints before you opt in.", "选择参加前，阅读产品列表和卡片印出的流水。")}</li>
          <li>{t("Follow the participation step on the card. A code or mission is entered in the lobby when that campaign is open.", "按卡片上的参加步骤操作。该活动开放时，在大厅里输入代码或任务。")}</li>
          <li>{t("Stop if the card does not match the play you intended. The slider cannot claim the offer for you.", "如果卡片和你打算进行的游戏不一致，就停下来。轮播不能替你领取。")}</li>
        </ol>
      </section>

      <VisualSplit src="/images/brand/scene-account.webp" alt={sceneAlt(locale, "A quiet desk beside a night window")} id="how">
        <h2>{t("How E9WIN promotions work", "E9WIN 优惠如何运作")}</h2>
        <p>{t("The path is the same shape for every named campaign, and the details are not. Discover the name here, review the description, check the card, participate only if the card matches, then complete whatever qualifying action that card states.", "每一项已列名活动的路径形状相同，细节不同。在这里看到名称，阅读说明，核对卡片，只在卡片相符时参加，然后完成该卡片写明的合格操作。")}</p>
        <ol className="steps">
          <li>{t("Discover the campaign name on this page or the homepage slider.", "在本页或首页轮播里看到活动名称。")}</li>
          <li>{t("Review the short description so you know which desk it belongs to.", "阅读简短说明，知道它属于哪一类。")}</li>
          <li>{t("Check eligibility on the account card, not from a screenshot or an old percentage.", "在账户卡片上核对资格，不要靠截图或旧比例。")}</li>
          <li>{t("Opt in, or enter a mission or code in the lobby, only when the card tells you to.", "只在卡片这样要求时，才选择参加，或在大厅里输入任务或代码。")}</li>
          <li>{t("Finish the requirement the card prints, if it prints one. That figure is not stored here.", "如果卡片印了要求，就完成它。该数字不存在这里。")}</li>
          <li>{t("Use the result where the card says it applies. A withdrawal can wait while turnover on an open card is unfinished.", "在卡片写明适用的地方使用结果。未完成的卡片流水，可能让提款等待。")}</li>
        </ol>
        <p className="callout">{t("Individual campaigns can differ. Nothing in this list is a percentage, a minimum deposit, or an expiry.", "各项活动可以不同。这份列表里没有比例、最低存款或到期时间。")}</p>
      </VisualSplit>

      <VisualSplit src="/images/brand/scene-payments.webp" alt={sceneAlt(locale, "A card and a phone on a dark cashier counter")}>
        <h2>{t("Promotion eligibility", "优惠资格")}</h2>
        <p>{t("Depending on the specific promotion, the card may mention account status, a product list, a payment or profile check, a turnover line, or a limit per person. Not every campaign uses every one of those.", "视具体优惠而定，卡片可能提到账户状态、产品列表、支付或个人资料核对、一行流水，或每人限额。不是每一项活动都会用到全部这些。")}</p>
        <ul>
          <li>{t("Whether the card is visible on your account. A missing card can mean the campaign is not open for you.", "卡片是否出现在你的账户上。没有卡片，可能表示该活动没有对你开放。")}</li>
          <li>{t("Whether you must opt in before you play.", "是否必须先参加再游戏。")}</li>
          <li>{t("Which products count. Welcome names slots, live casino, and sports. Daily and extra campaigns point at slots.", "哪些产品计入。欢迎活动点名老虎机、真人娱乐场和体育。每日与额外活动指向老虎机。")}</li>
          <li>{t("Whether a verified phone number or bank profile is required. Some offers ask for that first.", "是否需要已验证的电话号码或银行资料。有些优惠会先这样要求。")}</li>
          <li>{t("Any turnover the card states. It is not copied onto this page.", "卡片写明的流水。它不会被抄到本页。")}</li>
          <li>{t("A per-person limit, if the card states one.", "每人限额，如果卡片写了。")}</li>
        </ul>
        <p>{t("Birthday eligibility is confirmed after a date of birth is saved on the profile. Referral uses the share link in the profile after login.", "个人资料保存出生日期后，才会确认生日资格。推荐使用登录后个人资料里的分享链接。")}</p>
      </VisualSplit>

      <section className="section prose">
        <h2>{t("Understanding promotion terms", "理解优惠条件")}</h2>
        <p>{t("Read the card before you opt in. The useful checks are the ones the card actually prints, not a standard table this website does not have.", "选择参加前先读卡片。有用的核对是卡片实际印出的内容，不是本网站没有的一张标准表。")}</p>
        <ul>
          <li>{t("Eligibility and the qualifying action.", "资格和合格操作。")}</li>
          <li>{t("Which games or categories count, and which do not.", "哪些游戏或分类计入，哪些不计。")}</li>
          <li>{t("Any minimum, maximum, or turnover line, only if the card shows it.", "任何最低、最高或流水一行，仅当卡片显示时。")}</li>
          <li>{t("Any expiry the card shows. The campaigns on this page do not carry a public start or end date.", "卡片显示的任何到期时间。本页的活动没有公开的开始或结束日期。")}</li>
          <li>{t("Whether an unfinished card can hold a withdrawal. That is a reason to read the card, not a published clock.", "未完成的卡片是否会让提款等待。这是要读卡片的原因，不是公布的计时。")}</li>
          <li>{t("Account restrictions the card mentions, including a limit per person.", "卡片提到的账户限制，包括每人限额。")}</li>
        </ul>
        <p>
          {t("More context sits on the ", "更多说明在")}
          <Link href={href("/faq")}>{t("FAQ", "常见问题")}</Link>
          {t(", the ", "、")}
          <Link href={href("/responsible-gaming")}>{t("responsible gaming", "理性娱乐")}</Link>
          {t(" page, and ", "页和")}
          <Link href={href("/contact")}>{t("contact", "联系客服")}</Link>
          {t(". There is no separate terms URL per campaign. The card is the offer.", "。每项活动没有单独的条款网址。卡片就是该优惠。")}
        </p>
      </section>

      <VisualSplit src="/images/promotions/promo-rebate.webp" alt={sceneAlt(locale, "Rebate campaign artwork")} reverse id="join">
        <h2>{t("How to join an E9WIN promotion", "如何参加 E9WIN 优惠")}</h2>
        <p>{t("Campaigns do not all use one button. Welcome, slot, rebate, and referral cards are reviewed in the account. Missions and redeem codes are entered in the lobby when a campaign is open. Birthday depends on the saved date of birth.", "活动并不都用同一个按钮。欢迎、老虎机、返水和推荐卡片在账户里阅读。活动开放时，任务和兑换码在大厅里输入。生日取决于已保存的出生日期。")}</p>
        <ol className="steps">
          <li>
            <Link href={href("/register")}>{t("Register", "注册")}</Link>
            {t(" if you do not have an account, then ", "（如果还没有账户），然后")}
            <Link href={href("/login")}>{t("sign in", "登录")}</Link>
            {t(".", "。")}
          </li>
          <li>{t("Open this promotions list and choose the campaign you meant.", "打开这份优惠列表，选择你要的活动。")}</li>
          <li>{t("Open that card on the rewards desk and read it.", "在奖励区打开该卡片并阅读。")}</li>
          <li>{t("Confirm the account in front of you is the one that should receive the offer.", "确认眼前的账户就是应该收到该优惠的账户。")}</li>
          <li>{t("Opt in, or enter the mission or code, only in the way that card describes.", "只按该卡片描述的方式选择参加，或输入任务或代码。")}</li>
          <li>{t("Complete any qualifying action the card names. A deposit, if one is required, follows the cashier instruction for that attempt.", "完成卡片点名的合格操作。如果需要存款，按该次收银台的指示操作。")}</li>
          <li>{t("Check the account again for the result. This website does not show a live balance.", "再查看账户里的结果。本网站不显示实时余额。")}</li>
        </ol>
      </VisualSplit>

      <VisualSplit src="/images/brand/scene-slots.webp" alt={sceneAlt(locale, "Gates of Olympus on a display in a dark private room")}>
        <h2>{t("Promotions and E9WIN games", "优惠与 E9WIN 游戏")}</h2>
        <p>{t("Some campaigns name a product. Welcome campaigns name slots, live casino, and sports. Daily and extra slot campaigns point at the slots desk. Rebate says the products that count are on the offer. Birthday, referral, and missions do not get a game list invented here.", "有些活动会点名产品。欢迎活动点名老虎机、真人娱乐场和体育。每日与额外老虎机活动指向老虎机。返水说明计入的产品在该优惠上。生日、推荐和任务不会在这里被编出一份游戏列表。")}</p>
        <p>
          {t("A slot campaign may not include live tables, sports, or 4D. Check the card before you assume a category counts. The ", "老虎机活动可能不包括真人桌、体育或 4D。在假定某个分类计入之前，先看卡片。")}
          <Link href={href("/games")}>{t("games hub", "游戏页")}</Link>
          {t(" is where those categories are explained. It does not opt you into a campaign.", "说明这些分类。它不会让你参加活动。")}
        </p>
        <p>
          <Link href={href("/games/slots")}>{t("Slots", "老虎机")}</Link>
          {t(" · ", " · ")}
          <Link href={href("/games/live-casino")}>{t("Live casino", "真人娱乐场")}</Link>
          {t(" · ", " · ")}
          <Link href={href("/games/sports")}>{t("Sports", "体育")}</Link>
          {t(" · ", " · ")}
          <Link href={href("/games/4d")}>{t("4D lottery", "4D")}</Link>
          {t(" · ", " · ")}
          <Link href={href("/games/fishing")}>{t("Fishing", "捕鱼")}</Link>
          {t(" · ", " · ")}
          <Link href={href("/games/esports")}>{t("Esports", "电竞")}</Link>
        </p>
      </VisualSplit>

      <section className="section prose">
        <h2>{t("Promotions and your E9WIN account", "优惠与你的 E9WIN 账户")}</h2>
        <p>{t("Opt in from the account that should receive the campaign. A share link, a birthday profile, and a rewards card are all tied to that login. This website does not keep the play session.", "从应该收到该活动的账户参加。分享链接、生日资料和奖励卡片都绑定在该登录上。本网站不保存游戏登录状态。")}</p>
        <p>{t("If a campaign the homepage names is not on your card, the account may not be eligible, or the card may ask for a verified phone number and bank details first. Compare the username you are using with the one you registered.", "如果首页点名的活动不在你的卡片上，该账户可能不符合，或者卡片会先要求已验证的电话号码和银行资料。把你正在用的用户名和注册时的用户名对照。")}</p>
        <p>
          {t("When it still does not appear, use ", "如果仍然没有出现，使用")}
          <Link href={href("/contact")}>{t("contact", "联系客服")}</Link>
          {t(" or the ", "或")}
          <Link href={href("/faq")}>{t("FAQ", "常见问题")}</Link>
          {t(". Send the username. Do not send the password. ", "。发送用户名。不要发送密码。")}
          <Link href={href("/login")}>{t("Sign in", "登录")}</Link>
          {t(" or ", "或")}
          <Link href={href("/register")}>{t("register", "注册")}</Link>
          {t(" if you are not in an account yet.", "（如果还没有进入账户）。")}
        </p>
      </section>

      <section className="section prose">
        <h2>{t("Promotion troubleshooting", "优惠排查")}</h2>
        <div className="topic-grid">
          <article className="panel">
            <h3>{t("The promotion is not visible", "看不到该优惠")}</h3>
            <p>{t("It may not be open for that account, the card may require a verified phone or bank profile first, or you may be looking at a closed window. Check the rewards desk, then contact support with your username.", "它可能没有对该账户开放，卡片可能先要求已验证的电话或银行资料，或者你看的是已结束的档期。先看奖励区，再用用户名联系客服。")}</p>
          </article>
          <article className="panel">
            <h3>{t("You cannot opt in", "无法参加")}</h3>
            <p>{t("Read the product list and any opt-in line. A slot campaign may exclude other categories. If the card says the limit per person is already used, this page cannot reopen it.", "阅读产品列表和任何参加说明。老虎机活动可能排除其他分类。如果卡片写明每人限额已经用过，本页不能重新打开它。")}</p>
          </article>
          <article className="panel">
            <h3>{t("You finished a step and nothing changed", "你完成了一步，但没有变化")}</h3>
            <p>{t("Match the step to the qualifying action on the card. Check the same account again. Contact support if it still does not match. There is no promised manual credit and no published response time.", "把该步骤和卡片上的合格操作对照。再看一次同一个账户。如果仍然对不上，联系客服。没有承诺人工入账，也没有公布回复时间。")}</p>
          </article>
          <article className="panel">
            <h3>{t("The requirements are unclear", "要求不清楚")}</h3>
            <p>
              {t("Use the card, then the ", "先看卡片，然后看")}
              <Link href={href("/guides/promotions-guide")}>{t("promotions guide", "优惠指南")}</Link>
              {t(", the ", "、")}
              <Link href={href("/faq")}>{t("FAQ", "常见问题")}</Link>
              {t(", and ", "和")}
              <Link href={href("/contact")}>{t("contact", "联系客服")}</Link>
              {t(". Do not treat an old percentage as the current offer.", "。不要把旧比例当成当前优惠。")}
            </p>
          </article>
        </div>
      </section>

      <section className="section prose">
        <h2>{t("Tips for using the promotions page", "使用优惠页的提示")}</h2>
        <ul>
          <li>{t("Read the full description, not only the campaign name.", "阅读完整说明，不要只看活动名称。")}</li>
          <li>{t("Treat homepage featured and listed as artwork labels, not as urgency.", "把首页展示和已列出当成画面标签，不是催促。")}</li>
          <li>{t("Verify eligibility on the card before you play.", "游戏前在卡片上核对资格。")}</li>
          <li>{t("Notice which action the card asks for: opt in, a profile date of birth, a share link, or a lobby code.", "注意卡片要求的操作：参加、个人资料里的出生日期、分享链接，或大厅代码。")}</li>
          <li>{t("Do not assume every campaign applies to every account or every category.", "不要假定每一项活动都适用于每个账户或每个分类。")}</li>
          <li>{t("Stay on E9WIN pages and the lobby. A percentage from a chat is not the card.", "留在 E9WIN 页面和大厅里。聊天里的比例不是卡片。")}</li>
          <li>
            {t("Decide the budget before you opt in. The ", "选择参加前先决定预算。")}
            <Link href={href("/responsible-gaming")}>{t("responsible gaming", "理性娱乐")}</Link>
            {t(" page is the place for that limit, not a reward claim.", "页是放这个限额的地方，不是领取奖励。")}
          </li>
        </ul>
      </section>

      <section className="section hub-split">
        <img src="/images/brand/scene-devices.webp" alt={sceneAlt(locale, "A phone and a laptop on a dark marble desk")} width={1400} height={760} />
        <div className="prose">
          <h2>{t("Explore promotions on mobile", "在手机上查看优惠")}</h2>
          <p>{t("The promotions list is the same site on a phone. Search is not required. Scroll the names, open a description, and sign in for the card. The homepage slider is the same four campaigns.", "优惠列表在手机上是同一个网站。不需要搜索。滚动名称，打开说明，登录后看卡片。首页轮播是同样的四个活动。")}</p>
          <p>
            {t("iPhone can add the site from Safari. Android can use the portal download on the ", "iPhone 可以从 Safari 加入网站。Android 可以使用")}
            <Link href={href("/download")}>{t("download", "下载")}</Link>
            {t(" page. There is no App Store or Google Play listing, and this page does not publish an install file.", "页上的门户入口。没有 App Store 或 Google Play 上架，本页也不公布安装文件。")}
          </p>
          <p>
            {t("The ", "")}
            <Link href={href("/guides/mobile-guide")}>{t("mobile guide", "手机指南")}</Link>
            {t(" covers the browser, the home-screen icon, and the Android download. It does not change promotion rules.", "说明浏览器、主屏幕图标和 Android 下载。它不改变优惠规则。")}
          </p>
        </div>
      </section>

      <FaqBlock items={faqs} title={t("E9WIN promotions FAQ", "E9WIN 优惠常见问题")} />

      <section className="section">
        <div className="section-head">
          <div>
            <h2>{t("Promotion guides", "优惠指南")}</h2>
            <p>{t("Short pages for the account tasks around a campaign. Only routes that exist are linked.", "活动相关账户操作的短页。只链接实际存在的页面。")}</p>
          </div>
          <Link className="cat-all" href={href("/guides")}>{t("Guide hub", "指南")}</Link>
        </div>
        <div className="guide-grid">
          {guideSlugs.map((slug) => {
            const guide = guideBySlug(slug);
            if (!guide) return null;
            const text = presentGuide(guide, locale);
            const scene = guideScenes[guide.category];
            return (
              <Link className="guide-card" href={href(`/guides/${guide.slug}`)} key={guide.slug}>
                {scene ? <img src={scene.src} alt={sceneAlt(locale, scene.alt)} width={640} height={360} loading="lazy" /> : null}
                <span className="guide-body">
                  <span className="tag">{text.categoryLabel}</span>
                  <h3>{text.title}</h3>
                  <p>{text.excerpt}</p>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section prose">
        <h2>{t("Explore more on E9WIN", "继续了解 E9WIN")}</h2>
        <div className="topic-grid">
          <article className="panel">
            <h3>{t("Games", "游戏")}</h3>
            <p>
              <Link href={href("/games")}>{t("Games hub", "游戏")}</Link>{t(", ", "、")}<Link href={href("/games/slots")}>{t("slots", "老虎机")}</Link>{t(", ", "、")}<Link href={href("/games/live-casino")}>{t("live casino", "真人娱乐场")}</Link>{t(", ", "、")}<Link href={href("/games/sports")}>{t("sports", "体育")}</Link>{t(", ", "、")}<Link href={href("/games/4d")}>4D</Link>{t(", ", "、")}<Link href={href("/games/fishing")}>{t("fishing", "捕鱼")}</Link>{t(", and ", "和")}<Link href={href("/games/esports")}>{t("esports", "电竞")}</Link>{t(".", "。")}
            </p>
          </article>
          <article className="panel">
            <h3>{t("Account and payments", "账户与支付")}</h3>
            <p>
              <Link href={href("/login")}>{t("Sign in", "登录")}</Link>{t(", ", "、")}<Link href={href("/register")}>{t("register", "注册")}</Link>{t(", ", "、")}<Link href={href("/payment-methods")}>{t("payment methods", "支付方式")}</Link>{t(", ", "、")}<Link href={href("/deposit")}>{t("deposit", "存款")}</Link>{t(", and ", "和")}<Link href={href("/withdrawal")}>{t("withdrawal", "提款")}</Link>{t(".", "。")}
            </p>
          </article>
          <article className="panel">
            <h3>{t("Help and membership", "帮助与会员")}</h3>
            <p>
              <Link href={href("/faq")}>{t("FAQ", "常见问题")}</Link>{t(", ", "、")}<Link href={href("/contact")}>{t("contact", "联系客服")}</Link>{t(", ", "、")}<Link href={href("/responsible-gaming")}>{t("responsible gaming", "理性娱乐")}</Link>{t(", ", "、")}<Link href={href("/download")}>{t("download", "下载")}</Link>{t(", ", "、")}<Link href={href("/vip")}>VIP</Link>{t(", ", "、")}<Link href={href("/agent")}>{t("agent", "代理")}</Link>{t(", and ", "和")}<Link href={href("/guides")}>{t("guides", "指南")}</Link>{t(".", "。")}
            </p>
          </article>
        </div>
      </section>

      <VisualSplit src="/images/promotions/promo-referral.webp" alt={sceneAlt(locale, "Referral campaign artwork")} reverse>
        <h2>{t("Explore E9WIN promotions", "查看 E9WIN 优惠")}</h2>
        <p>{t("Use this list to see which campaigns are named. Use the account card to see whether you can join.", "用这份列表看哪些活动已被列名。用账户卡片看你能否参加。")}</p>
        <div className="cta-row">
          <Link className="btn btn-primary" href="#offers">{t("View promotions", "查看优惠")}</Link>
          <Link className="btn btn-line" href={href("/games")}>{t("Explore games", "查看游戏")}</Link>
        </div>
      </VisualSplit>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: t("E9WIN Promotions", "E9WIN 优惠"),
        url: absoluteUrl(pagePath),
        description,
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("Home", "首页"), item: absoluteUrl(href("/")) },
          { "@type": "ListItem", position: 2, name: t("Promotions", "优惠"), item: absoluteUrl(pagePath) },
        ],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: t("Named E9WIN promotions", "已列名的 E9WIN 优惠"),
        itemListElement: promotions.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: promoCopy(locale, item).title,
          url: absoluteUrl(pagePath),
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
