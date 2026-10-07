import { PromotionsView } from "@/components/views/PromotionsView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("promotions", "en");

export default function PromotionsPage() {
  return <PromotionsView locale="en" />;
}
