import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { VisualSplit } from "@/components/content/VisualSplit";
import { FaqBlock, RelatedLinks } from "@/components/content/CopySections";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

export function contactMetadata(locale: Locale): Metadata {
  return pageMeta({
    title: tx(locale, "Contact E9WIN | WhatsApp and Facebook Support", "联系 E9WIN 客服"),
    description: tx(locale, "Contact E9WIN on WhatsApp or Facebook. No public email or phone number is listed. In-lobby chat is available after sign-in.", "通过 WhatsApp 或 Facebook 联系 E9WIN。这里不列出公开电邮或电话号码。登录后可使用大厅内聊天。"),
    path: localizePath("/contact", locale),
    locale,
  });
}

export function ContactView({ locale }: { locale: Locale }) {
  const href = (path: string) => localizePath(path, locale);
  const t = (en: string, zh: string) => tx(locale, en, zh);
  const topics = [
    { title: t("Registration", "注册"), text: t("If the form will not submit, check the required fields, then continue in the player lobby.", "如果表格无法提交，请检查必填栏，然后在玩家大厅继续。"), path: "/guides/how-to-register", label: t("Registration guide", "注册指南") },
    { title: t("Login", "登录"), text: t("This website does not keep a session. Password recovery is in the lobby. Send support the username, not the password.", "本站不保存登录状态。密码找回在大厅内。向客服提供用户名，不要提供密码。"), path: "/guides/how-to-login", label: t("Login guide", "登录指南") },
    { title: t("Payments", "支付方式"), text: t("Bring the receipt and the username if a deposit has not appeared. Do not pay an account number from a chat.", "如果存款没有到账，请提供收据和用户名。不要向聊天中的账号付款。"), path: "/payment-methods", label: t("Payment methods", "支付方式") },
    { title: t("Games", "游戏"), text: t("Covers on this site are not the live stake screen. Open the title in the lobby for rules and limits.", "本站封面不是实时投注画面。请在大厅打开该游戏查看规则和限额。"), path: "/games", label: t("Games", "游戏") },
    { title: t("Promotions", "优惠"), text: t("Amounts and turnover live on the account card. Closed campaign windows are not current offers.", "金额和流水在账户卡片上。已结束的活动窗口不是现行优惠。"), path: "/guides/promotions-guide", label: t("Promotion guide", "优惠指南") },
    { title: t("Agent", "代理"), text: t("Ask support for agent setup. Commission is not quoted on the public page.", "向客服询问代理申请。公开页面没有列出佣金。"), path: "/agent", label: t("Agent", "代理") },
    { title: t("Mobile access", "手机访问"), text: t("Use the browser, an iPhone home-screen icon, or the Android portal link. There is no store listing.", "使用浏览器、iPhone 主屏幕图标，或 Android 入口链接。没有应用商店上架。"), path: "/download", label: t("Download", "下载") },
  ];
  const faq = [
    { q: t("Is there a published email or phone number?", "有公布电子邮箱或电话号码吗？"), a: t("No. Use WhatsApp or the Facebook page. In-lobby chat is available after you sign in.", "没有。请使用 WhatsApp 或 Facebook 页面。登录后可使用大厅内聊天。") },
    { q: t("How fast does support reply?", "客服多久回复？"), a: t("A response time is not published. Use the channels above and include your username.", "没有公布回复时间。请使用上述渠道，并附上用户名。") },
  ];

  return (
    <div className="container page-hero">
      <Breadcrumbs locale={locale} items={[{ href: href("/"), label: t("Home", "首页") }, { label: t("Contact", "客服") }]} />
      <section className="hub-hero">
        <div>
          <p className="tag">{t("Support", "客服")}</p>
          <h1>{t("Contact", "客服")}</h1>
          <p>{t("Public support is WhatsApp and Facebook. After you sign in, live chat is also in the lobby. No email address or phone number is published here.", "公开客服渠道是 WhatsApp 和 Facebook。登录后，大厅内也有即时聊天。这里没有公布电子邮箱或电话号码。")}</p>
          <div className="cta-row">
            <a className="btn btn-primary" href={siteConfig.support.whatsapp}>{t("Open WhatsApp", "打开 WhatsApp")}</a>
            <a className="btn btn-line" href={siteConfig.support.facebook}>Facebook</a>
          </div>
        </div>
        <img src="/images/brand/scene-account.webp" alt={t("A quiet desk beside a night window", "夜窗旁安静的书桌")} width={1600} height={760} />
      </section>
      <div className="split section">
        <article className="panel">
          <h2>WhatsApp</h2>
          <p>{t("The published WhatsApp chat for E9WIN support.", "已公布的 E9WIN 客服 WhatsApp 对话。")}</p>
          <a className="btn btn-primary" href={siteConfig.support.whatsapp}>{t("Open WhatsApp", "打开 WhatsApp")}</a>
        </article>
        <article className="panel">
          <h2>Facebook</h2>
          <p>{t("The Facebook profile linked from the E9WIN footer.", "E9WIN 页脚所链接的 Facebook 主页。")}</p>
          <a className="btn btn-ghost" href={siteConfig.support.facebook}>{t("Open Facebook", "打开 Facebook")}</a>
        </article>
      </div>
      <div className="guide-grid">
        {topics.map((topic) => (
          <article className="panel" key={topic.path}>
            <h2>{topic.title}</h2>
            <p>{topic.text}</p>
            <p><Link href={href(topic.path)}>{topic.label}</Link></p>
          </article>
        ))}
      </div>
      <div className="prose section">
        <VisualSplit src="/images/brand/scene-payments.webp" alt={t("A card and a phone on a dark cashier counter", "深色收银台柜台上的卡片和手机")} reverse>
          <h2>{t("What to include", "需要提供的资料")}</h2>
          <p>{t("Send the username and a short description of the page or cashier step. For a payment, include the amount and the reference from the receipt. Do not include the password.", "请发送用户名，并简短说明页面或收银台步骤。如涉及付款，请附上金额和收据上的参考编号。不要附上密码。")}</p>
          <p>
            {t("Account questions can start from ", "账户问题可先看")}
            <Link href={href("/guides/security-guide")}>{t("account safety", "账户安全")}</Link>
            {t(". Payment questions can start from ", "。付款问题可先看")}
            <Link href={href("/payment-methods")}>{t("payment methods", "支付方式")}</Link>
            {t(". Promotion questions belong on the ", "。优惠问题以")}
            <Link href={href("/promotions")}>{t("promotions", "优惠")}</Link>
            {t(" card, then here if the card and the account disagree.", "卡片为准；若卡片与账户不一致，再联系这里。")}
          </p>
        </VisualSplit>
        <FaqBlock items={faq} title={t("FAQ", "常见问题")} />
        <section className="topic">
          <h2>{t("Related", "相关")}</h2>
          <RelatedLinks links={[
            { href: href("/faq"), label: t("FAQ", "常见问题") },
            { href: href("/guides/security-guide"), label: t("Account safety", "账户安全") },
            { href: href("/responsible-gaming"), label: t("Responsible gaming", "理性娱乐") },
          ]} />
        </section>
      </div>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }} />
    </div>
  );
}
