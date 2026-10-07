import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AnchoredSections } from "@/components/content/AnchoredSections";
import { FaqBlock, RelatedLinks } from "@/components/content/CopySections";
import { JsonLd } from "@/components/seo/JsonLd";
import { depositMethods, payments } from "@/lib/content";
import type { Metadata } from "next";
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

export function paymentMetadata(locale: Locale): Metadata {
  return pageMeta({
    title: tx(locale, "E9WIN Payment Methods | Banks, E-Wallets and USDT", "E9WIN 支付方式"),
    description: tx(locale, "See the banks, e-wallets, telco PIN, and USDT marks published for E9WIN, then deposit or withdraw in the cashier.", "查看 E9WIN 已公布的银行、电子钱包、电信 PIN 和 USDT 标识，然后在收银台存款或提款。"),
    path: localizePath("/payment-methods", locale),
    locale,
  });
}

const depositZh = [
  ["即时转账", "在收银台内使用即时转账选项，从支持的马来西亚银行转出资金。"],
  ["电子钱包", "Touch 'n Go、Boost、GrabPay 和 ShopeePay 的标志与 E9WIN 银行支付一起公布。"],
  ["银行转账", "手动转账列出 Maybank、CIMB、Public Bank、RHB、Hong Leong、AmBank 和 BSN。"],
  ["电信 PIN", "收银台教程包含电信 PIN 存款途径。接受的 PIN 显示在收银台。"],
  ["加密货币", "USDT 显示在支付标识之中。请使用加密货币收银台查看钱包地址和网络。"],
  ["转给好友", "E9WIN 也说明了玩家账户之间的额度转账。"],
] as const;

export function PaymentView({ locale }: { locale: Locale }) {
  const href = (path: string) => localizePath(path, locale);
  const t = (en: string, zh: string) => tx(locale, en, zh);
  const faq = [
    { q: t("Are limits printed here?", "这里有印出限额吗？"), a: t("The cashier shows the limits for the method you choose.", "收银台显示你所选择方式的限额。") },
    { q: t("Is a processing time guaranteed?", "有保证处理时间吗？"), a: t("Timing depends on the method and any account checks. The cashier status is the current one.", "时间取决于方式和任何账户检查。收银台状态才是当前状态。") },
    { q: t("Can I pay an account number from a chat?", "可以向聊天中的账号付款吗？"), a: t("Use the instruction on the cashier for that attempt. Do not reuse an old screenshot or a number that arrived in chat.", "使用该次收银台的指示。不要重复使用旧截图或聊天中收到的号码。") },
  ];

  return (
    <div className="container page-hero">
      <Breadcrumbs locale={locale} items={[{ href: href("/"), label: t("Home", "首页") }, { label: t("Payment methods", "支付方式") }]} />
      <section className="hub-hero">
        <div>
          <p className="tag">{t("Payments", "支付方式")}</p>
          <h1>{t("E9WIN Payment Methods", "E9WIN 支付方式")}</h1>
          <p>{t("These are the payment marks published with E9WIN. The cashier is where you pick one, copy the instruction, and later request a withdrawal to a matching name.", "这些是与 E9WIN 一起公布的支付标识。在收银台选择一种、复制指示，之后再申请提款到相符的姓名。")}</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href={href("/deposit")}>{t("E9WIN deposit", "E9WIN 存款")}</Link>
            <Link className="btn btn-line" href={href("/withdrawal")}>{t("E9WIN withdrawal", "E9WIN 提款")}</Link>
          </div>
        </div>
        <img src="/images/brand/scene-payments.webp" alt={t("A card and a phone on a dark cashier counter", "深色收银台柜台上的卡片和手机")} width={1600} height={760} />
      </section>
      <div className="pay-grid section">
        {payments.map((item) => (
          <div className="pay" key={item.id}><img src={item.image} alt={item.name} /></div>
        ))}
      </div>
      <div className="guide-grid">
        {depositMethods.map((method, index) => (
          <article className="panel" key={method.title}><h2>{t(method.title, depositZh[index][0])}</h2><p>{t(method.text, depositZh[index][1])}</p></article>
        ))}
      </div>
      <div className="prose section">
        <AnchoredSections sections={[
          {
            title: t("Banks", "银行"),
            paragraphs: [
              t("Maybank, CIMB, Public Bank, RHB, Hong Leong, AmBank, and BSN appear on the payment strip. Instant transfer and manual bank transfer are both described as cashier paths.", "Maybank、CIMB、Public Bank、RHB、Hong Leong、AmBank 和 BSN 出现在支付条上。即时转账和手动银行转账都被说明为收银台途径。"),
            ],
          },
          {
            title: t("E-wallets", "电子钱包"),
            paragraphs: [
              t("Touch 'n Go, Boost, GrabPay, and ShopeePay are the e-wallet marks. Which of them your account can use is confirmed in the cashier.", "Touch 'n Go、Boost、GrabPay 和 ShopeePay 是电子钱包标识。你的账户可以使用哪些，在收银台确认。"),
            ],
          },
          {
            title: t("Telco PIN, USDT, and friend credit", "电信 PIN、USDT 与好友额度"),
            paragraphs: [
              t("Telco PIN is a deposit path. The accepted pins are listed in the cashier, not on this page. USDT is shown as a mark; the wallet address and network are on the crypto cashier. Credit to a friend is a transfer between player accounts, not a bank withdrawal.", "电信 PIN 是一种存款途径。接受的 PIN 列在收银台，不在本页。USDT 显示为标识；钱包地址和网络在加密货币收银台。转给好友是玩家账户之间的转账，不是银行提款。"),
            ],
          },
          {
            title: t("Deposit and withdrawal", "存款与提款"),
            paragraphs: [
              t("A deposit follows the instruction on screen and a receipt you keep until the wallet updates. A withdrawal goes to a bank or e-wallet in the same name as the profile. An active promotion can add a requirement; that rule is on the campaign card.", "存款按屏幕上的指示进行，并保留收据直到钱包更新。提款转到与个人资料相同姓名的银行或电子钱包。进行中的优惠可能增加条件；该规则在活动卡片上。"),
            ],
          },
          {
            title: t("Failed deposit", "未到账的存款"),
            paragraphs: [
              t("A deposit that does not appear should be checked against the receipt: amount, time, and reference. Message WhatsApp with the username. Do not send a second payment to a different account number from a chat.", "没有到账的存款应对照收据核对：金额、时间和参考编号。通过 WhatsApp 发送用户名。不要按聊天中的另一个账号再次付款。"),
            ],
          },
          {
            title: t("Pending withdrawal", "处理中的提款"),
            paragraphs: [
              t("A withdrawal can wait on a name check, a missing profile step, or turnover printed on an active promotion card. Read the withdrawal history for the current status before you submit another request.", "提款可能因姓名核对、缺少的个人资料步骤，或进行中优惠卡片上的流水而等待。再次提交前，请先查看提款记录中的当前状态。"),
            ],
          },
          {
            title: t("When something stalls", "进度停住时"),
            paragraphs: [
              t("Compare the amount and reference with the receipt, then message WhatsApp support with the username. Do not send the password.", "对照收据核对金额和参考编号，然后通过 WhatsApp 向客服发送用户名。不要发送密码。"),
            ],
          },
        ]} scenes={[
          { src: "/images/brand/scene-account.webp", alt: t("A quiet desk beside a night window", "夜窗旁安静的书桌") },
          { src: "/images/brand/scene-devices.webp", alt: t("A phone and a laptop on a dark marble desk", "深色大理石桌上的手机和笔记本电脑") },
          { src: "/images/promotions/promo-welcome.webp", alt: t("A dark entrance lit with gold", "金色灯光映照的深色入口") },
        ]} />
        <FaqBlock items={faq} title={t("FAQ", "常见问题")} />
        <section className="topic">
          <h2>{t("Related", "相关")}</h2>
          <RelatedLinks links={[
            { href: href("/deposit"), label: t("E9WIN deposit", "E9WIN 存款") },
            { href: href("/withdrawal"), label: t("E9WIN withdrawal", "E9WIN 提款") },
            { href: href("/guides/deposit-guide"), label: t("E9WIN deposit guide", "E9WIN 存款指南") },
            { href: href("/guides/withdrawal-guide"), label: t("E9WIN withdrawal guide", "E9WIN 提款指南") },
            { href: href("/guides/security-guide"), label: t("Account safety", "账户安全") },
          ]} />
        </section>
        <p><Link className="btn btn-primary" href={href("/deposit")}>{t("Start with a deposit", "从存款开始")}</Link></p>
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
