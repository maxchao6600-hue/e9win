import { PrivacyView } from "@/components/views/PrivacyView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("privacy", "en");

export default function PrivacyPage() {
  return <PrivacyView locale="en" />;
}
