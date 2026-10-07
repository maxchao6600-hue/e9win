import { PrivacyView } from "@/components/views/PrivacyView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("privacy", "zh");

export default function ZhPrivacyPage() {
  return <PrivacyView locale="zh" />;
}
