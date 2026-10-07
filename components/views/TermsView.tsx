import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

export function termsMetadata(locale: Locale): Metadata {
  return pageMeta({
    title: tx(locale, "E9WIN Terms", "E9WIN 条款与条件"),
    description: tx(locale, "Terms for using the E9WIN information website and the player-account rules described publicly.", "使用 E9WIN 信息网站的条款，以及公开说明的玩家账户规则。"),
    path: localizePath("/terms", locale),
    locale,
  });
}

export function TermsView({ locale }: { locale: Locale }) {
  const href = (path: string) => localizePath(path, locale);
  const t = (en: string, zh: string) => tx(locale, en, zh);

  return (
    <div className="container page-hero prose">
      <Breadcrumbs locale={locale} items={[{ href: href("/"), label: t("Home", "首页") }, { label: t("Terms", "条款与条件") }]} />
      <section className="hub-hero">
        <div>
          <p className="tag">{t("Legal", "法律")}</p>
          <h1>{t("Terms", "条款与条件")}</h1>
          <p>{t("These notes describe what this information website is for. Playing, deposits, and withdrawals follow the rules shown in the player lobby at the time you use them.", "这些说明描述本信息网站的用途。游玩、存款和提款遵循你使用时玩家大厅所显示的规则。")}</p>
        </div>
        <img src="/images/brand/scene-account.webp" alt={t("A quiet desk beside a night window", "夜窗旁安静的书桌")} width={1600} height={760} />
      </section>
      <h2>{t("What this website is", "本站是什么")}</h2>
      <p>{t("This website explains E9WIN products. Playing, deposits, and withdrawals are handled in the player lobby and follow the rules shown there at the time you use them.", "本站说明 E9WIN 的产品。游玩、存款和提款在玩家大厅处理，并遵循你使用时那里所显示的规则。")}</p>
      <h2>{t("Who can use it", "谁可以使用")}</h2>
      <p>{t("You must be 18 or older. You are responsible for the accuracy of the name, mobile number, and payout details you submit. One person should keep one account.", "你必须年满 18 岁。你须对所提交的姓名、手机号码和收款资料的准确性负责。一个人应只保留一个账户。")}</p>
      <h2>{t("Promotions", "优惠")}</h2>
      <p>{t("Promotions have their own turnover and eligibility rules. Those rules on the campaign card control the offer. Nothing on this website changes them.", "优惠有各自的流水和资格规则。活动卡片上的规则决定该优惠。本站的内容不会改变它们。")}</p>
      <h2>{t("Game results", "游戏结果")}</h2>
      <p>{t("Game results are decided by the game provider. This website does not operate the tables or guarantee outcomes.", "游戏结果由游戏供应商决定。本站不经营赌桌，也不保证结果。")}</p>
      <h2>{t("What is not published", "未公布的内容")}</h2>
      <p>{t("A company registration number and governing law are not published on the source pages, so they are not added here.", "公司注册号码和适用法律没有在来源页面公布，因此这里也不加入。")}</p>
      <p><Link href={href("/privacy")}>{t("Privacy", "隐私说明")}</Link> · <Link href={href("/responsible-gaming")}>{t("Responsible gaming", "理性娱乐")}</Link> · <Link href={href("/contact")}>{t("Contact", "客服")}</Link></p>
    </div>
  );
}
