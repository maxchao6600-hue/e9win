import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { VisualSplit } from "@/components/content/VisualSplit";
import type { Metadata } from "next";
import { presentFaq } from "@/lib/i18n/zhFaq";
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

export function faqMetadata(locale: Locale): Metadata {
  return pageMeta({
    title: tx(locale, "E9WIN FAQ | Account, Games, Payments and Support", "E9WIN 常见问题"),
    description: tx(locale, "Answers about E9WIN accounts, games, download, payments, promotions, agents, and support.", "关于 E9WIN 账户、游戏、下载、支付、优惠、代理和客服的解答。"),
    path: localizePath("/faq", locale),
    locale,
  });
}


const related: Record<string, { href: string; en: string; zh: string }[]> = {
  general: [{ href: "/about", en: "About E9WIN", zh: "关于 E9WIN" }, { href: "/games", en: "E9WIN Games", zh: "E9WIN 游戏" }],
  registration: [{ href: "/register", en: "Register", zh: "注册" }, { href: "/guides/how-to-register", en: "Registration guide", zh: "注册指南" }],
  login: [{ href: "/login", en: "Login", zh: "登录" }, { href: "/guides/how-to-login", en: "Login guide", zh: "登录指南" }],
  games: [{ href: "/games", en: "E9WIN Games", zh: "E9WIN 游戏" }, { href: "/guides/games-guide", en: "E9WIN Games Guide", zh: "E9WIN 游戏指南" }],
  download: [{ href: "/download", en: "E9WIN Download", zh: "E9WIN 下载" }, { href: "/guides/mobile-guide", en: "E9WIN Mobile Guide", zh: "E9WIN 手机指南" }],
  payments: [{ href: "/payment-methods", en: "E9WIN payment methods", zh: "E9WIN 支付方式" }, { href: "/deposit", en: "E9WIN deposit", zh: "E9WIN 存款" }],
  withdrawals: [{ href: "/withdrawal", en: "E9WIN withdrawal", zh: "E9WIN 提款" }, { href: "/guides/withdrawal-guide", en: "E9WIN Withdrawal Guide", zh: "E9WIN 提款指南" }],
  mobile: [{ href: "/download", en: "E9WIN Download", zh: "E9WIN 下载" }, { href: "/guides/iphone-guide", en: "iPhone access", zh: "iPhone 访问" }],
  security: [{ href: "/guides/security-guide", en: "E9WIN Security Guide", zh: "E9WIN 安全指南" }, { href: "/contact", en: "Contact", zh: "客服" }],
  promotions: [{ href: "/promotions", en: "E9WIN Promotions", zh: "E9WIN 优惠" }, { href: "/guides/promotions-guide", en: "Promotion guide", zh: "优惠指南" }],
  agent: [{ href: "/agent", en: "E9WIN Agent", zh: "E9WIN 代理" }, { href: "/contact", en: "Contact", zh: "客服" }],
  slots: [{ href: "/games/slots", en: "E9WIN Slots", zh: "E9WIN 老虎机" }, { href: "/guides/slots-guide", en: "E9WIN Slots Guide", zh: "E9WIN 老虎机指南" }],
  live: [{ href: "/games/live-casino", en: "E9WIN Live Casino", zh: "E9WIN 真人娱乐场" }, { href: "/guides/live-casino-guide", en: "E9WIN Live Casino Guide", zh: "E9WIN 真人娱乐场指南" }],
  sports: [{ href: "/games/sports", en: "E9WIN Sports", zh: "E9WIN 体育" }, { href: "/guides/sports-guide", en: "E9WIN Sports Guide", zh: "E9WIN 体育指南" }],
  esports: [{ href: "/games/esports", en: "E9WIN Esports", zh: "E9WIN 电竞" }, { href: "/guides/esports-guide", en: "E9WIN Esports Guide", zh: "E9WIN 电竞指南" }],
  lottery: [{ href: "/games/4d", en: "E9WIN 4D", zh: "E9WIN 4D" }, { href: "/guides/lottery-guide", en: "E9WIN 4D Guide", zh: "E9WIN 4D 指南" }],
  fishing: [{ href: "/games/fishing", en: "E9WIN Fishing", zh: "E9WIN 捕鱼" }, { href: "/guides/fishing-guide", en: "E9WIN Fishing Guide", zh: "E9WIN 捕鱼指南" }],
  vip: [{ href: "/vip", en: "E9WIN VIP", zh: "E9WIN VIP" }, { href: "/promotions", en: "Promotions", zh: "优惠" }],
  responsible: [{ href: "/responsible-gaming", en: "Responsible gaming", zh: "理性娱乐" }, { href: "/guides/responsible-gaming-guide", en: "Limits guide", zh: "限额指南" }],
  support: [{ href: "/contact", en: "Contact", zh: "客服" }, { href: "/faq", en: "E9WIN FAQ", zh: "E9WIN 常见问题" }],
};

export function FaqView({ locale }: { locale: Locale }) {
  const href = (path: string) => localizePath(path, locale);
  const t = (en: string, zh: string) => tx(locale, en, zh);
  const groups = presentFaq(locale);
  const entities = groups.flatMap((group) => group.items);

  return (
    <div className="container page-hero">
      <Breadcrumbs locale={locale} items={[{ href: href("/"), label: t("Home", "首页") }, { label: t("FAQ", "常见问题") }]} />
      <section className="hub-hero">
        <div>
          <p className="tag">{t("Help", "帮助")}</p>
          <h1>{t("E9WIN FAQ", "E9WIN 常见问题")}</h1>
          <p>{t("Answers drawn from the public pages, grouped by the task you are trying to finish. Each answer points at the longer page for that topic.", "答案来自公开页面，按你要完成的事项分组。每条答案都会指向该主题的详细页面。")}</p>
        </div>
        <img src="/images/brand/scene-account.webp" alt={t("A quiet desk beside a night window", "夜窗旁安静的书桌")} width={1600} height={760} />
      </section>
      <VisualSplit src="/images/brand/scene-slots.webp" alt={t("Gates of Olympus on a display in a dark private room", "昏暗私人房间的屏幕上显示着 Gates of Olympus")} reverse>
        <h2>{t("How to use this page", "如何使用本页")}</h2>
        <p>{t("Start with the group that matches the task: an account, a game category, a payment, a promotion, or membership. Each answer points at the page that carries the longer explanation.", "先找与事项相符的分组：账户、游戏分类、付款、优惠或会员。每条答案都会指向说明更完整的页面。")}</p>
        <p>{t("The player lobby still decides a stake, a cashier limit, and a campaign card. Use this page to find the right screen.", "投注、收银台限额和活动卡片仍由玩家大厅决定。用本页找到对应画面。")}</p>
      </VisualSplit>
      {groups.map((group) => (
        <section className="faq" key={group.id} aria-labelledby={group.id}>
          <h2 id={group.id}>{group.title}</h2>
          {group.items.map((item) => (
            <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>
          ))}
          {related[group.id] ? (
            <p>{related[group.id].map((link, index) => (
              <span key={link.href}>{index > 0 ? " · " : null}<Link href={href(link.href)}>{t(link.en, link.zh)}</Link></span>
            ))}</p>
          ) : null}
        </section>
      ))}
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: entities.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }} />
    </div>
  );
}
