import { PromotionsView } from "@/components/views/PromotionsView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("promotions", "zh");

export default function ZhPromotionsPage() {
  return <PromotionsView locale="zh" />;
}
