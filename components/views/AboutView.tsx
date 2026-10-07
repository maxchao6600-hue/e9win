import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AnchoredSections } from "@/components/content/AnchoredSections";
import { FaqBlock, RelatedLinks } from "@/components/content/CopySections";
import type { Metadata } from "next";
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

export function aboutMetadata(locale: Locale): Metadata {
  return pageMeta({
    title: tx(locale, "About E9WIN | Malaysia Online Gaming Lobby", "关于 E9WIN | 游戏平台说明"),
    description: tx(locale, "What E9WIN is, how the lobby is organised, and how players reach games, payments, and support.", "说明 E9WIN 是什么、大厅如何组织，以及玩家如何进入游戏、支付和客服。"),
    path: localizePath("/about", locale),
    locale,
  });
}

export function AboutView({ locale }: { locale: Locale }) {
  const href = (path: string) => localizePath(path, locale);
  const t = (en: string, zh: string) => tx(locale, en, zh);
  const faq = [
    {
      q: t("Is company history published here?", "这里有公布公司历史吗？"),
      a: t("No. Founding dates, offices, ownership, and licences are not part of the published product information, so they are not added.", "没有。成立日期、办事处、所有权和牌照不属于已公布的产品资料，因此没有写入。"),
    },
    {
      q: t("Where is play handled?", "游戏在哪里进行？"),
      a: t("In the player lobby after you sign in. This website explains the categories and the access paths.", "登录后在玩家大厅进行。本站说明分类和进入方式。"),
    },
  ];

  return (
    <div className="container page-hero prose">
      <Breadcrumbs locale={locale} items={[{ href: href("/"), label: t("Home", "首页") }, { label: t("About", "关于") }]} />
      <section className="hub-hero">
        <div>
          <p className="tag">E9WIN</p>
          <h1>{t("About E9WIN", "关于 E9WIN")}</h1>
          <p>{t("E9WIN is a Malaysia-facing online gaming lobby. Players reach slots, live casino, sports, 4D, fishing, and esports through one account, then use the published payment marks and support channels.", "E9WIN 是面向马来西亚的线上游戏大厅。玩家用同一个账户进入老虎机、真人娱乐场、体育、4D、捕鱼和电竞，然后使用已公布的支付标识和客服渠道。")}</p>
        </div>
        <img src="/images/brand/scene-slots.webp" alt={t("Gates of Olympus on a display in a dark private room", "昏暗私人房间的屏幕上显示着 Gates of Olympus")} width={1600} height={760} />
      </section>
      <AnchoredSections sections={[
        {
          title: t("What the public site covers", "本站公开说明的内容"),
          paragraphs: [
            t("The catalog pages show slot covers from Pragmatic Play and Lucky365, and live covers from Evolution and Playtech. Sports artwork is live horse racing. Football, including the World Cup and the Premier League, is named for the sportsbook.", "目录页面展示 Pragmatic Play 和 Lucky365 的老虎机封面，以及 Evolution 和 Playtech 的真人封面。体育图片是现场赛马。足球（包括世界杯和英超）在体育投注中有名称。"),
            t("4D names Magnum, Da Ma Cai, Toto, and Singapore. Fishing and esports are lobby categories without public covers.", "4D 列出 Magnum、Da Ma Cai、Toto 和 Singapore。捕鱼和电竞是大厅分类，没有公开封面。"),
          ],
        },
        {
          title: t("How people open the lobby", "如何打开大厅"),
          paragraphs: [
            t("A desktop or phone browser is enough. iPhone can add the site to the home screen from Safari. Android can use the player portal on the download page.", "电脑或手机浏览器即可。iPhone 可在 Safari 把本站加到主屏幕。Android 可使用下载页面上的玩家入口。"),
          ],
        },
        {
          title: t("Payments and promotions", "支付方式与优惠"),
          paragraphs: [
            t("Published payment marks include Malaysian banks, Touch 'n Go, Boost, GrabPay, ShopeePay, and USDT. The cashier also lists instant transfer, telco PIN, and bank transfer. The limit for each method is on that screen.", "已公布的支付标识包括马来西亚银行、Touch 'n Go、Boost、GrabPay、ShopeePay 和 USDT。收银台也列出即时转账、电信 PIN 和银行转账。每种方式的限额显示在该页面上。"),
            t("Promotion names are published on the promotions page. Amounts and turnover stay on the account card.", "优惠名称公布在优惠页面。金额和流水留在账户卡片上。"),
          ],
        },
        {
          title: t("Support", "客服"),
          paragraphs: [
            t("Public contact is WhatsApp and Facebook. In-lobby chat is available after sign-in. No email address or phone number is published here.", "公开联系方式是 WhatsApp 和 Facebook。登录后可使用大厅内聊天。这里没有公布电子邮箱或电话号码。"),
          ],
        },
      ]} scenes={[
        { src: "/images/brand/scene-devices.webp", alt: t("A phone and a laptop on a dark marble desk", "深色大理石桌上的手机和笔记本电脑") },
        { src: "/images/brand/scene-payments.webp", alt: t("A card and a phone on a dark cashier counter", "深色收银台柜台上的卡片和手机") },
        { src: "/images/brand/scene-account.webp", alt: t("A quiet desk beside a night window", "夜窗旁安静的书桌") },
      ]} />
      <FaqBlock items={faq} title={t("FAQ", "常见问题")} />
      <section className="topic">
        <h2>{t("Related", "相关")}</h2>
        <RelatedLinks links={[
          { href: href("/games"), label: t("E9WIN Games", "E9WIN 游戏") },
          { href: href("/payment-methods"), label: t("E9WIN payment methods", "E9WIN 支付方式") },
          { href: href("/contact"), label: t("Contact", "客服") },
          { href: href("/responsible-gaming"), label: t("Responsible gaming", "理性娱乐") },
        ]} />
      </section>
      <p><Link className="btn btn-primary" href={href("/register")}>{t("Register", "注册")}</Link></p>
    </div>
  );
}
