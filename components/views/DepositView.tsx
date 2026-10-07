import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AnchoredSections } from "@/components/content/AnchoredSections";
import { FaqBlock, RelatedLinks } from "@/components/content/CopySections";
import { JsonLd } from "@/components/seo/JsonLd";
import { depositMethods, payments } from "@/lib/content";
import type { Metadata } from "next";
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

export function depositMetadata(locale: Locale): Metadata {
  return pageMeta({
    title: tx(locale, "E9WIN Deposit | Bank, E-Wallet and USDT", "E9WIN 存款"),
    description: tx(locale, "Deposit to E9WIN by instant transfer, e-wallet, bank transfer, telco PIN, or USDT.", "通过即时转账、电子钱包、银行转账、电信 PIN 或 USDT 向 E9WIN 存款。"),
    path: localizePath("/deposit", locale),
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

export function DepositView({ locale }: { locale: Locale }) {
  const href = (path: string) => localizePath(path, locale);
  const t = (en: string, zh: string) => tx(locale, en, zh);
  const faq = [
    { q: t("Is a minimum deposit listed?", "有列出最低存款吗？"), a: t("The cashier shows the limits for the method you pick.", "收银台显示你所选择方式的限额。") },
    { q: t("How long does a deposit take?", "存款需要多久？"), a: t("Timing depends on the method. The cashier status shows when the wallet updates.", "时间取决于方式。钱包何时更新，以收银台状态为准。") },
  ];

  return (
    <div className="container page-hero">
      <Breadcrumbs locale={locale} items={[{ href: href("/"), label: t("Home", "首页") }, { label: t("Deposit", "存款") }]} />
      <section className="hub-hero">
        <div>
          <p className="tag">{t("Cashier", "收银台")}</p>
          <h1>{t("E9WIN Deposit", "E9WIN 存款")}</h1>
          <p>{t("E9WIN deposit covers instant transfer, e-wallet, telco PIN, bank transfer, USDT, and sending credit to a friend. The cashier shows the limit and the instruction for that attempt.", "E9WIN 存款包括即时转账、电子钱包、电信 PIN、银行转账、USDT，以及把额度转给好友。收银台显示该次的限额和指示。")}</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href={href("/login")}>{t("Sign in", "登录")}</Link>
            <Link className="btn btn-line" href={href("/payment-methods")}>{t("E9WIN payment methods", "E9WIN 支付方式")}</Link>
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
      <div className="section prose">
        <h2>{t("Steps", "步骤")}</h2>
        <ol className="steps">
          <li>{t("Sign in and open Top Up.", "登录并打开存款。")}</li>
          <li>{t("Pick the method and copy the account, reference, or wallet address on screen.", "选择方式，并复制屏幕上的账户、参考编号或钱包地址。")}</li>
          <li>{t("Pay that exact instruction. Do not reuse an old account number from a screenshot.", "按该指示原样付款。不要重复使用截图中的旧账号。")}</li>
          <li>{t("Keep the receipt until the wallet updates.", "保留收据，直到钱包更新。")}</li>
        </ol>
        <p>
          {t("The cashier shows the timing for the method you chose. See the ", "收银台显示你所选择方式的时间。请查看")}
          <Link href={href("/guides/deposit-guide")}>{t("E9WIN deposit guide", "E9WIN 存款指南")}</Link>
          {t(" or ", "或")}
          <Link href={href("/contact")}>{t("contact support", "联系客服")}</Link>
          {t(".", "。")}
        </p>
      </div>
      <div className="prose">
        <AnchoredSections sections={[
          {
            title: t("Banks and e-wallets", "银行与电子钱包"),
            paragraphs: [
              t("The marks on this page are the published set: Maybank, CIMB, Public Bank, RHB, Hong Leong, AmBank, BSN, Touch 'n Go, Boost, GrabPay, ShopeePay, and USDT.", "本页标识是已公布的一组：Maybank、CIMB、Public Bank、RHB、Hong Leong、AmBank、BSN、Touch 'n Go、Boost、GrabPay、ShopeePay 和 USDT。"),
              t("Instant transfer, manual bank transfer, telco PIN, and credit to a friend are cashier paths. The accepted PIN brands and the USDT network are shown in the cashier, not guessed here.", "即时转账、手动银行转账、电信 PIN 和转给好友都是收银台途径。接受的 PIN 品牌和 USDT 网络显示在收银台，本页不作猜测。"),
            ],
          },
          {
            title: t("Choosing a method", "选择方式"),
            paragraphs: [
              t("Use a bank or e-wallet you already control, in the same name as the profile. Telco PIN and USDT are also cashier paths. Friend credit moves balance to another player account and is not a deposit from a bank.", "使用你已持有、且与个人资料相同姓名的银行或电子钱包。电信 PIN 和 USDT 也是收银台途径。好友额度把余额转到另一个玩家账户，不是从银行存入。"),
            ],
            note: t("The cashier shows the fee, minimum, and timing for the method you select.", "收银台显示你所选择方式的费用、最低额和时间。"),
          },
          {
            title: t("If the credit is missing", "额度未到账"),
            paragraphs: [
              t("Compare the amount and the reference with the receipt. Message support with the username. Do not send a password, and do not pay a new account number that arrived in a chat.", "对照收据核对金额和参考编号。向客服发送用户名。不要发送密码，也不要向聊天中收到的新账号付款。"),
            ],
          },
          {
            title: t("Safety", "安全"),
            paragraphs: [
              t("The instruction on the cashier at the moment you pay is the one that counts. A screenshot from last month can be wrong. Withdrawals are a separate page and must match the profile name.", "付款当下收银台的指示才算数。上个月的截图可能已经不对。提款是另一个页面，且必须与个人资料姓名相符。"),
            ],
          },
        ]} scenes={[
          { src: "/images/brand/scene-account.webp", alt: t("A quiet desk beside a night window", "夜窗旁安静的书桌") },
          { src: "/images/brand/scene-slots.webp", alt: t("Gates of Olympus on a display in a dark private room", "昏暗私人房间的屏幕上显示着 Gates of Olympus") },
        ]} />
        <FaqBlock items={faq} title={t("FAQ", "常见问题")} />
        <section className="topic">
          <h2>{t("Related", "相关")}</h2>
          <RelatedLinks links={[
            { href: href("/payment-methods"), label: t("E9WIN payment methods", "E9WIN 支付方式") },
            { href: href("/withdrawal"), label: t("E9WIN withdrawal", "E9WIN 提款") },
            { href: href("/guides/payment-guide"), label: t("E9WIN payment guide", "E9WIN 支付指南") },
            { href: href("/guides/deposit-guide"), label: t("E9WIN deposit guide", "E9WIN 存款指南") },
            { href: href("/guides/withdrawal-guide"), label: t("E9WIN withdrawal guide", "E9WIN 提款指南") },
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
