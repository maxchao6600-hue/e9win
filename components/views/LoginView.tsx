import Link from "next/link";
import { AuthForm } from "@/components/auth/AuthForm";
import type { Metadata } from "next";
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

export function loginMetadata(locale: Locale): Metadata {
  return pageMeta({
    title: tx(locale, "E9WIN Login", "登录 | E9WIN"),
    description: tx(locale, "Sign in to E9WIN with your username and password, then continue in the player lobby.", "使用用户名和密码登录 E9WIN，然后在玩家大厅继续。"),
    path: localizePath("/login", locale),
    locale,
    index: false,
  });
}

export function LoginView({ locale }: { locale: Locale }) {
  const href = (path: string) => localizePath(path, locale);
  const t = (en: string, zh: string) => tx(locale, en, zh);

  return (
    <div className="container page-hero">
      <p className="kicker">{t("E9WIN login", "E9WIN 登录")}</p>
      <h1>{t("E9WIN Login", "E9WIN 登录")}</h1>
      <p>{t("Use the username and password from registration. This page checks the form. The session continues in the player lobby.", "使用注册时的用户名和密码。本页检查表格。登录状态在玩家大厅继续。")}</p>
      <AuthForm mode="login" locale={locale} />
      <p><Link href={href("/register")}>{t("Need an account?", "需要账户？")}</Link> · <Link href={href("/guides/how-to-login")}>{t("Login guide", "登录指南")}</Link></p>
    </div>
  );
}
