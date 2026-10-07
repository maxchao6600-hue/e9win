import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

export function privacyMetadata(locale: Locale): Metadata {
  return pageMeta({
    title: tx(locale, "E9WIN Privacy", "E9WIN 隐私说明"),
    description: tx(locale, "How the E9WIN information site handles the details you type into login and register forms.", "E9WIN 信息网站如何处理你在登录和注册表格中填写的资料。"),
    path: localizePath("/privacy", locale),
    locale,
  });
}

export function PrivacyView({ locale }: { locale: Locale }) {
  const href = (path: string) => localizePath(path, locale);
  const t = (en: string, zh: string) => tx(locale, en, zh);

  return (
    <div className="container page-hero prose">
      <Breadcrumbs locale={locale} items={[{ href: href("/"), label: t("Home", "首页") }, { label: t("Privacy", "隐私说明") }]} />
      <section className="hub-hero">
        <div>
          <p className="tag">{t("Legal", "法律")}</p>
          <h1>{t("Privacy", "隐私说明")}</h1>
          <p>{t("This page describes the forms on this information site and the support channels that are published. It does not add a corporate privacy notice that the source pages do not contain.", "本页说明本信息网站上的表格和已公布的客服渠道。来源页面没有的公司隐私声明，这里也不加入。")}</p>
        </div>
        <img src="/images/brand/scene-account.webp" alt={t("A quiet desk beside a night window", "夜窗旁安静的书桌")} width={1600} height={760} />
      </section>
      <h2>{t("Forms on this website", "本站上的表格")}</h2>
      <p>{t("Login and register forms on this site run in your browser. They do not send the form to a server operated by this website. If you continue to the player portal, that portal’s own privacy rules apply.", "本站的登录和注册表格在你的浏览器中运行。它们不会把表格发送到本站运营的服务器。如果你继续前往玩家入口，则适用该入口自身的隐私规则。")}</p>
      <h2>{t("Support messages", "客服消息")}</h2>
      <p>{t("Do not send passwords through WhatsApp or Facebook. Support may ask for a username and a payment receipt when you report a deposit.", "不要通过 WhatsApp 或 Facebook 发送密码。你报告存款问题时，客服可能会要求用户名和付款收据。")}</p>
      <h2>{t("What is not published", "未公布的内容")}</h2>
      <p>{t("This site does not sell visitor lists. A full corporate privacy notice, including a data controller address, is not published on the source pages used here.", "本站不出售访客名单。完整的公司隐私声明（包括数据控制者地址）没有在这里使用的来源页面公布。")}</p>
      <p><Link href={href("/terms")}>{t("Terms", "条款与条件")}</Link> · <Link href={href("/guides/security-guide")}>{t("Account safety", "账户安全")}</Link> · <Link href={href("/contact")}>{t("Contact", "客服")}</Link></p>
    </div>
  );
}
