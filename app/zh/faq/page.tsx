import { FaqView } from "@/components/views/FaqView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("faq", "zh");

export default function ZhFaqPage() {
  return <FaqView locale="zh" />;
}
