import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqBlock } from "@/components/content/CopySections";
import { VisualSplit } from "@/components/content/VisualSplit";
import { JsonLd } from "@/components/seo/JsonLd";
import { guideBySlug } from "@/lib/content";
import { guideScenes, pageScenes } from "@/lib/scenes";
import { pageMeta } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { presentGuide } from "@/lib/i18n/zhGuides";

const ALT: Record<string, string> = {
  "A gallery desk overlooking a gaming floor": "俯瞰游戏楼层的廊台书桌",
  "A quiet desk beside a night window": "夜窗旁安静的书桌",
  "Referral campaign artwork": "推荐活动画面",
  "A card and a phone on a dark cashier counter": "深色收银台柜台上的卡片和手机",
  "Gates of Olympus on a display in a dark private room": "暗色私人房间屏幕上的 Gates of Olympus",
  "A private lounge with velvet seating and gold light": "丝绒座椅与金色灯光的私人休息室",
  "A dark entrance lit with gold, used as the welcome campaign still": "金色灯光下的深色入口，用作欢迎活动画面",
  "A phone and a laptop on a dark marble desk": "深色大理石桌上的手机和笔记本电脑",
  "Playtech baccarat key art of a dealer holding cards": "Playtech 百家乐主视觉，荷官手持纸牌",
  "A worn football on a night pitch under warm stadium lights": "暖色球场灯光下的一只旧足球",
  "An empty brass lottery cage in a single warm light": "单束暖光下的空铜制摇奖笼",
  "A koi crossing a gold light shaft beside a submerged arch": "水下拱门旁，锦鲤穿过一道金光",
  "Hands on a keyboard lit by warm gold light": "暖金色灯光下、放在键盘上的双手",
};

const guideSlugs = [
  "how-to-register",
  "account-guide",
  "security-guide",
  "promotions-guide",
  "mobile-guide",
  "deposit-guide",
  "withdrawal-guide",
  "responsible-gaming-guide",
] as const;

const duties = [
  { title: ["Introduce the platform", "介绍平台"] as const, text: ["Share the referral link from your profile after support has enabled the path. Point people at the public pages on this website for games, promotions, download, and support.", "客服开通这条路径后，分享个人资料里的推荐链接。把人指到本站的公开页面，查看游戏、优惠、下载和客服。"] as const },
  { title: ["Keep the description current", "保持说明是当前的"] as const, text: ["A bonus, a rate, or a rule you remember from an older message is not the current card or the current setup. Read the page or the message again before you repeat it.", "你从较早消息里记得的奖金、比例或规则，不是当前卡片或当前设置。重复之前，再读一次页面或那则消息。"] as const },
  { title: ["Leave accounts to support", "账户交给客服"] as const, text: ["Do not collect passwords, bank details, or recovery codes. Do not process a withdrawal for someone else. Those requests go to WhatsApp, Facebook, or in-lobby chat.", "不要收集密码、银行资料或找回代码。不要替别人处理提款。那些请求交给 WhatsApp、Facebook 或大厅内聊天。"] as const },
];

function picture(locale: Locale, en: string) {
  return tx(locale, en, ALT[en] ?? en);
}

const enDescription = "Read how the E9WIN agent path works: downline players, the profile Share link, and how to ask support for setup. Commission rates are not published on this page.";
const zhDescription = "阅读 E9WIN 代理路径如何运作：下线玩家、个人资料里的分享链接，以及如何向客服申请设置。佣金比例没有在本页公布。";

export function agentMetadata(locale: Locale): Metadata {
  const description = tx(locale, enDescription, zhDescription);
  const path = localizePath("/agent", locale);
  const title = tx(locale, "E9WIN Agent Program | Partnership Information and Application Guide", "E9WIN 代理 | 代理申请与客服");
  const baseMeta = pageMeta({ title, description, path, locale });
  return {
    ...baseMeta,
    openGraph: {
      ...baseMeta.openGraph,
      images: [{ url: absoluteUrl(pageScenes.agent.src), alt: picture(locale, pageScenes.agent.alt) }],
    },
    twitter: {
      ...baseMeta.twitter,
      images: [absoluteUrl(pageScenes.agent.src)],
    },
  };
}

export function AgentView({ locale }: { locale: Locale }) {
  const href = (path: string) => (path.startsWith("#") ? path : localizePath(path, locale));
  const t = (en: string, zh: string) => tx(locale, en, zh);
  const description = t(enDescription, zhDescription);
  const faqs = [
    { q: t("What is the E9WIN Agent Program?", "E9WIN 代理计划是什么？"), a: t("It is the path for people who introduce players and work with a downline. Players who register through the referral are that downline. Commission follows their play. The rate is confirmed in setup, not on this page.", "它是介绍玩家并与下线合作的路径。通过推荐注册的玩家就是该下线。佣金跟随他们的游戏。比例在设置时确认，不在本页。") },
    { q: t("What does an E9WIN Agent do?", "E9WIN 代理做什么？"), a: t("An agent introduces the platform with the referral link from their own profile, after support has enabled the path. Account problems, passwords, and cashier requests stay with official support.", "客服开通路径后，代理用自己个人资料里的推荐链接介绍平台。账户问题、密码和收银台请求留给客服。") },
    { q: t("Who can apply to become an E9WIN Agent?", "谁可以申请成为 E9WIN 代理？"), a: t("The published description is for people who introduce players and work with a downline. It is not a job offer. Suitability and the commercial terms are confirmed when you ask support for setup.", "已公布的说明面向介绍玩家并与下线合作的人。这不是工作邀请。是否适合以及商业条款，在你向客服询问设置时确认。") },
    { q: t("How do I apply?", "如何申请？"), a: t("Open a player account if you need one, then message WhatsApp or Facebook and ask for agent setup. There is no public application form and no published application fee.", "如果需要，先开一个玩家账户，然后给 WhatsApp 或 Facebook 发消息，要求代理设置。没有公开申请表，也没有公布申请费。") },
    { q: t("What should I prepare before applying?", "申请前应该准备什么？"), a: t("Have the username you will use, a way for support to reply, and a clear note about where you would share a link. A list of questions about the rate and the downline steps is more useful than a guessed figure.", "准备你将使用的用户名、客服可以回复的方式，以及你会在哪里分享链接的清楚说明。关于比例和下线步骤的问题清单，比猜一个数字更有用。") },
    { q: t("Does E9WIN guarantee agent approval?", "E9WIN 保证代理申请会通过吗？"), a: t("No. Support enables the path. This page cannot approve an account, and it does not promise a reply time.", "不保证。路径由客服开通。本页不能批准账户，也不承诺回复时间。") },
    { q: t("Where can I find current agent terms?", "在哪里找当前的代理条款？"), a: t("In the setup support sends after you ask. This page does not print a rate, a payout calendar, a minimum, or a contract.", "在你询问后，客服发来的设置里。本页不印出比例、付款日历、最低额或合同。") },
    { q: t("Does E9WIN publish commission rates?", "E9WIN 公布佣金比例吗？"), a: t("No. The rate is confirmed during agent setup. A percentage on another website is not the setup.", "不公布。比例在代理设置时确认。其他网站上的百分比不是该设置。") },
    { q: t("How does referral tracking work?", "推荐追踪如何运作？"), a: t("After the path is enabled, sign in and copy the link under Share in the profile. Friends register through that link. This website does not show a referral count.", "路径开通后，登录并复制个人资料里分享下方的链接。好友通过该链接注册。这个网站不显示推荐人数。") },
    { q: t("Is there an agent dashboard?", "有代理仪表板吗？"), a: t("Not on this website. There is no public commission balance, player count, or downline chart. Ask support what reporting the setup includes.", "这个网站上没有。没有公开的佣金余额、玩家人数或下线图表。向客服询问设置包含哪些报表。") },
    { q: t("Can agents promote E9WIN games?", "代理可以推广 E9WIN 游戏吗？"), a: t("Yes, by pointing people at the public games pages and the lobby. Agent setup does not publish a different game list or a commission by title.", "可以，把人指到公开游戏页和游戏大厅。代理设置不公布另一份游戏名单，也不按游戏名称公布佣金。") },
    { q: t("Can agents promote E9WIN promotions?", "代理可以推广 E9WIN 优惠吗？"), a: t("Use the current promotions page and the account card. Do not invent a bonus to recruit someone. The player invite campaign has its own card and is separate from the agent rate.", "使用当前优惠页和账户卡片。不要为了招人编造奖金。玩家邀请活动有自己的卡片，和代理比例分开。") },
    { q: t("Are agents automatically VIP members?", "代理会自动成为 VIP会员吗？"), a: t("No. VIP is a membership label read in the rewards area. Agent setup does not publish VIP status, and a referral does not publish VIP eligibility.", "不会。VIP 是在奖励区阅读的会员标签。代理设置不公布 VIP 状态，推荐也不公布 VIP 资格。") },
    { q: t("Who should I contact about an agent-related issue?", "代理相关问题应该联系谁？"), a: t("WhatsApp or the Facebook page, or the contact page. Send a username. Do not send a password. In-lobby chat is available after you sign in.", "WhatsApp、Facebook 专页或联系页。发送用户名。不要发送密码。登录后可以使用大厅内聊天。") },
  ];

  return (
    <div className="container page-hero">
      <Breadcrumbs locale={locale} items={[{ href: href("/"), label: t("Home", "首页") }, { label: t("Agent", "代理") }]} />

      <section className="hub-hero">
        <div>
          <p className="tag">{t("Partnership hub", "合作页")}</p>
          <h1>{t("E9WIN Agent Program", "E9WIN 代理")}</h1>
          <p>{t("The E9WIN agent program covers introducing players, working with a downline, and asking support for the application. Commission is confirmed in that setup.", "E9WIN 代理计划涵盖介绍玩家、与下线合作，以及向客服询问申请。佣金在该设置里确认。")}</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="#apply">{t("Become an E9WIN Agent", "成为 E9WIN 代理")}</Link>
            <Link className="btn btn-line" href={href("/contact")}>{t("Contact support", "联系客服")}</Link>
          </div>
        </div>
        <img src={pageScenes.agent.src} alt={picture(locale, pageScenes.agent.alt)} width={1280} height={720} />
      </section>

      <section className="section prose" id="program">
        <h2>{t("E9WIN Agent Program", "E9WIN 代理计划")}</h2>
        <p>{t("An agent path is a way for a person with an audience to introduce players to a gaming site and work with the accounts that join through them. On this site that group is called a downline. Commission follows downline play. The rate is part of agent setup, not part of this public page.", "代理路径是让有受众的人把玩家介绍到游戏网站，并与通过他们加入的账户合作。在本站，这一组称为下线。佣金跟随下线的游戏。比例属于代理设置，不属于这个公开页面。")}</p>
        <p>{t("The page is here so you can see the steps that are actually published: open an account if you need one, ask support, then use the Share link in the profile after the path is enabled. It is not a job listing and it does not quote income.", "本页在这里，是为了让你看到实际公布的步骤：如果需要就开户，询问客服，路径开通后使用个人资料里的分享链接。它不是招聘，也不引用收入。")}</p>
        <p>{t("Read the commercial terms in the setup message before you start sharing a link. A rate, a payout rule, or a minimum that is not in that message is not something this website has published. There is no published application fee.", "开始分享链接之前，先阅读设置消息里的商业条款。不在该消息里的比例、付款规则或最低额，不是本站公布的内容。没有公布申请费。")}</p>
      </section>

      <section className="section prose">
        <h2>{t("What does an E9WIN Agent do?", "E9WIN 代理做什么？")}</h2>
        <p>{t("The practical work is introduction. You tell people about the platform and, once support has enabled the path, you give them the referral link from your profile. Friends register through that link. Those registrations are the downline the setup talks about.", "实际工作是介绍。你向别人说明平台，客服开通路径后，把个人资料里的推荐链接给他们。好友通过该链接注册。那些注册就是设置所说的下线。")}</p>
        <div className="topic-grid">
          {duties.map((item) => (
            <article className="panel" key={item.title[0]}>
              <h3>{t(item.title[0], item.title[1])}</h3>
              <p>{t(item.text[0], item.text[1])}</p>
            </article>
          ))}
        </div>
        <p>{t("An agent does not replace official support. Login help, deposits, withdrawals, and promotion cards stay on the official channels and in the lobby.", "代理不代替客服。登录帮助、存款、提款和优惠卡片留在客服渠道和游戏大厅。")}</p>
      </section>

      <section className="section prose">
        <h2>{t("Who can consider becoming an E9WIN Agent?", "谁可以考虑成为 E9WIN 代理？")}</h2>
        <p>{t("The published description fits someone who will introduce players and then work with a downline. People who already publish to an audience sometimes look at that kind of path: site owners, community admins, and people who post about games. Interest is not the same as approval.", "已公布的说明适合会介绍玩家、然后与下线合作的人。已经向受众发布内容的人有时会看这类路径：网站主人、社群管理员，以及发布游戏内容的人。有兴趣不等于已批准。")}</p>
        <p>{t("This is not a job offer. Support confirms whether the path can be enabled on your account and what the current terms are. Read those terms before you treat the path as open.", "这不是工作邀请。客服确认路径能否在你的账户开通，以及当前条款是什么。在把路径当成已开放之前，先读那些条款。")}</p>
      </section>

      <VisualSplit src="/images/brand/scene-account.webp" alt={picture(locale, "A quiet desk beside a night window")} id="journey">
        <h2>{t("How the E9WIN Agent journey works", "E9WIN 代理过程如何进行")}</h2>
        <p>{t("The steps below are the ones this site describes. Approval is not automatic. Nothing here starts the path by itself.", "下面的步骤是本站说明的步骤。批准不是自动的。这里没有任何东西会自行开通路径。")}</p>
        <ol className="steps">
          <li>{t("Read this page, including the point that the rate is not published here.", "阅读本页，包括比例不在这里公布这一点。")}</li>
          <li>{t("Open a player account if you do not already have one. Use one account.", "如果还没有玩家账户，先开一个。只使用一个账户。")}</li>
          <li>{t("Message WhatsApp or Facebook and ask for agent setup.", "给 WhatsApp 或 Facebook 发消息，要求代理设置。")}</li>
          <li>{t("Read the terms support sends. That message is where the rate is confirmed.", "阅读客服发来的条款。比例在那则消息里确认。")}</li>
          <li>{t("After support enables the path, sign in and copy the link under Share in the profile.", "客服开通路径后，登录并复制个人资料里分享下方的链接。")}</li>
          <li>{t("Friends register through that link.", "好友通过该链接注册。")}</li>
          <li>{t("Top-up and withdrawal for the network use the same cashier as a player account.", "网络的存款和提款使用与玩家账户相同的收银台。")}</li>
          <li>{t("Send account-specific problems to official support. Do not collect passwords.", "把和账户有关的问题发给客服。不要收集密码。")}</li>
        </ol>
      </VisualSplit>

      <section className="section prose">
        <h2>{t("E9WIN Agent responsibilities", "E9WIN 代理的责任")}</h2>
        <ul>
          <li>{t("Use the referral link from your own profile after the path is enabled. Do not build a second account to test it.", "路径开通后，使用你自己个人资料里的推荐链接。不要另建第二个账户来测试。")}</li>
          <li>{t("Describe games, promotions, and access the way the public pages describe them. Do not add a bonus that is not on a current card.", "按公开页面的写法说明游戏、优惠和进入方式。不要加上当前卡片上没有的奖金。")}</li>
          <li>{t("Do not present yourself as official support, and do not ask a player for a password, a bank login, or a recovery code.", "不要把自己说成客服，也不要向玩家索取密码、银行登录或找回代码。")}</li>
          <li>{t("Send deposits, withdrawals, and missing credits to WhatsApp, Facebook, or in-lobby chat, with a username.", "把存款、提款和未见入账发给 WhatsApp、Facebook 或大厅内聊天，并附上用户名。")}</li>
          <li>{t("Keep the share on channels you control. A link posted as someone else is a different problem.", "把分享留在你控制的渠道。以别人的身份发出链接是另一个问题。")}</li>
        </ul>
        <p>{t("There is no separate agent app. The profile Share area is in the same lobby you open in a phone browser, from an iPhone home-screen icon, or from the Android portal on the ", "没有单独的代理应用。个人资料的分享区在同一个游戏大厅里。你可以用手机浏览器打开它，也可以从 iPhone 主屏幕图标打开，或从")}<Link href={href("/download")}>{t("download", "下载")}</Link>{t(" page.", "页上的 Android 门户打开。")}</p>
      </section>

      <section className="section prose">
        <h2>{t("Understanding agent eligibility", "理解代理资格")}</h2>
        <p>{t("No turnover target, referral minimum, or deposit threshold is published for agent setup. Do not treat a number from another site as the rule.", "代理设置没有公布流水目标、推荐最低人数或存款门槛。不要把其他网站的数字当成规则。")}</p>
        <p>{t("What you can confirm with support, because those are the points this site does publish:", "你可以和客服确认的，是本站确实公布的几点：")}</p>
        <ul>
          <li>{t("You are asking from the account you will actually use. One account. A second profile made to test the referral is called out as the wrong move.", "你从实际会使用的账户询问。一个账户。为了测试推荐而另建的第二个个人资料，被指出是错误做法。")}</li>
          <li>{t("There is no published application fee and no public form that quotes a rate.", "没有公布申请费，也没有引用比例的公开表格。")}</li>
          <li>{t("The commercial terms, including the rate, arrive in the setup, not on this page.", "包括比例在内的商业条款在设置里到达，不在本页。")}</li>
          <li>{t("Promotion claims you want to repeat must match a current card. Inventing a bonus is outside the published responsibility.", "你想重复的优惠说法必须和当前卡片一致。编造奖金超出已公布的责任。")}</li>
        </ul>
      </section>

      <section className="section prose" id="apply">
        <h2>{t("How to apply for the E9WIN Agent Program", "如何申请 E9WIN 代理计划")}</h2>
        <p>{t("Application is a support request. This website has no agent form and no approval button.", "申请是向客服提出的请求。这个网站没有代理表格，也没有批准按钮。")}</p>
        <ol className="steps">
          <li>{t("Finish reading the journey above.", "先读完上面的过程。")}</li>
          <li>{t("Register if you do not have a player account yet.", "如果还没有玩家账户，先注册。")}</li>
          <li>{t("Contact support and ask for agent setup. Public channels are WhatsApp and Facebook.", "联系客服并要求代理设置。公开渠道是 WhatsApp 和 Facebook。")}</li>
          <li>{t("Send a username and your questions. Do not send a password.", "发送用户名和你的问题。不要发送密码。")}</li>
          <li>{t("Wait for the setup message and read the rate there before you share a link.", "等待设置消息，分享链接前先阅读其中的比例。")}</li>
          <li>{t("Start sharing only after support says the path is enabled, using the Share link in the profile.", "只在客服说路径已开通后才开始分享，并使用个人资料里的分享链接。")}</li>
        </ol>
        <div className="cta-row">
          <a className="btn btn-primary" href={siteConfig.support.whatsapp}>{t("Message WhatsApp", "给 WhatsApp 发消息")}</a>
          <a className="btn btn-line" href={siteConfig.support.facebook}>Facebook</a>
          <Link className="btn btn-line" href={href("/contact")}>{t("Contact page", "联系页")}</Link>
        </div>
      </section>

      <section className="section prose">
        <h2>{t("Information to prepare before becoming an agent", "成为代理前要准备的资料")}</h2>
        <p>{t("Support has not published a mandatory document list. These are the details that make the first message easier to answer. Bring what you have. Do not invent figures to look complete.", "客服没有公布必须提交的文件清单。这些资料让第一则消息更容易回答。带上你已有的内容。不要为了看起来完整而编造数字。")}</p>
        <ul>
          <li>{t("The username on the account you want used for the path.", "你希望用于这条路径的账户用户名。")}</li>
          <li>{t("A contact method where you can read the reply.", "你可以阅读回复的联系方式。")}</li>
          <li>{t("Where you would share the link, such as a site or a social account you already run.", "你会在哪里分享链接，例如你已经在经营的网站或社交账户。")}</li>
          <li>{t("Questions you want answered in setup: the rate, what counts as downline play, and how top-up for the network works in the cashier.", "你希望在设置里得到回答的问题：比例、什么算下线游戏，以及网络存款在收银台如何运作。")}</li>
        </ul>
      </section>

      <VisualSplit src="/images/promotions/promo-referral.webp" alt={picture(locale, "Referral campaign artwork")} reverse>
        <h2>{t("How agent promotion and referral works", "代理推广和推荐如何运作")}</h2>
        <p>{t("The published chain is short. Support enables the path. You copy the link under Share in the profile. A friend registers through that link. That registration is how this site describes a downline player. Commission follows their play, on the rate in the setup.", "已公布的链条很短。客服开通路径。你复制个人资料里分享下方的链接。好友通过该链接注册。该注册就是本站对下线玩家的说明。佣金跟随他们的游戏，按设置里的比例。")}</p>
        <p>{t("Someone who registers without that link is not described here as your downline. This page does not promise that every visit is attributed.", "没有通过该链接注册的人，这里不描述为你的下线。本页不承诺每次访问都会被归属。")}</p>
        <p>{t("The promotions list also names a player invite campaign. After login, the same profile share area can provide a referral link for that campaign, and the reward on the invite card stays on the card. Agent commission is the setup support confirms. Do not treat the invite card as the agent rate, or the agent rate as a public bonus.", "优惠名单也点名玩家邀请活动。登录后，同一个个人资料分享位置可以为该活动提供推荐链接，邀请卡片上的奖励留在卡片上。代理佣金是客服在设置里确认的内容。不要把邀请卡片当成代理比例，也不要把代理比例当成公开奖金。")}</p>
      </VisualSplit>

      <VisualSplit src="/images/brand/scene-payments.webp" alt={picture(locale, "A card and a phone on a dark cashier counter")}>
        <h2>{t("Agent tracking and account management", "代理追踪和账户管理")}</h2>
        <p>{t("Tracking on the public site is the Share link in the lobby profile, and only after support has enabled the path. The link is not printed on this page. If you cannot see Share, sign in to the lobby first.", "公开网站上的追踪是游戏大厅个人资料里的分享链接，而且只在客服开通路径之后。链接不印在本页。如果看不到分享，先登录游戏大厅。")}</p>
        <p>{t("This website does not include an agent dashboard. It does not show a commission balance, a player count, a conversion figure, or a payout history. If the setup includes reporting, support is the place to ask what that reporting shows. Network top-up and withdrawal use the same cashier flow as a player account.", "这个网站没有代理仪表板。它不显示佣金余额、玩家人数、转化数字或付款记录。如果设置包含报表，向客服询问该报表显示什么。网络存款和提款使用与玩家账户相同的收银台流程。")}</p>
      </VisualSplit>

      <section className="section prose">
        <h2>{t("E9WIN Agent support", "E9WIN 代理客服")}</h2>
        <p>{t("Ask on ", "在 ")}<a href={siteConfig.support.whatsapp}>WhatsApp</a>{t(" or the ", " 或 ")}<a href={siteConfig.support.facebook}>{t("Facebook page", "Facebook 专页")}</a>{t(". The ", "询问。")}<Link href={href("/contact")}>{t("contact", "联系")}</Link>{t(" page lists those channels. After you sign in, the lobby also refers players to live chat. No public email address or phone number is listed. A reply time is not published.", "页列出这些渠道。登录后，大厅也会把玩家引向在线聊天。没有列出公开电邮或电话号码。没有公布回复时间。")}</p>
        <p>{t("Those channels are the right place for an application, a question about the rate, a missing Share link, and a player who cannot sign in or cannot see a deposit. Send the username. Leave the password out. The ", "这些渠道适合申请、询问比例、缺少分享链接，以及玩家无法登录或看不到存款。发送用户名。不要附上密码。")}<Link href={href("/faq")}>{t("FAQ", "常见问题")}</Link>{t(" covers the shorter public answers.", "涵盖更短的公开回答。")}</p>
      </section>

      <VisualSplit src="/images/brand/scene-slots.webp" alt={picture(locale, "Gates of Olympus on a display in a dark private room")}>
        <h2>{t("Promoting E9WIN games", "推广 E9WIN 游戏")}</h2>
        <p>{t("Agents use the same public catalog as everyone else. Setup does not publish a private game list, a different stake rule, or a commission attached to one title. Covers, categories, and the lobby are the sources. Point people at the games hub and let the game show its own rules.", "代理使用和所有人相同的公开目录。设置不公布私人游戏名单、不同的投注规则，或绑在某一个游戏上的佣金。封面、分类和游戏大厅是来源。把人指到游戏页，让游戏显示自己的规则。")}</p>
        <p>
          <Link href={href("/games")}>{t("Games hub", "游戏页")}</Link>
          {", "}
          <Link href={href("/games/slots")}>{t("slots", "老虎机")}</Link>
          {", "}
          <Link href={href("/games/live-casino")}>{t("live casino", "真人娱乐场")}</Link>
          {", "}
          <Link href={href("/games/sports")}>{t("sports", "体育")}</Link>
          {", "}
          <Link href={href("/games/4d")}>4D</Link>
          {", "}
          <Link href={href("/games/fishing")}>{t("fishing", "捕鱼")}</Link>
          {t(", and ", "和")}
          <Link href={href("/games/esports")}>{t("esports", "电竞")}</Link>
          .
        </p>
      </VisualSplit>

      <section className="section prose">
        <h2>{t("Agents and E9WIN promotions", "代理和 E9WIN 优惠")}</h2>
        <p>{t("If you mention an offer, use the current", "如果提到优惠，使用当前")} <Link href={href("/promotions")}>{t("promotions", "优惠")}</Link> {t("page and then the account card. Cards change, and a closed window is not a live percentage. Do not tell a recruit that a bonus exists unless that card is the one you are looking at.", "页，然后看账户卡片。卡片会变，已结束的档期不是现行比例。除非你正在看的就是那张卡片，否则不要告诉被邀请的人有某项奖金。")}</p>
        <p>{t("The player invite campaign is one of those cards. Its reward stays on the card. It is not an agent commission table, and this page does not add an agent-only promotion.", "玩家邀请活动是那些卡片之一。它的奖励留在卡片上。它不是代理佣金表，本页也不另加仅代理的优惠。")}</p>
      </section>

      <VisualSplit src="/images/brand/scene-vip.webp" alt={picture(locale, "A private lounge with velvet seating and gold light")} reverse>
        <h2>{t("Agents and E9WIN VIP", "代理和 E9WIN VIP")}</h2>
        <p>{t("Agent setup and VIP membership are different labels. VIP is explained on the", "代理设置和 VIP会员是不同标签。VIP 在")} <Link href={href("/vip")}>VIP</Link> {t("page: a notice in the rewards area, with no public level ladder and no cash figure. Asking for agent setup does not publish VIP status. A friend who registers through your link is not described as a VIP member because of that registration.", "页说明：奖励区里的通知，没有公开等级阶梯，也没有现金数字。要求代理设置不会公布 VIP 状态。通过你的链接注册的好友，不会因为该次注册就被描述为 VIP会员。")}</p>
      </VisualSplit>

      <section className="section prose">
        <h2>{t("Responsible E9WIN promotion", "理性推广 E9WIN")}</h2>
        <p>{t("The trust rules that are already implied by the account pages are the ones to follow when you talk about the platform.", "账户页面已经包含的信任规则，就是你谈论平台时要遵守的规则。")}</p>
        <ul>
          <li>{t("Do not guarantee a win, a profit, or an income. Earnings are not guaranteed, and game results are not promised on this website.", "不要保证赢、利润或收入。收益没有保证，本站也不承诺游戏结果。")}</li>
          <li>{t("Do not invent a bonus, a rate, or a limited-time claim.", "不要编造奖金、比例或限时说法。")}</li>
          <li>{t("Do not impersonate support, and do not ask for a password or a payout password.", "不要冒充客服，也不要索取密码或提款密码。")}</li>
          <li>{t("Use links from this website and from the Share control in your profile. A download file from another domain is not the Android path on the download page.", "使用本站的链接，以及个人资料里分享控件的链接。其他域名的下载文件不是下载页上的 Android 路径。")}</li>
          <li>{t("Players should be 18 or older. The", "玩家应为 18 岁或以上。")} <Link href={href("/responsible-gaming")}>{t("responsible gaming", "理性娱乐")}</Link> {t("page is the place that says to set a budget before a deposit. Repeat that, rather than a line about recovering losses.", "页写的是存款前先定预算。重复这一点，不要说把输掉的钱赢回来。")}</li>
        </ul>
      </section>

      <section className="section prose">
        <h2>{t("Agent application and partnership troubleshooting", "代理申请和合作的排查")}</h2>
        <div className="topic-grid">
          <article className="panel">
            <h3>{t("I do not know where to start", "我不知道从哪里开始")}</h3>
            <p>{t("Read the journey on this page, open an account if you need one, and message WhatsApp or Facebook to ask for agent setup. There is no other public form.", "阅读本页的过程，如果需要就开户，然后给 WhatsApp 或 Facebook 发消息要求代理设置。没有其他公开表格。")}</p>
          </article>
          <article className="panel">
            <h3>{t("I cannot find a commission rate", "我找不到佣金比例")}</h3>
            <p>{t("A rate is not published here. It is confirmed in the setup support sends. Do not copy a percentage from a chat that is not that setup.", "这里不公布比例。它在客服发来的设置里确认。不要从不是该设置的聊天里复制百分比。")}</p>
          </article>
          <article className="panel">
            <h3>{t("I asked and have not heard back", "我问了，还没有收到回复")}</h3>
            <p>{t("Check that you used WhatsApp or the Facebook page, and that the username was in the message. Follow up on the same channel. A response time is not promised, and this page cannot see the queue.", "确认你用的是 WhatsApp 或 Facebook 专页，并且消息里有用户名。在同一渠道跟进。没有承诺回复时间，本页也看不到队列。")}</p>
          </article>
          <article className="panel">
            <h3>{t("I am not sure a promotion is still valid", "我不确定优惠是否仍然有效")}</h3>
            <p>{t("Open the promotions page and the account card. If the card is missing, do not repeat the offer. Agent setup does not refresh a closed campaign.", "打开优惠页和账户卡片。如果没有卡片，不要重复该优惠。代理设置不会刷新已结束的活动。")}</p>
          </article>
          <article className="panel">
            <h3>{t("A referred player has an account problem", "被推荐的玩家有账户问题")}</h3>
            <p>{t("Send them to official support with their own username. Do not take their password or move the payout to your account to “fix” it.", "让他们带着自己的用户名去找客服。不要拿走他们的密码，也不要把收款转到你的账户来“处理”。")}</p>
          </article>
          <article className="panel">
            <h3>{t("I cannot see agent information", "我看不到代理信息")}</h3>
            <p>{t("This page is the public explanation. The Share link appears in the lobby after you sign in, and only once support has enabled the path. If it is missing, ask support. There is no dashboard on this site to open instead.", "本页是公开说明。分享链接在登录后的游戏大厅出现，而且只在客服开通路径之后。如果没有，询问客服。本站没有可以改去打开的仪表板。")}</p>
          </article>
        </div>
      </section>

      <FaqBlock items={faqs} title={t("E9WIN Agent FAQ", "E9WIN 代理常见问题")} />

      <section className="section">
        <div className="section-head">
          <div>
            <h2>{t("Agent and partnership guides", "代理和合作指南")}</h2>
            <p>{t("Account, promotion, and payment notes that sit beside a setup request. Only routes that exist are linked.", "放在设置请求旁边的账户、优惠和支付说明。只链接存在的路径。")}</p>
          </div>
          <Link className="cat-all" href={href("/guides")}>{t("Guide hub", "指南")}</Link>
        </div>
        <div className="guide-grid">
          {guideSlugs.map((slug) => {
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
        <h2>{t("Explore more on E9WIN", "继续浏览 E9WIN")}</h2>
        <div className="topic-grid">
          <article className="panel">
            <h3>{t("Play and offers", "游戏和优惠")}</h3>
            <p>
              <Link href={href("/games")}>{t("Games", "游戏")}</Link>
              {", "}
              <Link href={href("/promotions")}>{t("promotions", "优惠")}</Link>
              {", "}
              <Link href={href("/vip")}>VIP</Link>
              {", "}
              <Link href={href("/download")}>{t("download", "下载")}</Link>
              {", "}
              <Link href={href("/games/slots")}>{t("slots", "老虎机")}</Link>
              {", "}
              <Link href={href("/games/live-casino")}>{t("live casino", "真人娱乐场")}</Link>
              {", "}
              <Link href={href("/games/sports")}>{t("sports", "体育")}</Link>
              {", "}
              <Link href={href("/games/4d")}>4D</Link>
              {", "}
              <Link href={href("/games/fishing")}>{t("fishing", "捕鱼")}</Link>
              {t(", and ", "和")}
              <Link href={href("/games/esports")}>{t("esports", "电竞")}</Link>
              .
            </p>
          </article>
          <article className="panel">
            <h3>{t("Account and payments", "账户和支付")}</h3>
            <p>
              <Link href={href("/login")}>{t("Sign in", "登录")}</Link>
              {", "}
              <Link href={href("/register")}>{t("register", "注册")}</Link>
              {", "}
              <Link href={href("/payment-methods")}>{t("payment methods", "支付方式")}</Link>
              {", "}
              <Link href={href("/deposit")}>{t("deposit", "存款")}</Link>
              {t(", and ", "和")}
              <Link href={href("/withdrawal")}>{t("withdrawal", "提款")}</Link>
              .
            </p>
          </article>
          <article className="panel">
            <h3>{t("Help", "帮助")}</h3>
            <p>
              <Link href={href("/faq")}>{t("FAQ", "常见问题")}</Link>
              {", "}
              <Link href={href("/contact")}>{t("contact", "联系")}</Link>
              {", "}
              <Link href={href("/responsible-gaming")}>{t("responsible gaming", "理性娱乐")}</Link>
              {t(", and ", "和")}
              <Link href={href("/guides")}>{t("guides", "指南")}</Link>
              .
            </p>
          </article>
        </div>
      </section>

      <VisualSplit src="/images/brand/scene-agent.webp" alt={picture(locale, "A gallery desk overlooking a gaming floor")}>
        <h2>{t("Interested in becoming an E9WIN Agent?", "有兴趣成为 E9WIN 代理？")}</h2>
        <p>{t("Ask support for setup, then read the rate in that reply before you share a link.", "向客服询问设置，分享链接前先阅读该回复里的比例。")}</p>
        <div className="cta-row">
          <Link className="btn btn-primary" href={href("/contact")}>{t("Contact E9WIN", "联系 E9WIN")}</Link>
          <Link className="btn btn-line" href="#program">{t("Explore agent information", "查看代理说明")}</Link>
        </div>
      </VisualSplit>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: t("E9WIN Agent Program", "E9WIN 代理"),
        url: absoluteUrl(href("/agent")),
        description,
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("Home", "首页"), item: absoluteUrl(href("/")) },
          { "@type": "ListItem", position: 2, name: t("Agent", "代理"), item: absoluteUrl(href("/agent")) },
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
