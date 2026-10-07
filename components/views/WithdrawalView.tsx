import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AnchoredSections } from "@/components/content/AnchoredSections";
import { FaqBlock, RelatedLinks } from "@/components/content/CopySections";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Metadata } from "next";
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

export function withdrawalMetadata(locale: Locale): Metadata {
  return pageMeta({
    title: tx(locale, "E9WIN Withdrawal | Matching Bank and E-Wallet", "E9WIN 提款"),
    description: tx(locale, "Withdraw from E9WIN to a bank or e-wallet in the same name as the profile. The cashier shows the status of the request.", "从 E9WIN 提款到与个人资料同名的银行或电子钱包。收银台显示申请状态。"),
    path: localizePath("/withdrawal", locale),
    locale,
  });
}

export function WithdrawalView({ locale }: { locale: Locale }) {
  const href = (path: string) => localizePath(path, locale);
  const t = (en: string, zh: string) => tx(locale, en, zh);
  const faq = [
    { q: t("Which banks can receive a withdrawal?", "哪些银行可以接收提款？"), a: t("The payment strip shows Maybank, CIMB, Public Bank, RHB, Hong Leong, AmBank, and BSN, plus the listed e-wallets. The cashier confirms what your account can use.", "支付条显示 Maybank、CIMB、Public Bank、RHB、Hong Leong、AmBank 和 BSN，以及列出的电子钱包。收银台确认你的账户可以使用哪些。") },
    { q: t("Can I withdraw to someone else?", "可以提款给别人吗？"), a: t("Use an account in the same name as the E9WIN profile. A friend-credit transfer is a separate cashier action, not a bank withdrawal.", "请使用与 E9WIN 个人资料相同姓名的账户。好友额度转账是收银台的另一项操作，不是银行提款。") },
  ];

  return (
    <div className="container page-hero">
      <Breadcrumbs locale={locale} items={[{ href: href("/"), label: t("Home", "首页") }, { label: t("Withdrawal", "提款") }]} />
      <section className="hub-hero">
        <div>
          <p className="tag">{t("Cashier", "收银台")}</p>
          <h1>{t("E9WIN Withdrawal", "E9WIN 提款")}</h1>
          <p>{t("E9WIN withdrawal uses the bank and e-wallet methods shown on the payment page. The payout name should match the account. The cashier shows the status of the request.", "E9WIN 提款使用支付页面所示的银行和电子钱包方式。收款姓名应与账户相符。收银台显示申请状态。")}</p>
        </div>
        <img src="/images/brand/scene-account.webp" alt={t("A quiet desk beside a night window", "夜窗旁安静的书桌")} width={1600} height={760} />
      </section>
      <section className="section prose">
        <h2>{t("How a withdrawal is requested", "如何申请提款")}</h2>
        <ol className="steps">
          <li>{t("Sign in and open Withdrawal or Cash Out.", "登录并打开提款。")}</li>
          <li>{t("Choose bank transfer or an e-wallet.", "选择银行转账或电子钱包。")}</li>
          <li>{t("Enter an amount inside the limits shown in the cashier.", "输入收银台所示限额内的金额。")}</li>
          <li>{t("Confirm any extra verification the lobby asks for.", "完成大厅要求的任何额外验证。")}</li>
          <li>{t("Check the withdrawal history and your email notification.", "查看提款记录和你的电子邮件通知。")}</li>
        </ol>
      </section>
      <div className="panel section">
        <h2>{t("Notes", "说明")}</h2>
        <p>{t("Turnover on an active promotion can hold a withdrawal until that requirement is met. The campaign card states the rule. The cashier shows the status of the request.", "进行中优惠的流水可能使提款等待，直到该条件完成。活动卡片写明规则。收银台显示申请状态。")}</p>
        <p><Link href={href("/guides/withdrawal-guide")}>{t("E9WIN withdrawal guide", "E9WIN 提款指南")}</Link> · <Link href={href("/contact")}>{t("Support", "客服")}</Link></p>
      </div>
      <div className="prose">
        <AnchoredSections sections={[
          {
            title: t("What can receive the payout", "哪些账户可以收款"),
            paragraphs: [
              t("The same banks and e-wallets shown for deposits are the published set. The cashier confirms which of them your account can use.", "存款所示的同一组银行和电子钱包是已公布的范围。收银台确认你的账户可以使用哪些。"),
            ],
          },
          {
            title: t("Before you submit", "提交之前"),
            paragraphs: [
              t("Open the cashier and read the limit on that screen. The limit, the maximum, and the timing belong to that attempt.", "打开收银台，阅读该页面上的限额。限额、最高额和时间属于该次申请。"),
              t("If a promotion is active, read its card first. Turnover stated there can hold a request. The card is the rule.", "如果有进行中的优惠，先阅读其卡片。上面写明的流水可能使申请等待。卡片就是规则。"),
            ],
          },
          {
            title: t("If the payout fails", "如果出款失败"),
            paragraphs: [
              t("Check the withdrawal history before you submit a second request. Message WhatsApp with the username and the amount. Do not send the password, and do not switch the payout to a different person’s account to make it faster.", "再次提交前先查看提款记录。通过 WhatsApp 发送用户名和金额。不要发送密码，也不要为了加快而把收款改到另一个人的账户。"),
            ],
          },
          {
            title: t("Why a request can wait", "为什么申请会等待"),
            paragraphs: [
              t("A name that does not match the profile, a missing verification step, or turnover on an active promotion can hold a request. The promotion card states its own rule. This page does not add a clock to it.", "姓名与个人资料不符、缺少验证步骤，或进行中优惠的流水，都可能使申请等待。优惠卡片写明自身规则。本页不为它加上时限。"),
            ],
          },
        ]} scenes={[
          { src: "/images/brand/scene-payments.webp", alt: t("A card and a phone on a dark cashier counter", "深色收银台柜台上的卡片和手机") },
          { src: "/images/brand/scene-devices.webp", alt: t("A phone and a laptop on a dark marble desk", "深色大理石桌上的手机和笔记本电脑") },
        ]} />
        <section className="topic">
          <h2>{t("Related", "相关")}</h2>
          <RelatedLinks links={[
            { href: href("/payment-methods"), label: t("E9WIN payment methods", "E9WIN 支付方式") },
            { href: href("/deposit"), label: t("E9WIN deposit", "E9WIN 存款") },
            { href: href("/guides/withdrawal-guide"), label: t("E9WIN withdrawal guide", "E9WIN 提款指南") },
            { href: href("/promotions"), label: t("Promotions", "优惠") },
            { href: href("/contact"), label: t("Contact", "客服") },
          ]} />
        </section>
      </div>
      <FaqBlock items={faq} title={t("FAQ", "常见问题")} />
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
