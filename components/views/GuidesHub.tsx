import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { VisualSplit } from "@/components/content/VisualSplit";
import { guides, faqGroups } from "@/lib/content";
import { guideHubs } from "@/lib/guideHub";
import { presentGuide } from "@/lib/i18n/zhGuides";
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { guideVisuals } from "@/lib/guideVisuals";
import { sceneAlt } from "@/lib/i18n/sceneAlt";
import { pageMeta } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

const featured = ["how-to-register", "how-to-login", "deposit-guide", "games-guide", "mobile-guide", "promotions-guide"];

const hubTitle: Record<string, string> = {
  "getting-started": "入门",
  games: "游戏",
  mobile: "手机",
  payments: "支付",
  promotions: "优惠",
  account: "账户",
  "responsible-gaming": "理性娱乐",
};

const zhFaq = [
  {
    q: "如何注册 E9WIN？",
    a: "使用注册表格，然后在玩家门户继续。填写之后能够核对的真实姓名、手机号码和登录资料。",
  },
  {
    q: "如何登录 E9WIN？",
    a: "输入注册时的用户名和密码。游戏在 E9WIN 大厅里继续。",
  },
  {
    q: "有 App Store 或 Google Play 上架吗？",
    a: "Android 使用下载页上的路径。iPhone 使用 Safari，然后加入主屏幕。这条路径不包括应用商店上架。",
  },
  {
    q: "E9WIN 支付如何运作？",
    a: "收银台使用已公布的标志：Maybank、CIMB、Public Bank、RHB、Hong Leong、AmBank、BSN、Touch 'n Go、Boost、GrabPay、ShopeePay 和 USDT，以及即时转账、电信 PIN 和银行转账。你所选方式的限额留在该画面上。",
  },
];

export function guidesMetadata(locale: Locale): Metadata {
  return pageMeta({
    title: tx(
      locale,
      "E9WIN Guides | Account, Games, Payments and Mobile Help",
      "E9WIN 指南 | 账户、游戏、支付与手机帮助",
    ),
    description: tx(
      locale,
      "E9WIN guides for registration, payments, slots, live tables, sports, 4D, fishing, esports, and promotions. Amounts stay on the account card.",
      "E9WIN 指南涵盖注册、支付、老虎机、真人桌、体育、4D、捕鱼、电竞和优惠。金额以账户卡片为准。",
    ),
    path: localizePath("/guides", locale),
    locale,
  });
}

export function GuidesHub({ locale }: { locale: Locale }) {
  const href = (path: string) => localizePath(path, locale);
  const groups = guideHubs
    .map((hub) => ({
      ...hub,
      title: tx(locale, hub.title, hubTitle[hub.id] ?? hub.title),
      items: hub.slugs
        .map((slug) => guides.find((guide) => guide.slug === slug))
        .filter((guide) => guide !== undefined)
        .map((guide) => presentGuide(guide, locale)),
    }))
    .filter((group) => group.items.length > 0);
  const featuredGuides = featured.flatMap((slug) => {
    const guide = guides.find((item) => item.slug === slug);
    return guide ? [presentGuide(guide, locale)] : [];
  });
  const enFaq = faqGroups
    .filter((group) => ["registration", "login", "payments", "download"].includes(group.id))
    .flatMap((group) => group.items.slice(0, 1));
  const faq = locale === "zh" ? zhFaq : enFaq;
  return (
    <div className="container page-hero">
      <Breadcrumbs locale={locale} items={[{ href: href("/"), label: tx(locale, "Home", "首页") }, { label: tx(locale, "Guides", "指南") }]} />
      <section className="hub-hero">
        <div>
          <p className="tag">{tx(locale, "Knowledge hub", "说明中心")}</p>
          <h1>{tx(locale, "E9WIN Guides", "E9WIN 指南")}</h1>
          <p>
            {tx(
              locale,
              "E9WIN Guides is the information hub for registration, login, games, payments, and mobile access. Amounts stay on the account card.",
              "E9WIN 指南是注册、登录、游戏、支付和手机访问的说明中心。金额以账户卡片为准。",
            )}
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" href={`${href("/guides")}#getting-started`}>{tx(locale, "Start here", "从这里开始")}</Link>
            <Link className="btn btn-line" href={href("/faq")}>{tx(locale, "FAQ", "常见问题")}</Link>
          </div>
        </div>
        <img src="/images/brand/scene-account.webp" alt={tx(locale, "A quiet desk beside a night window", "夜窗旁安静的书桌")} width={1600} height={760} />
      </section>

      <VisualSplit src="/images/brand/scene-slots.webp" alt={tx(locale, "Gates of Olympus on a display in a dark private room", "昏暗房间里屏幕上的 Gates of Olympus")} reverse>
        <h2>{tx(locale, "Start with the task", "按你要做的事开始")}</h2>
        <p>
          {tx(locale, "New players usually need ", "新玩家通常先看")}
          <Link href={href("/guides/how-to-register")}>{tx(locale, "registration", "注册")}</Link>
          {tx(locale, ", then ", "，然后")}
          <Link href={href("/guides/deposit-guide")}>{tx(locale, "the E9WIN deposit guide", "E9WIN 存款指南")}</Link>
          {tx(locale, ", then a category: ", "，再选一个分类：")}
          <Link href={href("/guides/slots-guide")}>{tx(locale, "E9WIN Slots Guide", "E9WIN 老虎机指南")}</Link>
          {tx(locale, ", ", "、")}
          <Link href={href("/guides/live-casino-guide")}>{tx(locale, "E9WIN Live Casino Guide", "E9WIN 真人娱乐场指南")}</Link>
          {tx(locale, ", ", "、")}
          <Link href={href("/guides/sports-guide")}>{tx(locale, "E9WIN Sports Guide", "E9WIN 体育指南")}</Link>
          {tx(locale, ", or ", "或")}
          <Link href={href("/guides/lottery-guide")}>{tx(locale, "E9WIN 4D Guide", "E9WIN 4D 指南")}</Link>
          {tx(locale, ".", "。")}
        </p>
        <p>
          {tx(locale, "If you are choosing a campaign, read ", "如果要选择活动，先阅读")}
          <Link href={href("/guides/promotions-guide")}>{tx(locale, "the promotion guide", "优惠指南")}</Link>
          {tx(locale, " before you opt in. If you want to stop, use the ", "，再决定是否参加。如果想暂停，使用")}
          <Link href={href("/guides/responsible-gaming-guide")}>{tx(locale, "limits guide", "限额指南")}</Link>
          {tx(locale, ".", "。")}
        </p>
      </VisualSplit>

      <section className="section">
        <div className="section-head">
          <div>
            <h2>{tx(locale, "Featured guides", "精选指南")}</h2>
            <p>{tx(locale, "The shortest path from a new account to a category you understand.", "从新账户到你了解的分类，最短的一条路径。")}</p>
          </div>
        </div>
        <div className="guide-grid">
          {featuredGuides.map((guide) => (
            <Link className="guide-card guide-shot" key={guide.slug} href={href(`/guides/${guide.slug}`)}>
              <img src={guideVisuals[guide.slug].src} alt={sceneAlt(guideVisuals[guide.slug].alt, locale)} width={1600} height={900} loading="lazy" style={{ objectPosition: guideVisuals[guide.slug].position }} />
              <span className="guide-body">
                <p className="tag">{guide.categoryLabel}</p>
                <h3>{guide.title}</h3>
                <p>{guide.excerpt}</p>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {groups.map((group) => (
        <section className="section" key={group.id} aria-labelledby={`guides-${group.id}`}>
          <h2 id={group.id}>{group.title}</h2>
          <div className="guide-grid">
            {group.items.map((guide) => (
              <Link className="guide-card guide-shot" key={guide.slug} href={href(`/guides/${guide.slug}`)}>
                <img src={guideVisuals[guide.slug].src} alt={sceneAlt(guideVisuals[guide.slug].alt, locale)} width={1600} height={900} loading="lazy" style={{ objectPosition: guideVisuals[guide.slug].position }} />
                <span className="guide-body">
                  <p className="tag">{guide.categoryLabel}</p>
                  <h3>{guide.title}</h3>
                  <p>{guide.excerpt}</p>
                </span>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="section faq">
        <h2>{tx(locale, "Guide questions", "指南问答")}</h2>
        {faq.map((item) => (
          <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>
        ))}
        <p><Link href={href("/faq")}>{tx(locale, "Full FAQ", "全部常见问题")}</Link></p>
      </section>

      <section className="section hub-cta">
        <h2>{tx(locale, "Use a guide, then the lobby", "先看指南，再到大厅")}</h2>
        <p>{tx(locale, "The guides explain the public path. The player lobby is where the account, the cashier, and the game actually open.", "指南说明公开路径。账户、收银台和游戏在玩家大厅里打开。")}</p>
        <div className="cta-row">
          <Link className="btn btn-primary" href={href("/register")}>{tx(locale, "Register", "注册")}</Link>
          <Link className="btn btn-line" href={href("/games")}>{tx(locale, "Games", "游戏")}</Link>
          <Link className="btn btn-ghost" href={href("/contact")}>{tx(locale, "Contact", "联系客服")}</Link>
        </div>
      </section>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: tx(locale, "Home", "首页"), item: absoluteUrl(href("/")) },
          { "@type": "ListItem", position: 2, name: tx(locale, "Guides", "指南"), item: absoluteUrl(href("/guides")) },
        ],
      }} />
    </div>
  );
}
