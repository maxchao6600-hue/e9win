"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

type Mode = "login" | "register";

export function AuthForm({ mode }: { mode: Mode }) {
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
      setError("Username needs at least 4 characters.");
      setReady(false);
      return;
    }
    if (password.length < 8) {
      setError("Password needs at least 8 characters.");
      setReady(false);
      return;
    }
    if (mode === "register" && !/^(\+?6?0)?1\d{8,9}$/.test(phone.replace(/\s/g, ""))) {
      setError("Enter a Malaysian mobile number.");
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
          <label className="field"><span>Full name</span><input name="name" autoComplete="name" required /></label>
          <label className="field"><span>Mobile</span><input name="phone" inputMode="tel" autoComplete="tel" required /></label>
        </>
      ) : null}
      <label className="field"><span>Username</span><input name="username" autoComplete="username" required /></label>
      <label className="field">
        <span>Password</span>
        <div className="pass">
          <input name="password" type={show ? "text" : "password"} autoComplete={mode === "login" ? "current-password" : "new-password"} required />
          <button type="button" onClick={() => setShow((value) => !value)}>{show ? "Hide" : "Show"}</button>
        </div>
      </label>
      {error ? <p className="error" role="alert">{error}</p> : null}
      <button className="btn btn-primary" type="submit" disabled={pending}>{pending ? "Checking…" : mode === "login" ? "Continue" : "Continue registration"}</button>
      {ready ? (
        <div className="note">
          <p>These details are only checked in the browser. This site cannot sign you in.</p>
          <p>Continue in the player portal published on e9win.net.</p>
          <a className="btn btn-ghost" href={siteConfig.playerPortal}>Open player portal</a>
        </div>
      ) : null}
    </form>
  );
}
