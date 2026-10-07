import Link from "next/link";
import { AuthForm } from "@/components/auth/AuthForm";
import type { Metadata } from "next";
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

export function registerMetadata(locale: Locale): Metadata {
  return pageMeta({
    title: tx(locale, "E9WIN Register", "注册 | E9WIN"),
    description: tx(locale, "Register an E9WIN account with your name, Malaysian mobile number, username, and password.", "使用姓名、马来西亚手机号码、用户名和密码注册 E9WIN 账户。"),
    path: localizePath("/register", locale),
    locale,
    index: false,
  });
}

export function RegisterView({ locale }: { locale: Locale }) {
  const href = (path: string) => localizePath(path, locale);
  const t = (en: string, zh: string) => tx(locale, en, zh);

  return (
    <div className="container page-hero">
      <p className="kicker">{t("E9WIN register", "E9WIN 注册")}</p>
      <h1>{t("E9WIN Register", "E9WIN 注册")}</h1>
      <p>{t("Adults only. Use a name and mobile number you can match to a withdrawal account. The form stays in your browser until you continue to the player portal.", "仅限成年人。请使用可以与提款账户核对的姓名和手机号码。表格留在你的浏览器中，直到你继续前往玩家入口。")}</p>
      <AuthForm mode="register" locale={locale} />
      <p>
        {t("By continuing you agree to the ", "继续即表示你同意")}
        <Link href={href("/terms")}>{t("terms", "条款与条件")}</Link>
        {t(" and ", "和")}
        <Link href={href("/privacy")}>{t("privacy notes", "隐私说明")}</Link>
        {t(". Already registered? ", "。已经注册？")}
        <Link href={href("/login")}>{t("Login", "登录")}</Link>
        {t(".", "。")}
      </p>
    </div>
  );
}
