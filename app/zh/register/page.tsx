import { RegisterView } from "@/components/views/RegisterView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("register", "zh");

export default function ZhRegisterPage() {
  return <RegisterView locale="zh" />;
}
