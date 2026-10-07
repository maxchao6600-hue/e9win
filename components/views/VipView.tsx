import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqBlock } from "@/components/content/CopySections";
import { VisualSplit } from "@/components/content/VisualSplit";
import { JsonLd } from "@/components/seo/JsonLd";
import { guideBySlug } from "@/lib/content";
import { presentGuide } from "@/lib/i18n/zhGuides";
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { guideScenes, pageScenes } from "@/lib/scenes";
import { absoluteUrl, siteConfig } from "@/lib/site";

const enDescription = "Learn how E9WIN describes VIP membership, where to check a notice in your account, and how that label differs from the VIP Baccarat table. Levels and cash figures are not published here.";
const zhDescription = "了解 E9WIN 如何说明 VIP会员、在账户哪里查看通知，以及这个名称和 VIP Baccarat 桌的区别。等级和金额没有在这里公布。";

const zhAlt: Record<string, string> = {
  "A phone and a laptop on a dark marble desk": "深色大理石桌上的手机和笔记本电脑",
  "A quiet desk beside a night window": "夜窗旁安静的书桌",
  "Gates of Olympus on a display in a dark private room": "昏暗私人房间屏幕上的 Gates of Olympus",
  "A card and a phone on a dark cashier counter": "深色收银台柜台上的卡片和手机",
  "A dark entrance lit with gold": "金色灯光下的深色入口",
  "Rebate campaign artwork": "返水活动画面",
  "Playtech baccarat key art of a dealer holding cards": "Playtech 百家乐主视觉，荷官手持纸牌",
  "A private lounge with velvet seating and gold light": "丝绒座位与金色灯光的私人休息室",
  "A dark entrance lit with gold, used as the welcome campaign still": "金色灯光下的深色入口，用作欢迎活动画面",
};

function sceneAlt(locale: Locale, alt: string) {
  return tx(locale, alt, zhAlt[alt] ?? alt);
}

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

export function vipMetadata(locale: Locale): Metadata {
  const description = tx(locale, enDescription, zhDescription);
  const path = localizePath("/vip", locale);
  const title = tx(locale, "E9WIN VIP | Membership Information", "E9WIN VIP | VIP会员说明");
  const baseMeta = pageMeta({ title, description, path, locale });
  return {
    ...baseMeta,
    openGraph: {
      ...baseMeta.openGraph,
      images: [{ url: absoluteUrl(pageScenes.vip.src), alt: sceneAlt(locale, pageScenes.vip.alt) }],
    },
    twitter: {
      ...baseMeta.twitter,
      images: [absoluteUrl(pageScenes.vip.src)],
    },
  };
}

export function VipView({ locale }: { locale: Locale }) {
  const t = (en: string, zh: string) => tx(locale, en, zh);
  const href = (path: string) => localizePath(path, locale);
  const description = t(enDescription, zhDescription);
  const pagePath = href("/vip");

  const faqs = [
    { q: t("What is E9WIN VIP?", "E9WIN VIP 是什么？"), a: t("VIP is the membership label on this site. It sits beside the rewards desk, which also names missions, rebates, referral, and redeem codes. It is a separate thing from the Playtech live table called VIP Baccarat.", "VIP 是本站的会员名称。它在奖励区旁边，奖励区也会列出任务、返水、推荐和兑换码。它和名为 VIP Baccarat 的 Playtech 真人桌是两回事。") },
    { q: t("How does E9WIN VIP membership work?", "E9WIN VIP会员如何运作？"), a: t("You use a player account, sign in, and read any VIP notice in the rewards area of the lobby. This public page explains that path. It does not change the account by itself.", "你使用玩家账户，登录，并在大厅奖励区阅读任何 VIP 通知。这个公开页面说明该路径。它本身不会改变账户。") },
    { q: t("Does E9WIN have different VIP levels?", "E9WIN 有不同的 VIP 等级吗？"), a: t("No level names, point targets, or maintenance rules are published on this site, so this page does not show a ladder. If the rewards area in your account shows a status, that screen is the current detail for that account.", "本站没有公布等级名称、积分目标或保级规则，所以本页不显示等级表。如果账户奖励区显示了状态，那个画面就是该账户的当前细节。") },
    { q: t("How can I check my VIP status?", "如何查看我的 VIP 状态？"), a: t("Sign in to the correct account and open the rewards area in the lobby. Read whatever membership information that account shows. This website does not include a membership dashboard.", "登录正确的账户，并打开大厅里的奖励区。阅读该账户显示的会员信息。本网站没有会员仪表板。") },
    { q: t("How is VIP eligibility determined?", "VIP 资格如何确定？"), a: t("A qualification formula is not published here. Eligibility is whatever the notice in your account states. If the notice is missing, ask support with your username.", "这里没有公布资格公式。资格以账户通知所写的为准。如果没有通知，用用户名询问客服。") },
    { q: t("What benefits are available to VIP members?", "VIP会员有哪些权益？"), a: t("Cash rates, dedicated managers, withdrawal priority, and exclusive games are not printed on this page. Check the rewards area, then any promotion card you are considering, before you rely on a benefit.", "现金比例、专属经理、提款优先和专属游戏都没有印在本页。在依赖一项权益之前，先看奖励区，再看你正在考虑的优惠卡片。") },
    { q: t("Are VIP benefits the same for every member?", "每位会员的 VIP 权益都一样吗？"), a: t("This page cannot say that they are. A notice is tied to the account you are signed in to, and one account can see a notice that another account does not.", "本页不能这样说。通知绑定在你登录的账户上，一个账户能看到的通知，另一个账户可能没有。") },
    { q: t("Are VIP benefits connected to promotions?", "VIP 权益和优惠有关吗？"), a: t("They are related topics, and they are not the same list. A campaign on the promotions page has its own card. A membership notice does not automatically include that campaign.", "它们是相关话题，但不是同一份列表。优惠页上的活动有自己的卡片。会员通知不会自动包含该活动。") },
    { q: t("Can VIP benefits apply to specific games?", "VIP 权益可以只适用于指定游戏吗？"), a: t("Only if the notice or the campaign card names those games. The public catalog itself is the same set of categories for every visitor. Opening VIP Baccarat joins a Playtech table.", "只有通知或活动卡片点名了那些游戏时才可以。公开目录本身对每位访客是同一组分类。打开 VIP Baccarat 是加入一张 Playtech 桌。") },
    { q: t("What should I do if I cannot see my VIP information?", "如果看不到 VIP 信息怎么办？"), a: t("Confirm you are in the right account, look again in the rewards area, and read the promotions page if you were expecting a campaign. Then contact support with your username. Do not send the password.", "确认你在正确的账户里，再到奖励区看一次；如果你期待的是活动，就阅读优惠页。然后用用户名联系客服。不要发送密码。") },
    { q: t("How do I contact E9WIN about VIP questions?", "VIP 问题如何联系 E9WIN？"), a: t("Use the contact page, WhatsApp, or the Facebook page. After you sign in, the lobby also refers players to live chat. Send a username.", "使用联系页、WhatsApp 或 Facebook 专页。登录后，大厅也会把玩家引向在线聊天。发送用户名。") },
    { q: t("Can I access VIP information on mobile?", "可以在手机上查看 VIP 信息吗？"), a: t("Yes. This page and the lobby work in the phone browser. iPhone can use Safari Add to Home Screen. Android can use the portal download on the download page. There is no store listing and no separate VIP app.", "可以。本页和大厅都可以在手机浏览器里使用。iPhone 可以使用 Safari 加入主屏幕。Android 可以使用下载页上的门户入口。没有应用商店上架，也没有单独的 VIP 应用。") },
  ];

  const checks = [
    { title: t("The rewards area", "奖励区"), text: t("After you sign in, membership notices are read in the lobby rewards area, beside missions and rebates. If that area has a VIP line for your account, that line is the current detail.", "登录后，会员通知在大厅奖励区阅读，旁边是任务和返水。如果该区域有你账户的 VIP 一行，那一行就是当前细节。") },
    { title: t("The promotions list", "优惠列表"), text: t("Campaigns such as welcome play, rebate, referral, birthday, and missions are named on the promotions page. Each one has its own card. A membership label does not copy those cards onto your account.", "欢迎游戏、返水、推荐、生日和任务等活动在优惠页上列名。每一项都有自己的卡片。会员名称不会把那些卡片复制到你的账户上。") },
    { title: t("Support", "客服"), text: t("When the account is silent, WhatsApp, Facebook, and in-lobby chat can look up the username. They are the published way to ask. This page cannot confirm a status for you.", "当账户没有显示时，WhatsApp、Facebook 和大厅内聊天可以按用户名查询。这是已公布的询问方式。本页不能替你确认状态。") },
  ];

  return (
    <div className="container page-hero">
      <Breadcrumbs locale={locale} items={[{ href: href("/"), label: t("Home", "首页") }, { label: "VIP" }]} />

      <section className="hub-hero">
        <div>
          <p className="tag">{t("VIP hub", "VIP")}</p>
          <h1>E9WIN VIP</h1>
          <p>{t("E9WIN VIP explains the membership label, where a notice can appear after you sign in, and how to ask when the account is unclear. The rewards area in the lobby holds the current detail for that login.", "E9WIN VIP 说明会员名称、登录后通知可能出现的位置，以及账户不清楚时如何询问。大厅里的奖励区保存该登录的当前细节。")}</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="#membership">{t("Explore VIP information", "查看 VIP 说明")}</Link>
            <Link className="btn btn-line" href={href("/contact")}>{t("Contact support", "联系客服")}</Link>
          </div>
        </div>
        <img src={pageScenes.vip.src} alt={sceneAlt(locale, pageScenes.vip.alt)} width={1600} height={900} />
      </section>

      <VisualSplit src="/images/brand/scene-slots.webp" alt={sceneAlt(locale, "Gates of Olympus on a display in a dark private room")} reverse id="membership">
        <h2>{t("E9WIN VIP membership", "E9WIN VIP会员")}</h2>
        <p>{t("Membership, on a gaming site, is a label an account can carry beside ordinary play. Here, that label is VIP. It is discussed with the rewards desk, the same desk that names missions, rebates, referral earning, and redeem codes.", "在游戏网站上，会员是账户在普通游戏之外可以带上的名称。在这里，这个名称是 VIP。它和奖励区一起说明，奖励区也会列出任务、返水、推荐和兑换码。")}</p>
        <p>{t("Those campaigns stay on their own cards. A VIP notice, when an account has one, is read in the lobby after you sign in. This page is the public explanation of that arrangement. Opening it does not attach a status to an account.", "那些活动留在各自的卡片上。账户若有 VIP 通知，登录后在大厅里阅读。本页是对这一安排的公开说明。打开本页不会给账户加上状态。")}</p>
        <p>{t("What one account sees can differ from what another account sees. The notice in the rewards area is the current detail for the login you are using. Read it, and read any campaign card you open, before you treat a benefit as available.", "一个账户看到的内容可以和另一个账户不同。奖励区里的通知，是你正在使用的登录的当前细节。在把一项权益当成可用之前，先读它，并阅读你打开的任何活动卡片。")}</p>
        <p>{t("The public site leaves levels, point targets, and cash amounts unpublished. They are omitted here until E9WIN prints them. The Playtech table called VIP Baccarat is a live casino cover, and it is a different use of the word.", "公开网站没有公布等级、积分目标和金额。在 E9WIN 印出之前，这里也不写。名为 VIP Baccarat 的 Playtech 桌是真人娱乐场封面，这个词在那里是另一种用法。")}</p>
      </VisualSplit>

      <section className="section prose">
        <h2>{t("Who is E9WIN VIP for?", "E9WIN VIP 是给谁看的？")}</h2>
        <p>{t("Use this page if you want a plain account of the membership label, a place to look after sign-in, or a support path when a notice is hard to read. It is also the page that separates membership from the VIP Baccarat table.", "如果你想要一份关于会员名称的直接说明、登录后该看哪里，或通知难读时的客服路径，就用本页。本页也把会员和 VIP Baccarat 桌分开。")}</p>
        <ul>
          <li>{t("You want to know what the public site actually publishes about membership.", "你想知道公开网站实际公布了哪些会员说明。")}</li>
          <li>{t("You want to know where a status would appear, which is the rewards area in the lobby.", "你想知道状态会出现在哪里，也就是大厅里的奖励区。")}</li>
          <li>{t("You want to compare that area with the promotions list, which is a different page.", "你想把该区域和优惠列表对照，那是另一个页面。")}</li>
          <li>{t("You have a question that depends on your own account, and you need WhatsApp, Facebook, or in-lobby chat.", "你的问题取决于自己的账户，需要 WhatsApp、Facebook 或大厅内聊天。")}</li>
        </ul>
        <p>{t("Creating an account does not by itself publish a VIP status on this page. Eligibility is not assumed from registration.", "建立账户本身不会在本页公布 VIP 状态。不会从注册假定资格。")}</p>
      </section>

      <VisualSplit src="/images/brand/scene-account.webp" alt={sceneAlt(locale, "A quiet desk beside a night window")} id="how">
        <h2>{t("How E9WIN VIP works", "E9WIN VIP 如何运作")}</h2>
        <p>{t("The path that this site can describe is an account path. It does not include a points target, a deposit threshold, or a named level, because those values are not published.", "本站能说明的路径是账户路径。它不包括积分目标、存款门槛或已命名的等级，因为这些数值没有公布。")}</p>
        <ol className="steps">
          <li>{t("Open or create the player account you intend to use.", "打开或建立你打算使用的玩家账户。")}</li>
          <li>{t("Sign in. This marketing site does not keep a play session.", "登录。这个说明网站不保存游戏登录状态。")}</li>
          <li>{t("In the lobby, open the rewards area, where missions, rebates, and any VIP notice are read.", "在大厅里打开奖励区，任务、返水和任何 VIP 通知都在那里阅读。")}</li>
          <li>{t("Read the notice that belongs to that account, including any condition printed beside it.", "阅读属于该账户的通知，包括旁边印出的任何条件。")}</li>
          <li>{t("If you are also looking at a campaign, open that card on the promotions page and follow the card.", "如果你也在看一项活动，在优惠页打开该卡片，并按卡片操作。")}</li>
          <li>{t("Stay on the same account, and use the published support channels when the notice is missing or unclear.", "留在同一个账户。通知缺失或不清楚时，使用已公布的客服渠道。")}</li>
        </ol>
        <p className="callout">{t("The rewards area is inside the player lobby. This page cannot show it, and it cannot complete a step for you.", "奖励区在玩家大厅里。本页无法显示它，也不能替你完成步骤。")}</p>
      </VisualSplit>

      <section className="section prose">
        <h2>{t("Understanding VIP membership structure", "理解 VIP会员结构")}</h2>
        <p>{t("A membership system can be organised in levels. E9WIN has not published level names, upgrade rules, downgrade rules, or maintenance requirements on this site, so there is no table to print.", "会员体系可以按等级组织。E9WIN 没有在本站公布等级名称、升级规则、降级规则或保级要求，所以没有表可以印。")}</p>
        <p>{t("If the rewards area shows a status for your login, that screen is the structure that applies to that account. If it shows nothing, the gap stays empty. Contact support and send the username if you need the account looked up. A chat screenshot of a ladder is not a substitute for that screen.", "如果奖励区显示了你这个登录的状态，那个画面就是适用于该账户的结构。如果什么都没有，空白就留着。需要查询账户时，联系客服并发送用户名。聊天里的等级表截图不能代替那个画面。")}</p>
      </section>

      <section className="section prose">
        <h2>{t("What to check about VIP benefits", "关于 VIP 权益要核对什么")}</h2>
        <p>{t("Benefit figures are not part of the public VIP page. Cashback rates, VIP-only rebates, birthday amounts, dedicated account managers, faster withdrawals, member-only games, and event calendars are not listed, because the project does not publish them.", "权益数字不是公开 VIP 页的一部分。返水比例、仅限 VIP会员的返水、生日金额、专属客户经理、更快提款、会员专属游戏和活动日历都没有列出，因为项目没有公布这些内容。")}</p>
        <p>{t("What you can check today is narrower, and it is real:", "你今天能核对的范围更窄，而且是实际存在的：")}</p>
        <div className="topic-grid">
          {checks.map((item) => (
            <article className="panel" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <VisualSplit src="/images/brand/scene-payments.webp" alt={sceneAlt(locale, "A card and a phone on a dark cashier counter")}>
        <h2>{t("Understanding VIP eligibility", "理解 VIP 资格")}</h2>
        <p>{t("Depending on the current notice in the account, the details worth checking are the ones that notice actually prints. This page does not add a formula on top of them.", "视账户里的当前通知而定，值得核对的是该通知实际印出的内容。本页不会在上面再加一条公式。")}</p>
        <ul>
          <li>{t("You are signed in to the account you think you are using.", "你登录的是你以为正在使用的账户。")}</li>
          <li>{t("A VIP notice is present in the rewards area, rather than assumed from an old message.", "奖励区里有 VIP 通知，而不是从旧消息里假定。")}</li>
          <li>{t("Any profile step the lobby already asks for, such as a phone number or payout details, is complete on that account.", "大厅已经要求的个人资料步骤，例如电话号码或收款资料，已在该账户上完成。")}</li>
          <li>{t("Any activity, product, or time limit is taken from the notice itself, only when the notice states it.", "任何活动、产品或时间限制都取自通知本身，而且仅当通知写明时。")}</li>
          <li>{t("A promotion you hoped was included has its own card and its own conditions.", "你希望已包含的优惠有自己的卡片和自己的条件。")}</li>
        </ul>
        <p>{t("If the notice does not state a requirement, do not treat a requirement from another site as yours.", "如果通知没有写要求，不要把其他网站的要求当成你的。")}</p>
      </VisualSplit>

      <section className="section prose" id="status">
        <h2>{t("How to check your VIP status", "如何查看你的 VIP 状态")}</h2>
        <p>{t("There is no membership dashboard on this website. The check is in the player lobby, on the account you sign in to.", "本网站没有会员仪表板。核对在玩家大厅里，在你登录的账户上。")}</p>
        <ol className="steps">
          <li>
            <Link href={href("/login")}>{t("Sign in", "登录")}</Link>
            {t(" with the username from registration.", "，使用注册时的用户名。")}
          </li>
          <li>{t("Open the rewards area in the lobby.", "打开大厅里的奖励区。")}</li>
          <li>{t("Read the membership information that account shows, including any condition next to it.", "阅读该账户显示的会员信息，包括旁边的任何条件。")}</li>
          <li>
            {t("If you expected a campaign as well, compare that reading with the card on ", "如果你也期待一项活动，把读到的内容和")}
            <Link href={href("/promotions")}>{t("promotions", "优惠")}</Link>
            {t(".", "上的卡片对照。")}
          </li>
          <li>
            {t("If the area is empty or you cannot tell what it means, use ", "如果该区域是空的，或你看不懂它的意思，使用")}
            <Link href={href("/contact")}>{t("contact", "联系客服")}</Link>
            {t(" or the ", "或")}
            <Link href={href("/faq")}>{t("FAQ", "常见问题")}</Link>
            {t(". WhatsApp and Facebook are the public channels. Send the username, not the password.", "。WhatsApp 和 Facebook 是公开渠道。发送用户名，不要发送密码。")}
          </li>
        </ol>
      </section>

      <VisualSplit src="/images/promotions/promo-rebate.webp" alt={sceneAlt(locale, "Rebate campaign artwork")} reverse>
        <h2>{t("VIP and E9WIN promotions", "VIP 与 E9WIN 优惠")}</h2>
        <p>{t("Membership and the promotions list answer different questions. The promotions page names campaigns anyone can read: welcome play, slot campaigns, rebate, referral, birthday, and missions with redeem codes. Opting in is a separate step on the account card.", "会员和优惠列表回答的是不同问题。优惠页列出任何人都能阅读的活动：欢迎游戏、老虎机活动、返水、推荐、生日，以及带兑换码的任务。参加是账户卡片上的另一步。")}</p>
        <p>
          {t("A VIP notice does not automatically include one of those campaigns. Some cards are limited to certain accounts, and the card says so when that is the case. Read the card before you play toward it. Start from ", "VIP 通知不会自动包含其中一项活动。有些卡片限于某些账户，是这种情况时卡片会写明。在为它游戏之前先读卡片。从")}
          <Link href={href("/promotions")}>{t("promotions", "优惠")}</Link>
          {t(", then the ", "开始，然后看")}
          <Link href={href("/guides/promotions-guide")}>{t("promotions guide", "优惠指南")}</Link>
          {t(" if you want the longer explanation of how a card is read.", "，如果你想要更长的卡片阅读说明。")}
        </p>
      </VisualSplit>

      <VisualSplit src="/images/brand/scene-live.webp" alt={sceneAlt(locale, "Playtech baccarat key art of a dealer holding cards")} reverse>
        <h2>{t("VIP and E9WIN games", "VIP 与 E9WIN 游戏")}</h2>
        <p>{t("The public catalog does not change because of a membership label. Slots, live casino, sports, 4D, fishing, and esports are the categories on the games hub for every visitor. Stake rules, table limits, and paytables stay inside the game.", "公开目录不会因为会员名称而改变。老虎机、真人娱乐场、体育、4D、捕鱼和电竞是每位访客在游戏页上的分类。投注规则、桌限和赔付表留在游戏里。")}</p>
        <p>{t("VIP Baccarat is a Playtech live table in that catalog. Opening the cover joins the table. It does not join membership, and membership does not change the table. This page does not claim a different return, a different price, or a members-only title.", "VIP Baccarat 是该目录里的一张 Playtech 真人桌。打开封面是加入该桌。它不会加入会员，会员也不会改变该桌。本页不声称有不同的回报、不同的价格或会员专属游戏。")}</p>
        <p>
          <Link href={href("/games")}>{t("Games hub", "游戏")}</Link>{t(", ", "、")}<Link href={href("/games/slots")}>{t("slots", "老虎机")}</Link>{t(", ", "、")}<Link href={href("/games/live-casino")}>{t("live casino", "真人娱乐场")}</Link>{t(", ", "、")}<Link href={href("/games/sports")}>{t("sports", "体育")}</Link>{t(", ", "、")}<Link href={href("/games/4d")}>4D</Link>{t(", ", "、")}<Link href={href("/games/fishing")}>{t("fishing", "捕鱼")}</Link>{t(", and ", "和")}<Link href={href("/games/esports")}>{t("esports", "电竞")}</Link>{t(".", "。")}
        </p>
      </VisualSplit>

      <section className="section prose">
        <h2>{t("VIP and your E9WIN account", "VIP 与你的 E9WIN 账户")}</h2>
        <p>{t("A notice is tied to the login that can see it. Use the account you registered. A second login is a different account, and it can show a different rewards area, or none.", "通知绑定在能看到它的登录上。使用你注册的账户。第二个登录是另一个账户，它的奖励区可能不同，也可能没有。")}</p>
        <p>
          {t("Keep the username and password to yourself. The ", "用户名和密码只留给自己。")}
          <Link href={href("/guides/security-guide")}>{t("security guide", "安全指南")}</Link>
          {t(" covers that habit. Phone number and payout details, when the lobby asks for them, belong on the same account you play with. The ", "说明的是这个习惯。大厅要求电话号码和收款资料时，它们属于你用来游戏的同一个账户。")}
          <Link href={href("/guides/account-guide")}>{t("account guide", "账户指南")}</Link>
          {t(" walks through those profile steps.", "会带你看这些个人资料步骤。")}
        </p>
        <p>
          {t("Account-specific questions go to support, because this page cannot see your lobby. ", "和具体账户有关的问题交给客服，因为本页看不到你的大厅。")}
          <Link href={href("/login")}>{t("Sign in", "登录")}</Link>
          {t(", ", "、")}
          <Link href={href("/register")}>{t("register", "注册")}</Link>
          {t(", the ", "、")}
          <Link href={href("/faq")}>{t("FAQ", "常见问题")}</Link>
          {t(", and ", "和")}
          <Link href={href("/contact")}>{t("contact", "联系客服")}</Link>
          {t(" are the routes around that.", "是相关路径。")}
        </p>
      </section>

      <section className="section prose">
        <h2>{t("Understanding VIP terms and conditions", "理解 VIP 条款")}</h2>
        <p>{t("There is no separate VIP terms document on this site. When a notice or a campaign card is open, read the lines that card actually contains:", "本站没有单独的 VIP 条款文件。通知或活动卡片打开时，阅读该卡片实际包含的几行：")}</p>
        <ul>
          <li>{t("Who it applies to.", "它适用于谁。")}</li>
          <li>{t("The action it asks you to take.", "它要求你做的操作。")}</li>
          <li>{t("The games or categories it names, if it names any.", "它点名的游戏或分类，如果它点了名。")}</li>
          <li>{t("A period, a limit, or a turnover figure, only when the card prints one.", "一段期间、一个限额或一个流水数字，仅当卡片印出时。")}</li>
          <li>{t("Anything it says about withdrawal, account limits, or expiry.", "它关于提款、账户限额或到期的任何说明。")}</li>
        </ul>
        <p>
          {t("A missing line is not a hidden promise. Age and budget sit on the ", "缺少的一行不是隐藏的承诺。年龄和预算在")}
          <Link href={href("/responsible-gaming")}>{t("responsible gaming", "理性娱乐")}</Link>
          {t(" page, beside membership rather than inside a reward. The site terms are on ", "页，放在会员旁边，而不是放在奖励里面。网站条款在")}
          <Link href={href("/terms")}>{t("terms", "条款")}</Link>
          {t(".", "。")}
        </p>
      </section>

      <section className="section prose">
        <h2>{t("VIP troubleshooting", "VIP 排查")}</h2>
        <div className="topic-grid">
          <article className="panel">
            <h3>{t("I cannot see VIP information", "我看不到 VIP 信息")}</h3>
            <p>{t("The public page never shows a personal status. In the lobby, the rewards area can also be empty for that account. The programme text may have changed, or the notice may never have been on that login. Check the account, then ask support.", "公开页面从不显示个人状态。在大厅里，该账户的奖励区也可以是空的。说明文字可能已经改变，或者该登录上从未有过通知。先核对账户，再询问客服。")}</p>
          </article>
          <article className="panel">
            <h3>{t("I think this account should already be VIP", "我认为这个账户应该已经是 VIP")}</h3>
            <p>{t("Sign in to that username, read the rewards area, and read any condition on the notice. If you still disagree with what you see, contact support with the username. This page cannot upgrade an account, and it does not promise a manual change.", "登录该用户名，阅读奖励区，并阅读通知上的任何条件。如果你仍然不同意看到的内容，用用户名联系客服。本页不能升级账户，也不承诺人工更改。")}</p>
          </article>
          <article className="panel">
            <h3>{t("A benefit I expected is missing", "我期待的权益没有出现")}</h3>
            <p>{t("Read the condition on the notice and, if you were following a campaign, the promotion card. Confirm the account. If both are silent, contact support. A response time and a reward are not promised.", "阅读通知上的条件；如果你在跟一项活动，也阅读优惠卡片。确认账户。如果两边都没有说明，联系客服。没有承诺回复时间，也没有承诺奖励。")}</p>
          </article>
        </div>
      </section>

      <section className="section prose">
        <h2>{t("Tips for understanding E9WIN VIP", "理解 E9WIN VIP 的提示")}</h2>
        <ul>
          <li>{t("Read the rewards area on your own login before you expect a benefit.", "在期待权益之前，先阅读你自己登录上的奖励区。")}</li>
          <li>{t("Treat unpublished levels and cash figures as unpublished. Do not fill them in from another site.", "没有公布的等级和金额就保持未公布。不要从其他网站填进来。")}</li>
          <li>{t("Read the notice or the campaign card for the action it asks for.", "阅读通知或活动卡片，看它要求的操作。")}</li>
          <li>{t("Keep the password off WhatsApp, Facebook, and live chat. Send the username.", "不要在 WhatsApp、Facebook 和在线聊天里发送密码。发送用户名。")}</li>
          <li>{t("Use this site, the lobby, and the published support links. A ladder in a private message is not the account.", "使用本站、大厅和已公布的客服链接。私信里的等级表不是账户。")}</li>
          <li>
            {t("Set the budget on the ", "在")}
            <Link href={href("/responsible-gaming")}>{t("responsible gaming", "理性娱乐")}</Link>
            {t(" page before you deposit toward anything you have read.", "页上先定好预算，再为你读过的内容存款。")}
          </li>
        </ul>
      </section>

      <section className="section hub-split">
        <img src="/images/brand/scene-devices.webp" alt={sceneAlt(locale, "A phone and a laptop on a dark marble desk")} width={1400} height={760} loading="lazy" />
        <div className="prose">
          <h2>{t("Accessing E9WIN VIP on mobile", "在手机上查看 E9WIN VIP")}</h2>
          <p>{t("This page is the same site in a phone browser. Sign in, then open the rewards area in the lobby. There is no separate VIP app and no members-only install.", "本页在手机浏览器里是同一个网站。登录，然后打开大厅里的奖励区。没有单独的 VIP 应用，也没有仅限会员的安装。")}</p>
          <p>
            {t("iPhone can add the site from Safari with Share, then Add to Home Screen. Android can use the portal download on the ", "iPhone 可以从 Safari 用分享，然后加入主屏幕。Android 可以使用")}
            <Link href={href("/download")}>{t("download", "下载")}</Link>
            {t(" page. The download page does not document an App Store or Google Play listing.", "页上的门户入口。下载页没有说明 App Store 或 Google Play 上架。")}
          </p>
          <p>
            {t("The ", "")}
            <Link href={href("/guides/mobile-guide")}>{t("mobile guide", "手机指南")}</Link>
            {t(" covers the browser, the home-screen icon, and the Android portal. It does not change membership rules.", "说明浏览器、主屏幕图标和 Android 门户。它不改变会员规则。")}
          </p>
        </div>
      </section>

      <FaqBlock items={faqs} title={t("E9WIN VIP FAQ", "E9WIN VIP 常见问题")} />

      <section className="section">
        <div className="section-head">
          <div>
            <h2>{t("VIP and account guides", "VIP 与账户指南")}</h2>
            <p>{t("These guides cover the account tasks around a membership question. Only routes that exist are linked.", "这些指南说明会员问题周围的账户操作。只链接实际存在的页面。")}</p>
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
            <h3>{t("Games and offers", "游戏与优惠")}</h3>
            <p>
              <Link href={href("/games")}>{t("Games", "游戏")}</Link>{t(", ", "、")}<Link href={href("/promotions")}>{t("promotions", "优惠")}</Link>{t(", ", "、")}<Link href={href("/games/slots")}>{t("slots", "老虎机")}</Link>{t(", ", "、")}<Link href={href("/games/live-casino")}>{t("live casino", "真人娱乐场")}</Link>{t(", ", "、")}<Link href={href("/games/sports")}>{t("sports", "体育")}</Link>{t(", ", "、")}<Link href={href("/games/4d")}>4D</Link>{t(", ", "、")}<Link href={href("/games/fishing")}>{t("fishing", "捕鱼")}</Link>{t(", and ", "和")}<Link href={href("/games/esports")}>{t("esports", "电竞")}</Link>{t(".", "。")}
            </p>
          </article>
          <article className="panel">
            <h3>{t("Account and payments", "账户与支付")}</h3>
            <p>
              <Link href={href("/login")}>{t("Sign in", "登录")}</Link>{t(", ", "、")}<Link href={href("/register")}>{t("register", "注册")}</Link>{t(", ", "、")}<Link href={href("/payment-methods")}>{t("payment methods", "支付方式")}</Link>{t(", ", "、")}<Link href={href("/deposit")}>{t("deposit", "存款")}</Link>{t(", and ", "和")}<Link href={href("/withdrawal")}>{t("withdrawal", "提款")}</Link>{t(".", "。")}
            </p>
          </article>
          <article className="panel">
            <h3>{t("Help", "帮助")}</h3>
            <p>
              <Link href={href("/faq")}>{t("FAQ", "常见问题")}</Link>{t(", ", "、")}<Link href={href("/contact")}>{t("contact", "联系客服")}</Link>{t(", ", "、")}<Link href={href("/responsible-gaming")}>{t("responsible gaming", "理性娱乐")}</Link>{t(", ", "、")}<Link href={href("/download")}>{t("download", "下载")}</Link>{t(", ", "、")}<Link href={href("/agent")}>{t("agent", "代理")}</Link>{t(", and ", "和")}<Link href={href("/guides")}>{t("guides", "指南")}</Link>
              {t(". Public support is also on ", "。公开客服也在 ")}
              <a href={siteConfig.support.whatsapp}>WhatsApp</a>
              {t(" and ", " 和 ")}
              <a href={siteConfig.support.facebook}>Facebook</a>
              {t(".", "。")}
            </p>
          </article>
        </div>
      </section>

      <VisualSplit src="/images/promotions/promo-welcome.webp" alt={sceneAlt(locale, "A dark entrance lit with gold")}>
        <h2>{t("Explore E9WIN VIP", "查看 E9WIN VIP")}</h2>
        <p>{t("Use this page to understand the label. Use the rewards area in your account to see whether a notice is there.", "用本页理解这个名称。用账户里的奖励区看是否有通知。")}</p>
        <div className="cta-row">
          <Link className="btn btn-primary" href="#status">{t("Check your VIP information", "查看你的 VIP 信息")}</Link>
          <Link className="btn btn-line" href={href("/contact")}>{t("Contact support", "联系客服")}</Link>
        </div>
      </VisualSplit>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "E9WIN VIP",
        url: absoluteUrl(pagePath),
        description,
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("Home", "首页"), item: absoluteUrl(href("/")) },
          { "@type": "ListItem", position: 2, name: "VIP", item: absoluteUrl(pagePath) },
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
