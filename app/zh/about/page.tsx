import { AboutView } from "@/components/views/AboutView";
import { routeMeta } from "@/lib/i18n/routeMeta";

export const metadata = routeMeta("about", "zh");

export default function ZhAboutPage() {
  return <AboutView locale="zh" />;
}
