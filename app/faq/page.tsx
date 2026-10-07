import { FaqView } from "@/components/views/FaqView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("faq", "en");

export default function FaqPage() {
  return <FaqView locale="en" />;
}
