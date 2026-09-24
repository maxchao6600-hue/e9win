import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/auth/AuthForm";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "E9WIN Login",
  description: "Sign in to E9WIN with your username and password, then continue in the player lobby.",
  path: "/login",
  index: false,
});

export default function LoginPage() {
  return (
    <div className="container page-hero">
      <p className="kicker">E9WIN login</p>
      <h1>Login</h1>
      <p>Use the username and password from registration. This page checks the form only. It does not create a session.</p>
      <AuthForm mode="login" />
      <p><Link href="/register">Need an account?</Link> · <Link href="/guides/how-to-login">Login guide</Link></p>
    </div>
  );
}
