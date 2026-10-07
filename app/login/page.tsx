import { LoginView } from "@/components/views/LoginView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("login", "en");

export default function LoginPage() {
  return <LoginView locale="en" />;
}
