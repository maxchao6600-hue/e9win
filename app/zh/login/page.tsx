import { LoginView } from "@/components/views/LoginView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("login", "zh");

export default function ZhLoginPage() {
  return <LoginView locale="zh" />;
}
