import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AnchoredSections } from "@/components/content/AnchoredSections";
import { VisualSplit } from "@/components/content/VisualSplit";
import { FaqBlock, RelatedLinks } from "@/components/content/CopySections";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

export function responsibleMetadata(locale: Locale): Metadata {
  return pageMeta({
    title: tx(locale, "Responsible Gaming", "E9WIN 理性娱乐"),
    description: tx(locale, "Age limit, spending control, and support notes for E9WIN players.", "面向 E9WIN 玩家的年龄限制、花费控制和协助说明。"),
    path: localizePath("/responsible-gaming", locale),
    locale,
  });
}

export function ResponsibleView({ locale }: { locale: Locale }) {
  const href = (path: string) => localizePath(path, locale);
  const t = (en: string, zh: string) => tx(locale, en, zh);

  return (
    <div className="container page-hero prose">
      <Breadcrumbs locale={locale} items={[{ href: href("/"), label: t("Home", "首页") }, { label: t("Responsible gaming", "理性娱乐") }]} />
      <section className="hub-hero">
        <div>
          <p className="tag">18+</p>
          <h1>{t("Responsible gaming", "理性娱乐")}</h1>
          <p>{t("E9WIN is for adults aged 18 and over. Gambling can be addictive. Only use money you can afford to lose, and treat play as entertainment.", "E9WIN 面向 18 岁及以上的成年人。博彩花费可能超出原来的计划。请只用可以承受损失的金额，并把游戏当作娱乐。")}</p>
        </div>
        <img src="/images/brand/scene-account.webp" alt={t("A quiet desk beside a night window", "夜窗旁安静的书桌")} width={1600} height={760} />
      </section>
      <section className="section prose">
        <h2>{t("Keep control of the account", "掌控账户")}</h2>
        <ul>
          <li>{t("Set a budget before you deposit.", "存款前先设定预算。")}</li>
          <li>{t("Do not chase losses.", "不要为了挽回损失而继续。")}</li>
          <li>{t("Take breaks, and do not play when you are upset or drinking.", "适时休息，情绪低落或饮酒时不要游玩。")}</li>
          <li>{t("The platform describes deposit limits and self-exclusion as account tools. Use them in the lobby if they are offered on your account.", "平台把存款限额和自我排除说明为账户工具。如果你的账户有提供，请在大厅使用。")}</li>
        </ul>
      </section>
      <VisualSplit src="/images/brand/scene-devices.webp" alt={t("A phone and a laptop on a dark marble desk", "深色大理石桌上的手机和笔记本电脑")} reverse>
        <h2>{t("If play stops being fun", "如果游戏不再只是娱乐")}</h2>
        <p>
          {t("Stop depositing and message support on ", "停止存款，并通过 ")}
          <a href={siteConfig.support.whatsapp}>WhatsApp</a>
          {t(" to ask about account limits. For personal help in Malaysia, contact a local counselling service you trust.", " 联系客服询问账户限额。如需马来西亚的个人协助，请联系你信任的本地辅导服务。")}
        </p>
      </VisualSplit>
      <AnchoredSections sections={[
        {
          title: t("Set the limit before the session", "开局前设定限额"),
          paragraphs: [
            t("Decide the amount, then stop when it is gone. A new deposit to recover a loss in the same session is the behaviour this page is asking you to avoid.", "先决定金额，用完就停。在同一场次再存款以追回损失，是本页请你避免的行为。"),
          ],
          list: [
            t("Keep play separate from rent, food, and money you cannot lose.", "把游玩与租金、食物和不能损失的钱分开。"),
            t("Take a break when you are upset or drinking.", "情绪低落或饮酒时休息。"),
            t("Do not borrow to continue a session.", "不要借钱继续这一场。"),
          ],
        },
        {
          title: t("What gambling can do", "游戏时间可能如何变化"),
          paragraphs: [
            t("Play can continue longer than you planned, especially when a result feels close. That is a reason to decide the budget before the session, not a reason this page can diagnose a condition.", "游玩可能比你计划的更久，尤其当结果感觉很接近时。这是开局前决定预算的理由，不是本页可以诊断某种状况的理由。"),
          ],
        },
        {
          title: t("Signs to pause", "适合暂停的情况"),
          paragraphs: [
            t("Pause if you are depositing to recover a loss, hiding play, or using money meant for rent or food. Those are practical warning signs, not a medical checklist.", "如果你正在存款以挽回损失、隐瞒游戏，或使用原本用于租金或食物的钱，请暂停。这些是实际的提醒，不是医疗清单。"),
          ],
        },
        {
          title: t("Tools the platform describes", "平台所说明的工具"),
          paragraphs: [
            t("Deposit limits and self-exclusion are described as account tools when the lobby offers them. This website cannot switch them on. Ask support on WhatsApp if you need the next step.", "存款限额和自我排除在大厅提供时，被说明为账户工具。本站无法替你开启。如需下一步，请通过 WhatsApp 询问客服。"),
          ],
        },
        {
          title: t("Help outside the platform", "平台以外的协助"),
          paragraphs: [
            t("For personal support in Malaysia, use a counselling service you trust. Befrienders is a listening service with a public site at befrienders.org.my. This page does not provide therapy and does not claim a treatment outcome.", "如需马来西亚的个人支持，请使用你信任的辅导服务。Befrienders 是一项倾听服务，公开网站为 befrienders.org.my。本页不提供治疗，也不声称治疗效果。"),
          ],
        },
      ]} scenes={[
        { src: "/images/brand/scene-payments.webp", alt: t("A card and a phone on a dark cashier counter", "深色收银台柜台上的卡片和手机") },
        { src: "/images/promotions/promo-welcome.webp", alt: t("A dark entrance lit with gold", "金色灯光映照的深色入口") },
      ]} />
      <FaqBlock items={[
        { q: t("Is E9WIN for under 18s?", "E9WIN 适合 18 岁以下吗？"), a: t("No. The platform is for adults aged 18 and over.", "不适合。平台面向 18 岁及以上的成年人。") },
        { q: t("Can this page set a deposit limit?", "本页可以设定存款限额吗？"), a: t("No. Limits, when offered, are account tools in the lobby.", "不能。限额在有提供时，是大厅内的账户工具。") },
      ]} title={t("FAQ", "常见问题")} />
      <section className="topic">
        <h2>{t("Related", "相关")}</h2>
        <RelatedLinks links={[
          { href: href("/guides/responsible-gaming-guide"), label: t("Limits guide", "限额指南") },
          { href: href("/deposit"), label: t("Deposit", "存款") },
          { href: href("/contact"), label: t("Contact", "客服") },
          { href: href("/terms"), label: t("Terms", "条款与条件") },
        ]} />
      </section>
      <p><Link href={href("/terms")}>{t("Terms", "条款与条件")}</Link> · <Link href={href("/contact")}>{t("Contact", "客服")}</Link></p>
    </div>
  );
}
