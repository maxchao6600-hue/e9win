import { TermsView } from "@/components/views/TermsView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("terms", "zh");

export default function ZhTermsPage() {
  return <TermsView locale="zh" />;
}
