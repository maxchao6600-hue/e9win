"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";
import { tx, type Locale } from "@/lib/i18n";

type Mode = "login" | "register";

export function AuthForm({ mode, locale = "en" }: { mode: Mode; locale?: Locale }) {
  const t = (en: string, zh: string) => tx(locale, en, zh);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [ready, setReady] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = String(data.get("username") || "").trim();
    const password = String(data.get("password") || "");
    const phone = String(data.get("phone") || "").trim();
    if (username.length < 4) {
      setError(t("Username needs at least 4 characters.", "用户名至少需要 4 个字符。"));
      setReady(false);
      return;
    }
    if (password.length < 8) {
      setError(t("Password needs at least 8 characters.", "密码至少需要 8 个字符。"));
      setReady(false);
      return;
    }
    if (mode === "register" && !/^(\+?6?0)?1\d{8,9}$/.test(phone.replace(/\s/g, ""))) {
      setError(t("Enter a Malaysian mobile number.", "请输入马来西亚手机号码。"));
      setReady(false);
      return;
    }
    setError("");
    setPending(true);
    window.setTimeout(() => {
      setPending(false);
      setReady(true);
    }, 400);
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {mode === "register" ? (
        <>
          <label className="field"><span>{t("Full name", "姓名")}</span><input name="name" autoComplete="name" required /></label>
          <label className="field"><span>{t("Mobile", "手机号码")}</span><input name="phone" inputMode="tel" autoComplete="tel" required /></label>
        </>
      ) : null}
      <label className="field"><span>{t("Username", "用户名")}</span><input name="username" autoComplete="username" required /></label>
      <label className="field">
        <span>{t("Password", "密码")}</span>
        <div className="pass">
          <input name="password" type={show ? "text" : "password"} autoComplete={mode === "login" ? "current-password" : "new-password"} required />
          <button type="button" onClick={() => setShow((value) => !value)}>{show ? t("Hide", "隐藏") : t("Show", "显示")}</button>
        </div>
      </label>
      {error ? <p className="error" role="alert">{error}</p> : null}
      <button className="btn btn-primary" type="submit" disabled={pending}>{pending ? t("Checking…", "正在检查…") : mode === "login" ? t("Continue", "继续") : t("Continue registration", "继续注册")}</button>
      {ready ? (
        <div className="note">
          <p>{t("These details are checked in your browser only.", "这些资料只在你的浏览器中检查。")}</p>
          <p>{t("Continue in the E9WIN player lobby to finish.", "请在 E9WIN 玩家大厅继续完成。")}</p>
          <a className="btn btn-ghost" href={siteConfig.playerPortal}>{t("Open player portal", "打开玩家门户")}</a>
        </div>
      ) : null}
    </form>
  );
}
