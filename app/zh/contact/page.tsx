import { ContactView } from "@/components/views/ContactView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("contact", "zh");

export default function ZhContactPage() {
  return <ContactView locale="zh" />;
}
