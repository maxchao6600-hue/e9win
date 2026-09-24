import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/auth/AuthForm";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "E9WIN Register",
  description: "Register an E9WIN account with your name, Malaysian mobile number, username, and password.",
  path: "/register",
  index: false,
});

export default function RegisterPage() {
  return (
    <div className="container page-hero">
      <p className="kicker">E9WIN register</p>
      <h1>Register</h1>
      <p>Adults only. Use a name and mobile number you can match to a withdrawal account. The form stays in your browser until you continue to the player portal.</p>
      <AuthForm mode="register" />
      <p>By continuing you agree to the <Link href="/terms">terms</Link> and <Link href="/privacy">privacy notes</Link>. Already registered? <Link href="/login">Login</Link>.</p>
    </div>
  );
}
